import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/Icons";

const navItems = [
    { name: "Home", href: "/", icon: Icons.home },
    { name: "About", href: "/about", icon: Icons.user },
    { name: "Blog", href: "/blog", icon: Icons.blog },
    { name: "Works", href: "/works", icon: Icons.works },
];

export function Header() {
    return (
        <header className="w-full border-b border-white/5 bg-transparent pt-4 mb-8">
            <div className="container mx-auto px-4 flex h-14 items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Icons.terminal className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-bold hidden sm:inline-block tracking-tight">Yuki.dev</span>
                    </Link>
                </div>

                <nav className="flex items-center space-x-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "p-2 rounded-md transition-colors hover:bg-white/5 hover:text-primary text-muted-foreground",
                                    "flex items-center gap-2"
                                )}
                                title={item.name}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="sr-only md:not-sr-only md:text-sm md:font-medium">{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </header>
    );
}
