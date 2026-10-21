const hamburger = document.querySelector<HTMLButtonElement>(".hamburger");
const navLinks = document.querySelector<HTMLElement>(".nav-links");

const closeMenu = () => {
    hamburger?.setAttribute("aria-expanded", "false");
    hamburger?.setAttribute("aria-label", "メニューを開く");
    navLinks?.classList.remove("is-open");
};

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", String(!isExpanded));
        hamburger.setAttribute(
            "aria-label",
            isExpanded ? "メニューを開く" : "メニューを閉じる",
        );
        navLinks.classList.toggle("is-open", !isExpanded);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });

    document.addEventListener("click", (event) => {
        if (
            window.innerWidth < 768 &&
            event.target instanceof Node &&
            !hamburger.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {
            closeMenu();
        }
    });
}
