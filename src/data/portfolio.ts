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
        ],
        availability: {
            repository: "public",
            demo: "public",
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
        },
        featured: true,
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
