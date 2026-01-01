export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    updated?: string;
    category: 'Tech' | 'Life';
    tags: string[];
    excerpt: string;
    thumbnail?: string;
    draft?: boolean;
    content: string;
}

export interface Work {
    slug: string;
    title: string;
    date: string;
    description: string;
    thumbnail: string;
    technologies: string[];
    links: {
        github?: string;
        demo?: string;
    };
    featured: boolean;
    content: string;
}
