import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/markdown';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts('blog', ['slug', 'date']);
    const works = getAllPosts('works', ['slug', 'date']);

    const postsUrls = posts.map((post) => ({
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: new Date(post.date as string),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const worksUrls = works.map((work) => ({
        url: `${siteConfig.url}/works/${work.slug}`,
        lastModified: new Date(work.date as string),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${siteConfig.url}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteConfig.url}/works`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${siteConfig.url}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        ...postsUrls,
        ...worksUrls,
    ];
}
