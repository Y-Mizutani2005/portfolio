'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Heading = {
    text: string;
    id: string;
    level: number;
};

type TableOfContentsProps = {
    headings: Heading[];
    variant?: 'default' | 'mobile';
};

export function TableOfContents({ headings, variant = 'default' }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        if (variant === 'mobile') return; // Disable observer for mobile to prevent unnecessary calculations

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
    }, [headings, variant]);

    if (headings.length === 0) {
        return null;
    }

    return (
        <nav className="toc-container">
            <h2 className={cn(
                "text-sm font-bold mb-4 uppercase tracking-wider pl-4",
                variant === 'mobile' ? "text-primary" : "text-muted-foreground"
            )}>
                目次
            </h2>
            <ul className="space-y-1 text-sm">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        className={cn(
                            'relative transition-colors hover:text-foreground',
                            variant === 'default' && 'border-l-2',
                            heading.level === 3 && 'ml-4',
                            variant === 'default' && activeId === heading.id
                                ? 'border-primary text-primary font-medium bg-primary/5'
                                : 'border-transparent text-muted-foreground',
                            variant === 'default' && 'hover:border-muted-foreground/50'
                        )}
                    >
                        <a
                            href={`#${heading.id}`}
                            className="block py-1.5 pl-4"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: 'smooth',
                                });
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
