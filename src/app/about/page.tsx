export default function AboutPage() {
    return (
        <div className="container py-10 md:py-16 mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-8">About Me</h1>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Hello! I&apos;m Yuuki, a software engineer based in Japan.
                    I love building things for the web.
                </p>

                <h2 className="mt-10 mb-4 text-2xl font-bold">Background</h2>
                <p>
                    I am currently a student interested in web development.
                    I started coding to build tools that solve problems.
                </p>

                <h2 className="mt-10 mb-4 text-2xl font-bold">Skills</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
                    <li><strong>Backend:</strong> Node.js, Python</li>
                    <li><strong>Tools:</strong> Git, VS Code, Figma</li>
                </ul>

                <h2 className="mt-10 mb-4 text-2xl font-bold">Interests</h2>
                <p>
                    Besides coding, I enjoy playing video games and exploring new restaurants.
                </p>

                <h2 className="mt-10 mb-4 text-2xl font-bold">Contact</h2>
                <p>
                    Feel free to reach out to me via <a href="https://twitter.com" className="text-primary hover:underline">Twitter</a> or check my code on <a href="https://github.com" className="text-primary hover:underline">GitHub</a>.
                </p>
            </div>
        </div>
    );
}
