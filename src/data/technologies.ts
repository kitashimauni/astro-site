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
