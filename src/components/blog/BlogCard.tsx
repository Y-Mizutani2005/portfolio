import Link from 'next/link';
import { BlogPost } from '@/types';
import { format } from 'date-fns';

type Props = {
    post: BlogPost;
};

export function BlogCard({ post }: Props) {
    return (
        <article className="group relative flex flex-col space-y-2 rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
                <time dateTime={post.date}>{format(new Date(post.date), 'yyyy.MM.dd')}</time>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {post.category}
                </span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">
                <Link href={`/blog/${post.slug}`} className="hover:underline focus:underline">
                    <span className="absolute inset-0 z-10" />
                    {post.title}
                </Link>
            </h2>
            <p className="line-clamp-2 text-muted-foreground">
                {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-secondary-foreground transition-colors hover:bg-secondary">
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}
