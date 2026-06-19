const presentQuestions = [
  { question: "Jag _____ svenska varje dag.", options: ["talar", "taler", "tala"], answer: "talar", hint: 'The correct verb is "<b><i>talar</i></b>". The verb <b><i>tala</i></b> forms the present tense as <b><i>talar</i></b>.' },
  { question: "Hon _____ en bok på tåget.", options: ["läser", "läsar", "läsa"], answer: "läser", hint: 'The correct verb is "<b><i>läser</i></b>". The verb <b><i>läsa</i></b> forms the present tense as <b><i>läser</i></b>.' },
  { question: "Vi _____ mycket under lektionen.", options: ["skriver", "skrivir", "skrivar"], answer: "skriver", hint: 'The correct verb is "<b><i>skriver</i></b>". The verb <b><i>skriva</i></b> forms the present tense as <b><i>skriver</i></b>.' },
  { question: "Han _____ kaffe varje morgon.", options: ["dricker", "drickar", "drickir"], answer: "dricker", hint: 'The correct verb is "<b><i>dricker</i></b>". The verb <b><i>dricka</i></b> forms the present tense as <b><i>dricker</i></b>.' },
  { question: "De _____ fotboll efter skolan.", options: ["spelar", "speler", "spela"], answer: "spelar", hint: 'The correct verb is "<b><i>spelar</i></b>". The verb <b><i>spela</i></b> forms the present tense as <b><i>spelar</i></b>.' },
  { question: "Jag _____ till jobbet varje dag.", options: ["kör", "köra", "körer"], answer: "kör", hint: 'The correct verb is "<b><i>kör</i></b>". The verb <b><i>köra</i></b> forms the present tense as <b><i>kör</i></b>.' },
  { question: "Ni _____ alltid tidigt.", options: ["kommer", "kommar", "kommir"], answer: "kommer", hint: 'The correct verb is "<b><i>kommer</i></b>". The verb <b><i>komma</i></b> forms the present tense as <b><i>kommer</i></b>.' },
  { question: "Barnen _____ väldigt snabbt.", options: ["springer", "springar", "springir"], answer: "springer", hint: 'The correct verb is "<b><i>springer</i></b>". The verb <b><i>springa</i></b> forms the present tense as <b><i>springer</i></b>.' },
  { question: "Läraren _____ grammatiken tydligt.", options: ["förklarar", "förklär", "förklara"], answer: "förklarar", hint: 'The correct verb is "<b><i>förklarar</i></b>". The verb <b><i>förklara</i></b> forms the present tense as <b><i>förklarar</i></b>.' },
  { question: "Vi _____ på musik hemma.", options: ["lyssnar", "lyssner", "lyssna"], answer: "lyssnar", hint: 'The correct verb is "<b><i>lyssnar</i></b>". The verb <b><i>lyssna</i></b> forms the present tense as <b><i>lyssnar</i></b>.' },

  { question: "Hon _____ sin vän varje vecka.", options: ["ringer", "ringar", "ringir"], answer: "ringer", hint: 'The correct verb is "<b><i>ringer</i></b>". The verb <b><i>ringa</i></b> forms the present tense as <b><i>ringer</i></b>.' },
  { question: "Jag _____ middag klockan sex.", options: ["lagar", "läger", "laga"], answer: "lagar", hint: 'The correct verb is "<b><i>lagar</i></b>". The verb <b><i>laga</i></b> forms the present tense as <b><i>lagar</i></b>.' },
  { question: "De _____ svenska väldigt bra.", options: ["förstår", "förståer", "förstå"], answer: "förstår", hint: 'The correct verb is "<b><i>förstår</i></b>". The verb <b><i>förstå</i></b> forms the present tense as <b><i>förstår</i></b>.' },
  { question: "Han _____ alltid sanningen.", options: ["säger", "sägerer", "säga"], answer: "säger", hint: 'The correct verb is "<b><i>säger</i></b>". The verb <b><i>säga</i></b> forms the present tense as <b><i>säger</i></b>.' },
  { question: "Vi _____ i Stockholm.", options: ["bor", "borer", "boa"], answer: "bor", hint: 'The correct verb is "<b><i>bor</i></b>". The verb <b><i>bo</i></b> forms the present tense as <b><i>bor</i></b>.' },
  { question: "Ni _____ ofta på bio.", options: ["går", "gåer", "gåa"], answer: "går", hint: 'The correct verb is "<b><i>går</i></b>". The verb <b><i>gå</i></b> forms the present tense as <b><i>går</i></b>.' },
  { question: "Hon _____ sin hund varje kväll.", options: ["promenerar", "promenerer", "promenera"], answer: "promenerar", hint: 'The correct verb is "<b><i>promenerar</i></b>". The verb <b><i>promenera</i></b> forms the present tense as <b><i>promenerar</i></b>.' },
  { question: "Vi _____ alltid våra läxor.", options: ["gör", "görer", "göra"], answer: "gör", hint: 'The correct verb is "<b><i>gör</i></b>". The verb <b><i>göra</i></b> forms the present tense as <b><i>gör</i></b>.' },
  { question: "Barnet _____ hela natten.", options: ["sover", "sovar", "sova"], answer: "sover", hint: 'The correct verb is "<b><i>sover</i></b>". The verb <b><i>sova</i></b> forms the present tense as <b><i>sover</i></b>.' },
  { question: "Lärarna _____ mycket arbete.", options: ["har", "havar", "hava"], answer: "har", hint: 'The correct verb is "<b><i>har</i></b>". The verb <b><i>ha</i></b> forms the present tense as <b><i>har</i></b>.' },

  { question: "Jag _____ alltid sanningen.", options: ["vet", "veter", "veta"], answer: "vet", hint: 'The correct verb is "<b><i>vet</i></b>". The verb <b><i>veta</i></b> forms the present tense as <b><i>vet</i></b>.' },
  { question: "Han _____ dörren försiktigt.", options: ["öppnar", "öppner", "öppna"], answer: "öppnar", hint: 'The correct verb is "<b><i>öppnar</i></b>". The verb <b><i>öppna</i></b> forms the present tense as <b><i>öppnar</i></b>.' },
  { question: "De _____ svenska hemma också.", options: ["talar", "taler", "talir"], answer: "talar", hint: 'The correct verb is "<b><i>talar</i></b>". The verb <b><i>tala</i></b> forms the present tense as <b><i>talar</i></b>.' },
  { question: "Vi _____ på universitetet.", options: ["studerar", "studerer", "studera"], answer: "studerar", hint: 'The correct verb is "<b><i>studerar</i></b>". The verb <b><i>studera</i></b> forms the present tense as <b><i>studerar</i></b>.' },
  { question: "Hon _____ sina vänner ofta.", options: ["träffar", "träffer", "träffa"], answer: "träffar", hint: 'The correct verb is "<b><i>träffar</i></b>". The verb <b><i>träffa</i></b> forms the present tense as <b><i>träffar</i></b>.' },
  { question: "Barnen _____ i parken varje dag.", options: ["leker", "lekar", "lekir"], answer: "leker", hint: 'The correct verb is "<b><i>leker</i></b>". The verb <b><i>leka</i></b> forms the present tense as <b><i>leker</i></b>.' },
  { question: "Vi _____ bussen till centrum.", options: ["tar", "tagar", "taga"], answer: "tar", hint: 'The correct verb is "<b><i>tar</i></b>". The verb <b><i>ta</i></b> forms the present tense as <b><i>tar</i></b>.' },
  { question: "Ni _____ ofta musik tillsammans.", options: ["sjunger", "sjungar", "sjungir"], answer: "sjunger", hint: 'The correct verb is "<b><i>sjunger</i></b>". The verb <b><i>sjunga</i></b> forms the present tense as <b><i>sjunger</i></b>.' },
  { question: "Hon _____ alltid sanningen.", options: ["berättar", "berätter", "berätta"], answer: "berättar", hint: 'The correct verb is "<b><i>berättar</i></b>". The verb <b><i>berätta</i></b> forms the present tense as <b><i>berättar</i></b>.' },
  { question: "Vi _____ nya ord varje vecka.", options: ["lär", "lära", "lärer"], answer: "lär", hint: 'The correct verb is "<b><i>lär</i></b>". The verb <b><i>lära</i></b> forms the present tense as <b><i>lär</i></b>.' },

  { question: "Han _____ alltid efter skolan.", options: ["tränar", "träner", "träna"], answer: "tränar", hint: 'The correct verb is "<b><i>tränar</i></b>". The verb <b><i>träna</i></b> forms the present tense as <b><i>tränar</i></b>.' },
  { question: "Barnet _____ mycket vatten.", options: ["dricker", "drickor", "dricka"], answer: "dricker", hint: 'The correct verb is "<b><i>dricker</i></b>". The verb <b><i>dricka</i></b> forms the present tense as <b><i>dricker</i></b>.' },
  { question: "Vi _____ alltid tillsammans hemma.", options: ["äter", "ätar", "äta"], answer: "äter", hint: 'The correct verb is "<b><i>äter</i></b>". The verb <b><i>äta</i></b> forms the present tense as <b><i>äter</i></b>.' },
  { question: "De _____ ofta till Malmö.", options: ["reser", "resar", "resa"], answer: "reser", hint: 'The correct verb is "<b><i>reser</i></b>". The verb <b><i>resa</i></b> forms the present tense as <b><i>reser</i></b>.' },
  { question: "Jag _____ alltid tidigt på morgonen.", options: ["vaknar", "vakner", "vakna"], answer: "vaknar", hint: 'The correct verb is "<b><i>vaknar</i></b>". The verb <b><i>vakna</i></b> forms the present tense as <b><i>vaknar</i></b>.' },
  { question: "Han _____ mycket på jobbet.", options: ["arbetar", "arbetor", "arbeta"], answer: "arbetar", hint: 'The correct verb is "<b><i>arbetar</i></b>". The verb <b><i>arbeta</i></b> forms the present tense as <b><i>arbetar</i></b>.' },
  { question: "Barnen _____ på TV efter middagen.", options: ["tittar", "titter", "titta"], answer: "tittar", hint: 'The correct verb is "<b><i>tittar</i></b>". The verb <b><i>titta</i></b> forms the present tense as <b><i>tittar</i></b>.' },
  { question: "Hon _____ alltid dörren långsamt.", options: ["stänger", "stängar", "stängir"], answer: "stänger", hint: 'The correct verb is "<b><i>stänger</i></b>". The verb <b><i>stänga</i></b> forms the present tense as <b><i>stänger</i></b>.' },
  { question: "Vi _____ alltid efter middagen.", options: ["diskar", "disker", "diska"], answer: "diskar", hint: 'The correct verb is "<b><i>diskar</i></b>". The verb <b><i>diska</i></b> forms the present tense as <b><i>diskar</i></b>.' },
  { question: "Han _____ sin cykel varje vecka.", options: ["tvättar", "tvätter", "tvätta"], answer: "tvättar", hint: 'The correct verb is "<b><i>tvättar</i></b>". The verb <b><i>tvätta</i></b> forms the present tense as <b><i>tvättar</i></b>.' },

  { question: "Barnen _____ alltid högt i klassrummet.", options: ["skrattar", "skrätter", "skratta"], answer: "skrattar", hint: 'The correct verb is "<b><i>skrattar</i></b>". The verb <b><i>skratta</i></b> forms the present tense as <b><i>skrattar</i></b>.' },
  { question: "Vi _____ ofta nya filmer.", options: ["ser", "seer", "se"], answer: "ser", hint: 'The correct verb is "<b><i>ser</i></b>". The verb <b><i>se</i></b> forms the present tense as <b><i>ser</i></b>.' },
  { question: "Hon _____ alltid till sina vänner.", options: ["mejlar", "mejler", "mejla"], answer: "mejlar", hint: 'The correct verb is "<b><i>mejlar</i></b>". The verb <b><i>mejla</i></b> forms the present tense as <b><i>mejlar</i></b>.' },
  { question: "Han _____ alltid sin dator på kvällen.", options: ["använder", "användar", "användir"], answer: "använder", hint: 'The correct verb is "<b><i>använder</i></b>". The verb <b><i>använda</i></b> forms the present tense as <b><i>använder</i></b>.' },
  { question: "Vi _____ alltid efter lektionen.", options: ["stannar", "stanner", "stanna"], answer: "stannar", hint: 'The correct verb is "<b><i>stannar</i></b>". The verb <b><i>stanna</i></b> forms the present tense as <b><i>stannar</i></b>.' },
  { question: "Barnen _____ sina lärare mycket.", options: ["respekterar", "respekterer", "respektera"], answer: "respekterar", hint: 'The correct verb is "<b><i>respekterar</i></b>". The verb <b><i>respektera</i></b> forms the present tense as <b><i>respekterar</i></b>.' },
  { question: "Jag _____ alltid mina böcker här.", options: ["lägger", "läggar", "läggir"], answer: "lägger", hint: 'The correct verb is "<b><i>lägger</i></b>". The verb <b><i>lägga</i></b> forms the present tense as <b><i>lägger</i></b>.' },
  { question: "Hon _____ ofta på sina vänner.", options: ["väntar", "vänter", "vänta"], answer: "väntar", hint: 'The correct verb is "<b><i>väntar</i></b>". The verb <b><i>vänta</i></b> forms the present tense as <b><i>väntar</i></b>.' },
  { question: "Han _____ svenska på universitetet.", options: ["undervisar", "underviser", "undervisa"], answer: "undervisar", hint: 'The correct verb is "<b><i>undervisar</i></b>". The verb <b><i>undervisa</i></b> forms the present tense as <b><i>undervisar</i></b>.' },
  { question: "De _____ alltid sina uppgifter i tid.", options: ["lämnar", "lämner", "lämna"], answer: "lämnar", hint: 'The correct verb is "<b><i>lämnar</i></b>". The verb <b><i>lämna</i></b> forms the present tense as <b><i>lämnar</i></b>.' },

  { question: "Jag _____ på dig.", options: ["tror", "troar", "tro"], answer: "tror", hint: 'The correct verb is "<b><i>tror</i></b>". The verb <b><i>tro</i></b> forms the present tense as <b><i>tror</i></b>.' },
  { question: "Hon _____ bra idag.", options: ["mår", "måer", "må"], answer: "mår", hint: 'The correct verb is "<b><i>mår</i></b>". The verb <b><i>må</i></b> forms the present tense as <b><i>mår</i></b>.' },
  { question: "Fågeln _____ över huset.", options: ["flyger", "flygar", "flyga"], answer: "flyger", hint: 'The correct verb is "<b><i>flyger</i></b>". The verb <b><i>flyga</i></b> forms the present tense as <b><i>flyger</i></b>.' },
  { question: "Hunden _____ inte.", options: ["biter", "bitar", "bita"], answer: "biter", hint: 'The correct verb is "<b><i>biter</i></b>". The verb <b><i>bita</i></b> forms the present tense as <b><i>biter</i></b>.' },
  { question: "Det _____ mörkt tidigt.", options: ["blir", "blivar", "bli"], answer: "blir", hint: 'The correct verb is "<b><i>blir</i></b>". The verb <b><i>bli</i></b> forms the present tense as <b><i>blir</i></b>.' },

  { question: "Han _____ alltid sina nycklar.", options: ["glömmer", "glömmar", "glömma"], answer: "glömmer", hint: 'The correct verb is "<b><i>glömmer</i></b>". The verb <b><i>glömma</i></b> forms the present tense as <b><i>glömmer</i></b>.' },
  { question: "Barnen _____ i soffan.", options: ["sitter", "sittar", "sitta"], answer: "sitter", hint: 'The correct verb is "<b><i>sitter</i></b>". The verb <b><i>sitta</i></b> forms the present tense as <b><i>sitter</i></b>.' },
  { question: "Han _____ i kör varje vecka.", options: ["sjunger", "sjungar", "sjunga"], answer: "sjunger", hint: 'The correct verb is "<b><i>sjunger</i></b>". The verb <b><i>sjunga</i></b> forms the present tense as <b><i>sjunger</i></b>.' },
  { question: "Barnet _____ hela natten.", options: ["sover", "sovar", "sova"], answer: "sover", hint: 'The correct verb is "<b><i>sover</i></b>". The verb <b><i>sova</i></b> forms the present tense as <b><i>sover</i></b>.' },
  { question: "Vi _____ middag klockan sju.", options: ["äter", "ätar", "äta"], answer: "äter", hint: 'The correct verb is "<b><i>äter</i></b>". The verb <b><i>äta</i></b> forms the present tense as <b><i>äter</i></b>.' },

  { question: "Jag _____ en film ikväll.", options: ["ser", "seer", "se"], answer: "ser", hint: 'The correct verb is "<b><i>ser</i></b>". The verb <b><i>se</i></b> forms the present tense as <b><i>ser</i></b>.' },
  { question: "Butiken _____ gamla böcker.", options: ["säljer", "säljar", "sälja"], answer: "säljer", hint: 'The correct verb is "<b><i>säljer</i></b>". The verb <b><i>sälja</i></b> forms the present tense as <b><i>säljer</i></b>.' },
  { question: "Hon _____ läsa svenska.", options: ["vill", "villar", "viller"], answer: "vill", hint: 'The correct verb is "<b><i>vill</i></b>". The verb <b><i>vilja</i></b> forms the present tense as <b><i>vill</i></b>.' },
  { question: "Han _____ i sängen.", options: ["ligger", "liggar", "ligga"], answer: "ligger", hint: 'The correct verb is "<b><i>ligger</i></b>". The verb <b><i>ligga</i></b> forms the present tense as <b><i>ligger</i></b>.' },
  { question: "Jag _____ boken på bordet.", options: ["lägger", "läggar", "lägga"], answer: "lägger", hint: 'The correct verb is "<b><i>lägger</i></b>". The verb <b><i>lägga</i></b> forms the present tense as <b><i>lägger</i></b>.' },

  { question: "De _____ på bussen.", options: ["väntar", "vänter", "vänta"], answer: "väntar", hint: 'The correct verb is "<b><i>väntar</i></b>". The verb <b><i>vänta</i></b> forms the present tense as <b><i>väntar</i></b>.' },
  { question: "Jag _____ inte problemet.", options: ["begriper", "begripar", "begripa"], answer: "begriper", hint: 'The correct verb is "<b><i>begriper</i></b>". The verb <b><i>begripa</i></b> forms the present tense as <b><i>begriper</i></b>.' },
  { question: "Hon _____ sitt gamla jobb.", options: ["behåller", "behållar", "behålla"], answer: "behåller", hint: 'The correct verb is "<b><i>behåller</i></b>". The verb <b><i>behålla</i></b> forms the present tense as <b><i>behåller</i></b>.' },
  { question: "Vi _____ ofta efter lektionen.", options: ["hinner", "hinnar", "hinna"], answer: "hinner", hint: 'The correct verb is "<b><i>hinner</i></b>". The verb <b><i>hinna</i></b> forms the present tense as <b><i>hinner</i></b>.' },
  { question: "Han _____ alltid sanningen.", options: ["vet", "veter", "vetar"], answer: "vet", hint: 'The correct verb is "<b><i>vet</i></b>". The verb <b><i>veta</i></b> forms the present tense as <b><i>vet</i></b>.' }
];

export function renderPresentQuiz() {

    const quizForm = document.querySelector("#present-quiz");

    const scoreBox = document.querySelector("#quiz-score");

    const submitButton = document.querySelector("#quiz-submit");

    if (!quizForm) return;

    const questions = [...presentQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    .map(question => ({
        ...question,
        options: [...question.options]
            .sort(() => Math.random() - 0.5)
    }));

    quizForm.innerHTML = questions.map((item, index) => `

        <section class="quiz-item" data-question-index="${index}">

            <p class="question">${index + 1}. ${item.question}</p>

            <div class="choices">

                ${item.options.map((option, optionIndex) => `

                    <label class="option">

                        <input

                            type="radio"

                            name="q${index}"

                            value="${option}"

                        >

                        <span>${option}</span>

                    </label>

                `).join("")}

            </div>

        </section>

    `).join("");

    quizForm.addEventListener("change", () => {

        const answered = quizForm.querySelectorAll("input[type='radio']:checked").length;

        if (answered === questions.length) {

            submitButton.classList.add("is-ready");

        } else {

            submitButton.classList.remove("is-ready");

        }

    });

    quizForm.addEventListener("submit", event => {

        event.preventDefault();

        let score = 0;

        questions.forEach((item, index) => {
            const quizItem = quizForm.querySelector(`[data-question-index="${index}"]`);
            const selected = quizForm.querySelector(`input[name="q${index}"]:checked`);

            quizItem.classList.remove("is-correct", "is-incorrect");
            quizItem.querySelectorAll(".hint").forEach(hint => hint.remove());

            if (selected && selected.value === item.answer) {
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

        scoreBox.textContent = `You scored ${score} out of ${questions.length}.`;

        scoreBox.classList.add("is-visible");

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    const resetButton = document.querySelector("#quiz-reset");

    resetButton.addEventListener("click", () => {
        renderPresentQuiz();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}