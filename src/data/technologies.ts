export interface TechnologyEntry {
    readonly id: string;
    readonly name: string;
    readonly category: string;
}

export const technologies = [
    {
        id: "astro",
        name: "Astro",
        category: "Framework",
    },
    {
        id: "typescript",
        name: "TypeScript",
        category: "Language",
    },
    {
        id: "css",
        name: "CSS",
        category: "Web",
    },
    {
        id: "markdown",
        name: "Markdown",
        category: "Content",
    },
    {
        id: "react",
        name: "React",
        category: "Library",
    },
    {
        id: "nextjs",
        name: "Next.js",
        category: "Framework",
    },
    {
        id: "fastify",
        name: "Fastify",
        category: "Framework",
    },
    {
        id: "sqlite",
        name: "SQLite",
        category: "Database",
    },
    {
        id: "drizzle",
        name: "Drizzle ORM",
        category: "ORM",
    },
    {
        id: "docker-compose",
        name: "Docker Compose",
        category: "Infrastructure",
    },
    {
        id: "postgresql",
        name: "PostgreSQL",
        category: "Database",
    },
    {
        id: "indexeddb",
        name: "IndexedDB",
        category: "Web API",
    },
    {
        id: "hugo",
        name: "Hugo",
        category: "Static Site Generator",
    },
    {
        id: "go",
        name: "Go",
        category: "Language",
    },
    {
        id: "gin",
        name: "Gin",
        category: "Framework",
    },
    {
        id: "docker",
        name: "Docker",
        category: "Infrastructure",
    },
    {
        id: "javascript",
        name: "JavaScript",
        category: "Language",
    },
    {
        id: "rust",
        name: "Rust",
        category: "Language",
    },
    {
        id: "chrome-extension",
        name: "Chrome Extension",
        category: "Platform",
    },
    {
        id: "vite",
        name: "Vite",
        category: "Tooling",
    },
    {
        id: "java",
        name: "Java",
        category: "Language",
    },
    {
        id: "android",
        name: "Android",
        category: "Platform",
    },
    {
        id: "csharp",
        name: "C#",
        category: "Language",
    },
    {
        id: "eleventy",
        name: "Eleventy",
        category: "Static Site Generator",
    },
    {
        id: "nunjucks",
        name: "Nunjucks",
        category: "Template",
    },
    {
        id: "typst",
        name: "Typst",
        category: "Document Tool",
    },
    {
        id: "shell",
        name: "Shell",
        category: "Language",
    },
    {
        id: "caddy",
        name: "Caddy",
        category: "Infrastructure",
    },
    {
        id: "bluetooth",
        name: "Bluetooth",
        category: "Protocol",
    },
] as const satisfies readonly TechnologyEntry[];

export type Technology = (typeof technologies)[number];
export type TechnologyId = Technology["id"];

const technologyIds = new Set<string>(
    technologies.map((technology) => technology.id),
);

export const isTechnologyId = (value: string): value is TechnologyId =>
    technologyIds.has(value);

export const getTechnology = (id: TechnologyId): Technology => {
    const technology = technologies.find((item) => item.id === id);

    if (!technology) {
        throw new Error(`Technology is not defined: ${id}`);
    }

    return technology;
};

export const validateTechnologies = (
    items: readonly TechnologyEntry[],
): void => {
    const errors: string[] = [];
    const ids = new Set<string>();

    for (const technology of items) {
        if (ids.has(technology.id)) {
            errors.push(`Duplicate technology id: ${technology.id}`);
        }
        ids.add(technology.id);

        if (!technology.name.trim()) {
            errors.push(`Technology "${technology.id}" must have a name`);
        }
        if (!technology.category.trim()) {
            errors.push(`Technology "${technology.id}" must have a category`);
        }
    }

    if (errors.length > 0) {
        throw new Error(`Technology data validation failed:\n${errors.join("\n")}`);
    }
};

validateTechnologies(technologies);
