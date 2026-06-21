const mistakeQuestions = [
    {
        incorrect: "Igår jag gick till affären.",
        correct: "Igår gick jag till affären.",
        rule: "V2",
        explanation: "When a main clause begins with a time expression, the finite verb comes before the subject."
    },
    {
        incorrect: "I morgon vi ska träffa läraren.",
        correct: "I morgon ska vi träffa läraren.",
        rule: "V2",
        explanation: "The finite verb must be in second position in a main clause."
    },
    {
        incorrect: "På kvällen hon brukar läsa böcker.",
        correct: "På kvällen brukar hon läsa böcker.",
        rule: "V2",
        explanation: "After an initial adverbial, the finite verb comes before the subject."
    },
    {
        incorrect: "Jag vet att hon kommer inte i dag.",
        correct: "Jag vet att hon inte kommer i dag.",
        rule: "BIFF",
        explanation: "In a subordinate clause, the sentence adverbial comes before the finite verb."
    },
    {
        incorrect: "Han säger att han har aldrig varit där.",
        correct: "Han säger att han aldrig har varit där.",
        rule: "BIFF",
        explanation: "In a subordinate clause, adverbials such as 'aldrig' come before the finite verb."
    },
    {
        incorrect: "Jag tror att de kan inte hjälpa oss.",
        correct: "Jag tror att de inte kan hjälpa oss.",
        rule: "BIFF",
        explanation: "In a bisats, 'inte' comes before the finite verb."
    },
    {
        incorrect: "När jag kom hem jag lagade mat.",
        correct: "När jag kom hem lagade jag mat.",
        rule: "V2 after initial bisats",
        explanation: "When a subordinate clause comes first, the following main clause begins with the finite verb."
    },
    {
        incorrect: "Eftersom hon var sjuk hon stannade hemma.",
        correct: "Eftersom hon var sjuk stannade hon hemma.",
        rule: "V2 after initial bisats",
        explanation: "An initial subordinate clause counts as position 1, so the finite verb comes next."
    },
    {
        incorrect: "Om det regnar vi stannar hemma.",
        correct: "Om det regnar stannar vi hemma.",
        rule: "V2 after initial bisats",
        explanation: "After an initial subordinate clause, the main clause has inversion."
    },
    {
        incorrect: "Jag undrar om han kommer inte.",
        correct: "Jag undrar om han inte kommer.",
        rule: "BIFF",
        explanation: "In an indirect question, the subordinate clause follows BIFF."
    },
    {
        incorrect: "Efter att mötet hade avslutats vi gick hem.",
        correct: "Efter att mötet hade avslutats gick vi hem.",
        rule: "V2 after initial bisats",
        explanation: "The subordinate clause occupies the first position."
    },
    {
        incorrect: "Jag tror att hon kommer förmodligen inte i morgon.",
        correct: "Jag tror att hon förmodligen inte kommer i morgon.",
        rule: "BIFF",
        explanation: "Sentence adverbials come before the finite verb in a bisats."
    },
    {
        incorrect: "När jag äntligen hade hittat dokumentet jag skickade det direkt.",
        correct: "När jag äntligen hade hittat dokumentet skickade jag det direkt.",
        rule: "V2 after initial bisats",
        explanation: "The main clause begins with the finite verb."
    },
    {
        incorrect: "Han sa att han hade aldrig sett något liknande.",
        correct: "Han sa att han aldrig hade sett något liknande.",
        rule: "BIFF",
        explanation: "Never place 'aldrig' after the finite verb in a bisats."
    },
    {
        incorrect: "Om du inte kan komma i morgon vi får boka om mötet.",
        correct: "Om du inte kan komma i morgon får vi boka om mötet.",
        rule: "V2 after initial bisats",
        explanation: "Inversion is required."
    },
    {
        incorrect: "Jag undrar varför hon svarade inte på mejlet.",
        correct: "Jag undrar varför hon inte svarade på mejlet.",
        rule: "BIFF",
        explanation: "Indirect questions are subordinate clauses."
    },
    {
        incorrect: "Trots att vädret var dåligt vi bestämde oss för att gå.",
        correct: "Trots att vädret var dåligt bestämde vi oss för att gå.",
        rule: "V2 after initial bisats",
        explanation: "The main clause must begin with the finite verb."
    },
    {
        incorrect: "Hon berättade att hon skulle kanske flytta till Sverige.",
        correct: "Hon berättade att hon kanske skulle flytta till Sverige.",
        rule: "BIFF",
        explanation: "The adverbial precedes the finite verb."
    },
    {
        incorrect: "När kursen var slut eleverna började applådera.",
        correct: "När kursen var slut började eleverna applådera.",
        rule: "V2 after initial bisats",
        explanation: "Inversion follows an initial subordinate clause."
    },
    {
        incorrect: "Jag vet att de har fortfarande inte bestämt sig.",
        correct: "Jag vet att de fortfarande inte har bestämt sig.",
        rule: "BIFF",
        explanation: "Both adverbials come before the finite verb."
    },
    {
        incorrect: "Eftersom han inte hade studerat tillräckligt han misslyckades på provet.",
        correct: "Eftersom han inte hade studerat tillräckligt misslyckades han på provet.",
        rule: "V2 after initial bisats",
        explanation: "The main clause requires inversion."
    },
    {
        incorrect: "Läraren märkte att eleverna förstod inte uppgiften.",
        correct: "Läraren märkte att eleverna inte förstod uppgiften.",
        rule: "BIFF",
        explanation: "Negation comes before the finite verb."
    },
    {
        incorrect: "När hon hade avslutat rapporten hon skickade den till chefen.",
        correct: "När hon hade avslutat rapporten skickade hon den till chefen.",
        rule: "V2 after initial bisats",
        explanation: "Finite verb before subject."
    },
    {
        incorrect: "Vi vet att projektet kommer troligen att försenas.",
        correct: "Vi vet att projektet troligen kommer att försenas.",
        rule: "BIFF",
        explanation: "The sentence adverbial comes before the finite verb."
    },
    {
        incorrect: "Om ingen hade upptäckt felet problemet skulle ha blivit större.",
        correct: "Om ingen hade upptäckt felet skulle problemet ha blivit större.",
        rule: "V2 after initial bisats",
        explanation: "The finite verb starts the main clause."
    },
    {
        incorrect: "Jag tror att hon har egentligen rätt.",
        correct: "Jag tror att hon egentligen har rätt.",
        rule: "BIFF",
        explanation: "Sentence adverbials precede the finite verb."
    },
    {
        incorrect: "När vi kom fram till stationen tåget hade redan avgått.",
        correct: "När vi kom fram till stationen hade tåget redan avgått.",
        rule: "V2 after initial bisats",
        explanation: "The finite verb must come first."
    },
    {
        incorrect: "Hon sade att hon kunde tyvärr inte hjälpa oss.",
        correct: "Hon sade att hon tyvärr inte kunde hjälpa oss.",
        rule: "BIFF",
        explanation: "Sentence adverbials come before the finite verb."
    },
    {
        incorrect: "Fastän han var mycket trött han fortsatte arbeta.",
        correct: "Fastän han var mycket trött fortsatte han arbeta.",
        rule: "V2 after initial bisats",
        explanation: "Initial bisats triggers inversion."
    },
    {
        incorrect: "Jag hörde att de skulle förmodligen komma senare.",
        correct: "Jag hörde att de förmodligen skulle komma senare.",
        rule: "BIFF",
        explanation: "Sentence adverbial before finite verb."
    },
    {
        incorrect: "När läraren hade ställt frågan ingen svarade.",
        correct: "När läraren hade ställt frågan svarade ingen.",
        rule: "V2 after initial bisats",
        explanation: "Finite verb before subject."
    },
    {
        incorrect: "Hon påstod att hon var aldrig informerad om beslutet.",
        correct: "Hon påstod att hon aldrig var informerad om beslutet.",
        rule: "BIFF",
        explanation: "The adverbial comes before the finite verb."
    },
    {
        incorrect: "Om du verkligen vill lära dig svenska du måste öva varje dag.",
        correct: "Om du verkligen vill lära dig svenska måste du öva varje dag.",
        rule: "V2 after initial bisats",
        explanation: "The main clause begins with the finite verb."
    },
    {
        incorrect: "Vi tror att han har förmodligen missförstått instruktionerna.",
        correct: "Vi tror att han förmodligen har missförstått instruktionerna.",
        rule: "BIFF",
        explanation: "The sentence adverbial comes before the finite verb."
    },
    {
        incorrect: "När resultaten publicerades många blev överraskade.",
        correct: "När resultaten publicerades blev många överraskade.",
        rule: "V2 after initial bisats",
        explanation: "Finite verb before subject."
    },
    {
        incorrect: "Jag vet inte om hon kommer kanske senare.",
        correct: "Jag vet inte om hon kanske kommer senare.",
        rule: "BIFF",
        explanation: "Indirect questions follow BIFF."
    },
    {
        incorrect: "Eftersom vi inte hade fått någon information vi blev förvirrade.",
        correct: "Eftersom vi inte hade fått någon information blev vi förvirrade.",
        rule: "V2 after initial bisats",
        explanation: "The finite verb starts the main clause."
    },
    {
        incorrect: "Hon förklarade att företaget kunde inte längre fortsätta verksamheten.",
        correct: "Hon förklarade att företaget inte längre kunde fortsätta verksamheten.",
        rule: "BIFF",
        explanation: "Negation precedes the finite verb."
    },
    {
        incorrect: "När alla hade satt sig mötet började.",
        correct: "När alla hade satt sig började mötet.",
        rule: "V2 after initial bisats",
        explanation: "Finite verb before subject."
    },
    {
        incorrect: "Jag misstänker att de har fortfarande inte förstått problemet.",
        correct: "Jag misstänker att de fortfarande inte har förstått problemet.",
        rule: "BIFF",
        explanation: "Sentence adverbials precede the finite verb."
    },
    {
        incorrect: "Jag vet att hon har aldrig varit i Norge.",
        correct: "Jag vet att hon aldrig har varit i Norge.",
        rule: "HEFF"
    },
    {
        incorrect: "Han säger att han kan inte hjälpa oss.",
        correct: "Han säger att han inte kan hjälpa oss.",
        rule: "HEFF"
    },
    {
        incorrect: "Vi tror att de kommer förmodligen senare.",
        correct: "Vi tror att de förmodligen kommer senare.",
        rule: "HEFF"
    },
    {
        incorrect: "Hon berättade att hon skulle kanske flytta.",
        correct: "Hon berättade att hon kanske skulle flytta.",
        rule: "HEFF"
    },
    {
        incorrect: "Jag hörde att han hade redan gått hem.",
        correct: "Jag hörde att han redan hade gått hem.",
        rule: "HEFF"
    },
    {
        incorrect: "Vi vet att hon är fortfarande sjuk.",
        correct: "Vi vet att hon fortfarande är sjuk.",
        rule: "HEFF"
    },
    {
        incorrect: "Läraren märkte att eleverna förstod inte uppgiften.",
        correct: "Läraren märkte att eleverna inte förstod uppgiften.",
        rule: "HEFF"
    },
    {
        incorrect: "Jag tror att han har egentligen rätt.",
        correct: "Jag tror att han egentligen har rätt.",
        rule: "HEFF"
    },
    {
        incorrect: "Hon sa att hon ville inte följa med.",
        correct: "Hon sa att hon inte ville följa med.",
        rule: "HEFF"
    },
    {
        incorrect: "Vi upptäckte att de hade fortfarande inte kommit.",
        correct: "Vi upptäckte att de fortfarande inte hade kommit.",
        rule: "HEFF"
    },
    {
        incorrect: "Efter mötet vi gick direkt hem.",
        correct: "Efter mötet gick vi direkt hem.",
        rule: "V2"
    },
    {
        incorrect: "I den här rapporten man kan se flera problem.",
        correct: "I den här rapporten kan man se flera problem.",
        rule: "V2"
    },
    {
        incorrect: "Förra veckan jag arbetade nästan varje dag.",
        correct: "Förra veckan arbetade jag nästan varje dag.",
        rule: "V2"
    },
    {
        incorrect: "På universitetet studenterna måste använda källor korrekt.",
        correct: "På universitetet måste studenterna använda källor korrekt.",
        rule: "V2"
    },
    {
        incorrect: "I framtiden vi kommer att använda mer AI.",
        correct: "I framtiden kommer vi att använda mer AI.",
        rule: "V2"
    },
    {
        incorrect: "Av den anledningen jag tackade nej.",
        correct: "Av den anledningen tackade jag nej.",
        rule: "V2"
    },
    {
        incorrect: "Under sommaren vi brukar resa mycket.",
        correct: "Under sommaren brukar vi resa mycket.",
        rule: "V2"
    },
    {
        incorrect: "På grund av vädret matchen ställdes in.",
        correct: "På grund av vädret ställdes matchen in.",
        rule: "V2"
    },
    {
        incorrect: "Efter flera timmars väntan tåget äntligen kom.",
        correct: "Efter flera timmars väntan kom tåget äntligen.",
        rule: "V2"
    },
    {
        incorrect: "I den situationen man måste tänka efter noga.",
        correct: "I den situationen måste man tänka efter noga.",
        rule: "V2"
    },
    {
        incorrect: "Jag vet att hon kommer inte eftersom hon är sjuk.",
        correct: "Jag vet att hon inte kommer eftersom hon är sjuk.",
        rule: "HEFF + Double Bisats"
    },
    {
        incorrect: "Jag tror att han har inte svarat eftersom han arbetar.",
        correct: "Jag tror att han inte har svarat eftersom han arbetar.",
        rule: "HEFF + Double Bisats"
    },
    {
        incorrect: "Vi vet att de kunde inte komma eftersom tåget var inställt.",
        correct: "Vi vet att de inte kunde komma eftersom tåget var inställt.",
        rule: "HEFF + Double Bisats"
    },
    {
        incorrect: "Hon sa att hon hade aldrig besökt Sverige innan hon flyttade hit.",
        correct: "Hon sa att hon aldrig hade besökt Sverige innan hon flyttade hit.",
        rule: "HEFF + Double Bisats"
    },
    {
        incorrect: "Jag märkte att han var inte hemma när jag kom dit.",
        correct: "Jag märkte att han inte var hemma när jag kom dit.",
        rule: "HEFF + Double Bisats"
    },
    {
        incorrect: "När jag såg att han svarade inte blev jag orolig.",
        correct: "När jag såg att han inte svarade blev jag orolig.",
        rule: "HEFF + V2"
    },
    {
        incorrect: "När läraren märkte att eleverna förstod inte uppgiften gav hon fler exempel.",
        correct: "När läraren märkte att eleverna inte förstod uppgiften gav hon fler exempel.",
        rule: "HEFF + V2"
    },
    {
        incorrect: "Eftersom jag visste att hon skulle inte komma bokade jag av mötet.",
        correct: "Eftersom jag visste att hon inte skulle komma bokade jag av mötet.",
        rule: "HEFF + V2"
    },
    {
        incorrect: "När vi upptäckte att tåget hade inte avgått väntade vi kvar.",
        correct: "När vi upptäckte att tåget inte hade avgått väntade vi kvar.",
        rule: "HEFF + V2"
    },
    {
        incorrect: "Om du vet att han kommer inte måste du berätta det.",
        correct: "Om du vet att han inte kommer måste du berätta det.",
        rule: "HEFF + V2"
    },
    {
        incorrect: "När jag hörde att hon hade fortfarande inte fått något svar blev jag förvånad.",
        correct: "När jag hörde att hon fortfarande inte hade fått något svar blev jag förvånad.",
        rule: "HEFF + V2"
    },
    {
        incorrect: "Jag tror att hon kommer förmodligen inte eftersom hon arbetar sent.",
        correct: "Jag tror att hon förmodligen inte kommer eftersom hon arbetar sent.",
        rule: "HEFF + Double Bisats"
    },
    {
        incorrect: "Vi märkte att de hade egentligen inte förstått instruktionerna när provet började.",
        correct: "Vi märkte att de egentligen inte hade förstått instruktionerna när provet började.",
        rule: "HEFF + Double Bisats"
    },
    {
        incorrect: "När hon insåg att hon kunde inte klara uppgiften bad hon om hjälp.",
        correct: "När hon insåg att hon inte kunde klara uppgiften bad hon om hjälp.",
        rule: "HEFF + V2"
    },
    {
        incorrect: "Eftersom jag visste att de skulle förmodligen komma sent väntade jag.",
        correct: "Eftersom jag visste att de förmodligen skulle komma sent väntade jag.",
        rule: "HEFF + Double Bisats"
    },
    {
        incorrect: "När läraren förstod att eleverna hade fortfarande frågor fortsatte hon lektionen.",
        correct: "När läraren förstod att eleverna fortfarande hade frågor fortsatte hon lektionen.",
        rule: "HEFF + V2"
    },
    {
        incorrect: "Jag märkte att hon var kanske inte redo eftersom hon såg nervös ut.",
        correct: "Jag märkte att hon kanske inte var redo eftersom hon såg nervös ut.",
        rule: "HEFF + Double Bisats"
    },
    {
        incorrect: "Om du tror att jag har inte läst rapporten har du fel.",
        correct: "Om du tror att jag inte har läst rapporten har du fel.",
        rule: "HEFF + V2"
    },
    {
        incorrect: "När vi upptäckte att de hade aldrig skickat mejlet blev vi förvånade.",
        correct: "När vi upptäckte att de aldrig hade skickat mejlet blev vi förvånade.",
        rule: "HEFF + V2"
    },
    {
        incorrect: "Eftersom hon visste att han kunde inte hjälpa henne frågade hon någon annan.",
        correct: "Eftersom hon visste att han inte kunde hjälpa henne frågade hon någon annan.",
        rule: "HEFF + Double Bisats"
    }
];

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[.,!?]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

export function renderMistakeQuiz() {
    const quizForm = document.querySelector("#mistake-quiz");
    const scoreBox = document.querySelector("#quiz-score");
    const resetButton = document.querySelector("#quiz-reset");

    if (!quizForm) return;

    scoreBox.classList.remove("is-visible");
    scoreBox.textContent = "";

    const questions = shuffle(mistakeQuestions).slice(0, 6);

    quizForm.innerHTML = questions.map((item, index) => `
        <section class="quiz-item" data-question-index="${index}">
            <p class="question">${index + 1}. Rewrite the sentence correctly.</p>

            <p class="incorrect-sentence">
                ${item.incorrect}
            </p>

            <input
                type="text"
                class="correction-input"
                placeholder="Write the correct sentence..."
                autocomplete="off"
            >
        </section>
    `).join("");

    quizForm.onsubmit = event => {
        event.preventDefault();

        let score = 0;

        questions.forEach((item, index) => {
            const quizItem = quizForm.querySelector(
                `[data-question-index="${index}"]`
            );

            const input = quizItem.querySelector(".correction-input");
            const userAnswer = input.value;

            quizItem.classList.remove("is-correct", "is-incorrect");
            quizItem.querySelectorAll(".hint").forEach(hint => hint.remove());

            if (normalizeText(userAnswer) === normalizeText(item.correct)) {
                score++;
                quizItem.classList.add("is-correct");
            } else {
                quizItem.classList.add("is-incorrect");

                const hint = document.createElement("p");
                hint.className = "hint";
                hint.innerHTML = `
                    Correct sentence: "<b><i>${item.correct}</i></b>"<br>
                    Rule: <b>${item.rule}</b><br>
                    ${item.explanation}
                `;

                quizItem.appendChild(hint);
            }
        });

        scoreBox.textContent = `You scored ${score} out of ${questions.length}.`;
        scoreBox.classList.add("is-visible");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (resetButton) {
        resetButton.onclick = () => {
            renderMistakeQuiz();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    }
}