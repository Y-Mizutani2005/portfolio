import { getAllWorks } from "@/lib/works";
import { WorkCard } from "@/components/works/WorkCard";

export const metadata = {
    title: "実績 - Yuuki's Portfolio",
    description: "これまでのプロジェクトとポートフォリオ。",
};

export default function WorksPage() {
    const works = getAllWorks(["title", "description", "date", "slug", "technologies", "thumbnail", "links", "featured"]);

    return (
        <div className="w-full max-w-6xl mx-0 px-6 md:px-12 py-10 md:py-16">
            <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight">実績</h1>
                <p className="text-muted-foreground mt-2">
                    これまでに開発したプロジェクトの紹介です。
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {works.length > 0 ? (
                    works.map((work) => <WorkCard key={work.slug} work={work} />)
                ) : (
                    <p className="col-span-full text-center text-muted-foreground py-10">
                        実績が見つかりませんでした。
                    </p>
                )}
            </div>
        </div>
    );
}
