// Objeto de datos estructurado para el renderizado dinámico de la Academia - Módulo Exégesis
var DatosMateriaActiva = {
    materia: "Exégesis",
    descripcion: "<p>Si la hermenéutica es entender el plano de la casa, la <strong>exégesis es hacer el trabajo fino de excavación</strong>. Es meterse a fondo en el texto para sacar la verdad pura, sin inventar nada, sin añadirle tus ideas de afuera y sin <strong>maquillar</strong> el significado.</p></p>La palabra exégesis viene de un griego que significa <strong>sacar hacia afuera</strong>. Es decir, no le metes tus ideas al texto, sino que dejas que el texto te diga lo que tiene adentro.<p><p>Aquí te va el método del <strong>maestro de obra</strong> para hacer una buena exégesis:",
    temas: [
        {
            id: 1,
            titulo: "1. La Observación (Levantamiento de Datos)",
            concepto: "Antes de construir, el ingeniero mide el terreno. En el pasaje se analizan minuciosamente las palabras reales que están sobre el papel.",
            desarrollo: `
                <p>Lee el texto 3 o 4 veces seguidas y hazte estas preguntas de control en tu mesa de trabajo:</p>
                <br>
                <ul>
                    <li><strong>¿Qué dice realmente?:</strong> No lo que tú crees o sientes que dice, sino qué palabras específicas están ahí impresas.</li>
                    <br>
                    <li><strong>¿Quién habla y a quién?:</strong> Identificar claramente al emisor y al receptor original del plano.</li>
                    <br>
                    <li><strong>¿Qué palabras se repiten?:</strong> Las líneas de texto que más se reiteran suelen ser los muros de carga y el corazón del mensaje.</li>
                </ul>
                <br>
                <p><strong>Ojo (Fallo común):</strong> Evita a toda costa el <em>"yo siento que esto significa..."</em>. Eso se conoce como <strong>eiségesis</strong> (meter a la fuerza tus ideas dentro del plano). La exégesis se limita estrictamente a responder: ¿qué dicen las palabras en su lugar original?</p>
            `
        },
        {
            id: 2,
            titulo: "2. El Contexto Cercano y Lejano (Inspección de la Estructura)",
            concepto: "Analizar los versículos anteriores, posteriores y el resto de las Escrituras para asegurar que el sentido no se distorsione.",
            desarrollo: `
                <p>Imagínate que encuentras un cable eléctrico suelto en una instalación. No puedes intentar repararlo de forma segura sin verificar primero de dónde viene y hacia dónde va. Lo mismo pasa con las frases de la Biblia.</p>
                <br>
                <p><strong>Contexto cercano:</strong> ¿Qué dice el versículo de antes y el de después? A veces, un versículo aislado parece indicar una cosa, pero si inspeccionas el párrafo completo, el sentido de la estructura cambia por completo.</p>
                <br>
                <p><strong>Contexto lejano:</strong> ¿Qué dice el resto del manual (la Biblia) sobre este mismo tema? Las Escrituras tienen la propiedad de explicarse a sí mismas. Si crees que un texto dice algo que contradice todo lo demás, es muy probable que estés haciendo una mala excavación.</p>
            `
        },
        {
            id: 3,
            titulo: "3. La Investigación (Herramientas Especializadas)",
            concepto: "Utilizar el diccionario de idiomas originales (hebreo/griego) y el trasfondo histórico para abrir los ojos ante el pasaje.",
            desarrollo: `
                <p>Como técnico u obrero, si vas a intervenir un equipo especializado, buscas el manual original de esa marca. En el taller de la exégesis, tus herramientas de diagnóstico son:</p>
                <br>
                <ul>
                    <li><strong>El Diccionario Teológico:</strong> Rastrear qué significaban las palabras clave en su idioma original (hebreo para el Antiguo Testamento, griego para el Nuevo Testamento).</li>
                    <br>
                    <li><strong>El Trasfondo Social:</strong> Investigar cómo era el día a día en esa ciudad y qué problemas específicos pasaban en esa época.</li>
                </ul>
                <br>
                <p><strong>El ejemplo de la viuda:</strong> Si la Biblia menciona una "viuda" en el antiguo Israel, no te imagines simplemente a una mujer sola. En ese tiempo, por ley, una viuda no tenía derecho a trabajar de forma pública ni a heredar los bienes de su esposo; quedaba desamparada. Por eso el Diseñador insistía tanto en cuidarlas. Entender este plano legal te cambia la perspectiva del texto.</p>
            `
        },
        {
            id: 4,
            titulo: "4. Caso Práctico: El Buen Samaritano",
            concepto: "Análisis de excavación profunda para extraer el producto terminado y aplicarlo a la vida diaria.",
            desarrollo: `
                <p>Analicemos la famosa parábola con nuestras herramientas de obra:</p>
                <br>
                <ul>
                    <li><strong>Observación básica:</strong> Un hombre es asaltado en el camino, dos líderes religiosos pasan de largo ignorándolo, y un samaritano se detiene a auxiliarlo.</li>
                    <br>
                    <li><strong>Excavación de Contexto:</strong> En aquella época, los judíos y los samaritanos se odiaban a muerte por motivos religiosos y culturales. Viéndolo en términos de hoy, era como si un rival acérrimo arriesgara su vida para salvar a su enemigo en medio de una calle desolada.</li>
                </ul>
                <br>
                <p><strong>La conclusión exegética:</strong> No es una simple historia moral sobre "ser amable". El punto de Jesús fue romper un prejuicio estructural directo: <em>"Tu prójimo no es la persona que te cae bien o comparte tu grupo; tu prójimo es cualquiera que necesite tu ayuda, sin importar de dónde venga"</em>.</p>
                <br>
                <p><strong>Aplicación práctica:</strong> ¿A qué persona me cuesta integrar o ayudar en mi entorno de trabajo o en mi colonia por culpa de mis propios prejuicios?</p>
                <br>
                <blockquote style="border-left: 3px solid var(--accent); padding-left: 10px; font-style: italic; color: var(--text-muted);">
                    "Hacer exégesis es tener la humildad de decir: No voy a cambiar el plano del texto para que diga lo que yo quiero, voy a cambiar mi vida para que se ajuste a lo que el texto dice."
                </blockquote>
            `
        }
    ]
};