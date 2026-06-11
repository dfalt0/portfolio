"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  cloneElement,
  type SVGProps,
} from "react";
import { ActivityCalendar } from "react-activity-calendar";
import type { Activity, BlockElement } from "react-activity-calendar";
import { Github } from "lucide-react";
import { GITHUB_USERNAME } from "@/lib/site-data";
import { LazyMount } from "@/components/shared/lazy-mount";
import { useTheme } from "@/lib/theme-context";

const CONTRIBUTIONS_API = "https://github-contributions-api.jogruber.de/v4/";

async function fetchContributionActivities(
  username: string
): Promise<Activity[]> {
  const response = await fetch(`${CONTRIBUTIONS_API}${username}?y=last`);
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(
      typeof payload.error === "string"
        ? payload.error
        : `Failed to load contributions for ${username}`
    );
  }
  return payload.contributions as Activity[];
}

/** GitHub.com light contribution palette (empty → highest activity). */
export const GITHUB_LIGHT_COLORS = [
  "#ebedf0",
  "#9be9a8",
  "#40c463",
  "#30a14b",
  "#216e39",
] as const;

/** Softer greens for the Apple aesthetic on light backgrounds. */
export const APPLE_LIGHT_COLORS = [
  "#ebecef",
  "#b8e8c4",
  "#5dd38a",
  "#34b36e",
  "#1f8f55",
] as const;

/** Softer greens for the Apple aesthetic on dark backgrounds. */
export const APPLE_DARK_COLORS = [
  "#161b22",
  "#0f3d24",
  "#1a6b3c",
  "#2ea043",
  "#3ddc6e",
] as const;

/** GitHub.com dark contribution palette (empty → highest activity). */
export const GITHUB_DARK_COLORS = [
  "#161b22",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
] as const;

type GitHubContributionsProps = {
  username?: string;
  variant?: "classic" | "apple";
};

function formatContributionDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function findCalendarRect(target: EventTarget | null): SVGRectElement | null {
  if (!(target instanceof Element)) return null;
  const tag = target.tagName.toLowerCase();
  if (tag === "rect") return target as SVGRectElement;
  return target.closest("rect[data-date]");
}

export function GitHubContributions({
  username = GITHUB_USERNAME,
  variant = "classic",
}: GitHubContributionsProps) {
  const { theme: portfolioTheme, colorScheme } = useTheme();
  const isLightScheme = portfolioTheme === "apple" && colorScheme === "light";
  const lightPalette =
    variant === "apple" ? APPLE_LIGHT_COLORS : GITHUB_LIGHT_COLORS;
  const darkPalette =
    variant === "apple" ? APPLE_DARK_COLORS : GITHUB_DARK_COLORS;
  const calendarTheme = {
    light: [...lightPalette],
    dark: [...darkPalette],
  };

  const calendarRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastTooltipRef = useRef<string>("");
  const [calendarReady, setCalendarReady] = useState(false);
  const [activities, setActivities] = useState<Activity[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setFetchError(null);
    setActivities(null);

    fetchContributionActivities(username)
      .then((data) => {
        if (!cancelled) setActivities(data);
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setFetchError(
            error instanceof Error ? error.message : "Failed to load contributions"
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  const setCalendarContainerRef = useCallback((node: HTMLDivElement | null) => {
    calendarRef.current = node;
    setCalendarReady(Boolean(node));
  }, []);

  const renderActivityBlock = useCallback(
    (block: BlockElement, activity: Activity) =>
      cloneElement(block, {
        "data-count": String(activity.count),
      } as SVGProps<SVGRectElement>),
    []
  );

  useEffect(() => {
    const calendarContainer = calendarRef.current;
    const tooltipEl = tooltipRef.current;
    if (!calendarReady || !calendarContainer || !tooltipEl) return;

    let pendingEvent: MouseEvent | null = null;

    const showTooltip = (count: number, date: string, clientX: number, clientY: number) => {
      const key = `${count}-${date}`;
      tooltipEl.style.left = `${clientX + 10}px`;
      tooltipEl.style.top = `${clientY - 10}px`;
      tooltipEl.style.visibility = "visible";
      tooltipEl.style.opacity = "1";

      if (key !== lastTooltipRef.current) {
        lastTooltipRef.current = key;
        tooltipEl.innerHTML = `
          <div class="font-semibold text-foreground">${count} contribution${count !== 1 ? "s" : ""}</div>
          <div class="text-xs text-muted-foreground mt-1">${date}</div>
        `;
      }
    };

    const hideTooltip = () => {
      tooltipEl.style.visibility = "hidden";
      tooltipEl.style.opacity = "0";
      lastTooltipRef.current = "";
    };

    const flushTooltip = () => {
      rafRef.current = null;
      const e = pendingEvent;
      pendingEvent = null;
      if (!e) return;

      const rect = findCalendarRect(e.target);
      if (!rect) {
        if (lastTooltipRef.current !== "") hideTooltip();
        return;
      }

      const dateAttr = rect.getAttribute("data-date");
      if (!dateAttr) {
        hideTooltip();
        return;
      }

      const count = Number.parseInt(rect.getAttribute("data-count") ?? "0", 10);
      showTooltip(
        Number.isNaN(count) ? 0 : count,
        formatContributionDate(dateAttr),
        e.clientX,
        e.clientY
      );
    };

    const updateTooltip = (e: MouseEvent) => {
      pendingEvent = e;
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(flushTooltip);
    };

    calendarContainer.addEventListener("mousemove", updateTooltip);
    calendarContainer.addEventListener("mouseleave", hideTooltip);

    return () => {
      calendarContainer.removeEventListener("mousemove", updateTooltip);
      calendarContainer.removeEventListener("mouseleave", hideTooltip);
      pendingEvent = null;
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [calendarReady]);

  const cardClass =
    variant === "apple"
      ? "bg-card/60 border border-border rounded-2xl p-4 overflow-x-auto relative"
      : "bg-card border border-border rounded-lg p-4 overflow-x-auto relative";

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3
            className={
              variant === "apple"
                ? "text-base font-medium tracking-tight mb-0.5"
                : "text-lg font-semibold mb-1"
            }
          >
            GitHub Contributions
          </h3>
          <p className="text-sm text-muted-foreground">
            My coding activity throughout the year
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

      <LazyMount minHeight="120px">
        <div ref={setCalendarContainerRef} className={cardClass}>
          <div className="github-contributions-calendar text-muted-foreground">
            {fetchError ? (
              <p className="text-sm text-muted-foreground py-6 text-center">
                {fetchError}
              </p>
            ) : (
              <ActivityCalendar
                data={activities ?? []}
                loading={loading || activities === null}
                colorScheme={isLightScheme ? "light" : "dark"}
                theme={calendarTheme}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
                renderBlock={renderActivityBlock}
                maxLevel={4}
              />
            )}
          </div>
          <div
            ref={tooltipRef}
            className="fixed z-50 px-3 py-2 bg-popover border border-border rounded-md shadow-lg pointer-events-none text-sm"
            style={{
              transform: "translateY(-100%)",
              visibility: "hidden",
              opacity: 0,
            }}
          />
        </div>
      </LazyMount>
    </div>
  );
}
