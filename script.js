
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    let dots = 0;
    setInterval(() => {
        dots = (dots + 1) % 4;
        heading.innerText = "Leonel Akanji Akanji" + ".".repeat(dots);
    }, 1000);
});
