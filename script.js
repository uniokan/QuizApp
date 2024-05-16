let questions = [
    {
        "question": "Was ist der längste Fluss der Welt?",
        "answer_1": "Der Amazonas",
        "answer_2": "Der Nil",
        "answer_3": "Der Rhein",
        "answer_4": "Der Niger",
        "right_answer": 2

    },
    {
        "question": "Welche Farbe hat die Null auf einer klassischen Roulette-Scheibe?",
        "answer_1": "Rot",
        "answer_2": "Grün",
        "answer_3": "Blau",
        "answer_4": "Schwarz",
        "right_answer": 2

    },
    {
        "question": "Was ist die meist gesprochene Sprache in Indien?",
        "answer_1": "Hindi",
        "answer_2": "Urdu",
        "answer_3": "Punjabi",
        "answer_4": "Bengali",
        "right_answer": 1

    },
    {
        "question": "In welchem dieser Filme spielt Leonardo DiCaprio NICHT mit?",
        "answer_1": "The Wolf of Wallstreet",
        "answer_2": "12 Years a Slave",
        "answer_3": "Aviator",
        "answer_4": "The Revenant",
        "right_answer": 1

    },
    {
        "question": "Wie viele Tasten hat ein Klavier?",
        "answer_1": "74 Tasten",
        "answer_2": "86 Tasten",
        "answer_3": "82 Tasten",
        "answer_4": "88 Tasten",
        "right_answer": 4

    }

]

let currentQuestion = 0;


function init() {
    let amountOfQuestions = document.getElementById('amount-of-questions');
    amountOfQuestions.innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion < questions.length) {
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
        showTheNumberOfQuestion();
        showLineOnCategorie();
    }

    else {
        showEndScreen();
    }
}

function showEndScreen() {
    document.getElementById('quiz-end').style.display = 'block';
    document.getElementById('quiz-start').style.display = 'none';

}

function showTheNumberOfQuestion() {
    let numberHTML = document.getElementById('question-number');
    numberHTML.innerHTML = currentQuestion + 1;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let right_answer_index = question['right_answer'];
    let right_answer = Object.keys(question)[right_answer_index]; // Bekommen den Schlüssel vom jeweilligen Objekt

    if (selection == right_answer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }

    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(right_answer).parentNode.classList.add('bg-success');
    }
    enableBtn();

}

function enableBtn() {
    document.getElementById('next-question-btn').disabled = false;
}

function disableBtn() {
    document.getElementById('next-question-btn').disabled = true;
}

function nextQuestion() {
    removeLineOnCategorie();
    currentQuestion++;
    disableBtn();
    removeAnswerBg();
    showQuestion();
}

function removeAnswerBg() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function showLineOnCategorie() {
    let getCategorie = document.getElementById(`categorie-${currentQuestion + 1}`);
    getCategorie.classList.add('line');
}

function removeLineOnCategorie() {
    let getCategorie = document.getElementById(`categorie-${currentQuestion + 1}`);
    getCategorie.classList.remove('line');
}
