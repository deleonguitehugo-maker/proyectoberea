/**
 * ==========================================================================
 * PROYECTO BEREA - CONTROLADOR DEL TERCER ESPACIO (CONSTRUCTOR)
 * ==========================================================================
 */

let respuestasSermon = {
    obs_personajes: "",
    obs_repetidas: "",
    int_original: "",
    int_dios: "",
    apl_vida: "",
    apl_ilustracion: "",
    titulo_sermon: "",
    plantilla_usada: "expositivo"
};

const enunciadosPlantillas = {
    expositivo: {
        obs1: "¿Quién actúa? Describe a los personajes y sus acciones clave:",
        obs2: "¿Qué palabras, conceptos o ideas se repiten en este pasaje?",
        int1: "¿Qué significaba este mensaje para la audiencia original?",
        int2: "¿Qué verdad fundamental aprendemos aquí sobre el carácter de Dios?",
        apl1: "Aplicación Homilética: ¿Cómo debe responder la iglesia hoy?",
        apl2: "Introducción o Ilustración: Conecta esta verdad con la vida cotidiana:"
    },
    tematico: {
        obs1: "Tesis Principal: ¿Cuál es la gran verdad doctrinal que vas a defender?",
        obs2: "Pasajes de apoyo: ¿Qué otros textos bíblicos usarás como base?",
        int1: "Argumento I: ¿Cómo explicas el trasfondo teológico de esta doctrina?",
        int2: "Argumento II: ¿Qué errores comunes o dudas derriba esta verdad?",
        apl1: "Aplicación Eclesial: ¿Cómo debe encarnar la congregación esta doctrina?",
        apl2: "Ilustración Conectora: Una analogía o ejemplo para explicar este misterio doctrinal:"
    },
    narrativo: {
        obs1: "El Escenario y Actores: ¿Dónde ocurre el relato y quiénes interactúan?",
        obs2: "El Punto de Quiebre: ¿Cuál es el conflicto central o la crisis en la historia?",
        int1: "La Resolución Divina: ¿Cómo interviene Dios en la narrativa del pasaje?",
        int2: "El Principio Eterno: Detrás de la historia, ¿qué lección de fe queda descubierta?",
        apl1: "Tu lugar en la historia: ¿Con qué personaje o error se identifica tu audiencia?",
        apl2: "Gancho Narrativo: Idea para abrir el sermón contando una experiencia similar:"
    }
};

function prepararModuloConstructor() {
    const libroAsociado = document.getElementById('selector-libro').value || "general";
    
    const borradorGuardado = localStorage.getItem(`berea_espacio_sermon_${libroAsociado}`);
    if (borradorGuardado) {
        const datos = JSON.parse(borradorGuardado);
        document.getElementById('sermon-plantilla').value = datos.plantilla_usada || 'expositivo';
        document.getElementById('sermon-obs-1').value = datos.obs_personajes || '';
        document.getElementById('sermon-obs-2').value = datos.obs_repetidas || '';
        document.getElementById('sermon-int-1').value = datos.int_original || '';
        document.getElementById('sermon-int-2').value = datos.int_dios || '';
        document.getElementById('sermon-titulo-e').value = datos.titulo_sermon || '';
        document.getElementById('sermon-apl-1').value = datos.apl_vida || '';
        document.getElementById('sermon-apl-2').value = datos.apl_ilustracion || '';
    }
    cambiarEstructuraPlantilla();
}

function cambiarEstructuraPlantilla() {
    const tipo = document.getElementById('sermon-plantilla').value;
    const textos = enunciadosPlantillas[tipo];
    
    document.getElementById('lbl-obs-1').innerText = textos.obs1;
    document.getElementById('lbl-obs-2').innerText = textos.obs2;
    document.getElementById('lbl-int-1').innerText = textos.int1;
    document.getElementById('lbl-int-2').innerText = textos.int2;
    document.getElementById('lbl-apl-1').innerText = textos.apl1;
    document.getElementById('lbl-apl-2').innerText = textos.apl2;
}

function sintonizarDatos() {
    respuestasSermon.plantilla_usada = document.getElementById('sermon-plantilla').value;
    respuestasSermon.obs_personajes = document.getElementById('sermon-obs-1').value;
    respuestasSermon.obs_repetidas = document.getElementById('sermon-obs-2').value;
    respuestasSermon.int_original = document.getElementById('sermon-int-1').value;
    respuestasSermon.int_dios = document.getElementById('sermon-int-2').value;
    respuestasSermon.titulo_sermon = document.getElementById('sermon-titulo-e').value;
    respuestasSermon.apl_vida = document.getElementById('sermon-apl-1').value;
    respuestasSermon.apl_ilustracion = document.getElementById('sermon-apl-2').value;
}

function guardarBorradorManual() {
    sintonizarDatos();
    const libroAsociado = document.getElementById('selector-libro').value || "general";
    localStorage.setItem(`berea_espacio_sermon_${libroAsociado}`, JSON.stringify(respuestasSermon));
}

function navegarPasoConstructor(pasoActual, pasoSiguiente) {
    sintonizarDatos();
    const barra = document.getElementById('barra-progreso-constructor');
    const indicadorTexto = document.getElementById('indicador-etapa-texto');
    
    if (pasoSiguiente === 1) {
        barra.style.width = "33%"; indicadorTexto.innerText = "Fase 1 de 3: Observación";
    } else if (pasoSiguiente === 2) {
        barra.style.width = "66%"; indicadorTexto.innerText = "Fase 2 de 3: Interpretación";
    } else if (pasoSiguiente === 3) {
        barra.style.width = "90%"; indicadorTexto.innerText = "Fase 3 de 3: Aplicación";
    }

    document.getElementById('c-step' + pasoActual).classList.remove('active');
    document.getElementById('c-step' + pasoSiguiente).classList.add('active');
}

function procesarBosquejoFinal() {
    sintonizarDatos();
    guardarBorradorManual();

    document.getElementById('barra-progreso-constructor').style.width = "100%";
    document.getElementById('indicador-etapa-texto').innerText = "📋 ¡Bosquejo Homilético Compilado!";

    const selectorLibro = document.getElementById('selector-libro');
    const nombreLibro = selectorLibro.value ? selectorLibro.options[selectorLibro.selectedIndex].text : "Pasaje General";

    let htmlBosquejo = `
        <div class="seccion-header">
            <span class="tag-disciplina">Sermón Terminado</span>
            <h2 style="font-size:2rem; color:var(--primary); margin-top:0.3rem;">${respuestasSermon.titulo_sermon.toUpperCase() || "MENSAJE EXPOSITIVO"}</h2>
            <p style="color:var(--text-muted); font-size:0.9rem;">Estructura: ${respuestasSermon.plantilla_usada.toUpperCase()} | Base: ${nombreLibro}</p>
        </div>
        <hr style="border:0; border-top:1px solid var(--border); margin:1.5rem 0;">
        
        <div style="line-height:1.8; font-size:1.1rem; color:var(--text);">
            <p style="margin-bottom:1.5rem;"><strong>I. INTRODUCCIÓN Y CONEXIÓN</strong><br>
            <span style="color:#4a5568; display:block; padding-left:15px; border-left:3px solid var(--accent); margin-top:0.5rem;">${respuestasSermon.apl_ilustracion}</span></p>
            
            <p style="margin-bottom:1.5rem;"><strong>II. CUERPO DE LA PROCLAMACIÓN</strong><br>
            <span style="display:block; padding-left:15px; margin-top:0.5rem;">
                <strong>1. El Fundamento Textual:</strong> A la luz del pasaje se detecta con claridad: ${respuestasSermon.obs_personajes}, donde la idea pivotante y repetitiva descansa sobre "${respuestasSermon.obs_repetidas}".<br><br>
                <strong>2. La Densidad Teológica:</strong> Esto implicaba de forma directa a la audiencia que ${respuestasSermon.int_original}. De allí se desprende que el carácter inmutable de Dios nos revela que Él es ${respuestasSermon.int_dios}.
            </span></p>
            
            <p style="margin-bottom:1.5rem;"><strong>III. APLICACIÓN PRÁCTICA Y LLAMADO</strong><br>
            <span style="color:#4a5568; display:block; padding-left:15px; border-left:3px solid var(--primary); margin-top:0.5rem;">${respuestasSermon.apl_vida}</span></p>
        </div>
    `;

    document.getElementById('pizarra-borrador-sermon').innerHTML = htmlBosquejo;
    document.getElementById('c-opciones-finales').classList.remove('oculto');
    
    if (window.innerWidth <= 1024) cambiarPestañaSermon('pizarra');
}

/**
 * EXPORTACIÓN A PDF TOTALMENTE OFFLINE Y LIMPIA
 * Crea un documento HTML temporal aislado en memoria con estilos CSS optimizados para impresión física o PDF nativo.
 */
function exportarAPDFLimpioOffline() {
    sintonizarDatos();
    const selectorLibro = document.getElementById('selector-libro');
    const nombreLibro = selectorLibro.value ? selectorLibro.options[selectorLibro.selectedIndex].text : "Pasaje General";
    
    const ventanaPdf = window.open('', '_blank', 'height=800,width=700');
    
    let htmlDocumento = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Bosquejo - ${respuestasSermon.titulo_sermon || 'Sin Titulo'}</title>
        <style>
            @page {
                size: letter;
                margin: 25mm 20mm 25mm 20mm;
            }
            body {
                font-family: 'Segoe UI', Arial, sans-serif;
                color: #1a202c;
                line-height: 1.6;
                padding: 0;
                margin: 0;
                font-size: 11pt;
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                border-bottom: 2px solid #2c3e50;
                padding-bottom: 10px;
            }
            .header h1 {
                font-size: 22pt;
                color: #2c3e50;
                margin: 0 0 5px 0;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            .header .meta {
                font-size: 10pt;
                color: #718096;
                font-style: italic;
            }
            .seccion {
                margin-bottom: 25px;
                page-break-inside: avoid;
            }
            .seccion-titulo {
                font-size: 13pt;
                font-weight: bold;
                color: #2c3e50;
                border-bottom: 1px solid #e2e8f0;
                padding-bottom: 4px;
                margin-bottom: 10px;
                text-transform: uppercase;
            }
            .contenido-bloque {
                padding-left: 15px;
                text-align: justify;
            }
            .sub-punto {
                margin-bottom: 12px;
            }
            /* Optimizar renderizado en blanco y negro */
            @media print {
                body { color: #000000; }
                .header { border-color: #000000; }
                .seccion-titulo { color: #000000; border-color: #000000; }
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>${respuestasSermon.titulo_sermon.toUpperCase() || "BOSQUEJO HOMILÉTICO"}</h1>
            <div class="meta">Estructura Homilética: ${respuestasSermon.plantilla_usada.toUpperCase()} | Base Bíblica: ${nombreLibro}</div>
        </div>

        <div class="seccion">
            <div class="seccion-titulo">I. Introducción y Conexión</div>
            <div class="contenido-bloque">${respuestasSermon.apl_ilustracion || '<em>Sin introducción registrada.</em>'}</div>
        </div>

        <div class="seccion">
            <div class="seccion-titulo">II. Cuerpo de la Proclamación</div>
            <div class="contenido-bloque">
                <div class="sub-punto">
                    <strong>1. Fundamento Textual y Observación:</strong><br>
                    ${respuestasSermon.obs_personajes || '---'}<br>
                    <em>Idea pivotante / Repeticiones:</em> ${respuestasSermon.obs_repetidas || '---'}
                </div>
                <div class="sub-punto" style="margin-top: 15px;">
                    <strong>2. Análisis Teológico e Interpretación:</strong><br>
                    <em>Contexto original:</em> ${respuestasSermon.int_original || '---'}<br>
                    <em>Revelación sobre el carácter de Dios:</em> ${respuestasSermon.int_dios || '---'}
                </div>
            </div>
        </div>

        <div class="seccion">
            <div class="seccion-titulo">III. Aplicación Homilética y Reto</div>
            <div class="contenido-bloque">${respuestasSermon.apl_vida || '<em>Sin aplicación registrada.</em>'}</div>
        </div>
    </body>
    </html>
    `;
    
    ventanaPdf.document.write(htmlDocumento);
    ventanaPdf.document.close();
    
    // Ejecuta el motor nativo de impresión del sistema operativo
    ventanaPdf.focus();
    setTimeout(() => {
        ventanaPdf.print();
        ventanaPdf.close();
    }, 250);
}

function activarModoPulpito() {
    document.getElementById('contenido-pulpito-texto').innerHTML = document.getElementById('pizarra-borrador-sermon').innerHTML;
    document.getElementById('capa-pulpito').style.display = "block";
}
function desactivarModoPulpito() { document.getElementById('capa-pulpito').style.display = "none"; }

function descargarSermonTexto() {
    const txt = `SERMÓN: ${respuestasSermon.titulo_sermon.toUpperCase()}\n\nI. INTRODUCCIÓN:\n${respuestasSermon.apl_ilustracion}\n\nII. CUERPO:\n- ${respuestasSermon.obs_personajes}\n- ${respuestasSermon.obs_repetidas}\n- ${respuestasSermon.int_original}\n- ${respuestasSermon.int_dios}\n\nIII. RETO:\n${respuestasSermon.apl_vida}`;
    const enc = document.createElement('a');
    enc.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt));
    enc.setAttribute('download', `Bosquejo.txt`);
    enc.click();
}

function reiniciarConstructor() {
    document.getElementById('c-opciones-finales').classList.add('oculto');
    document.getElementById('c-step1').classList.add('active');
    document.getElementById('c-step2').classList.remove('active');
    document.getElementById('c-step3').classList.remove('active');
    document.getElementById('barra-progreso-constructor').style.width = "33%";
    document.getElementById('indicador-etapa-texto').innerText = "Fase 1 de 3: Observación";
    
    document.getElementById('pizarra-borrador-sermon').innerHTML = `
        <div class="seccion-header">
            <h2>Púlpito Virtual e Hilado Homilético</h2>
        </div>
        <div style="text-align: center; color: var(--text-muted); padding: 6rem 1rem; font-style: italic; border: 2px dashed var(--border); border-radius: 8px; margin-top: 2rem;">📝 Completa las fases del embudo en el panel de la derecha para ver tu bosquejo final aquí listo para predicar.</div>
    `;
    prepararModuloConstructor();
}