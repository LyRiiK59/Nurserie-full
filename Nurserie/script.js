const quizData = [
    {
        question: "1. De quelle couleur était le cheval blanc d'Henry IV?",
        a: "Noir",
        b: "Marron",
        c: "Gris",
        d: "Blanc",
        correct: "d",
    },
    {
        question: "2. En quelle année a commencé la Guerre 1914-1918 ?",
        a: "1814",
        b: "2014",
        c: "1914",
        d: "14",
        correct: "c",
    },
    {
        question: "3. Where is Brian",
        a: "in the kitchen",
        b: "in the bathroom",
        c: "in the bedroom",
        d: "in the living room",
        correct: "a",
    },
    {
        question: "4. qu'est-ce qui est jaune et qui attend ?",
        a: "un poussin",
        b: "Jonathan",
        c: "Jonathan pas",
        d: "Jonathan plus",
        correct: "b",
    },
    {
        question: "5. Quelle est la différence entre un bon et un mauvais chasseur ?",
        a: "un mauvais chasseur il voit quelque chose, il tire. Un bon chasseur, il tire mais c'est un bon chasseur ",
        b: "quoi ?",
        c: "c'est quoi un chasseur ?",
        d: "prout",
        correct: "a",
    },
    
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions !
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})



