const hamburger = document.querySelector('.hamburger');
console.log(hamburger);
if (hamburger) {
    hamburger.addEventListener('click', () => {
        const nav_links = document.querySelector('.nav-links');
        console.log(nav_links);
        if (nav_links) nav_links.classList.toggle('expanded');
    });
}