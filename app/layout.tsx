import BackToTop from "./components/BackToTop";
import Cursor from "./components/Cursor";
import "./globals.css";

export const metadata = {
  title: "Velura - منصة الترفيه والإبداع",
  description:
    "Velura تجمع بين الأنمي، كرة القدم، والفعاليات التفاعلية في منصة واحدة. انضم إلينا للاستمتاع بمحتوى حصري ومجتمع مميز!",
  keywords: [
    "Velura",
    "منصة Velura",
    "محتوى الأنمي",
    "فعاليات كرة القدم",
    "مجتمع الألعاب",
    "الفعاليات التفاعلية",
    "منصة ترفيهية",
    "أخبار الأنمي",
    "أحداث الرياضة",
    "تغطية المباريات",
  ].join(", "),
  author: "Velura Team",
  robots: "index, follow",
  openGraph: {
    title: "Velura - منصة الترفيه والإبداع",
    description:
      "Velura تجمع بين الأنمي، كرة القدم، والفعاليات التفاعلية في منصة واحدة. انضم إلينا للاستمتاع بمحتوى حصري ومجتمع مميز!",
    url: "https://Velura.Space", // ضع رابط موقعك
    siteName: "Velura",
    images: [
      {
        url: "https://media.discordapp.net/attachments/1347790430867165204/1347993888950063154/22a3cda8ffd10773.png?ex=67cdd8a3&is=67cc8723&hm=78c30604ae05fd43ff03bce14aa1341afd3884d584ce5cbb145513026fe2c837&=&format=webp&quality=lossless&width=1480&height=808", // صورة مخصصة تظهر عند المشاركة
        width: 1200,
        height: 630,
        alt: "Velura Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Velura", // حساب Twitter (إن وجد)
    title: "Velura - منصة الترفيه والإبداع",
    description:
      "Velura تجمع بين الأنمي، كرة القدم، والفعاليات التفاعلية في منصة واحدة. انضم إلينا للاستمتاع بمحتوى حصري ومجتمع مميز!",
    images: ["https://media.discordapp.net/attachments/1347790430867165204/1347993888950063154/22a3cda8ffd10773.png?ex=67cdd8a3&is=67cc8723&hm=78c30604ae05fd43ff03bce14aa1341afd3884d584ce5cbb145513026fe2c837&=&format=webp&quality=lossless&width=1480&height=808"], // صورة Twitter
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />

        {/* بيانات SEO الأساسية */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.openGraph.url} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* JSON-LD Schema لتحسين ظهور الموقع في Google */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Website",
            "name": "Velura",
            "url": "https://Velura.Space",
            "description": metadata.description,
            "sameAs": [
              "https://twitter.com/Velura.Space",
              "https://www.facebook.com/Velura.Space",
              "https://www.instagram.com/Velura.Space",
              "https://discord.gg/velura"
            ]
          })
        }} />
      </head>
      <body>
        <Cursor />
        <BackToTop />{children}</body>
    </html>
  );
}
