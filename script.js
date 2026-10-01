/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const RELATIONSHIP_START =
    new Date(2023, 0, 17, 0, 0, 0);

/* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_URL =
    "https://eytswffpxniuruwtdjvg.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_I8h8AT6qdrZlWld1DeSpFg_ZXNH774B";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* =========================================================
   USUÁRIOS
========================================================= */

const USERS = {

    amanda: {
        name: "Amanda",
        email: "amanda@nois-dois.com",
        requiresQuiz: true
    },

    caua: {
        name: "Cauã",
        email: "caua@nois-dois.com",
        requiresQuiz: false
    }

};


/* =========================================================
   FRASES DA TELA DE LOGIN
========================================================= */

const romanticPhrases = [

    "De todas as histórias que eu poderia viver, escolheria a nossa.",

    "Você transformou dias comuns em lembranças que eu nunca quero perder.",

    "Se existe um lugar onde eu quero estar, é ao seu lado.",

    "O melhor capítulo da minha vida começou quando você entrou nela.",

    "Eu escolheria você em todas as versões da nossa história.",

    "Algumas pessoas passam pela nossa vida. Você ficou.",

    "Ainda existem milhares de dias pela frente. E eu quero todos com você.",

    "O tempo pode mudar muita coisa. Só não mudou o que sinto por você."

];

let phraseIndex = 0;

const romanticPhrase =
    document.getElementById(
        "romanticPhrase"
    );


function rotateRomanticPhrase() {

    if (!romanticPhrase) {
        return;
    }

    phraseIndex =
        (phraseIndex + 1) %
        romanticPhrases.length;

    romanticPhrase.style.opacity = "0";

    setTimeout(
        function () {

            romanticPhrase.textContent =
                `"${romanticPhrases[phraseIndex]}"`;

            romanticPhrase.style.opacity =
                "1";

        },
        500
    );

}


setInterval(
    rotateRomanticPhrase,
    5000
);


/* =========================================================
   ELEMENTOS
========================================================= */

const loginGate =
    document.getElementById("loginGate");

const quizGate =
    document.getElementById("quizGate");

const mainSite =
    document.getElementById("mainSite");

const loginForm =
    document.getElementById("loginForm");

const usernameInput =
    document.getElementById("username");

const passwordInput =
    document.getElementById("password");

const loginError =
    document.getElementById("loginError");


/* CONTADOR */

const counterYears =
    document.getElementById("counterYears");

const counterMonths =
    document.getElementById("counterMonths");

const counterDays =
    document.getElementById("counterDays");

const counterHours =
    document.getElementById("counterHours");

const counterMinutes =
    document.getElementById("counterMinutes");

const counterSeconds =
    document.getElementById("counterSeconds");


/* QUIZ */

const quizIntro = document.getElementById("quizIntro");
const quizGame = document.getElementById("quizGame");
const quizFinal = document.getElementById("quizFinal");
const quizStart = document.getElementById("quizStart");
const quizEnter = document.getElementById("quizEnter");
const quizProgress = document.getElementById("quizProgress");
const quizProgressBar = document.getElementById("quizProgressBar");
const quizQuestionNumber = document.getElementById("quizQuestionNumber");
const quizQuestion = document.getElementById("quizQuestion");
const quizSuspense = document.getElementById("quizSuspense");
const quizOptions = document.getElementById("quizOptions");
const quizReaction = document.getElementById("quizReaction");
const quizReactionText = document.getElementById("quizReactionText");
const quizReactionSubtext = document.getElementById("quizReactionSubtext");
const quizNext = document.getElementById("quizNext");


/* EVOLUÇÃO */

const evolutionGrid =
    document.getElementById(
        "evolutionGrid"
    );

const evolutionModal =
    document.getElementById(
        "evolutionModal"
    );

const evolutionForm =
    document.getElementById(
        "evolutionForm"
    );

const evolutionPhoto =
    document.getElementById(
        "evolutionPhoto"
    );

const evolutionDescription =
    document.getElementById(
        "evolutionDescription"
    );

const evolutionModalTitle =
    document.getElementById(
        "evolutionModalTitle"
    );

const closeEvolutionModal =
    document.getElementById(
        "closeEvolutionModal"
    );


/* ÁLBUNS */

const createAlbumButton =
    document.getElementById(
        "createAlbumButton"
    );

const albumsView =
    document.getElementById(
        "albumsView"
    );

const albumDetail =
    document.getElementById(
        "albumDetail"
    );

const backAlbumsButton =
    document.getElementById(
        "backAlbumsButton"
    );

const addPhotosButton =
    document.getElementById(
        "addPhotosButton"
    );

const albumDetailTitle =
    document.getElementById(
        "albumDetailTitle"
    );

const albumDetailDescription =
    document.getElementById(
        "albumDetailDescription"
    );

const albumDetailCount =
    document.getElementById(
        "albumDetailCount"
    );

const albumPhotoGrid =
    document.getElementById(
        "albumPhotoGrid"
    );

const editAlbumButton =
    document.getElementById(
        "editAlbumButton"
    );

const deleteAlbumButton =
    document.getElementById(
        "deleteAlbumButton"
    );


/* MODAL ÁLBUM */

const albumModal =
    document.getElementById(
        "albumModal"
    );

const albumModalTitle =
    document.getElementById(
        "albumModalTitle"
    );

const albumForm =
    document.getElementById(
        "albumForm"
    );

const albumName =
    document.getElementById(
        "albumName"
    );

const albumDescription =
    document.getElementById(
        "albumDescription"
    );

const albumCover =
    document.getElementById(
        "albumCover"
    );

const closeAlbumModal =
    document.getElementById(
        "closeAlbumModal"
    );


/* MODAL FOTOS */

const photosModal =
    document.getElementById(
        "photosModal"
    );

const photosForm =
    document.getElementById(
        "photosForm"
    );

const albumPhotos =
    document.getElementById(
        "albumPhotos"
    );

const closePhotosModal =
    document.getElementById(
        "closePhotosModal"
    );


/* LIGHTBOX */

const lightbox =
    document.getElementById(
        "lightbox"
    );

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const closeLightbox =
    document.getElementById(
        "closeLightbox"
    );

const lightboxPrev =
    document.getElementById(
        "lightboxPrev"
    );

const lightboxNext =
    document.getElementById(
        "lightboxNext"
    );

const lightboxCounter =
    document.getElementById(
        "lightboxCounter"
    );


/* DATAS */

const addDateButton =
    document.getElementById(
        "addDateButton"
    );

const datesList =
    document.getElementById(
        "datesList"
    );


/* CARTAS */

const addLetterButton =
    document.getElementById(
        "addLetterButton"
    );

const lettersList =
    document.getElementById(
        "lettersList"
    );


/* TOAST */

const toast =
    document.getElementById(
        "toast"
    );


/* =========================================================
   ESTADO
========================================================= */

let currentUser = null;

let currentQuizQuestion = 0;

let selectedQuizAnswer = null;

let quizAnswers = [];

let currentEvolutionType = null;

let editingAlbumId = null;

let currentAlbumId = null;

let currentLightboxPhotos = [];

let currentLightboxIndex = 0;

let toastTimeout = null;


/* =========================================================
   LOGIN
========================================================= */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();
            event.stopPropagation();

            const username =
                usernameInput.value
                    .trim()
                    .toLowerCase();

            const password =
                passwordInput.value
                    .trim();

            const user =
                USERS[username];

            if (!user) {
                loginError.textContent =
                    "Nome ou senha incorretos.";

                return false;
            }

            loginError.textContent = "";

            const {
                data,
                error
            } = await supabaseClient.auth.signInWithPassword({
                email: user.email,
                password
            });

            if (error || !data.user) {
                console.error(
                    "Erro no login:",
                    error
                );

                loginError.textContent =
                    "Nome ou senha incorretos.";

                return false;
            }

            currentUser = {
                ...user,
                id: data.user.id
            };

            localStorage.setItem(
                "coupleCurrentUser",
                username
            );

            const quizAlreadyCompleted =
                localStorage.getItem(
                    `quizCompleted_${username}`
                ) === "true";

            if (
                user.requiresQuiz &&
                !quizAlreadyCompleted
            ) {

                openQuiz();

            } else {

                openMainSite();

            }

            return false;

        }
    );

}


/* =========================================================
   QUIZ — EXPERIÊNCIA DE SUSPENSE
========================================================= */

const quizQuestions = [
    "Quem é mais chato(a)? 😏",
    "Quem reclama mais? 😂",
    "Quem briga mais? 😤",
    "Quem se esforça mais para dar presentes? 🎁",
    "Quem sempre pede desculpas primeiro? 🥹",
    "Quem é mais romântico em público? 🥰",
    "Quem sente mais saudade? 💭",
    "Quem é mais ciumento(a)? 👀",
    "Quem faz mais graça? 🤣",
    "Quem ama mais o outro? ❤️"
];

const quizSuspenseMessages = [
    "Escolha com cuidado... essa resposta fica entre nós. 👀",
    "Essa já diz um pouco sobre vocês...",
    "Hmm... interessante. Vamos continuar. 👀",
    "Essa talvez gere uma pequena discussão... 😂",
    "Metade do caminho. Continue... ❤️",
    "Agora começa a ficar difícil...",
    "Você conhece bem essa história?",
    "Só mais três... não mude de ideia agora. 👀",
    "Quase lá...",
    "A última pode ser a mais importante. ❤️"
];

const quizReactions = [
    { title: "Resposta registrada... 👀", text: "Vamos guardar essa." },
    { title: "Hmm... interessante. 😏", text: "Essa resposta diz bastante coisa." },
    { title: "Anotado. 😂", text: "Não vamos discutir isso agora..." },
    { title: "Essa foi corajosa. 👀", text: "Mas ainda temos algumas perguntas." },
    { title: "Você chegou na metade. ❤️", text: "E ainda tem muita história pela frente." },
    { title: "Agora ficou sério... 👀", text: "Pense bem nas próximas." },
    { title: "Você realmente conhece vocês dois. ❤️", text: "Ou será que conhece?" },
    { title: "Só faltam duas...", text: "Não desista agora." },
    { title: "Última antes da última... 👀", text: "Essa história está quase sendo aberta." },
    { title: "Essa resposta fica guardada. ❤️", text: "Agora falta só uma coisa..." }
];

function openQuiz() {
    loginGate.classList.add("hidden");
    mainSite.classList.add("hidden");
    quizGate.classList.remove("hidden");

    currentQuizQuestion = 0;
    selectedQuizAnswer = null;

    if (quizIntro) quizIntro.classList.remove("hidden");
    if (quizGame) quizGame.classList.add("hidden");
    if (quizFinal) quizFinal.classList.add("hidden");
    if (quizReaction) quizReaction.classList.add("hidden");
}

if (quizStart) {
    quizStart.addEventListener("click", function () {
        if (quizIntro) quizIntro.classList.add("hidden");
        if (quizFinal) quizFinal.classList.add("hidden");
        if (quizGame) quizGame.classList.remove("hidden");

        currentQuizQuestion = 0;
        selectedQuizAnswer = null;
        quizAnswers = [];

        renderQuizQuestion();
    });
}

function renderQuizQuestion() {
    const index = currentQuizQuestion;

    selectedQuizAnswer = null;

    if (quizProgress) {
        quizProgress.textContent =
            `${index + 1} / ${quizQuestions.length}`;
    }

    if (quizProgressBar) {
        quizProgressBar.style.width =
            `${((index + 1) / quizQuestions.length) * 100}%`;
    }

    if (quizQuestionNumber) {
        quizQuestionNumber.textContent =
            `PERGUNTA ${String(index + 1).padStart(2, "0")}`;
    }

    if (quizQuestion) {
        quizQuestion.textContent = quizQuestions[index];
    }

    if (quizSuspense) {
        quizSuspense.textContent = quizSuspenseMessages[index];
    }

    if (quizOptions) {
        quizOptions.innerHTML = "";
    }

    if (quizReaction) {
        quizReaction.classList.add("hidden");
    }

    if (quizNext) {
        quizNext.disabled = true;
        quizNext.textContent =
            index === quizQuestions.length - 1
                ? "finalizar"
                : "próxima pergunta →";
    }

    if (index === quizQuestions.length - 1) {

        const sliderWrap = document.createElement("div");
        sliderWrap.className = "quiz-love-slider";

        sliderWrap.innerHTML = `
            <div class="quiz-love-value" id="quizLoveValue">50%</div>

            <p class="quiz-love-caption">
                Arraste até o quanto você ama o Cauã ❤️
            </p>

            <input
                id="quizLoveRange"
                class="quiz-love-range"
                type="range"
                min="0"
                max="100"
                value="50"
                step="1"
                aria-label="Quanto você ama o Cauã"
            >

            <div class="quiz-love-labels">
                <span>um pouquinho</span>
                <span>DEMAIS ❤️</span>
            </div>
        `;

        quizOptions.appendChild(sliderWrap);

        const slider = sliderWrap.querySelector("#quizLoveRange");
        const value = sliderWrap.querySelector("#quizLoveValue");

        slider.addEventListener("input", function () {

            value.textContent = `${slider.value}%`;

            selectedQuizAnswer = slider.value;

            if (quizReactionText) {
                quizReactionText.textContent = "Isso... agora sim. ❤️";
            }

            if (quizReactionSubtext) {
                quizReactionSubtext.textContent =
                    `Você escolheu ${slider.value}% de amor.`;
            }

            if (quizReaction) {
                quizReaction.classList.remove("hidden");
                quizReaction.classList.remove("quiz-reaction-pop");
                void quizReaction.offsetWidth;
                quizReaction.classList.add("quiz-reaction-pop");
            }

            if (quizNext) {
                quizNext.disabled = false;
            }

        });

    } else {

        ["Cauã", "Amanda"].forEach(function (name) {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "quiz-option";

            button.innerHTML = `
                <span class="quiz-option-heart">♡</span>
                <span>${name}</span>
            `;

            button.addEventListener("click", function () {
                selectQuizAnswer(button, name);
            });

            quizOptions.appendChild(button);
        });

    }
}

function selectQuizAnswer(button, answer) {
    selectedQuizAnswer = answer;

    document.querySelectorAll(".quiz-option").forEach(function (item) {
        item.classList.remove("selected");
        item.disabled = true;
    });

    button.classList.add("selected");

    showQuizReaction();

    if (quizNext) {
        quizNext.disabled = false;
    }

    createQuizHeart(button);
}

function showQuizReaction() {
    const reaction = quizReactions[currentQuizQuestion];

    if (!quizReaction || !reaction) {
        return;
    }

    if (quizReactionText) {
        quizReactionText.textContent = reaction.title;
    }

    if (quizReactionSubtext) {
        quizReactionSubtext.textContent = reaction.text;
    }

    quizReaction.classList.remove("hidden");
    quizReaction.classList.remove("quiz-reaction-pop");

    void quizReaction.offsetWidth;

    quizReaction.classList.add("quiz-reaction-pop");
}

function createQuizHeart(button) {
    const heart = document.createElement("span");

    heart.textContent = "♥";
    heart.className = "quiz-floating-heart";

    const rect = button.getBoundingClientRect();

    heart.style.left =
        `${rect.left + rect.width / 2}px`;

    heart.style.top =
        `${rect.top + rect.height / 2}px`;

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1200);
}

if (quizNext) {
    quizNext.addEventListener("click", async function () {

        if (!selectedQuizAnswer) {
            showToast("Escolha uma resposta primeiro. ❤️");
            return;
        }

        quizAnswers[currentQuizQuestion] =
            String(selectedQuizAnswer);

        if (currentQuizQuestion < quizQuestions.length - 1) {
            currentQuizQuestion++;
            renderQuizQuestion();
            return;
        }

        await finishQuiz();
    });
}

async function finishQuiz() {

    const username =
        localStorage.getItem("coupleCurrentUser");

    if (currentUser && quizAnswers.length) {

        const { error } =
            await supabaseClient
                .from("quiz_answers")
                .upsert(
                    quizAnswers.map(
                        function (answer, index) {
                            return {
                                user_id: currentUser.id,
                                question_number: index + 1,
                                answer
                            };
                        }
                    ),
                    {
                        onConflict:
                            "user_id,question_number"
                    }
                );

        if (error) {
            console.error(
                "Erro ao salvar respostas do quiz:",
                error
            );
        }
    }

    if (username) {
        localStorage.setItem(
            `quizCompleted_${username}`,
            "true"
        );
    }

    if (quizGame) quizGame.classList.add("hidden");
    if (quizIntro) quizIntro.classList.add("hidden");

    setTimeout(function () {
        if (quizFinal) quizFinal.classList.remove("hidden");
    }, 350);
}


if (quizEnter) {
    quizEnter.addEventListener("click", function () {
        quizEnter.disabled = true;
        quizEnter.textContent = "abrindo nossa história...";

        setTimeout(function () {
            openMainSite();

            quizEnter.disabled = false;
            quizEnter.textContent = "ABRIR NOSSA HISTÓRIA ❤️";
        }, 700);
    });
}


/* =========================================================
   SITE
========================================================= */

async function openMainSite() {

    if (loginGate) {
        loginGate.classList.add("hidden");
    }

    if (quizGate) {
        quizGate.classList.add("hidden");
    }

    if (mainSite) {
        mainSite.classList.remove("hidden");
        mainSite.style.display = "";
    }

    try {
        updateRelationshipCounter();

        await Promise.all([
            renderEvolution(),
            renderAlbums(),
            renderDates(),
            renderLetters()
        ]);
    } catch (error) {
        console.error(
            "Erro ao carregar a história:",
            error
        );
    }

    window.scrollTo(0, 0);
}


/* =========================================================
   CONTADOR
========================================================= */

function calculateRelationshipTime(
    startDate,
    endDate
) {

    let years =
        endDate.getFullYear() -
        startDate.getFullYear();


    let anniversary =
        new Date(startDate);


    anniversary.setFullYear(
        startDate.getFullYear() +
        years
    );


    if (
        anniversary >
        endDate
    ) {

        years--;

        anniversary =
            new Date(startDate);

        anniversary.setFullYear(
            startDate.getFullYear() +
            years
        );

    }


    let months =
        endDate.getMonth() -
        anniversary.getMonth();


    if (months < 0) {
        months += 12;
    }


    let monthReference =
        new Date(anniversary);


    monthReference.setMonth(
        monthReference.getMonth() +
        months
    );


    if (
        monthReference >
        endDate
    ) {

        months--;

        monthReference =
            new Date(anniversary);

        monthReference.setMonth(
            monthReference.getMonth() +
            months
        );

    }


    let remaining =
        endDate.getTime() -
        monthReference.getTime();


    const second = 1000;

    const minute =
        second * 60;

    const hour =
        minute * 60;

    const day =
        hour * 24;


    const days =
        Math.floor(
            remaining / day
        );


    remaining -=
        days * day;


    const hours =
        Math.floor(
            remaining / hour
        );


    remaining -=
        hours * hour;


    const minutes =
        Math.floor(
            remaining / minute
        );


    remaining -=
        minutes * minute;


    const seconds =
        Math.floor(
            remaining / second
        );


    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };

}


function padNumber(
    number
) {

    return String(number)
        .padStart(2, "0");

}


function updateRelationshipCounter() {

    if (!counterYears) {
        return;
    }


    const difference =
        calculateRelationshipTime(
            RELATIONSHIP_START,
            new Date()
        );


    counterYears.textContent =
        padNumber(
            difference.years
        );

    counterMonths.textContent =
        padNumber(
            difference.months
        );

    counterDays.textContent =
        padNumber(
            difference.days
        );

    counterHours.textContent =
        padNumber(
            difference.hours
        );

    counterMinutes.textContent =
        padNumber(
            difference.minutes
        );

    counterSeconds.textContent =
        padNumber(
            difference.seconds
        );

}


updateRelationshipCounter();

setInterval(
    updateRelationshipCounter,
    1000
);


/* =========================================================
   IMAGENS
========================================================= */

function compressImage(
    file,
    maxSize = 1600,
    quality = .78
) {

    return new Promise(
        function (resolve, reject) {

            const reader =
                new FileReader();


            reader.onload =
                function () {

                    const image =
                        new Image();


                    image.onload =
                        function () {

                            let width =
                                image.width;

                            let height =
                                image.height;


                            if (
                                width >
                                maxSize ||
                                height >
                                maxSize
                            ) {

                                const ratio =
                                    Math.min(
                                        maxSize / width,
                                        maxSize / height
                                    );

                                width =
                                    Math.round(
                                        width * ratio
                                    );

                                height =
                                    Math.round(
                                        height * ratio
                                    );

                            }


                            const canvas =
                                document.createElement(
                                    "canvas"
                                );


                            canvas.width =
                                width;

                            canvas.height =
                                height;


                            const context =
                                canvas.getContext(
                                    "2d"
                                );


                            context.drawImage(
                                image,
                                0,
                                0,
                                width,
                                height
                            );


                            resolve(
                                canvas.toDataURL(
                                    "image/jpeg",
                                    quality
                                )
                            );

                        };


                    image.onerror =
                        reject;

                    image.src =
                        reader.result;

                };


            reader.onerror =
                reject;


            reader.readAsDataURL(
                file
            );

        }
    );

}


/* =========================================================
   SUPABASE — ARQUIVOS E DADOS DO CASAL
========================================================= */

const STORAGE_BUCKET = "couple-photos";
const SIGNED_URL_SECONDS = 3600;

function dataUrlToBlob(dataUrl) {
    const parts = dataUrl.split(",");
    const mime = parts[0].match(/:(.*?);/)[1];
    const binary = atob(parts[1]);
    const bytes = new Uint8Array(binary.length);

    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return new Blob([bytes], { type: mime });
}

async function uploadDataUrl(dataUrl, path) {
    const blob = dataUrlToBlob(dataUrl);

    const { error } =
        await supabaseClient.storage
            .from(STORAGE_BUCKET)
            .upload(path, blob, {
                contentType: blob.type || "image/jpeg",
                cacheControl: "31536000",
                upsert: true
            });

    if (error) {
        throw error;
    }

    return path;
}

async function getSignedUrl(path) {
    if (!path) {
        return "";
    }

    const { data, error } =
        await supabaseClient.storage
            .from(STORAGE_BUCKET)
            .createSignedUrl(
                path,
                SIGNED_URL_SECONDS
            );

    if (error) {
        throw error;
    }

    return data.signedUrl;
}

async function getSignedUrls(paths) {
    const cleanPaths =
        paths.filter(Boolean);

    if (!cleanPaths.length) {
        return [];
    }

    const { data, error } =
        await supabaseClient.storage
            .from(STORAGE_BUCKET)
            .createSignedUrls(
                cleanPaths,
                SIGNED_URL_SECONDS
            );

    if (error) {
        throw error;
    }

    return data.map(function (item) {
        return item.signedUrl;
    });
}

async function removeStorageFile(path) {
    if (!path) {
        return;
    }

    const { error } =
        await supabaseClient.storage
            .from(STORAGE_BUCKET)
            .remove([path]);

    if (error) {
        console.error(
            "Erro ao excluir arquivo:",
            error
        );
    }
}


/* =========================================================
   EVOLUÇÃO
========================================================= */

const evolutionDefaults = {

    beginning: {
        title: "O começo",
        description: "Onde tudo nasceu."
    },

    middle: {
        title: "No meio",
        description: "Tudo que construímos."
    },

    current: {
        title: "Atualmente",
        description: "Nós dois, hoje."
    }

};

async function getEvolution() {
    const { data, error } =
        await supabaseClient
            .from("evolution")
            .select("*");

    if (error) {
        console.error(
            "Erro ao carregar evolução:",
            error
        );
        return {};
    }

    const result = {};

    for (const item of data || []) {
        result[item.stage] = item;
    }

    return result;
}

async function openEvolution(type) {

    currentEvolutionType =
        type;

    const data =
        await getEvolution();

    const saved =
        data[type];

    evolutionModalTitle.textContent =
        `Foto — ${evolutionDefaults[type].title}`;

    evolutionDescription.value =
        saved?.description || "";

    evolutionPhoto.value = "";

    evolutionModal.classList.remove(
        "hidden"
    );
}

if (evolutionGrid) {

    evolutionGrid.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    "[data-evolution-action]"
                );

            if (!button) {
                return;
            }

            openEvolution(
                button.dataset.evolutionAction
            );

        }
    );

}

if (closeEvolutionModal) {

    closeEvolutionModal.addEventListener(
        "click",
        function () {

            evolutionModal.classList.add(
                "hidden"
            );

        }
    );

}

if (evolutionModal) {

    evolutionModal
        .querySelector(".modal-bg")
        .addEventListener(
            "click",
            function () {

                evolutionModal.classList.add(
                    "hidden"
                );

            }
        );

}

if (evolutionForm) {

    evolutionForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const file =
                evolutionPhoto.files[0];

            const description =
                evolutionDescription.value.trim();

            if (!file) {

                showToast(
                    "Escolha uma foto ❤️"
                );

                return;

            }

            try {

                const photo =
                    await compressImage(
                        file
                    );

                const existingData =
                    await getEvolution();

                const oldPath =
                    existingData[
                        currentEvolutionType
                    ]?.storage_path;

                const path =
                    `evolution/${currentEvolutionType}-${crypto.randomUUID()}.jpg`;

                await uploadDataUrl(
                    photo,
                    path
                );

                const { error } =
                    await supabaseClient
                        .from("evolution")
                        .upsert(
                            {
                                stage:
                                    currentEvolutionType,

                                storage_path:
                                    path,

                                description,

                                updated_by:
                                    currentUser?.id || null,

                                updated_at:
                                    new Date().toISOString()
                            },
                            {
                                onConflict:
                                    "stage"
                            }
                        );

                if (error) {
                    await removeStorageFile(path);
                    throw error;
                }

                if (oldPath) {
                    await removeStorageFile(
                        oldPath
                    );
                }

                evolutionModal.classList.add(
                    "hidden"
                );

                await renderEvolution();

                showToast(
                    "Foto guardada ❤️"
                );

            } catch (error) {

                console.error(
                    "Erro ao salvar evolução:",
                    error
                );

                showToast(
                    "Não foi possível guardar a foto."
                );

            }

        }
    );

}

async function renderEvolution() {

    if (!evolutionGrid) {
        return;
    }

    try {

        const data =
            await getEvolution();

        const paths =
            Object.values(data)
                .map(
                    item =>
                        item.storage_path
                )
                .filter(Boolean);

        const urls =
            await getSignedUrls(paths);

        const urlByPath =
            {};

        paths.forEach(
            function (path, index) {
                urlByPath[path] =
                    urls[index];
            }
        );

        Object.keys(
            evolutionDefaults
        ).forEach(
            function (type) {

                const card =
                    evolutionGrid.querySelector(
                        `[data-evolution="${type}"]`
                    );

                if (!card) {
                    return;
                }

                const image =
                    card.querySelector(
                        ".evolution-photo"
                    );

                const info =
                    card.querySelector(
                        ".evolution-info"
                    );

                const saved =
                    data[type];

                const savedUrl =
                    saved
                        ? urlByPath[
                            saved.storage_path
                        ]
                        : "";

                if (savedUrl) {

                    image.innerHTML = `

                        <img
                            src="${savedUrl}"
                            alt="${evolutionDefaults[type].title}"
                        >

                    `;

                    info.querySelector(
                        "p"
                    ).textContent =
                        saved.description ||
                        evolutionDefaults[type].description;

                    info.querySelector(
                        ".text-button"
                    ).textContent =
                        "trocar foto";

                } else {

                    image.innerHTML = `

                        <div class="evolution-empty">

                            <span>+</span>

                            <p>
                                adicionar foto
                            </p>

                        </div>

                    `;

                    info.querySelector(
                        "p"
                    ).textContent =
                        evolutionDefaults[type].description;

                    info.querySelector(
                        ".text-button"
                    ).textContent =
                        "adicionar foto";

                }

            }
        );

    } catch (error) {

        console.error(
            "Erro ao renderizar evolução:",
            error
        );

    }

}


/* =========================================================
   ÁLBUNS
========================================================= */

async function getAlbums() {

    const { data, error } =
        await supabaseClient
            .from("albums")
            .select("*")
            .order(
                "created_at",
                {
                    ascending: false
                }
            );

    if (error) {
        console.error(
            "Erro ao carregar álbuns:",
            error
        );
        return [];
    }

    return data || [];
}

async function getAlbum(id) {

    const { data, error } =
        await supabaseClient
            .from("albums")
            .select("*")
            .eq("id", id)
            .single();

    if (error) {
        console.error(
            "Erro ao carregar álbum:",
            error
        );
        return null;
    }

    return data;
}

async function getAlbumPhotos(albumId) {

    const { data, error } =
        await supabaseClient
            .from("photos")
            .select("*")
            .eq(
                "album_id",
                albumId
            )
            .order(
                "sort_order",
                {
                    ascending: true
                }
            )
            .order(
                "created_at",
                {
                    ascending: true
                }
            );

    if (error) {
        console.error(
            "Erro ao carregar fotos:",
            error
        );
        return [];
    }

    const photos =
        data || [];

    if (!photos.length) {
        return [];
    }

    try {

        const urls =
            await getSignedUrls(
                photos.map(
                    photo =>
                        photo.storage_path
                )
            );

        return photos.map(
            function (photo, index) {
                return {
                    ...photo,
                    url: urls[index]
                };
            }
        );

    } catch (error) {

        console.error(
            "Erro ao criar URLs das fotos:",
            error
        );

        return [];
    }
}

async function deletePhotoRecord(photo) {

    if (!photo) {
        return;
    }

    await removeStorageFile(
        photo.storage_path
    );

    const { error } =
        await supabaseClient
            .from("photos")
            .delete()
            .eq(
                "id",
                photo.id
            );

    if (error) {
        throw error;
    }
}

if (createAlbumButton) {

    createAlbumButton.addEventListener(
        "click",
        function () {

            editingAlbumId = null;

            albumModalTitle.textContent =
                "Criar álbum";

            albumForm.reset();

            albumModal.classList.remove(
                "hidden"
            );

        }
    );

}

if (closeAlbumModal) {

    closeAlbumModal.addEventListener(
        "click",
        closeAlbumModalFunction
    );

}

function closeAlbumModalFunction() {

    albumModal.classList.add(
        "hidden"
    );

    editingAlbumId = null;

}

if (albumModal) {

    albumModal
        .querySelector(".modal-bg")
        .addEventListener(
            "click",
            closeAlbumModalFunction
        );

}

if (albumForm) {

    albumForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const name =
                albumName.value.trim();

            const description =
                albumDescription.value.trim();

            if (!name) {

                showToast(
                    "Digite um nome para o álbum."
                );

                return;

            }

            try {

                if (editingAlbumId) {

                    const album =
                        await getAlbum(
                            editingAlbumId
                        );

                    if (!album) {
                        return;
                    }

                    const update = {
                        name,
                        description,
                        updated_at:
                            new Date().toISOString()
                    };

                    let oldCoverPath =
                        album.cover_path;

                    if (albumCover.files[0]) {

                        const photo =
                            await compressImage(
                                albumCover.files[0],
                                1400,
                                .78
                            );

                        const path =
                            `albums/${album.id}/cover-${crypto.randomUUID()}.jpg`;

                        await uploadDataUrl(
                            photo,
                            path
                        );

                        update.cover_path =
                            path;

                        if (oldCoverPath) {
                            await removeStorageFile(
                                oldCoverPath
                            );
                        }
                    }

                    const { error } =
                        await supabaseClient
                            .from("albums")
                            .update(update)
                            .eq(
                                "id",
                                album.id
                            );

                    if (error) {
                        throw error;
                    }

                } else {

                    const { data: album, error } =
                        await supabaseClient
                            .from("albums")
                            .insert({
                                name,
                                description,
                                created_by:
                                    currentUser?.id || null
                            })
                            .select()
                            .single();

                    if (error) {
                        throw error;
                    }

                    if (albumCover.files[0]) {

                        const photo =
                            await compressImage(
                                albumCover.files[0],
                                1400,
                                .78
                            );

                        const path =
                            `albums/${album.id}/cover-${crypto.randomUUID()}.jpg`;

                        await uploadDataUrl(
                            photo,
                            path
                        );

                        const { error: coverError } =
                            await supabaseClient
                                .from("albums")
                                .update({
                                    cover_path:
                                        path
                                })
                                .eq(
                                    "id",
                                    album.id
                                );

                        if (coverError) {
                            await removeStorageFile(
                                path
                            );
                            throw coverError;
                        }
                    }
                }

                closeAlbumModalFunction();

                await renderAlbums();

                showToast(
                    editingAlbumId
                        ? "Álbum atualizado ❤️"
                        : "Álbum criado ❤️"
                );

            } catch (error) {

                console.error(
                    "Erro ao salvar álbum:",
                    error
                );

                showToast(
                    "Não foi possível salvar o álbum."
                );

            }

        }
    );

}

async function renderAlbums() {

    if (!albumsView) {
        return;
    }

    albumsView.innerHTML = "";

    try {

        const albums =
            await getAlbums();

        if (!albums.length) {

            albumsView.innerHTML = `

                <div class="empty-state">

                    <p>
                        Crie o primeiro álbum
                        da nossa história.
                    </p>

                </div>

            `;

            return;
        }

        const { data: allPhotos, error } =
            await supabaseClient
                .from("photos")
                .select(
                    "id, album_id, storage_path, sort_order, created_at"
                )
                .order(
                    "sort_order",
                    {
                        ascending: true
                    }
                )
                .order(
                    "created_at",
                    {
                        ascending: true
                    }
                );

        if (error) {
            throw error;
        }

        const photos =
            allPhotos || [];

        const coverPaths =
            albums
                .map(
                    album =>
                        album.cover_path
                )
                .filter(Boolean);

        const fallbackPaths =
            albums
                .filter(
                    album =>
                        !album.cover_path
                )
                .map(
                    album =>
                        photos.find(
                            photo =>
                                photo.album_id ===
                                album.id
                        )?.storage_path
                )
                .filter(Boolean);

        const urls =
            await getSignedUrls(
                coverPaths.concat(
                    fallbackPaths
                )
            );

        const urlByPath =
            {};

        coverPaths.concat(
            fallbackPaths
        ).forEach(
            function (path, index) {
                urlByPath[path] =
                    urls[index];
            }
        );

        for (const album of albums) {

            const albumPhotos =
                photos.filter(
                    photo =>
                        photo.album_id ===
                        album.id
                );

            const coverPath =
                album.cover_path ||
                albumPhotos[0]?.storage_path;

            const coverUrl =
                coverPath
                    ? urlByPath[coverPath]
                    : "";

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "album-card";

            card.dataset.id =
                album.id;

            card.innerHTML = `

                <div class="album-cover">

                    ${
                        coverUrl

                            ? `

                                <img
                                    src="${coverUrl}"
                                    alt="${escapeHTML(
                                        album.name
                                    )}"
                                >

                            `

                            : `

                                <div class="album-empty">

                                    <span>♥</span>

                                </div>

                            `
                    }

                </div>

                <div class="album-info">

                    <small>
                        ${albumPhotos.length}
                        ${albumPhotos.length === 1 ? "foto" : "fotos"}
                    </small>

                    <h3>
                        ${escapeHTML(
                            album.name
                        )}
                    </h3>

                    <p>
                        ${escapeHTML(
                            album.description ||
                            "Uma coleção de lembranças."
                        )}
                    </p>

                </div>

            `;

            card.addEventListener(
                "click",
                function () {

                    openAlbum(
                        album.id
                    );

                }
            );

            albumsView.appendChild(
                card
            );

        }

    } catch (error) {

        console.error(
            "Erro ao renderizar álbuns:",
            error
        );

        albumsView.innerHTML = `

            <div class="empty-state">

                <p>
                    Não foi possível carregar
                    nossos álbuns agora.
                </p>

            </div>

        `;

    }

}

async function openAlbum(id) {

    currentAlbumId =
        id;

    const album =
        await getAlbum(id);

    if (!album) {
        return;
    }

    albumsView.classList.add(
        "hidden"
    );

    albumDetail.classList.remove(
        "hidden"
    );

    albumDetailTitle.textContent =
        album.name;

    albumDetailDescription.textContent =
        album.description ||
        "Uma coleção de lembranças da nossa história.";

    await renderAlbumPhotos();

}

if (backAlbumsButton) {

    backAlbumsButton.addEventListener(
        "click",
        async function () {

            currentAlbumId =
                null;

            albumDetail.classList.add(
                "hidden"
            );

            albumsView.classList.remove(
                "hidden"
            );

            await renderAlbums();

        }
    );

}

if (addPhotosButton) {

    addPhotosButton.addEventListener(
        "click",
        function () {

            if (!currentAlbumId) {
                return;
            }

            photosForm.reset();

            photosModal.classList.remove(
                "hidden"
            );

        }
    );

}

if (closePhotosModal) {

    closePhotosModal.addEventListener(
        "click",
        function () {

            photosModal.classList.add(
                "hidden"
            );

        }
    );

}

if (photosModal) {

    photosModal
        .querySelector(".modal-bg")
        .addEventListener(
            "click",
            function () {

                photosModal.classList.add(
                    "hidden"
                );

            }
        );

}

if (photosForm) {

    photosForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const files =
                Array.from(
                    albumPhotos.files
                );

            if (!files.length) {

                showToast(
                    "Escolha pelo menos uma foto."
                );

                return;

            }

            if (!currentAlbumId) {
                return;
            }

            try {

                const startOrderResult =
                    await supabaseClient
                        .from("photos")
                        .select(
                            "sort_order",
                            {
                                count: "exact",
                                head: false
                            }
                        )
                        .eq(
                            "album_id",
                            currentAlbumId
                        )
                        .order(
                            "sort_order",
                            {
                                ascending: false
                            }
                        )
                        .limit(1);

                const lastOrder =
                    startOrderResult.data?.[0]?.sort_order ||
                    0;

                for (
                    let index = 0;
                    index < files.length;
                    index++
                ) {

                    const file =
                        files[index];

                    const data =
                        await compressImage(
                            file,
                            1600,
                            .78
                        );

                    const photoId =
                        crypto.randomUUID();

                    const path =
                        `albums/${currentAlbumId}/${photoId}.jpg`;

                    await uploadDataUrl(
                        data,
                        path
                    );

                    const { error } =
                        await supabaseClient
                            .from("photos")
                            .insert({
                                id: photoId,
                                album_id:
                                    currentAlbumId,
                                storage_path:
                                    path,
                                file_name:
                                    file.name,
                                sort_order:
                                    lastOrder + index + 1,
                                created_by:
                                    currentUser?.id || null
                            });

                    if (error) {
                        await removeStorageFile(
                            path
                        );
                        throw error;
                    }
                }

                photosModal.classList.add(
                    "hidden"
                );

                await renderAlbumPhotos();
                await renderAlbums();

                showToast(
                    `${files.length} foto(s) adicionada(s) ❤️`
                );

            } catch (error) {

                console.error(
                    "Erro ao adicionar fotos:",
                    error
                );

                showToast(
                    "Não foi possível adicionar as fotos."
                );

            }

        }
    );

}

async function renderAlbumPhotos() {

    if (!currentAlbumId) {
        return;
    }

    const photos =
        await getAlbumPhotos(
            currentAlbumId
        );

    albumPhotoGrid.innerHTML = "";

    albumDetailCount.textContent =
        `${photos.length} ${
            photos.length === 1
                ? "foto"
                : "fotos"
        }`;

    if (!photos.length) {

        albumPhotoGrid.innerHTML = `

            <div class="empty-state">

                <p>
                    Esse álbum ainda está esperando
                    nossas lembranças.
                </p>

            </div>

        `;

        return;
    }

    photos.forEach(
        function (photo, index) {

            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "album-photo";

            element.innerHTML = `

                <img
                    src="${photo.url}"
                    alt="Foto do nosso álbum"
                >

                <button
                    type="button"
                    class="photo-delete"
                    data-photo-id="${photo.id}"
                    aria-label="Excluir foto"
                >
                    ×
                </button>

            `;

            element
                .querySelector("img")
                .addEventListener(
                    "click",
                    function () {

                        openLightbox(
                            photos,
                            index
                        );

                    }
                );

            element
                .querySelector(".photo-delete")
                .addEventListener(
                    "click",
                    async function (event) {

                        event.stopPropagation();

                        if (
                            !confirm(
                                "Excluir esta foto?"
                            )
                        ) {
                            return;
                        }

                        try {

                            await deletePhotoRecord(
                                photo
                            );

                            await renderAlbumPhotos();
                            await renderAlbums();

                            showToast(
                                "Foto excluída."
                            );

                        } catch (error) {

                            console.error(
                                "Erro ao excluir foto:",
                                error
                            );

                            showToast(
                                "Não foi possível excluir a foto."
                            );

                        }

                    }
                );

            albumPhotoGrid.appendChild(
                element
            );

        }
    );

}

if (editAlbumButton) {

    editAlbumButton.addEventListener(
        "click",
        async function () {

            const album =
                await getAlbum(
                    currentAlbumId
                );

            if (!album) {
                return;
            }

            editingAlbumId =
                album.id;

            albumModalTitle.textContent =
                "Editar álbum";

            albumName.value =
                album.name;

            albumDescription.value =
                album.description ||
                "";

            albumCover.value =
                "";

            albumModal.classList.remove(
                "hidden"
            );

        }
    );

}

if (deleteAlbumButton) {

    deleteAlbumButton.addEventListener(
        "click",
        async function () {

            if (!currentAlbumId) {
                return;
            }

            const album =
                await getAlbum(
                    currentAlbumId
                );

            if (!album) {
                return;
            }

            if (
                !confirm(
                    `Excluir o álbum "${album.name}" e todas as fotos dele?`
                )
            ) {
                return;
            }

            try {

                const photos =
                    await getAlbumPhotos(
                        album.id
                    );

                for (
                    const photo
                    of photos
                ) {
                    await removeStorageFile(
                        photo.storage_path
                    );
                }

                if (album.cover_path) {
                    await removeStorageFile(
                        album.cover_path
                    );
                }

                const { error } =
                    await supabaseClient
                        .from("albums")
                        .delete()
                        .eq(
                            "id",
                            album.id
                        );

                if (error) {
                    throw error;
                }

                currentAlbumId =
                    null;

                albumDetail.classList.add(
                    "hidden"
                );

                albumsView.classList.remove(
                    "hidden"
                );

                await renderAlbums();

                showToast(
                    "Álbum excluído."
                );

            } catch (error) {

                console.error(
                    "Erro ao excluir álbum:",
                    error
                );

                showToast(
                    "Não foi possível excluir o álbum."
                );

            }

        }
    );

}


/* =========================================================
   FIM DOS ÁLBUNS
=========================================================

/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(
    photos,
    index
) {

    currentLightboxPhotos =
        photos;

    currentLightboxIndex =
        index;


    updateLightbox();


    lightbox.classList.remove(
        "hidden"
    );

}


function updateLightbox() {

    if (
        !currentLightboxPhotos.length
    ) {
        return;
    }


    const photo =
        currentLightboxPhotos[
            currentLightboxIndex
        ];


    lightboxImage.src =
        photo.url || photo.data;


    lightboxCounter.textContent =
        `${currentLightboxIndex + 1} / ${
            currentLightboxPhotos.length
        }`;

}


function closeLightboxFunction() {

    lightbox.classList.add(
        "hidden"
    );

}


if (closeLightbox) {

    closeLightbox.addEventListener(
        "click",
        closeLightboxFunction
    );

}


if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                lightbox
            ) {

                closeLightboxFunction();

            }

        }
    );

}


if (lightboxPrev) {

    lightboxPrev.addEventListener(
        "click",
        function () {

            currentLightboxIndex--;

            if (
                currentLightboxIndex < 0
            ) {

                currentLightboxIndex =
                    currentLightboxPhotos.length - 1;

            }


            updateLightbox();

        }
    );

}


if (lightboxNext) {

    lightboxNext.addEventListener(
        "click",
        function () {

            currentLightboxIndex++;

            if (
                currentLightboxIndex >=
                currentLightboxPhotos.length
            ) {

                currentLightboxIndex = 0;

            }


            updateLightbox();

        }
    );

}


/* TECLADO */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            lightbox.classList.contains(
                "hidden"
            )
        ) {
            return;
        }


        if (
            event.key === "Escape"
        ) {

            closeLightboxFunction();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            lightboxPrev.click();

        }


        if (
            event.key === "ArrowRight"
        ) {

            lightboxNext.click();

        }

    }
);


/* =========================================================
   DATAS
========================================================= */

async function getDates() {

    const { data, error } =
        await supabaseClient
            .from("special_dates")
            .select("*")
            .order(
                "event_date",
                {
                    ascending: false
                }
            );

    if (error) {
        console.error(
            "Erro ao carregar datas:",
            error
        );
        return [];
    }

    return data || [];
}

if (addDateButton) {

    addDateButton.addEventListener(
        "click",
        async function () {

            const title =
                prompt(
                    "Qual é o nome desta data?"
                );

            if (!title) {
                return;
            }

            const date =
                prompt(
                    "Digite a data no formato DD/MM/AAAA:"
                );

            if (!date) {
                return;
            }

            const parts =
                date.split("/");

            if (
                parts.length !== 3 ||
                parts[0].length !== 2 ||
                parts[1].length !== 2 ||
                parts[2].length !== 4
            ) {
                showToast(
                    "Use o formato DD/MM/AAAA."
                );
                return;
            }

            const description =
                prompt(
                    "Quer adicionar uma pequena descrição?"
                ) || "";

            const eventDate =
                `${parts[2]}-${parts[1]}-${parts[0]}`;

            const { error } =
                await supabaseClient
                    .from("special_dates")
                    .insert({
                        title,
                        event_date:
                            eventDate,
                        description,
                        created_by:
                            currentUser?.id || null
                    });

            if (error) {

                console.error(
                    "Erro ao salvar data:",
                    error
                );

                showToast(
                    "Não foi possível salvar a data."
                );

                return;
            }

            await renderDates();

            showToast(
                "Data adicionada ❤️"
            );

        }
    );

}

async function renderDates() {

    if (!datesList) {
        return;
    }

    const dates =
        await getDates();

    datesList.innerHTML = "";

    if (!dates.length) {

        datesList.innerHTML = `

            <div class="empty-state">

                <p>
                    Ainda não adicionamos
                    nenhuma data especial.
                </p>

            </div>

        `;

        return;
    }

    dates.forEach(
        function (item) {

            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "date-item";

            const displayDate =
                item.event_date
                    ? item.event_date
                        .split("-")
                        .reverse()
                        .join("/")
                    : "";

            element.innerHTML = `

                <div class="date-day">
                    ${escapeHTML(
                        displayDate
                    )}
                </div>

                <div class="date-info">

                    <h3>
                        ${escapeHTML(
                            item.title
                        )}
                    </h3>

                    ${
                        item.description
                            ? `
                                <p>
                                    ${escapeHTML(
                                        item.description
                                    )}
                                </p>
                            `
                            : ""
                    }

                </div>

                <button
                    class="date-delete"
                    data-id="${item.id}"
                    type="button"
                >
                    excluir
                </button>

            `;

            datesList.appendChild(
                element
            );

        }
    );

}

if (datesList) {

    datesList.addEventListener(
        "click",
        async function (event) {

            const button =
                event.target.closest(
                    ".date-delete"
                );

            if (!button) {
                return;
            }

            const id =
                button.dataset.id;

            if (
                !confirm(
                    "Excluir esta data?"
                )
            ) {
                return;
            }

            const { error } =
                await supabaseClient
                    .from("special_dates")
                    .delete()
                    .eq(
                        "id",
                        id
                    );

            if (error) {

                console.error(
                    "Erro ao excluir data:",
                    error
                );

                showToast(
                    "Não foi possível excluir a data."
                );

                return;
            }

            await renderDates();

            showToast(
                "Data excluída."
            );

        }
    );

}


/* =========================================================
   CARTAS
========================================================= */

async function getLetters() {

    const { data, error } =
        await supabaseClient
            .from("letters")
            .select("*")
            .order(
                "created_at",
                {
                    ascending: false
                }
            );

    if (error) {
        console.error(
            "Erro ao carregar cartas:",
            error
        );
        return [];
    }

    return data || [];
}

if (addLetterButton) {

    addLetterButton.addEventListener(
        "click",
        async function () {

            const title =
                prompt(
                    "Qual será o título da carta?"
                );

            if (!title) {
                return;
            }

            const text =
                prompt(
                    "Escreva sua carta:"
                );

            if (!text) {
                return;
            }

            const { error } =
                await supabaseClient
                    .from("letters")
                    .insert({
                        title,
                        content:
                            text,
                        created_by:
                            currentUser?.id || null
                    });

            if (error) {

                console.error(
                    "Erro ao salvar carta:",
                    error
                );

                showToast(
                    "Não foi possível guardar a carta."
                );

                return;
            }

            await renderLetters();

            showToast(
                "Carta guardada ❤️"
            );

        }
    );

}

async function renderLetters() {

    if (!lettersList) {
        return;
    }

    const letters =
        await getLetters();

    lettersList.innerHTML = "";

    if (!letters.length) {

        lettersList.innerHTML = `

            <div class="empty-state">

                <p>
                    Ainda não existem cartas.
                </p>

            </div>

        `;

        return;
    }

    letters.forEach(
        function (letter) {

            const element =
                document.createElement(
                    "article"
                );

            element.className =
                "letter-card";

            element.innerHTML = `

                <div
                    class="letter-card-date"
                >
                    ${formatDateTime(
                        letter.created_at
                    )}
                </div>

                <h3>
                    ${escapeHTML(
                        letter.title
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        letter.content
                    )}
                </p>

                <div
                    class="letter-actions"
                >

                    <button
                        type="button"
                        data-id="${letter.id}"
                    >
                        excluir
                    </button>

                </div>

            `;

            lettersList.appendChild(
                element
            );

        }
    );

}

if (lettersList) {

    lettersList.addEventListener(
        "click",
        async function (event) {

            const button =
                event.target.closest(
                    ".letter-actions button"
                );

            if (!button) {
                return;
            }

            const id =
                button.dataset.id;

            if (
                !confirm(
                    "Excluir esta carta?"
                )
            ) {
                return;
            }

            const { error } =
                await supabaseClient
                    .from("letters")
                    .delete()
                    .eq(
                        "id",
                        id
                    );

            if (error) {

                console.error(
                    "Erro ao excluir carta:",
                    error
                );

                showToast(
                    "Não foi possível excluir a carta."
                );

                return;
            }

            await renderLetters();

            showToast(
                "Carta excluída."
            );

        }
    );

}


/* =========================================================
   UTILIDADES
========================================================= */

function formatDate(
    date
) {

    if (!date) {
        return "";
    }


    const parts =
        date.split("/");


    if (
        parts.length === 3
    ) {

        return date;

    }


    return date;

}


function formatDateTime(
    dateString
) {

    if (!dateString) {
        return "";
    }


    const date =
        new Date(
            dateString
        );


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return "";

    }


    return date.toLocaleDateString(
        "pt-BR"
    );

}


function escapeHTML(
    value
) {

    return String(
        value || ""
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


function showToast(
    message
) {

    if (!toast) {
        return;
    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2600
        );

}


/* =========================================================
   RECUPERAR SESSÃO
========================================================= */

/*
   O Supabase mantém a sessão automaticamente.
   A senha nunca é salva no navegador.
*/

supabaseClient.auth.getSession()
    .then(
        async function ({ data }) {

            const session =
                data && data.session;

            if (!session || !session.user) {
                return;
            }

            const email =
                (session.user.email || "")
                    .toLowerCase();

            const username =
                email === "amanda@nois-dois.com"
                    ? "amanda"
                    : email === "caua@nois-dois.com"
                        ? "caua"
                        : null;

            if (!username || !USERS[username]) {
                return;
            }

            currentUser = {
                ...USERS[username],
                id: session.user.id
            };

            localStorage.setItem(
                "coupleCurrentUser",
                username
            );

            const quizAlreadyCompleted =
                localStorage.getItem(
                    `quizCompleted_${username}`
                ) === "true";

            if (
                !currentUser.requiresQuiz ||
                quizAlreadyCompleted
            ) {
                openMainSite();
            }

        }
    )
    .catch(
        function (error) {
            console.error(
                "Erro ao recuperar sessão:",
                error
            );
        }
    );