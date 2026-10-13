
document.addEventListener("DOMContentLoaded", () => {
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    const reducirMovimiento = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // ==========================================
    // MODO OSCURO Y CLARO
    // ==========================================

    const modoBtn = $("#modoBtn");

    function actualizarTema() {
        const claro = document.body.classList.contains("light-mode");

        modoBtn.innerHTML = claro
            ? '<i class="bi bi-moon-stars-fill"></i>'
            : '<i class="bi bi-sun-fill"></i>';

        modoBtn.setAttribute(
            "aria-label",
            claro ? "Activar modo oscuro" : "Activar modo claro"
        );
    }

    if (localStorage.getItem("ecoguardian-tema") === "claro") {
        document.body.classList.add("light-mode");
    }

    actualizarTema();

    modoBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        localStorage.setItem(
            "ecoguardian-tema",
            document.body.classList.contains("light-mode")
                ? "claro"
                : "oscuro"
        );

        actualizarTema();
    });

    // ==========================================
    // NAVBAR AL DESPLAZARSE
    // ==========================================

    const navbar = $("#navbar");

    function actualizarNavbar() {
        navbar.classList.toggle("scrolled", window.scrollY > 30);
    }

    window.addEventListener("scroll", actualizarNavbar, {
        passive: true
    });

    actualizarNavbar();

    $$(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            $$(".nav-link").forEach((item) =>
                item.classList.remove("active")
            );

            link.classList.add("active");
        });
    });

    // ==========================================
    // PARTÍCULAS ANIMADAS EN CANVAS
    // ==========================================

    const canvas = $("#particleCanvas");
    const ctx = canvas.getContext("2d");
    let particulas = [];
    let ancho = window.innerWidth;
    let alto = window.innerHeight;
    let animacionCanvas;

    function ajustarCanvas() {
        ancho = window.innerWidth;
        alto = window.innerHeight;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = ancho * dpr;
        canvas.height = alto * dpr;
        canvas.style.width = `${ancho}px`;
        canvas.style.height = `${alto}px`;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        crearParticulas();
    }

    function crearParticulas() {
        const cantidad = reducirMovimiento
            ? 0
            : Math.min(70, Math.floor(ancho / 18));

        particulas = Array.from({ length: cantidad }, () => ({
            x: Math.random() * ancho,
            y: Math.random() * alto,
            radio: Math.random() * 2 + 0.5,
            velocidad: Math.random() * 0.35 + 0.08,
            opacidad: Math.random() * 0.5 + 0.15,
            fase: Math.random() * Math.PI * 2
        }));
    }

    function dibujarParticulas() {
        ctx.clearRect(0, 0, ancho, alto);

        particulas.forEach((p) => {
            p.y -= p.velocidad;
            p.fase += 0.015;
            p.x += Math.sin(p.fase) * 0.25;

            if (p.y < -5) {
                p.y = alto + 5;
                p.x = Math.random() * ancho;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radio, 0, Math.PI * 2);

            const colores = [
                [84, 232, 224],   // Turquesa
                [169, 154, 255],  // Violeta
                [255, 157, 178],  // Coral
                [255, 207, 121]   // Dorado
            ];

            const color = colores[
                Math.floor((p.x / Math.max(ancho, 1)) * colores.length)
                % colores.length
            ];

ctx.fillStyle =
    `rgba(${color.join(", ")}, ${p.opacidad})`;

ctx.shadowColor = `rgb(${color.join(", ")})`;

            ctx.shadowBlur = 8;
            ctx.shadowColor = "#72f5a1";
            ctx.fill();
        });

        ctx.shadowBlur = 0;

        if (!reducirMovimiento && !document.hidden) {
            animacionCanvas = requestAnimationFrame(
                dibujarParticulas
            );
        }
    }

    ajustarCanvas();
    dibujarParticulas();

    window.addEventListener("resize", ajustarCanvas);

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            cancelAnimationFrame(animacionCanvas);
        } else if (!reducirMovimiento) {
            dibujarParticulas();
        }
    });

    // ==========================================
    // HOJAS Y FLORES FLOTANTES
    // ==========================================

    const naturaleza = $("#floatingNature");
    const simbolos = ["✦", "✧", "❋", "❧", "✿", "·"];

    if (!reducirMovimiento) {
        for (let i = 0; i < 24; i++) {
            const elemento = document.createElement("span");

            elemento.className = "nature-particle";
            elemento.textContent =
                simbolos[Math.floor(Math.random() * simbolos.length)];

            elemento.style.left = `${Math.random() * 100}%`;
            elemento.style.fontSize =
                `${Math.random() * 18 + 8}px`;

            elemento.style.animationDuration =
                `${Math.random() * 18 + 16}s`;

            elemento.style.animationDelay =
                `${Math.random() * -30}s`;

            naturaleza.appendChild(elemento);
        }
    }

    // ==========================================
    // EFECTO 3D DE LAS TARJETAS
    // ==========================================

    const tarjetas = $$(".mission-card");
    const pantallaTactil = matchMedia("(hover: none)").matches;

    if (!reducirMovimiento && !pantallaTactil) {
        tarjetas.forEach((tarjeta) => {
            tarjeta.addEventListener("pointermove", (e) => {
                const r = tarjeta.getBoundingClientRect();

                const x = e.clientX - r.left;
                const y = e.clientY - r.top;

                const centroX = r.width / 2;
                const centroY = r.height / 2;

                const giroY = ((x - centroX) / centroX) * 7;
                const giroX = ((centroY - y) / centroY) * 7;

                tarjeta.style.setProperty("--rx", `${giroX}deg`);
                tarjeta.style.setProperty("--ry", `${giroY}deg`);
                tarjeta.style.setProperty("--mx", `${x}px`);
                tarjeta.style.setProperty("--my", `${y}px`);
            });

            tarjeta.addEventListener("pointerleave", () => {
                tarjeta.style.setProperty("--rx", "0deg");
                tarjeta.style.setProperty("--ry", "0deg");
                tarjeta.style.setProperty("--mx", "50%");
                tarjeta.style.setProperty("--my", "50%");
            });
        });
    }

    // ==========================================
    // ANIMACIÓN DE ELEMENTOS AL APARECER
    // ==========================================

    const elementosReveal = $$(".reveal");

    if (reducirMovimiento) {
        elementosReveal.forEach((el) =>
            el.classList.add("visible")
        );
    } else {
        const observador = new IntersectionObserver(
            (entradas, observer) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("visible");
                        observer.unobserve(entrada.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        elementosReveal.forEach((el) => observador.observe(el));
    }

    // ==========================================
    // BANCO DE PREGUNTAS AMBIENTALES
    // Puedes ampliar las preguntas aquí.
    // ==========================================

    

    // ==========================================
    // SISTEMA DE CUESTIONARIOS
    // ==========================================

    const quizPanel = $("#quizPanel");
    const quizTitle = $("#quizTitle");
    const questionText = $("#questionText");
    const answerOptions = $("#answerOptions");
    const questionCount = $("#questionCount");
    const quizScore = $("#quizScore");
    const quizProgressBar = $("#quizProgressBar");
    const quizFeedback = $("#quizFeedback");
    const quizStreak = $("#quizStreak");
    const nextQuestion = $("#nextQuestion");
    const quizResult = $("#quizResult");

    let preguntasActuales = [];
    let indicePregunta = 0;
    let puntuacion = 0;
    let racha = 0;
    let respondida = false;
    let categoriaActual = "";

    function mezclar(lista) {
        const copia = [...lista];

        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }

        return copia;
    }

    function comenzarQuiz(categoria) {
        categoriaActual = categoria;

        preguntasActuales = categoria === "mixto"
            ? mezclar(Object.values(preguntas).flat()).slice(0, 10)
            : mezclar(preguntas[categoria] || preguntas.ambiente);

        indicePregunta = 0;
        puntuacion = 0;
        racha = 0;

        quizTitle.textContent =
            categoria === "mixto"
                ? "Desafío ambiental mixto"
                : `Misión: ${categoria.charAt(0).toUpperCase()}${categoria.slice(1)}`;

        quizPanel.hidden = false;
        quizResult.hidden = true;

        quizPanel.scrollIntoView({
            behavior: reducirMovimiento ? "auto" : "smooth",
            block: "start"
        });

        mostrarPregunta();
    }

    function mostrarPregunta() {
        const pregunta = preguntasActuales[indicePregunta];

        respondida = false;

        questionText.textContent = pregunta.p;
        questionCount.textContent =
            `Pregunta ${indicePregunta + 1} de ${preguntasActuales.length}`;

        quizScore.textContent = puntuacion;

        quizProgressBar.style.width =
            `${(indicePregunta / preguntasActuales.length) * 100}%`;

        quizFeedback.textContent = "";
        quizStreak.textContent = racha > 1
            ? `¡Racha de ${racha} respuestas correctas!`
            : "¡Demuestra lo que sabes!";

        nextQuestion.disabled = true;
        nextQuestion.innerHTML =
            indicePregunta === preguntasActuales.length - 1
                ? 'Ver resultados <i class="bi bi-trophy"></i>'
                : 'Siguiente <i class="bi bi-arrow-right"></i>';

        answerOptions.replaceChildren();

        pregunta.o.forEach((opcion, indice) => {
            const boton = document.createElement("button");

            boton.type = "button";
            boton.className = "answer-option";
            boton.textContent = opcion;

            boton.addEventListener("click", () => responder(indice));

            answerOptions.appendChild(boton);
        });
    }

    function responder(indice) {
        if (respondida) return;

        respondida = true;

        const pregunta = preguntasActuales[indicePregunta];
        const botones = answerOptions.querySelectorAll("button");

        botones.forEach((boton, i) => {
            boton.disabled = true;

            if (i === pregunta.c) {
                boton.classList.add("correct");
            } else if (i === indice) {
                boton.classList.add("incorrect");
            }
        });

        if (indice === pregunta.c) {
            puntuacion += 10;
            racha++;

            quizFeedback.textContent = "¡Correcto! Excelente trabajo.";
        } else {
            racha = 0;

            quizFeedback.textContent =
                `La respuesta correcta es: ${pregunta.o[pregunta.c]}.`;
        }

        quizScore.textContent = puntuacion;
        nextQuestion.disabled = false;
    }

    function mostrarResultados() {
        questionText.hidden = true;
        answerOptions.hidden = true;
        quizFeedback.hidden = true;
        quizProgressBar.style.width = "100%";
        nextQuestion.hidden = true;
        questionCount.textContent = "Misión completada";

        const total = preguntasActuales.length * 10;
        const porcentaje = Math.round((puntuacion / total) * 100);

        let titulo = "¡Buen comienzo!";
        let mensaje = "Sigue aprendiendo y cuidando nuestro planeta.";

        if (porcentaje >= 80) {
            titulo = "¡Guardián extraordinario!";
            mensaje = "Has demostrado grandes conocimientos ambientales.";
        } else if (porcentaje >= 60) {
            titulo = "¡Vas por buen camino!";
            mensaje = "Continúa practicando para convertirte en experto.";
        }

        quizResult.hidden = false;
        quizResult.innerHTML = `
            <div class="result-icon">
                <i class="bi bi-trophy-fill"></i>
            </div>
            <h3>${titulo}</h3>
            <p>${mensaje}</p>
            <p>Resultado: <strong>${puntuacion}</strong> de ${total} puntos
            (${porcentaje}%).</p>
            <button class="btn-primary-custom" id="retryQuiz">
                <i class="bi bi-arrow-repeat"></i> Intentar de nuevo
            </button>
        `;

        $("#retryQuiz").addEventListener("click", () => {
            comenzarQuiz(categoriaActual);
            questionText.hidden = false;
            answerOptions.hidden = false;
            quizFeedback.hidden = false;
            nextQuestion.hidden = false;
        });
    }

    $$(".start-quiz").forEach((boton) => {
        boton.addEventListener("click", () => {
            comenzarQuiz(boton.dataset.quiz);
        });
    });

    nextQuestion.addEventListener("click", () => {
        if (!respondida) return;

        if (indicePregunta < preguntasActuales.length - 1) {
            indicePregunta++;
            mostrarPregunta();
        } else {
            mostrarResultados();
        }
    });

    $("#closeQuiz").addEventListener("click", () => {
        quizPanel.hidden = true;
    });

    // Botón para volver arriba
    $("#arribaBtn").addEventListener("click", (evento) => {
        evento.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: reducirMovimiento ? "auto" : "smooth"
        });
    });
});


/* ========================================
   REVELAR ELEMENTOS AL DESPLAZARSE
======================================== */

const elementosReveal = document.querySelectorAll(
    ".mission-card, .section-title, .stat-card"
);

if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.12
    });

    elementosReveal.forEach((elemento) => {
        elemento.classList.add("reveal");
        observador.observe(elemento);
    });
}


/* ========================================
   CURSOR PERSONALIZADO ECOGUARDIAN
======================================== */

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const halo = document.createElement("div");
    halo.className = "cursor-halo";
    document.body.appendChild(halo);

    let ultimoEfecto = 0;

    document.addEventListener("mousemove", (evento) => {
        halo.style.left = `${evento.clientX}px`;
        halo.style.top = `${evento.clientY}px`;

        const ahora = performance.now();

        // Limitar partículas para mantener un buen rendimiento
        if (ahora - ultimoEfecto > 45) {
            ultimoEfecto = ahora;

            const particula = document.createElement("div");
            particula.className = "cursor-particula";
            particula.style.left = `${evento.clientX}px`;
            particula.style.top = `${evento.clientY}px`;

            document.body.appendChild(particula);
            particula.addEventListener("animationend", () => particula.remove());
        }
    });

    document.addEventListener("mousedown", (evento) => {
        halo.classList.add("cursor-activo");

        const onda = document.createElement("div");
        onda.className = "onda-cursor";
        onda.style.left = `${evento.clientX}px`;
        onda.style.top = `${evento.clientY}px`;

        document.body.appendChild(onda);
        onda.addEventListener("animationend", () => onda.remove());
    });

    document.addEventListener("mouseup", () => {
        halo.classList.remove("cursor-activo");
    });

    document.addEventListener("mouseleave", () => {
        halo.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        halo.style.opacity = "1";
    });
}


