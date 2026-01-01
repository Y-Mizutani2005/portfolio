import { HeroSection } from "@/components/sections/HeroSection";
import { getAllPosts } from "@/lib/markdown";

export default function Home() {
    const allPosts = getAllPosts("blog", ["title", "date", "slug", "description", "excerpt", "recommended"]);
    const allWorks = getAllPosts("works", ["title", "date", "slug", "description", "thumbnail", "recommended"]);

    type Post = { title: string; slug: string; date: string; description?: string; excerpt?: string; recommended?: boolean };
    type Work = { title: string; slug: string; date: string; description?: string; thumbnail?: string; recommended?: boolean };

    // Work Selection
    // Recommended Focus (2x2): User selected via frontmatter "recommended: true"
    const recommendedWork = (allWorks.find((work: any) => work.recommended) || allWorks[0]) as Work;

    // Current Focus (Small): Latest work. If same as recommended, try 2nd latest if available to show variety.
    // If only 1 work exists, it will duplicate, which is acceptable.
    let latestWork = allWorks[0] as Work;
    if (recommendedWork && latestWork && recommendedWork.slug === latestWork.slug && allWorks.length > 1) {
        latestWork = allWorks[1] as Work;
    }

    // Blog Post Selection
    // Latest Post (2x1): Always the absolute latest post
    const latestPost = allPosts[0] as Post;

    // Recommended Post (2x1): User selected via "recommended: true"
    // If no recommended flag, or if recommended is same as latest, fallback to 2nd latest.
    let recommendedPost = allPosts.find((post: any) => post.recommended) as Post;

    if (!recommendedPost) {
        // Fallback to 2nd latest if validation fails (e.g. no recommended post)
        recommendedPost = (allPosts.length > 1 ? allPosts[1] : allPosts[0]) as Post;
    } else if (recommendedPost.slug === latestPost.slug && allPosts.length > 1) {
        // If recommended is also the latest, try to show the next one for variety
        const nextPost = allPosts.find(p => p.slug !== latestPost.slug);
        if (nextPost) recommendedPost = nextPost as Post;
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center pb-20">
            <HeroSection
                latestPost={latestPost}
                recommendedPost={recommendedPost}
                latestWork={latestWork}
                recommendedWork={recommendedWork}
            />
        </div>
    );
}
