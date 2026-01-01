import { cn } from "@/lib/utils";
import React from "react";

interface GlossyCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const GlossyCard = React.forwardRef<HTMLDivElement, GlossyCardProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10 hover:shadow-lg dark:border-white/5 dark:bg-black/20 dark:hover:bg-black/30",
                    className
                )}
                {...props}
            >
                {/* Optional: Inner subtle gradient for more depth */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity hover:opacity-100" />
                {children}
            </div>
        );
    }
);

GlossyCard.displayName = "GlossyCard";
