import {
    isTechnologyId,
    technologies,
    type TechnologyId,
} from "@data/technologies";

export const workCategories = [
    "Research",
    "Software",
    "Team Projects",
    "Other",
] as const;

export type WorkCategory = (typeof workCategories)[number];

export const workStatuses = ["published", "in-development", "archived"] as const;

export type WorkStatus = (typeof workStatuses)[number];

export const workStatusLabels: Record<WorkStatus, string> = {
    published: "公開中",
    "in-development": "開発中",
    archived: "過去作品",
};

export const workLinkTypes = [
    "GitHub",
    "Demo",
    "Website",
    "Paper",
    "Distribution",
] as const;

export type WorkLinkType = (typeof workLinkTypes)[number];

export interface WorkLink {
    type: WorkLinkType;
    label?: string;
    url: string;
}

export interface Publication {
    title: string;
    publishedAt: string;
    venue?: string;
    links?: WorkLink[];
}

export interface WorkAvailability {
    repository: "public" | "private" | "none";
    demo: "public" | "private" | "none";
    distribution?: "public" | "private" | "none";
}

export interface Work {
    id: string;
    title: string;
    summary: string;
    category: WorkCategory;
    period?: string;
    status: WorkStatus;
    technologies: TechnologyId[];
    topics?: string[];
    tags?: string[];
    background?: string;
    description?: string;
    contribution?: string;
    results?: string;
    images?: string[];
    links?: WorkLink[];
    publications?: Publication[];
    availability: WorkAvailability;
    featured?: boolean;
}

export const getWorkStatusLabel = (
    work: Pick<Work, "status" | "availability">,
): string => {
    if (work.status !== "published") {
        return workStatusLabels[work.status];
    }

    if (work.availability.demo === "public") {
        return "公開中";
    }

    if (work.availability.distribution === "public") {
        return "公開配布";
    }

    if (work.availability.repository === "public") {
        return "公開リポジトリ";
    }

    return workStatusLabels[work.status];
};

export const works: Work[] = [
    {
        id: "kitashima-dev",
        title: "kitashima.dev",
        summary:
            "Astroで構築している個人サイト。プロフィール、ブログ、制作物をまとめています。",
        category: "Software",
        period: "2024–",
        status: "published",
        technologies: ["astro", "typescript", "css", "markdown"],
        topics: ["Web制作", "個人サイト"],
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/astro-site",
            },
            {
                type: "Website",
                url: "https://kitashima.dev/",
            },
        ],
        availability: {
            repository: "public",
            demo: "public",
            distribution: "none",
        },
        featured: true,
    },
    {
        id: "technical-blog",
        title: "技術ブログ",
        summary: "学習内容や実装メモを公開している技術ブログです。",
        category: "Other",
        status: "published",
        technologies: ["markdown"],
        topics: ["技術記事", "学習記録"],
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/techblog",
            },
            {
                type: "Website",
                url: "https://tech.n-island.dev/",
            },
        ],
        availability: {
            repository: "public",
            demo: "public",
            distribution: "none",
        },
        featured: true,
    },
    {
        id: "book-manager",
        title: "Book Manager",
        summary:
            "自宅や研究室の蔵書を管理するセルフホスト向けWebアプリケーション。",
        category: "Software",
        status: "published",
        technologies: [
            "react",
            "typescript",
            "vite",
            "fastify",
            "sqlite",
            "drizzle",
            "docker-compose",
        ],
        topics: ["蔵書管理", "セルフホスト"],
        background: "自宅や研究室の本を一元管理するために制作。",
        description:
            "React + TypeScriptのフロントエンドとFastifyのバックエンドをSQLite/Drizzleで構成し、Docker Composeでセルフホストできます。",
        contribution: "企画・設計・実装・README整備を担当。",
        results: "蔵書管理アプリケーションとセルフホスト手順を公開。",
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/book-manager",
            },
        ],
        availability: {
            repository: "public",
            demo: "none",
        },
    },
    {
        id: "daily-routine-manager",
        title: "Daily Routine Manager",
        summary:
            "毎日のルーティーンを記録し、履歴や達成率を確認するアプリ。",
        category: "Software",
        status: "published",
        technologies: ["nextjs", "react", "typescript", "postgresql"],
        topics: ["習慣管理", "記録", "可視化"],
        background: "毎日やりたいことを継続的に記録するために制作。",
        description:
            "Today、Calendar、Routines、Stats、Settingsの画面で、記録・履歴確認・達成率確認・データ入出力を行えます。",
        contribution: "企画・設計・実装・README整備を担当。",
        results: "ルーティーンの記録から期間別・ルーティーン別の達成率確認までを公開。",
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/daily-routine-manager",
            },
        ],
        availability: {
            repository: "public",
            demo: "none",
        },
    },
    {
        id: "payment-log",
        title: "Payment Log",
        summary: "支払いを数秒で記録できる個人向け支払いログ。",
        category: "Software",
        status: "published",
        technologies: ["nextjs", "typescript", "indexeddb", "postgresql"],
        topics: ["支払い管理", "Local First", "PWA"],
        background: "支払い直後に、金額と支払い方法を素早く記録するために制作。",
        description:
            "IndexedDBへのローカル保存、オフライン表示、PWA、履歴検索、集計、CSV/JSON入出力、設定時の同期機能を備えています。",
        contribution: "企画・設計・実装・README整備を担当。",
        results: "ローカル利用を中心にした支払いログのMVPを公開。",
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/payment-manager",
            },
        ],
        availability: {
            repository: "public",
            demo: "none",
        },
    },
    {
        id: "homecms",
        title: "HomeCMS",
        summary:
            "HugoやEleventyに対応するセルフホスト型ヘッドレスCMS。",
        category: "Software",
        status: "published",
        technologies: ["go", "gin", "docker", "hugo", "eleventy"],
        topics: ["CMS", "静的サイト", "セルフホスト"],
        background: "静的サイトのコンテンツ管理とプレビューを一元化するために制作。",
        description:
            "GitHub OAuth認証、Markdownプレビュー、メディア管理、Gitベースのコンテンツ管理、サイトジェネレーターのプレビューを提供します。",
        contribution: "企画・設計・実装・README整備を担当。",
        results: "静的サイト向けCMSのコードとセットアップ手順を公開。",
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/homecms",
            },
        ],
        availability: {
            repository: "public",
            demo: "none",
        },
    },
    {
        id: "danime-discord-presence",
        title: "dアニメ Discord Presence",
        summary:
            "dアニメストアで再生中の作品名と時間をDiscord Presenceに表示する拡張機能。",
        category: "Software",
        status: "published",
        technologies: ["javascript", "rust", "chrome-extension"],
        topics: ["Chrome拡張", "Discord", "Native Messaging"],
        background: "動画サービスの再生状況をDiscordのPresenceに表示するために制作。",
        description:
            "Chrome拡張で作品情報を取得し、Rust製のNative Messaging Hostを経由してDiscordへ送信します。",
        contribution: "企画・設計・実装・インストール手順の整備を担当。",
        results: "Chrome拡張とWindows/macOS向けインストール手順を公開。",
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/d_anime_discord_presence",
            },
            {
                type: "Distribution",
                label: "Chrome Web Store",
                url: "https://chromewebstore.google.com/detail/danimediscordpresence/ifenbhbjocjihjlmbbmdegolkpjmecag",
            },
        ],
        availability: {
            repository: "public",
            demo: "none",
            distribution: "public",
        },
    },
    {
        id: "realtime-anime-filter-web",
        title: "リアルタイムアニメ風フィルター",
        summary: "リアルタイムアニメ風フィルターのWeb UI。",
        category: "Software",
        status: "published",
        technologies: ["react", "typescript", "vite", "opencvjs"],
        topics: ["画像処理", "Web UI"],
        background: "リアルタイムに映像へアニメ風の表現を適用するWeb UIとして制作。",
        description:
            "React + TypeScript + Viteで構成したWeb UIで、READMEにはビルドとデプロイの手順を記載しています。",
        contribution: "企画・設計・実装・デプロイ手順の整備を担当。",
        results: "公開リポジトリとビルド・配置手順を公開。",
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/realtime_anime_filter_web",
            },
        ],
        availability: {
            repository: "public",
            demo: "none",
        },
    },
    {
        id: "myapp",
        title: "MyApp",
        summary: "タスクと時間割を管理するAndroidアプリ。",
        category: "Software",
        status: "published",
        technologies: ["java", "android"],
        topics: ["タスク管理", "時間割", "Android"],
        background: "タスクと大学の時間割を一つのアプリで管理するために制作。",
        description:
            "タスクの追加・編集・削除・詳細表示と、時間割の登録・変更・削除に対応しています。",
        contribution: "企画・設計・実装を担当。",
        results: "タスク管理と時間割管理のAndroidアプリのソースコードを公開。",
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/MyApp",
            },
        ],
        availability: {
            repository: "public",
            demo: "none",
        },
    },
    {
        id: "bluetooth-windows-remote",
        title: "Bluetooth Controller / Receiver",
        summary:
            "AndroidからBluetooth経由でWindowsを操作するペアアプリ。",
        category: "Software",
        status: "published",
        technologies: ["java", "android", "csharp", "bluetooth"],
        topics: ["Bluetooth", "Android", "Windows"],
        background: "Android端末をWindowsのリモコンとして使うために制作。",
        description:
            "ControllerがAndroid側からデータを送信し、ReceiverがWindows側でデータを受信する2リポジトリ構成です。",
        contribution: "ペアアプリの設計・実装・README間の関連付けを担当。",
        results: "送信側と受信側を分けた公開リポジトリとして提供。",
        links: [
            {
                type: "GitHub",
                label: "BluetoothController",
                url: "https://github.com/kitashimauni/BluetoothController",
            },
            {
                type: "GitHub",
                label: "BluetoothReceiver",
                url: "https://github.com/kitashimauni/BluetoothReceiver",
            },
        ],
        availability: {
            repository: "public",
            demo: "none",
        },
    },
    {
        id: "polaris-observatory",
        title: "ポラリス観測所",
        summary: "Eleventy/Nunjucksで構築した日常ブログ。",
        category: "Other",
        status: "published",
        technologies: ["eleventy", "nunjucks", "javascript"],
        topics: ["日常ブログ", "Web制作"],
        background: "日常の記録を公開するためのブログサイトとして制作。",
        description: "EleventyとNunjucksを使った日記ブログです。",
        contribution: "企画・設計・実装・運用を担当。",
        results: "公開リポジトリと稼働中のブログサイトを提供。",
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/dialy-blog",
            },
            {
                type: "Website",
                url: "https://blog.n-island.dev/",
            },
        ],
        availability: {
            repository: "public",
            demo: "public",
        },
    },
    {
        id: "report-tools",
        title: "report-tools",
        summary: "レポート執筆用のTypst関数・パッケージ。",
        category: "Other",
        status: "published",
        technologies: ["typst"],
        topics: ["Typst", "レポート執筆支援"],
        background: "レポート作成で繰り返し使う表現を再利用するために制作。",
        description:
            "プログラム表示用のshowCodeと、LaTeXのアイテムボックス風のitemboxを提供します。",
        contribution: "関数設計・実装・使用例の整備を担当。",
        results: "Typstで再利用できる関数パッケージと使用例を公開。",
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/report-tools",
            },
        ],
        availability: {
            repository: "public",
            demo: "none",
        },
    },
    {
        id: "tail-caddy",
        title: "tail-caddy",
        summary:
            "Tailscale上のローカルサービスをCaddyで公開するセルフホスト補助ツール。",
        category: "Other",
        status: "published",
        technologies: ["shell", "docker", "caddy"],
        topics: ["セルフホスト", "Tailscale", "TLS", "Cloudflare DNS-01"],
        background: "Tailscale IPに限定したサービス公開を簡単に設定するために制作。",
        description:
            "TailscaleのIP検出、Cloudflare DNS-01による証明書発行、Caddyのサイト追加・削除・再読み込みをまとめています。",
        contribution: "設計・Shell実装・Docker/Caddy設定・README整備を担当。",
        results: "インストーラーとサイト管理用CLIを公開。",
        links: [
            {
                type: "GitHub",
                url: "https://github.com/kitashimauni/tail-caddy",
            },
        ],
        availability: {
            repository: "public",
            demo: "none",
        },
    },
];

const validateLink = (link: WorkLink, context: string): string[] => {
    const errors: string[] = [];

    try {
        const url = new URL(link.url);

        if (url.protocol !== "https:") {
            errors.push(`${context} must use an HTTPS URL: ${link.url}`);
        }
    } catch {
        errors.push(`${context} must be a valid URL: ${link.url}`);
    }

    return errors;
};

const linkAvailabilityKey: Partial<
    Record<WorkLinkType, keyof WorkAvailability>
> = {
    GitHub: "repository",
    Demo: "demo",
    Website: "demo",
    Distribution: "distribution",
};

/**
 * Validates portfolio data during Astro's build so references fail early.
 * The TechnologyId type catches most mistakes at compile time; this runtime
 * check also protects data loaded or transformed at runtime.
 */
export const validateWorks = (items: readonly Work[]): void => {
    const errors: string[] = [];
    const ids = new Set<string>();
    const technologyIdSet = new Set(technologies.map((technology) => technology.id));

    for (const work of items) {
        if (ids.has(work.id)) {
            errors.push(`Duplicate work id: ${work.id}`);
        }
        ids.add(work.id);

        for (const technologyId of work.technologies) {
            if (!technologyIdSet.has(technologyId) || !isTechnologyId(technologyId)) {
                errors.push(
                    `Undefined technology id "${technologyId}" in work "${work.id}"`,
                );
            }
        }

        for (const [index, link] of (work.links ?? []).entries()) {
            errors.push(...validateLink(link, `Work "${work.id}" link ${index + 1}`));

            const availabilityKey = linkAvailabilityKey[link.type];
            if (
                availabilityKey &&
                work.availability[availabilityKey] !== "public"
            ) {
                errors.push(
                    `Work "${work.id}" has a ${link.type} link but its ${availabilityKey} is not public`,
                );
            }
        }

        for (const [index, publication] of (work.publications ?? []).entries()) {
            if (!/^\d{4}(?:-(?:0[1-9]|1[0-2]))?$/.test(publication.publishedAt)) {
                errors.push(
                    `Work "${work.id}" publication ${index + 1} must use YYYY or YYYY-MM`,
                );
            }

            for (const [linkIndex, link] of (publication.links ?? []).entries()) {
                errors.push(
                    ...validateLink(
                        link,
                        `Work "${work.id}" publication ${index + 1} link ${linkIndex + 1}`,
                    ),
                );
            }
        }
    }

    if (errors.length > 0) {
        throw new Error(`Portfolio data validation failed:\n${errors.join("\n")}`);
    }
};

validateWorks(works);

export const getFeaturedWorks = (): Work[] =>
    works.filter((work) => work.featured);

export const getUsedTechnologies = (items: readonly Work[] = works) => {
    const ids = new Set(items.flatMap((work) => work.technologies));

    return technologies.filter((technology) => ids.has(technology.id));
};
