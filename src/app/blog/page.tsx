import { getAllPosts } from "@/lib/posts";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata = {
    title: "ブログ - Yuuki's Portfolio",
    description: "技術的な記事や日々の更新。",
};

export default function BlogPage() {
    const posts = getAllPosts(["title", "date", "slug", "excerpt", "tags", "category"]);

    return (
        <div className="w-full max-w-6xl mx-0 px-6 md:px-12 py-10 md:py-16">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 mb-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight">ブログ</h1>
                    <p className="text-muted-foreground mt-2">
                        日々の学びや経験を共有します。
                    </p>
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.length > 0 ? (
                    posts.map((post) => <BlogCard key={post.slug} post={post} />)
                ) : (
                    <p className="col-span-full text-center text-muted-foreground py-10">
                        記事が見つかりませんでした。
                    </p>
                )}
            </div>
        </div>
    );
}
