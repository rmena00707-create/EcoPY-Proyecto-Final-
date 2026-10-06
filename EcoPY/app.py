from flask import Flask, render_template, request


app = Flask(__name__)


# =========================================================
# QUIZZES
# =========================================================

QUIZZES = {

    "medio-ambiente": {
        "nombre": "Cuidado del Medio Ambiente",
        "icono": "🌱",
        "descripcion": "Aprende cómo proteger nuestro planeta.",
        "color": "#55e68a",
        "preguntas": [

            {
                "pregunta": "¿Cuál de estas acciones ayuda más al medio ambiente?",
                "opciones": [
                    "Tirar basura en la calle",
                    "Reciclar correctamente",
                    "Dejar las luces encendidas",
                    "Desperdiciar agua"
                ],
                "respuesta": 1,
                "explicacion": (
                    "Reciclar permite aprovechar materiales y reducir "
                    "la cantidad de residuos."
                )
            },

            {
                "pregunta": "¿Qué debemos hacer con una botella de plástico vacía?",
                "opciones": [
                    "Tirarla al río",
                    "Quemarla",
                    "Colocarla en el recipiente adecuado para reciclar",
                    "Dejarla en la calle"
                ],
                "respuesta": 2,
                "explicacion": (
                    "Las botellas de plástico pueden reciclarse cuando "
                    "se depositan correctamente."
                )
            },

            {
                "pregunta": "¿Qué recurso debemos evitar desperdiciar?",
                "opciones": [
                    "Agua",
                    "Basura",
                    "Contaminación",
                    "Humo"
                ],
                "respuesta": 0,
                "explicacion": (
                    "El agua es un recurso esencial para la vida y debemos "
                    "utilizarla responsablemente."
                )
            },

            {
                "pregunta": "¿Cuál es una buena forma de reducir la contaminación?",
                "opciones": [
                    "Usar más vehículos",
                    "Quemar basura",
                    "Usar transporte público o bicicleta",
                    "Tirar residuos al suelo"
                ],
                "respuesta": 2,
                "explicacion": (
                    "Utilizar transporte público, caminar o usar bicicleta "
                    "puede disminuir las emisiones contaminantes."
                )
            },

            {
                "pregunta": "¿Por qué son importantes los árboles?",
                "opciones": [
                    "Porque producen contaminación",
                    "Porque ayudan a absorber CO₂ y producen oxígeno",
                    "Porque generan basura",
                    "Porque desperdician agua"
                ],
                "respuesta": 1,
                "explicacion": (
                    "Los árboles ayudan a capturar dióxido de carbono "
                    "y contribuyen a mantener un ambiente saludable."
                )
            }

        ]
    },


    # =====================================================
    # RECICLAJE
    # =====================================================

    "reciclaje": {

        "nombre": "Reciclaje",
        "icono": "♻️",
        "descripcion": "Pon a prueba tus conocimientos sobre reciclaje.",
        "color": "#38d39f",

        "preguntas": [

            {
                "pregunta": "¿Qué significa reciclar?",
                "opciones": [
                    "Crear basura",
                    "Reutilizar materiales para crear nuevos productos",
                    "Quemar residuos",
                    "Tirar objetos al suelo"
                ],
                "respuesta": 1,
                "explicacion": (
                    "Reciclar permite transformar materiales usados "
                    "en nuevos productos."
                )
            },

            {
                "pregunta": "¿Cuál de estos materiales puede reciclarse?",
                "opciones": [
                    "Papel",
                    "Humo",
                    "Agua sucia",
                    "Aceite de motor"
                ],
                "respuesta": 0,
                "explicacion": (
                    "El papel puede ser reciclado y utilizado nuevamente "
                    "para fabricar otros productos."
                )
            },

            {
                "pregunta": "¿Qué debemos hacer antes de reciclar un envase?",
                "opciones": [
                    "Ensuciarlo más",
                    "Dejarlo lleno de comida",
                    "Vaciarlo y limpiarlo cuando sea necesario",
                    "Quemarlo"
                ],
                "respuesta": 2,
                "explicacion": (
                    "Los envases deben estar preparados correctamente "
                    "para facilitar su reciclaje."
                )
            },

            {
                "pregunta": "¿Qué problema ayuda a reducir el reciclaje?",
                "opciones": [
                    "La cantidad de residuos",
                    "La cantidad de árboles",
                    "La lluvia",
                    "La luz solar"
                ],
                "respuesta": 0,
                "explicacion": (
                    "El reciclaje reduce la cantidad de residuos "
                    "que terminan en vertederos."
                )
            },

            {
                "pregunta": "¿Qué podemos hacer además de reciclar?",
                "opciones": [
                    "Reducir y reutilizar",
                    "Comprar más basura",
                    "Desperdiciar materiales",
                    "Quemar plástico"
                ],
                "respuesta": 0,
                "explicacion": (
                    "Reducir, reutilizar y reciclar forman parte "
                    "de un consumo más responsable."
                )
            }

        ]
    },


    # =====================================================
    # AGUA
    # =====================================================

    "agua": {

        "nombre": "Cuidado del Agua",
        "icono": "💧",
        "descripcion": "Descubre cómo cuidar uno de nuestros recursos más importantes.",
        "color": "#36a9e1",

        "preguntas": [

            {
                "pregunta": "¿Cómo podemos ahorrar agua al cepillarnos?",
                "opciones": [
                    "Dejar el grifo abierto",
                    "Cerrar el grifo mientras nos cepillamos",
                    "Usar más agua",
                    "Abrir todos los grifos"
                ],
                "respuesta": 1,
                "explicacion": (
                    "Cerrar el grifo mientras nos cepillamos "
                    "evita desperdiciar agua."
                )
            },

            {
                "pregunta": "¿Cuál es una consecuencia de contaminar los ríos?",
                "opciones": [
                    "Mejor calidad del agua",
                    "Daño a los ecosistemas",
                    "Más agua potable",
                    "Más peces"
                ],
                "respuesta": 1,
                "explicacion": (
                    "La contaminación de los ríos afecta a los animales, "
                    "plantas y personas."
                )
            },

            {
                "pregunta": "¿Qué debemos hacer si encontramos una fuga de agua?",
                "opciones": [
                    "Ignorarla",
                    "Abrir más el grifo",
                    "Repararla lo antes posible",
                    "Dejarla durante meses"
                ],
                "respuesta": 2,
                "explicacion": (
                    "Una fuga puede desperdiciar grandes cantidades de agua."
                )
            },

            {
                "pregunta": "¿Por qué es importante cuidar los ríos?",
                "opciones": [
                    "Porque son fuentes de agua y vida",
                    "Porque producen plástico",
                    "Porque generan basura",
                    "Porque contaminan el aire"
                ],
                "respuesta": 0,
                "explicacion": (
                    "Los ríos son importantes para las personas, "
                    "animales y ecosistemas."
                )
            },

            {
                "pregunta": "¿Cuál de estas acciones desperdicia agua?",
                "opciones": [
                    "Cerrar el grifo",
                    "Reparar una fuga",
                    "Dejar la ducha abierta innecesariamente",
                    "Usar agua responsablemente"
                ],
                "respuesta": 2,
                "explicacion": (
                    "Dejar correr el agua sin necesidad "
                    "aumenta el desperdicio."
                )
            }

        ]
    },


    # =====================================================
    # ENERGÍA
    # =====================================================

    "energia": {

        "nombre": "Energía",
        "icono": "⚡",
        "descripcion": "Aprende a utilizar la energía de manera responsable.",
        "color": "#f5c542",

        "preguntas": [

            {
                "pregunta": "¿Qué debemos hacer al salir de una habitación?",
                "opciones": [
                    "Dejar todas las luces encendidas",
                    "Apagar las luces",
                    "Encender más luces",
                    "Abrir todos los aparatos"
                ],
                "respuesta": 1,
                "explicacion": (
                    "Apagar las luces cuando no son necesarias "
                    "ayuda a ahorrar energía."
                )
            },

            {
                "pregunta": "¿Cuál es una fuente de energía renovable?",
                "opciones": [
                    "Petróleo",
                    "Carbón",
                    "Energía solar",
                    "Gasolina"
                ],
                "respuesta": 2,
                "explicacion": (
                    "La energía solar proviene del Sol "
                    "y es una fuente renovable."
                )
            },

            {
                "pregunta": "¿Qué aparato debemos desconectar cuando no lo usamos?",
                "opciones": [
                    "Los aparatos electrónicos",
                    "Una planta",
                    "Una ventana",
                    "Una silla"
                ],
                "respuesta": 0,
                "explicacion": (
                    "Desconectar algunos aparatos puede evitar "
                    "el consumo innecesario de electricidad."
                )
            },

            {
                "pregunta": "¿Qué ayuda a reducir el consumo eléctrico?",
                "opciones": [
                    "Utilizar bombillas eficientes",
                    "Dejar las luces encendidas",
                    "Abrir el refrigerador constantemente",
                    "Usar aparatos sin necesidad"
                ],
                "respuesta": 0,
                "explicacion": (
                    "Las bombillas eficientes consumen menos electricidad."
                )
            },

            {
                "pregunta": "¿Cuál es un ejemplo de energía renovable?",
                "opciones": [
                    "Eólica",
                    "Gasolina",
                    "Carbón",
                    "Petróleo"
                ],
                "respuesta": 0,
                "explicacion": (
                    "La energía eólica utiliza la fuerza del viento."
                )
            }

        ]
    },


    # =====================================================
    # NATURALEZA
    # =====================================================

    "naturaleza": {

        "nombre": "Naturaleza y Bosques",
        "icono": "🌳",
        "descripcion": "Conoce la importancia de proteger nuestros ecosistemas.",
        "color": "#65c466",

        "preguntas": [

            {
                "pregunta": "¿Por qué debemos proteger los bosques?",
                "opciones": [
                    "Porque son importantes para los ecosistemas",
                    "Porque producen plástico",
                    "Porque contaminan el aire",
                    "Porque generan basura"
                ],
                "respuesta": 0,
                "explicacion": (
                    "Los bosques son hogar de muchas especies "
                    "y ayudan a mantener el equilibrio ambiental."
                )
            },

            {
                "pregunta": "¿Qué ocurre cuando se destruyen muchos bosques?",
                "opciones": [
                    "Aumenta la biodiversidad",
                    "Se pierde hábitat para muchas especies",
                    "Aparecen más árboles",
                    "Mejora el ecosistema"
                ],
                "respuesta": 1,
                "explicacion": (
                    "La deforestación destruye los lugares "
                    "donde viven muchas especies."
                )
            },

            {
                "pregunta": "¿Qué podemos hacer para proteger los árboles?",
                "opciones": [
                    "Desperdiciar papel",
                    "Reducir el uso innecesario de papel",
                    "Talar árboles sin control",
                    "Quemar bosques"
                ],
                "respuesta": 1,
                "explicacion": (
                    "Reducir el consumo de papel ayuda a disminuir "
                    "la presión sobre los bosques."
                )
            },

            {
                "pregunta": "¿Qué significa biodiversidad?",
                "opciones": [
                    "La variedad de seres vivos",
                    "La cantidad de basura",
                    "La contaminación del agua",
                    "El calentamiento de una ciudad"
                ],
                "respuesta": 0,
                "explicacion": (
                    "La biodiversidad representa la variedad "
                    "de seres vivos y ecosistemas."
                )
            },

            {
                "pregunta": "¿Qué debemos hacer cuando visitamos un bosque?",
                "opciones": [
                    "Dejar basura",
                    "Respetar la naturaleza y llevarnos nuestros residuos",
                    "Romper plantas",
                    "Molestar a los animales"
                ],
                "respuesta": 1,
                "explicacion": (
                    "Cuando visitamos espacios naturales debemos "
                    "dejarlos limpios y respetar la vida silvestre."
                )
            }

        ]
    },


    # =====================================================
    # OCÉANOS
    # =====================================================

    "oceanos": {

        "nombre": "Océanos",
        "icono": "🌊",
        "descripcion": "Descubre cómo podemos proteger nuestros mares.",
        "color": "#3189d8",

        "preguntas": [

            {
                "pregunta": "¿Qué amenaza a los océanos?",
                "opciones": [
                    "La contaminación por plástico",
                    "La limpieza de playas",
                    "La protección marina",
                    "El reciclaje"
                ],
                "respuesta": 0,
                "explicacion": (
                    "Los residuos plásticos pueden llegar al mar "
                    "y afectar a muchas especies."
                )
            },

            {
                "pregunta": "¿Qué podemos hacer para cuidar los océanos?",
                "opciones": [
                    "Tirar basura al mar",
                    "Reducir el uso de plásticos de un solo uso",
                    "Dejar residuos en la playa",
                    "Contaminar los ríos"
                ],
                "respuesta": 1,
                "explicacion": (
                    "Reducir los plásticos de un solo uso ayuda "
                    "a disminuir los residuos que llegan al océano."
                )
            },

            {
                "pregunta": "¿Qué animales pueden verse afectados por el plástico?",
                "opciones": [
                    "Solo los peces",
                    "Solo las aves",
                    "Muchas especies marinas",
                    "Ningún animal"
                ],
                "respuesta": 2,
                "explicacion": (
                    "El plástico puede afectar a peces, tortugas, "
                    "aves marinas y muchas otras especies."
                )
            },

            {
                "pregunta": "¿Qué debemos hacer con la basura cuando vamos a la playa?",
                "opciones": [
                    "Dejarla en la arena",
                    "Tirarla al agua",
                    "Recogerla y depositarla correctamente",
                    "Enterrarla"
                ],
                "respuesta": 2,
                "explicacion": (
                    "Recoger nuestros residuos ayuda a mantener "
                    "las playas y los océanos más limpios."
                )
            },

            {
                "pregunta": "¿Por qué son importantes los océanos?",
                "opciones": [
                    "Porque forman parte de los ecosistemas del planeta",
                    "Porque producen basura",
                    "Porque contaminan las ciudades",
                    "Porque no tienen vida"
                ],
                "respuesta": 0,
                "explicacion": (
                    "Los océanos son fundamentales para la vida "
                    "y contienen una enorme diversidad de especies."
                )
            }

        ]
    }

}


# =========================================================
# INFORMACIÓN PARA APRENDER
# =========================================================

APRENDIZAJE = {

    "medio-ambiente": {

        "icono": "🌱",

        "titulo": "Cuidado del Medio Ambiente",

        "descripcion": (
            "Aprende acciones sencillas para proteger "
            "nuestro planeta."
        ),

        "introduccion": (
            "Cuidar el medio ambiente es responsabilidad de todos. "
            "Nuestras acciones diarias pueden ayudar a proteger "
            "los recursos naturales."
        ),

        "pasos": [

            {
                "titulo": "Reduce tu consumo",
                "texto": (
                    "Compra solamente lo que realmente necesitas "
                    "y evita generar residuos innecesarios."
                )
            },

            {
                "titulo": "Reutiliza los objetos",
                "texto": (
                    "Antes de tirar algo, piensa si puedes utilizarlo "
                    "nuevamente para otra actividad."
                )
            },

            {
                "titulo": "Recicla correctamente",
                "texto": (
                    "Separa los residuos según el material y utiliza "
                    "los puntos de reciclaje disponibles."
                )
            },

            {
                "titulo": "Ahorra agua y energía",
                "texto": (
                    "Cierra los grifos y apaga las luces y aparatos "
                    "cuando no los estés utilizando."
                )
            },

            {
                "titulo": "Protege la naturaleza",
                "texto": (
                    "Evita contaminar parques, bosques, playas "
                    "y otros espacios naturales."
                )
            }

        ],

        "consejo": (
            "No necesitas hacer todo de una vez. "
            "Comienza con una pequeña acción y conviértela en hábito."
        )
    },


    "reciclaje": {

        "icono": "♻️",

        "titulo": "Reciclaje",

        "descripcion": (
            "Aprende cómo reducir, reutilizar y separar "
            "correctamente los residuos."
        ),

        "introduccion": (
            "Reciclar ayuda a disminuir la cantidad de residuos "
            "y permite aprovechar materiales para fabricar "
            "nuevos productos."
        ),

        "pasos": [

            {
                "titulo": "Reduce lo que consumes",
                "texto": (
                    "Evita comprar productos que realmente no necesitas "
                    "y reduce el uso de artículos desechables."
                )
            },

            {
                "titulo": "Separa los residuos",
                "texto": (
                    "Separa papel, cartón, plástico, vidrio y metales "
                    "antes de desecharlos."
                )
            },

            {
                "titulo": "Limpia los envases",
                "texto": (
                    "Cuando sea necesario, limpia los recipientes "
                    "antes de colocarlos con los materiales reciclables."
                )
            },

            {
                "titulo": "Reutiliza antes de desechar",
                "texto": (
                    "Busca una segunda utilidad para los objetos "
                    "antes de convertirlos en residuos."
                )
            },

            {
                "titulo": "Recicla correctamente",
                "texto": (
                    "Utiliza los puntos de reciclaje disponibles "
                    "en tu comunidad."
                )
            }

        ],

        "consejo": (
            "Antes de tirar algo a la basura, pregúntate: "
            "¿puedo reutilizarlo o reciclarlo?"
        )
    },


    "agua": {

        "icono": "💧",

        "titulo": "Cuidado del Agua",

        "descripcion": (
            "Descubre cómo cuidar uno de los recursos "
            "más importantes para la vida."
        ),

        "introduccion": (
            "El agua es indispensable para las personas, animales "
            "y plantas. Ahorrar agua y evitar su contaminación "
            "son acciones que todos podemos realizar."
        ),

        "pasos": [

            {
                "titulo": "Cierra el grifo",
                "texto": (
                    "No dejes correr el agua mientras te cepillas "
                    "los dientes."
                )
            },

            {
                "titulo": "Repara las fugas",
                "texto": (
                    "Una pequeña fuga puede desperdiciar una gran "
                    "cantidad de agua con el tiempo."
                )
            },

            {
                "titulo": "Reduce el tiempo de ducha",
                "texto": (
                    "Intenta tomar duchas más cortas para disminuir "
                    "el consumo de agua."
                )
            },

            {
                "titulo": "No contamines el agua",
                "texto": (
                    "Nunca tires basura o sustancias contaminantes "
                    "directamente a ríos, lagos o desagües."
                )
            }

        ],

        "consejo": (
            "Cada gota cuenta. Ahorrar agua hoy ayuda a proteger "
            "este recurso para el futuro."
        )
    },


    "energia": {

        "icono": "⚡",

        "titulo": "Energía",

        "descripcion": (
            "Aprende cómo utilizar la energía de manera "
            "más eficiente y responsable."
        ),

        "introduccion": (
            "Utilizar la energía de forma responsable ayuda "
            "a reducir el consumo y nuestro impacto ambiental."
        ),

        "pasos": [

            {
                "titulo": "Apaga las luces",
                "texto": (
                    "Apaga las luces de las habitaciones "
                    "que no estén siendo utilizadas."
                )
            },

            {
                "titulo": "Desconecta los equipos",
                "texto": (
                    "Desconecta los aparatos electrónicos "
                    "cuando no los estés utilizando."
                )
            },

            {
                "titulo": "Utiliza bombillas eficientes",
                "texto": (
                    "Las bombillas LED consumen menos energía "
                    "y tienen una mayor duración."
                )
            },

            {
                "titulo": "Aprovecha la luz natural",
                "texto": (
                    "Durante el día aprovecha la iluminación natural "
                    "en lugar de encender las luces."
                )
            }

        ],

        "consejo": (
            "Ahorrar energía también ayuda a cuidar "
            "los recursos del planeta."
        )
    },


    "naturaleza": {

        "icono": "🌳",

        "titulo": "Naturaleza y Bosques",

        "descripcion": (
            "Conoce la importancia de proteger los bosques, "
            "animales y ecosistemas."
        ),

        "introduccion": (
            "Los bosques y ecosistemas proporcionan oxígeno, "
            "alimentos, agua y refugio para millones de especies."
        ),

        "pasos": [

            {
                "titulo": "No tires basura",
                "texto": (
                    "Mantén limpios los parques, bosques, playas "
                    "y demás espacios naturales."
                )
            },

            {
                "titulo": "Protege los animales",
                "texto": (
                    "Respeta la vida silvestre y evita molestar "
                    "a los animales."
                )
            },

            {
                "titulo": "Cuida los árboles",
                "texto": (
                    "Evita dañar los árboles y participa "
                    "en actividades de reforestación."
                )
            },

            {
                "titulo": "Respeta los ecosistemas",
                "texto": (
                    "No destruyas plantas ni alteres innecesariamente "
                    "los lugares donde viven los animales."
                )
            }

        ],

        "consejo": (
            "Proteger la naturaleza significa proteger "
            "también nuestra propia calidad de vida."
        )
    },


    "oceanos": {

        "icono": "🌊",

        "titulo": "Océanos",

        "descripcion": (
            "Aprende cómo nuestras acciones pueden ayudar "
            "a proteger los mares y océanos."
        ),

        "introduccion": (
            "Los océanos son fundamentales para la vida del planeta. "
            "Reducir la contaminación ayuda a proteger los ecosistemas "
            "marinos."
        ),

        "pasos": [

            {
                "titulo": "Reduce el plástico",
                "texto": (
                    "Evita productos plásticos de un solo uso "
                    "cuando exista una alternativa."
                )
            },

            {
                "titulo": "No tires basura",
                "texto": (
                    "Nunca arrojes basura en calles, ríos o playas."
                )
            },

            {
                "titulo": "Utiliza productos reutilizables",
                "texto": (
                    "Utiliza botellas, bolsas y recipientes "
                    "que puedan utilizarse varias veces."
                )
            },

            {
                "titulo": "Protege la vida marina",
                "texto": (
                    "Respeta los animales marinos y evita actividades "
                    "que puedan dañar sus hábitats."
                )
            }

        ],

        "consejo": (
            "Un océano limpio es fundamental para "
            "nuestro planeta."
        )
    }

}


# =========================================================
# PÁGINA PRINCIPAL
# =========================================================

@app.route("/")
def inicio():

    return render_template(
        "index.html",
        quizzes=QUIZZES
    )


# =========================================================
# QUIZ
# =========================================================

@app.route("/quiz/<categoria>", methods=["GET", "POST"])
def quiz(categoria):

    if categoria not in QUIZZES:
        return "Quiz no encontrado", 404

    quiz_actual = QUIZZES[categoria]

    # Primera pregunta
    if request.method == "GET":

        return render_template(
            "quiz.html",
            categoria=categoria,
            quiz=quiz_actual,
            pregunta=0,
            puntos=0
        )

    # Respuesta enviada
    pregunta = int(request.form["pregunta"])
    respuesta_usuario = int(request.form["respuesta"])

    pregunta_actual = quiz_actual["preguntas"][pregunta]

    respuesta_correcta = pregunta_actual["respuesta"]

    if respuesta_usuario == respuesta_correcta:

        resultado = "correcta"
        puntos = 1

    else:

        resultado = "incorrecta"
        puntos = 0

    return render_template(
        "quiz.html",
        categoria=categoria,
        quiz=quiz_actual,
        pregunta=pregunta,
        resultado=resultado,
        puntos=puntos,
        respuesta_correcta=respuesta_correcta,
        respuesta_usuario=respuesta_usuario
    )


# =========================================================
# SIGUIENTE PREGUNTA
# =========================================================

@app.route("/siguiente/<categoria>/<int:pregunta>/<int:puntos>")
def siguiente(categoria, pregunta, puntos):

    if categoria not in QUIZZES:
        return "Quiz no encontrado", 404

    quiz_actual = QUIZZES[categoria]

    siguiente_pregunta = pregunta + 1

    # Si terminó el quiz
    if siguiente_pregunta >= len(quiz_actual["preguntas"]):

        total = len(quiz_actual["preguntas"])

        porcentaje = int((puntos / total) * 100)

        if porcentaje >= 90:

            mensaje = (
                "¡Excelente! Eres un verdadero "
                "EcoGuardián 🌎"
            )

        elif porcentaje >= 70:

            mensaje = (
                "¡Muy bien! Conoces bastante "
                "sobre el medio ambiente 🌱"
            )

        elif porcentaje >= 50:

            mensaje = (
                "Buen trabajo, pero todavía "
                "puedes aprender más ♻️"
            )

        else:

            mensaje = (
                "Tienes una gran oportunidad para "
                "aprender más sobre nuestro planeta 🌍"
            )

        return render_template(
            "quiz.html",
            categoria=categoria,
            quiz=quiz_actual,
            terminado=True,
            puntos=puntos,
            porcentaje=porcentaje,
            mensaje=mensaje
        )

    # Mostrar siguiente pregunta
    return render_template(
        "quiz.html",
        categoria=categoria,
        quiz=quiz_actual,
        pregunta=siguiente_pregunta,
        puntos=puntos
    )


# =========================================================
# APRENDER
# =========================================================

@app.route("/aprender/<tema>")
def aprender(tema):

    if tema not in APRENDIZAJE:
        return "Tema no encontrado", 404

    informacion = APRENDIZAJE[tema]

    return render_template(
        "aprender.html",
        tema=informacion
    )


# =========================================================
# EJECUTAR SERVIDOR
# =========================================================

if __name__ == "__main__":

    app.run(debug=True)