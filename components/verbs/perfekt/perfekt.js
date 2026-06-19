const perfektQuestions = [

  { question: "Jag har _____ flera nya ord under lektionen.", options: ["antecknat", "antecknad", "antecknade"], answer: "antecknat", hint: 'The correct verb is "<b><i>antecknat</i></b>".' },
  { question: "Vi har _____ en stor fest för studenterna.", options: ["anordnat", "anordnad", "anordnade"], answer: "anordnat", hint: 'The correct verb is "<b><i>anordnat</i></b>".' },
  { question: "Hon har _____ hela dagen i trädgården.", options: ["arbetat", "arbetad", "arbetade"], answer: "arbetat", hint: 'The correct verb is "<b><i>arbetat</i></b>".' },
  { question: "Barnen har _____ i sjön hela eftermiddagen.", options: ["badat", "badad", "badade"], answer: "badat", hint: 'The correct verb is "<b><i>badat</i></b>".' },
  { question: "Jag har _____ en chokladkaka till festen.", options: ["bakat", "bakad", "bakade"], answer: "bakat", hint: 'The correct verb is "<b><i>bakat</i></b>".' },
  { question: "Vi har _____ hela kvällen.", options: ["dansat", "dansad", "dansade"], answer: "dansat", hint: 'The correct verb is "<b><i>dansat</i></b>".' },
  { question: "Läraren har _____ ämnet noggrant.", options: ["diskuterat", "diskuterad", "diskuterade"], answer: "diskuterat", hint: 'The correct verb is "<b><i>diskuterat</i></b>".' },
  { question: "Vi har _____ bordet inför middagen.", options: ["dukat", "dukad", "dukade"], answer: "dukat", hint: 'The correct verb is "<b><i>dukat</i></b>".' },
  { question: "Han har _____ en brasa i skogen.", options: ["eldat", "eldad", "eldade"], answer: "eldat", hint: 'The correct verb is "<b><i>eldat</i></b>".' },
  { question: "De har _____ många fiskar idag.", options: ["fiskat", "fiskad", "fiskade"], answer: "fiskat", hint: 'The correct verb is "<b><i>fiskat</i></b>".' },
  { question: "Jag har _____ min gamla cykel.", options: ["fixat", "fixad", "fixade"], answer: "fixat", hint: 'The correct verb is "<b><i>fixat</i></b>".' },
  { question: "Familjen har _____ till en ny lägenhet.", options: ["flyttat", "flyttade", "fluttit"], answer: "flyttat", hint: 'The correct verb is "<b><i>flyttat</i></b>".' },
  { question: "Hon har _____ flera viktiga frågor.", options: ["frågat", "frågad", "frågade"], answer: "frågat", hint: 'The correct verb is "<b><i>frågat</i></b>".' },
  { question: "Vi har _____ länge på problemet.", options: ["funderat", "funderad", "funderade"], answer: "funderat", hint: 'The correct verb is "<b><i>funderat</i></b>".' },
  { question: "Han har _____ på sina grannar.", options: ["hälsat", "hälsad", "hälsade"], answer: "hälsat", hint: 'The correct verb is "<b><i>hälsat</i></b>".' },
  { question: "Jag har _____ soppa till middag.", options: ["kokat", "kokad", "kokade"], answer: "kokat", hint: 'The correct verb is "<b><i>kokat</i></b>".' },
  { question: "De har _____ efter sina nycklar hela morgonen.", options: ["letat", "letad", "letade"], answer: "letat", hint: 'The correct verb is "<b><i>letat</i></b>".' },
  { question: "Vi har _____ på musik hela kvällen.", options: ["lyssnat", "lyssnad", "lyssnade"], answer: "lyssnat", hint: 'The correct verb is "<b><i>lyssnat</i></b>".' },
  { question: "Hon har _____ ett paket till sin vän.", options: ["postat", "postad", "postade"], answer: "postat", hint: 'The correct verb is "<b><i>postat</i></b>".' },
  { question: "Jag har _____ svenska varje dag.", options: ["pratat", "pratad", "pratade"], answer: "pratat", hint: 'The correct verb is "<b><i>pratat</i></b>".' },
  { question: "Vi har _____ bilen utanför huset.", options: ["parkerat", "parkerad", "parkerade"], answer: "parkerat", hint: 'The correct verb is "<b><i>parkerat</i></b>".' },
  { question: "Hon har _____ sina elever noggrant.", options: ["rättat", "rättad", "rättade"], answer: "rättat", hint: 'The correct verb is "<b><i>rättat</i></b>".' },
  { question: "Barnen har _____ hela eftermiddagen.", options: ["ritat", "ritad", "ritade"], answer: "ritat", hint: 'The correct verb is "<b><i>ritat</i></b>".' },
  { question: "Han har _____ sitt rum inför besöket.", options: ["städat", "städad", "städade"], answer: "städat", hint: 'The correct verb is "<b><i>städat</i></b>".' },
  { question: "Vi har _____ svenska tillsammans i flera månader.", options: ["tränat", "tränad", "tränade"], answer: "tränat", hint: 'The correct verb is "<b><i>tränat</i></b>".' },

  { question: "Jag har _____ ett nytt hus vid sjön.", options: ["byggt", "byggde", "byggad"], answer: "byggt", hint: 'The correct verb is "<b><i>byggt</i></b>".' },
{ question: "Hon har _____ en ny dator den här veckan.", options: ["köpt", "köpte", "köpad"], answer: "köpt", hint: 'The correct verb is "<b><i>köpt</i></b>".' },
{ question: "Vi har _____ hela artikeln noggrant.", options: ["läst", "läste", "läsad"], answer: "läst", hint: 'The correct verb is "<b><i>läst</i></b>".' },
{ question: "Han har _____ sin vän med läxorna.", options: ["hjälpt", "hjälpte", "hjälpad"], answer: "hjälpt", hint: 'The correct verb is "<b><i>hjälpt</i></b>".' },
{ question: "Jag har _____ nycklarna på bordet.", options: ["satt", "satte", "sattad"], answer: "satt", hint: 'The correct verb is "<b><i>satt</i></b>".' },
{ question: "Hon har _____ länge på problemet.", options: ["tänkt", "tänkte", "tänkad"], answer: "tänkt", hint: 'The correct verb is "<b><i>tänkt</i></b>".' },
{ question: "Vi har _____ på dörren flera gånger.", options: ["knackat", "knackade", "knackad"], answer: "knackat", hint: 'The correct verb is "<b><i>knackat</i></b>".' },
{ question: "Han har _____ bilen utanför skolan.", options: ["parkerat", "parkerade", "parkerad"], answer: "parkerat", hint: 'The correct verb is "<b><i>parkerat</i></b>".' },
{ question: "Barnen har _____ hela kvällen tillsammans.", options: ["lekt", "lekte", "lekad"], answer: "lekt", hint: 'The correct verb is "<b><i>lekt</i></b>".' },
{ question: "Jag har _____ ett mejl till läraren.", options: ["skickat", "skickade", "skickad"], answer: "skickat", hint: 'The correct verb is "<b><i>skickat</i></b>".' },
{ question: "Hon har _____ fönstret eftersom det blev kallt.", options: ["stängt", "stängde", "stängad"], answer: "stängt", hint: 'The correct verb is "<b><i>stängt</i></b>".' },
{ question: "Vi har _____ våra gäster på stationen.", options: ["hämtat", "hämtade", "hämtad"], answer: "hämtat", hint: 'The correct verb is "<b><i>hämtat</i></b>".' },
{ question: "Han har _____ sitt rum inför besöket.", options: ["städat", "städade", "städad"], answer: "städat", hint: 'The correct verb is "<b><i>städat</i></b>".' },
{ question: "De har _____ en ny restaurang i centrum.", options: ["öppnat", "öppnade", "öppnad"], answer: "öppnat", hint: 'The correct verb is "<b><i>öppnat</i></b>".' },
{ question: "Vi har _____ många timmar på projektet.", options: ["arbetat", "arbetade", "arbetad"], answer: "arbetat", hint: 'The correct verb is "<b><i>arbetat</i></b>".' },

{ question: "Resultatet har _____ på flera olika faktorer.", options: ["berott", "berodde", "berottad"], answer: "berott", hint: 'The correct verb is "<b><i>berott</i></b>".' },
{ question: "Fågeln har _____ över sjön flera gånger idag.", options: ["flugit", "flög", "flugad"], answer: "flugit", hint: 'The correct verb is "<b><i>flugit</i></b>".' },
{ question: "Hon har _____ mycket bättre den senaste veckan.", options: ["mått", "mådde", "måttad"], answer: "mått", hint: 'The correct verb is "<b><i>mått</i></b>".' },
{ question: "Min mormor har _____ en ny klänning till festen.", options: ["sytt", "sydde", "syttad"], answer: "sytt", hint: 'The correct verb is "<b><i>sytt</i></b>".' },
{ question: "Jag har alltid _____ på dig.", options: ["trott", "trodde", "trottad"], answer: "trott", hint: 'The correct verb is "<b><i>trott</i></b>".' },

{ question: "Jag har _____ min plånbok någonstans.", options: ["glömt", "glömde", "glömad"], answer: "glömt", hint: 'The correct verb is "<b><i>glömt</i></b>".' },
{ question: "Vi har _____ den här filmen tre gånger.", options: ["sett", "såg", "sead"], answer: "sett", hint: 'The correct verb is "<b><i>sett</i></b>".' },
{ question: "Hon har _____ ett nytt språk på universitetet.", options: ["lärt", "lärde", "lärad"], answer: "lärt", hint: 'The correct verb is "<b><i>lärt</i></b>".' },
{ question: "Barnen har _____ hela vägen hem.", options: ["sprungit", "sprang", "sprungad"], answer: "sprungit", hint: 'The correct verb is "<b><i>sprungit</i></b>".' },
{ question: "Jag har _____ min bror om hjälp.", options: ["bett", "bad", "bettad"], answer: "bett", hint: 'The correct verb is "<b><i>bett</i></b>".' },
{ question: "Han har _____ upp lampan i taket.", options: ["hängt", "hängde", "hängad"], answer: "hängt", hint: 'The correct verb is "<b><i>hängt</i></b>".' },
{ question: "Vi har _____ samma misstag flera gånger.", options: ["gjort", "gjorde", "gjortad"], answer: "gjort", hint: 'The correct verb is "<b><i>gjort</i></b>".' },
{ question: "Hon har _____ sin telefon på bussen.", options: ["tappat", "tappade", "tappad"], answer: "tappat", hint: 'The correct verb is "<b><i>tappat</i></b>".' },
{ question: "Jag har _____ honom sedan gymnasiet.", options: ["känt", "kände", "kännad"], answer: "känt", hint: 'The correct verb is "<b><i>känt</i></b>".' },
{ question: "De har _____ flera medaljer i tävlingen.", options: ["vunnit", "vann", "vunnad"], answer: "vunnit", hint: 'The correct verb is "<b><i>vunnit</i></b>".' },
{ question: "Vi har _____ på den här frågan länge.", options: ["tänkt", "tänkte", "tänkad"], answer: "tänkt", hint: 'The correct verb is "<b><i>tänkt</i></b>".' },
{ question: "Hon har _____ upp alla böckerna.", options: ["tagit", "tog", "tagad"], answer: "tagit", hint: 'The correct verb is "<b><i>tagit</i></b>".' },
{ question: "Jag har _____ ett nytt jobb i Stockholm.", options: ["fått", "fick", "fåttad"], answer: "fått", hint: 'The correct verb is "<b><i>fått</i></b>".' },
{ question: "Barnet har _____ hela natten utan problem.", options: ["sovit", "sov", "sovad"], answer: "sovit", hint: 'The correct verb is "<b><i>sovit</i></b>".' },
{ question: "Vi har _____ mycket kaffe idag.", options: ["druckit", "drack", "druckad"], answer: "druckit", hint: 'The correct verb is "<b><i>druckit</i></b>".' },
{ question: "Han har _____ alla sina pengar.", options: ["förlorat", "förlorade", "förlorad"], answer: "förlorat", hint: 'The correct verb is "<b><i>förlorat</i></b>".' },
{ question: "Hon har _____ ett långt brev till sin mormor.", options: ["skrivit", "skrev", "skrivad"], answer: "skrivit", hint: 'The correct verb is "<b><i>skrivit</i></b>".' },
{ question: "Vi har _____ i samma hus i tio år.", options: ["bott", "bodde", "bottad"], answer: "bott", hint: 'The correct verb is "<b><i>bott</i></b>".' },
{ question: "De har _____ överens om allt.", options: ["varit", "var", "varad"], answer: "varit", hint: 'The correct verb is "<b><i>varit</i></b>".' },
{ question: "Jag har _____ upp tidigt varje dag den här veckan.", options: ["stigit", "steg", "stigad"], answer: "stigit", hint: 'The correct verb is "<b><i>stigit</i></b>".' },
{ question: "Han har _____ hela sanningen.", options: ["sagt", "sa", "sägad"], answer: "sagt", hint: 'The correct verb is "<b><i>sagt</i></b>".' },
{ question: "Vi har _____ till Danmark med bil.", options: ["kört", "körde", "körad"], answer: "kört", hint: 'The correct verb is "<b><i>kört</i></b>".' },
{ question: "Hon har _____ sina gamla böcker.", options: ["sålt", "sålde", "såltad"], answer: "sålt", hint: 'The correct verb is "<b><i>sålt</i></b>".' },
{ question: "Jag har _____ svaret hela tiden.", options: ["vetat", "visste", "vetad"], answer: "vetat", hint: 'The correct verb is "<b><i>vetat</i></b>".' },

];

export function renderPerfektQuiz() {

    const quizForm = document.querySelector("#perfekt-quiz");

    const scoreBox = document.querySelector("#quiz-score");

    const submitButton = document.querySelector("#quiz-submit");

    if (!quizForm) return;

    const questions = [...perfektQuestions]
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
        renderPerfektQuiz();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}