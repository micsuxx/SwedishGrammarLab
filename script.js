const VERSION = "20260619-1"; // <<< CHANGE THIS EACH UPDATE

async function loadComponent(containerId, filePath) {
    const response = await fetch(`${filePath}?v=${VERSION}`);

    if (!response.ok) {
        throw new Error(`Could not load ${filePath}`);
    }

    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
}

async function loadPage(filePath) {
    const response = await fetch(`${filePath}?v=${VERSION}`);

    if (!response.ok) {
        await loadPage("./components/wip/wip.html");
        return;
    }

    const html = await response.text();
    document.getElementById("app").innerHTML = html;
}

function buildPath(parts) {
    if (parts.length === 1) {
        return `./components/${parts[0]}/${parts[0]}.html`;
    }

    if (parts[0] === "verbs" && parts[1] === "present") {
        return "./components/verbs/present/present.html";
    }

    if (parts[0] === "verbs" && parts[1] === "present-fill-the-gap") {
        return "./components/verbs/present/present-fill-the-gap.html";
    }

    if (parts[0] === "verbs" && parts[1] === "preteritum") {
        return "./components/verbs/preteritum/preteritum.html";
    }

    if (parts[0] === "verbs" && parts[1] === "preteritum-fill-the-gap") {
        return "./components/verbs/preteritum/preteritum-fill-the-gap.html";
    }

    if (parts[0] === "verbs" && parts[1] === "perfekt") {
        return "./components/verbs/perfekt/perfekt.html";
    }

    if (parts[0] === "verbs" && parts[1] === "perfekt-fill-the-gap") {
        return "./components/verbs/perfekt/perfekt-fill-the-gap.html";
    }

    if (parts[0] === "verbs" && parts[1] === "imperativ-fill-the-gap") {
        return "./components/verbs/imperativ/imperativ-fill-the-gap.html";
    }

    if (parts[0] === "verbs" && parts[1] === "verb-final") {
        return "./components/verbs/final/verb-final.html";
    }

    if (parts[0] === "word-order" && parts[1] === "huvudsats-easy") {
        return "./components/word-order/huvudsats/huvudsats-easy.html";
    }

    if (parts[0] === "word-order" && parts[1] === "huvudsats-intermediate") {
        return "./components/word-order/huvudsats/huvudsats-intermediate.html";
    }

    if (parts[0] === "word-order" && parts[1] === "huvudsats-advanced") {
        return "./components/word-order/huvudsats/huvudsats-advanced.html";
    }

    return `./components/${parts[0]}/${parts[1]}/${parts[1]}.html`;
}

function updateBreadcrumbs(route) {
    const breadcrumbs = document.querySelector("#breadcrumbs");
    const parts = route.replace("#", "").split("/");

    breadcrumbs.innerHTML = `
        <a href="#home">Home</a>
        ${parts[0] === "home" ? "" : parts.map((part, index) => {
            const path = parts.slice(0, index + 1).join("/");
            const label = capitalize(part);

            return `
                <span>›</span>
                <a href="#${path}">${label}</a>
            `;
        }).join("")}
    `;
}

async function loadRouteScript(route) {

    if (route === "#verbs/present") {
        const module = await import("./components/verbs/present/present.js");
        module.renderPresentQuiz();
    }

    if (route === "#verbs/present-fill-the-gap") {
        const module = await import("./components/verbs/present/present-fill-the-gap.js");
        module.renderPresentFillGapQuiz();
    }

    if (route == "#verbs/preteritum") {
        const module = await import("./components/verbs/preteritum/preteritum.js");
        module.renderPreteritumQuiz();
    }

    if (route == "#verbs/preteritum-fill-the-gap") {
        const module = await import("./components/verbs/preteritum/preteritum-fill-the-gap.js");
        module.renderPreteritumFillGapQuiz();
    }

    if (route == "#verbs/perfekt") {
        const module = await import("./components/verbs/perfekt/perfekt.js");
        module.renderPerfektQuiz();
    }

    if (route == "#verbs/perfekt-fill-the-gap") {
        const module = await import("./components/verbs/perfekt/perfekt-fill-the-gap.js");
        module.renderPerfektFillGapQuiz();
    }

    if (route == "#verbs/imperativ-fill-the-gap") {
        const module = await import("./components/verbs/imperativ/imperativ-fill-the-gap.js");
        module.renderImperativFillGapQuiz();
    }

    if (route == "#verbs/verb-final") {
        const module = await import("./components/verbs/final/verb-final.js");
        module.renderVerbFinalQuiz();
    }
    if (route === "#word-order/huvudsats-easy") {
        const module = await import("./components/word-order/huvudsats/huvudsats-easy.js");
        module.renderEasyHuvudsatsDragQuiz();
    }

    if (route === "#word-order/huvudsats-intermediate") {
        const module = await import("./components/word-order/huvudsats/huvudsats-intermediate.js");
        module.renderIntermediateHuvudsatsDragQuiz();
    }

    if (route === "#word-order/huvudsats-advanced") {
        const module = await import("./components/word-order/huvudsats/huvudsats-advanced.js");
        module.renderAdvancedHuvudsatsDragQuiz();
    }
}

async function router() {
    const route = window.location.hash || "#home";
    const parts = route.replace("#", "").split("/");

    updateBreadcrumbs(route);

    if (parts[0] === "home") {
        await loadPage("./components/home/home.html");
        return;
    }

    const filePath = buildPath(parts);

    await loadPage(filePath);
    await loadRouteScript(route);
}

function capitalize(word) {
    return word
        .split("-")
        .map(item => item.charAt(0).toUpperCase() + item.slice(1))
        .join(" ");
}

window.addEventListener("DOMContentLoaded", async () => {
    await loadComponent(
        "header-container",
        "./components/header/header.html"
    );

    await router();
});

window.addEventListener("hashchange", router);