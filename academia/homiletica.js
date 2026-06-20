// Objeto de datos estructurado para el renderizado dinámico de la Academia - Módulo Homilética
var DatosMateriaActiva = {
    materia: "Homilética",
    descripcion: "<p>La Homilética es, simplemente, el arte de saber comunicar la verdad que encontraste. Es el 'maestro de obra' que sabe cómo explicarle al cliente (la gente que escucha) cómo va a quedar la casa, para que ellos también se emocionen y entiendan el plano.<p>Aquí te va el proceso de la Homilética, paso a paso, para alguien que sabe lo que cuesta ganarse el pan con las manos:<p></p>",
    temas: [
        {
            id: 1,
            titulo: "1. El Diseño del Proyecto (El Bosquejo)",
            concepto: "Nunca empieces a predicar o enseñar sin un plano. Si hablas sin orden, la gente se pierde y se aburre.",
            desarrollo: `
                <p>Un buen mensaje estructurado necesita tres partes fundamentales en su plano de construcción:</p>
                <br>
                <ul>
                    <li><strong>Introducción:</strong> Captar la atención de la audiencia de inmediato. (Como cuando muestras en el taller la herramienta especial que vas a usar).</li>
                    <br>
                    <li><strong>Puntos principales:</strong> Máximo 3 pilares. Si intentas levantar la estructura dando 10 puntos diferentes, nadie se acordará de nada al salir.</li>
                    <br>
                    <li><strong>Conclusión:</strong> Un llamado directo a la acción. ¿Qué deben hacer ellos mañana a primera hora al levantarse?</li>
                </ul>
            `
        },
        {
            id: 2,
            titulo: "2. Háblales en su Idioma (La Relevancia)",
            concepto: "Adaptar el mensaje al entorno de los oyentes utilizando ilustraciones sencillas de la vida diaria.",
            desarrollo: `
                <p>Como buen obrero, sabes perfectamente que no le hablas con los mismos términos técnicos al ingeniero que al ayudante. La homilética te enseña a moldear la comunicación:</p>
                <br>
                <p><strong>Usa ilustraciones:</strong> Los ejemplos de la vida diaria son como los clavos: ayudan a que el mensaje se quede firmemente sujeto en la mente de la gente y no se caiga con el tiempo.</p>
                <br>
                <p><strong>Sé sencillo:</strong> Si usas palabras demasiado raras, la gente simplemente se desconecta. Jesús hablaba de semillas, de redes de pesca y de viñedos. Usa ejemplos basados en lo que la gente vive y trabaja todos los días.</p>
            `
        },
        {
            id: 3,
            titulo: "3. La Estructura debe ser Sólida (La Claridad)",
            concepto: "Asegurar que exista una sola idea central en toda la enseñanza para evitar el desperdicio de material.",
            desarrollo: `
                <p>Pregúntate siempre antes de exponerte ante el público: Si la gente solo se pudiera llevar una sola frase de mi charla de hoy, ¿cuál quiero que sea?</p>
                <br>
                <p>Todo lo que digas durante la enseñanza debe estar conectado directamente con esa idea central. Si te desvías del tema principal, estás perdiendo el rumbo y desperdiciando material valioso en la obra. Mantén el enfoque en un solo muro.</p>
            `
        },
        {
            id: 4,
            titulo: "4. La Pasión es el Cemento (La Entrega)",
            concepto: "Comunicar con convicción interna, predicando únicamente aquello que uno mismo intenta aplicar en su vida.",
            desarrollo: `
                <p>Puedes tener en la mesa el mejor plano de diseño y los mejores materiales del mercado, pero si no le pones ganas y fuerza al construir, la obra terminada se va a ver triste.</p>
                <br>
                <p><strong>Predica lo que vives:</strong> No intentes enseñar algo que tú mismo no has probado o intentado aplicar primero. La gente nota de inmediato cuando alguien habla de corazón porque él mismo ha luchado y trabajado con esa enseñanza.</p>
                <br>
                <p><strong>La autoridad de la verdad:</strong> No hables con orgullo ni altivez, pero sí con total seguridad. Tú no estás inventando las reglas del plano, solo estás transmitiendo una verdad que ya fue correctamente excavada en el terreno mediante la exégesis.</p>
            `
        },
        {
            id: 5,
            titulo: "5. El Ciclo Completo en Acción",
            concepto: "Cómo se junta todo el trabajo de análisis (Exégesis, Hermenéutica y Homilética) usando un ejemplo práctico.",
            desarrollo: `
                <p>Imagina que quieres estructurar una clase sobre el esfuerzo en el trabajo utilizando <strong>Colosenses 3:23</strong>:</p>
                <br>
                <ol>
                    <li><strong>Exégesis (La excavación):</strong> Descubres que en aquel tiempo el trabajo físico era visto por la sociedad como algo pesado y despreciable, pero el texto revela que Dios lo dignifica al colocarlo como un servicio directo para Él.</li>
                    <br>
                    <li><strong>Hermenéutica (La brújula):</strong> Traduces el principio a la actualidad. No significa que debas dejarte explotar laboralmente, sino que tu esfuerzo diario tiene un valor eterno ante Dios, sin importar si eres el jefe del proyecto o el que barre el taller al final del día.</li>
                    <br>
                    <li><strong>Homilética (El mensaje armado):</strong>
                        <ul>
                            <li><em>Inicio:</em> "¿Alguna vez has sentido que nadie valora el esfuerzo que haces al final del día cuando te duelen todos los músculos?"</li>
                            <li><em>Puntos:</em> <br>1) Dios ve cada gota de tu sudor;<br>2) Tu trabajo es una forma de honrar a tu familia;<br>3) El descanso es parte del diseño original de Dios.<br></li>
                            <li><em>Cierre:</em> "Mañana, cuando agarres tu herramienta de trabajo, hazlo recordando que el Diseñador está trabajando a tu lado".</li>
                        </ul>
                    </li>
                </ol>
                <br>
                <blockquote style="border-left: 3px solid var(--accent); padding-left: 10px; font-style: italic; color: var(--text-muted);">
                    "La exégesis te da la verdad, la hermenéutica te da el camino y la homilética te da la voz para compartirlo."
                </blockquote>
            `
        }
    ]
};