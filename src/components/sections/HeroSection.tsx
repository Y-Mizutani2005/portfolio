"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { GlossyCard } from "@/components/ui/GlossyCard";
import { Icons } from "@/components/ui/Icons";
import { GitHubCalendar } from "./GitHubCalendar";

export interface HeroSectionProps {
    latestPost: {
        title: string;
        slug: string;
        date: string;
        description?: string;
        excerpt?: string;
        tags?: string[];
    } | null;
    recommendedPost: {
        title: string;
        slug: string;
        date: string;
        description?: string;
        excerpt?: string;
    } | null;
    latestWork: {
        title: string;
        slug: string;
        date: string;
        description?: string;
        thumbnail?: string;
        technologies?: string[];
    } | null;
    recommendedWork: {
        title: string;
        slug: string;
        date: string;
        description?: string;
        thumbnail?: string;
    } | null;
}

export function HeroSection({ latestPost, latestWork, recommendedWork }: HeroSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full max-w-6xl mx-auto px-4 py-12"
            style={{
                "--mouse-x": `${mousePosition.x}px`,
                "--mouse-y": `${mousePosition.y}px`,
            } as React.CSSProperties}
        >
            {/* Background Glow Effect */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
                <div className="glow-effect absolute inset-0 opacity-100 transition-opacity duration-300" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">

                {/* Row 1 & 2 */}

                {/* Recommended Work Focus - Large (2x2) with Background Image */}
                <GlossyCard
                    className="md:col-span-6 md:row-span-2 flex flex-col justify-end p-0 overflow-hidden relative group cursor-pointer"
                >
                    {/* Background Image Layer */}
                    {recommendedWork?.thumbnail && (
                        <div
                            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 z-0"
                            style={{
                                backgroundImage: `url(${recommendedWork.thumbnail})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    )}

                    <Link href={recommendedWork ? `/works/${recommendedWork.slug}` : "/works"} className="absolute inset-0 z-30" />

                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 transition-opacity duration-300 group-hover:via-black/60" />

                    <div className="relative z-20 p-8 space-y-2">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                                </div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-400">Recommended Works</h3>
                            </div>
                            {recommendedWork && <span className="text-xs text-white/80 bg-black/30 px-2 py-1 rounded-full">{recommendedWork.date}</span>}
                        </div>

                        {recommendedWork ? (
                            <>
                                <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-1">
                                    {recommendedWork.title}
                                </h2>
                                {recommendedWork.description && (
                                    <p className="text-sm text-gray-300 line-clamp-2">
                                        {recommendedWork.description}
                                    </p>
                                )}
                            </>
                        ) : (
                            <p className="text-xl font-medium text-white">
                                Check out my portfolio
                            </p>
                        )}
                    </div>
                </GlossyCard>

                {/* Main Profile Card - (2x1) */}
                <GlossyCard className="md:col-span-6 md:row-span-1 flex flex-col justify-between p-6">
                    <div className="flex items-center gap-4">
                        <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20 shrink-0">
                            {/* Placeholder for Profile Image */}
                            <div className="h-full w-full bg-slate-800 flex items-center justify-center">
                                <Icons.user className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-white line-clamp-1">Yuki Mizutani</h1>
                            <p className="text-primary font-medium text-sm">AI / Web / Automation Engineer</p>
                        </div>
                    </div>
                    <div className="mt-4 space-y-3">
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                            AI / LLM、実利用Webサービス、業務自動化を、課題整理から実装・運用までつなげます。学生団体代表として組織運営も担っています。
                        </p>
                        <div className="flex justify-end">
                            <Link href="/about" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group/link">
                                About Me
                                <Icons.arrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </GlossyCard>


                {/* Current Focus - Small (1x1) */}
                {latestWork ? (
                    <GlossyCard className="md:col-span-3 flex flex-col justify-between group cursor-pointer hover:border-green-400/50 transition-colors p-6">
                        <Link href={`/works/${latestWork.slug}`} className="h-full flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-green-400">Current Focus</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-white line-clamp-2 group-hover:text-green-400 transition-colors leading-tight">
                                        {latestWork.title}
                                    </h3>
                                    {latestWork.description && (
                                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                            {latestWork.description}
                                        </p>
                                    )}
                                    {latestWork.technologies && latestWork.technologies.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {latestWork.technologies.slice(0, 3).map((tech) => (
                                                <span key={tech} className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-gray-400 border border-white/5">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded-full">{latestWork.date}</span>
                                <Icons.arrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                            </div>
                        </Link>
                    </GlossyCard>
                ) : (
                    <GlossyCard className="md:col-span-3 flex items-center justify-center text-muted-foreground text-sm">
                        More works coming soon
                    </GlossyCard>
                )}


                {/* Qiita - (1x1) */}
                <GlossyCard className="md:col-span-3 flex flex-col justify-between group cursor-pointer hover:border-green-400/50 transition-colors p-6 relative overflow-hidden">
                    <Icons.code className="absolute -bottom-4 -right-4 h-24 w-24 text-white/5 z-0 group-hover:text-white/10 transition-colors pointer-events-none" />
                    <Link href="https://qiita.com/Yuki_Mizu" target="_blank" className="h-full flex flex-col justify-between relative z-10">
                        <div className="flex justify-between items-start">
                            <Icons.code className="h-8 w-8 text-muted-foreground group-hover:text-green-400 transition-colors" />
                            <Icons.external className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div>
                            <p className="font-semibold text-white">Qiita</p>
                            <p className="text-xs text-muted-foreground">@Yuki_Mizu</p>
                        </div>
                    </Link>
                </GlossyCard>

                {/* Tech Stack - (2x1) */}
                <GlossyCard className="md:col-span-6 flex flex-col justify-between p-6">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <Icons.stack className="h-5 w-5 text-primary" /> Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "LLM", "Azure", "Next.js", "TypeScript", "WordPress", "Google Apps Script", "Tailwind CSS", "GitHub"].map((tech) => (
                                <div key={tech} className="bg-white/5 rounded-full px-3 py-1 text-center text-xs font-medium text-muted-foreground hover:bg-white/10 hover:text-white transition-colors cursor-default">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <Link href="/works" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group/link">
                            View Works
                            <Icons.arrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                    </div>
                </GlossyCard>

                {/* Latest Blog Post - (2x1) */}
                <GlossyCard className="md:col-span-6 flex flex-row items-center justify-between group cursor-pointer p-6">
                    <Link href={latestPost ? `/blog/${latestPost.slug}` : "/blog"} className="flex-1 flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="flex items-center justify-between mr-4">
                                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                                    <Icons.blog className="h-3 w-3" /> Latest Post
                                </div>
                                {latestPost && <span className="text-xs text-muted-foreground">{latestPost.date}</span>}
                            </div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors line-clamp-1">
                                {latestPost ? latestPost.title : "Read my latest thoughts"}
                            </h3>
                            {latestPost && (latestPost.description || latestPost.excerpt) && (
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {latestPost.description || latestPost.excerpt}
                                </p>
                            )}
                            {latestPost && latestPost.tags && latestPost.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {latestPost.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="text-xs text-primary/80 bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="ml-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                            <Icons.arrowRight className="h-5 w-5" />
                        </div>
                    </Link>
                </GlossyCard>

                {/* GitHub Link - (1x1) */}
                <GlossyCard className="md:col-span-2 flex flex-col justify-between group cursor-pointer hover:border-primary/50 transition-colors p-6 relative overflow-hidden">
                    <Icons.github className="absolute -bottom-4 -right-4 h-24 w-24 text-white/5 z-0 group-hover:text-white/10 transition-colors pointer-events-none" />
                    <Link href="https://github.com/Y-Mizutani2005" target="_blank" className="h-full flex flex-col justify-between relative z-10">
                        <div className="flex justify-between items-start">
                            <Icons.github className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                            <Icons.external className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div>
                            <p className="font-semibold text-white">GitHub</p>
                            <p className="text-xs text-muted-foreground">@Y-Mizutani2005</p>
                        </div>
                    </Link>
                </GlossyCard>

                {/* GitHub Contribution Graph - Wide (3x1) */}
                <GitHubCalendar className="md:col-span-10" />

            </div>
        </section>
    );
}
