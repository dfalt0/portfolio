"use client";

import { useEffect, useState, useRef } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Github } from "lucide-react";

interface GitHubContributionsProps {
  username: string;
}

export function GitHubContributions({ username }: GitHubContributionsProps) {
  const [tooltip, setTooltip] = useState<{ date: string; count: number; x: number; y: number } | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the hovered element is a calendar day (rect element in SVG)
      if (target.tagName === 'rect' || target.closest('rect')) {
        const rect = target.tagName === 'rect' ? target : target.closest('rect') as SVGRectElement;
        
        // Try to get data from data-level or aria-label attributes
        const level = rect.getAttribute('data-level');
        const ariaLabel = rect.getAttribute('aria-label');
        const dateAttr = rect.getAttribute('data-date');
        
        if (ariaLabel || dateAttr) {
          // Parse the aria-label which typically contains: "Date: contributions"
          let date = dateAttr || '';
          let count = 0;
          
          if (ariaLabel) {
            const match = ariaLabel.match(/(\d+)\s+contribution/i);
            if (match) {
              count = parseInt(match[1], 10);
            }
            
            // Try to extract date from aria-label
            const dateMatch = ariaLabel.match(/(\w+,\s+\w+\s+\d+,\s+\d{4})/);
            if (dateMatch) {
              date = dateMatch[1];
            } else if (!date && ariaLabel.includes('on')) {
              // Fallback: try to extract date from "X contributions on Date"
              const parts = ariaLabel.split(' on ');
              if (parts.length > 1) {
                date = parts[1];
              }
            }
          }
          
          // If we have date or count info, show tooltip
          if (date || count > 0 || level) {
            setTooltip({
              date: date || 'Unknown date',
              count: count || (level ? parseInt(level, 10) : 0),
              x: e.clientX + 10,
              y: e.clientY - 10,
            });
            return;
          }
        }
      }
      
      // Hide tooltip if not hovering over a calendar day
      setTooltip(null);
    };

    const handleMouseLeave = () => {
      setTooltip(null);
    };

    const calendarContainer = calendarRef.current;
    if (calendarContainer) {
      calendarContainer.addEventListener('mousemove', handleMouseMove);
      calendarContainer.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        calendarContainer.removeEventListener('mousemove', handleMouseMove);
        calendarContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
      }
    } catch {
      // If date parsing fails, return as-is
    }
    return dateString;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1">GitHub Contributions</h3>
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

      <div 
        ref={calendarRef}
        className="bg-card border border-border rounded-lg p-4 overflow-x-auto relative"
      >
        <GitHubCalendar username={username} />
        
        {tooltip && (
          <div
            className="fixed z-50 px-3 py-2 bg-popover border border-border rounded-md shadow-lg pointer-events-none text-sm"
            style={{
              left: `${tooltip.x}px`,
              top: `${tooltip.y}px`,
              transform: 'translateY(-100%)',
            }}
          >
            <div className="font-semibold text-foreground">
              {tooltip.count} contribution{tooltip.count !== 1 ? 's' : ''}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {formatDate(tooltip.date)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

