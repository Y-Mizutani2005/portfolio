import { getPostBySlug, getPostSlugs, markdownToHtml, getHeadings } from "@/lib/markdown";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { MobileTableOfContents } from "@/components/blog/MobileTableOfContents";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type Params = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    let post;
    try {
        post = getPostBySlug("blog", slug, ["title", "description", "date", "slug"]);
    } catch {
        return {
            title: "Post Not Found",
        };
    }

    const title = post.title as string;
    const description = (post.description as string) || siteConfig.description;
    const ogImage = `${siteConfig.url}/api/og?title=${encodeURIComponent(title)}&date=${post.date}&type=Blog`;

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            type: "article",
            publishedTime: post.date as string,
            url: `${siteConfig.url}/blog/${slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: [ogImage],
        },
    };
}

export default async function BlogPostPage({ params }: Params) {
    const { slug } = await params;

    let post;
    try {
        post = getPostBySlug("blog", slug, [
            "title",
            "date",
            "slug",
            "content",
            "category",
            "tags",
        ]);
    } catch (e) {
        notFound();
    }

    const content = await markdownToHtml(post.content as string);
    const headings = getHeadings(post.content as string);

    return (
        <div className="container py-10 md:py-16 mx-auto px-4 max-w-7xl flex flex-col items-center">
            <div className="w-full max-w-7xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start justify-center">
                    <main className="min-w-0 w-full">
                        <article className="prose prose-neutral dark:prose-invert max-w-none rounded-xl p-6 md:p-10 bg-slate-800">
                            <div className="mb-8 border-b border-border pb-8">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <time dateTime={post.date as string}>
                                        {format(new Date(post.date as string), "yyyy.MM.dd")}
                                    </time>
                                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                                        {post.category as string}
                                    </span>
                                </div>
                                <h1 className="mb-4 text-3xl font-extrabold tracking-tight lg:text-4xl text-foreground !mb-4">
                                    {post.title as string}
                                </h1>
                                <div className="flex gap-2">
                                    {(post.tags as string[]).map((tag) => (
                                        <span key={tag} className="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground no-underline">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Floating TOC */}
                            <MobileTableOfContents headings={headings} />

                            <div
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        </article>
                    </main>

                    <aside className="hidden lg:block sticky top-24 w-full">
                        <div className="rounded-lg p-4">
                            <TableOfContents headings={headings} />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
