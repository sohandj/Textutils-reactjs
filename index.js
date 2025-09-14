const originalTitle = document.title;
const awayTitle = "waiting for you! 👀";

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = awayTitle;
    } else {
        document.title = originalTitle;
    }
});