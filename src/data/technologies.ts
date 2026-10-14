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
] as const;

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
