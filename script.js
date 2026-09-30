/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const RELATIONSHIP_START =
    new Date(2023, 0, 17, 0, 0, 0);


/* =========================================================
   USUÁRIOS
========================================================= */

const USERS = {

    amanda: {
        name: "Amanda",
        password: "170123",
        requiresQuiz: true
    },

    caua: {
        name: "Cauã",
        password: "123456",
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
        function (event) {

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

            if (
                !user ||
                user.password !== password
            ) {

                loginError.textContent =
                    "Nome ou senha incorretos.";

                return false;
            }

            loginError.textContent = "";

            currentUser = user;

            localStorage.setItem(
                "coupleCurrentUser",
                username
            );

            const quizAlreadyCompleted =
                localStorage.getItem(
                    "quizCompleted"
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
    quizNext.addEventListener("click", function () {
        if (!selectedQuizAnswer) {
            showToast("Escolha uma resposta primeiro. ❤️");
            return;
        }

        if (currentQuizQuestion < quizQuestions.length - 1) {
            currentQuizQuestion++;
            renderQuizQuestion();
            return;
        }

        finishQuiz();
    });
}

function finishQuiz() {
    localStorage.setItem("quizCompleted", "true");

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

function openMainSite() {

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
        renderEvolution();
        renderAlbums();
        renderDates();
        renderLetters();
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
   EVOLUÇÃO
========================================================= */

const evolutionDefaults = {

    beginning: {

        title: "O começo",

        description:
            "Onde tudo nasceu."

    },

    middle: {

        title: "No meio",

        description:
            "Tudo que construímos."

    },

    current: {

        title: "Atualmente",

        description:
            "Nós dois, hoje."

    }

};


function getEvolution() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "coupleEvolution"
            )
        ) || {};

    } catch {

        return {};

    }

}


function saveEvolution(
    data
) {

    localStorage.setItem(
        "coupleEvolution",
        JSON.stringify(data)
    );

}


function openEvolution(
    type
) {

    currentEvolutionType =
        type;


    const data =
        getEvolution()[type];


    evolutionModalTitle.textContent =
        `Foto — ${evolutionDefaults[type].title}`;


    evolutionDescription.value =
        data?.description || "";


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


                const data =
                    getEvolution();


                data[currentEvolutionType] = {

                    photo,

                    description:
                        evolutionDescription
                            .value
                            .trim()

                };


                saveEvolution(data);


                evolutionModal.classList.add(
                    "hidden"
                );


                renderEvolution();


                showToast(
                    "Foto guardada ❤️"
                );

            } catch {

                showToast(
                    "Não foi possível carregar a foto."
                );

            }

        }
    );

}


function renderEvolution() {

    const data =
        getEvolution();


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


            if (saved?.photo) {

                image.innerHTML = `

                    <img
                        src="${saved.photo}"
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

            }

        }
    );

}


/* =========================================================
   ÁLBUNS — INDEXED DB
========================================================= */

const DB_NAME =
    "NosDoisAlbumDB";

const DB_VERSION = 1;

const STORE =
    "albumPhotos";

let dbPromise;


function openDatabase() {

    if (dbPromise) {
        return dbPromise;
    }


    dbPromise =
        new Promise(
            function (resolve, reject) {

                const request =
                    indexedDB.open(
                        DB_NAME,
                        DB_VERSION
                    );


                request.onupgradeneeded =
                    function () {

                        const db =
                            request.result;


                        if (
                            !db.objectStoreNames
                                .contains(
                                    STORE
                                )
                        ) {

                            db.createObjectStore(
                                STORE,
                                {
                                    keyPath:
                                        "id"
                                }
                            );

                        }

                    };


                request.onsuccess =
                    function () {

                        resolve(
                            request.result
                        );

                    };


                request.onerror =
                    function () {

                        reject(
                            request.error
                        );

                    };

            }
        );


    return dbPromise;

}


async function dbPut(
    item
) {

    const db =
        await openDatabase();


    return new Promise(
        function (resolve, reject) {

            const transaction =
                db.transaction(
                    STORE,
                    "readwrite"
                );


            transaction
                .objectStore(STORE)
                .put(item);


            transaction.oncomplete =
                () => resolve();


            transaction.onerror =
                () =>
                    reject(
                        transaction.error
                    );

        }
    );

}


async function dbGetAll() {

    const db =
        await openDatabase();


    return new Promise(
        function (resolve, reject) {

            const request =
                db.transaction(
                    STORE,
                    "readonly"
                )
                .objectStore(
                    STORE
                )
                .getAll();


            request.onsuccess =
                () =>
                    resolve(
                        request.result
                    );


            request.onerror =
                () =>
                    reject(
                        request.error
                    );

        }
    );

}


async function dbDelete(
    id
) {

    const db =
        await openDatabase();


    return new Promise(
        function (resolve, reject) {

            const transaction =
                db.transaction(
                    STORE,
                    "readwrite"
                );


            transaction
                .objectStore(STORE)
                .delete(id);


            transaction.oncomplete =
                () => resolve();


            transaction.onerror =
                () =>
                    reject(
                        transaction.error
                    );

        }
    );

}


async function dbDeleteAlbum(
    albumId
) {

    const photos =
        await dbGetAll();


    const related =
        photos.filter(
            photo =>
                photo.albumId ===
                albumId
        );


    for (
        const photo
        of related
    ) {

        await dbDelete(
            photo.id
        );

    }

}


/* =========================================================
   METADADOS DOS ÁLBUNS
========================================================= */

function getAlbums() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "coupleAlbums"
            )
        ) || [];

    } catch {

        return [];

    }

}


function saveAlbums(
    albums
) {

    localStorage.setItem(
        "coupleAlbums",
        JSON.stringify(
            albums
        )
    );

}


function getAlbum(
    id
) {

    return getAlbums()
        .find(
            album =>
                album.id === id
        );

}


/* =========================================================
   CRIAR ÁLBUM
========================================================= */

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


            const albums =
                getAlbums();


            if (editingAlbumId) {

                const album =
                    albums.find(
                        item =>
                            item.id ===
                            editingAlbumId
                    );


                if (!album) {
                    return;
                }


                album.name =
                    name;

                album.description =
                    description;


                if (
                    albumCover.files[0]
                ) {

                    const photo =
                        await compressImage(
                            albumCover.files[0],
                            1400,
                            .78
                        );


                    const existing =
                        (
                            await dbGetAll()
                        ).find(
                            item =>
                                item.albumId ===
                                album.id &&
                                item.isCover
                        );


                    if (existing) {

                        existing.data =
                            photo;

                        await dbPut(
                            existing
                        );

                    } else {

                        await dbPut({

                            id:
                                crypto.randomUUID(),

                            albumId:
                                album.id,

                            data:
                                photo,

                            isCover:
                                true

                        });

                    }

                }


            } else {

                const id =
                    crypto.randomUUID();


                const album = {

                    id,

                    name,

                    description,

                    createdAt:
                        new Date()
                            .toISOString()

                };


                albums.push(
                    album
                );


                if (
                    albumCover.files[0]
                ) {

                    const photo =
                        await compressImage(
                            albumCover.files[0],
                            1400,
                            .78
                        );


                    await dbPut({

                        id:
                            crypto.randomUUID(),

                        albumId:
                            id,

                        data:
                            photo,

                        isCover:
                            true

                    });

                }

            }


            saveAlbums(
                albums
            );


            closeAlbumModalFunction();

            renderAlbums();


            showToast(
                editingAlbumId
                    ? "Álbum atualizado ❤️"
                    : "Álbum criado ❤️"
            );

        }
    );

}


/* =========================================================
   RENDER ÁLBUNS
========================================================= */

async function renderAlbums() {

    if (!albumsView) {
        return;
    }


    albumsView.innerHTML = "";


    const albums =
        getAlbums();


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


    const photos =
        await dbGetAll();


    for (
        const album
        of albums
    ) {

        const albumPhotos =
            photos.filter(
                photo =>
                    photo.albumId ===
                    album.id
            );


        const cover =
            albumPhotos.find(
                photo =>
                    photo.isCover
            ) ||
            albumPhotos[0];


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
                    cover

                        ? `

                            <img
                                src="${cover.data}"
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

}


/* =========================================================
   ABRIR ÁLBUM
========================================================= */

async function openAlbum(
    id
) {

    currentAlbumId =
        id;


    const album =
        getAlbum(id);


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
        function () {

            currentAlbumId =
                null;

            albumDetail.classList.add(
                "hidden"
            );

            albumsView.classList.remove(
                "hidden"
            );

            renderAlbums();

        }
    );

}


/* =========================================================
   ADICIONAR FOTOS
========================================================= */

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


            try {

                for (
                    const file
                    of files
                ) {

                    const data =
                        await compressImage(
                            file,
                            1600,
                            .78
                        );


                    await dbPut({

                        id:
                            crypto.randomUUID(),

                        albumId:
                            currentAlbumId,

                        data,

                        isCover:
                            false

                    });

                }


                photosModal.classList.add(
                    "hidden"
                );


                await renderAlbumPhotos();

                await renderAlbums();


                showToast(
                    `${files.length} foto(s) adicionada(s) ❤️`
                );

            } catch {

                showToast(
                    "Não foi possível adicionar as fotos."
                );

            }

        }
    );

}


/* =========================================================
   RENDER FOTOS DO ÁLBUM
========================================================= */

async function renderAlbumPhotos() {

    if (!currentAlbumId) {
        return;
    }


    const photos =
        (
            await dbGetAll()
        )
        .filter(
            photo =>
                photo.albumId ===
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
                    src="${photo.data}"
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


                        await dbDelete(
                            photo.id
                        );


                        await renderAlbumPhotos();

                        await renderAlbums();


                        showToast(
                            "Foto excluída."
                        );

                    }
                );


            albumPhotoGrid.appendChild(
                element
            );

        }
    );

}


/* =========================================================
   EDITAR ÁLBUM
========================================================= */

if (editAlbumButton) {

    editAlbumButton.addEventListener(
        "click",
        function () {

            const album =
                getAlbum(
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


/* =========================================================
   EXCLUIR ÁLBUM
========================================================= */

if (deleteAlbumButton) {

    deleteAlbumButton.addEventListener(
        "click",
        async function () {

            if (!currentAlbumId) {
                return;
            }


            const album =
                getAlbum(
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


            await dbDeleteAlbum(
                album.id
            );


            const albums =
                getAlbums().filter(
                    item =>
                        item.id !==
                        album.id
                );


            saveAlbums(
                albums
            );


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

        }
    );

}


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
        photo.data;


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

function getDates() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "coupleDates"
            )
        ) || [];

    } catch {

        return [];

    }

}


function saveDates(
    dates
) {

    localStorage.setItem(
        "coupleDates",
        JSON.stringify(
            dates
        )
    );

}


if (addDateButton) {

    addDateButton.addEventListener(
        "click",
        function () {

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


            const description =
                prompt(
                    "Quer adicionar uma pequena descrição?"
                ) || "";


            const dates =
                getDates();


            dates.push({

                id:
                    Date.now(),

                title,

                date,

                description

            });


            saveDates(
                dates
            );


            renderDates();


            showToast(
                "Data adicionada ❤️"
            );

        }
    );

}


function renderDates() {

    if (!datesList) {
        return;
    }


    const dates =
        getDates();


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


    dates
        .slice()
        .reverse()
        .forEach(
            function (item) {

                const element =
                    document.createElement(
                        "div"
                    );


                element.className =
                    "date-item";


                element.innerHTML = `

                    <div class="date-day">
                        ${escapeHTML(
                            item.date
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
        function (event) {

            const button =
                event.target.closest(
                    ".date-delete"
                );


            if (!button) {
                return;
            }


            const id =
                Number(
                    button.dataset.id
                );


            if (
                !confirm(
                    "Excluir esta data?"
                )
            ) {
                return;
            }


            saveDates(
                getDates().filter(
                    item =>
                        item.id !== id
                )
            );


            renderDates();

            showToast(
                "Data excluída."
            );

        }
    );

}


/* =========================================================
   CARTAS
========================================================= */

function getLetters() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "coupleLetters"
            )
        ) || [];

    } catch {

        return [];

    }

}


function saveLetters(
    letters
) {

    localStorage.setItem(
        "coupleLetters",
        JSON.stringify(
            letters
        )
    );

}


if (addLetterButton) {

    addLetterButton.addEventListener(
        "click",
        function () {

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


            const letters =
                getLetters();


            letters.push({

                id:
                    Date.now(),

                title,

                text,

                date:
                    new Date()
                        .toISOString()

            });


            saveLetters(
                letters
            );


            renderLetters();


            showToast(
                "Carta guardada ❤️"
            );

        }
    );

}


function renderLetters() {

    if (!lettersList) {
        return;
    }


    const letters =
        getLetters();


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


    letters
        .slice()
        .reverse()
        .forEach(
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
                            letter.date
                        )}
                    </div>


                    <h3>
                        ${escapeHTML(
                            letter.title
                        )}
                    </h3>


                    <p>
                        ${escapeHTML(
                            letter.text
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
        function (event) {

            const button =
                event.target.closest(
                    ".letter-actions button"
                );


            if (!button) {
                return;
            }


            const id =
                Number(
                    button.dataset.id
                );


            if (
                !confirm(
                    "Excluir esta carta?"
                )
            ) {
                return;
            }


            saveLetters(
                getLetters().filter(
                    letter =>
                        letter.id !== id
                )
            );


            renderLetters();


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
   MIGRAÇÃO DOS MOMENTOS ANTIGOS
========================================================= */

/*
   Se você já tinha momentos na versão anterior,
   eles não são apagados.

   Na primeira execução desta versão,
   eles são transformados em um álbum chamado
   "Momentos antigos".
*/

async function migrateOldMemories() {

    const alreadyMigrated =
        localStorage.getItem(
            "oldMemoriesMigrated"
        );


    if (alreadyMigrated === "true") {
        return;
    }


    let oldMemories = [];


    try {

        oldMemories =
            JSON.parse(
                localStorage.getItem(
                    "coupleMemories"
                )
            ) || [];

    } catch {

        oldMemories = [];

    }


    if (!oldMemories.length) {

        localStorage.setItem(
            "oldMemoriesMigrated",
            "true"
        );

        return;

    }


    const albums =
        getAlbums();


    const albumId =
        crypto.randomUUID();


    const album = {

        id:
            albumId,

        name:
            "Momentos antigos",

        description:
            "Lembranças que já faziam parte da nossa história.",

        createdAt:
            new Date()
                .toISOString()

    };


    albums.push(
        album
    );


    saveAlbums(
        albums
    );


    for (
        const memory
        of oldMemories
    ) {

        if (!memory.photo) {
            continue;
        }


        await dbPut({

            id:
                crypto.randomUUID(),

            albumId,

            data:
                memory.photo,

            isCover:
                false

        });

    }


    localStorage.setItem(
        "oldMemoriesMigrated",
        "true"
    );

}


migrateOldMemories()
    .then(
        function () {

            if (
                !mainSite.classList.contains(
                    "hidden"
                )
            ) {

                renderAlbums();

            }

        }
    );


/* =========================================================
   RECUPERAR SESSÃO
========================================================= */

const savedUser =
    localStorage.getItem(
        "coupleCurrentUser"
    );


if (
    savedUser &&
    USERS[savedUser]
) {

    currentUser =
        USERS[savedUser];


    if (
        !currentUser.requiresQuiz ||
        localStorage.getItem(
            "quizCompleted"
        ) === "true"
    ) {

        openMainSite();

    }

}