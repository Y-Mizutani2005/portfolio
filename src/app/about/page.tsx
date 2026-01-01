import Link from "next/link";
import { Github, Mail } from "lucide-react";

const Red = ({ children }: { children: React.ReactNode }) => (
    <span className="highlight-red">{children}</span>
);

export default function AboutPage() {
    return (
        <div className="container py-10 md:py-16 mx-auto px-4 max-w-4xl">
            <article className="prose prose-neutral dark:prose-invert max-w-none rounded-xl p-6 md:p-10 bg-slate-800">
                <h1 className="text-4xl font-bold tracking-tight mb-8">About Me</h1>
                <section>
                    <h2 className="text-3xl font-bold mt-0">Yuki Mizutani</h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        Nanzan University, Economics Department, 3rd year / Data Scientist / System Engineer
                    </p>
                    <p className="leading-relaxed">
                        「ビジネスや社会の課題を、Web・LLM・AIなどのITテクノロジーを用いて、解決の道筋を設計・実装し、実際に解決できるような人間になる」ことを目指して活動しています。
                        大学の活動で身に着けたソフトスキルと、IT・DSによる課題解決力を兼ね備えているのが私の強みです。
                    </p>
                </section>

                <section className="mt-12">
                    <h2>🏛️ Student Life</h2>
                    <p>
                        大学では経済学を専攻しつつ、学生団体の運営にも携わっています。
                    </p>
                    <h3 className="font-bold">Academic (Economics)</h3>
                    <p>
                        ミクロ・マクロ経済学をベースに、統計学や計量経済学を重点的に学んでいます。

                    </p>

                    <h3 className="font-bold mt-6">Student Organization</h3>
                    <p>
                        大学でWebコンテンツで学生支援をする学生団体を立ち上げ、現在副代表を務めています。

                    </p>
                </section>

                <section className="mt-12">
                    <h2>💻 Work & Projects</h2>
                    <p>課題解決を目的にしたモノづくりを行っています。</p>

                    <h3 className="font-bold">Data Science & AI</h3>
                    <p>
                        中部電力関連企業にて、週1回8時間勤務の長期インターンとして半年以上実務に従事しています。
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>領域:</strong> Azureリソースを用いたAIエージェント開発に要件定義・設計・開発まで一貫して携わる。</li>
                        <li><strong>使っている技術:</strong> Python, Azure AI Foundry, Semantic Kernel, GPT Models.</li>
                        <li><strong>スタンス:</strong> 常にチームやプロジェクトの目的から逆算して、真に課題解決に繋がるものを作ろうと試行錯誤しています。エンタープライズ環境で開発するのは初めての経験で、日々学びの連続です。</li>
                    </ul>

                    <h3 className="font-bold mt-6">System Engineering</h3>
                    <p>
                        日常の「もっとこうだったらいいのになあ」みたいなモヤモヤを自給自足で解決して気持ちよくなるのが趣味です。
                        自分の満足もそうだし、自分のアクションで身の回りの人の困りごとを解決して喜んでもらえるのが嬉しくて、モノづくりをしています。
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <strong>作っているもの:</strong>
                            <ul className="list-circle pl-5 mt-1 space-y-1">
                                <li>
                                    <Link href="/works/portfolio" className="hover:underline hover:text-primary">
                                        <strong>Portfolio & Blog:</strong>
                                    </Link> MarkdownベースのCMSを自作し、自分に最適化されたUXを追求したObsidian風ブログ。（このサイト）
                                </li>
                                <li>
                                    <Link href="/works/google-docs-to-wordpress" className="hover:underline hover:text-primary">
                                        <strong>Google Docs to WordPress:</strong>
                                    </Link> GASとWordPress APIを活用し、ドキュメント執筆から記事公開までのフローを完全自動化したシステムです。学生団体で活用しています。
                                </li>
                                <li><strong>TaskSparkle:</strong> AIアシスタントを用いたタスク管理アプリケーション。（作成中）</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mt-12">
                    <h2>🛠 Technical Stack</h2>
                    <p>アカデミックな分析から、システム開発・Webアプリ開発まで幅広く触っています。技術そのものが好きでたまらないというよりは、課題解決の手段としてプログラミングをしているような性格なので、広く浅くといった色が強いです。</p>
                    <div className="not-prose grid gap-4">
                        <div className="grid grid-cols-[1fr_2fr] gap-4 border-b border-border py-2">
                            <span className="font-bold">Languages</span>
                            <span>Python, JavaScript, TypeScript, Ruby, PHP, SQL</span>
                        </div>
                        <div className="grid grid-cols-[1fr_2fr] gap-4 border-b border-border py-2">
                            <span className="font-bold">WebApp</span>
                            <span>React, Vite, Tailwind CSS, Streamlit, Next.js, FastAPI, WordPress</span>
                        </div>
                        <div className="grid grid-cols-[1fr_2fr] gap-4 border-b border-border py-2">
                            <span className="font-bold">Data & AI</span>
                            <span>Pandas, Scikit-learn, Semantic Kernel, Azure AI Foundry </span>
                        </div>
                        <div className="grid grid-cols-[1fr_2fr] gap-4 border-b border-border py-2">
                            <span className="font-bold">Tools & Services</span>
                            <span>Azure, GitHub, Docker, Vercel, Google Apps Script, WordPress API</span>
                        </div>
                    </div>
                </section>

                <section className="mt-12">
                    <h2>💡 My Approach to AI</h2>
                    <p>
                        生成AIを用いた開発は既に現在のプロダクト開発と切っても切り離せないものです。ただ、開発の<Red>「How（実装）」</Red>は生成AIで劇的に高速化できても、<Red>「What（何を解決するか）」</Red>と<Red>「Why（なぜ作るか）」</Red>を定義できるのは、向こう十数年は人間だけだと確信しています。
                        なぜなら、我々人間が置かれている環境や集団の力学・課題は非常にロングコンテキストで、かつ、非言語的・暗黙知的なものを多分に含むからです。
                        コードを書く時間がAIによって圧縮されるからこそ、<Red>本質的な課題を切り出すこと、合意形成をすること</Red>、そんな領域が人間のスコープになると思っています。
                    </p>
                    <p className="mt-4">
                        そうしたスタンスで、私は以下のようなアクションでAIと付き合っています。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>人間のもつ課題感をシステム要件へと落とし込むためのソフトスキルを鍛える。</li>
                        <li>AIのアウトプットの是非を判断して責任を持てるように、自分自身のアーキテクチャ設計のスキルを磨く。インプットとして自分でも手を動かす。</li>
                        <li>ClaudeCodeやAntigravityのような最新のおもしろツールを積極的に使ってみて、効率化を実践する。（半分は好奇心でやっている趣味）</li>
                        <li>開発の過程で有用だったPromptを蓄積し、モデルやツールが変わっても有効なノウハウを溜める。</li>
                    </ul>
                    <p className="mt-4">
                        AIを使いこなし、ユーザーの課題解決に繋がる開発を行える人間になることを目指しています。
                    </p>

                </section>

                <section className="mt-12">
                    <h2>📬 Contact</h2>
                    <p>
                        ご連絡などありましたら、お気軽にご連絡ください。
                    </p>
                    <div className="flex flex-col gap-3 mt-4">
                        <a
                            href="mailto:y.mizutani2005@gmail.com"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
                        >
                            <Mail className="h-5 w-5" />
                            <span>y.mizutani2005@gmail.com</span>
                        </a>
                        <a
                            href="https://github.com/Y-Mizutani2005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
                        >
                            <Github className="h-5 w-5" />
                            <span>@Y-Mizutani2005</span>
                        </a>
                    </div>
                </section>
            </article>
        </div>
    );
}
