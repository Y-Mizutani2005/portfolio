import { getPostBySlug, getPostSlugs, markdownToHtml, getHeadings } from "@/lib/markdown";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import { TableOfContents } from "@/components/blog/TableOfContents";
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
        post = getPostBySlug("works", slug, ["title", "description", "date", "slug"]);
    } catch {
        return {
            title: "Work Not Found",
        };
    }

    const title = post.title as string;
    const description = (post.description as string) || siteConfig.description;
    const ogImage = `${siteConfig.url}/api/og?title=${encodeURIComponent(title)}&type=Work`;

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            type: "article",
            publishedTime: post.date as string,
            url: `${siteConfig.url}/works/${slug}`,
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

import Image from "next/image";

export default async function WorkPage({ params }: Params) {
    const { slug } = await params;

    let post;
    try {
        post = getPostBySlug("works", slug, [
            "title",
            "date",
            "slug",
            "content",
            "technologies",
            "description",
            "links",
            "thumbnail",
        ]);
    } catch (e) {
        notFound();
    }

    const content = await markdownToHtml(post.content as string);
    const headings = getHeadings(post.content as string);
    const links = post.links as { github?: string; demo?: string } | undefined;

    return (
        <div className="container py-10 md:py-16 mx-auto px-4 max-w-5xl">
            <Link
                href="/works"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Works
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-3">
                    <article className="prose prose-neutral dark:prose-invert max-w-none rounded-xl p-6 md:p-10 bg-slate-800 custom-article-prose">
                        <div className="mb-8 border-b border-border pb-8">
                            <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl mb-4 text-foreground">
                                {post.title as string}
                            </h1>

                            <p className="text-xl text-muted-foreground">
                                {post.description as string}
                            </p>
                        </div>

                        {post.thumbnail && (
                            <div className="mb-8 flex justify-center">
                                <div className="rounded-lg overflow-hidden border inline-block">
                                    <Image
                                        src={post.thumbnail as string}
                                        alt={post.title as string}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="w-auto h-auto max-w-full !m-0"
                                        priority
                                        unoptimized
                                    />
                                </div>
                            </div>
                        )}

                        <div
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </article>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Table of Contents */}
                    <div className="hidden lg:block">
                        <TableOfContents headings={headings} />
                    </div>

                    {/* Links */}
                    {links && (
                        <div className="flex flex-col gap-2">
                            {links.demo && (
                                <Link
                                    href={links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                                >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Visit Demo
                                </Link>
                            )}
                            {links.github && (
                                <Link
                                    href={links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    View Code
                                </Link>
                            )}
                        </div>
                    )}

                    {/* Metadata */}
                    <div className="space-y-4 border-t pt-4">
                        <div>
                            <h3 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {(post.technologies as string[]).map((tech) => (
                                    <span key={tech} className="text-xs bg-muted px-2 py-1 rounded-md text-foreground">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-muted-foreground mb-1">Date</h3>
                            <p className="text-sm">{post.date as string}</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
