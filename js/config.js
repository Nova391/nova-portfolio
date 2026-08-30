const SITE_CONFIG = {
    fiverrLink: "https://www.fiverr.com/s/RVmRjAR",
    githubLink: "https://github.com/Nova391",
    email: "abukhaliloffice@gmail.com"
};

document.addEventListener("DOMContentLoaded", () => {
    const fiverrButtons = document.querySelectorAll('[data-link="fiverr"]');
    const githubButtons = document.querySelectorAll('[data-link="github"]');

    fiverrButtons.forEach(btn => btn.href = SITE_CONFIG.fiverrLink);
    githubButtons.forEach(btn => btn.href = SITE_CONFIG.githubLink);
});