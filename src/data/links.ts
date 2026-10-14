export const linkEntries = [
    {
        slug: "github",
        label: "GitHub",
        description: "コードや個人開発の成果物をまとめています。",
        destination: "https://github.com/kitashimauni",
    },
    {
        slug: "x",
        label: "X",
        description: "更新情報や日々のメモを発信しています。",
        destination: "https://x.com/nibs_tuat",
    },
    {
        slug: "tech-blog",
        label: "Tech Blog",
        description: "技術記事や学習ログを掲載しています。",
        destination: "https://tech.n-island.dev/",
    },
    {
        slug: "atcoder",
        label: "AtCoder",
        description: "AtCoderのプロフィールです。",
        destination: "https://atcoder.jp/users/nigs",
    },
    {
        slug: "daily-blog",
        label: "ポラリス観測所",
        description: "日々の出来事やアニメ・ゲームなど、日常や趣味を記録しています。",
        destination: "https://blog.n-island.dev/",
    },
] as const;

export type LinkEntry = (typeof linkEntries)[number];
export type LinkSlug = LinkEntry["slug"];

export const getLink = (slug: LinkSlug): LinkEntry => {
    const link = linkEntries.find((entry) => entry.slug === slug);

    if (!link) {
        throw new Error(`Link is not defined: ${slug}`);
    }

    return link;
};

export const getLinkPath = (slug: LinkSlug): string => `/links/${slug}/`;
