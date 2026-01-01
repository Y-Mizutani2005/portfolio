"use client";

import React, { useEffect, useState } from "react";
import { ActivityCalendar, Activity } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { GlossyCard } from "../ui/GlossyCard";
import { Icons } from "../ui/Icons";
import { cn } from "@/lib/utils";

export function GitHubCalendar({ className }: { className?: string }) {
    const { theme } = useTheme();
    const [data, setData] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Using a public proxy for GitHub contributions
                // You can change 'Y-Mizutani2005' to any username
                const username = "Y-Mizutani2005";
                const year = new Date().getFullYear();
                const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`);
                const json = await response.json();

                if (json.contributions && json.contributions.length > 0) {
                    setData(json.contributions);
                } else {
                    // Fallback for empty data (e.g. new year with no commits yet)
                    // Generate empty data for the current year
                    const startDate = new Date(`${year}-01-01`);
                    const endDate = new Date(`${year}-12-31`);
                    const emptyData: Activity[] = [];

                    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
                        emptyData.push({
                            date: d.toISOString().split('T')[0],
                            count: 0,
                            level: 0
                        });
                    }
                    setData(emptyData);
                }
            } catch (error) {
                console.error("Failed to fetch GitHub contributions:", error);
                // Fallback on error too
                const year = new Date().getFullYear();
                const startDate = new Date(`${year}-01-01`);
                const endDate = new Date(`${year}-12-31`);
                const emptyData: Activity[] = [];
                for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
                    emptyData.push({
                        date: d.toISOString().split('T')[0],
                        count: 0,
                        level: 0
                    });
                }
                setData(emptyData);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <GlossyCard className={cn("md:col-span-4 p-6 min-h-[200px] flex items-center justify-center", className)}>
                <div className="animate-pulse flex flex-col items-center gap-4 opacity-50">
                    <Icons.github className="h-8 w-8" />
                    <span className="text-sm">Loading contributions...</span>
                </div>
            </GlossyCard>
        );
    }

    return (
        <GlossyCard className={cn("md:col-span-4 p-6 flex flex-col gap-4", className)}>
            <div className="flex items-center gap-2 mb-2">
                <Icons.github className="h-5 w-5 text-white" />
                <h3 className="text-lg font-semibold text-white">GitHub Contributions</h3>
            </div>
            <div className="w-full overflow-x-auto pb-2">
                <ActivityCalendar
                    data={data}
                    blockSize={12}
                    blockMargin={4}
                    fontSize={14}
                    theme={{
                        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    }}
                    colorScheme={theme === 'dark' ? 'dark' : 'light'}
                    labels={{
                        totalCount: '{{count}} contributions in the last year',
                    }}
                />
            </div>
        </GlossyCard>
    );
}
