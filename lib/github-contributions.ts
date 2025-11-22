export interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

const CONTRIBUTION_COLORS = [
  '#161b22', // No contributions
  '#0e4429', // 1-9 contributions
  '#006d32', // 10-19 contributions
  '#26a641', // 20-29 contributions
  '#39d353', // 30+ contributions
];

export function getContributionColor(count: number): string {
  if (count === 0) return CONTRIBUTION_COLORS[0];
  if (count < 10) return CONTRIBUTION_COLORS[1];
  if (count < 20) return CONTRIBUTION_COLORS[2];
  if (count < 30) return CONTRIBUTION_COLORS[3];
  return CONTRIBUTION_COLORS[4];
}

export async function fetchGitHubContributions(
  username: string,
  year?: number
): Promise<ContributionWeek[]> {
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  
  if (!GITHUB_TOKEN) {
    console.warn("No GitHub token found. Using mock data.");
    return generateMockContributions(year);
  }

  const targetYear = year || new Date().getFullYear();
  const CACHE_KEY = `github-contributions-${username}-${targetYear}`;
  const CACHE_TTL = 3600; // 1 hour

  // Check cache
  if (typeof window !== 'undefined') {
    const cachedData = getCachedData(CACHE_KEY);
    if (cachedData) {
      return cachedData.value;
    }
  }

  try {
    const startDate = new Date(targetYear, 0, 1); // January 1st of the year
    const endDate = new Date(targetYear, 11, 31, 23, 59, 59); // December 31st of the year

    const query = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          username,
          from: startDate.toISOString(),
          to: endDate.toISOString(),
        },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    const weeks = data.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
    
    const formattedWeeks: ContributionWeek[] = weeks.map((week: any) => ({
      contributionDays: week.contributionDays.map((day: any) => ({
        date: day.date,
        contributionCount: day.contributionCount,
        color: getContributionColor(day.contributionCount),
      })),
    }));

    // Cache the data
    if (typeof window !== 'undefined') {
      setCachedData(CACHE_KEY, formattedWeeks, CACHE_TTL);
    }

    return formattedWeeks;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return generateMockContributions();
  }
}

function generateMockContributions(year?: number): ContributionWeek[] {
  const weeks: ContributionWeek[] = [];
  const targetYear = year || new Date().getFullYear();
  const startDate = new Date(targetYear, 0, 1); // January 1st
  const endDate = new Date(targetYear, 11, 31); // December 31st
  const today = new Date();

  let currentDate = new Date(startDate);
  let week: ContributionDay[] = [];
  const maxDate = endDate > today ? today : endDate;

  while (currentDate <= maxDate) {
    const contributionCount = Math.floor(Math.random() * 10);
    week.push({
      date: currentDate.toISOString().split('T')[0],
      contributionCount,
      color: getContributionColor(contributionCount),
    });

    if (week.length === 7 || currentDate.getDay() === 6) {
      weeks.push({ contributionDays: week });
      week = [];
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (week.length > 0) {
    weeks.push({ contributionDays: week });
  }

  return weeks;
}

function setCachedData(key: string, value: any, ttl: number) {
  if (typeof window === 'undefined') return;
  
  const item = {
    value,
    timestamp: Date.now(),
    ttl: ttl * 1000,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getCachedData(key: string) {
  if (typeof window === 'undefined') return null;
  
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;

    const parsedItem = JSON.parse(item);
    const now = Date.now();

    if (now - parsedItem.timestamp > parsedItem.ttl) {
      localStorage.removeItem(key);
      return null;
    }

    return parsedItem;
  } catch {
    return null;
  }
}

