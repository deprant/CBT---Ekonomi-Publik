const WEBAPP_URL =
"https://script.google.com/macros/s/AKfycbwomBXNq7dheEaG35vw_49mrQq15B7C1cbiv0CgEGQf4lKp0f1UvcnazKnT2hBMJ__png/exec";

let currentQuestion = 0;
let userAnswers = [];
let essayAnswers = [];

let studentName = "";
let studentNim = "";
let studentClass = "";

let duration = 90 * 60;
let timerInterval;

// =========================
// SHUFFLE
// =========================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// =========================
// RANDOMIZE QUESTIONS
// =========================
function randomizeQuestions() {
    shuffleArray(questions);
}

// =========================
// START EXAM
// =========================
function startExam() {

    studentName = document.getElementById("nama").value.trim();
    studentNim = document.getElementById("nim").value.trim();
    studentClass = document.getElementById("kelas").value.trim();

    if (!studentName || !studentNim || !studentClass) {
        alert("Lengkapi data.");
        return;
    }

    randomizeQuestions();

    userAnswers = new Array(questions.length).fill(null);
    essayAnswers = new Array(questions.length).fill("");

    currentQuestion = 0;

    document.getElementById("login-page").style.display = "none";
    document.getElementById("exam-page").style.display = "block";

    loadQuestion();
    startTimer();
}

// =========================
// LOAD QUESTION
// =========================
function loadQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    document.getElementById("progress").innerText =
        `Soal ${currentQuestion + 1} / ${questions.length}`;

    let html = "";

    if (q.type === "mcq") {

        q.options.forEach((option, index) => {

            let selected = userAnswers[currentQuestion] === index ? "selected" : "";

            html += `
                <button class="option ${selected}" onclick="selectAnswer(${index})">
                    ${option}
                </button>
            `;
        });

    } else if (q.type === "essay") {

        html = `
            <textarea style="width:100%; height:160px;"
                onchange="saveEssay(this.value)"
                placeholder="Jawaban analitis...">${essayAnswers[currentQuestion] || ""}</textarea>
        `;
    }

    document.getElementById("options").innerHTML = html;
}

// =========================
// MCQ ANSWER
// =========================
function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion();
}

// =========================
// ESSAY ANSWER
// =========================
function saveEssay(value) {
    essayAnswers[currentQuestion] = value;
}

// =========================
// NAVIGATION
// =========================
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// =========================
// TIMER
// =========================
function startTimer() {

    timerInterval = setInterval(() => {

        duration--;

        const m = Math.floor(duration / 60);
        const s = duration % 60;

        document.getElementById("timer").innerText =
            `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

        if (duration <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }

    }, 1000);
}

// =========================
// SUBMIT
// =========================
async function submitExam() {

    clearInterval(timerInterval);

    let score = 0;

    questions.forEach((q, i) => {
        if (q.type === "mcq" && userAnswers[i] === q.answer) {
            score++;
        }
    });

    const finalScore = Math.round((score / questions.length) * 100);

    const payload = {
        nama: studentName,
        nim: studentNim,
        kelas: studentClass,
        score: finalScore,
        jawaban_mcq: userAnswers,
        jawaban_essay: essayAnswers
    };

    await fetch(WEBAPP_URL, {
        method: "POST",
        body: JSON.stringify(payload)
    });

    document.getElementById("exam-page").style.display = "none";
    document.getElementById("result-page").style.display = "block";

    document.getElementById("score-display").innerText =
        `Nilai MCQ: ${finalScore} | Essay dikirim untuk penilaian manual`;
}
