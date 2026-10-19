export const repositoryTriageDecisions = [
    "include",
    "contribution",
    "exclude",
] as const;

export type RepositoryTriageDecision =
    (typeof repositoryTriageDecisions)[number];

export interface RepositoryEvidence {
    label: string;
    url: string;
}

export interface RepositoryTriageEntry {
    repository: string;
    url: string;
    decision: RepositoryTriageDecision;
    reason: string;
    evidence: RepositoryEvidence[];
}

/**
 * Public repositories reviewed for the portfolio. Forks and source imports
 * remain recorded here so a future review does not mistake them for omissions.
 */
export const repositoryTriage: RepositoryTriageEntry[] = [
    {
        repository: "kitashimauni/adk-test",
        url: "https://github.com/kitashimauni/adk-test",
        decision: "exclude",
        reason:
            "Google ADKの学習用ノートブックと試行コードが中心で、READMEも空のため、完成した作品としては掲載しない。",
        evidence: [
            {
                label: "リポジトリ",
                url: "https://github.com/kitashimauni/adk-test",
            },
        ],
    },
    {
        repository: "kitashimauni/Kitasite",
        url: "https://github.com/kitashimauni/Kitasite",
        decision: "exclude",
        reason:
            "旧Hugoブログの雛形で、現行の技術ブログ・ポラリス観測所と役割が重複するため、別作品として掲載しない。",
        evidence: [
            {
                label: "リポジトリ",
                url: "https://github.com/kitashimauni/Kitasite",
            },
        ],
    },
    {
        repository: "kitashimauni/techblog-cms-auth",
        url: "https://github.com/kitashimauni/techblog-cms-auth",
        decision: "exclude",
        reason:
            "Sveltia CMS Authenticatorのソースインポートのみで、独自の変更・貢献を確認できないため掲載しない。",
        evidence: [
            {
                label: "リポジトリREADME",
                url: "https://github.com/kitashimauni/techblog-cms-auth/blob/main/README.md",
            },
            {
                label: "インポートコミット",
                url: "https://github.com/kitashimauni/techblog-cms-auth/commit/6473c180cae527e7b768496940341fe831eb1c10",
            },
        ],
    },
    {
        repository: "kitashimauni/MyLibrary",
        url: "https://github.com/kitashimauni/MyLibrary",
        decision: "exclude",
        reason: "空のリポジトリで、掲載できる成果物や説明がないため除外する。",
        evidence: [
            {
                label: "リポジトリ",
                url: "https://github.com/kitashimauni/MyLibrary",
            },
        ],
    },
    {
        repository: "kitashimauni/tuat-typst",
        url: "https://github.com/kitashimauni/tuat-typst",
        decision: "contribution",
        reason:
            "fork元のテンプレート自体を自作作品として扱わず、PowerShell版インストーラーの追加とREADME整備という本人の貢献のみをAboutに掲載する。",
        evidence: [
            {
                label: "リポジトリREADME",
                url: "https://github.com/kitashimauni/tuat-typst/blob/main/README.md",
            },
            {
                label: "PowerShell対応の貢献",
                url: "https://github.com/kitashimauni/tuat-typst/commit/0deab009cbcd74600a43ac186ff99c8e78eecda5",
            },
        ],
    },
    {
        repository: "kitashimauni/web-speed-hackathon-2025",
        url: "https://github.com/kitashimauni/web-speed-hackathon-2025",
        decision: "exclude",
        reason:
            "ハッカソン用forkではあるが、公開履歴で本人のコミットや担当実装を確認できず、個人の完成作品・実績としては掲載しない。",
        evidence: [
            {
                label: "リポジトリREADME",
                url: "https://github.com/kitashimauni/web-speed-hackathon-2025/blob/main/README.md",
            },
            {
                label: "公開コミット履歴",
                url: "https://github.com/kitashimauni/web-speed-hackathon-2025/commits/main",
            },
        ],
    },
    {
        repository: "kitashimauni/kitashimauni",
        url: "https://github.com/kitashimauni/kitashimauni",
        decision: "exclude",
        reason:
            "GitHubプロフィール用リポジトリであり、Portfolioの作品ではないため除外する。",
        evidence: [
            {
                label: "GitHubプロフィール",
                url: "https://github.com/kitashimauni/kitashimauni",
            },
        ],
    },
];
