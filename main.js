// 🔑 Tus API Keys aquí (reemplaza con las tuyas)
const GEMINI_KEY = "AIzaSyArz0HOBHd8XB73KegLzG-NGxt5vbl-z0o";
const DEEPSEEK_KEY = "sk-484e2f70916841d6bb3b9bd256055ee6";

// Mostrar resultados
function mostrarResultado(text) {
  document.getElementById("resultado").innerText = text;
}

// ==================
// 1️⃣ Buscador con Gemini
// ==================
async function buscar() {
  const query = document.getElementById("searchQuery").value;
  if(!query) return alert("Escribe algo para buscar");

  try {
    const res = await fetch("https://api.gemini.com/deepsearch", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GEMINI_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    });
    const data = await res.json();
    mostrarResultado(JSON.stringify(data, null, 2));
  } catch(err) {
    console.error(err);
    mostrarResultado("Error al comunicarse con Gemini.");
  }
}

// ==================
// 2️⃣ Interpelación Gemini
// ==================
async function interpelateGemini() {
  const text = document.getElementById("interpelateText").value;
  if(!text) return alert("Escribe un discurso");

  try {
    const res = await fetch("https://api.gemini.com/deepsearch", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GEMINI_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `Analiza este discurso de MUN y genera interpelación crítica estilo delegado: ${text}`
      })
    });
    const data = await res.json();
    mostrarResultado(JSON.stringify(data, null, 2));
  } catch(err) {
    console.error(err);
    mostrarResultado("Error al comunicarse con Gemini.");
  }
}

// ==================
// 3️⃣ Corrección de discursos (Deepsek)
// ==================
async function correctSpeech() {
  const text = document.getElementById("speechText").value;
  if(!text) return alert("Escribe un discurso");

  try {
    const res = await fetch("https://api.deepsek.com/analyze", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${DEEPSEEK_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text, mode: "speech_correction" })
    });
    const data = await res.json();
    mostrarResultado(JSON.stringify(data, null, 2));
  } catch(err) {
    console.error(err);
    mostrarResultado("Error al comunicarse con Deepsek.");
  }
}

// ==================
// 4️⃣ Desglose de tópicos (Deepsek)
// ==================
async function topicBreakdown() {
  const topic = document.getElementById("topicText").value;
  if(!topic) return alert("Escribe un tema");

  try {
    const res = await fetch("https://api.deepsek.com/analyze", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${DEEPSEEK_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic, mode: "topic_breakdown" })
    });
    const data = await res.json();
    mostrarResultado(JSON.stringify(data, null, 2));
  } catch(err) {
    console.error(err);
    mostrarResultado("Error al comunicarse con Deepsek.");
  }
}

// ==================
// 5️⃣ Corrección de documentos de posición (Deepsek)
// ==================
async function correctPosition() {
  const text = document.getElementById("positionText").value;
  if(!text) return alert("Escribe un documento");

  try {
    const res = await fetch("https://api.deepsek.com/analyze", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${DEEPSEEK_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text, mode: "position_correction" })
    });
    const data = await res.json();
    mostrarResultado(JSON.stringify(data, null, 2));
  } catch(err) {
    console.error(err);
    mostrarResultado("Error al comunicarse con Deepsek.");
  }
}
