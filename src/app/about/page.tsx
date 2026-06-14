import Link from "next/link";
import { Github, Mail } from "lucide-react";

const Red = ({ children }: { children: React.ReactNode }) => (
    <span className="highlight-red">{children}</span>
);

export default function AboutPage() {
    return (
        <div className="container py-10 md:py-16 mx-auto px-4 max-w-4xl">
            <article className="prose prose-neutral dark:prose-invert max-w-none rounded-xl p-6 md:p-10 bg-slate-800 custom-about-prose">
                <h1 className="text-4xl font-bold tracking-tight mb-8">About Me</h1>
                <section>
                    <h2 className="text-3xl font-bold mt-0">Yuki Mizutani</h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        Nanzan University, Economics Department, 3rd year / Data Scientist / System Engineer
                    </p>
                    <p className="leading-relaxed">
                        AI / LLM、Webサービス、業務自動化を使って、課題整理から設計・実装・運用まで進めることに取り組んでいます。
                        長期インターンでのAI agent開発、実利用される学生向けWebサービスの運営、Google Workspace / WordPress周辺の業務効率化を経験しています。
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
                        大学でWebコンテンツを通じて学生支援を行う学生団体を立ち上げ、代表としてWebサービス開発、企画、組織運営に携わっています。

                    </p>
                </section>

                <section className="mt-12">
                    <h2>💻 Work & Projects</h2>
                    <p>課題解決を目的にしたモノづくりを行っています。</p>

                    <h3 className="font-bold">Data Science & AI</h3>
                    <p>
                        データサイエンス系の企業にて、週1回8時間勤務の長期インターン生として、AI agentを用いた業務効率化PoCに携わっています。
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>領域:</strong> Azureリソースを用いたAIエージェント開発に、要件整理・設計・開発・出力検証まで一貫して携わる。</li>
                        <li><strong>使っている技術:</strong> Python, Azure AI Foundry, Semantic Kernel, GPT Models.</li>
                        <li><strong>実績:</strong> 月次モニタリング資料作成を支援するデータ解釈自動化AIのPoCを作成。東京大学松尾・岩澤研究室のLLM講座応用編アドバンスドコンペではU29部門優秀賞を受賞。</li>
                    </ul>

                    <h3 className="font-bold mt-6">System Engineering</h3>
                    <p>
                        身近な運用課題を、使う人の負担が減る形でシステム化することを重視しています。
                        学生団体では、南山大学生向けポータル、WordPressメディア、Google DocsからWordPressへの自動入稿ツールなどを開発・運用しています。
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <strong>作っているもの:</strong>
                            <ul className="list-circle pl-5 mt-1 space-y-1">
                                <li>
                                    <Link href="/works/gakuson-portal" className="hover:underline hover:text-primary">
                                        <strong>Gakuson Portal:</strong>
                                    </Link> 月間約4,900人が利用する南山大学生向けポータルサービス。
                                </li>
                                <li>
                                    <Link href="/works/google-docs-to-wordpress" className="hover:underline hover:text-primary">
                                        <strong>Google Docs to WordPress:</strong>
                                    </Link> GASとWordPress APIを活用し、ドキュメント執筆から記事入稿までのフローを自動化したシステム。
                                </li>
                                <li>
                                    <Link href="/works/gakuson-theme-nanzan-topics" className="hover:underline hover:text-primary">
                                        <strong>GakusonTheme / Nanzan Topics:</strong>
                                    </Link> 学生向けメディアのWordPress theme共同制作・運用。
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mt-12">
                    <h2>🛠 Technical Stack</h2>
                    <p>データ分析、AI agent、Webアプリ、WordPress、Google Workspace自動化を、課題解決の手段として組み合わせて使っています。</p>
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
                        生成AIを用いた開発は既に現在のプロダクト開発と切っても切り離せないものです。ただ、開発の<Red>「How（実装）」</Red>は生成AIで劇的に高速化できても、<Red>「What（何を解決するか）」</Red>と<Red>「Why（なぜ作るか）」</Red>を定義できるのは、向こう十数年は人間だけだと考えています。
                        なぜなら、我々人間が置かれている環境や集団の力学・課題は非常にロングコンテキストで、かつ、非言語的・暗黙知的なものを多分に含むからです。
                        コードを書く時間がAIによって圧縮されるからこそ、<Red>本質的な課題を切り出すこと、合意形成をすること、決定に責任を持つこと。</Red>そのような領域が人間のスコープになると思っています。
                    </p>
                    <p className="mt-4">
                        そのようなスタンスで、私は以下のような姿勢でAIと付き合っています。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>人の課題感をシステム要件へと落とし込んで合意形成まで行うために、ソフトスキル全般を鍛える。</li>
                        <li>AIのアウトプットの是非を判断して責任を持てるように、自分自身のアーキテクチャ設計のスキルを磨く。インプットとして自分でも手を動かす。</li>
                        <li>Claude CodeやAntigravityのような開発支援ツールを実務的に試し、開発速度、レビュー品質、運用しやすさの観点で使い分ける。</li>
                        <li>開発の過程で有用だったPromptを蓄積し、モデルやツールが変わっても有効なノウハウを溜める。</li>
                    </ul>
                    <p className="mt-4">
                        AIを使いこなし、ユーザーの課題解決に繋がる開発を行える人間になることを目指しています。
                    </p>

                </section>

                <section className="mt-12">
                    <h2>📬 Contact</h2>
                    <p>
                        ご質問やご相談などありましたら、お気軽にご連絡ください。
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
