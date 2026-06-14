const noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const scales = {
  "Major Pentatonic": [0, 2, 4, 7, 9],
  "Minor Pentatonic": [0, 3, 5, 7, 10],
  Dorian: [0, 2, 3, 5, 7, 9, 10],
  Lydian: [0, 2, 4, 6, 7, 9, 11],
  Blues: [0, 3, 5, 6, 7, 10],
  Phrygian: [0, 1, 3, 5, 7, 8, 10],
};

const instruments = [
  { id: "glass", name: "Glass Pad", role: "lead", wave: "sine", secondWave: "triangle", filterType: "bandpass", filter: 1700, q: 5, drive: 0.12, detune: 8, attack: 0.04, glide: 0.075, gain: 0.15, color: "#8bd3ff" },
  { id: "pluck", name: "Neon Pluck", role: "lead", wave: "triangle", secondWave: "square", filterType: "bandpass", filter: 2400, q: 7, drive: 0.22, detune: 4, attack: 0.008, glide: 0.045, gain: 0.14, color: "#ffd166" },
  { id: "acid", name: "Acid Line", role: "lead", wave: "sawtooth", secondWave: "sawtooth", filterType: "lowpass", filter: 1150, q: 11, drive: 0.72, detune: 11, attack: 0.01, glide: 0.09, gain: 0.12, color: "#47ead0" },
  { id: "brass", name: "Mini Brass", role: "lead", wave: "sawtooth", secondWave: "triangle", filterType: "lowpass", filter: 1500, q: 3, drive: 0.34, detune: -6, attack: 0.035, glide: 0.065, gain: 0.14, color: "#ff9f1c" },
  { id: "choir", name: "Vowel Choir", role: "lead", wave: "sine", secondWave: "sine", filterType: "bandpass", filter: 920, q: 8, drive: 0.08, detune: 16, attack: 0.12, glide: 0.12, gain: 0.16, color: "#b8f2e6" },
  { id: "chip", name: "Chiptune", role: "lead", wave: "square", secondWave: "square", filterType: "highpass", filter: 720, q: 1.5, drive: 0.3, detune: 0, attack: 0.004, glide: 0.025, gain: 0.1, color: "#f9f871" },
  { id: "sub", name: "Deep Sub", role: "bass", wave: "sine", secondWave: "triangle", filterType: "lowpass", filter: 440, q: 0.8, drive: 0.2, detune: 0, attack: 0.015, glide: 0.11, gain: 0.22, color: "#99f2c8" },
  { id: "fm", name: "FM Bell", role: "lead", wave: "sine", secondWave: "sine", filterType: "bandpass", filter: 2100, q: 9, drive: 0.04, detune: 702, attack: 0.01, glide: 0.055, gain: 0.13, color: "#cdb4db" },
  { id: "organ", name: "Warm Organ", role: "lead", wave: "triangle", secondWave: "sine", filterType: "lowpass", filter: 1800, q: 1.4, drive: 0.18, detune: 1200, attack: 0.025, glide: 0.06, gain: 0.15, color: "#f2cc8f" },
  { id: "strings", name: "Soft Strings", role: "lead", wave: "sawtooth", secondWave: "sine", filterType: "lowpass", filter: 1050, q: 2, drive: 0.1, detune: 7, attack: 0.16, glide: 0.13, gain: 0.15, color: "#a1e8af" },
  { id: "flute", name: "Air Flute", role: "lead", wave: "sine", secondWave: "triangle", filterType: "bandpass", filter: 1350, q: 10, drive: 0.04, detune: 19, attack: 0.06, glide: 0.1, gain: 0.13, color: "#5bc0eb" },
  { id: "wobble", name: "Wobble Bass", role: "bass", wave: "sawtooth", secondWave: "square", filterType: "lowpass", filter: 620, q: 6, drive: 0.58, detune: -12, attack: 0.012, glide: 0.08, gain: 0.17, color: "#ef476f" },
  { id: "marimba", name: "Wood Mallet", role: "lead", wave: "triangle", secondWave: "sine", filterType: "bandpass", filter: 1750, q: 6, drive: 0.08, detune: 1200, attack: 0.006, glide: 0.035, gain: 0.12, color: "#ffa69e" },
  { id: "noisevox", name: "Noise Vox", role: "texture", wave: "sine", secondWave: "triangle", filterType: "bandpass", filter: 980, q: 12, drive: 0.16, detune: 12, attack: 0.08, glide: 0.1, gain: 0.12, noise: 0.18, color: "#81b29a" },
  { id: "reese", name: "Reese Bass", role: "bass", wave: "sawtooth", secondWave: "sawtooth", filterType: "lowpass", filter: 760, q: 2.4, drive: 0.46, detune: 22, attack: 0.025, glide: 0.14, gain: 0.16, color: "#ff5d73" },
  { id: "spark", name: "Spark Lead", role: "lead", wave: "triangle", secondWave: "sine", filterType: "highpass", filter: 960, q: 2.5, drive: 0.18, detune: 2400, attack: 0.012, glide: 0.05, gain: 0.12, color: "#faf3dd" },
];

const moods = [
  {
    id: "dream",
    label: "梦幻",
    line: "Dream pop · pentatonic · glass pads",
    root: 0,
    scale: "Major Pentatonic",
    bpm: 96,
    theme: ["#8bd3ff", "#ffb86b", "#99f2c8", "#101316"],
    kit: { lead: "Glass", bass: "Round", drum: "Soft kit", texture: "Air" },
    instruments: ["glass", "choir", "strings", "flute", "sub", "fm", "noisevox", "spark"],
    sound: { wave: "sine", filter: 1500, delay: 0.33, drive: 0.25 },
  },
  {
    id: "bright",
    label: "快乐",
    line: "Future funk · lydian · plucks",
    root: 5,
    scale: "Lydian",
    bpm: 122,
    theme: ["#ffd166", "#2ec4b6", "#ef476f", "#12131a"],
    kit: { lead: "Pluck", bass: "Bounce", drum: "Clap kit", texture: "Vinyl" },
    instruments: ["pluck", "marimba", "organ", "spark", "wobble", "chip", "brass", "fm"],
    sound: { wave: "triangle", filter: 2300, delay: 0.21, drive: 0.38 },
  },
  {
    id: "calm",
    label: "平静",
    line: "Lo-fi · dorian · mellow keys",
    root: 9,
    scale: "Dorian",
    bpm: 82,
    theme: ["#a1e8af", "#f2cc8f", "#81b29a", "#111614"],
    kit: { lead: "Keys", bass: "Warm", drum: "Dust kit", texture: "Tape" },
    instruments: ["organ", "strings", "flute", "glass", "sub", "noisevox", "fm", "marimba"],
    sound: { wave: "triangle", filter: 1000, delay: 0.28, drive: 0.18 },
  },
  {
    id: "dark",
    label: "暗涌",
    line: "Bass house · phrygian · gritty mono",
    root: 2,
    scale: "Phrygian",
    bpm: 128,
    theme: ["#ff5d73", "#47ead0", "#f9f871", "#111116"],
    kit: { lead: "Acid", bass: "Sub", drum: "Club kit", texture: "Static" },
    instruments: ["acid", "reese", "wobble", "chip", "brass", "sub", "noisevox", "spark"],
    sound: { wave: "sawtooth", filter: 860, delay: 0.14, drive: 0.72 },
  },
  {
    id: "focus",
    label: "专注",
    line: "Minimal techno · minor · clean pulse",
    root: 7,
    scale: "Minor Pentatonic",
    bpm: 112,
    theme: ["#b8f2e6", "#ffa69e", "#faf3dd", "#0e1516"],
    kit: { lead: "Pulse", bass: "Tight", drum: "Dry kit", texture: "Click" },
    instruments: ["chip", "pluck", "organ", "sub", "glass", "marimba", "fm", "reese"],
    sound: { wave: "square", filter: 1250, delay: 0.11, drive: 0.44 },
  },
  {
    id: "fire",
    label: "热烈",
    line: "Trap fusion · blues · brass lead",
    root: 10,
    scale: "Blues",
    bpm: 140,
    theme: ["#ff9f1c", "#5bc0eb", "#e71d36", "#15110d"],
    kit: { lead: "Brass", bass: "808", drum: "Trap kit", texture: "Crowd" },
    instruments: ["brass", "wobble", "acid", "reese", "chip", "spark", "sub", "marimba"],
    sound: { wave: "sawtooth", filter: 1700, delay: 0.18, drive: 0.58 },
  },
];

const intervals = [
  { name: "小二度", semis: 1 },
  { name: "大二度", semis: 2 },
  { name: "小三度", semis: 3 },
  { name: "大三度", semis: 4 },
  { name: "纯四度", semis: 5 },
  { name: "增四度", semis: 6 },
  { name: "纯五度", semis: 7 },
  { name: "小六度", semis: 8 },
];

const state = {
  audio: null,
  master: null,
  delay: null,
  feedback: null,
  fxGain: null,
  limiter: null,
  analyser: null,
  audioUnlocked: false,
  mood: moods[0],
  activeLayer: "lead",
  activeInstrument: "glass",
  continuousVoice: null,
  padPointerId: null,
  gridPointerId: null,
  mode: "play",
  root: 0,
  scaleName: "Major Pentatonic",
  octave: 3,
  snap: true,
  lastPadKey: "",
  lastTextureAt: 0,
  lastDrumAt: 0,
  lastVisualAt: 0,
  beatOn: false,
  beatTimer: 0,
  beatStep: 0,
  score: 0,
  streak: 0,
  challenge: null,
  particles: [],
};

const els = {
  app: document.querySelector(".app"),
  moodButtons: document.getElementById("moodButtons"),
  moodLine: document.getElementById("moodLine"),
  audioButton: document.getElementById("audioButton"),
  beatButton: document.getElementById("beatButton"),
  bpmControl: document.getElementById("bpmControl"),
  bpmValue: document.getElementById("bpmValue"),
  fxControl: document.getElementById("fxControl"),
  fxValue: document.getElementById("fxValue"),
  padStage: document.getElementById("padStage"),
  touchRipple: document.getElementById("touchRipple"),
  noteName: document.getElementById("noteName"),
  instrumentName: document.getElementById("instrumentName"),
  instrumentDeck: document.getElementById("instrumentDeck"),
  rootSelect: document.getElementById("rootSelect"),
  scaleSelect: document.getElementById("scaleSelect"),
  octaveControl: document.getElementById("octaveControl"),
  octaveValue: document.getElementById("octaveValue"),
  snapToggle: document.getElementById("snapToggle"),
  noteGrid: document.getElementById("noteGrid"),
  gridNote: document.getElementById("gridNote"),
  gridHint: document.getElementById("gridHint"),
  earBoard: document.getElementById("earBoard"),
  scoreValue: document.getElementById("scoreValue"),
  streakValue: document.getElementById("streakValue"),
  earPrompt: document.getElementById("earPrompt"),
  playChallenge: document.getElementById("playChallenge"),
  nextChallenge: document.getElementById("nextChallenge"),
  answerGrid: document.getElementById("answerGrid"),
  visualCanvas: document.getElementById("visualCanvas"),
};

let canvasCtx = els.visualCanvas.getContext("2d");

function init() {
  buildMoodButtons();
  buildSelectors();
  buildNoteGrid();
  buildAnswers();
  setMood(moods[0].id);
  bindEvents();
  updateAudioButton();
  resizeCanvas();
  newChallenge();
  requestAnimationFrame(drawVisuals);
}

function bindEvents() {
  document.querySelectorAll(".mode-tab").forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  els.audioButton.addEventListener("click", async () => {
    els.audioButton.disabled = true;
    els.audioButton.textContent = "开启中";
    try {
      const wasUnlocked = state.audioUnlocked;
      const ready = await ensureAudio();
      updateAudioButton();
      if (ready && !wasUnlocked) {
        tapFeedback(72, "lead", 0.28, 0.09);
      }
    } catch (error) {
      console.warn("Audio start was blocked by the browser.", error);
      els.audioButton.textContent = "再点开启";
    } finally {
      els.audioButton.disabled = false;
    }
  });

  els.beatButton.addEventListener("click", async () => {
    const ready = await ensureAudio();
    updateAudioButton();
    if (!ready) return;
    state.beatOn = !state.beatOn;
    els.beatButton.classList.toggle("is-active", state.beatOn);
    els.beatButton.setAttribute("aria-pressed", state.beatOn ? "true" : "false");
    if (state.beatOn) scheduleBeat();
    else window.clearTimeout(state.beatTimer);
  });

  els.bpmControl.addEventListener("input", () => {
    els.bpmValue.value = els.bpmControl.value;
  });

  els.fxControl.addEventListener("input", () => {
    els.fxValue.value = els.fxControl.value;
    updateFx();
  });

  els.rootSelect.addEventListener("change", () => {
    state.root = Number(els.rootSelect.value);
    buildNoteGrid();
  });

  els.scaleSelect.addEventListener("change", () => {
    state.scaleName = els.scaleSelect.value;
    buildNoteGrid();
  });

  els.octaveControl.addEventListener("input", () => {
    state.octave = Number(els.octaveControl.value);
    els.octaveValue.value = state.octave;
    buildNoteGrid();
  });

  els.snapToggle.addEventListener("change", () => {
    state.snap = els.snapToggle.checked;
  });

  els.padStage.addEventListener("pointerdown", handlePadPointer);
  els.padStage.addEventListener("pointermove", handlePadPointer);
  els.padStage.addEventListener("pointerup", stopPadPerformance);
  els.padStage.addEventListener("pointercancel", stopPadPerformance);
  els.padStage.addEventListener("lostpointercapture", stopPadPerformance);

  els.instrumentDeck.addEventListener("click", async (event) => {
    const button = event.target.closest(".deck-pad");
    if (!button) return;
    state.activeInstrument = button.dataset.instrument;
    state.activeLayer = getInstrument().role;
    renderInstrumentDeck();
    const ready = await ensureAudio();
    updateAudioButton();
    if (!ready) return;
    const note = noteFromDegree(2 + Math.floor(Math.random() * 4), state.octave + 1);
    triggerLayer(note, state.activeLayer, 0.58, 0.32, state.audio.currentTime, getInstrument());
    els.instrumentName.textContent = getInstrument().name;
  });

  els.noteGrid.addEventListener("pointerdown", handleGridPointer);
  els.noteGrid.addEventListener("pointermove", handleGridPointer);
  els.noteGrid.addEventListener("pointerup", stopGridPerformance);
  els.noteGrid.addEventListener("pointercancel", stopGridPerformance);
  els.noteGrid.addEventListener("lostpointercapture", stopGridPerformance);

  els.playChallenge.addEventListener("click", async () => {
    const ready = await ensureAudio();
    updateAudioButton();
    if (!ready) return;
    playChallenge();
  });
  els.nextChallenge.addEventListener("click", () => newChallenge());

  window.addEventListener("resize", resizeCanvas);
  document.addEventListener("visibilitychange", updateAudioButton);
  window.addEventListener("pageshow", updateAudioButton);
}

function buildMoodButtons() {
  els.moodButtons.innerHTML = "";
  moods.forEach((mood) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mood-button";
    button.dataset.mood = mood.id;
    button.textContent = mood.label;
    button.addEventListener("click", () => setMood(mood.id));
    els.moodButtons.append(button);
  });
}

function renderInstrumentDeck() {
  const selectedIds = state.mood.instruments || instruments.slice(0, 8).map((instrument) => instrument.id);
  els.instrumentDeck.innerHTML = "";
  selectedIds.forEach((id) => {
    const instrument = instruments.find((item) => item.id === id) || instruments[0];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "deck-pad";
    button.dataset.instrument = instrument.id;
    button.style.setProperty("--pad-color", instrument.color);
    button.classList.toggle("is-active", state.activeInstrument === instrument.id);

    const role = document.createElement("span");
    role.textContent = instrument.role === "bass" ? "Bass" : instrument.role === "texture" ? "Texture" : "Tone";
    const name = document.createElement("b");
    name.textContent = instrument.name;
    button.append(role, name);
    els.instrumentDeck.append(button);
  });
}

function buildSelectors() {
  noteNames.forEach((name, index) => {
    const option = new Option(name, String(index));
    els.rootSelect.add(option);
  });

  Object.keys(scales).forEach((name) => {
    els.scaleSelect.add(new Option(name, name));
  });
}

function buildNoteGrid() {
  els.noteGrid.innerHTML = "";
  const visibleCols = window.matchMedia("(max-width: 620px)").matches ? 12 : 16;
  els.gridHint.textContent = `${visibleCols} x 12`;
  for (let row = 0; row < 12; row += 1) {
    for (let col = 0; col < visibleCols; col += 1) {
      const degree = 11 - row;
      const octave = state.octave + Math.floor((col + degree) / scales[state.scaleName].length / 2);
      const midi = noteFromDegree(degree + col, octave);
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      cell.dataset.midi = midi;
      cell.dataset.col = col;
      cell.dataset.row = row;
      const label = midiToName(midi);
      cell.textContent = col % 2 === 0 ? label : "";
      if (midi % 12 === state.root) cell.classList.add("root");
      els.noteGrid.append(cell);
    }
  }
}

function buildAnswers() {
  els.answerGrid.innerHTML = "";
  intervals.forEach((interval) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = interval.name;
    button.addEventListener("click", () => answer(interval.semis, button));
    els.answerGrid.append(button);
  });
}

function setMode(mode) {
  state.mode = mode;
  els.app.dataset.mode = mode;
  document.querySelectorAll(".mode-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
  document.querySelectorAll(".mode-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `${mode === "play" ? "play" : mode}Panel`);
  });
  if (mode === "play") resizeCanvas();
}

function setMood(id) {
  const mood = moods.find((item) => item.id === id) || moods[0];
  state.mood = mood;
  state.root = mood.root;
  state.scaleName = mood.scale;
  state.activeInstrument = mood.instruments?.[0] || state.activeInstrument;
  state.activeLayer = getInstrument().role;
  els.rootSelect.value = String(mood.root);
  els.scaleSelect.value = mood.scale;
  els.bpmControl.value = mood.bpm;
  els.bpmValue.value = mood.bpm;
  els.moodLine.textContent = mood.line;
  els.instrumentName.textContent = getInstrument().name;
  document.querySelectorAll(".mood-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mood === id);
  });

  const [accent, accent2, accent3, bg] = mood.theme;
  document.documentElement.style.setProperty("--accent", accent);
  document.documentElement.style.setProperty("--accent-2", accent2);
  document.documentElement.style.setProperty("--accent-3", accent3);
  document.documentElement.style.setProperty("--bg", bg);
  updateFx();
  renderInstrumentDeck();
  buildNoteGrid();
}

async function ensureAudio() {
  if (!state.audio) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    state.audio = new AudioContext();

    state.master = state.audio.createGain();
    state.master.gain.value = 1.05;
    state.delay = state.audio.createDelay(0.8);
    state.feedback = state.audio.createGain();
    state.fxGain = state.audio.createGain();
    state.limiter = state.audio.createDynamicsCompressor();
    state.analyser = state.audio.createAnalyser();
    state.analyser.fftSize = 256;
    state.limiter.threshold.value = -8;
    state.limiter.knee.value = 8;
    state.limiter.ratio.value = 6;
    state.limiter.attack.value = 0.004;
    state.limiter.release.value = 0.12;

    state.delay.delayTime.value = state.mood.sound.delay;
    state.feedback.gain.value = 0.28;
    state.fxGain.gain.value = Number(els.fxControl.value) / 100;

    state.delay.connect(state.feedback);
    state.feedback.connect(state.delay);
    state.delay.connect(state.fxGain);
    state.fxGain.connect(state.master);
    state.master.connect(state.analyser);
    state.analyser.connect(state.limiter);
    state.limiter.connect(state.audio.destination);
  }

  if (state.audio.state === "suspended") {
    await Promise.race([
      state.audio.resume(),
      new Promise((resolve) => {
        window.setTimeout(resolve, 800);
      }),
    ]);
  }

  const ready = state.audio.state === "running";
  state.audioUnlocked = state.audioUnlocked || ready;
  return ready;
}

function updateAudioButton() {
  const ready = state.audio?.state === "running";
  els.audioButton.classList.toggle("is-active", ready);
  els.audioButton.setAttribute("aria-pressed", ready ? "true" : "false");
  if (els.audioButton.disabled) return;
  els.audioButton.textContent = ready ? "声音已开" : "点我开声";
}

function updateFx() {
  if (!state.fxGain || !state.delay || !state.feedback) return;
  const amount = Number(els.fxControl.value) / 100;
  state.fxGain.gain.setTargetAtTime(amount * 0.72, state.audio.currentTime, 0.02);
  state.delay.delayTime.setTargetAtTime(state.mood.sound.delay + amount * 0.18, state.audio.currentTime, 0.03);
  state.feedback.gain.setTargetAtTime(0.12 + amount * 0.36, state.audio.currentTime, 0.03);
}

async function handlePadPointer(event) {
  if (event.type !== "pointerdown" && state.padPointerId === null) return;
  if (state.padPointerId !== null && event.pointerId !== state.padPointerId) return;
  event.preventDefault();
  const ready = await ensureAudio();
  updateAudioButton();
  if (!ready) return;
  if (event.type === "pointerdown") {
    state.padPointerId = event.pointerId;
    els.padStage.setPointerCapture?.(event.pointerId);
  }

  const rect = els.padStage.getBoundingClientRect();
  const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
  const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
  const now = performance.now();

  els.padStage.style.setProperty("--touch-x", `${x * 100}%`);
  els.padStage.style.setProperty("--touch-y", `${y * 100}%`);
  els.touchRipple.style.setProperty("--touch-x", `${x * rect.width}px`);
  els.touchRipple.style.setProperty("--touch-y", `${y * rect.height}px`);

  const instrument = getInstrument();
  const layer = instrument.role;
  const octave = 2 + Math.floor((1 - y) * 3);
  const degreeFloat = (1 - y) * 10 + x * 5;
  const degree = state.snap ? Math.round(degreeFloat) : degreeFloat;
  const midi = noteFromDegree(degree, octave);
  const velocity = 0.24 + (1 - y) * 0.36 + Math.sin(x * Math.PI) * 0.18;
  const filterLift = 0.55 + x * 1.45;

  state.activeLayer = layer;
  els.noteName.textContent = midiToName(Math.round(midi));
  els.instrumentName.textContent = instrument.name;

  if (layer === "texture") {
    if (event.type === "pointerdown" || now - state.lastTextureAt > 95) {
      textureVoice(midi, velocity, 0.42, state.audio.currentTime, instrument);
      state.lastTextureAt = now;
      ripple();
    }
  } else {
    updateContinuousVoice(midi, velocity, x, filterLift, instrument);
  }

  if (event.type === "pointerdown" || now - state.lastVisualAt > 70) {
    spawnParticle(x, y, velocity);
    state.lastVisualAt = now;
  }

  if (x > 0.82 && now - state.lastDrumAt > 140) {
    triggerLayer(midi, "drum", velocity * 0.65, 0.12);
    state.lastDrumAt = now;
  }
}

function stopPadPerformance(event) {
  if (event?.pointerId && state.padPointerId !== null && event.pointerId !== state.padPointerId) return;
  stopContinuousVoice();
  state.padPointerId = null;
}

async function handleGridPointer(event) {
  if (event.type !== "pointerdown" && state.gridPointerId === null) return;
  if (state.gridPointerId !== null && event.pointerId !== state.gridPointerId) return;
  event.preventDefault();
  const ready = await ensureAudio();
  updateAudioButton();
  if (!ready) return;
  if (event.type === "pointerdown") {
    state.gridPointerId = event.pointerId;
    els.noteGrid.setPointerCapture?.(event.pointerId);
  }

  const target = document.elementFromPoint(event.clientX, event.clientY);
  const cell = target?.closest?.(".grid-cell");
  if (!cell || !els.noteGrid.contains(cell)) return;
  const midi = Number(cell.dataset.midi);
  const key = `${cell.dataset.col}:${cell.dataset.row}`;
  if (key === state.lastPadKey && event.type !== "pointerdown") return;

  els.noteGrid.querySelectorAll(".active").forEach((activeCell) => activeCell.classList.remove("active"));
  cell.classList.add("active");
  state.lastPadKey = key;
  els.gridNote.textContent = midiToName(midi);
  const x = clamp((Number(cell.dataset.col) + 0.5) / (window.matchMedia("(max-width: 620px)").matches ? 12 : 16), 0, 1);
  const instrument = getInstrument().role === "texture" ? instruments.find((item) => item.id === "glass") : getInstrument();
  updateContinuousVoice(midi, 0.72, x, 0.8 + x * 1.2, instrument);
}

function clearGridActive() {
  els.noteGrid.querySelectorAll(".active").forEach((cell) => cell.classList.remove("active"));
  state.lastPadKey = "";
}

function stopGridPerformance(event) {
  if (event?.pointerId && state.gridPointerId !== null && event.pointerId !== state.gridPointerId) return;
  stopContinuousVoice(0.08);
  state.gridPointerId = null;
  clearGridActive();
}

function getInstrument(id = state.activeInstrument) {
  return instruments.find((instrument) => instrument.id === id) || instruments[0];
}

function updateContinuousVoice(midi, velocity, x, filterLift, instrument = getInstrument()) {
  if (!state.audio) return;
  if (!state.continuousVoice || state.continuousVoice.instrumentId !== instrument.id) {
    stopContinuousVoice(0.03);
    state.continuousVoice = createContinuousVoice(instrument);
  }

  const ctx = state.audio;
  const voice = state.continuousVoice;
  const now = ctx.currentTime;
  const freq = midiToFreq(midi + (instrument.role === "bass" ? -12 : 0));
  const secondFreq = freq * (instrument.role === "bass" ? 0.5 : 1);
  const glide = instrument.glide || 0.07;
  const gain = velocity * (instrument.gain || 0.14);
  const filterFreq = clamp((instrument.filter || state.mood.sound.filter) * filterLift + velocity * 600, 120, 9000);

  voice.osc.frequency.setTargetAtTime(freq, now, glide);
  voice.osc2.frequency.setTargetAtTime(secondFreq, now, glide);
  voice.filter.frequency.setTargetAtTime(filterFreq, now, 0.035);
  voice.filter.Q.setTargetAtTime(instrument.q || 3, now, 0.04);
  voice.gain.gain.setTargetAtTime(gain, now, Math.max(0.01, instrument.attack || 0.03));
  voice.pan.pan.setTargetAtTime((x - 0.5) * 0.7, now, 0.05);

  if (voice.noiseGain) {
    voice.noiseGain.gain.setTargetAtTime((instrument.noise || 0) * velocity * 0.12, now, 0.05);
  }
}

function createContinuousVoice(instrument) {
  const ctx = state.audio;
  const osc = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  const shaper = ctx.createWaveShaper();
  const pan = ctx.createStereoPanner();

  osc.type = instrument.wave || state.mood.sound.wave;
  osc2.type = instrument.secondWave || "sine";
  osc.frequency.value = 220;
  osc2.frequency.value = 220;
  osc2.detune.value = instrument.detune || 0;
  filter.type = instrument.filterType || "bandpass";
  filter.frequency.value = instrument.filter || state.mood.sound.filter;
  filter.Q.value = instrument.q || 3;
  shaper.curve = makeDistortionCurve((instrument.drive ?? state.mood.sound.drive) * 180);
  shaper.oversample = "2x";
  gain.gain.value = 0.0001;

  osc.connect(filter);
  osc2.connect(filter);
  filter.connect(shaper);
  shaper.connect(gain);
  gain.connect(pan);
  pan.connect(state.master);
  pan.connect(state.delay);

  let noise = null;
  let noiseGain = null;
  if (instrument.noise) {
    noise = ctx.createBufferSource();
    noiseGain = ctx.createGain();
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
    noise.buffer = buffer;
    noise.loop = true;
    noiseGain.gain.value = 0.0001;
    noise.connect(noiseGain);
    noiseGain.connect(filter);
    noise.start();
  }

  osc.start();
  osc2.start();
  return { instrumentId: instrument.id, osc, osc2, gain, filter, shaper, pan, noise, noiseGain };
}

function stopContinuousVoice(release = 0.12) {
  if (!state.continuousVoice || !state.audio) return;
  const voice = state.continuousVoice;
  const now = state.audio.currentTime;
  voice.gain.gain.setTargetAtTime(0.0001, now, release);
  if (voice.noiseGain) voice.noiseGain.gain.setTargetAtTime(0.0001, now, release);
  window.setTimeout(() => {
    try {
      voice.osc.stop();
      voice.osc2.stop();
      voice.noise?.stop();
    } catch (error) {
      // Some browsers already stop released oscillators.
    }
  }, Math.max(80, release * 900));
  state.continuousVoice = null;
}

function triggerLayer(midi, layer, velocity = 0.5, duration = 0.28, when = state.audio.currentTime, instrument = getInstrument()) {
  if (layer === "drum") {
    const drumType = Math.round(midi) % 4;
    if (drumType === 0) kick(when, velocity);
    else if (drumType === 1) snare(when, velocity);
    else if (drumType === 2) hat(when, velocity);
    else clap(when, velocity);
    return;
  }

  if (layer === "bass") {
    synthVoice(midi - 12, velocity * 0.9, duration * 1.2, "bass", when, instrument);
    return;
  }

  if (layer === "texture") {
    textureVoice(midi, velocity * 0.72, duration * 1.8, when, instrument);
    return;
  }

  synthVoice(midi, velocity, duration, "lead", when, instrument);
}

function synthVoice(midi, velocity, duration, role, when, instrument = getInstrument()) {
  const ctx = state.audio;
  const freq = midiToFreq(midi);
  const osc = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  const shaper = ctx.createWaveShaper();
  const pan = ctx.createStereoPanner();
  const drive = (instrument.drive ?? state.mood.sound.drive) + (role === "bass" ? 0.15 : 0);

  osc.type = role === "bass" ? instrument.wave || "sine" : instrument.wave || state.mood.sound.wave;
  osc2.type = role === "bass" ? instrument.secondWave || "triangle" : instrument.secondWave || "sine";
  osc.frequency.setValueAtTime(freq, when);
  osc2.frequency.setValueAtTime(freq * (role === "bass" ? 0.5 : 1), when);
  osc2.detune.value = instrument.detune ?? (role === "bass" ? 0 : 5);
  filter.type = role === "bass" ? "lowpass" : instrument.filterType || "bandpass";
  filter.frequency.setValueAtTime((instrument.filter || state.mood.sound.filter) + velocity * 900, when);
  filter.Q.value = role === "bass" ? Math.min(instrument.q || 1, 5) : instrument.q || 4;
  shaper.curve = makeDistortionCurve(drive * 180);
  shaper.oversample = "2x";
  pan.pan.value = role === "bass" ? 0 : (Math.random() - 0.5) * 0.5;

  const attack = role === "bass" ? 0.006 : instrument.attack || 0.012;
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.002, velocity * (instrument.gain || 0.18)), when + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);

  osc.connect(filter);
  osc2.connect(filter);
  filter.connect(shaper);
  shaper.connect(gain);
  gain.connect(pan);
  pan.connect(state.master);
  pan.connect(state.delay);
  osc.start(when);
  osc2.start(when);
  osc.stop(when + duration + 0.05);
  osc2.stop(when + duration + 0.05);
}

function textureVoice(midi, velocity, duration, when, instrument = getInstrument()) {
  const ctx = state.audio;
  const noise = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  const pan = ctx.createStereoPanner();
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  }
  noise.buffer = buffer;
  filter.type = instrument.filterType === "lowpass" ? "lowpass" : "bandpass";
  filter.frequency.value = clamp(midiToFreq(midi) * 2.5, 220, 7400);
  filter.Q.value = instrument.q || 7;
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.002, velocity * 0.1), when + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
  pan.pan.value = (Math.random() - 0.5) * 0.9;
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(pan);
  pan.connect(state.master);
  pan.connect(state.delay);
  noise.start(when);
  noise.stop(when + duration);
}

function kick(when, velocity) {
  const ctx = state.audio;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(120, when);
  osc.frequency.exponentialRampToValueAtTime(38, when + 0.18);
  gain.gain.setValueAtTime(velocity * 0.58, when);
  gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.28);
  osc.connect(gain);
  gain.connect(state.master);
  osc.start(when);
  osc.stop(when + 0.3);
}

function snare(when, velocity) {
  noiseHit(when, velocity * 0.34, 0.18, 1900, "bandpass");
  tapFeedback(63, "lead", velocity * 0.18, 0.09, when);
}

function hat(when, velocity) {
  noiseHit(when, velocity * 0.2, 0.055, 7600, "highpass");
}

function clap(when, velocity) {
  [0, 0.018, 0.034].forEach((offset) => noiseHit(when + offset, velocity * 0.16, 0.08, 2400, "bandpass"));
}

function noiseHit(when, velocity, duration, frequency, type) {
  const ctx = state.audio;
  const source = ctx.createBufferSource();
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  source.buffer = buffer;
  filter.type = type;
  filter.frequency.value = frequency;
  filter.Q.value = 1.2;
  gain.gain.setValueAtTime(velocity, when);
  gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(state.master);
  source.start(when);
  source.stop(when + duration);
}

function tapFeedback(midi, layer = "lead", velocity = 0.4, duration = 0.18, when = state.audio?.currentTime || 0) {
  if (!state.audio) return;
  triggerLayer(midi, layer, velocity, duration, when);
}

function scheduleBeat() {
  if (!state.beatOn || !state.audio) return;
  const bpm = Number(els.bpmControl.value);
  const stepDur = 60 / bpm / 2;
  const now = state.audio.currentTime + 0.025;
  const step = state.beatStep % 8;

  if (step === 0 || step === 4) kick(now, 0.72);
  if (step === 2 || step === 6) snare(now, 0.56);
  if (step % 2 === 1) hat(now, 0.36);
  if (state.mood.id === "fire" && (step === 3 || step === 7)) hat(now + stepDur * 0.42, 0.3);
  if (state.mood.id === "dark" && step === 7) triggerLayer(noteFromDegree(0, 2), "bass", 0.46, 0.18, now);

  state.beatStep += 1;
  state.beatTimer = window.setTimeout(scheduleBeat, stepDur * 1000);
}

function noteFromDegree(degree, octave = state.octave) {
  if (!Number.isInteger(degree)) {
    const low = Math.floor(degree);
    const high = Math.ceil(degree);
    const mix = degree - low;
    return noteFromDegree(low, octave) + (noteFromDegree(high, octave) - noteFromDegree(low, octave)) * mix;
  }

  const scale = scales[state.scaleName] || scales[state.mood.scale];
  const normalized = ((degree % scale.length) + scale.length) % scale.length;
  const octaveShift = Math.floor(degree / scale.length);
  return 12 * (octave + 1 + octaveShift) + state.root + scale[normalized];
}

function midiToFreq(midi) {
  return 440 * 2 ** ((midi - 69) / 12);
}

function midiToName(midi) {
  return `${noteNames[midi % 12]}${Math.floor(midi / 12) - 1}`;
}

function makeDistortionCurve(amount) {
  const samples = 256;
  const curve = new Float32Array(samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < samples; i += 1) {
    const x = (i * 2) / samples - 1;
    curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
  }
  return curve;
}

function ripple() {
  els.touchRipple.classList.remove("is-on");
  void els.touchRipple.offsetWidth;
  els.touchRipple.classList.add("is-on");
}

function spawnParticle(x, y, velocity) {
  state.particles.push({
    x,
    y,
    r: 8 + velocity * 24,
    life: 1,
    vx: (Math.random() - 0.5) * 0.01,
    vy: -0.004 - velocity * 0.006,
  });
  if (state.particles.length > 80) state.particles.shift();
}

function resizeCanvas() {
  const rect = els.padStage.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  els.visualCanvas.width = Math.max(1, Math.floor(rect.width * dpr));
  els.visualCanvas.height = Math.max(1, Math.floor(rect.height * dpr));
  canvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  buildNoteGrid();
}

function drawVisuals() {
  const rect = els.padStage.getBoundingClientRect();
  canvasCtx.clearRect(0, 0, rect.width, rect.height);
  canvasCtx.globalCompositeOperation = "lighter";

  state.particles.forEach((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.life *= 0.94;
    const gradient = canvasCtx.createRadialGradient(
      particle.x * rect.width,
      particle.y * rect.height,
      0,
      particle.x * rect.width,
      particle.y * rect.height,
      particle.r * (1 + 1 - particle.life),
    );
    gradient.addColorStop(0, cssVar("--accent", 0.62 * particle.life));
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    canvasCtx.fillStyle = gradient;
    canvasCtx.beginPath();
    canvasCtx.arc(particle.x * rect.width, particle.y * rect.height, particle.r * 2, 0, Math.PI * 2);
    canvasCtx.fill();
  });
  state.particles = state.particles.filter((particle) => particle.life > 0.04);

  if (state.analyser) {
    const bins = new Uint8Array(state.analyser.frequencyBinCount);
    state.analyser.getByteFrequencyData(bins);
    const bars = 32;
    const barW = rect.width / bars;
    for (let i = 0; i < bars; i += 1) {
      const value = bins[i * 2] / 255;
      canvasCtx.fillStyle = cssVar(i % 2 ? "--accent-2" : "--accent", 0.12 + value * 0.28);
      canvasCtx.fillRect(i * barW, rect.height - value * rect.height * 0.34, barW * 0.6, value * rect.height * 0.34);
    }
  }

  canvasCtx.globalCompositeOperation = "source-over";
  requestAnimationFrame(drawVisuals);
}

function cssVar(name, alpha = 1) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (value.startsWith("#")) {
    const hex = value.slice(1);
    const int = parseInt(hex.length === 3 ? hex.replace(/(.)/g, "$1$1") : hex, 16);
    const r = (int >> 16) & 255;
    const g = (int >> 8) & 255;
    const b = int & 255;
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return value;
}

function newChallenge() {
  const rootMidi = 60 + Math.floor(Math.random() * 8);
  const interval = intervals[Math.floor(Math.random() * intervals.length)];
  state.challenge = { rootMidi, interval };
  els.earPrompt.textContent = midiToName(rootMidi);
  els.earBoard.classList.remove("is-correct", "is-wrong");
  document.querySelectorAll(".answer-button").forEach((button) => {
    button.classList.remove("correct", "wrong");
    button.disabled = false;
  });
}

function playChallenge() {
  if (!state.challenge) newChallenge();
  const now = state.audio.currentTime + 0.03;
  const { rootMidi, interval } = state.challenge;
  triggerLayer(rootMidi, "lead", 0.56, 0.42, now);
  triggerLayer(rootMidi + interval.semis, "lead", 0.56, 0.52, now + 0.62);
}

async function answer(semitones, button) {
  const ready = await ensureAudio();
  updateAudioButton();
  if (!ready) return;
  const correct = semitones === state.challenge.interval.semis;
  els.earBoard.classList.toggle("is-correct", correct);
  els.earBoard.classList.toggle("is-wrong", !correct);
  button.classList.add(correct ? "correct" : "wrong");
  if (correct) {
    state.score += 10 + state.streak * 2;
    state.streak += 1;
    triggerLayer(72, "texture", 0.5, 0.42);
    setTimeout(newChallenge, 620);
  } else {
    state.streak = 0;
    triggerLayer(45, "bass", 0.58, 0.25);
  }
  els.scoreValue.textContent = state.score;
  els.streakValue.textContent = state.streak;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

init();
