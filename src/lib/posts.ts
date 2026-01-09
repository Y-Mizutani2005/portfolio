import { getPostSlugs, getPostBySlug } from './markdown';
import { BlogPost } from '@/types';

export function getAllPosts(fields: string[] = []): BlogPost[] {
    const slugs = getPostSlugs('blog');
    // Ensure 'hidden' is fetched to perform filtering
    const fieldsToFetch = [...new Set([...fields, 'hidden'])];
    const posts = slugs
        .map((slug) => getPostBySlug('blog', slug, fieldsToFetch) as unknown as BlogPost)
        .filter((post) => !(post as any).hidden) // Filter out hidden posts
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getPost(slug: string, fields: string[] = []): BlogPost {
    return getPostBySlug('blog', slug, fields) as unknown as BlogPost;
}
