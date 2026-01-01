import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        // ?title=<title>
        const hasTitle = searchParams.has('title');
        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : siteConfig.name;

        // ?date=<date>
        const date = searchParams.get('date');

        // ?type=<type> (e.g. "Blog", "Work", or empty for default)
        const type = searchParams.get('type');

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#020817', // slate-950
                        backgroundImage: 'radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                        color: 'white',
                        fontFamily: '"Inter", sans-serif',
                        position: 'relative',
                    }}
                >
                    {/* Background Accent */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-20%',
                            left: '-10%',
                            width: '40%',
                            height: '40%',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', // violet/indigo
                            filter: 'blur(100px)',
                            opacity: 0.2,
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '-10%',
                            right: '-5%',
                            width: '40%',
                            height: '40%',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)', // blue/indigo
                            filter: 'blur(100px)',
                            opacity: 0.2,
                        }}
                    />

                    {/* Type Badge */}
                    {type && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '8px 24px',
                                background: 'rgba(99, 102, 241, 0.1)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                borderRadius: '9999px',
                                color: '#818cf8',
                                fontSize: 24,
                                marginBottom: 40,
                                letterSpacing: '0.05em',
                                fontWeight: 600,
                            }}
                        >
                            {type.toUpperCase()}
                        </div>
                    )}

                    {/* Title */}
                    <div
                        style={{
                            display: 'flex',
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: 64,
                            fontWeight: 800,
                            lineHeight: 1.2,
                            marginBottom: 40,
                            padding: '0 60px',
                            maxWidth: '90%',
                            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                            background: 'linear-gradient(to bottom right, #ffffff 30%, #94a3b8 100%)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        {title}
                    </div>

                    {/* Footer Info (Date or Site Name) */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 16,
                            fontSize: 24,
                            color: '#94a3b8', // slate-400
                        }}
                    >
                        {date && (
                            <span style={{ display: 'flex' }}>
                                {date.split('T')[0].replace(/-/g, '.')}
                            </span>
                        )}
                        {date && (
                            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#475569' }} />
                        )}
                        <span style={{ display: 'flex', fontWeight: 600, color: '#e2e8f0' }}>
                            {siteConfig.name}
                        </span>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                // fonts: [
                //   {
                //     name: 'Inter',
                //     data: fontData,
                //     style: 'normal',
                //   },
                // ],
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
