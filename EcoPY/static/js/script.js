/* ==========================================
   BANCO DE PREGUNTAS
========================================== */

const quizzes = {

    ambiente: {
        nombre: "🌱 Cuidado del ambiente",

        preguntas: [
            {
                pregunta: "¿Cuál es una buena forma de cuidar el medio ambiente?",
                opciones: [
                    "Desperdiciar agua",
                    "Reducir los residuos",
                    "Dejar las luces encendidas",
                    "Tirar basura en la calle"
                ],
                correcta: 1,
                explicacion: "Reducir los residuos ayuda a disminuir el impacto ambiental."
            },
            {
                pregunta: "¿Qué acción ayuda a reducir la cantidad de basura?",
                opciones: [
                    "Comprar productos desechables",
                    "Reutilizar objetos",
                    "Tirar todo al suelo",
                    "Usar más plástico"
                ],
                correcta: 1,
                explicacion: "Reutilizar permite aprovechar los objetos durante más tiempo."
            },
            {
                pregunta: "¿Qué recurso debemos evitar desperdiciar?",
                opciones: [
                    "Agua",
                    "Basura",
                    "Humo",
                    "Contaminación"
                ],
                correcta: 0,
                explicacion: "El agua es un recurso fundamental para la vida."
            },
            {
                pregunta: "¿Cuál de estas acciones es más sostenible?",
                opciones: [
                    "Usar productos reutilizables",
                    "Comprar productos innecesarios",
                    "Desperdiciar alimentos",
                    "Dejar aparatos encendidos"
                ],
                correcta: 0,
                explicacion: "Los productos reutilizables pueden reducir la generación de residuos."
            },
            {
                pregunta: "¿Por qué es importante proteger los árboles?",
                opciones: [
                    "Porque producen basura",
                    "Porque ayudan a los ecosistemas",
                    "Porque aumentan la contaminación",
                    "Porque gastan electricidad"
                ],
                correcta: 1,
                explicacion: "Los árboles forman parte de ecosistemas y ayudan a mantenerlos."
            },
            {
                pregunta: "¿Qué podemos hacer con los residuos orgánicos?",
                opciones: [
                    "Quemarlos siempre",
                    "Hacer compost",
                    "Tirarlos al mar",
                    "Dejarlos en la calle"
                ],
                correcta: 1,
                explicacion: "Muchos residuos orgánicos pueden aprovecharse para producir compost."
            },
            {
                pregunta: "¿Qué significa consumir responsablemente?",
                opciones: [
                    "Comprar todo lo que vemos",
                    "Comprar pensando en nuestras necesidades",
                    "Desechar productos nuevos",
                    "Usar más recursos"
                ],
                correcta: 1,
                explicacion: "El consumo responsable busca evitar compras y desperdicios innecesarios."
            },
            {
                pregunta: "¿Qué ayuda a mantener limpia una ciudad?",
                opciones: [
                    "Tirar basura en la calle",
                    "Usar los contenedores correctamente",
                    "Romper los contenedores",
                    "Dejar residuos en parques"
                ],
                correcta: 1,
                explicacion: "Utilizar correctamente los contenedores facilita la gestión de residuos."
            },
            {
                pregunta: "¿Qué acción ayuda a ahorrar recursos?",
                opciones: [
                    "Reparar objetos",
                    "Desecharlos inmediatamente",
                    "Comprar duplicados",
                    "Desperdiciarlos"
                ],
                correcta: 0,
                explicacion: "Reparar permite extender la vida útil de los productos."
            },
            {
                pregunta: "¿Qué debemos hacer con una botella reutilizable?",
                opciones: [
                    "Usarla varias veces",
                    "Tirarla después de usarla",
                    "Quemarla",
                    "Dejarla en el suelo"
                ],
                correcta: 0,
                explicacion: "Una botella reutilizable puede reducir el consumo de envases desechables."
            },
            {
                pregunta: "¿Cuál es una acción ecológica?",
                opciones: [
                    "Plantar árboles",
                    "Contaminar ríos",
                    "Quemar basura",
                    "Desperdiciar energía"
                ],
                correcta: 0,
                explicacion: "Plantar árboles puede beneficiar a los ecosistemas."
            },
            {
                pregunta: "¿Qué debemos hacer antes de comprar algo?",
                opciones: [
                    "Preguntarnos si realmente lo necesitamos",
                    "Comprar inmediatamente",
                    "Comprar dos unidades",
                    "Desechar algo primero"
                ],
                correcta: 0,
                explicacion: "Pensar antes de comprar puede reducir el consumo innecesario."
            },
            {
                pregunta: "¿Cuál es un recurso natural?",
                opciones: [
                    "Agua",
                    "Plástico fabricado",
                    "Computadora",
                    "Automóvil"
                ],
                correcta: 0,
                explicacion: "El agua es un recurso natural esencial."
            },
            {
                pregunta: "¿Qué ayuda a proteger la biodiversidad?",
                opciones: [
                    "Destruir hábitats",
                    "Proteger ecosistemas",
                    "Contaminar bosques",
                    "Cazar indiscriminadamente"
                ],
                correcta: 1,
                explicacion: "Proteger los ecosistemas ayuda a conservar las especies."
            },
            {
                pregunta: "¿Cuál es el objetivo principal del cuidado ambiental?",
                opciones: [
                    "Proteger los recursos y ecosistemas",
                    "Generar más basura",
                    "Contaminar más",
                    "Desperdiciar recursos"
                ],
                correcta: 0,
                explicacion: "El cuidado ambiental busca proteger los recursos naturales y los ecosistemas."
            }
        ]
    },


    reciclaje: {
        nombre: "♻️ Reciclaje",

        preguntas: [
            {
                pregunta: "¿Qué significa reciclar?",
                opciones: [
                    "Quemar residuos",
                    "Transformar materiales para aprovecharlos",
                    "Tirar residuos al mar",
                    "Enterrar todo"
                ],
                correcta: 1,
                explicacion: "Reciclar permite aprovechar materiales para fabricar nuevos productos."
            },
            {
                pregunta: "¿Cuál de estos materiales suele ser reciclable?",
                opciones: [
                    "Papel",
                    "Comida podrida",
                    "Arena",
                    "Tierra"
                ],
                correcta: 0,
                explicacion: "El papel puede recuperarse mediante procesos de reciclaje."
            },
            {
                pregunta: "¿Qué debemos hacer antes de reciclar un envase?",
                opciones: [
                    "Dejarlo lleno",
                    "Seguir las indicaciones de separación y preparación",
                    "Tirarlo al suelo",
                    "Quemarlo"
                ],
                correcta: 1,
                explicacion: "La preparación correcta facilita la gestión de los materiales reciclables."
            },
            {
                pregunta: "¿Qué material se utiliza para fabricar muchas botellas?",
                opciones: [
                    "Plástico",
                    "Madera",
                    "Piedra",
                    "Algodón"
                ],
                correcta: 0,
                explicacion: "Muchas botellas de bebidas están fabricadas con plástico."
            },
            {
                pregunta: "¿Qué acción reduce los residuos?",
                opciones: [
                    "Reutilizar",
                    "Comprar más desechables",
                    "Tirar productos nuevos",
                    "Usar más envases"
                ],
                correcta: 0,
                explicacion: "Reutilizar evita generar residuos innecesarios."
            },
            {
                pregunta: "¿Qué podemos hacer con algunas botellas de vidrio?",
                opciones: [
                    "Reutilizarlas",
                    "Tirarlas al océano",
                    "Quemarlas",
                    "Usarlas como basura"
                ],
                correcta: 0,
                explicacion: "Algunas botellas de vidrio pueden reutilizarse de forma segura."
            },
            {
                pregunta: "¿Qué representa el símbolo ♻️?",
                opciones: [
                    "Reciclaje",
                    "Peligro",
                    "Electricidad",
                    "Agua"
                ],
                correcta: 0,
                explicacion: "El símbolo de tres flechas es ampliamente asociado con el reciclaje."
            },
            {
                pregunta: "¿Qué puede hacerse con residuos orgánicos?",
                opciones: [
                    "Compostaje",
                    "Tirarlos al océano",
                    "Quemarlos siempre",
                    "Dejarlos en una carretera"
                ],
                correcta: 0,
                explicacion: "Los residuos orgánicos pueden utilizarse para producir compost."
            },
            {
                pregunta: "¿Qué opción genera menos residuos?",
                opciones: [
                    "Productos reutilizables",
                    "Productos de un solo uso",
                    "Más envoltorios",
                    "Bolsas desechables"
                ],
                correcta: 0,
                explicacion: "Los productos reutilizables pueden reducir los residuos."
            },
            {
                pregunta: "¿Qué material puede reciclarse muchas veces?",
                opciones: [
                    "Vidrio",
                    "Comida",
                    "Tierra",
                    "Humo"
                ],
                correcta: 0,
                explicacion: "El vidrio puede reciclarse repetidamente."
            },
            {
                pregunta: "¿Qué debemos evitar al separar residuos?",
                opciones: [
                    "Mezclarlos incorrectamente",
                    "Separarlos",
                    "Identificarlos",
                    "Usar contenedores adecuados"
                ],
                correcta: 0,
                explicacion: "Separar correctamente facilita el tratamiento de los residuos."
            },
            {
                pregunta: "¿Qué puede reducir el consumo de bolsas plásticas?",
                opciones: [
                    "Una bolsa reutilizable",
                    "Más bolsas",
                    "Bolsas rotas",
                    "Comprar bolsas diariamente"
                ],
                correcta: 0,
                explicacion: "Una bolsa reutilizable puede sustituir muchas bolsas desechables."
            },
            {
                pregunta: "¿Qué beneficio tiene reciclar?",
                opciones: [
                    "Aprovechar materiales",
                    "Crear más basura",
                    "Contaminar más",
                    "Desperdiciar recursos"
                ],
                correcta: 0,
                explicacion: "El reciclaje permite recuperar materiales y reducir residuos."
            },
            {
                pregunta: "¿Cuál es una buena práctica?",
                opciones: [
                    "Reducir, reutilizar y reciclar",
                    "Usar y tirar",
                    "Comprar y desechar",
                    "Quemar todos los residuos"
                ],
                correcta: 0,
                explicacion: "Las tres acciones ayudan a reducir el impacto de nuestros residuos."
            },
            {
                pregunta: "¿Qué debemos hacer con una lata vacía?",
                opciones: [
                    "Depositarla según el sistema local de reciclaje",
                    "Tirarla al río",
                    "Enterrarla en un parque",
                    "Dejarla en la calle"
                ],
                correcta: 0,
                explicacion: "La correcta separación facilita que materiales como el metal puedan recuperarse."
            }
        ]
    },


    agua: {
        nombre: "💧 Cuidado del agua",

        preguntas: [
            {
                pregunta: "¿Por qué es importante ahorrar agua?",
                opciones: [
                    "Porque es un recurso limitado",
                    "Porque produce basura",
                    "Porque contamina",
                    "Porque genera plástico"
                ],
                correcta: 0,
                explicacion: "El agua dulce disponible es limitada y debemos utilizarla responsablemente."
            },
            {
                pregunta: "¿Qué acción ayuda a ahorrar agua?",
                opciones: [
                    "Cerrar el grifo mientras nos cepillamos",
                    "Dejarlo abierto",
                    "Jugar con agua",
                    "Dejar fugas"
                ],
                correcta: 0,
                explicacion: "Cerrar el grifo durante el cepillado evita desperdiciar agua."
            },
            {
                pregunta: "¿Qué debemos hacer si detectamos una fuga?",
                opciones: [
                    "Ignorarla",
                    "Repararla",
                    "Aumentarla",
                    "Dejarla abierta"
                ],
                correcta: 1,
                explicacion: "Reparar las fugas evita pérdidas innecesarias de agua."
            },
            {
                pregunta: "¿Cuál es una fuente de agua dulce?",
                opciones: [
                    "Ríos",
                    "Aceite",
                    "Gasolina",
                    "Plástico"
                ],
                correcta: 0,
                explicacion: "Los ríos contienen agua dulce, aunque pueden sufrir contaminación."
            },
            {
                pregunta: "¿Qué contamina los ríos?",
                opciones: [
                    "Vertidos de residuos",
                    "Cuidarlos",
                    "Limpiarlos",
                    "Proteger sus orillas"
                ],
                correcta: 0,
                explicacion: "Los residuos y sustancias contaminantes pueden dañar los ecosistemas acuáticos."
            },
            {
                pregunta: "¿Qué hábito ayuda a ahorrar agua en la ducha?",
                opciones: [
                    "Reducir el tiempo",
                    "Dejarla abierta",
                    "Usar más agua",
                    "Jugar con el agua"
                ],
                correcta: 0,
                explicacion: "Una ducha más corta puede reducir el consumo de agua."
            },
            {
                pregunta: "¿Qué porcentaje aproximado de la superficie terrestre está cubierta por agua?",
                opciones: [
                    "71%",
                    "10%",
                    "25%",
                    "95%"
                ],
                correcta: 0,
                explicacion: "Aproximadamente el 71% de la superficie de la Tierra está cubierta por agua."
            },
            {
                pregunta: "¿Por qué no debemos tirar basura en ríos?",
                opciones: [
                    "Porque contamina el agua",
                    "Porque la limpia",
                    "Porque produce oxígeno",
                    "Porque crea bosques"
                ],
                correcta: 0,
                explicacion: "Los residuos pueden contaminar el agua y afectar a los seres vivos."
            },
            {
                pregunta: "¿Qué sector utiliza grandes cantidades de agua?",
                opciones: [
                    "Agricultura",
                    "Lectura",
                    "Fotografía",
                    "Música"
                ],
                correcta: 0,
                explicacion: "La agricultura requiere grandes cantidades de agua para los cultivos."
            },
            {
                pregunta: "¿Qué podemos hacer con el agua de lluvia en algunos casos?",
                opciones: [
                    "Recolectarla para usos adecuados",
                    "Contaminarla",
                    "Tirarla al suelo contaminado",
                    "Mezclarla con basura"
                ],
                correcta: 0,
                explicacion: "El agua de lluvia puede aprovecharse para determinados usos cuando se recolecta correctamente."
            },
            {
                pregunta: "¿Qué debemos evitar cerca de ríos?",
                opciones: [
                    "Arrojar productos contaminantes",
                    "Protegerlos",
                    "Limpiarlos",
                    "Cuidar la vegetación"
                ],
                correcta: 0,
                explicacion: "Los productos contaminantes pueden afectar seriamente los ecosistemas acuáticos."
            },
            {
                pregunta: "¿Qué necesitan las personas para sobrevivir?",
                opciones: [
                    "Agua limpia",
                    "Plástico",
                    "Humo",
                    "Basura"
                ],
                correcta: 0,
                explicacion: "El acceso a agua limpia es fundamental para la vida y la salud."
            },
            {
                pregunta: "¿Qué acción es responsable?",
                opciones: [
                    "Usar solo el agua necesaria",
                    "Dejar grifos abiertos",
                    "Desperdiciar agua",
                    "Contaminar ríos"
                ],
                correcta: 0,
                explicacion: "Utilizar solo el agua necesaria ayuda a conservar este recurso."
            },
            {
                pregunta: "¿Qué ecosistemas dependen del agua?",
                opciones: [
                    "Ríos, lagos y humedales",
                    "Solo los desiertos",
                    "Solo las ciudades",
                    "Solo las carreteras"
                ],
                correcta: 0,
                explicacion: "Los ecosistemas acuáticos dependen directamente del agua."
            },
            {
                pregunta: "¿Cuál es una buena actitud frente al agua?",
                opciones: [
                    "Valorarlo y no desperdiciarlo",
                    "Desperdiciarlo",
                    "Contaminarlo",
                    "Ignorar las fugas"
                ],
                correcta: 0,
                explicacion: "Cuidar el agua es responsabilidad de todos."
            }
        ]
    },


    energia: {
        nombre: "⚡ Energía",

        preguntas: [
            {
                pregunta: "¿Cuál es una fuente de energía renovable?",
                opciones: [
                    "Solar",
                    "Carbón",
                    "Petróleo",
                    "Gas natural"
                ],
                correcta: 0,
                explicacion: "La energía solar utiliza la radiación del Sol y es renovable."
            },
            {
                pregunta: "¿Qué podemos hacer para ahorrar electricidad?",
                opciones: [
                    "Apagar luces que no necesitamos",
                    "Dejarlas encendidas",
                    "Encender todo",
                    "Usar más aparatos"
                ],
                correcta: 0,
                explicacion: "Apagar las luces innecesarias ayuda a reducir el consumo eléctrico."
            },
            {
                pregunta: "¿Cuál es una energía renovable?",
                opciones: [
                    "Eólica",
                    "Petróleo",
                    "Carbón",
                    "Gasolina"
                ],
                correcta: 0,
                explicacion: "La energía eólica aprovecha el viento."
            },
            {
                pregunta: "¿Qué utiliza un panel solar?",
                opciones: [
                    "Luz del Sol",
                    "Gasolina",
                    "Carbón",
                    "Plástico"
                ],
                correcta: 0,
                explicacion: "Los paneles solares aprovechan la radiación solar."
            },
            {
                pregunta: "¿Qué aparato consume electricidad?",
                opciones: [
                    "Televisor",
                    "Árbol",
                    "Piedra",
                    "Planta"
                ],
                correcta: 0,
                explicacion: "Un televisor necesita electricidad para funcionar."
            },
            {
                pregunta: "¿Qué ayuda a reducir el consumo eléctrico?",
                opciones: [
                    "Usar iluminación eficiente",
                    "Dejar todo encendido",
                    "Usar aparatos innecesariamente",
                    "Abrir el refrigerador constantemente"
                ],
                correcta: 0,
                explicacion: "La iluminación eficiente puede reducir el consumo de electricidad."
            },
            {
                pregunta: "¿Cuál es una fuente de energía fósil?",
                opciones: [
                    "Carbón",
                    "Sol",
                    "Viento",
                    "Agua"
                ],
                correcta: 0,
                explicacion: "El carbón es un combustible fósil."
            },
            {
                pregunta: "¿Qué aprovecha una central hidroeléctrica?",
                opciones: [
                    "Movimiento del agua",
                    "Gasolina",
                    "Plástico",
                    "Basura"
                ],
                correcta: 0,
                explicacion: "Las centrales hidroeléctricas utilizan el movimiento del agua para generar electricidad."
            },
            {
                pregunta: "¿Qué debemos hacer con los aparatos que no utilizamos?",
                opciones: [
                    "Apagarlos cuando sea apropiado",
                    "Dejarlos siempre encendidos",
                    "Encender más aparatos",
                    "Desconectar todo sin cuidado"
                ],
                correcta: 0,
                explicacion: "Apagar los aparatos cuando no se necesitan puede reducir el consumo energético."
            },
            {
                pregunta: "¿Qué recurso utiliza la energía eólica?",
                opciones: [
                    "Viento",
                    "Petróleo",
                    "Carbón",
                    "Gas"
                ],
                correcta: 0,
                explicacion: "Los aerogeneradores utilizan la energía del viento."
            },
            {
                pregunta: "¿Qué energía proviene del calor interno de la Tierra?",
                opciones: [
                    "Geotérmica",
                    "Solar",
                    "Eólica",
                    "Química"
                ],
                correcta: 0,
                explicacion: "La energía geotérmica aprovecha el calor interno de la Tierra."
            },
            {
                pregunta: "¿Qué significa eficiencia energética?",
                opciones: [
                    "Usar menos energía para realizar una tarea",
                    "Usar más energía",
                    "Dejar todo encendido",
                    "Desperdiciar electricidad"
                ],
                correcta: 0,
                explicacion: "La eficiencia busca obtener el mismo resultado utilizando menos energía."
            },
            {
                pregunta: "¿Cuál es una fuente natural de energía?",
                opciones: [
                    "Sol",
                    "Botella",
                    "Computadora",
                    "Automóvil"
                ],
                correcta: 0,
                explicacion: "El Sol es una fuente natural de energía."
            },
            {
                pregunta: "¿Por qué es importante ahorrar energía?",
                opciones: [
                    "Para reducir el consumo de recursos y emisiones",
                    "Para gastar más",
                    "Para producir basura",
                    "Para aumentar el desperdicio"
                ],
                correcta: 0,
                explicacion: "El ahorro energético puede ayudar a reducir el uso de recursos y las emisiones asociadas."
            },
            {
                pregunta: "¿Qué opción representa un consumo responsable?",
                opciones: [
                    "Utilizar la energía solo cuando es necesaria",
                    "Dejar todas las luces encendidas",
                    "Usar aparatos sin necesidad",
                    "Desperdiciar electricidad"
                ],
                correcta: 0,
                explicacion: "Consumir responsablemente significa evitar el uso innecesario de energía."
            }
        ]
    },


    naturaleza: {
        nombre: "🌳 Naturaleza",

        preguntas: [
            {
                pregunta: "¿Qué producen los árboles mediante la fotosíntesis?",
                opciones: [
                    "Oxígeno",
                    "Plástico",
                    "Gasolina",
                    "Basura"
                ],
                correcta: 0,
                explicacion: "Durante la fotosíntesis las plantas liberan oxígeno."
            },
            {
                pregunta: "¿Qué es un ecosistema?",
                opciones: [
                    "Un conjunto de seres vivos y su entorno",
                    "Una ciudad solamente",
                    "Un edificio",
                    "Una máquina"
                ],
                correcta: 0,
                explicacion: "Un ecosistema incluye seres vivos y elementos de su entorno que interactúan."
            },
            {
                pregunta: "¿Qué significa biodiversidad?",
                opciones: [
                    "Variedad de seres vivos",
                    "Cantidad de basura",
                    "Cantidad de edificios",
                    "Contaminación"
                ],
                correcta: 0,
                explicacion: "La biodiversidad representa la variedad de formas de vida."
            },
            {
                pregunta: "¿Por qué son importantes los bosques?",
                opciones: [
                    "Son hábitat de muchas especies",
                    "Producen plástico",
                    "Contaminan el aire",
                    "Generan basura"
                ],
                correcta: 0,
                explicacion: "Los bosques proporcionan hábitat y recursos para muchas especies."
            },
            {
                pregunta: "¿Qué es un hábitat?",
                opciones: [
                    "Lugar donde vive una especie",
                    "Un tipo de basura",
                    "Una máquina",
                    "Una carretera"
                ],
                correcta: 0,
                explicacion: "El hábitat es el lugar donde una especie encuentra las condiciones necesarias para vivir."
            },
            {
                pregunta: "¿Qué amenaza a la biodiversidad?",
                opciones: [
                    "Destrucción de hábitats",
                    "Protección ambiental",
                    "Restauración",
                    "Conservación"
                ],
                correcta: 0,
                explicacion: "La pérdida de hábitats puede afectar a numerosas especies."
            },
            {
                pregunta: "¿Qué debemos hacer al visitar un bosque?",
                opciones: [
                    "No dejar basura",
                    "Tirar residuos",
                    "Romper árboles",
                    "Molestar animales"
                ],
                correcta: 0,
                explicacion: "No dejar residuos ayuda a mantener los espacios naturales."
            },
            {
                pregunta: "¿Qué seres forman parte de la naturaleza?",
                opciones: [
                    "Animales y plantas",
                    "Solo automóviles",
                    "Solo edificios",
                    "Solo computadoras"
                ],
                correcta: 0,
                explicacion: "Animales y plantas son componentes fundamentales de los ecosistemas."
            },
            {
                pregunta: "¿Qué función cumplen las abejas?",
                opciones: [
                    "Polinización",
                    "Fabricación de plástico",
                    "Producción de gasolina",
                    "Contaminación"
                ],
                correcta: 0,
                explicacion: "Las abejas son importantes polinizadores."
            },
            {
                pregunta: "¿Qué debemos hacer con los animales silvestres?",
                opciones: [
                    "Respetar su hábitat",
                    "Molestarlos",
                    "Capturarlos",
                    "Destruir sus hogares"
                ],
                correcta: 0,
                explicacion: "Respetar los hábitats contribuye a la conservación de la fauna."
            },
            {
                pregunta: "¿Qué ayuda a conservar los bosques?",
                opciones: [
                    "Reforestación responsable",
                    "Tala indiscriminada",
                    "Incendios",
                    "Contaminación"
                ],
                correcta: 0,
                explicacion: "La restauración y reforestación adecuada pueden contribuir a recuperar áreas forestales."
            },
            {
                pregunta: "¿Qué es una especie en peligro?",
                opciones: [
                    "Una especie con alto riesgo de desaparecer",
                    "Una especie doméstica",
                    "Una planta común",
                    "Un mineral"
                ],
                correcta: 0,
                explicacion: "Una especie en peligro enfrenta un riesgo significativo de extinción."
            },
            {
                pregunta: "¿Qué elemento es fundamental para muchos ecosistemas?",
                opciones: [
                    "Agua",
                    "Plástico",
                    "Humo",
                    "Gasolina"
                ],
                correcta: 0,
                explicacion: "El agua es esencial para numerosos organismos y ecosistemas."
            },
            {
                pregunta: "¿Qué podemos hacer para proteger la fauna?",
                opciones: [
                    "Proteger sus hábitats",
                    "Destruirlos",
                    "Contaminarlos",
                    "Cazar indiscriminadamente"
                ],
                correcta: 0,
                explicacion: "La protección de hábitats es fundamental para la conservación de la fauna."
            },
            {
                pregunta: "¿Cuál es una acción positiva para la naturaleza?",
                opciones: [
                    "Plantar y cuidar árboles",
                    "Contaminar ríos",
                    "Destruir bosques",
                    "Dejar basura"
                ],
                correcta: 0,
                explicacion: "El cuidado de árboles y espacios naturales beneficia a los ecosistemas."
            }
        ]
    },


    oceanos: {
        nombre: "🌊 Océanos",

        preguntas: [
            {
                pregunta: "¿Cuál es una amenaza importante para los océanos?",
                opciones: [
                    "Contaminación por plástico",
                    "Protección marina",
                    "Limpieza de playas",
                    "Conservación"
                ],
                correcta: 0,
                explicacion: "Los residuos plásticos pueden afectar a numerosas especies marinas."
            },
            {
                pregunta: "¿Qué debemos evitar en las playas?",
                opciones: [
                    "Dejar basura",
                    "Recoger residuos",
                    "Usar contenedores",
                    "Cuidar la arena"
                ],
                correcta: 0,
                explicacion: "Los residuos pueden llegar al mar y afectar los ecosistemas."
            },
            {
                pregunta: "¿Qué animales pueden verse afectados por el plástico?",
                opciones: [
                    "Tortugas marinas",
                    "Solo insectos terrestres",
                    "Ninguno",
                    "Solo plantas"
                ],
                correcta: 0,
                explicacion: "Las tortugas y otros animales marinos pueden ingerir o quedar atrapados en residuos."
            },
            {
                pregunta: "¿Qué ecosistema marino es muy importante?",
                opciones: [
                    "Arrecifes de coral",
                    "Carreteras",
                    "Estacionamientos",
                    "Edificios"
                ],
                correcta: 0,
                explicacion: "Los arrecifes de coral albergan una gran diversidad de vida marina."
            },
            {
                pregunta: "¿Qué puede contaminar el océano?",
                opciones: [
                    "Residuos y sustancias contaminantes",
                    "Protección ambiental",
                    "Limpieza",
                    "Conservación"
                ],
                correcta: 0,
                explicacion: "Diversos residuos y contaminantes pueden llegar al océano."
            },
            {
                pregunta: "¿Qué acción ayuda a proteger el océano?",
                opciones: [
                    "Reducir el uso de plásticos desechables",
                    "Tirar basura",
                    "Verter sustancias",
                    "Dejar residuos"
                ],
                correcta: 0,
                explicacion: "Reducir residuos plásticos puede disminuir la cantidad que llega al ambiente."
            },
            {
                pregunta: "¿Qué cubre gran parte de la Tierra?",
                opciones: [
                    "Océanos",
                    "Edificios",
                    "Carreteras",
                    "Desiertos artificiales"
                ],
                correcta: 0,
                explicacion: "Los océanos cubren aproximadamente el 71% de la superficie terrestre."
            },
            {
                pregunta: "¿Qué podemos hacer en una playa?",
                opciones: [
                    "Recoger nuestra basura",
                    "Dejarla en la arena",
                    "Enterrar plástico",
                    "Tirar latas al agua"
                ],
                correcta: 0,
                explicacion: "Llevarse los residuos ayuda a mantener limpia la playa."
            },
            {
                pregunta: "¿Por qué son importantes los océanos?",
                opciones: [
                    "Son fundamentales para los ecosistemas y el clima",
                    "Solo sirven para nadar",
                    "Producen plástico",
                    "Generan basura"
                ],
                correcta: 0,
                explicacion: "Los océanos cumplen funciones esenciales en los ecosistemas y el sistema climático."
            },
            {
                pregunta: "¿Qué es la sobrepesca?",
                opciones: [
                    "Pescar a un ritmo que puede agotar las poblaciones",
                    "Pescar solo una vez",
                    "Proteger peces",
                    "Limpiar el océano"
                ],
                correcta: 0,
                explicacion: "La sobrepesca puede reducir las poblaciones de peces a niveles preocupantes."
            },
            {
                pregunta: "¿Qué ayuda a los arrecifes de coral?",
                opciones: [
                    "Reducir la contaminación",
                    "Arrojar residuos",
                    "Contaminar el agua",
                    "Romper corales"
                ],
                correcta: 0,
                explicacion: "Reducir los factores de estrés ayuda a proteger los arrecifes."
            },
            {
                pregunta: "¿Qué residuo es especialmente problemático en el mar?",
                opciones: [
                    "Plástico",
                    "Agua limpia",
                    "Arena natural",
                    "Oxígeno"
                ],
                correcta: 0,
                explicacion: "El plástico puede permanecer durante mucho tiempo en el ambiente y afectar a la fauna."
            },
            {
                pregunta: "¿Qué podemos hacer con una botella de plástico?",
                opciones: [
                    "Reutilizarla cuando sea apropiado o gestionarla correctamente",
                    "Tirarla al mar",
                    "Dejarla en la playa",
                    "Arrojarla al río"
                ],
                correcta: 0,
                explicacion: "Reducir, reutilizar y gestionar correctamente los residuos ayuda a evitar contaminación."
            },
            {
                pregunta: "¿Qué animal marino puede quedar atrapado en residuos?",
                opciones: [
                    "Tortuga marina",
                    "Águila terrestre",
                    "Perro",
                    "Caballo"
                ],
                correcta: 0,
                explicacion: "Las tortugas marinas pueden quedar atrapadas o ingerir residuos."
            },
            {
                pregunta: "¿Cuál es una buena práctica para visitar el mar?",
                opciones: [
                    "Respetar la fauna y no dejar residuos",
                    "Molestar animales",
                    "Recolectar animales",
                    "Dejar basura"
                ],
                correcta: 0,
                explicacion: "Respetar la fauna y retirar nuestros residuos ayuda a proteger los ecosistemas marinos."
            }
        ]
    },


    clima: {
        nombre: "🌡️ Cambio climático",

        preguntas: [
            {
                pregunta: "¿Qué es el cambio climático?",
                opciones: [
                    "Cambios a largo plazo en el clima",
                    "Un día lluvioso",
                    "Una tormenta aislada",
                    "El cambio de una estación"
                ],
                correcta: 0,
                explicacion: "El cambio climático se refiere a cambios persistentes en los patrones climáticos."
            },
            {
                pregunta: "¿Qué gas contribuye al efecto invernadero?",
                opciones: [
                    "Dióxido de carbono",
                    "Oxígeno únicamente",
                    "Helio",
                    "Nitrógeno únicamente"
                ],
                correcta: 0,
                explicacion: "El dióxido de carbono es uno de los principales gases de efecto invernadero."
            },
            {
                pregunta: "¿Qué actividad puede aumentar las emisiones?",
                opciones: [
                    "Quemar combustibles fósiles",
                    "Plantar árboles",
                    "Ahorrar energía",
                    "Caminar"
                ],
                correcta: 0,
                explicacion: "La quema de combustibles fósiles libera gases de efecto invernadero."
            },
            {
                pregunta: "¿Cuál es un combustible fósil?",
                opciones: [
                    "Petróleo",
                    "Viento",
                    "Sol",
                    "Agua"
                ],
                correcta: 0,
                explicacion: "El petróleo es un combustible fósil."
            },
            {
                pregunta: "¿Qué puede ayudar a reducir emisiones?",
                opciones: [
                    "Eficiencia energética",
                    "Desperdiciar electricidad",
                    "Quemar más combustible",
                    "Usar más gasolina"
                ],
                correcta: 0,
                explicacion: "La eficiencia energética puede disminuir el consumo y las emisiones asociadas."
            },
            {
                pregunta: "¿Qué absorben los árboles durante la fotosíntesis?",
                opciones: [
                    "Dióxido de carbono",
                    "Plástico",
                    "Gasolina",
                    "Basura"
                ],
                correcta: 0,
                explicacion: "Las plantas utilizan dióxido de carbono durante la fotosíntesis."
            },
            {
                pregunta: "¿Cuál es una fuente renovable?",
                opciones: [
                    "Solar",
                    "Carbón",
                    "Petróleo",
                    "Gasolina"
                ],
                correcta: 0,
                explicacion: "La energía solar es una fuente renovable."
            },
            {
                pregunta: "¿Qué puede ocurrir debido al calentamiento global?",
                opciones: [
                    "Cambios en patrones climáticos",
                    "Menos temperatura global siempre",
                    "Desaparición de la gravedad",
                    "Creación de nuevos planetas"
                ],
                correcta: 0,
                explicacion: "El calentamiento global puede alterar patrones climáticos y otros sistemas."
            },
            {
                pregunta: "¿Qué ayuda a reducir el uso de combustibles?",
                opciones: [
                    "Caminar cuando sea posible",
                    "Usar vehículos innecesariamente",
                    "Dejar motores encendidos",
                    "Acelerar sin necesidad"
                ],
                correcta: 0,
                explicacion: "Caminar puede evitar emisiones asociadas al uso de vehículos."
            },
            {
                pregunta: "¿Qué significa adaptación climática?",
                opciones: [
                    "Prepararse y ajustarse a los impactos climáticos",
                    "Aumentar la contaminación",
                    "Ignorar los riesgos",
                    "Desperdiciar energía"
                ],
                correcta: 0,
                explicacion: "La adaptación busca reducir la vulnerabilidad frente a los impactos del cambio climático."
            },
            {
                pregunta: "¿Qué significa mitigación climática?",
                opciones: [
                    "Reducir las causas del cambio climático",
                    "Aumentar emisiones",
                    "Contaminar más",
                    "Usar más combustibles"
                ],
                correcta: 0,
                explicacion: "La mitigación busca reducir las emisiones de gases de efecto invernadero."
            },
            {
                pregunta: "¿Qué puede ayudar a reducir emisiones del transporte?",
                opciones: [
                    "Transporte público",
                    "Usar el automóvil para trayectos innecesarios",
                    "Dejar vehículos encendidos",
                    "Viajar solo siempre"
                ],
                correcta: 0,
                explicacion: "El transporte público puede reducir las emisiones por persona en determinadas condiciones."
            },
            {
                pregunta: "¿Qué recurso energético depende del viento?",
                opciones: [
                    "Energía eólica",
                    "Petróleo",
                    "Carbón",
                    "Gas natural"
                ],
                correcta: 0,
                explicacion: "La energía eólica aprovecha la fuerza del viento."
            },
            {
                pregunta: "¿Qué hábito puede reducir el consumo de energía?",
                opciones: [
                    "Apagar aparatos innecesarios",
                    "Dejarlos encendidos",
                    "Usar más electricidad",
                    "Abrir constantemente el refrigerador"
                ],
                correcta: 0,
                explicacion: "Apagar equipos innecesarios puede reducir el consumo energético."
            },
            {
                pregunta: "¿Qué podemos hacer frente al cambio climático?",
                opciones: [
                    "Reducir nuestro impacto y apoyar soluciones sostenibles",
                    "Ignorar el problema",
                    "Contaminar más",
                    "Desperdiciar recursos"
                ],
                correcta: 0,
                explicacion: "Las acciones individuales y colectivas pueden contribuir a reducir impactos y apoyar soluciones."
            }
        ]
    },


    transporte: {
        nombre: "🚲 Transporte sostenible",

        preguntas: [
            {
                pregunta: "¿Cuál es una forma de transporte sostenible?",
                opciones: [
                    "Bicicleta",
                    "Automóvil para cada trayecto",
                    "Vehículo innecesario",
                    "Moto encendida sin usar"
                ],
                correcta: 0,
                explicacion: "La bicicleta no utiliza combustible durante su uso."
            },
            {
                pregunta: "¿Qué puede reducir emisiones por transporte?",
                opciones: [
                    "Usar transporte público",
                    "Viajar siempre solo",
                    "Dejar motores encendidos",
                    "Realizar trayectos innecesarios"
                ],
                correcta: 0,
                explicacion: "El transporte público puede reducir emisiones por persona en determinadas condiciones."
            },
            {
                pregunta: "¿Qué transporte no necesita combustible durante su uso?",
                opciones: [
                    "Bicicleta",
                    "Automóvil de gasolina",
                    "Avión",
                    "Motocicleta"
                ],
                correcta: 0,
                explicacion: "La bicicleta utiliza energía humana."
            },
            {
                pregunta: "¿Qué significa compartir vehículo?",
                opciones: [
                    "Viajar varias personas en un mismo vehículo",
                    "Comprar varios vehículos",
                    "Usar más gasolina",
                    "Viajar siempre solo"
                ],
                correcta: 0,
                explicacion: "Compartir vehículo puede reducir el número de viajes individuales."
            },
            {
                pregunta: "¿Qué beneficio tiene caminar?",
                opciones: [
                    "No genera emisiones directas por combustible",
                    "Consume gasolina",
                    "Produce humo",
                    "Genera ruido de motor"
                ],
                correcta: 0,
                explicacion: "Caminar no utiliza combustible y además es una forma de actividad física."
            },
            {
                pregunta: "¿Qué ayuda a mantener un vehículo eficiente?",
                opciones: [
                    "Mantenimiento adecuado",
                    "Ignorar problemas",
                    "Conducir sin revisar nada",
                    "Dejar el motor encendido"
                ],
                correcta: 0,
                explicacion: "Un vehículo correctamente mantenido puede funcionar de forma más eficiente."
            },
            {
                pregunta: "¿Qué transporte suele mover muchas personas?",
                opciones: [
                    "Autobús",
                    "Bicicleta individual",
                    "Motocicleta individual",
                    "Automóvil individual"
                ],
                correcta: 0,
                explicacion: "Los autobuses pueden transportar muchas personas en un solo vehículo."
            },
            {
                pregunta: "¿Qué opción puede reducir el uso del automóvil?",
                opciones: [
                    "Caminar trayectos cortos",
                    "Conducir siempre",
                    "Usar el automóvil para todo",
                    "Dejar el vehículo encendido"
                ],
                correcta: 0,
                explicacion: "Caminar puede sustituir algunos trayectos cortos en automóvil."
            },
            {
                pregunta: "¿Qué es la movilidad sostenible?",
                opciones: [
                    "Moverse reduciendo impactos ambientales y sociales",
                    "Usar más combustible",
                    "Generar más tráfico",
                    "Aumentar emisiones"
                ],
                correcta: 0,
                explicacion: "La movilidad sostenible busca formas de transporte más eficientes y con menor impacto."
            },
            {
                pregunta: "¿Qué vehículo puede funcionar con electricidad?",
                opciones: [
                    "Automóvil eléctrico",
                    "Bicicleta de madera sin motor",
                    "Carreta",
                    "Patineta tradicional"
                ],
                correcta: 0,
                explicacion: "Los automóviles eléctricos utilizan electricidad para mover sus motores."
            },
            {
                pregunta: "¿Qué puede reducir el tráfico?",
                opciones: [
                    "Transporte público y movilidad compartida",
                    "Más vehículos individuales",
                    "Viajar solo",
                    "Dejar vehículos estacionados en la calle"
                ],
                correcta: 0,
                explicacion: "El transporte compartido puede reducir la cantidad de vehículos necesarios."
            },
            {
                pregunta: "¿Qué opción es saludable y sostenible para distancias cortas?",
                opciones: [
                    "Caminar",
                    "Usar automóvil siempre",
                    "Dejar un motor encendido",
                    "Tomar un avión"
                ],
                correcta: 0,
                explicacion: "Caminar es una opción sostenible para muchos trayectos cortos."
            },
            {
                pregunta: "¿Qué puede generar un automóvil de combustión?",
                opciones: [
                    "Emisiones",
                    "Oxígeno limpio",
                    "Agua potable",
                    "Árboles"
                ],
                correcta: 0,
                explicacion: "Los vehículos de combustión emiten gases producto de la combustión."
            },
            {
                pregunta: "¿Qué transporte suele tener menor impacto por pasajero?",
                opciones: [
                    "Transporte público",
                    "Vehículo individual siempre",
                    "Avión para trayectos cortos",
                    "Vehículo vacío"
                ],
                correcta: 0,
                explicacion: "El transporte público puede reducir el impacto por pasajero cuando tiene buena ocupación."
            },
            {
                pregunta: "¿Cuál es una buena decisión para un trayecto corto?",
                opciones: [
                    "Caminar o usar bicicleta cuando sea posible",
                    "Usar un vehículo innecesariamente",
                    "Dejar el motor encendido",
                    "Viajar solo en automóvil"
                ],
                correcta: 0,
                explicacion: "Caminar o usar bicicleta puede evitar emisiones del transporte motorizado."
            }
        ]
    },


    contaminacion: {
        nombre: "🗑️ Contaminación",

        preguntas: [
            {
                pregunta: "¿Qué es la contaminación?",
                opciones: [
                    "Introducción de sustancias o agentes dañinos en el ambiente",
                    "Limpieza de un río",
                    "Plantación de árboles",
                    "Reciclaje"
                ],
                correcta: 0,
                explicacion: "La contaminación puede alterar negativamente el ambiente."
            },
            {
                pregunta: "¿Qué puede contaminar el aire?",
                opciones: [
                    "Humo y gases contaminantes",
                    "Árboles",
                    "Lluvia limpia",
                    "Oxígeno"
                ],
                correcta: 0,
                explicacion: "El humo y ciertos gases pueden deteriorar la calidad del aire."
            },
            {
                pregunta: "¿Qué puede contaminar el agua?",
                opciones: [
                    "Residuos y sustancias tóxicas",
                    "Agua limpia",
                    "Protección",
                    "Filtración"
                ],
                correcta: 0,
                explicacion: "Los residuos y sustancias contaminantes pueden deteriorar la calidad del agua."
            },
            {
                pregunta: "¿Qué puede contaminar el suelo?",
                opciones: [
                    "Productos químicos y residuos",
                    "Árboles",
                    "Agua limpia",
                    "Compost"
                ],
                correcta: 0,
                explicacion: "Algunos residuos y sustancias químicas pueden contaminar el suelo."
            },
            {
                pregunta: "¿Qué debemos hacer con la basura?",
                opciones: [
                    "Gestionarla correctamente",
                    "Tirarla a la calle",
                    "Arrojarla al río",
                    "Quemarla siempre"
                ],
                correcta: 0,
                explicacion: "Una correcta gestión de residuos ayuda a reducir la contaminación."
            },
            {
                pregunta: "¿Qué tipo de contaminación produce ruido excesivo?",
                opciones: [
                    "Contaminación acústica",
                    "Contaminación del agua",
                    "Contaminación del suelo",
                    "Contaminación lumínica"
                ],
                correcta: 0,
                explicacion: "El exceso de ruido se conoce como contaminación acústica."
            },
            {
                pregunta: "¿Qué es la contaminación lumínica?",
                opciones: [
                    "Exceso de luz artificial",
                    "Exceso de agua",
                    "Basura plástica",
                    "Humo"
                ],
                correcta: 0,
                explicacion: "La contaminación lumínica se relaciona con el exceso o mal uso de luz artificial."
            },
            {
                pregunta: "¿Qué ayuda a reducir la contaminación?",
                opciones: [
                    "Reducir residuos",
                    "Tirar basura",
                    "Quemar plástico",
                    "Contaminar ríos"
                ],
                correcta: 0,
                explicacion: "Reducir los residuos puede disminuir diferentes fuentes de contaminación."
            },
            {
                pregunta: "¿Qué puede provocar la contaminación del aire?",
                opciones: [
                    "Problemas de calidad del aire",
                    "Agua más limpia",
                    "Más árboles automáticamente",
                    "Menos emisiones"
                ],
                correcta: 0,
                explicacion: "La contaminación atmosférica puede afectar la calidad del aire."
            },
            {
                pregunta: "¿Qué acción contamina un río?",
                opciones: [
                    "Tirar productos químicos",
                    "Limpiarlo",
                    "Protegerlo",
                    "Restaurar sus orillas"
                ],
                correcta: 0,
                explicacion: "Los productos químicos pueden contaminar el agua y afectar a los organismos."
            },
            {
                pregunta: "¿Qué ayuda a reducir la basura en las calles?",
                opciones: [
                    "Usar los contenedores",
                    "Tirar residuos al suelo",
                    "Dejar bolsas en parques",
                    "Arrojar latas"
                ],
                correcta: 0,
                explicacion: "Los contenedores permiten gestionar los residuos correctamente."
            },
            {
                pregunta: "¿Qué puede producir humo contaminante?",
                opciones: [
                    "La quema de ciertos materiales",
                    "Una planta saludable",
                    "El agua limpia",
                    "El reciclaje"
                ],
                correcta: 0,
                explicacion: "La combustión de determinados materiales puede liberar contaminantes."
            },
            {
                pregunta: "¿Qué debemos evitar para proteger el suelo?",
                opciones: [
                    "Arrojar sustancias contaminantes",
                    "Plantar árboles",
                    "Compostar",
                    "Restaurar terrenos"
                ],
                correcta: 0,
                explicacion: "Evitar contaminantes ayuda a mantener la calidad del suelo."
            },
            {
                pregunta: "¿Qué ayuda a mantener un ambiente limpio?",
                opciones: [
                    "Reducir, reutilizar y reciclar",
                    "Comprar y tirar",
                    "Quemar residuos",
                    "Tirar basura"
                ],
                correcta: 0,
                explicacion: "Las tres acciones forman parte de una gestión responsable de recursos y residuos."
            },
            {
                pregunta: "¿Quién puede ayudar a reducir la contaminación?",
                opciones: [
                    "Todas las personas",
                    "Solo los científicos",
                    "Solo los gobiernos",
                    "Nadie"
                ],
                correcta: 0,
                explicacion: "Las personas, empresas, gobiernos y organizaciones tienen un papel en la protección ambiental."
            }
        ]
    },


    /* ======================================
       QUIZ MIXTO
    ====================================== */

    mixto: {
        nombre: "🌎 Quiz mixto",
        preguntas: []
    }
};


/* ==========================================
   CREAR QUIZ MIXTO
========================================== */

const categoriasBase = [
    "ambiente",
    "reciclaje",
    "agua",
    "energia",
    "naturaleza",
    "oceanos",
    "clima",
    "transporte",
    "contaminacion"
];

categoriasBase.forEach((categoria) => {

    quizzes[categoria].preguntas.forEach((pregunta) => {

        quizzes.mixto.preguntas.push({
            ...pregunta,
            categoria: quizzes[categoria].nombre
        });

    });

});


/* ==========================================
   VARIABLES
========================================== */

let categoriaSeleccionada = null;
let preguntasActuales = [];
let preguntaActual = 0;
let puntuacion = 0;
let racha = 0;
let respondida = false;
let tiempo = 20;
let intervalo;


/* ==========================================
   ELEMENTOS
========================================== */

const quizSection = document.getElementById("quiz");
const categoriasSection = document.getElementById("categorias");

const categoriaActual = document.getElementById("categoriaActual");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");

const numeroPregunta = document.getElementById("numeroPregunta");
const numeroGrande = document.getElementById("numeroGrande");

const puntuacionElemento = document.getElementById("puntuacion");
const rachaElemento = document.getElementById("racha");

const porcentaje = document.getElementById("porcentaje");
const barraProgreso = document.getElementById("barraProgreso");

const temporizador = document.getElementById("temporizador");

const explicacion = document.getElementById("explicacion");

const siguienteBtn = document.getElementById("siguienteBtn");

const preguntaContainer = document.getElementById(
    "preguntaContainer"
);

const resultado = document.getElementById("resultado");

const resultadoPuntos = document.getElementById(
    "resultadoPuntos"
);

const resultadoPorcentaje = document.getElementById(
    "resultadoPorcentaje"
);

const resultadoNivel = document.getElementById(
    "resultadoNivel"
);

const resultadoMensaje = document.getElementById(
    "resultadoMensaje"
);

const resultadoTitulo = document.getElementById(
    "resultadoTitulo"
);

const reiniciarBtn = document.getElementById(
    "reiniciarBtn"
);

const volverBtn = document.getElementById(
    "volverBtn"
);

const salirBtn = document.getElementById(
    "salirBtn"
);


/* ==========================================
   SELECCIONAR CATEGORÍA
========================================== */

document.querySelectorAll(".categoria-card").forEach((card) => {

    card.addEventListener("click", () => {

        const categoria = card.dataset.categoria;

        iniciarQuiz(categoria);

    });

});


/* ==========================================
   INICIAR QUIZ
========================================== */

function iniciarQuiz(categoria) {

    categoriaSeleccionada = categoria;

    preguntasActuales = [...quizzes[categoria].preguntas];

    mezclarPreguntas(preguntasActuales);

    preguntasActuales = preguntasActuales.slice(0, 15);

    preguntaActual = 0;
    puntuacion = 0;
    racha = 0;

    puntuacionElemento.textContent = "0";
    rachaElemento.textContent = "0";

    categoriasSection.style.display = "none";
    quizSection.style.display = "block";

    resultado.style.display = "none";
    preguntaContainer.style.display = "block";

    categoriaActual.textContent =
        quizzes[categoria].nombre;

    mostrarPregunta();

    quizSection.scrollIntoView({
        behavior: "smooth"
    });
}


/* ==========================================
   MOSTRAR PREGUNTA
========================================== */

function mostrarPregunta() {

    clearInterval(intervalo);

    respondida = false;

    siguienteBtn.disabled = true;

    explicacion.classList.remove("visible");
    explicacion.innerHTML = "";

    const datos = preguntasActuales[preguntaActual];

    pregunta.textContent = datos.pregunta;

    numeroPregunta.textContent =
        `${preguntaActual + 1} / 15`;

    numeroGrande.textContent =
        String(preguntaActual + 1).padStart(2, "0");

    const progreso =
        ((preguntaActual) / 15) * 100;

    porcentaje.textContent =
        `${Math.round(progreso)}%`;

    barraProgreso.style.width =
        `${progreso}%`;

    opciones.innerHTML = "";

    datos.opciones.forEach((opcion, indice) => {

        const boton = document.createElement("button");

        boton.className = "opcion";

        boton.type = "button";

        boton.innerHTML = `
            <span class="opcion-numero">
                ${String.fromCharCode(65 + indice)}
            </span>

            <span>
                ${opcion}
            </span>
        `;

        boton.addEventListener("click", () => {

            seleccionarRespuesta(
                indice,
                boton
            );

        });

        opciones.appendChild(boton);

    });

    iniciarTemporizador();
}


/* ==========================================
   RESPONDER
========================================== */

function seleccionarRespuesta(indice, botonSeleccionado) {

    if (respondida) {
        return;
    }

    respondida = true;

    clearInterval(intervalo);

    const datos =
        preguntasActuales[preguntaActual];

    const botones =
        document.querySelectorAll(".opcion");

    botones.forEach((boton) => {
        boton.disabled = true;
    });


    if (indice === datos.correcta) {

        botonSeleccionado.classList.add("correcta");

        racha++;

        let puntosGanados = 10;

        if (racha >= 3) {
            puntosGanados += 5;
        }

        puntuacion += puntosGanados;

        puntuacionElemento.textContent =
            puntuacion;

        rachaElemento.textContent =
            racha;

    } else {

        botonSeleccionado.classList.add("incorrecta");

        botones[datos.correcta]
            .classList.add("correcta");

        racha = 0;

        rachaElemento.textContent =
            racha;
    }


    explicacion.innerHTML = `
        <strong>
            <i class="bi bi-lightbulb"></i>
            Explicación
        </strong>

        <br>

        ${datos.explicacion}
    `;

    explicacion.classList.add("visible");

    siguienteBtn.disabled = false;
}


/* ==========================================
   SIGUIENTE
========================================== */

siguienteBtn.addEventListener("click", () => {

    preguntaActual++;

    if (preguntaActual >= 15) {

        terminarQuiz();

        return;
    }

    mostrarPregunta();
});


/* ==========================================
   TEMPORIZADOR
========================================== */

function iniciarTemporizador() {

    tiempo = 20;

    temporizador.textContent =
        `${tiempo}s`;

    intervalo = setInterval(() => {

        tiempo--;

        temporizador.textContent =
            `${tiempo}s`;

        if (tiempo <= 5) {

            temporizador.style.color =
                "#ff5757";

        } else {

            temporizador.style.color =
                "";
        }

        if (tiempo <= 0) {

            clearInterval(intervalo);

            tiempoAgotado();

        }

    }, 1000);
}


/* ==========================================
   TIEMPO AGOTADO
========================================== */

function tiempoAgotado() {

    if (respondida) {
        return;
    }

    respondida = true;

    const datos =
        preguntasActuales[preguntaActual];

    const botones =
        document.querySelectorAll(".opcion");

    botones.forEach((boton) => {
        boton.disabled = true;
    });

    botones[datos.correcta]
        .classList.add("correcta");

    racha = 0;

    rachaElemento.textContent =
        racha;

    explicacion.innerHTML = `
        <strong>
            ⏰ Se acabó el tiempo
        </strong>

        <br>

        La respuesta correcta era:
        <strong>
            ${datos.opciones[datos.correcta]}
        </strong>

        <br><br>

        ${datos.explicacion}
    `;

    explicacion.classList.add("visible");

    siguienteBtn.disabled = false;
}


/* ==========================================
   TERMINAR QUIZ
========================================== */

function terminarQuiz() {

    clearInterval(intervalo);

    preguntaContainer.style.display = "none";

    resultado.style.display = "block";

    barraProgreso.style.width = "100%";

    porcentaje.textContent = "100%";

    resultadoPuntos.textContent =
        `${puntuacion} puntos`;

    const porcentajeFinal =
        Math.round((puntuacion / 150) * 100);

    resultadoPorcentaje.textContent =
        `${porcentajeFinal}%`;

    let nivel;
    let mensaje;
    let titulo;

    if (porcentajeFinal >= 90) {

        nivel = "EcoGuardián Experto";

        titulo = "¡Impresionante! 🏆";

        mensaje =
            "Tienes excelentes conocimientos ambientales.";

    } else if (porcentajeFinal >= 70) {

        nivel = "EcoGuardián Avanzado";

        titulo = "¡Muy buen trabajo! 🌱";

        mensaje =
            "Conoces bastante sobre el cuidado del planeta.";

    } else if (porcentajeFinal >= 50) {

        nivel = "EcoGuardián Intermedio";

        titulo = "¡Buen comienzo! 🌎";

        mensaje =
            "Tienes una buena base, pero todavía puedes aprender más.";

    } else {

        nivel = "EcoGuardián Principiante";

        titulo = "¡Sigue aprendiendo! 🌱";

        mensaje =
            "Cada pregunta es una oportunidad para aprender algo nuevo.";

    }

    resultadoNivel.textContent = nivel;

    resultadoTitulo.textContent = titulo;

    resultadoMensaje.textContent = mensaje;

    resultado.scrollIntoView({
        behavior: "smooth"
    });
}


/* ==========================================
   REINICIAR
========================================== */

reiniciarBtn.addEventListener("click", () => {

    iniciarQuiz(categoriaSeleccionada);

});


/* ==========================================
   VOLVER A CATEGORÍAS
========================================== */

function volverCategorias() {

    clearInterval(intervalo);

    quizSection.style.display = "none";

    categoriasSection.style.display = "block";

    categoriasSection.scrollIntoView({
        behavior: "smooth"
    });
}

volverBtn.addEventListener(
    "click",
    volverCategorias
);

salirBtn.addEventListener(
    "click",
    volverCategorias
);


/* ==========================================
   MEZCLAR PREGUNTAS
========================================== */

function mezclarPreguntas(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];
    }
}


/* ==========================================
   MODO OSCURO / CLARO
========================================== */

const modoBtn =
    document.getElementById("modoBtn");

modoBtn.addEventListener("click", () => {

    document.body.classList.toggle("claro");

    const claro =
        document.body.classList.contains("claro");

    if (claro) {

        modoBtn.innerHTML =
            `<i class="bi bi-sun-fill"></i>`;

        localStorage.setItem(
            "tema",
            "claro"
        );

    } else {

        modoBtn.innerHTML =
            `<i class="bi bi-moon-stars-fill"></i>`;

        localStorage.setItem(
            "tema",
            "oscuro"
        );
    }
});


/* ==========================================
   CARGAR TEMA
========================================== */

if (
    localStorage.getItem("tema") === "claro"
) {

    document.body.classList.add("claro");

    modoBtn.innerHTML =
        `<i class="bi bi-sun-fill"></i>`;
}


/* ==========================================
   NAVBAR AL HACER SCROLL
========================================== */

const navbar =
    document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");
    }

});


/* ==========================================
   BOTÓN ARRIBA
========================================== */

const arribaBtn =
    document.getElementById("arribaBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        arribaBtn.style.display = "flex";

    } else {

        arribaBtn.style.display = "none";
    }

});


arribaBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   ANIMACIÓN AL APARECER
========================================== */

const elementos =
    document.querySelectorAll(
        ".categoria-card, .info-card, .section-title"
    );

const observer =
    new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(30px)";

    elemento.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(elemento);

});