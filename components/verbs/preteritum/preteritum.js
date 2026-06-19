const preteritumQuestions = [

  { question: "Jag _____ svenska hela kvällen.", options: ["talade", "talar", "talat"], answer: "talade", hint: 'The correct verb is "<b><i>talade</i></b>". The verb <b><i>tala</i></b> forms the preteritum as <b><i>talade</i></b>.' },
  { question: "Hon _____ en intressant historia för klassen.", options: ["berättade", "berättar", "berättat"], answer: "berättade", hint: 'The correct verb is "<b><i>berättade</i></b>". The verb <b><i>berätta</i></b> forms the preteritum as <b><i>berättade</i></b>.' },
  { question: "Vi _____ noteringar under lektionen.", options: ["antecknade", "antecknar", "antecknat"], answer: "antecknade", hint: 'The correct verb is "<b><i>antecknade</i></b>". The verb <b><i>anteckna</i></b> forms the preteritum as <b><i>antecknade</i></b>.' },
  { question: "Han _____ hela dagen i trädgården.", options: ["arbetade", "arbetar", "arbetat"], answer: "arbetade", hint: 'The correct verb is "<b><i>arbetade</i></b>". The verb <b><i>arbeta</i></b> forms the preteritum as <b><i>arbetade</i></b>.' },
  { question: "De _____ en ny fest för studenterna.", options: ["anordnade", "anordnar", "anordnat"], answer: "anordnade", hint: 'The correct verb is "<b><i>anordnade</i></b>". The verb <b><i>anordna</i></b> forms the preteritum as <b><i>anordnade</i></b>.' },
  { question: "Jag _____ till jobbet i regnet.", options: ["cyklade", "cyklar", "cyklat"], answer: "cyklade", hint: 'The correct verb is "<b><i>cyklade</i></b>". The verb <b><i>cykla</i></b> forms the preteritum as <b><i>cyklade</i></b>.' },
  { question: "Barnen _____ hela eftermiddagen.", options: ["dansade", "dansar", "dansat"], answer: "dansade", hint: 'The correct verb is "<b><i>dansade</i></b>". The verb <b><i>dansa</i></b> forms the preteritum as <b><i>dansade</i></b>.' },
  { question: "Läraren _____ ämnet noggrant.", options: ["diskuterade", "diskuterar", "diskuterat"], answer: "diskuterade", hint: 'The correct verb is "<b><i>diskuterade</i></b>". The verb <b><i>diskutera</i></b> forms the preteritum as <b><i>diskuterade</i></b>.' },
  { question: "Vi _____ bordet före middagen.", options: ["dukade", "dukar", "dukat"], answer: "dukade", hint: 'The correct verb is "<b><i>dukade</i></b>". The verb <b><i>duka</i></b> forms the preteritum as <b><i>dukade</i></b>.' },
  { question: "Han _____ ett ljus när det blev mörkt.", options: ["eldade", "eldar", "eldat"], answer: "eldade", hint: 'The correct verb is "<b><i>eldade</i></b>". The verb <b><i>elda</i></b> forms the preteritum as <b><i>eldade</i></b>.' },
  { question: "De _____ i parken hela dagen.", options: ["fiskade", "fiskar", "fiskat"], answer: "fiskade", hint: 'The correct verb is "<b><i>fiskade</i></b>". The verb <b><i>fiska</i></b> forms the preteritum as <b><i>fiskade</i></b>.' },
  { question: "Jag _____ min gamla cykel.", options: ["fixade", "fixar", "fixat"], answer: "fixade", hint: 'The correct verb is "<b><i>fixade</i></b>". The verb <b><i>fixa</i></b> forms the preteritum as <b><i>fixade</i></b>.' },
  { question: "Familjen _____ till en ny lägenhet.", options: ["flyttade", "flyttar", "flyttat"], answer: "flyttade", hint: 'The correct verb is "<b><i>flyttade</i></b>". The verb <b><i>flytta</i></b> forms the preteritum as <b><i>flyttade</i></b>.' },
  { question: "Hon _____ många frågor under mötet.", options: ["frågade", "frågar", "frågat"], answer: "frågade", hint: 'The correct verb is "<b><i>frågade</i></b>". The verb <b><i>fråga</i></b> forms the preteritum as <b><i>frågade</i></b>.' },
  { question: "Vi _____ länge på lösningen.", options: ["funderade", "funderar", "funderat"], answer: "funderade", hint: 'The correct verb is "<b><i>funderade</i></b>". The verb <b><i>fundera</i></b> forms the preteritum as <b><i>funderade</i></b>.' },
  { question: "Han _____ på sina föräldrar.", options: ["hälsade", "hälsar", "hälsat"], answer: "hälsade", hint: 'The correct verb is "<b><i>hälsade</i></b>". The verb <b><i>hälsa</i></b> forms the preteritum as <b><i>hälsade</i></b>.' },
  { question: "Jag _____ maten i köket.", options: ["kokade", "kokar", "kokat"], answer: "kokade", hint: 'The correct verb is "<b><i>kokade</i></b>". The verb <b><i>koka</i></b> forms the preteritum as <b><i>kokade</i></b>.' },
  { question: "De _____ efter sina nycklar.", options: ["letade", "letar", "letat"], answer: "letade", hint: 'The correct verb is "<b><i>letade</i></b>". The verb <b><i>leta</i></b> forms the preteritum as <b><i>letade</i></b>.' },
  { question: "Vi _____ på musik hela kvällen.", options: ["lyssnade", "lyssnar", "lyssnat"], answer: "lyssnade", hint: 'The correct verb is "<b><i>lyssnade</i></b>". The verb <b><i>lyssna</i></b> forms the preteritum as <b><i>lyssnade</i></b>.' },
  { question: "Hon _____ ett brev till sin vän.", options: ["postade", "postar", "postat"], answer: "postade", hint: 'The correct verb is "<b><i>postade</i></b>". The verb <b><i>posta</i></b> forms the preteritum as <b><i>postade</i></b>.' },

  { question: "Jag _____ ett nytt hus förra året.", options: ["byggde", "byggade", "byggt"], answer: "byggde", hint: 'The correct verb is "<b><i>byggde</i></b>". The verb <b><i>bygga</i></b> forms the preteritum as <b><i>byggde</i></b>.' },
  { question: "Hon _____ en ny dator i veckan.", options: ["köpte", "köpade", "köpt"], answer: "köpte", hint: 'The correct verb is "<b><i>köpte</i></b>". The verb <b><i>köpa</i></b> forms the preteritum as <b><i>köpte</i></b>.' },
  { question: "Vi _____ hela artikeln igår.", options: ["läste", "läsade", "läst"], answer: "läste", hint: 'The correct verb is "<b><i>läste</i></b>". The verb <b><i>läsa</i></b> forms the preteritum as <b><i>läste</i></b>.' },
  { question: "Han _____ sin vän med läxan.", options: ["hjälpte", "hjälpde", "hjälpt"], answer: "hjälpte", hint: 'The correct verb is "<b><i>hjälpte</i></b>". The verb <b><i>hjälpa</i></b> forms the preteritum as <b><i>hjälpte</i></b>.' },
  { question: "De _____ till Göteborg förra helgen.", options: ["åkte", "åkade", "åkt"], answer: "åkte", hint: 'The correct verb is "<b><i>åkte</i></b>". The verb <b><i>åka</i></b> forms the preteritum as <b><i>åkte</i></b>.' },
  { question: "Jag _____ nycklarna på bordet.", options: ["satte", "sattade", "satt"], answer: "satte", hint: 'The correct verb is "<b><i>satte</i></b>". The verb <b><i>sätta</i></b> forms the preteritum as <b><i>satte</i></b>.' },
  { question: "Hon _____ länge på problemet.", options: ["tänkte", "tänkade", "tänkt"], answer: "tänkte", hint: 'The correct verb is "<b><i>tänkte</i></b>". The verb <b><i>tänka</i></b> forms the preteritum as <b><i>tänkte</i></b>.' },
  { question: "Vi _____ på dörren flera gånger.", options: ["knackade", "knackte", "knackat"], answer: "knackade", hint: 'The correct verb is "<b><i>knackade</i></b>". The verb <b><i>knacka</i></b> forms the preteritum as <b><i>knackade</i></b>.' },
  { question: "Han _____ bilen utanför huset.", options: ["parkerade", "parkerte", "parkerat"], answer: "parkerade", hint: 'The correct verb is "<b><i>parkerade</i></b>". The verb <b><i>parkera</i></b> forms the preteritum as <b><i>parkerade</i></b>.' },
  { question: "Barnen _____ hela kvällen.", options: ["lekte", "lekade", "lekt"], answer: "lekte", hint: 'The correct verb is "<b><i>lekte</i></b>". The verb <b><i>leka</i></b> forms the preteritum as <b><i>lekte</i></b>.' },
  { question: "Jag _____ ett långt mejl till läraren.", options: ["skickade", "skickte", "skickat"], answer: "skickade", hint: 'The correct verb is "<b><i>skickade</i></b>". The verb <b><i>skicka</i></b> forms the preteritum as <b><i>skickade</i></b>.' },
  { question: "Hon _____ fönstret eftersom det var kallt.", options: ["stängde", "stängade", "stängt"], answer: "stängde", hint: 'The correct verb is "<b><i>stängde</i></b>". The verb <b><i>stänga</i></b> forms the preteritum as <b><i>stängde</i></b>.' },
  { question: "Vi _____ våra gäster på stationen.", options: ["hämtade", "hämtte", "hämtat"], answer: "hämtade", hint: 'The correct verb is "<b><i>hämtade</i></b>". The verb <b><i>hämta</i></b> forms the preteritum as <b><i>hämtade</i></b>.' },
  { question: "Han _____ sitt rum innan gästerna kom.", options: ["städade", "städde", "städat"], answer: "städade", hint: 'The correct verb is "<b><i>städade</i></b>". The verb <b><i>städa</i></b> forms the preteritum as <b><i>städade</i></b>.' },
  { question: "De _____ en ny restaurang i centrum.", options: ["öppnade", "öppde", "öppnat"], answer: "öppnade", hint: 'The correct verb is "<b><i>öppnade</i></b>". The verb <b><i>öppna</i></b> forms the preteritum as <b><i>öppnade</i></b>.' },

  { question: "Jag _____ inte på ryktet först.", options: ["trodde", "tror", "trott"], answer: "trodde", hint: 'The correct verb is "<b><i>trodde</i></b>". The verb <b><i>tro</i></b> forms the preteritum as <b><i>trodde</i></b>.' },
  { question: "Hon _____ en ny klänning till festen.", options: ["sydde", "syr", "sytt"], answer: "sydde", hint: 'The correct verb is "<b><i>sydde</i></b>". The verb <b><i>sy</i></b> forms the preteritum as <b><i>sydde</i></b>.' },
  { question: "Barnet _____ högt över staketet.", options: ["flög", "flyr", "flugit"], answer: "flög", hint: 'The correct verb is "<b><i>flög</i></b>". The verb <b><i>flyga</i></b> forms the preteritum as <b><i>flög</i></b>.' },
  { question: "Vi _____ vänta länge på bussen.", options: ["måste", "mår", "mått"], answer: "måste", hint: 'The correct verb is "<b><i>måste</i></b>". The verb <b><i>måste</i></b> is the preteritum form of <b><i>må</i></b>.' },
  { question: "Han _____ helt på sina egna krafter.", options: ["berodde", "beror", "berott"], answer: "berodde", hint: 'The correct verb is "<b><i>berodde</i></b>". The verb <b><i>bero</i></b> forms the preteritum as <b><i>berodde</i></b>.' },

  { question: "Jag _____ hem sent igår kväll.", options: ["kom", "komde", "kommit"], answer: "kom", hint: 'The correct verb is "<b><i>kom</i></b>". The verb <b><i>komma</i></b> forms the preteritum as <b><i>kom</i></b>.' },
    { question: "Hon _____ en intressant bok under sommaren.", options: ["läste", "läsde", "läst"], answer: "läste", hint: 'The correct verb is "<b><i>läste</i></b>". The verb <b><i>läsa</i></b> forms the preteritum as <b><i>läste</i></b>.' },
    { question: "Vi _____ till Spanien förra året.", options: ["for", "farade", "farit"], answer: "for", hint: 'The correct verb is "<b><i>for</i></b>". The verb <b><i>fara</i></b> forms the preteritum as <b><i>for</i></b>.' },
    { question: "Han _____ upp tidigt på morgonen.", options: ["steg", "stigade", "stigit"], answer: "steg", hint: 'The correct verb is "<b><i>steg</i></b>". The verb <b><i>stiga</i></b> forms the preteritum as <b><i>steg</i></b>.' },
    { question: "Barnet _____ hela natten.", options: ["sov", "sovde", "sovit"], answer: "sov", hint: 'The correct verb is "<b><i>sov</i></b>". The verb <b><i>sova</i></b> forms the preteritum as <b><i>sov</i></b>.' },
    { question: "Jag _____ ett glas vatten.", options: ["drack", "drickte", "druckit"], answer: "drack", hint: 'The correct verb is "<b><i>drack</i></b>". The verb <b><i>dricka</i></b> forms the preteritum as <b><i>drack</i></b>.' },
    { question: "Hon _____ ett brev till sin vän.", options: ["skrev", "skrivede", "skrivit"], answer: "skrev", hint: 'The correct verb is "<b><i>skrev</i></b>". The verb <b><i>skriva</i></b> forms the preteritum as <b><i>skrev</i></b>.' },
    { question: "Vi _____ mycket på mötet.", options: ["sa", "sägde", "sagt"], answer: "sa", hint: 'The correct verb is "<b><i>sa</i></b>". The verb <b><i>säga</i></b> forms the preteritum as <b><i>sa</i></b>.' },
    { question: "Han _____ sin cykel igår.", options: ["sålde", "säljde", "sålt"], answer: "sålde", hint: 'The correct verb is "<b><i>sålde</i></b>". The verb <b><i>sälja</i></b> forms the preteritum as <b><i>sålde</i></b>.' },
    { question: "Jag _____ svaret direkt.", options: ["visste", "vetade", "vetat"], answer: "visste", hint: 'The correct verb is "<b><i>visste</i></b>". The verb <b><i>veta</i></b> forms the preteritum as <b><i>visste</i></b>.' },
    { question: "Hon _____ sina nycklar hemma.", options: ["glömde", "glömade", "glömt"], answer: "glömde", hint: 'The correct verb is "<b><i>glömde</i></b>". The verb <b><i>glömma</i></b> forms the preteritum as <b><i>glömde</i></b>.' },
    { question: "Vi _____ fotboll efter skolan.", options: ["spelade", "spelte", "spelat"], answer: "spelade", hint: 'The correct verb is "<b><i>spelade</i></b>". The verb <b><i>spela</i></b> forms the preteritum as <b><i>spelade</i></b>.' },
    { question: "Han _____ över floden.", options: ["simmade", "simade", "summit"], answer: "simmade", hint: 'The correct verb is "<b><i>simmade</i></b>". The verb <b><i>simma</i></b> forms the preteritum as <b><i>simmade</i></b>.' },
    { question: "Jag _____ dörren försiktigt.", options: ["öppnade", "öppde", "öppnat"], answer: "öppnade", hint: 'The correct verb is "<b><i>öppnade</i></b>". The verb <b><i>öppna</i></b> forms the preteritum as <b><i>öppnade</i></b>.' },
    { question: "Hon _____ hela vägen hem.", options: ["gick", "gådde", "gått"], answer: "gick", hint: 'The correct verb is "<b><i>gick</i></b>". The verb <b><i>gå</i></b> forms the preteritum as <b><i>gick</i></b>.' },
    { question: "Vi _____ länge på stationen.", options: ["stod", "stådde", "stått"], answer: "stod", hint: 'The correct verb is "<b><i>stod</i></b>". The verb <b><i>stå</i></b> forms the preteritum as <b><i>stod</i></b>.' },
    { question: "Han _____ en sång för publiken.", options: ["sjöng", "sjungde", "sjungit"], answer: "sjöng", hint: 'The correct verb is "<b><i>sjöng</i></b>". The verb <b><i>sjunga</i></b> forms the preteritum as <b><i>sjöng</i></b>.' },
    { question: "Jag _____ en present till henne.", options: ["gav", "givde", "gett"], answer: "gav", hint: 'The correct verb is "<b><i>gav</i></b>". The verb <b><i>ge</i></b> forms the preteritum as <b><i>gav</i></b>.' },
    { question: "Hon _____ sin jacka på stolen.", options: ["lade", "läggde", "lagt"], answer: "lade", hint: 'The correct verb is "<b><i>lade</i></b>". The verb <b><i>lägga</i></b> forms the preteritum as <b><i>lade</i></b>.' },
    { question: "Vi _____ maten i ugnen.", options: ["bakade", "bakte", "bakat"], answer: "bakade", hint: 'The correct verb is "<b><i>bakade</i></b>". The verb <b><i>baka</i></b> forms the preteritum as <b><i>bakade</i></b>.' },
    { question: "Han _____ mycket pengar på resan.", options: ["fann", "finnade", "funnit"], answer: "fann", hint: 'The correct verb is "<b><i>fann</i></b>". The verb <b><i>finna</i></b> forms the preteritum as <b><i>fann</i></b>.' },
    { question: "Jag _____ aldrig den frågan.", options: ["förstod", "förstådde", "förstått"], answer: "förstod", hint: 'The correct verb is "<b><i>förstod</i></b>". The verb <b><i>förstå</i></b> forms the preteritum as <b><i>förstod</i></b>.' },
    { question: "Hon _____ sitt bästa på provet.", options: ["gjorde", "görde", "gjort"], answer: "gjorde", hint: 'The correct verb is "<b><i>gjorde</i></b>". The verb <b><i>göra</i></b> forms the preteritum as <b><i>gjorde</i></b>.' },
    { question: "Vi _____ hemma hela helgen.", options: ["var", "varde", "varit"], answer: "var", hint: 'The correct verb is "<b><i>var</i></b>". The verb <b><i>vara</i></b> forms the preteritum as <b><i>var</i></b>.' }
];

export function renderPreteritumQuiz() {

    const quizForm = document.querySelector("#preteritum-quiz");

    const scoreBox = document.querySelector("#quiz-score");

    const submitButton = document.querySelector("#quiz-submit");

    if (!quizForm) return;

    const questions = [...preteritumQuestions]
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
        renderPreteritumQuiz();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}