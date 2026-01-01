import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import remarkDirective from 'remark-directive';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';
import { visit } from 'unist-util-visit';

const contentDirectory = path.join(process.cwd(), 'content');

export function getPostSlugs(type: 'blog' | 'works') {
    const dir = path.join(contentDirectory, type);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter((file) => file.endsWith('.md'));
}

export function getPostBySlug(type: 'blog' | 'works', slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, type, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`File not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string | string[] | boolean | undefined;
    };

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(type: 'blog' | 'works', fields: string[] = []) {
    const slugs = getPostSlugs(type);

    // Ensure 'hidden' is fetched to perform filtering
    const fieldsToFetch = [...new Set([...fields, 'hidden'])];

    const posts = slugs
        .map((slug) => getPostBySlug(type, slug, fieldsToFetch))
        .filter((post) => !post.hidden) // Filter out hidden posts
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

// Custom plugin to handle directives
function remarkCustomDirectives() {
    return (tree: any) => {
        visit(tree, (node) => {
            if (
                node.type === 'textDirective' ||
                node.type === 'leafDirective' ||
                node.type === 'containerDirective'
            ) {
                const data = node.data || (node.data = {});
                const attributes = node.attributes || {};
                const name = node.name;

                if (name === 'red') {
                    data.hName = 'span';
                    data.hProperties = { className: 'highlight-red', ...attributes };
                } else if (name === 'blue') {
                    data.hName = 'span';
                    data.hProperties = { className: 'highlight-blue', ...attributes };
                } else if (name === 'u') {
                    data.hName = 'span';
                    data.hProperties = { className: 'underline underline-offset-4', ...attributes };
                } else if (name === 'note') {
                    data.hName = 'div';
                    data.hProperties = { className: 'bg-muted p-4 rounded-lg border-l-4 border-primary my-4', ...attributes };
                }
            }
        });
    };
}

export async function markdownToHtml(markdown: string) {
    const result = await remark()
        .use(remarkGfm)
        .use(remarkDirective)
        .use(remarkCustomDirectives)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypePrism, { showLineNumbers: true })
        .use(rehypeStringify)
        .process(markdown);
    return result.toString();
}

export function getHeadings(content: string) {
    const slugger = new GithubSlugger();
    const headings: { text: string; id: string; level: number }[] = [];

    // Use remark to parse the markdown content
    const processor = remark().use(remarkGfm);
    const tree = processor.parse(content);

    visit(tree, 'heading', (node: any) => {
        const text = getTextFromNode(node);
        const id = slugger.slug(text);
        const level = node.depth;

        // Only include h1-h3 to match previous behavior
        if (level >= 1 && level <= 3) {
            headings.push({ text, id, level });
        }
    });

    return headings;
}

// Helper to extract text from a node recursively
function getTextFromNode(node: any): string {
    if (node.type === 'text' || node.type === 'inlineCode') {
        return node.value || '';
    }
    if (node.children && node.children.length > 0) {
        return node.children.map((child: any) => getTextFromNode(child)).join('');
    }
    return '';
}
