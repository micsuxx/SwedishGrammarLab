const VERSION = "20260710"; // <<< CHANGE THIS EACH UPDATE
const SITE_VERSION = "2026-07-10"; // <<< CHANGE THIS EACH UPDATE

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

    if (parts[0] === "verbs" && parts[1] === "s-passiv") {
        return "./components/verbs/passiv/s-passiv.html";
    }

    if (parts[0] === "verbs" && parts[1] === "bli-passiv") {
        return "./components/verbs/passiv/bli-passiv.html";
    }

    if (parts[0] === "verbs" && parts[1] === "vara-passiv") {
        return "./components/verbs/passiv/vara-passiv.html";
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

    if (parts[0] === "word-order" && parts[1] === "bisats-easy") {
        return "./components/word-order/bisats/bisats-easy.html";
    }

    if (parts[0] === "word-order" && parts[1] === "bisats-intermediate") {
        return "./components/word-order/bisats/bisats-intermediate.html";
    }

    if (parts[0] === "word-order" && parts[1] === "bisats-advanced") {
        return "./components/word-order/bisats/bisats-advanced.html";
    }

    if (parts[0] === "word-order" && parts[1] === "huvudsats-bisats") {
        return "./components/word-order/bisats/huvudsats-bisats.html";
    }

    if (parts[0] === "conjunctions" && parts[1] === "generella-subjunktioner") {
        return "./components/conjunctions/subjunktioner/generella.html";
    }

    if (parts[0] === "conjunctions" && parts[1] === "temporala-subjunktioner") {
        return "./components/conjunctions/subjunktioner/temporala.html";
    }

    if (parts[0] === "conjunctions" && parts[1] === "kausala-subjunktioner") {
        return "./components/conjunctions/subjunktioner/kausala.html";
    }

    if (parts[0] === "conjunctions" && parts[1] === "villkorliga-subjunktioner") {
        return "./components/conjunctions/subjunktioner/villkorliga.html";
    }

    if (parts[0] === "conjunctions" && parts[1] === "finala-subjunktioner") {
        return "./components/conjunctions/subjunktioner/finala.html";
    }

    if (parts[0] === "conjunctions" && parts[1] === "koncessiva-subjunktioner") {
        return "./components/conjunctions/subjunktioner/koncessiva.html";
    }

    if (parts[0] === "conjunctions" && parts[1] === "komparativa-subjunktioner") {
        return "./components/conjunctions/subjunktioner/komparativa.html";
    }

    if (parts[0] === "conjunctions" && parts[1] === "konsekutiva-subjunktioner") {
        return "./components/conjunctions/subjunktioner/konsekutiva.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "most-common") {
        return "./components/prepositions/prepositions/1mostcommon.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "av") {
        return "./components/prepositions/prepositions/av.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "foer") {
        return "./components/prepositions/prepositions/foer.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "fraan") {
        return "./components/prepositions/prepositions/fraan.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "i") {
        return "./components/prepositions/prepositions/i.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "med") {
        return "./components/prepositions/prepositions/med.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "om") {
        return "./components/prepositions/prepositions/om.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "paa") {
        return "./components/prepositions/prepositions/paa.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "till") {
        return "./components/prepositions/prepositions/till.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "under") {
        return "./components/prepositions/prepositions/under.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "vid") {
        return "./components/prepositions/prepositions/vid.html";
    }

    if (parts[0] === "prepositions" && parts[1] === "prepositions-fill-the-gap") {
        return "./components/prepositions/exercises/prepositions-fill-the-gap.html";
    }

    if (parts[0] === "nouns" && parts[1] === "en-vs-ett") {
        return "./components/nouns/exercises/en-vs-ett.html";
    }

    if (parts[0] === "nouns" && parts[1] === "singular-vs-plural") {
        return "./components/nouns/exercises/singular-vs-plural.html";
    }

    if (parts[0] === "nouns" && parts[1] === "definite-form-singular") {
        return "./components/nouns/exercises/definite-form-singular.html";
    }

    if (parts[0] === "nouns" && parts[1] === "definite-form-plural") {
        return "./components/nouns/exercises/definite-form-plural.html";
    }

    if (parts[0] === "nouns" && parts[1] === "declensions") {
        return "./components/nouns/exercises/declensions.html";
    }

    if (parts[0] === "nouns" && parts[1] === "fix-the-mistake") {
        return "./components/nouns/exercises/fix-the-mistake.html";
    }

    if (parts[0] === "nouns" && parts[1] === "genitive") {
        return "./components/nouns/exercises/genitive.html";
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

    if (route == "#verbs/s-passiv") {
        const module = await import("./components/verbs/passiv/s-passiv.js");
        module.renderSPassivQuiz();
    }

    if (route == "#verbs/bli-passiv") {
        const module = await import("./components/verbs/passiv/bli-passiv.js");
        module.renderBliPassivQuiz();
    }

    if (route == "#verbs/vara-passiv") {
        const module = await import("./components/verbs/passiv/vara-passiv.js");
        module.renderVaraPassivQuiz();
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

    if (route === "#word-order/bisats-easy") {
        const module = await import("./components/word-order/bisats/bisats-easy.js");
        module.renderBisatsEasyQuiz();
    }

    if (route === "#word-order/bisats-intermediate") {
        const module = await import("./components/word-order/bisats/bisats-intermediate.js");
        module.renderBisatsIntermediateQuiz();
    }

    if (route === "#word-order/bisats-advanced") {
        const module = await import("./components/word-order/bisats/bisats-advanced.js");
        module.renderAdvancedBisatsDragQuiz();
    }

    if (route === "#word-order/huvudsats-bisats") {
        const module = await import("./components/word-order/bisats/huvudsats-bisats.js");
        module.renderMistakeQuiz();
    }

    if (route == "#prepositions/prepositions-fill-the-gap") {
        const module = await import("./components/prepositions/exercises/prepositions-fill-the-gap.js");
        module.renderPrepositionFillGapQuiz();
    }

    if (route == "#nouns/en-vs-ett") {
        const module = await import("./components/nouns/exercises/en-vs-ett.js");
        module.renderEnEttQuiz();
    }

    if (route == "#nouns/singular-vs-plural") {
        const module = await import("./components/nouns/exercises/singular-vs-plural.js");
        module.renderSingularPluralQuiz();
    }

    if (route == "#nouns/definite-form-singular") {
        const module = await import("./components/nouns/exercises/definite-form-singular.js");
        module.renderDefiniteSingularQuiz();
    }

    if (route == "#nouns/definite-form-plural") {
        const module = await import("./components/nouns/exercises/definite-form-plural.js");
        module.renderDefinitePluralQuiz();
    }

    if (route == "#nouns/declensions") {
        const module = await import("./components/nouns/exercises/declensions.js");
        module.renderDeclensionsQuiz();
    }

    if (route == "#nouns/fix-the-mistake") {
        const module = await import("./components/nouns/exercises/fix-the-mistake.js");
        module.renderFixTheMistakeQuiz();
    }

    if (route == "#nouns/genitive") {
        const module = await import("./components/nouns/exercises/genitive.js");
        module.renderGenitiveQuiz();
    }

}

async function router() {
    const route = window.location.hash || "#home";
    const parts = route.replace("#", "").split("/");

    updateBreadcrumbs(route);

    if (parts[0] === "home") {
        await loadPage("./components/home/home.html");
        removeExpiredNewBadges();
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

function removeExpiredNewBadges() {
    document.querySelectorAll(".category-card.new[data-release]").forEach(card => {
        const releaseDate = new Date(card.dataset.release);
        const daysOld = (Date.now() - releaseDate) / 86400000;

        if (daysOld > 7) {
            card.classList.remove("new");
        }
    });
}

window.addEventListener("DOMContentLoaded", async () => {
    const lastUpdated = document.getElementById("last-updated");

    if (lastUpdated) {

        lastUpdated.textContent = `Last updated: ${SITE_VERSION}`;

    }

    await loadComponent(
        "header-container",
        "./components/header/header.html"
    );

    await router();
});

window.addEventListener("hashchange", router);

/* ==========================================
   PASSWORD HASHING
========================================== */

const PASSWORD_HASH =
    "0193e191af096da7dede9c6e8c8c11a467a40c4a71a4c4a9ec3066287cc436dc";

let failedAttempts = 0;

async function sha256(text) {

    const data =
        new TextEncoder().encode(text);

    const hashBuffer =
        await crypto.subtle.digest(
            "SHA-256",
            data
        );

    return Array
        .from(new Uint8Array(hashBuffer))
        .map(byte =>
            byte.toString(16).padStart(2, "0")
        )
        .join("");
}

/* ==========================================
   RESOURCE ACCESS
========================================== */

document.addEventListener("click", async (event) => {

    const resourceLink =
        event.target.closest("#resources-link");

    if (!resourceLink) return;

    event.preventDefault();

    const password =
        prompt("Please enter the password given to you by Mike:");

    if (!password) return;

    const enteredHash =
        await sha256(password);

    if (enteredHash === PASSWORD_HASH) {

        failedAttempts = 0;

        window.location.hash =
            "#resources";

    } else {

        failedAttempts++;

        if (failedAttempts >= 5) {
            alert(
                "Attempt #" + failedAttempts + ". Congratulations. You have discovered an alternative exercise: Advanced Password Guessing (C2 level)."
            );

        } else if (failedAttempts >= 4) {

            alert(
                "Attempt #" + failedAttempts + ". Statistically speaking, Mike will answer your email before you guess the password."
            );

        } else if (failedAttempts >= 3) {

            alert(
                "I see you are trying to guess the password. That's quite ambitious. Fun fact: learning Swedish grammar is usually easier than guessing this password."
            );

        } else {

            alert(
                "This password appears no longer to be valid. Please try again."
            );

        }

    }

});