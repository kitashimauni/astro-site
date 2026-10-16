import {
    getRequiredPublication,
    portfolioWorkIds,
} from "@data/portfolio";

export interface AboutLink {
    label: string;
    url: string;
}

export interface TimelineEntry {
    section: "Education" | "Experience";
    period: string;
    title: string;
    organization?: string;
    description: string;
    links?: AboutLink[];
}

export interface AboutItem {
    title: string;
    period?: string;
    description: string;
    links?: AboutLink[];
}

export const profile = {
    name: "北島 大輝",
    nameEn: "Daiki Kitashima",
    affiliation: "東京農工大学大学院 工学府 知能情報システム工学専攻",
    laboratory: "藤田桂英研究室",
    introduction:
        "東京農工大学大学院で、大規模言語モデルやマルチエージェントシステムに関わる研究に取り組んでいます。研究とソフトウェア開発の両方を通じて、人とエージェントの意思決定を支援する技術に関心があります。",
};

export const researchInterests = [
    {
        title: "大規模言語モデル（LLM）",
        description: "言語モデルの活用やファインチューニングに関心があります。",
    },
    {
        title: "自然言語処理・Argument Mining",
        description: "議論や意見を扱う自然言語処理の手法を研究しています。",
    },
    {
        title: "マルチエージェントシステム・自動交渉",
        description: "自律エージェント間の交渉や協調、意思決定支援に関心があります。",
    },
    {
        title: "強化学習",
        description: "エージェントの戦略獲得や意思決定への応用に関心があります。",
    },
];

export const hobbies = [
    {
        title: "ゲーム・ゲーム制作",
        description: "ゲームを遊ぶことに加えて、ゲームを作ることにも関心があります。",
    },
    {
        title: "アニメ・映画",
        description: "アニメや映画を観ることが好きです。",
    },
    {
        title: "競技プログラミング",
        description: "アルゴリズムや問題解決に取り組んでいます。",
    },
    {
        title: "CTF",
        description: "セキュリティに関する問題を解く活動にも関心があります。",
    },
];

export const timeline: TimelineEntry[] = [
    {
        section: "Education",
        period: "在籍中",
        title: "東京農工大学大学院",
        organization: "工学府 知能情報システム工学専攻",
        description: "知能情報システム工学を専攻しています。",
        links: [
            {
                label: "東京農工大学",
                url: "https://www.tuat.ac.jp/",
            },
        ],
    },
    {
        section: "Experience",
        period: "在籍中",
        title: "藤田桂英研究室",
        organization: "東京農工大学大学院",
        description:
            "議論マイニングのための大規模言語モデルのファインチューニングに取り組んでいます。",
        links: [
            {
                label: "研究室メンバー・研究テーマ",
                url: "https://katfuji.lab.tuat.ac.jp/member.html",
            },
        ],
    },
];

const aaaiPublication = getRequiredPublication(
    portfolioWorkIds.aaaiStudentAbstract,
);

export const achievements: AboutItem[] = [
    {
        period: aaaiPublication.publishedAt.slice(0, 7),
        title: aaaiPublication.title,
        description: `${aaaiPublication.title} を共著しました。`,
        links: aaaiPublication.links?.map((link) => ({
            label: link.label ?? link.type,
            url: link.url,
        })),
    },
    {
        period: "2025-09",
        title: "第30回日本バーチャルリアリティ学会大会論文集",
        description:
            "チーム制作『〜なんでも食感生成〜 VRレストラン「Yummyverse」』の共著者として掲載されました。",
        links: [
            {
                label: "公式論文PDF",
                url: "https://conference.vrsj.org/ac2025/program/doc/IVRC-06.pdf",
            },
        ],
    },
];

export const activities: AboutItem[] = [
    {
        period: "在籍中",
        title: "研究室での研究活動",
        description:
            "LLM、議論マイニング、自動交渉など、エージェントの知的な意思決定に関する研究を進めています。",
        links: [
            {
                label: "藤田桂英研究室",
                url: "https://katfuji.lab.tuat.ac.jp/member.html",
            },
        ],
    },
    {
        period: "継続中",
        title: "個人開発・Web制作",
        description:
            "Webサイトやソフトウェアを制作し、公開可能な成果物をPortfolioにまとめています。",
        links: [
            {
                label: "Portfolioを見る",
                url: "/portfolio/",
            },
        ],
    },
];
