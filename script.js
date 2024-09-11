const modules = [
    {
        title: "Módulo 1: Derecho Penal",
        questions: [
            {
                question: "¿Qué es un delito?",
                answers: [
                    {text: "Una acción legal", correct: false},
                    {text: "Una acción punible", correct: true, reference: "Código Penal"},
                    {text: "Una norma jurídica", correct: false},
                    {text: "Una sanción administrativa", correct: false},
                    ]
            },
            // Añade más preguntas para el Módulo 1
        ],
        passingScore: 1 // Porcentaje mínimo para aprobar el módulo
    },
    {
        title: "Módulo 2: Derecho Civil",
        questions: [
            {
                question: "¿Qué es un contrato?",
                answers: [
                    {text: "Un acuerdo legal entre partes", correct: true, reference: "Código Civil"},
                    {text: "Un documento administrativo", correct: false},
                    {text: "Una norma general", correct: false},
                    {text: "Una sanción judicial", correct: false},
                    ]
            },
        ],
        passingScore: 1 // Porcentaje mínimo para aprobar el módulo
    },
    {
        title: "Modulo 3: Variada",
        questions: [
            {
                question: "Que es ley?",
                answers: [
                    {text: "Toda norma de derecho", correct: true, reference: "Consulta: Dr. Alfredo Perez Guerrero"},
                    {text: "La declaracion de la voluntad soberana que, manifestada en la forma prescrita por la Constitucion manda, prohibe o permite", correct: true, reference: "Art. 1 Codigo Civil Ecuatoriano"},
                    {text: "Algo obligatorio que las personas no pueden omitir cumplir al ser parte de un Estado", correct: false},
                    {text: "Directrices o lineamientos que regulan la conducta de las personas", correct: false},
                    ]
            },
            {
                question: "Que son los derechos?",
                answers: [
                    {text: "Lo contrario de los izquierdos", correct: false},
                    {text: "Una ideologia", correct: false},
                    {text: "Conjunto de normas, leyes y principios que regulan la conducta del hombre en un momento historico determinado", correct: true},
                    {text: "Un privilegio", correct: false},
                    ]
            },
            {
                question: "Que son los principios?",
                answers: [
                    {text: "Mandatos de optimizacion", correct: true},
                    {text: "Un comienzo", correct: false},
                    {text: "Una cualidad del ser civil", correct: false},
                    {text: "Una garantia", correct: false},
                    ]
            },    
        ],
        passingScore: 3
    } 
];
    // Añade más módulos según sea necesaris

let currentModuleIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let timeLeft = 30;
let timerInterval;

const moduleTitleElement = document.getElementById("module-title");
const moduleProgressElement = document.getElementById("module-progress");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const referenceElement = document.getElementById("reference");
const voiceToggle = document.getElementById("voice-toggle");
const voiceLanguage = document.getElementById("voice-language");

// Sound Effects
const correctAudio = new Audio('correcto.mp3');
const incorrectAudio = new Audio('incorrecto.mp3');
const celebrationAudio = new Audio('celebration.mp3');
const failAudio = new Audio('fail.mp3');

function startQuiz() {
    currentModuleIndex = 0;
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    nextButton.innerHTML = "Siguiente";

    showModule();
}

function showModule() {
    const currentModule = modules[currentModuleIndex];
    moduleTitleElement.innerHTML = currentModule.title;
    updateProgress();
    showQuestion();
}

function updateProgress() {
    const currentModule = modules[currentModuleIndex];
    const totalQuestionsInModule = currentModule.questions.length;
    const answeredQuestionsInModule = currentQuestionIndex + 1;
    moduleProgressElement.innerHTML = `Progreso: ${answeredQuestionsInModule} de ${totalQuestionsInModule}`;
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('time').textContent = timeLeft;
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    alert("Se acabó el tiempo");
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        incorrectAudio.play();
}

nextButton.addEventListener("click", () => {
    speechSynthesis.cancel();
    if (nextButton.innerHTML === "Repetir") {
        startQuiz();
    }
    else {
        handleNextButton();
    }
    
});

function showQuestion() {
    resetState();

    const currentModule = modules[currentModuleIndex];
    const currentQuestion = currentModule.questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    shuffleArray(currentQuestion.answers);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            button.dataset.reference = answer.reference || "";
        }
        button.addEventListener("click", selectAnswer);
    });

    updateProgress();
    startTimer();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    referenceElement.innerHTML = "";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const referenceText = selectedBtn.dataset.reference;
    
    if (referenceText) {
        referenceElement.innerHTML = "Referencia: " + referenceText;        
    } else {
        referenceElement.innerHTML = "";
    }
    
    if (isCorrect) {
        selectedBtn.classList.add("correcto");
        correctAudio.play();
        score++;
        correctAnswers++;
    } else {
        selectedBtn.classList.add("incorrecto");
        incorrectAudio.play();
        if (voiceToggle.checked) {
            const correctAnswer = Array.from(answerButtons.children).find(button => button.dataset.correct === "true").innerHTML;
            speakText("La respuesta correcta es " + correctAnswer);
        }
       
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correcto");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function speakText(text) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voiceLanguage.value;
    speechSynthesis.speak(utterance);
}

function showScore() {
    resetState();
    const totalQuestions = modules.reduce((sum, module) => sum + module.questions.length, 0);
    const percentage = (score / totalQuestions) * 100;

    const totalPassingScore = modules.reduce((sum, module) => sum + module.passingScore, 0) / modules.length;

    let emoji = '';
    
    if (percentage >= totalPassingScore) {
        emoji = '🤩';
        confetti ({
            particleCount: 100,
            spread: 70,
            origin: {y: 0.6}   
        });
        celebrationAudio.play();
    } else {
        emoji = '😔';
        confetti ({
            particleCount: 50,
            spread: 50,
            origin: {y: 0.6},
            colors: ['#ff0000', '#ff4500']
        });
        failAudio.play();
    }

    questionElement.innerHTML = `Haz conseguido ${score} de ${totalQuestions}! ${emoji}`;
    nextButton.innerHTML = "Repetir";
    nextButton.style.display = "block";
}

function handleNextButton() {
    const currentModule = modules[currentModuleIndex];

    if (currentQuestionIndex < currentModule.questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        if (correctAnswers / currentModule.questions.length * 100 >= currentModule.passingScore) {
            currentModuleIndex++;
            if (currentModuleIndex < modules.length) {
                currentQuestionIndex = 0;
                correctAnswers = 0;
                showModule();
            } else {
                showScore();
            }
        } else {
            alert("No has alcanzado el puntaje mínimo para pasar al siguiente módulo. Inténtalo de nuevo.");
            score = 0;
            correctAnswers = 0;
            currentModuleIndex = 0;
            startQuiz();
        }
    }
}

nextButton.addEventListener("click", () => {
    speechSynthesis.cancel();
    if (nextButton.innerHTML === "Repetir") {
        startQuiz();
    }
    else {
        handleNextButton();
    }
    
});

startQuiz();
