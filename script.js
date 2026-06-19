const WHATSAPP_NUMBER = "5511970321742";
const INSTAGRAM_URL = "https://www.instagram.com/belingolife/";
const STORAGE_KEY = "belingolife-language";
const DEFAULT_LANGUAGE = "pt-BR";

const translations = {
  "pt-BR": {
    navLevels: "Níveis",
    navMethod: "Métodos",
    navFeedback: "Feedbacks",
    navContact: "Contato",
    heroMicro: "aulas online",
    heroSub: "with teacher Isa.",
    heroCta: "Falar no WhatsApp",
    aboutBold: "Eu estudo idiomas há 10 anos e o inglês é um deles!",
    aboutText: "Minhas séries favoritas são Friends, The Office e Brooklyn 99. Elas me ajudaram muito a aprender inglês de forma natural, e eu uso bastante esse tipo de referência nas aulas.",
    beliefOne: "A fluência é um <strong>processo</strong>, não um destino!",
    beliefTwo: "Todos os idiomas são complexos, extensos e envolvem muito mais do que apenas palavras.",
    beliefThree: "Aprender um idioma é um processo contínuo. Nosso objetivo é conseguir nos <strong>comunicar</strong> de forma confortável e <strong>natural!</strong>",
    courseOne: "As aulas são realizadas pelo Google Meet e têm duração de 1 hora.",
    courseTwo: "Como material, usaremos os livros da série <strong>American English File</strong>. Eu disponibilizo o material, então você não precisa comprar a versão física.",
    courseThree: "Os assuntos são adaptados para a sua necessidade e objetivo!",
    courseFour: "Por enquanto não há emissão de certificado.",
    courseSide: "Nas aulas para crianças e adolescentes, usamos materiais adaptados por idade e objetivo.",
    levelsTitle: "Níveis",
    methodPanelTitle: "Métodos",
    methodOneTitle: "Active recall",
    methodOneText: "Resgatar informações da memória antes de consultar o material.",
    methodTwoTitle: "Spaced repetition",
    methodTwoText: "Revisões inteligentes em intervalos para fixar vocabulário.",
    methodThreeTitle: "Input natural",
    methodThreeText: "Séries, vídeos e situações reais para aprender com contexto.",
    feedbackOpen: "Ver feedbacks",
    feedbackTitle: "Feedbacks reais",
    feedbackOne: "Feedbacks reais dos alunos.",
    feedbackTwo: "Mensagens, evolução e carinho dos alunos.",
    feedbackThree: "Aulas com material, organização e prática.",
    availabilityTitle: "Horários disponíveis:",
    availabilityText: "Consulte os horários atuais pelo WhatsApp.",
    investmentTitle: "Investimento:",
    investmentText: "Planos e disponibilidade sob consulta.",
    contactTitle: "Contato",
    contactText: "Escolha como você quer falar com a belingolife.",
    workQuestion: "Vamos conversar sobre seus objetivos em inglês?",
    whatsappDefault: "Olá! Quero saber mais sobre as aulas de inglês com a teacher Isa.",
    levels: {
      beginner: {
        label: "Iniciante",
        title: "Base para começar a falar",
        description: "Frases essenciais, pronúncia e estrutura para conversas simples.",
        example: "\"My name is Ana. I like coffee.\""
      },
      intermediate: {
        label: "Intermediário",
        title: "Conversas com mais confiança",
        description: "Vocabulário prático, tempos verbais e situações do dia a dia.",
        example: "\"I've been studying English for two years.\""
      },
      advanced: {
        label: "Avançado",
        title: "Fluência para objetivos reais",
        description: "Discussões, trabalho, estudos internacionais e correção de detalhes.",
        example: "\"I'd rather focus on speaking naturally.\""
      }
    }
  },
  "es-ES": {
    navLevels: "Niveles",
    navMethod: "Métodos",
    navFeedback: "Feedbacks",
    navContact: "Contacto",
    heroMicro: "clases online",
    heroSub: "with teacher Isa.",
    heroCta: "Hablar por WhatsApp",
    aboutBold: "Estudio idiomas desde hace 10 años y el inglés es uno de ellos!",
    aboutText: "Mis series favoritas son Friends, The Office y Brooklyn 99. Me ayudaron muchísimo a aprender inglés de forma natural, y uso mucho ese tipo de referencia en clase.",
    beliefOne: "La fluidez es un <strong>proceso</strong>, no un destino!",
    beliefTwo: "Todos los idiomas son complejos, extensos y son mucho más que palabras.",
    beliefThree: "Aprender un idioma es un proceso continuo. El objetivo es <strong>comunicarnos</strong> de forma cómoda y <strong>natural!</strong>",
    courseOne: "Las clases son por Google Meet y duran 1 hora.",
    courseTwo: "Usaremos libros de la serie <strong>American English File</strong>. El material será proporcionado, así que no necesitas comprar la versión física.",
    courseThree: "Los temas se adaptan a tu necesidad y objetivo!",
    courseFour: "Por ahora no se emite certificado.",
    courseSide: "Para niños y adolescentes usamos materiales adaptados por edad y objetivo.",
    levelsTitle: "Niveles",
    methodPanelTitle: "Métodos",
    methodOneTitle: "Active recall",
    methodOneText: "Recordar información antes de mirar el material.",
    methodTwoTitle: "Spaced repetition",
    methodTwoText: "Repasos inteligentes en intervalos para fijar vocabulario.",
    methodThreeTitle: "Input natural",
    methodThreeText: "Series, videos y situaciones reales para aprender con contexto.",
    feedbackOpen: "Ver feedbacks",
    feedbackTitle: "Feedbacks reales",
    feedbackOne: "Feedbacks reales de alumnos.",
    feedbackTwo: "Mensajes, evolución y cariño de los alumnos.",
    feedbackThree: "Clases con material, organización y práctica.",
    availabilityTitle: "Horarios disponibles:",
    availabilityText: "Consulta los horarios actuales por WhatsApp.",
    investmentTitle: "Inversión:",
    investmentText: "Planes y disponibilidad a consultar.",
    contactTitle: "Contacto",
    contactText: "Escoge cómo quieres hablar con belingolife.",
    workQuestion: "Hablemos sobre tus objetivos con el inglés.",
    whatsappDefault: "Hola! Quiero saber más sobre las clases de inglés con teacher Isa.",
    levels: {
      beginner: {
        label: "Principiante",
        title: "Base para empezar a hablar",
        description: "Frases esenciales, pronunciación y estructura para conversaciones simples.",
        example: "\"My name is Ana. I like coffee.\""
      },
      intermediate: {
        label: "Intermedio",
        title: "Conversaciones con más confianza",
        description: "Vocabulario práctico, tiempos verbales y situaciones cotidianas.",
        example: "\"I've been studying English for two years.\""
      },
      advanced: {
        label: "Avanzado",
        title: "Fluidez para objetivos reales",
        description: "Debates, trabajo, estudios internacionales y corrección de detalles.",
        example: "\"I'd rather focus on speaking naturally.\""
      }
    }
  },
  "fr-FR": {
    navLevels: "Niveaux",
    navMethod: "Méthodes",
    navFeedback: "Feedbacks",
    navContact: "Contact",
    heroMicro: "cours en ligne",
    heroSub: "with teacher Isa.",
    heroCta: "Parler sur WhatsApp",
    aboutBold: "J'étudie les langues depuis 10 ans, et l'anglais en fait partie!",
    aboutText: "Mes séries préférées sont Friends, The Office et Brooklyn 99. Elles m'ont beaucoup aidée à apprendre l'anglais naturellement, et j'utilise souvent ce type de référence en cours.",
    beliefOne: "La fluidité est un <strong>processus</strong>, pas une destination!",
    beliefTwo: "Toutes les langues sont complexes, vastes et représentent bien plus que des mots.",
    beliefThree: "Apprendre une langue est un processus continu. L'objectif est de <strong>communiquer</strong> avec aisance et de manière <strong>naturelle!</strong>",
    courseOne: "Les cours ont lieu sur Google Meet et durent 1 heure.",
    courseTwo: "Nous utiliserons les livres de la série <strong>American English File</strong>. Le matériel est fourni, il n'est donc pas nécessaire d'acheter la version physique.",
    courseThree: "Les sujets sont adaptés à vos besoins et à vos objectifs!",
    courseFour: "Pour le moment, aucun certificat n'est délivré.",
    courseSide: "Pour les enfants et adolescents, les supports sont adaptés à l'âge et à l'objectif.",
    levelsTitle: "Niveaux",
    methodPanelTitle: "Méthodes",
    methodOneTitle: "Active recall",
    methodOneText: "Retrouver l'information en mémoire avant de consulter le matériel.",
    methodTwoTitle: "Spaced repetition",
    methodTwoText: "Des révisions intelligentes à intervalles réguliers pour fixer le vocabulaire.",
    methodThreeTitle: "Input naturel",
    methodThreeText: "Séries, vidéos et situations réelles pour apprendre avec du contexte.",
    feedbackOpen: "Voir les feedbacks",
    feedbackTitle: "Feedbacks réels",
    feedbackOne: "Feedbacks réels des élèves.",
    feedbackTwo: "Messages, progrès et confiance des élèves.",
    feedbackThree: "Cours avec matériel, organisation et pratique.",
    availabilityTitle: "Disponibilités:",
    availabilityText: "Consultez les horaires actuels sur WhatsApp.",
    investmentTitle: "Investissement:",
    investmentText: "Formules et disponibilités sur demande.",
    contactTitle: "Contact",
    contactText: "Choisissez comment vous voulez parler avec belingolife.",
    workQuestion: "Parlons de vos objectifs en anglais.",
    whatsappDefault: "Bonjour! Je voudrais en savoir plus sur les cours d'anglais avec teacher Isa.",
    levels: {
      beginner: {
        label: "Débutant",
        title: "La base pour commencer à parler",
        description: "Phrases essentielles, prononciation et structure pour des conversations simples.",
        example: "\"My name is Ana. I like coffee.\""
      },
      intermediate: {
        label: "Intermédiaire",
        title: "Des conversations plus assurées",
        description: "Vocabulaire pratique, temps verbaux et situations du quotidien.",
        example: "\"I've been studying English for two years.\""
      },
      advanced: {
        label: "Avancé",
        title: "Fluidité pour des objectifs réels",
        description: "Discussions, travail, études internationales et correction des détails.",
        example: "\"I'd rather focus on speaking naturally.\""
      }
    }
  },
  "ko-KR": {
    navLevels: "레벨",
    navMethod: "학습법",
    navFeedback: "후기",
    navContact: "문의",
    heroMicro: "온라인 수업",
    heroSub: "with teacher Isa.",
    heroCta: "WhatsApp으로 문의하기",
    aboutBold: "저는 10년 동안 언어를 공부해 왔고, 영어도 그중 하나입니다!",
    aboutText: "제가 좋아하는 시리즈는 Friends, The Office, Brooklyn 99입니다. 자연스럽게 영어를 배우는 데 큰 도움이 되었고, 수업에서도 이런 자료를 자주 활용합니다.",
    beliefOne: "유창함은 목적지가 아니라 <strong>과정</strong>입니다!",
    beliefTwo: "모든 언어는 복잡하고 넓으며, 단어 그 이상을 담고 있습니다.",
    beliefThree: "언어 학습은 계속 이어지는 과정입니다. 목표는 편안하고 <strong>자연스럽게</strong> <strong>소통</strong>하는 것입니다!",
    courseOne: "수업은 Google Meet으로 진행되며 1시간 동안 진행됩니다.",
    courseTwo: "<strong>American English File</strong> 시리즈를 교재로 사용합니다. 자료는 제공되므로 종이책을 꼭 구매할 필요는 없습니다.",
    courseThree: "주제는 학생의 필요와 목표에 맞춰 조정됩니다!",
    courseFour: "현재는 수료증이 발급되지 않습니다.",
    courseSide: "어린이와 청소년 수업은 나이와 목표에 맞춘 자료를 사용합니다.",
    levelsTitle: "레벨",
    methodPanelTitle: "학습법",
    methodOneTitle: "Active recall",
    methodOneText: "자료를 보기 전에 기억에서 정보를 먼저 떠올리는 연습입니다.",
    methodTwoTitle: "Spaced repetition",
    methodTwoText: "간격을 두고 반복해 어휘를 오래 기억하도록 돕습니다.",
    methodThreeTitle: "자연스러운 입력",
    methodThreeText: "시리즈, 영상, 실제 상황을 통해 맥락 안에서 배웁니다.",
    feedbackOpen: "후기 보기",
    feedbackTitle: "실제 후기",
    feedbackOne: "학생들의 실제 후기입니다.",
    feedbackTwo: "학생들의 메시지, 성장, 따뜻한 피드백.",
    feedbackThree: "자료, 정리, 말하기 연습이 있는 수업.",
    availabilityTitle: "가능한 시간:",
    availabilityText: "현재 가능한 시간은 WhatsApp으로 문의해 주세요.",
    investmentTitle: "수업 안내:",
    investmentText: "수업 플랜과 가능 여부는 문의해 주세요.",
    contactTitle: "문의",
    contactText: "belingolife와 어떤 방식으로 이야기할지 선택해 주세요.",
    workQuestion: "영어 목표에 대해 함께 이야기해 볼까요?",
    whatsappDefault: "안녕하세요! teacher Isa의 영어 수업에 대해 더 알고 싶습니다.",
    levels: {
      beginner: {
        label: "초급",
        title: "말하기를 시작하는 기초",
        description: "간단한 대화를 위한 필수 표현, 발음, 문장 구조를 배웁니다.",
        example: "\"My name is Ana. I like coffee.\""
      },
      intermediate: {
        label: "중급",
        title: "더 자신 있는 대화",
        description: "실용 어휘, 시제, 일상 상황을 중심으로 연습합니다.",
        example: "\"I've been studying English for two years.\""
      },
      advanced: {
        label: "고급",
        title: "실제 목표를 위한 유창함",
        description: "토론, 업무, 국제 학업, 세부 표현 교정을 다룹니다.",
        example: "\"I'd rather focus on speaking naturally.\""
      }
    }
  },
  "zh-CN": {
    navLevels: "级别",
    navMethod: "方法",
    navFeedback: "反馈",
    navContact: "联系",
    heroMicro: "在线课程",
    heroSub: "with teacher Isa.",
    heroCta: "通过 WhatsApp 咨询",
    aboutBold: "我学习语言已经 10 年了，英语就是其中之一！",
    aboutText: "我最喜欢的剧集是 Friends、The Office 和 Brooklyn 99。它们帮助我用自然的方式学习英语，我在课堂中也经常使用这类素材。",
    beliefOne: "流利不是终点，而是一个<strong>过程</strong>！",
    beliefTwo: "每一种语言都复杂而丰富，远远不只是单词。",
    beliefThree: "学习语言是一个持续的过程。我们的目标是能够舒适、<strong>自然</strong>地<strong>交流</strong>！",
    courseOne: "课程通过 Google Meet 进行，每节课 1 小时。",
    courseTwo: "我们会使用 <strong>American English File</strong> 系列教材。资料会提供，所以不一定需要购买纸质版。",
    courseThree: "课程主题会根据你的需求和目标调整！",
    courseFour: "目前暂不提供证书。",
    courseSide: "儿童和青少年课程会根据年龄和目标使用合适的材料。",
    levelsTitle: "级别",
    methodPanelTitle: "学习方法",
    methodOneTitle: "Active recall",
    methodOneText: "在查看资料前，先主动从记忆中提取信息。",
    methodTwoTitle: "Spaced repetition",
    methodTwoText: "通过间隔复习，更稳固地记住词汇。",
    methodThreeTitle: "自然输入",
    methodThreeText: "通过剧集、视频和真实场景，在语境中学习。",
    feedbackOpen: "查看反馈",
    feedbackTitle: "真实反馈",
    feedbackOne: "学生的真实反馈。",
    feedbackTwo: "学生的信息、进步和鼓励。",
    feedbackThree: "有资料、有规划、有练习的课程。",
    availabilityTitle: "可预约时间：",
    availabilityText: "请通过 WhatsApp 咨询当前可用时间。",
    investmentTitle: "课程咨询：",
    investmentText: "课程方案和可预约情况请咨询。",
    contactTitle: "联系",
    contactText: "选择你想用哪种方式联系 belingolife。",
    workQuestion: "让我们聊聊你的英语目标。",
    whatsappDefault: "你好！我想了解 teacher Isa 的英语课程。",
    levels: {
      beginner: {
        label: "初级",
        title: "开始开口说英语的基础",
        description: "学习简单对话所需的核心句子、发音和结构。",
        example: "\"My name is Ana. I like coffee.\""
      },
      intermediate: {
        label: "中级",
        title: "更自信地进行对话",
        description: "练习实用词汇、时态和日常场景。",
        example: "\"I've been studying English for two years.\""
      },
      advanced: {
        label: "高级",
        title: "面向真实目标的流利表达",
        description: "练习讨论、工作、国际学习和表达细节。",
        example: "\"I'd rather focus on speaking naturally.\""
      }
    }
  },
  "ja-JP": {
    navLevels: "レベル",
    navMethod: "学習法",
    navFeedback: "感想",
    navContact: "連絡",
    heroMicro: "オンライン授業",
    heroSub: "with teacher Isa.",
    heroCta: "WhatsAppで相談する",
    aboutBold: "私は10年間言語を学んできました。英語もその一つです！",
    aboutText: "好きなドラマは Friends、The Office、Brooklyn 99 です。自然に英語を学ぶ大きな助けになり、授業でもこうした素材をよく使います。",
    beliefOne: "流暢さはゴールではなく、<strong>プロセス</strong>です！",
    beliefTwo: "どの言語も複雑で奥深く、単語だけではありません。",
    beliefThree: "言語学習は続いていくプロセスです。目標は心地よく、<strong>自然に</strong><strong>コミュニケーション</strong>できることです！",
    courseOne: "授業は Google Meet で行い、1回1時間です。",
    courseTwo: "<strong>American English File</strong> シリーズを教材として使います。資料はこちらで用意するため、紙の本を購入する必要はありません。",
    courseThree: "内容はあなたの目的や必要に合わせて調整します！",
    courseFour: "現在、修了証の発行はありません。",
    courseSide: "子ども・ティーン向けの授業では、年齢と目的に合わせた教材を使います。",
    levelsTitle: "レベル",
    methodPanelTitle: "学習法",
    methodOneTitle: "Active recall",
    methodOneText: "教材を見る前に、記憶から情報を取り出す練習です。",
    methodTwoTitle: "Spaced repetition",
    methodTwoText: "間隔をあけて復習し、語彙を定着させます。",
    methodThreeTitle: "自然なインプット",
    methodThreeText: "ドラマ、動画、実際の場面を通して文脈の中で学びます。",
    feedbackOpen: "感想を見る",
    feedbackTitle: "実際の感想",
    feedbackOne: "生徒からの実際の感想です。",
    feedbackTwo: "生徒のメッセージ、成長、あたたかい反応。",
    feedbackThree: "教材、整理、実践がある授業。",
    availabilityTitle: "空き時間：",
    availabilityText: "現在の空き状況は WhatsApp でお問い合わせください。",
    investmentTitle: "授業について：",
    investmentText: "プランと空き状況はお問い合わせください。",
    contactTitle: "連絡",
    contactText: "belingolife への連絡方法を選んでください。",
    workQuestion: "あなたの英語の目標について話しましょう。",
    whatsappDefault: "こんにちは！teacher Isa の英語レッスンについて知りたいです。",
    levels: {
      beginner: {
        label: "初級",
        title: "話し始めるための基礎",
        description: "簡単な会話に必要な表現、発音、文の形を学びます。",
        example: "\"My name is Ana. I like coffee.\""
      },
      intermediate: {
        label: "中級",
        title: "より自信を持って会話する",
        description: "実用的な語彙、時制、日常の場面を練習します。",
        example: "\"I've been studying English for two years.\""
      },
      advanced: {
        label: "上級",
        title: "実際の目標に向けた流暢さ",
        description: "議論、仕事、海外学習、細かな表現の修正を扱います。",
        example: "\"I'd rather focus on speaking naturally.\""
      }
    }
  }
};

const languageLabels = {
  "pt-BR": "PT",
  "es-ES": "ES",
  "fr-FR": "FR",
  "ko-KR": "KO",
  "zh-CN": "ZH",
  "ja-JP": "JA"
};

let currentLang = getSavedLanguage();

function getSavedLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return translations[saved] ? saved : DEFAULT_LANGUAGE;
}

function copy() {
  return translations[currentLang] || translations[DEFAULT_LANGUAGE];
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function applyLanguage(lang) {
  if (!translations[lang]) return;

  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  const currentLanguage = document.querySelector("#current-language");
  if (currentLanguage) currentLanguage.textContent = languageLabels[lang] || "PT";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = copy()[key];
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll("#language-menu button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  updateLevel(document.querySelector(".tab.active")?.dataset.level || "beginner");
  updateLinks();
}

function updateLinks() {
  const text = copy();
  const whatsappUrl = buildWhatsAppUrl(text.whatsappDefault);

  ["hero-whatsapp", "contact-whatsapp-link", "whatsapp-float", "work-whatsapp"].forEach((id) => {
    const link = document.getElementById(id);
    if (link) link.href = whatsappUrl;
  });

  document.querySelectorAll("[data-instagram-link], #contact-instagram-link").forEach((link) => {
    link.href = INSTAGRAM_URL;
  });
}

function togglePanel(id) {
  const panel = document.getElementById(id);
  if (!panel) return;

  const isOpen = panel.classList.toggle("is-open");
  panel.setAttribute("aria-hidden", String(!isOpen));

  document.querySelectorAll(`[data-target="${id}"]`).forEach((button) => {
    button.classList.toggle("is-active", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
  });

  if (isOpen) {
    window.setTimeout(() => panel.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }
}

function updateLevel(level) {
  const levels = copy().levels;
  const data = levels[level] || levels.beginner;

  const levelTag = document.getElementById("level-tag");
  const courseTitle = document.getElementById("course-title");
  const courseDescription = document.getElementById("course-description");
  const levelExample = document.getElementById("level-example");

  if (levelTag) levelTag.textContent = data.label;
  if (courseTitle) courseTitle.textContent = data.title;
  if (courseDescription) courseDescription.textContent = data.description;
  if (levelExample) levelExample.textContent = data.example;
}

function setupLanguageMenu() {
  const toggle = document.getElementById("language-toggle");
  const menu = document.getElementById("language-menu");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", (event) => {
    event.stopPropagation();
    const button = event.target.closest("button[data-lang]");
    if (!button) return;
    applyLanguage(button.dataset.lang);
    closeMenu();
  });

  document.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function setupPanels() {
  document.querySelectorAll(".panel-toggle").forEach((button) => {
    button.addEventListener("click", () => togglePanel(button.dataset.target));
  });
}

function setupLevelTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
      button.classList.add("active");
      updateLevel(button.dataset.level);
    });
  });
}

function setupScrollReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealGroups = [
    [".about-title, .beliefs h2, .course-title-block, .feedback-page h2, .availability-title, .work h2, .reveal-inner h2", "reveal-from-left"],
    [".about-copy, .belief-text, .course-copy, .course-side, .availability-copy, .work-contact, .level-card, .contact-card", "reveal-from-right"],
    [".about-collage .photo, .quote-card, .circle, .feedback-preview img, .feedback-card-pair, .method-grid article, .work img", "reveal-scale"],
    [".hero-cta, .feedback-open, .feedback-insta, .insta-chip", ""]
  ];

  const elements = [];
  revealGroups.forEach(([selector, variant]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (element.classList.contains("reveal-on-scroll")) return;
      element.classList.add("reveal-on-scroll");
      if (variant) element.classList.add(variant);
      element.style.setProperty("--reveal-delay", `${Math.min(index, 3) * 70}ms`);
      elements.push(element);
    });
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12
  });

  elements.forEach((element) => observer.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageMenu();
  setupPanels();
  setupLevelTabs();
  setupScrollReveal();
  applyLanguage(currentLang);
});
