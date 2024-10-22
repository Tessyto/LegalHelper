const modules = [
    {
        title: "Módulo 1: Derecho Procesal Penal",
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
            {
                question: "¿Cuál es la finalidad del Código Orgánico Integral Penal?",
                answers: [
                    {text: "Normar el poder punitivo del Estado, tipificar las infracciones penales, establecer el procedimiento para el juzgamiento de las personas,  promover la rehabilitación social de las personas sentenciadas y la reparación integral de las víctimas.", correct: true, reference: "Consultar: COIP Art. 1"},
                    {text: "Normar el poder punitivo del Estado, tipificar los delitos y sancionar a los infractores penalmente.", correct: false},
                    {text: "Establecer la normas correctas para procesar y sancionar a las personas así como también lograr que estas personas paguen a la sociedad y a sus víctimas.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es el principio de mínima intervención penal?",
                answers: [
                    {text: "Es aquella que está legitimada siempre y cuando sea estrictamente necesaria para la protección del Estado. Constituye el último recurso, cuando no son suficientes los mecanismos extrapenales.", correct: false},
                    {text: "Es aquella que está legitimada siempre y cuando sea estrictamente necesaria para la protección de las personas. Constituye el último recurso, cuando no son suficientes los mecanismos extrapenales.", correct: true, reference: "Consultar: COIP Art. 3"},
                    {text: "Es aquella que está legitimada siempre y cuando sea estrictamente necesaria para la protección de las personas. Constituye un recurso, cuando no son suficientes los mecanismos extrapenales.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es el principio de legalidad?",
                answers: [
                    {text: "No hay infracción penal, pena, ni proceso penal sin ley anterior al hecho. Este principio rige incluso cuando la ley penal se remita a otras normas o disposiciones legales para integrarla.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 1"},
                    {text: "No hay infracción penal, pena, ni proceso penal sin ley anterior al hecho. Este principio  no rige cuando la ley penal se remita a otras normas o disposiciones legales para integrarla.", correct: false},
                    {text: "Este principio establece que debe existir un procedimiento propio para cada proceso, siempre y cuando la norma establecida este vigente.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es el principio de favorabilidad?",
                answers: [
                    {text: "Es cuando se da un conflicto entre dos normas de la misma materia, que contemplen sanciones diferentes para un mismo hecho, se aplicará la menos rigurosa aun cuando su promulgación sea posterior a la infracción.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 2"},
                    {text: "Es cuando se da un conflicto entre dos normas de la misma materia, que contemplen sanciones diferentes dentro de una misma ley, se aplicará la menos rigurosa aun cuando su promulgación sea posterior a la infracción.", correct: false},
                    {text: "Es cuando se da un conflicto entre dos normas de la misma materia, que contemplen sanciones diferentes para un mismo hecho, se aplicará la menos rigurosa siempre y cuando su promulgación sea anterior a la infracción.", correct: false},
                    {text: "Ninguna.", correct: false},
                ] 
            },
            {
                question: "¿Qué es el principio de duda a favor del reo?",
                answers: [
                    {text: "Es cuando la o el juzgador, para dictar sentencia condenatoria, debe tener el convencimiento de la culpabilidad penal de la persona procesada, más allá de toda duda razonable.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 3"},
                    {text: "Es cuando la o el juzgador, para dictar sentencia condenatoria, debe tener las pruebas de la culpabilidad penal de la persona procesada, más allá de toda duda razonable.", correct: false},
                    {text: "Es cuando la o el juzgador, para dictar sentencia condenatoria, debe tener el convencimiento de la culpabilidad penal de la persona procesada, con todas las pruebas plenas que acrediten la responsabilidad.", correct: false},
                    {text: "Ninguna.", correct: false},
                ] 
            },
            {
                question: "¿Qué es la presunción de inocencia?",
                answers: [
                    {text: "Es cuando toda persona mantiene su estatus jurídico de inocencia y debe ser tratada como tal, mientras no se ejecutoríe una sentencia que determine lo contrario.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 4"},
                    {text: "Toda persona mantiene su estatus jurídico de inocencia y debe ser tratada como tal, mientras no se interpongan los recursos establecidos en la ley.", correct: false},
                    {text: "Toda persona mantiene su estatus jurídico de inocencia y debe ser tratada Con respeto, y no se le imponga prisión preventiva para que pueda defenderse en libertad.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es la principio de igualdad?",
                answers: [
                    {text: "Este principio establece que es obligación de las y los servidores judiciales hacer efectiva la igualdad de los intervinientes en el desarrollo de la actuación procesal y proteger especialmente a aquellas personas que, por su condición económica, física o mental, se encuentren en circunstancias de vulnerabilidad.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 5"},
                    {text: "Este principio establece es obligación de las y los servidores judiciales hacer efectiva la igualdad de los intervinientes en el desarrollo de la actuación procesal y proteger especialmente a aquellas personas que, por su condición económica, física o mental, se encuentren en circunstancias de vulnerabilidad.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es el principio de impugnación procesal?",
                answers: [
                    {text: "Toda persona tiene derecho a recurrir del fallo, resolución o auto definitivo en todo proceso que se decida sobre sus derechos, de conformidad con lo establecido en la Constitución de la República, los instrumentos internacionales de derechos humanos y este Código.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 6"},
                    {text: "Toda persona tiene derecho a recurrir a la justicia en todo proceso, de conformidad con lo establecido en la Constitución de la República, los instrumentos internacionales de derechos humanos y este Código.", correct: false},
                    {text: "Toda persona tiene derecho a recurrir del fallo, resolución o auto definitivo en todo proceso que se decida sobre sus bienes, de conformidad con lo establecido en la Constitución de la República, los instrumentos internacionales de derechos humanos y este Código.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es la prohibición de empeorar la situación del procesado?",
                answers: [
                    {text: "Al resolver la impugnación de una sanción, no se podrá empeorar la situación de la persona procesada cuando esta es la única recurrente.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 7"},
                    {text: "Al resolver la impugnación de una sanción, no se podrá empeorar la situación de la persona procesada cuando esta no es la única recurrente.", correct: false},
                    {text: "Al resolver la impugnación de una sanción, se podrá empeorar la situación de la persona procesada cuando esta no a recurrido al fallo.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es la principio de prohibición de autoincriminación?",
                answers: [
                    {text: "Ninguna persona podrá ser obligada a declarar contra sí misma en asuntos que puedan ocasionar su responsabilidad penal.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 8"},
                    {text: "Ninguna persona podrá ser obligada a declarar contra su cónyuge e hijos.", correct: false},
                    {text: "Ninguna persona puede ser llamada a declarar en contra de sus familiares hasta el segundo grado de consanguinidad y cuarto de afinidad.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es la principio de prohibición de doble juzgamiento?",
                answers: [
                    {text: "Ninguna persona podrá ser juzgada ni penada más de una vez por los mismos hechos. Los casos resueltos por la jurisdicción indígena son considerados para este efecto. La aplicación de sanciones administrativas o civiles derivadas de los mismos hechos que sean objeto de juzgamiento y sanción penal no constituye vulneración a este principio.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 9"},
                    {text: "Ninguna persona podrá ser juzgada ni penada más de una vez por los mismos jueces que ya conocieron con anterioridad otra causa.", correct: false},
                    {text: "Ninguna persona podrá ser juzgada ni penada más de una vez con las mismas pruebas.", correct: false},
                    {text: "Ninguna.", correct: false},
                ] 
            },
            {
                question: "¿Qué es la principio a la intimidad?",
                answers: [
                    {text: "Toda persona tiene derecho a su intimidad personal y familiar. No podrán hacerse registros, allanamientos, incautaciones en su domicilio, residencia o lugar de trabajo, sino en virtud de orden de la o el juzgador competente, con arreglo a las formalidades y motivos previamente definidos, salvo los casos de excepción previstos en este Código.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 10"},
                    {text: "Toda persona tiene derecho a su intimidad personal y familiar. Podrán hacerse registros, allanamientos, incautaciones en su domicilio, residencia o lugar de trabajo, cuando se encuentren con objetos o bienes parte de un ilícito que se encuentra en investigación.", correct: false},
                    {text: "No podrán hacerse registros, allanamientos, incautaciones en su domicilio, residencia o lugar de trabajo, sino en virtud de orden de la o el juzgador competente, con arreglo a las formalidades y motivos previamente definidos, aun en delito flagrante.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es la principio de oralidad?",
                answers: [
                    {text: "Se desarrollará mediante el sistema oral y las decisiones se tomarán en audiencia; se utilizarán los medios técnicos disponibles para dejar constancia y registrar las actuaciones procesales; y, los sujetos procesales recurrirán a medios escritos en los casos previstos en este Código.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 11"},
                    {text: "Se desarrollará mediante el sistema oral y las decisiones se tomarán luego de la audiencia; se utilizarán los medios técnicos disponibles para dejar constancia y registrar las actuaciones procesales; y, los sujetos procesales recurrirán a medios escritos en los casos previstos en este Código.", correct: false},
                    {text: "Se desarrollará mediante el sistema oral y las decisiones se tomarán en audiencia; se utilizarán los medios técnicos disponibles para dejar constancia y registrar las actuaciones procesales; y, los sujetos procesales recurrirán a medios escritos aunque no estén previsto en este Código.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es la principio de concentración?",
                answers: [
                    {text: "Es cuando la o el juzgador concentrará y realizará la mayor cantidad de actos procesales en una sola audiencia; cada tema en discusión se resolverá de manera exclusiva con la información producida en la audiencia destinada para el efecto.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 12"},
                    {text: "La o el juzgador celebrará las audiencias en conjunto con los sujetos procesales y deberá estar presente con las partes para la evacuación de los medios de prueba y demás actos procesales que estructuran de manera fundamental el proceso penal.", correct: false},
                    {text: "Es cuando la o el juzgador concentrará y realizará la mayor cantidad de audiencias en una sola audiencia; cada tema en discusión se resolverá de manera exclusiva con la información producida en la audiencia destinada para el efecto.", correct: false},
                    {text: "Ninguna.", correct: false},
                ] 
            },
            {
                question: "¿Qué es la principio de contradicción?",
                answers: [
                    {text: "Es cuando los sujetos procesales deben presentar, en forma verbal las razones o argumentos de los que se crean asistidos; replicar los argumentos de las otras partes procesales; presentar pruebas; y, contradecir las que se presenten en su contra.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 13"},
                    {text: "Es cuando los sujetos procesales deben presentar, en forma verbal o escrita las razones o argumentos de los que se crean asistidos; replicar los argumentos de las otras partes procesales; presentar pruebas; y, contradecir las que se presenten en su contra.", correct: false},
                    {text: "Es cuando los sujetos procesales deben presentar, en forma verbal las razones o argumentos de los que se crean asistidos; replicar los argumentos de las otras partes procesales; presentar pruebas, sin poder contradecir las que se presenten en su contra.", correct: false},
                    {text: "Ninguna.", correct: false},
                ] 
            },
            {
                question: "¿Qué es la principio de dirección judicial del proceso?",
                answers: [
                    {text: "La o el juzgador, de conformidad con la ley, ejercerá la dirección del proceso, controlará las actividades de las partes procesales y evitará dilaciones innecesarias. En función de este principio, la o el juzgador podrá interrumpir a las partes para solicitar aclaraciones, encauzar el debate y realizar las demás acciones correctivas.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 14"},
                    {text: "La o el juzgador, de conformidad con la ley, ejercerá la dirección del proceso, controlará las actividades de las partes procesales y evitará dilaciones innecesarias. En función de este principio, la o el juzgador no podrá interrumpir a las partes para solicitar aclaraciones, encauzar el debate y realizar las demás acciones correctivas.", correct: false},
                    {text: "En función de este principio, la o el juzgador podrá interrumpir a las partes para solicitar aclaraciones, encauzar el debate y realizar las demás acciones correctivas.", correct: false},
                    {text: "Ninguna.", correct: false},
                ] 
            },
            {
                question: "¿Qué es el impulso procesal?",
                answers: [
                    {text: "Corresponde a las partes procesales el impulso del proceso, conforme con el sistema dispositivo.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 15"},
                    {text: "Corresponde a las partes procesales el impulso del proceso, conforme con el sistema oral.", correct: false},
                    {text: "Corresponde a las partes procesales el impulso del proceso, conforme con el sistema procesal.", correct: false},
                    {text: "Ninguna.", correct: false},
                ] 
            },
            {
                question: "¿Qué es principio de publicidad?",
                answers: [
                    {text: "Todo proceso penal es público salvo los casos de excepción previstos en este Código.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 16"},
                    {text: "Todo proceso penal es público.", correct: false},
                    {text: "Todo proceso penal es público excepto en los que autorice el juez o jueza.", correct: false},
                    {text: "Ninguna.", correct: false},
                ] 
            },
            {
                question: "¿Qué es principio de inmediación?",
                answers: [
                    {text: "La o el juzgador celebrará las audiencias en conjunto con los sujetos procesales y deberá estar presente con las partes para la evacuación de los medios de prueba y demás actos procesales que estructuran de manera fundamental el proceso penal.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 17"},
                    {text: "Es cuando la o el juzgador concentrará y realizará la mayor cantidad de actos procesales en una sola audiencia; cada tema en discusión se resolverá de manera conjunta con la información producida en la audiencia destinada para el efecto.", correct: false},
                    {text: "La o el juzgador celebrará las audiencias en conjunto con los sujetos procesales y deberá estar presente con las partes para la presentación  de pruebas y demás actos procesales que estructuran de manera fundamental el debido proceso.", correct: false},
                    {text: "Ninguna.", correct: false},
                ] 
            },
            {
                question: "¿Qué es principio de motivación?",
                answers: [
                    {text: "La o el juzgador fundamentará sus decisiones, en particular, se pronunciará sobre los argumentos y razones relevantes expuestos por los sujetos procesales durante el proceso.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 18"},
                    {text: "La o el juzgador pedirá a las partes para que motiven su intervención dentro del proceso penal.", correct: false},
                    {text: "La o el juzgador Solicitara fundamentar las posturas que hayan tomado las partes procesales dentro de un proceso.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es principio de imparcialidad?",
                answers: [
                    {text: "La o el juzgador, en todos los procesos a su cargo, se orientará por el imperativo de administrar justicia de conformidad con la Constitución de la República, los instrumentos internacionales de derechos humanos y este Código, respetando la igualdad ante la Ley.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 19"},
                    {text: "La o el juzgador, en todos los procesos a su cargo, se orientará por el imperativo de administrar justicia deberá escuchar a las partes y resolver conforme las pruebas presentadas en juicio.", correct: false},
                    {text: "La o el juzgador, en todos los procesos a su cargo, se orientará por el imperativo de administrar justicia de conformidad con la Constitución de la República, las leyes y las pruebas presentadas en juicio.", correct: false},
                    {text: "Ninguna.", correct: false},
                ]
            },
            {
                question: "¿Qué es principio de privacidad y confidencialidad?",
                answers: [
                    {text: "El fiscal deberá solicitar autorización a fin de poder violentar la correspondencia de una persona investigada.", correct: false},
                    {text: "El fiscal de una manera motivada deberá solicitar autorización al juez a fin de poder obtener información reservada de los investigados dentro de un proceso penal.", correct: false},
                    {text: "El juez o jueza deberá autorizar previa solicitud del fiscal la apertura de teléfonos o cualquier medio electrónico que se encuentre como evidencia dentro de un proceso penal.", correct: false},
                    {text: "Ninguna.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 20"},
                ]
            },
            {
                question: "¿Qué es principio de objetividad?",
                answers: [
                    {text: "En el ejercicio de sus funciones l fiscal deberá presentar al juzgador todos los lementos de convicción a fin de poder probar tanto la materialidad como la responsabilidad del procesado.", correct: false},
                    {text: "En el ejercicio de sus funciones el fiscal deberá adecuar la conducta de los investigados de acuerdo a los elementos de convicción que ha recopilado dentro de la investigación y formular cargos.", correct: false},
                    {text: "El fiscal una vez concluida la instrucción fiscal solicitara al juzgador señale dia y hora a fin de que se lleve a cabo la audiencia de evaluación y preparatoria de juicio donde sustentara su dictamen.", correct: false},
                    {text: "Ninguna.", correct: true, reference: "Consultar: COIP Art. 5 Numeral 21"},
                ]
            },
            // Añade más preguntas para el Módulo 1
        ],
        passingScore: 24 // Porcentaje mínimo para aprobar el módulo
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
