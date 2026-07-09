export const varaPassiveQuestions = [
    {
        question: "Vaktmästaren har stängt dörren.",
        answer: "Dörren är stängd.",
        hint: 'The correct sentence is "<b><i>Dörren är stängd.</i></b>".'
    },
    {
        question: "Kocken har lagat maten.",
        answer: "Maten är lagad.",
        hint: 'The correct sentence is "<b><i>Maten är lagad.</i></b>".'
    },
    {
        question: "Läraren har rättat proven.",
        answer: "Proven är rättade.",
        hint: 'The correct sentence is "<b><i>Proven är rättade.</i></b>".'
    },
    {
        question: "Någon har öppnat fönstret.",
        answer: "Fönstret är öppnat.",
        hint: 'The correct sentence is "<b><i>Fönstret är öppnat.</i></b>".'
    },
    {
        question: "Företaget har sålt huset.",
        answer: "Huset är sålt.",
        hint: 'The correct sentence is "<b><i>Huset är sålt.</i></b>".'
    },
    {
        question: "Någon har skrivit rapporten.",
        answer: "Rapporten är skriven.",
        hint: 'The correct sentence is "<b><i>Rapporten är skriven.</i></b>".'
    },
    {
        question: "Konstnären har målat tavlan.",
        answer: "Tavlan är målad.",
        hint: 'The correct sentence is "<b><i>Tavlan är målad.</i></b>".'
    },
    {
        question: "Byggföretaget har byggt bron.",
        answer: "Bron är byggd.",
        hint: 'The correct sentence is "<b><i>Bron är byggd.</i></b>".'
    },
    {
        question: "Kommunen har renoverat skolan.",
        answer: "Skolan är renoverad.",
        hint: 'The correct sentence is "<b><i>Skolan är renoverad.</i></b>".'
    },
    {
        question: "Någon har låst bilen.",
        answer: "Bilen är låst.",
        hint: 'The correct sentence is "<b><i>Bilen är låst.</i></b>".'
    },

    {
        question: "Någon har reserverat bordet.",
        answer: "Bordet är reserverat.",
        hint: 'The correct sentence is "<b><i>Bordet är reserverat.</i></b>".'
    },
    {
        question: "Universitetet har godkänt ansökan.",
        answer: "Ansökan är godkänd.",
        hint: 'The correct sentence is "<b><i>Ansökan är godkänd.</i></b>".'
    },
    {
        question: "Domstolen har avgjort målet.",
        answer: "Målet är avgjort.",
        hint: 'The correct sentence is "<b><i>Målet är avgjort.</i></b>".'
    },
    {
        question: "Någon har bokat hotellrummet.",
        answer: "Hotellrummet är bokat.",
        hint: 'The correct sentence is "<b><i>Hotellrummet är bokat.</i></b>".'
    },
    {
        question: "Företaget har publicerat rapporten.",
        answer: "Rapporten är publicerad.",
        hint: 'The correct sentence is "<b><i>Rapporten är publicerad.</i></b>".'
    },

    {
        question: "Någon har förstört dokumentet.",
        answer: "Dokumentet är förstört.",
        hint: 'The correct sentence is "<b><i>Dokumentet är förstört.</i></b>".'
    },
    {
        question: "Skolan har stängt biblioteket.",
        answer: "Biblioteket är stängt.",
        hint: 'The correct sentence is "<b><i>Biblioteket är stängt.</i></b>".'
    },
    {
        question: "Någon har tömt glaset.",
        answer: "Glaset är tömt.",
        hint: 'The correct sentence is "<b><i>Glaset är tömt.</i></b>".'
    },
    {
        question: "Någon har fyllt formuläret.",
        answer: "Formuläret är ifyllt.",
        hint: 'The correct sentence is "<b><i>Formuläret är ifyllt.</i></b>".'
    },
    {
        question: "Någon har avslutat kursen.",
        answer: "Kursen är avslutad.",
        hint: 'The correct sentence is "<b><i>Kursen är avslutad.</i></b>".'
    },

    {
        question: "Kommunen har reparerat vägen.",
        answer: "Vägen är reparerad.",
        hint: 'The correct sentence is "<b><i>Vägen är reparerad.</i></b>".'
    },
    {
        question: "Någon har packat väskan.",
        answer: "Väskan är packad.",
        hint: 'The correct sentence is "<b><i>Väskan är packad.</i></b>".'
    },
    {
        question: "Någon har tvättat bilen.",
        answer: "Bilen är tvättad.",
        hint: 'The correct sentence is "<b><i>Bilen är tvättad.</i></b>".'
    },
    {
        question: "Någon har dekorerat rummet.",
        answer: "Rummet är dekorerat.",
        hint: 'The correct sentence is "<b><i>Rummet är dekorerat.</i></b>".'
    },
    {
        question: "Någon har skrivit kontraktet.",
        answer: "Kontraktet är skrivet.",
        hint: 'The correct sentence is "<b><i>Kontraktet är skrivet.</i></b>".'
    }
];

export function renderVaraPassivQuiz() {

    const quizForm = document.querySelector("#gap-quiz");
    const scoreBox = document.querySelector("#quiz-score");
    const resetButton = document.querySelector("#quiz-reset");

    if (!quizForm) return;

    function shuffle(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }

    let questions = shuffle(varaPassiveQuestions).slice(0, 10);

    function renderQuiz() {

        scoreBox.classList.remove("is-visible");
        scoreBox.textContent = "";

        quizForm.innerHTML = questions.map((item, index) => `
            <section
                class="quiz-item"
                data-question-index="${index}"
            >
                <p class="question">
                    ${index + 1}. ${item.question}
                </p>

                <input
                    type="text"
                    class="correction-input"
                    placeholder="Write the vara-passive sentence..."
                    autocomplete="off"
                >
            </section>
        `).join("");
    }

    renderQuiz();

    quizForm.onsubmit = event => {

        event.preventDefault();

        let score = 0;

        questions.forEach((item, index) => {

            const quizItem = quizForm.querySelector(
                `[data-question-index="${index}"]`
            );

            const input = quizItem.querySelector(".correction-input");

            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = item.answer.trim().toLowerCase();

            quizItem.classList.remove("is-correct", "is-incorrect");

            quizItem
                .querySelectorAll(".hint")
                .forEach(hint => hint.remove());

            if (userAnswer === correctAnswer) {
                score++;
                quizItem.classList.add("is-correct");
            } else {
                quizItem.classList.add("is-incorrect");

                const hint = document.createElement("p");
                hint.className = "hint";
                hint.innerHTML = item.hint;

                quizItem.appendChild(hint);
            }
        });

        scoreBox.textContent =
            `You scored ${score} out of ${questions.length}.`;

        scoreBox.classList.add("is-visible");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (resetButton) {
        resetButton.onclick = () => {
            questions = shuffle(varaPassiveQuestions).slice(0, 10);
            renderQuiz();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    }
}