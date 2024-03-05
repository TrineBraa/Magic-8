// Lag din egen Magic 8 Ball der man får et tilfeldig råd av den magiske, overdimensjonerte åtteballen.

// Ekstra: Gjør det slik at man aldri kan få det samme rådet etter hverandre.
// Bruk MVC, variabler, arrays og random for å løse oppgaven.


//Modell
let differentAnswers = ['Joda', 'Det er mulig', 'Dropp det', 'Dette får du til!', 'idiot', 'Prøv igjen',
    'finn en annen måte', 'Ting er ikke altid lett', 'Såklart!', 'nope'];           //10 forskjellige svar muligheter.
let resonse = 'Magic Ball';

//View
updateView()
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="container">
        <div class="smallContainer" onclick="getRandomAnswer()">${resonse}</div>
    </div>
    `;
}

//Control
function getRandomAnswer() {
    let randomNum = Math.floor(Math.random() * differentAnswers.length);
    let answer = differentAnswers.length > 0 ? differentAnswers[randomNum] : 'legg på mer Penger'
    resonse = answer;
    updateView()
}

