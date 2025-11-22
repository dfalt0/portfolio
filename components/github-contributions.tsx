"use client";

import { useEffect, useState } from "react";
import { fetchGitHubContributions, ContributionWeek, ContributionDay } from "@/lib/github-contributions";
import { Github } from "lucide-react";

interface GitHubContributionsProps {
  username: string;
}

export function GitHubContributions({ username }: GitHubContributionsProps) {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const loadContributions = async () => {
      try {
        setLoading(true);
        const data = await fetchGitHubContributions(username, currentYear);
        setWeeks(data);
        
        // Calculate total contributions
        const total = data.reduce((sum, week) => {
          return sum + week.contributionDays.reduce((daySum, day) => daySum + day.contributionCount, 0);
        }, 0);
        setTotalContributions(total);
      } catch (error) {
        console.error("Failed to load contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    loadContributions();
  }, [username, currentYear]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center justify-center py-12">
          <div className="text-muted-foreground">Loading contributions...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1">GitHub Contributions</h3>
          <p className="text-sm text-muted-foreground">
            {totalContributions.toLocaleString()} contributions in {currentYear}
          </p>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-4 w-4" />
          View Profile
        </a>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
        <div className="flex gap-1 items-start">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.contributionDays.map((day, dayIndex) => (
                <div
                  key={`${day.date}-${dayIndex}`}
                  className="w-3 h-3 rounded-sm cursor-pointer transition-all hover:scale-110 hover:ring-2 hover:ring-primary/50"
                  style={{ backgroundColor: day.contributionCount > 0 ? day.color : '#161b22' }}
                  onMouseEnter={() => setHoveredDay({ date: day.date, count: day.contributionCount })}
                  onMouseLeave={() => setHoveredDay(null)}
                  title={`${formatDate(day.date)}: ${day.contributionCount} contributions`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-4 p-2 bg-muted rounded text-sm text-center min-h-[2.5rem] flex items-center justify-center">
          <div 
          className={`transition-opacity duration-300 ease-in-out ${
            hoveredDay ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {hoveredDay && (
            <>
              <strong>{hoveredDay.count}</strong>{" "}contribution{hoveredDay.count !== 1 ? 's' : ''} on {formatDate(hoveredDay.date)}
            </>
          )}
        </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs">
          <button
            onClick={() => setCurrentYear(prev => prev - 1)}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentYear <= 2020}
            title="Previous year"
          >
            Less
          </button>
          <div className="flex gap-1 items-center">
            {(() => {
              const currentYearDate = new Date().getFullYear();
              const startYear = 2020;
              const currentPage = currentYear - startYear + 1; // 1-based page number (1-5)
              
              // Base colors from darkest to lightest (left to right)
              const baseColors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
              
              return baseColors.map((color, index) => {
                const circlePage = index + 1; // 1-based (1-5)
                const isActivePage = circlePage === currentPage;
                
                if (isActivePage) {
                  // Active page: use full bright color
                  return (
                    <div
                      key={index}
                      className="w-3 h-3 rounded-sm transition-colors duration-300"
                      style={{ backgroundColor: color }}
                    />
                  );
                } else {
                  // Other pages: fade based on distance from active page
                  const distance = Math.abs(circlePage - currentPage);
                  const maxDistance = 4; // Maximum distance (from page 1 to 5)
                  const intensity = Math.max(0.15, 1 - (distance * 0.25)); // Fade more aggressively
                  
                  // Blend the color with gray based on intensity
                  const r = parseInt(color.slice(1, 3), 16);
                  const g = parseInt(color.slice(3, 5), 16);
                  const b = parseInt(color.slice(5, 7), 16);
                  
                  const grayR = 0x16;
                  const grayG = 0x1b;
                  const grayB = 0x22;
                  
                  const blendedR = Math.round(r * intensity + grayR * (1 - intensity));
                  const blendedG = Math.round(g * intensity + grayG * (1 - intensity));
                  const blendedB = Math.round(b * intensity + grayB * (1 - intensity));
                  
                  const blendedColor = `#${blendedR.toString(16).padStart(2, '0')}${blendedG.toString(16).padStart(2, '0')}${blendedB.toString(16).padStart(2, '0')}`;
                  
                  return (
                    <div
                      key={index}
                      className="w-3 h-3 rounded-sm transition-colors duration-300"
                      style={{ backgroundColor: blendedColor }}
                    />
                  );
                }
              });
            })()}
          </div>
          <button
            onClick={() => setCurrentYear(prev => prev + 1)}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentYear >= new Date().getFullYear()}
            title="Next year"
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
}

