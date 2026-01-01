import { getPostSlugs, getPostBySlug } from './markdown';
import { Work } from '@/types';

export function getAllWorks(fields: string[] = []): Work[] {
    const slugs = getPostSlugs('works');
    const works = slugs
        .map((slug) => getPostBySlug('works', slug, fields) as unknown as Work)
        .sort((work1, work2) => (work1.date > work2.date ? -1 : 1));
    return works;
}
