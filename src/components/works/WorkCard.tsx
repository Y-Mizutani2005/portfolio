import Link from 'next/link';
import { Work } from '@/types';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

type Props = {
    work: Work;
};

export function WorkCard({ work }: Props) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all">
            <Link href={`/works/${work.slug}`} className="block hover:opacity-90 transition-opacity">
                <div className="aspect-video w-full bg-muted flex items-center justify-center text-muted-foreground relative overflow-hidden">
                    {/* Placeholder for no image or image load logic */}
                    {work.thumbnail ? (
                        <Image
                            src={work.thumbnail}
                            alt={work.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                        />
                    ) : (
                        <span className="">画像なし</span>
                    )}
                </div>
            </Link>

            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold">
                    <Link href={`/works/${work.slug}`} className="hover:underline">
                        {work.title}
                    </Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{work.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {work.technologies.map(tech => (
                        <span key={tech} className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-4 flex items-center space-x-4">
                    {work.links.github && (
                        <Link href={work.links.github} target="_blank" className="flex items-center text-sm hover:underline">
                            <Github className="mr-1 h-4 w-4" />
                            リポジトリ
                        </Link>
                    )}
                    {work.links.demo && (
                        <Link href={work.links.demo} target="_blank" className="flex items-center text-sm hover:underline">
                            <ExternalLink className="mr-1 h-4 w-4" />
                            デモ
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}
