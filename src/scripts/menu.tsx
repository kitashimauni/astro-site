const hamburger = document.querySelector<HTMLButtonElement>(".hamburger");
const navigation = document.querySelector<HTMLElement>(".nav-links");

const closeMenu = () => {
    hamburger?.setAttribute("aria-expanded", "false");
    hamburger?.setAttribute("aria-label", "メニューを開く");
    navigation?.classList.remove("is-open");
};

if (hamburger && navigation) {
    hamburger.addEventListener("click", () => {
        const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", String(!isExpanded));
        hamburger.setAttribute(
            "aria-label",
            isExpanded ? "メニューを開く" : "メニューを閉じる",
        );
        navigation.classList.toggle("is-open", !isExpanded);
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
            !navigation.contains(event.target)
        ) {
            closeMenu();
        }
    });
}