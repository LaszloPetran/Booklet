//

//The IDs used in this document are 
//qx = question numbered
//ax answers entered as text
//pax as proper answers checked against ax

//Later some variables work with numbered id, in the form of pa_id == proper answer id, a_id == answer id, c_id == check id (to display if the answer is correct or not)

const pa_0 = "Testing...";
const pa_1 = "I can speak English.";
const pa_2 = "It may snow.";
const pa_3 = "You ought to buy a flower to your girlfriend.";
const pa_4 = "I will call you tomorrow.";
const pa_5 = "We should think this through.";
const pa_6 = "I must work.";
const pa_7 = "I don't dare to ask.";
const pa_8 = "Maradjak vagy menjek?";
const pa_9 = "Nem bánod, ha ma te készíted a reggelit?";
const pa_10 = "I would enjoy being on the beach.";
const pa_11 = "Dolgoztál valamikor ennél a cégnél?";
const pa_12 = "You are not to smoke in this bulding.";
const pa_13 = "Could you pass the screwdriver?";
const pa_14 = "Shall we go?";
const pa_15 = "Nem kelhetsz át!";
const pa_16 = "I can do it.";
const pa_17 = "No one is allowed to smoke in the building.";
const pa_18 = "I have to go.";
const pa_19 = "I need to go outside.";

const q_0 = "Tesztelés...";
const q_1 = "1) Tudok angolul (CAN)";
const q_2 = "2) Lehet, hogy havazni fog. (MAY, MIGHT)";
const q_3 = "3) Illene virágot venni a barátnődnek. (OUGHT TO)";
const q_4 = "4) Felhívlak holnap. (WILL)";
const q_5 = "5) Át kellene ezt gondolni. (SHOULD)";
const q_6 = "6) Muszáj dolgoznom. (MUST)";
const q_7 = "7) Nem merem megkérdezni. (DARE TO)";
const q_8 = "8) Should I stay or should I go? (SHOULD)";
const q_9 = "9) Would you mind making the dinner today? (WOULD)";
const q_10 = "10) Élveztem a parton lenni régebben. (WOULD)";
const q_11 = "11) Did you used to work at that company? (USED TO)";
const q_12 = "12) Nem szabad dohányozni az épületben. (BE TO)";
const q_13 = "13) Ide tudnád adni a csavarhúzót? (CAN, COULD)";
const q_14 = "14) Induljunk? (SHALL)";
const q_15 = "15) You shall not pass! – „Gandalf” (SHALL)";
const q_16 = "16) Meg fogom tudni csinálni. (CAN)";
const q_17 = "17) Senki nem dohányozhat az épületben. (BE ALLOWED TO)";
const q_18 = "18) Mennem kell! (HAVE TO)";
const q_19 = "19) Szükségem van arra, hogy kimenjek. (NEED TO)";

const pa_s = [pa_0, pa_1, pa_2, pa_3, pa_4, pa_5, pa_6, pa_7, pa_8, pa_9, pa_10, pa_11, pa_12, pa_13, pa_14, pa_15, pa_16, pa_17, pa_18, pa_19];
var q_s = [q_0, q_1, q_2, q_3, q_4, q_5, q_6, q_7, q_8, q_9, q_10, q_11, q_12, q_13, q_14, q_15, q_16, q_17, q_18, q_19];


//Calling the populate function that loops through the hard coded questions above. 
window.onload = function() {
    populate()
}


//Checking yes or no answer.
function checkAnswer(pa_id, a_id, c_id) {
    const input = document.getElementById(a_id).value;

    if (input == pa_id) {
        document.getElementById(c_id).innerHTML = "Perfection";
    } else {
        document.getElementById(c_id).innerHTML = "Incorrect. Press 'Check matching words' to see more info.";
        
    }
}

//Checking matching words, and displaying the correct ones in green.
function checkDetailedAnswer(pa_id, a_id, cd_id) {
    const input = document.getElementById(a_id).value;
    const inputWords = input.trim().split(/\s+/);
    const paWords = new Set(pa_id.split(/\s+/));
    const highlightedWords = [];

    let hasMatch = false;

    for (let word of inputWords) {
        if (paWords.has(word)) {
            highlightedWords.push(`<span style="color: green; font-weight: bold;">${word}</span>`);
            hasMatch = true;
        } else {
            highlightedWords.push(word);
        }
    }

    document.getElementById(cd_id).innerHTML = hasMatch
        ? `Matched: ${highlightedWords.join(" ")}`
        : "No matching words";
}


function populate() {
    const container = document.getElementById("exerc");

    //Creating a time label to be seen official.
    const dateDisplay = document.createElement("p");
    const dateToSpan = Date()
    dateDisplay.innerHTML = "Test Exam Date : " + '<span style="color: green;">' + dateToSpan + '</span>';
    container.appendChild(dateDisplay);

    //Creating the questions.
    for (let i = 0; i <= 19; i++) {
        const p = document.createElement("p");  //Questions displayed.
        const c = document.createElement("p");  //Simple result displayed.
        const cd = document.createElement("p"); //Detailed result displayed.
        const txtarea = document.createElement("textarea");  //Answere entered here.
        const button1 = document.createElement("button");  //Check simple result.
        const hr = document.createElement("hr");
        button1.textContent = "Check Answer";
        const button2 = document.createElement("button");  //Check detailed result.
        button2.textContent = "Check matching words.";
        p.id = `d_${i}`;   //Creating html id. 
        txtarea.id = `a_${i}`;
        c.id = `c_${i}`;
        cd.id = `cd_${i}`;
        p.textContent = q_s[i];
        c.textContent = "Waiting for result...";
        button1.onclick = function () {
            checkAnswer(pa_s[i], `a_${i}`, `c_${i}`);  // Careful with pa_s!!!
        }
        button2.onclick = function () {
            checkDetailedAnswer(pa_s[i], `a_${i}`, `cd_${i}`);
        }
        container.appendChild(p);
        container.appendChild(txtarea);
        container.appendChild(button1);
        container.appendChild(c);
        container.appendChild(button2);
        container.appendChild(cd);
        container.appendChild(hr);
        
        
}
}
