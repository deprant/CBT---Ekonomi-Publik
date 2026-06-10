const WEBAPP_URL =
"https://script.google.com/macros/s/AKfycbwomBXNq7dheEaG35vw_49mrQq15B7C1cbiv0CgEGQf4lKp0f1UvcnazKnT2hBMJ__png/exec";

let currentQuestion = 0;
let userAnswers = [];
let studentName = "";
let studentNim = "";
let studentClass = "";

let duration = 20 * 60;
let timerInterval;

// =========================
// SHUFFLE FUNCTION
// =========================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// =========================
// RANDOMIZE QUESTIONS + OPTIONS
// =========================
function randomizeQuestions() {

    shuffleArray(questions);

    questions.forEach(q => {

        const correctAnswerText = q.options[q.answer];

        const optionsWithFlag = q.options.map((opt, idx) => {
            return {
                text: opt,
                isCorrect: idx === q.answer
            };
        });

        shuffleArray(optionsWithFlag);

        q.options = optionsWithFlag.map(o => o.text);
        q.answer = q.options.indexOf(correctAnswerText);
    });
}

// =========================
// START EXAM
// =========================
function startExam() {

    studentName = document.getElementById("nama").value.trim();
    studentNim = document.getElementById("nim").value.trim();
    studentClass = document.getElementById("kelas").value.trim();

    if (!studentName || !studentNim || !studentClass) {
        alert("Lengkapi Nama, NIM, dan Kelas.");
        return;
    }

    randomizeQuestions();

    userAnswers = new Array(questions.length).fill(null);
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

    q.options.forEach((option, index) => {

        let selected = "";

        if (userAnswers[currentQuestion] === index) {
            selected = "selected";
        }

        html += `
            <button class="option ${selected}" onclick="selectAnswer(${index})">
                ${option}
            </button>
        `;
    });

    document.getElementById("options").innerHTML = html;
}

// =========================
// SELECT ANSWER
// =========================
function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion();
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

        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;

        document.getElementById("timer").innerText =
            `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

        if (duration <= 0) {
            clearInterval(timerInterval);
            alert("Waktu habis.");
            submitExam();
        }

    }, 1000);
}

// =========================
// SUBMIT EXAM
// =========================
async function submitExam() {

    clearInterval(timerInterval);

    let score = 0;

    questions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) {
            score++;
        }
    });

    const finalScore = Math.round((score / questions.length) * 100);

    const payload = {
        nama: studentName,
        nim: studentNim,
        kelas: studentClass,
        score: finalScore,
        jawaban: userAnswers
    };

    try {
        await fetch(WEBAPP_URL, {
            method: "POST",
            body: JSON.stringify(payload)
        });
    } catch (error) {
        console.error(error);
    }

    document.getElementById("exam-page").style.display = "none";
    document.getElementById("result-page").style.display = "block";

    document.getElementById("score-display").innerText =
        `Nilai Anda: ${finalScore}`;
}
