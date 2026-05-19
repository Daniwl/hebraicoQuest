// Dados embutidos para garantir funcionamento offline/sem servidor
const DEFAULT_DATABASE = [
    { "q": "<b>א</b>", "a": "<b>'aleph</b><br>Não tem som, é como o <i>h</i> em horta.", "cat": "alfabeto" },
    { "q": "<b>ב</b>", "a": "<b>Beth</b><br>Som de <b>\"b\"</b>.", "cat": "alfabeto" },
    { "q": "<b>ג</b>", "a": "<b>Guímel</b><br>Som de <b>\"g\"</b> (como em gato, nunca como em geleia).", "cat": "alfabeto" },
    { "q": "<b>ד</b>", "a": "<b>Dáleth</b><br>Som de <b>\"d\"</b>.", "cat": "alfabeto" },
    { "q": "<b>ה</b>", "a": "<b>He</b><br>Som de <b>\"h\"</b> (ou <i>h</i> em house).", "cat": "alfabeto" },
    { "q": "<b>ו</b>", "a": "<b>Waw</b><br>Som de <b>\"v\"</b> ou <b>\"w\"</b>.", "cat": "alfabeto" },
    { "q": "<b>ז</b>", "a": "<b>Zayin</b><br>Som de <b>\"z\"</b>.", "cat": "alfabeto" },
    { "q": "<b>ח</b>", "a": "<b>het</b><br>Som de um <b>\"r\"</b> gutural (como <i>ch</i> no alemão).", "cat": "alfabeto" },
    { "q": "<b>ט</b>", "a": "<b>teth</b><br>Som de <b>\"t\"</b>.", "cat": "alfabeto" },
    { "q": "<b>י</b>", "a": "<b>Yodh</b><br>Som de <b>\"y\"</b>.", "cat": "alfabeto" },
    { "q": "<b>כ</b>", "a": "<b>Kaph</b><br>Som de <b>\"k\"</b>.", "cat": "alfabeto" },
    { "q": "<b>ל</b>", "a": "<b>Lamedh</b><br>Som de <b>\"l\"</b>.", "cat": "alfabeto" },
    { "q": "<b>מ</b>", "a": "<b>Mem</b><br>Som de <b>\"m\"</b>.", "cat": "alfabeto" },
    { "q": "<b>נ</b>", "a": "<b>Nun</b><br>Som de <b>\"n\"</b>.", "cat": "alfabeto" },
    { "q": "<b>ס</b>", "a": "<b>samekh</b><br>Som de <b>\"s\"</b> (como em sapo).", "cat": "alfabeto" },
    { "q": "<b>ע</b>", "a": "<b>'ayin</b><br>Não tem som, é como o <i>h</i> em horta.", "cat": "alfabeto" },
    { "q": "<b>פ</b>", "a": "<b>pe</b><br>Som de <b>\"p\"</b>.", "cat": "alfabeto" },
    { "q": "<b>צ</b>", "a": "<b>tsade</b><br>Som de <b>\"ts\"</b> (como o <i>zz</i> em pizza).", "cat": "alfabeto" },
    { "q": "<b>ק</b>", "a": "<b>qoph</b><br>Som de <b>\"q\"</b>.", "cat": "alfabeto" },
    { "q": "<b>ר</b>", "a": "<b>resh</b><br>Som de <b>\"r\"</b> (como em caro, nunca como em rato).", "cat": "alfabeto" },
    { "q": "<b>שׁ</b>", "a": "<b>shin</b><br>Som de <b>\"sh\"</b> (como <i>ch</i>).", "cat": "alfabeto" },
    { "q": "<b>שׂ</b>", "a": "<b>sin</b><br>Som de <b>\"s\"</b> (como em sapo).", "cat": "alfabeto" },
    { "q": "<b>ת</b>", "a": "<b>taw</b><br>Som de <b>\"t\"</b>.", "cat": "alfabeto" },
    { "q": "<b>ך</b>", "a": "<b>Kaph Final</b>", "cat": "alfabeto" },
    { "q": "<b>ם</b>", "a": "<b>Mem Final</b>", "cat": "alfabeto" },
    { "q": "<b>ן</b>", "a": "<b>Nun Final</b>", "cat": "alfabeto" },
    { "q": "<b>ף</b>", "a": "<b>Pe Final</b>", "cat": "alfabeto" },
    { "q": "<b>ץ</b>", "a": "<b>Tsade Final</b>", "cat": "alfabeto" },
    { "q": "Forma final: <b>כ</b>", "a": "<b>ך</b>", "cat": "formafinal" },
    { "q": "Forma final: <b>מ</b>", "a": "<b>ם</b>", "cat": "formafinal" },
    { "q": "Forma final: <b>נ</b>", "a": "<b>ן</b>", "cat": "formafinal" },
    { "q": "Forma final: <b>פ</b>", "a": "<b>ף</b>", "cat": "formafinal" },
    { "q": "Forma final: <b>צ</b>", "a": "<b>ץ</b>", "cat": "formafinal" },
    { "q": "Som do <b>ב</b>", "a": "<b>V</b>", "cat": "som" },
    { "q": "Som do <b>בּ</b>", "a": "<b>B</b>", "cat": "som" },
    { "q": "Som do <b>ג</b>", "a": "<b>G</b>", "cat": "som" },
    { "q": "Som do <b>גּ</b>", "a": "<b>G</b>", "cat": "som" },
    { "q": "Som do <b>ד</b>", "a": "<b>D</b>", "cat": "som" },
    { "q": "Som do <b>דּ</b>", "a": "<b>D</b>", "cat": "som" },
    { "q": "Som do <b>כ</b>", "a": "<b>k</b> (como <i>h</i> gutural) / <b>C</b>", "cat": "som" },
    { "q": "Som do <b>כּ</b>", "a": "<b>K</b>", "cat": "som" },
    { "q": "Som do <b>פ</b>", "a": "<b>F</b>", "cat": "som" },
    { "q": "Som do <b>פּ</b>", "a": "<b>P</b>", "cat": "som" },
    { "q": "Som do <b>ת</b>", "a": "<b>T</b>", "cat": "som" },
    { "q": "Som do <b>תּ</b>", "a": "<b>T</b>", "cat": "som" },
    { "q": "<b>כ</b> é igual a:", "a": "<b>ק</b>", "cat": "identico" },
    { "q": "<b>ת</b> é igual a:", "a": "<b>ט</b>", "cat": "identico" },
    { "q": "<b>ב</b> é igual a:", "a": "<b>ו</b>", "cat": "identico" },
    { "q": "<b>ע</b> é igual a:", "a": "<b>א</b>", "cat": "identico" },
    { "q": "<b>שׂ</b> (sin) é igual a:", "a": "<b>ס</b>", "cat": "identico" }
];

let cards = [];
let currentCard = null;
let currentAlts = [];
let isShowingFeedback = false;
let selectedCategory = 'alfabeto'; // Padrão inicial

const SRS_INTERVALS = [
    0, 
    10 * 60 * 1000,      // 10 min
    24 * 60 * 60 * 1000,  // 1 dia
    2 * 24 * 60 * 60 * 1000, // 2 dias
    4 * 24 * 60 * 60 * 1000, // 4 dias
    7 * 24 * 60 * 60 * 1000, // 7 dias
    15 * 24 * 60 * 60 * 1000, // 15 dias
    30 * 24 * 60 * 60 * 1000  // 30 dias
];

// Inicialização
function init() {
    const savedTheme = localStorage.getItem('hebraico_quest_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const baseCards = [];
    DEFAULT_DATABASE.forEach((item, index) => {
        baseCards.push({ ...item, id: `cat-${index}`, level: 0, nextReview: 0 });
        baseCards.push({ ...item, id: `mix-${index}`, cat: "Tudo Misturado", level: 0, nextReview: 0 });
    });

    const savedData = localStorage.getItem('hebraico_quest_data');
    if (savedData) {
        const loadedCards = JSON.parse(savedData);
        cards = baseCards.map(base => {
            const saved = loadedCards.find(s => s.id === base.id);
            return saved ? { ...base, ...saved } : base;
        });
    } else {
        cards = baseCards;
    }
    
    save();
    setupEventListeners();
    renderCategoryMenu();
    updateStats();
}

function setupEventListeners() {
    document.getElementById('theme-toggle').onclick = toggleTheme;
    document.getElementById('next-btn').onclick = nextQuestion;
    document.getElementById('back-to-menu-btn').onclick = showStartScreen;
    document.getElementById('finish-btn').onclick = showStartScreen;
    document.getElementById('reset-session-btn').onclick = resetProgress;

    const hebraicoToggle = document.getElementById('hebraico-menu-toggle');
    if (hebraicoToggle) {
        hebraicoToggle.onclick = () => {
            const section = hebraicoToggle.closest('.accordion-section');
            section.classList.toggle('open');
        };
    }

    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    const toggleMenu = () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    if (menuToggle) menuToggle.onclick = toggleMenu;
    if (overlay) overlay.onclick = toggleMenu;

    window.onkeydown = (e) => {
        const startScreen = document.getElementById('start-screen');
        if (startScreen && !startScreen.classList.contains('hidden')) return;
        if (e.key === 'Escape') { showStartScreen(); return; }
        if (isShowingFeedback) {
            if (e.key === 'Enter' || e.key === ' ') nextQuestion();
        } else {
            const completionScreen = document.getElementById('completion-screen');
            if (completionScreen.classList.contains('hidden')) {
                if (e.key === '1' || e.key === '2' || e.key === '3') {
                    const index = parseInt(e.key) - 1;
                    const buttons = document.querySelectorAll('.options-grid button');
                    if (buttons[index]) buttons[index].click();
                }
            }
        }
    };
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('hebraico_quest_theme', next);
}

function save() {
    localStorage.setItem('hebraico_quest_data', JSON.stringify(cards));
}

function updateStats() {
    const now = Date.now();
    const statsContainer = document.getElementById('stats-container');
    
    let categoriesToShow = [];
    if (selectedCategory) {
        categoriesToShow = [selectedCategory];
    }

    statsContainer.innerHTML = '';

    categoriesToShow.forEach(cat => {
        const catCards = cards.filter(c => c.cat === cat);
        const total = catCards.length;
        if (total === 0) return;

        const learned = catCards.filter(c => c.level > 0).length;
        const due = catCards.filter(c => c.nextReview <= now).length;
        const percent = Math.round((learned / total) * 100);

        const block = document.createElement('div');
        block.className = 'cat-stat-block';
        block.innerHTML = `
            <div class="cat-stat-header">
                <span>${cat}</span>
                <span class="cat-stat-due">${due} pendentes</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${percent}%;"></div>
            </div>
            <div class="cat-stat-label">${percent}% concluído (${learned}/${total})</div>
        `;
        statsContainer.appendChild(block);
    });
}

function showStartScreen() {
    document.getElementById('start-screen').classList.remove('hidden');
    document.getElementById('training-area').classList.add('hidden');
    
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    
    if (!selectedCategory) selectedCategory = 'alfabeto';
    
    const hebraicoSection = document.querySelector('.accordion-section');
    if (hebraicoSection) hebraicoSection.classList.add('open');

    updateActiveNavItem();
    updateStats();
}

function startTraining(category) {
    selectedCategory = category;
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('training-area').classList.remove('hidden');
    
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('sidebar-overlay').classList.remove('active');

    updateActiveNavItem();
    updateStats();
    nextQuestion();
}

function updateActiveNavItem() {
    document.querySelectorAll('.nav-btn-sidebar').forEach(btn => btn.classList.remove('active'));
    const activeId = selectedCategory === 'Tudo Misturado' ? 'nav-btn-all' : `nav-btn-${selectedCategory}`;
    const activeBtn = document.getElementById(activeId);
    if (activeBtn) activeBtn.classList.add('active');
}

function resetProgress() {
    cards.forEach(c => {
        if (c.cat === selectedCategory) {
            c.level = 0;
            c.nextReview = 0;
        }
    });
    save();
    updateStats();
    startTraining(selectedCategory);
}

function nextQuestion() {
    isShowingFeedback = false;
    const now = Date.now();
    
    const pool = cards.filter(c => c.cat === selectedCategory);
    let dueCards = pool.filter(c => c.nextReview <= now);
    
    if (dueCards.length === 0) {
        showCompletionScreen();
        return;
    }

    dueCards.sort(() => 0.5 - Math.random());
    currentCard = dueCards[0];

    renderCard();
}

function renderCard() {
    const trainingArea = document.getElementById('training-area');
    const codexCard = document.getElementById('flashcard');
    const content = document.getElementById('card-content');
    const optionsContainer = document.getElementById('options');
    const feedbackArea = document.getElementById('feedback-area');
    const completionScreen = document.getElementById('completion-screen');
    
    if (!currentCard) return;

    trainingArea.classList.remove('hidden');
    codexCard.classList.remove('hidden');
    optionsContainer.classList.remove('hidden');
    completionScreen.classList.add('hidden');
    feedbackArea.classList.add('hidden');

    content.innerHTML = currentCard.q;
    optionsContainer.innerHTML = '';
    
    currentAlts = generateAlternatives(currentCard);
    currentAlts.forEach((alt, i) => {
        const btn = document.createElement('button');
        const mainText = getAnswerText(alt);
        btn.innerHTML = `<span class="opt-number">${i+1}</span> <span>${mainText}</span>`;
        btn.onclick = () => handleAnswer(alt.id === currentCard.id);
        optionsContainer.appendChild(btn);
    });
}

function generateAlternatives(correctCard) {
    const correctText = getAnswerText(correctCard);
    
    const distractorsPool = cards.filter(c => 
        c.cat === correctCard.cat && 
        getAnswerText(c) !== correctText
    );

    const uniqueDistractors = [];
    const usedTexts = new Set([correctText]);
    
    const shuffledPool = distractorsPool.sort(() => 0.5 - Math.random());
    for (const d of shuffledPool) {
        const text = getAnswerText(d);
        if (!usedTexts.has(text)) {
            uniqueDistractors.push(d);
            usedTexts.add(text);
        }
        if (uniqueDistractors.length === 2) break;
    }

    const alts = [correctCard, ...uniqueDistractors];
    return alts.sort(() => 0.5 - Math.random());
}

function handleAnswer(isCorrect) {
    isShowingFeedback = true;
    const optionsContainer = document.getElementById('options');
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackMsg = document.getElementById('feedback-message');
    const fullAnswer = document.getElementById('full-answer');

    optionsContainer.classList.add('hidden');
    feedbackArea.classList.remove('hidden');

    if (isCorrect) {
        currentCard.level = Math.min(currentCard.level + 1, SRS_INTERVALS.length - 1);
        feedbackMsg.innerText = 'Excelente! Acertou.';
        feedbackArea.className = 'feedback-panel feedback-success';
    } else {
        currentCard.level = 0;
        feedbackMsg.innerText = 'Não foi dessa vez. Continue praticando!';
        feedbackArea.className = 'feedback-panel feedback-error';
    }

    currentCard.nextReview = Date.now() + SRS_INTERVALS[currentCard.level];
    fullAnswer.innerHTML = currentCard.a;

    save();
    updateStats();
}

function showCompletionScreen() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('training-area').classList.remove('hidden');
    document.getElementById('flashcard').classList.add('hidden');
    document.getElementById('options').classList.add('hidden');
    document.getElementById('feedback-area').classList.add('hidden');
    document.getElementById('completion-screen').classList.remove('hidden');
    document.getElementById('completion-msg').innerText = `Você revisou todos os cards de "${selectedCategory}" por enquanto.`;
}

function getAnswerText(card) {
    if (!card) return "";
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = card.a;
    const bold = tempDiv.querySelector('b');
    return bold ? bold.innerText : tempDiv.innerText.split('<br>')[0];
}

function renderCategoryMenu() {
    const categoryList = document.getElementById('category-list');
    const sidebarCategoryList = document.getElementById('category-menu-sidebar');
    const categories = [...new Set(DEFAULT_DATABASE.map(item => item.cat))];
    
    categoryList.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.innerText = cat;
        btn.onclick = () => startTraining(cat);
        categoryList.appendChild(btn);
    });

    sidebarCategoryList.innerHTML = '';
    const allBtn = document.createElement('button');
    allBtn.className = 'nav-btn-sidebar';
    allBtn.id = 'nav-btn-all';
    allBtn.innerText = 'Tudo Misturado';
    allBtn.onclick = () => startTraining('Tudo Misturado');
    sidebarCategoryList.appendChild(allBtn);

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn-sidebar';
        btn.id = `nav-btn-${cat}`;
        btn.innerText = cat;
        btn.onclick = () => startTraining(cat);
        sidebarCategoryList.appendChild(btn);
    });

    document.getElementById('train-all-btn').onclick = () => startTraining('Tudo Misturado');

    const hebraicoSection = document.querySelector('.accordion-section');
    if (hebraicoSection) hebraicoSection.classList.add('open');
}

init();
