import { presentQuestions } from "../present/present-fill-the-gap.js";
import { preteritumQuestions } from "../preteritum/preteritum-fill-the-gap.js";
import { perfektQuestions } from "../perfekt/perfekt-fill-the-gap.js";
import { imperativQuestions } from "../imperativ/imperativ-fill-the-gap.js";

function getRandomQuestions(array, count, category) {
    return [...array]
        .sort(() => Math.random() - 0.5)
        .slice(0, count)
        .map(question => ({
            ...question,
            category
        }));
}

function normalizeAnswer(answer) {
    return answer.trim().toLowerCase();
}

export function renderVerbFinalQuiz() {
    const quizForm = document.querySelector("#gap-quiz");
    const scoreBox = document.querySelector("#quiz-score");
    const resetButton = document.querySelector("#quiz-reset");

    if (!quizForm) return;

    scoreBox.classList.remove("is-visible");
    scoreBox.textContent = "";

    const questions = [
        ...getRandomQuestions(presentQuestions, 5, "Presens"),
        ...getRandomQuestions(preteritumQuestions, 5, "Preteritum"),
        ...getRandomQuestions(perfektQuestions, 5, "Perfekt"),
        ...getRandomQuestions(imperativQuestions, 5, "Imperativ")
    ].sort(() => Math.random() - 0.5);

    quizForm.innerHTML = questions.map((item, index) => `
        <section class="quiz-item" data-question-index="${index}">
            <p class="question">${index + 1}. ${item.question}</p>

            <input
                type="text"
                class="gap-input"
                name="q${index}"
                autocomplete="off"
                placeholder="Write your answer"
            >
        </section>
    `).join("");

    quizForm.onsubmit = event => {
        event.preventDefault();

        let score = 0;
        const categoryScores = {};

        questions.forEach((item, index) => {
            const quizItem = quizForm.querySelector(`[data-question-index="${index}"]`);
            const input = quizForm.querySelector(`input[name="q${index}"]`);

            const userAnswer = normalizeAnswer(input.value);
            const correctAnswer = normalizeAnswer(item.answer);

            if (!categoryScores[item.category]) {
                categoryScores[item.category] = {
                    correct: 0,
                    total: 0
                };
            }

            categoryScores[item.category].total++;

            quizItem.classList.remove("is-correct", "is-incorrect");
            quizItem.querySelectorAll(".hint").forEach(hint => hint.remove());

            if (userAnswer === correctAnswer) {
                score++;
                categoryScores[item.category].correct++;
                quizItem.classList.add("is-correct");
            } else {
                quizItem.classList.add("is-incorrect");

                const hint = document.createElement("p");
                hint.className = "hint";
                hint.innerHTML = item.hint;

                quizItem.appendChild(hint);
            }
        });

        scoreBox.innerHTML = `
            <p>You scored ${score} out of ${questions.length}.</p>
            <p>
                Presens: ${categoryScores.Presens.correct}/${categoryScores.Presens.total}<br>
                Preteritum: ${categoryScores.Preteritum.correct}/${categoryScores.Preteritum.total}<br>
                Perfekt: ${categoryScores.Perfekt.correct}/${categoryScores.Perfekt.total}<br>
                Imperativ: ${categoryScores.Imperativ.correct}/${categoryScores.Imperativ.total}
            </p>
        `;

        scoreBox.classList.add("is-visible");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (resetButton) {
        resetButton.onclick = () => {
            renderVerbFinalQuiz();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    }
}