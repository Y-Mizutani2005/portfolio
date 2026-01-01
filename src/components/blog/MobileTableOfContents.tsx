'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { List, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type Heading = {
    text: string;
    id: string;
    level: number;
};

type MobileTableOfContentsProps = {
    headings: Heading[];
};

export function MobileTableOfContents({ headings }: MobileTableOfContentsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('');

    // Active heading observer (same logic as TableOfContents but optimized)
    useEffect(() => {
        if (!isOpen) return; // Only observe when open to save resources

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0% 0% -80% 0%' }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            headings.forEach((heading) => {
                const element = document.getElementById(heading.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [headings, isOpen]);

    // Close on click outside (optional, but good UX)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isOpen && !target.closest('.mobile-toc-container')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    if (headings.length === 0) return null;

    return (
        <div className="mobile-toc-container lg:hidden">
            {/* Trigger Button - Tab style on top right */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed top-24 right-0 z-50 flex items-center gap-2",
                    "bg-slate-800/90 text-white backdrop-blur-sm",
                    "rounded-l-lg pl-3 pr-2 py-2.5 shadow-md",
                    "border-l border-t border-b border-slate-700/50",
                    "transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-full" : "translate-x-0" // Hide trigger when open
                )}
                aria-label="Table of Contents"
            >
                <List className="h-5 w-5" />
                <span className="text-xs font-medium writing-mode-vertical hidden">目次</span>
            </button>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-[1px]"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Content Drawer - Slides from right */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                        className={cn(
                            "fixed top-24 right-0 z-50",
                            "w-72 max-w-[85vw] max-h-[70vh] overflow-y-auto",
                            "bg-slate-900 text-slate-100",
                            "rounded-l-xl shadow-2xl border-l border-t border-b border-slate-700",
                            "flex flex-col"
                        )}
                    >
                        <div className="flex items-center justify-between px-4 py-1.5 border-b border-slate-800 sticky top-0 bg-slate-900/95 backdrop-blur z-10">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">目次</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-slate-800 rounded-full transition-colors"
                            >
                                <X className="h-4 w-4 text-slate-400" />
                            </button>
                        </div>

                        <div className="p-4 pt-2">
                            <ul className="space-y-1 text-sm list-none">
                                {headings.map((heading) => (
                                    <li
                                        key={heading.id}
                                        className={cn(
                                            'transition-colors',
                                            // Active State: Background + Left Border
                                            activeId === heading.id
                                                ? 'bg-primary/10 border-l-4 border-primary text-primary font-medium'
                                                : 'text-slate-400 hover:text-slate-200 border-l-4 border-transparent hover:bg-slate-800/50'
                                        )}
                                    >
                                        <a
                                            href={`#${heading.id}`}
                                            className={cn(
                                                "block py-2 pr-4 leading-relaxed",
                                                // Indentation inside the block
                                                heading.level === 3 ? "pl-6" : "pl-4"
                                            )}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById(heading.id)?.scrollIntoView({
                                                    behavior: 'smooth',
                                                });
                                                setIsOpen(false);
                                            }}
                                        >
                                            {heading.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
