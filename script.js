// Configuration
const WHATSAPP_NUMBER = "5500000000000";
const GMAIL_ADDRESS = "contacto@belingolife.com";
const INSTAGRAM_URL = "https://www.instagram.com/belingolife/";
const DEFAULT_LANGUAGE = "pt-BR";
const STORAGE_KEY = "belingolife-language";

// Language metadata
const languages = {
  "pt-BR": { short: "PT", flag: "flag-br" },
  "fr-FR": { short: "FR", flag: "flag-fr" },
  "es-ES": { short: "ES", flag: "flag-es" },
  "ko-KR": { short: "KO", flag: "flag-kr" },
  "zh-CN": { short: "ZH", flag: "flag-cn" },
  "ja-JP": { short: "JA", flag: "flag-jp" }
};

// Translation dictionary
const englishAsia = {
  navAria: "Main navigation", brandAria: "Go to home", menuAria: "Open menu", languageMenuAria: "Choose language", methodAria: "Method summary", levelsAria: "English levels", whatsappAria: "Open WhatsApp", instagramAria: "Instagram preview"
};

const translations = {
  "pt-BR": {
    title: "belingolife | Inglês online",
    navAria: "Navegação principal", brandAria: "Ir ao início", menuAria: "Abrir menu", languageMenuAria: "Selecionar idioma", methodAria: "Resumo do método", levelsAria: "Níveis de inglês", whatsappAria: "Abrir WhatsApp", instagramAria: "Prévia do Instagram",
    navCourses: "Níveis", navTrust: "Método", navTestimonials: "Resultados", navContact: "Contato",
    heroEyebrow: "Academia online internacional", heroTitle: "Inglês online com direção, prática e acompanhamento real.", heroText: "Aulas para quem quer falar melhor, estudar fora, trabalhar em inglês ou ganhar segurança em conversas reais.", heroPrimary: "Falar no WhatsApp", heroSecondary: "Ver níveis",
    methodLabel: "Estudo guiado", methodTitle: "Diagnóstico, prática conversacional e evolução por nível.", metricOne: "aulas online", metricTwo: "prática diária", metricThree: "foco no aluno",
    levelsEyebrow: "Níveis", levelsTitle: "Escolha seu ponto de partida",
    trustEyebrow: "Confiança", trustTitle: "Uma experiência pensada para evolução constante.", trustOneTitle: "Clases online", trustOneText: "Acompanhe de qualquer lugar com rotina flexível.", trustTwoTitle: "Profesores preparados", trustTwoText: "Aulas conduzidas com método, clareza e correção.", trustThreeTitle: "Práctica conversacional", trustThreeText: "Foco em situações reais, fala e confiança.", trustFourTitle: "Plan por nivel", trustFourText: "Cada aluno segue uma rota de evolução clara.",
    practiceEyebrow: "Prática rápida", practiceTitle: "Teste uma pergunta", quizLabel: "Mini test", nextQuestion: "Próxima",
    testimonialsEyebrow: "Resultados", testimonialsTitle: "Alunos que ganharam segurança para falar.", testimonialOneText: "As aulas me ajudaram a destravar em reuniões internacionais.", testimonialOneName: "Marina Costa", testimonialOneMeta: "Brasil · Trabalho", testimonialTwoText: "Gostei do plano por nível. Eu sabia exatamente o que estudar.", testimonialTwoName: "Lucas Meyer", testimonialTwoMeta: "França · Viagem", testimonialThreeText: "A prática conversacional foi o que mais mudou minha confiança.", testimonialThreeName: "Sofia Park", testimonialThreeMeta: "Coreia · Conversação",
    instagramEyebrow: "Instagram", instagramTitle: "Conteúdo de estudo e bastidores das aulas.", instagramButton: "Ver Instagram",
    contactEyebrow: "Contato", contactTitle: "Escolha como quer falar conosco.", contactText: "Envie sua consulta pelo canal que preferir.", nameLabel: "Nome", namePlaceholder: "Seu nome", levelLabel: "Nível", inquiryLabel: "Tipo de consulta", messageLabel: "Mensagem", messagePlaceholder: "Escreva sua dúvida...", submitButton: "Falar agora", selectPlaceholder: "Selecione", footerText: "Inglês online para objetivos reais.",
    openingWhatsApp: "Abrindo WhatsApp com sua mensagem...", almost: "Quase. A resposta correta é:", whatsappDefault: "Olá! Quero saber mais sobre as aulas online da belingolife.",
    inquiries: { trial: "Consulta", level: "Meu nível", pricing: "Preços", general: "Consulta geral" },
    whatsappForm: ({ name, level, inquiry, message }) => `Olá! Meu nome é ${name}. Quero falar sobre: ${inquiry}. Meu nível é ${level}. Mensagem: ${message}`,
    levels: { beginner: { label: "Iniciante", title: "Base para começar a falar", description: "Frases essenciais, pronúncia e estrutura para conversas simples." }, intermediate: { label: "Intermediário", title: "Conversas com mais confiança", description: "Vocabulário prático, tempos verbais e situações do dia a dia." }, advanced: { label: "Avançado", title: "Fluência para objetivos reais", description: "Discussões, trabalho, estudos internacionais e correção de detalhes." } },
    questions: [{ prompt: "Escolha a frase correta:", answers: ["She are ready", "She is ready", "She be ready"], correct: 1, feedback: "Correto. Com she usamos is." }, { prompt: "O que significa 'I need help'?", answers: ["Eu preciso de ajuda", "Eu tenho ajuda", "Eu vendo ajuda"], correct: 0, feedback: "Muito bem. Need significa precisar." }, { prompt: "Complete: They ___ English.", answers: ["study", "studies", "studying"], correct: 0, feedback: "Exato. Com they usamos o verbo na forma base." }]
  },
  "fr-FR": {
    title: "belingolife | Anglais en ligne",
    navAria: "Navigation principale", brandAria: "Aller au début", menuAria: "Ouvrir le menu", languageMenuAria: "Choisir la langue", methodAria: "Résumé de la méthode", levelsAria: "Niveaux d'anglais", whatsappAria: "Ouvrir WhatsApp", instagramAria: "Aperçu Instagram",
    navCourses: "Niveaux", navTrust: "Méthode", navTestimonials: "Résultats", navContact: "Contact",
    heroEyebrow: "Académie internationale en ligne", heroTitle: "Anglais en ligne avec direction, pratique et suivi réel.", heroText: "Des cours pour mieux parler, étudier à l'étranger, travailler en anglais ou gagner confiance.", heroPrimary: "Parler sur WhatsApp", heroSecondary: "Voir les niveaux",
    methodLabel: "Étude guidée", methodTitle: "Diagnostic, pratique conversationnelle et progression par niveau.", metricOne: "cours en ligne", metricTwo: "pratique quotidienne", metricThree: "focus élève",
    levelsEyebrow: "Niveaux", levelsTitle: "Choisissez votre point de départ",
    trustEyebrow: "Confiance", trustTitle: "Une expérience pensée pour progresser régulièrement.", trustOneTitle: "Cours en ligne", trustOneText: "Apprenez de partout avec une routine flexible.", trustTwoTitle: "Professeurs préparés", trustTwoText: "Des cours avec méthode, clarté et correction.", trustThreeTitle: "Pratique conversationnelle", trustThreeText: "Des situations réelles pour parler avec confiance.", trustFourTitle: "Plan par niveau", trustFourText: "Chaque élève suit une route claire.",
    practiceEyebrow: "Pratique rapide", practiceTitle: "Essayez une question", quizLabel: "Mini test", nextQuestion: "Suivante",
    testimonialsEyebrow: "Résultats", testimonialsTitle: "Des élèves qui parlent avec plus de confiance.", testimonialOneText: "Les cours m'ont aidée dans mes réunions internationales.", testimonialOneName: "Marina Costa", testimonialOneMeta: "Brésil · Travail", testimonialTwoText: "Le plan par niveau m'a donné une route claire.", testimonialTwoName: "Lucas Meyer", testimonialTwoMeta: "France · Voyage", testimonialThreeText: "La conversation a vraiment changé ma confiance.", testimonialThreeName: "Sofia Park", testimonialThreeMeta: "Corée · Conversation",
    instagramEyebrow: "Instagram", instagramTitle: "Contenu d'étude et coulisses des cours.", instagramButton: "Voir Instagram",
    contactEyebrow: "Contact", contactTitle: "Choisissez comment nous parler.", contactText: "Envoyez votre demande par le canal que vous préférez.", nameLabel: "Nom", namePlaceholder: "Votre nom", levelLabel: "Niveau", inquiryLabel: "Type de demande", messageLabel: "Message", messagePlaceholder: "Écrivez votre question...", submitButton: "Parler maintenant", selectPlaceholder: "Sélectionner", footerText: "Anglais en ligne pour des objectifs réels.",
    openingWhatsApp: "Ouverture de WhatsApp avec votre message...", almost: "Presque. La bonne réponse est :", whatsappDefault: "Bonjour ! Je voudrais en savoir plus sur les cours en ligne de belingolife.",
    inquiries: { trial: "Cours d'essai", level: "Mon niveau", pricing: "Prix", general: "Demande générale" },
    whatsappForm: ({ name, level, inquiry, message }) => `Bonjour ! Je m'appelle ${name}. Je veux parler de : ${inquiry}. Mon niveau est ${level}. Message : ${message}`,
    levels: { beginner: { label: "Débutant", title: "Les bases pour commencer à parler", description: "Phrases essentielles, prononciation et structure pour des conversations simples." }, intermediate: { label: "Intermédiaire", title: "Des conversations avec plus d'assurance", description: "Vocabulaire utile, temps verbaux et situations du quotidien." }, advanced: { label: "Avancé", title: "Fluidité pour des objectifs réels", description: "Discussions, travail, études internationales et correction des détails." } },
    questions: [{ prompt: "Choisissez la phrase correcte :", answers: ["She are ready", "She is ready", "She be ready"], correct: 1, feedback: "Correct. Avec she, on utilise is." }, { prompt: "Que signifie 'I need help' ?", answers: ["J'ai besoin d'aide", "J'ai de l'aide", "Je vends de l'aide"], correct: 0, feedback: "Très bien. Need signifie avoir besoin." }, { prompt: "Complétez : They ___ English.", answers: ["study", "studies", "studying"], correct: 0, feedback: "Exact. Avec they, on utilise la forme de base." }]
  },
  "es-ES": {
    title: "belingolife | Inglés online",
    navAria: "Navegación principal", brandAria: "Ir al inicio", menuAria: "Abrir menú", languageMenuAria: "Elegir idioma", methodAria: "Resumen del método", levelsAria: "Niveles de inglés", whatsappAria: "Abrir WhatsApp", instagramAria: "Vista previa de Instagram",
    navCourses: "Niveles", navTrust: "Método", navTestimonials: "Resultados", navContact: "Contacto",
    heroEyebrow: "Academia online internacional", heroTitle: "Inglés online con dirección, práctica y seguimiento real.", heroText: "Clases para hablar mejor, estudiar afuera, trabajar en inglés o ganar seguridad.", heroPrimary: "Hablar por WhatsApp", heroSecondary: "Ver niveles",
    methodLabel: "Estudio guiado", methodTitle: "Diagnóstico, práctica conversacional y evolución por nivel.", metricOne: "clases online", metricTwo: "práctica diaria", metricThree: "foco en el alumno",
    levelsEyebrow: "Niveles", levelsTitle: "Elige tu punto de partida",
    trustEyebrow: "Confianza", trustTitle: "Una experiencia pensada para avanzar constantemente.", trustOneTitle: "Clases online", trustOneText: "Aprende desde cualquier lugar con una rutina flexible.", trustTwoTitle: "Profesores preparados", trustTwoText: "Clases con método, claridad y corrección.", trustThreeTitle: "Práctica conversacional", trustThreeText: "Situaciones reales para hablar con confianza.", trustFourTitle: "Plan por nivel", trustFourText: "Cada alumno sigue una ruta clara.",
    practiceEyebrow: "Práctica rápida", practiceTitle: "Prueba una pregunta", quizLabel: "Mini test", nextQuestion: "Siguiente",
    testimonialsEyebrow: "Resultados", testimonialsTitle: "Alumnos que ganaron seguridad para hablar.", testimonialOneText: "Las clases me ayudaron en reuniones internacionales.", testimonialOneName: "Marina Costa", testimonialOneMeta: "Brasil · Trabajo", testimonialTwoText: "El plan por nivel me dio una ruta clara.", testimonialTwoName: "Lucas Meyer", testimonialTwoMeta: "Francia · Viaje", testimonialThreeText: "La práctica conversacional cambió mi confianza.", testimonialThreeName: "Sofia Park", testimonialThreeMeta: "Corea · Conversación",
    instagramEyebrow: "Instagram", instagramTitle: "Contenido de estudio y momentos de las clases.", instagramButton: "Ver Instagram",
    contactEyebrow: "Contacto", contactTitle: "Escoge cómo quieres hablar con nosotros.", contactText: "Envía tu consulta por el canal que prefieras.", nameLabel: "Nombre", namePlaceholder: "Tu nombre", levelLabel: "Nivel", inquiryLabel: "Tipo de consulta", messageLabel: "Mensaje", messagePlaceholder: "Escribe tu consulta...", submitButton: "Hablar ahora", selectPlaceholder: "Selecciona", footerText: "Inglés online para objetivos reales.",
    openingWhatsApp: "Abriendo WhatsApp con tu mensaje...", almost: "Casi. La respuesta correcta es:", whatsappDefault: "¡Hola! Quiero saber más sobre las clases online de belingolife.",
    inquiries: { trial: "Consulta", level: "Mi nivel", pricing: "Precios", general: "Consulta general" },
    whatsappForm: ({ name, level, inquiry, message }) => `¡Hola! Mi nombre es ${name}. Quiero hablar sobre: ${inquiry}. Mi nivel es ${level}. Mensaje: ${message}`,
    levels: { beginner: { label: "Principiante", title: "Base para empezar a hablar", description: "Frases esenciales, pronunciación y estructura para conversaciones simples." }, intermediate: { label: "Intermedio", title: "Conversaciones con más confianza", description: "Vocabulario práctico, tiempos verbales y situaciones del día a día." }, advanced: { label: "Avanzado", title: "Fluidez para objetivos reales", description: "Debates, trabajo, estudios internacionales y corrección de detalles." } },
    questions: [{ prompt: "Elige la frase correcta:", answers: ["She are ready", "She is ready", "She be ready"], correct: 1, feedback: "Correcto. Con she usamos is." }, { prompt: "¿Qué significa 'I need help'?", answers: ["Necesito ayuda", "Tengo ayuda", "Vendo ayuda"], correct: 0, feedback: "Muy bien. Need significa necesitar." }, { prompt: "Completa: They ___ English.", answers: ["study", "studies", "studying"], correct: 0, feedback: "Exacto. Con they usamos la forma base." }]
  }
};

translations["ko-KR"] = {
  ...englishAsia,
  title: "belingolife | 전 세계를 위한 프리미엄 영어", navCourses: "레벨", navTrust: "방법", navTestimonials: "결과", navContact: "상담", heroEyebrow: "국제 온라인 아카데미", heroTitle: "방향, 연습, 실제 관리가 있는 온라인 영어.", heroText: "더 잘 말하고, 해외에서 공부하고, 영어로 일하고, 실제 대화에서 자신감을 얻기 위한 프리미엄 수업입니다.", heroPrimary: "체험 수업 예약", heroSecondary: "레벨 보기", methodLabel: "프리미엄 플랜", methodTitle: "진단, 회화 연습, 레벨별 성장.", metricOne: "온라인 수업", metricTwo: "매일 연습", metricThree: "학생 중심", levelsEyebrow: "레벨", levelsTitle: "시작 지점을 선택하세요", trustEyebrow: "신뢰", trustTitle: "꾸준한 성장을 위한 학습 경험.", trustOneTitle: "온라인 수업", trustOneText: "어디서든 유연하게 학습하세요.", trustTwoTitle: "준비된 교사", trustTwoText: "방법, 명확함, 교정이 있는 수업.", trustThreeTitle: "회화 연습", trustThreeText: "실제 상황으로 말하기 자신감을 키웁니다.", trustFourTitle: "레벨별 플랜", trustFourText: "각 학생은 명확한 학습 경로를 따릅니다.", practiceEyebrow: "빠른 연습", practiceTitle: "문제 하나 풀어보기", quizLabel: "미니 테스트", nextQuestion: "다음", testimonialsEyebrow: "결과", testimonialsTitle: "말하기 자신감을 얻은 학생들.", testimonialOneText: "국제 회의에서 말하는 데 큰 도움이 됐어요.", testimonialOneName: "Marina Costa", testimonialOneMeta: "브라질 · 업무", testimonialTwoText: "레벨별 플랜 덕분에 무엇을 공부할지 분명했어요.", testimonialTwoName: "Lucas Meyer", testimonialTwoMeta: "프랑스 · 여행", testimonialThreeText: "회화 연습이 제 자신감을 가장 크게 바꿨어요.", testimonialThreeName: "Sofia Park", testimonialThreeMeta: "한국 · 회화", instagramEyebrow: "Instagram", instagramTitle: "학습 콘텐츠와 수업 비하인드.", instagramButton: "Instagram 보기", contactEyebrow: "체험 수업", contactTitle: "WhatsApp으로 체험 수업을 예약하세요.", contactText: "상담 유형을 선택하고 자동 메시지를 보내세요.", nameLabel: "이름", namePlaceholder: "이름", levelLabel: "레벨", inquiryLabel: "상담 유형", messageLabel: "메시지", messagePlaceholder: "질문을 작성하세요...", submitButton: "체험 수업 예약", selectPlaceholder: "선택", footerText: "실제 목표를 위한 프리미엄 온라인 영어.", openingWhatsApp: "작성한 메시지로 WhatsApp을 여는 중...", almost: "아쉽습니다. 정답은:", whatsappDefault: "안녕하세요! belingolife 체험 수업을 예약하고 싶습니다.", inquiries: { trial: "체험 수업", level: "내 레벨", pricing: "가격", general: "일반 상담" }, whatsappForm: ({ name, level, inquiry, message }) => `안녕하세요! 제 이름은 ${name}입니다. 상담 유형: ${inquiry}. 제 레벨은 ${level}입니다. 메시지: ${message}`, levels: { beginner: { label: "초급", title: "말하기를 시작하는 기초", description: "간단한 대화를 위한 필수 문장, 발음, 기본 구조." }, intermediate: { label: "중급", title: "더 자신 있는 대화", description: "실용 어휘, 주요 시제, 일상 상황 중심 연습." }, advanced: { label: "고급", title: "실제 목표를 위한 유창함", description: "토론, 업무, 해외 학업, 세부 표현 교정." } }, questions: [{ prompt: "올바른 문장을 고르세요:", answers: ["She are ready", "She is ready", "She be ready"], correct: 1, feedback: "정답입니다. she에는 is를 씁니다." }, { prompt: "'I need help'의 뜻은 무엇인가요?", answers: ["도움이 필요해요", "도움이 있어요", "도움을 팔아요"], correct: 0, feedback: "좋아요. Need는 필요하다는 뜻입니다." }, { prompt: "완성하세요: They ___ English.", answers: ["study", "studies", "studying"], correct: 0, feedback: "맞습니다. they에는 동사의 기본형을 씁니다." }]
};

translations["zh-CN"] = {
  ...englishAsia,
  title: "belingolife | 高端在线英语", navCourses: "级别", navTrust: "方法", navTestimonials: "成果", navContact: "咨询", heroEyebrow: "国际在线学院", heroTitle: "有方向、有练习、有跟进的在线英语。", heroText: "适合想提升口语、海外学习、英语工作或真实交流自信的高端课程。", heroPrimary: "预约体验课", heroSecondary: "查看级别", methodLabel: "高端计划", methodTitle: "诊断、会话练习和按级别进步。", metricOne: "在线课程", metricTwo: "每日练习", metricThree: "学生中心", levelsEyebrow: "级别", levelsTitle: "选择你的起点", trustEyebrow: "信任", trustTitle: "为持续进步设计的学习体验。", trustOneTitle: "在线课程", trustOneText: "随时随地灵活学习。", trustTwoTitle: "专业教师", trustTwoText: "有方法、清晰讲解和纠正的课程。", trustThreeTitle: "会话练习", trustThreeText: "用真实场景建立表达信心。", trustFourTitle: "按级别计划", trustFourText: "每位学生都有清晰的学习路线。", practiceEyebrow: "快速练习", practiceTitle: "试做一道题", quizLabel: "小测试", nextQuestion: "下一题", testimonialsEyebrow: "成果", testimonialsTitle: "获得口语信心的学生。", testimonialOneText: "课程帮助我在国际会议中开口表达。", testimonialOneName: "Marina Costa", testimonialOneMeta: "巴西 · 工作", testimonialTwoText: "按级别计划让我知道该学什么。", testimonialTwoName: "Lucas Meyer", testimonialTwoMeta: "法国 · 旅行", testimonialThreeText: "会话练习最大程度提升了我的信心。", testimonialThreeName: "Sofia Park", testimonialThreeMeta: "韩国 · 会话", instagramEyebrow: "Instagram", instagramTitle: "学习内容和课堂幕后。", instagramButton: "查看 Instagram", contactEyebrow: "体验课", contactTitle: "通过 WhatsApp 预约体验课。", contactText: "选择咨询类型并发送自动消息。", nameLabel: "姓名", namePlaceholder: "你的姓名", levelLabel: "级别", inquiryLabel: "咨询类型", messageLabel: "消息", messagePlaceholder: "写下你的问题...", submitButton: "预约体验课", selectPlaceholder: "请选择", footerText: "为真实目标打造的高端在线英语。", openingWhatsApp: "正在用你的消息打开 WhatsApp...", almost: "差一点。正确答案是：", whatsappDefault: "你好！我想预约 belingolife 的体验课。", inquiries: { trial: "体验课", level: "我的级别", pricing: "价格", general: "一般咨询" }, whatsappForm: ({ name, level, inquiry, message }) => `你好！我的名字是 ${name}。我想咨询：${inquiry}。我的级别是 ${level}。消息：${message}`, levels: { beginner: { label: "初级", title: "开始开口说英语的基础", description: "简单对话所需的核心句子、发音和结构。" }, intermediate: { label: "中级", title: "更自信地交流", description: "实用词汇、常用时态和日常场景。" }, advanced: { label: "高级", title: "服务真实目标的流利度", description: "讨论、工作、海外学习和细节纠正。" } }, questions: [{ prompt: "选择正确的句子：", answers: ["She are ready", "She is ready", "She be ready"], correct: 1, feedback: "正确。she 后面使用 is。" }, { prompt: "'I need help' 是什么意思？", answers: ["我需要帮助", "我有帮助", "我出售帮助"], correct: 0, feedback: "很好。Need 的意思是需要。" }, { prompt: "填空：They ___ English.", answers: ["study", "studies", "studying"], correct: 0, feedback: "正确。they 后面使用动词原形。" }]
};

translations["ja-JP"] = {
  ...englishAsia,
  title: "belingolife | プレミアムオンライン英語", navCourses: "レベル", navTrust: "方法", navTestimonials: "結果", navContact: "相談", heroEyebrow: "国際オンラインアカデミー", heroTitle: "方向性、実践、フォローのあるオンライン英語。", heroText: "話す力、留学、仕事、実際の会話での自信を高めるためのプレミアムレッスンです。", heroPrimary: "体験レッスンを予約", heroSecondary: "レベルを見る", methodLabel: "プレミアムプラン", methodTitle: "診断、会話練習、レベル別成長。", metricOne: "オンライン授業", metricTwo: "毎日の練習", metricThree: "生徒中心", levelsEyebrow: "レベル", levelsTitle: "出発点を選びましょう", trustEyebrow: "信頼", trustTitle: "継続的な成長のための学習体験。", trustOneTitle: "オンライン授業", trustOneText: "どこからでも柔軟に学習できます。", trustTwoTitle: "準備された講師", trustTwoText: "方法、明確さ、修正のある授業。", trustThreeTitle: "会話練習", trustThreeText: "実際の場面で話す自信を育てます。", trustFourTitle: "レベル別プラン", trustFourText: "各生徒が明確なルートで進みます。", practiceEyebrow: "クイック練習", practiceTitle: "問題を試す", quizLabel: "ミニテスト", nextQuestion: "次へ", testimonialsEyebrow: "結果", testimonialsTitle: "話す自信を得た生徒たち。", testimonialOneText: "国際会議で話す助けになりました。", testimonialOneName: "Marina Costa", testimonialOneMeta: "ブラジル · 仕事", testimonialTwoText: "レベル別プランで学習内容が明確でした。", testimonialTwoName: "Lucas Meyer", testimonialTwoMeta: "フランス · 旅行", testimonialThreeText: "会話練習が一番自信につながりました。", testimonialThreeName: "Sofia Park", testimonialThreeMeta: "韓国 · 会話", instagramEyebrow: "Instagram", instagramTitle: "学習コンテンツと授業の様子。", instagramButton: "Instagramを見る", contactEyebrow: "体験レッスン", contactTitle: "WhatsAppで体験レッスンを予約。", contactText: "相談タイプを選び、自動メッセージを送信します。", nameLabel: "名前", namePlaceholder: "お名前", levelLabel: "レベル", inquiryLabel: "相談タイプ", messageLabel: "メッセージ", messagePlaceholder: "質問を書いてください...", submitButton: "体験レッスンを予約", selectPlaceholder: "選択", footerText: "実際の目標のためのプレミアムオンライン英語。", openingWhatsApp: "メッセージ付きでWhatsAppを開いています...", almost: "惜しいです。正解は：", whatsappDefault: "こんにちは！belingolife の体験レッスンを予約したいです。", inquiries: { trial: "体験レッスン", level: "自分のレベル", pricing: "料金", general: "一般相談" }, whatsappForm: ({ name, level, inquiry, message }) => `こんにちは！私の名前は${name}です。相談内容：${inquiry}。レベルは${level}です。メッセージ：${message}`, levels: { beginner: { label: "初級", title: "話し始めるための基礎", description: "簡単な会話のための基本フレーズ、発音、文の構造。" }, intermediate: { label: "中級", title: "より自信のある会話", description: "実用語彙、主要な時制、日常場面の練習。" }, advanced: { label: "上級", title: "実際の目標のための流暢さ", description: "ディスカッション、仕事、海外学習、細かな表現修正。" } }, questions: [{ prompt: "正しい文を選んでください：", answers: ["She are ready", "She is ready", "She be ready"], correct: 1, feedback: "正解です。she には is を使います。" }, { prompt: "'I need help' の意味は？", answers: ["助けが必要です", "助けがあります", "助けを売ります"], correct: 0, feedback: "よくできました。Need は必要という意味です。" }, { prompt: "完成させてください：They ___ English.", answers: ["study", "studies", "studying"], correct: 0, feedback: "正解です。they には動詞の原形を使います。" }]
};

Object.assign(translations["pt-BR"], {
  trustTitle: "Uma experiência guiada por uma professora preparada.",
  trustOneTitle: "Aulas online",
  trustOneText: "Aprenda de qualquer lugar com rotina flexível.",
  trustTwoTitle: "Professora preparada",
  trustTwoText: "Acompanhamento direto, correção clara e método personalizado.",
  trustThreeTitle: "Prática conversacional",
  trustThreeText: "Foco em situações reais para falar com mais confiança.",
  trustFourTitle: "Plano por nível",
  trustFourText: "Cada aluno segue uma rota de evolução clara.",
  contactTitle: "Escolha como quer falar com a belingolife.",
  contactText: "Envie sua consulta pelo canal que preferir.",
  gmailTitle: "Gmail",
  gmailText: "Envie uma mensagem com sua dúvida ou objetivo.",
  gmailButton: "Enviar e-mail",
  contactInstagramTitle: "Instagram",
  contactInstagramText: "Acompanhe conteúdos e bastidores das aulas.",
  contactInstagramButton: "Ver perfil",
  contactWhatsappTitle: "WhatsApp",
  contactWhatsappText: "Envie uma mensagem automática para iniciar a conversa.",
  contactWhatsappButton: "Agendar agora",
  mailSubject: "Consulta sobre aulas de inglês belingolife",
  mailBody: "Olá! Quero saber mais sobre as aulas da belingolife."
});

Object.assign(translations["fr-FR"], {
  trustTitle: "Une expérience guidée par une professeure préparée.",
  trustTwoTitle: "Professeure préparée",
  trustTwoText: "Suivi direct, correction claire et méthode personnalisée.",
  contactTitle: "Choisissez comment contacter belingolife.",
  contactText: "Envoyez votre demande par le canal que vous préférez.",
  gmailTitle: "Gmail",
  gmailText: "Envoyez un message avec votre question ou objectif.",
  gmailButton: "Envoyer un e-mail",
  contactInstagramTitle: "Instagram",
  contactInstagramText: "Suivez les contenus et les coulisses des cours.",
  contactInstagramButton: "Voir le profil",
  contactWhatsappTitle: "WhatsApp",
  contactWhatsappText: "Envoyez un message automatique pour commencer la conversation.",
  contactWhatsappButton: "Réserver maintenant",
  mailSubject: "Question sur les cours d'anglais belingolife",
  mailBody: "Bonjour ! Je veux en savoir plus sur les cours de belingolife."
});

Object.assign(translations["es-ES"], {
  trustTitle: "Una experiencia guiada por una profesora preparada.",
  trustTwoTitle: "Profesora preparada",
  trustTwoText: "Acompañamiento directo, corrección clara y método personalizado.",
  contactTitle: "Elige cómo quieres hablar con belingolife.",
  contactText: "Envía tu consulta por el canal que prefieras.",
  gmailTitle: "Gmail",
  gmailText: "Envía un mensaje con tu duda u objetivo.",
  gmailButton: "Enviar e-mail",
  contactInstagramTitle: "Instagram",
  contactInstagramText: "Mira contenidos y momentos de las clases.",
  contactInstagramButton: "Ver perfil",
  contactWhatsappTitle: "WhatsApp",
  contactWhatsappText: "Envía un mensaje automático para iniciar la conversación.",
  contactWhatsappButton: "Agendar ahora",
  mailSubject: "Consulta sobre clases de inglés belingolife",
  mailBody: "¡Hola! Quiero saber más sobre las clases de belingolife."
});

Object.assign(translations["ko-KR"], {
  trustTitle: "준비된 한 명의 선생님이 직접 이끄는 학습 경험.",
  trustTwoTitle: "준비된 선생님",
  trustTwoText: "직접적인 관리, 명확한 교정, 개인 맞춤형 방법.",
  contactTitle: "belingolife와 연락할 방법을 선택하세요.",
  contactText: "체험 수업을 예약하거나 원하는 채널로 질문을 보내세요.",
  gmailTitle: "Gmail",
  gmailText: "질문이나 목표를 메시지로 보내세요.",
  gmailButton: "이메일 보내기",
  contactInstagramTitle: "Instagram",
  contactInstagramText: "학습 콘텐츠와 수업 비하인드를 확인하세요.",
  contactInstagramButton: "프로필 보기",
  contactWhatsappTitle: "WhatsApp",
  contactWhatsappText: "자동 메시지로 체험 수업을 예약하세요.",
  contactWhatsappButton: "지금 예약",
  mailSubject: "belingolife 영어 수업 문의",
  mailBody: "안녕하세요! belingolife 수업에 대해 더 알고 싶습니다."
});

Object.assign(translations["zh-CN"], {
  trustTitle: "由一位专业老师直接指导的学习体验。",
  trustTwoTitle: "专业老师",
  trustTwoText: "直接跟进、清晰纠正和个性化方法。",
  contactTitle: "选择你想联系 belingolife 的方式。",
  contactText: "预约体验课，或通过你喜欢的渠道发送问题。",
  gmailTitle: "Gmail",
  gmailText: "发送你的问题或学习目标。",
  gmailButton: "发送邮件",
  contactInstagramTitle: "Instagram",
  contactInstagramText: "查看学习内容和课堂幕后。",
  contactInstagramButton: "查看主页",
  contactWhatsappTitle: "WhatsApp",
  contactWhatsappText: "用自动消息预约体验课。",
  contactWhatsappButton: "立即预约",
  mailSubject: "关于 belingolife 英语课程的咨询",
  mailBody: "你好！我想了解更多 belingolife 的课程。"
});

Object.assign(translations["ja-JP"], {
  trustTitle: "準備された一人の講師が直接導く学習体験。",
  trustTwoTitle: "準備された講師",
  trustTwoText: "直接フォロー、明確な修正、個別に合わせた方法。",
  contactTitle: "belingolifeへの連絡方法を選んでください。",
  contactText: "体験レッスンの予約、または好きな連絡方法で質問できます。",
  gmailTitle: "Gmail",
  gmailText: "質問や目標をメッセージで送信できます。",
  gmailButton: "メールを送る",
  contactInstagramTitle: "Instagram",
  contactInstagramText: "学習コンテンツと授業の様子を見られます。",
  contactInstagramButton: "プロフィールを見る",
  contactWhatsappTitle: "WhatsApp",
  contactWhatsappText: "自動メッセージで体験レッスンを予約できます。",
  contactWhatsappButton: "今すぐ予約",
  mailSubject: "belingolife 英語レッスンについての問い合わせ",
  mailBody: "こんにちは！belingolife のレッスンについて知りたいです。"
});

Object.assign(translations["pt-BR"], {
  title: "belingolife | Inglês online",
  heroTitle: "Inglês online com prática real.",
  heroText: "Aulas para quem quer falar melhor, estudar fora, trabalhar em inglês ou ganhar segurança em conversas reais.",
  heroPrimary: "Falar no WhatsApp",
  methodButton: "Método",
  resultsButton: "Resultados",
  methodLabel: "Estudo guiado",
  methodTitle: "Diagnóstico, prática conversacional e evolução por nível.",
  methodSectionEyebrow: "Método",
  methodSectionTitle: "Métodos de estudo usados nas aulas.",
  methodOneTag: "Revisão ativa",
  methodOneTitle: "Active recall",
  methodOneText: "Resgate informações da memória sem consultar o material primeiro.",
  methodTwoTag: "SRS",
  methodTwoTitle: "Spaced repetition",
  methodTwoText: "Revise em intervalos crescentes para memorizar vocabulário e estruturas.",
  methodThreeTag: "Input natural",
  methodThreeTitle: "Comprehensible input",
  methodThreeText: "Use vídeos, vlogs e situações reais para adquirir vocabulário com contexto.",
  levelExampleLabel: "Exemplo",
  levels: {
    beginner: { label: "Iniciante", title: "Base para começar a falar", description: "Frases essenciais, pronúncia e estrutura para conversas simples.", example: '"My name is Ana. I like coffee."' },
    intermediate: { label: "Intermediário", title: "Conversas com mais confiança", description: "Vocabulário prático, tempos verbais e situações do dia a dia.", example: '"I have been studying English because I want to travel."' },
    advanced: { label: "Avançado", title: "Fluência para objetivos reais", description: "Discussões, trabalho, estudos internacionais e correção de detalhes.", example: '"I would like to improve my fluency for meetings and academic conversations."' }
  },
  contactEyebrow: "Contato",
  contactTitle: "Escolha como quer falar conosco.",
  contactText: "Envie sua consulta pelo canal que preferir.",
  contactWhatsappText: "Envie uma mensagem automática para iniciar a conversa.",
  contactWhatsappButton: "Falar agora",
  footerText: "Inglês online para objetivos reais.",
  whatsappDefault: "Olá! Quero saber mais sobre as aulas online da belingolife.",
  mailSubject: "Consulta sobre aulas de inglês belingolife",
  mailBody: "Olá! Quero saber mais sobre as aulas online da belingolife."
});

Object.assign(translations["fr-FR"], {
  title: "belingolife | Anglais en ligne",
  heroTitle: "Anglais en ligne avec pratique réelle.",
  heroText: "Des cours pour mieux parler, étudier à l'étranger, travailler en anglais ou gagner confiance dans des conversations réelles.",
  heroPrimary: "Parler sur WhatsApp",
  methodButton: "Méthode",
  resultsButton: "Résultats",
  methodLabel: "Étude guidée",
  methodTitle: "Diagnostic, pratique conversationnelle et progression par niveau.",
  methodSectionEyebrow: "Méthode",
  methodSectionTitle: "Méthodes d'étude utilisées pendant les cours.",
  methodOneTag: "Rappel actif",
  methodOneTitle: "Active recall",
  methodOneText: "Retrouvez l'information en mémoire avant de consulter le matériel.",
  methodTwoTag: "SRS",
  methodTwoTitle: "Spaced repetition",
  methodTwoText: "Révisez à intervalles croissants pour mémoriser vocabulaire et structures.",
  methodThreeTag: "Input naturel",
  methodThreeTitle: "Comprehensible input",
  methodThreeText: "Utilisez vidéos, vlogs et situations réelles pour apprendre le vocabulaire en contexte.",
  levelExampleLabel: "Exemple",
  levels: {
    beginner: { label: "Débutant", title: "Les bases pour commencer à parler", description: "Phrases essentielles, prononciation et structure pour des conversations simples.", example: '"My name is Ana. I like coffee."' },
    intermediate: { label: "Intermédiaire", title: "Parler avec plus d'assurance", description: "Vocabulaire utile, temps verbaux et situations du quotidien.", example: '"I have been studying English because I want to travel."' },
    advanced: { label: "Avancé", title: "Fluidité pour des objectifs réels", description: "Discussions, travail, études internationales et correction des détails.", example: '"I would like to improve my fluency for meetings and academic conversations."' }
  },
  contactEyebrow: "Contact",
  contactTitle: "Choisissez comment nous parler.",
  contactText: "Envoyez votre demande par le canal que vous préférez.",
  contactWhatsappText: "Envoyez un message automatique pour commencer la conversation.",
  contactWhatsappButton: "Parler maintenant",
  footerText: "Anglais en ligne pour des objectifs réels.",
  whatsappDefault: "Bonjour ! Je voudrais en savoir plus sur les cours en ligne de belingolife.",
  mailSubject: "Question sur les cours d'anglais belingolife",
  mailBody: "Bonjour ! Je voudrais en savoir plus sur les cours en ligne de belingolife."
});

Object.assign(translations["es-ES"], {
  title: "belingolife | Inglés online",
  heroTitle: "Inglés online con práctica real.",
  heroText: "Clases para hablar mejor, estudiar afuera, trabajar en inglés o ganar seguridad en conversaciones reales.",
  heroPrimary: "Hablar por WhatsApp",
  methodButton: "Método",
  resultsButton: "Resultados",
  methodLabel: "Estudio guiado",
  methodTitle: "Diagnóstico, práctica conversacional y evolución por nivel.",
  methodSectionEyebrow: "Método",
  methodSectionTitle: "Métodos de estudio usados en las clases.",
  methodOneTag: "Revisión activa",
  methodOneTitle: "Active recall",
  methodOneText: "Rescata información de la memoria sin consultar primero el material.",
  methodTwoTag: "SRS",
  methodTwoTitle: "Spaced repetition",
  methodTwoText: "Repasa en intervalos crecientes para memorizar vocabulario y estructuras.",
  methodThreeTag: "Input natural",
  methodThreeTitle: "Comprehensible input",
  methodThreeText: "Usa videos, vlogs y situaciones reales para adquirir vocabulario con contexto.",
  levelExampleLabel: "Ejemplo",
  levels: {
    beginner: { label: "Principiante", title: "Base para empezar a hablar", description: "Frases esenciales, pronunciación y estructura para conversaciones simples.", example: '"My name is Ana. I like coffee."' },
    intermediate: { label: "Intermedio", title: "Conversaciones con más confianza", description: "Vocabulario práctico, tiempos verbales y situaciones del día a día.", example: '"I have been studying English because I want to travel."' },
    advanced: { label: "Avanzado", title: "Fluidez para objetivos reales", description: "Debates, trabajo, estudios internacionales y corrección de detalles.", example: '"I would like to improve my fluency for meetings and academic conversations."' }
  },
  contactEyebrow: "Contacto",
  contactTitle: "Escoge cómo quieres hablar con nosotros.",
  contactText: "Envía tu consulta por el canal que prefieras.",
  contactWhatsappText: "Envía un mensaje automático para iniciar la conversación.",
  contactWhatsappButton: "Hablar ahora",
  footerText: "Inglés online para objetivos reales.",
  whatsappDefault: "¡Hola! Quiero saber más sobre las clases online de belingolife.",
  mailSubject: "Consulta sobre clases de inglés belingolife",
  mailBody: "¡Hola! Quiero saber más sobre las clases online de belingolife."
});

Object.assign(translations["ko-KR"], {
  title: "belingolife | 온라인 영어",
  heroTitle: "실전 연습 중심 온라인 영어.",
  heroText: "더 잘 말하고, 해외에서 공부하고, 영어로 일하고, 실제 대화에서 자신감을 얻고 싶은 사람을 위한 수업입니다.",
  heroPrimary: "WhatsApp으로 문의",
  methodButton: "방법",
  resultsButton: "결과",
  methodLabel: "가이드 학습",
  methodTitle: "진단, 회화 연습, 레벨별 성장.",
  methodSectionEyebrow: "방법",
  methodSectionTitle: "수업에서 사용하는 학습 방법.",
  methodOneTag: "능동 회상",
  methodOneTitle: "Active recall",
  methodOneText: "자료를 먼저 보지 않고 기억에서 정보를 꺼내는 연습입니다.",
  methodTwoTag: "SRS",
  methodTwoTitle: "Spaced repetition",
  methodTwoText: "점점 길어지는 간격으로 복습해 어휘와 구조를 기억합니다.",
  methodThreeTag: "자연스러운 입력",
  methodThreeTitle: "Comprehensible input",
  methodThreeText: "영상, 브이로그, 실제 상황으로 맥락 속에서 어휘를 익힙니다.",
  levelExampleLabel: "예시",
  levels: {
    beginner: { label: "초급", title: "말하기를 시작하는 기초", description: "간단한 대화를 위한 필수 문장, 발음, 기본 구조.", example: '"My name is Ana. I like coffee."' },
    intermediate: { label: "중급", title: "더 자신 있는 대화", description: "실용 어휘, 주요 시제, 일상 상황 중심 연습.", example: '"I have been studying English because I want to travel."' },
    advanced: { label: "고급", title: "실제 목표를 위한 유창함", description: "토론, 업무, 해외 학업, 세부 표현 교정.", example: '"I would like to improve my fluency for meetings and academic conversations."' }
  },
  contactEyebrow: "연락",
  contactTitle: "저희와 연락할 방법을 선택하세요.",
  contactText: "원하는 채널로 문의를 보내세요.",
  contactWhatsappText: "자동 메시지로 대화를 시작하세요.",
  contactWhatsappButton: "지금 문의",
  footerText: "실제 목표를 위한 온라인 영어.",
  whatsappDefault: "안녕하세요! belingolife 온라인 수업에 대해 더 알고 싶습니다.",
  mailSubject: "belingolife 영어 수업 문의",
  mailBody: "안녕하세요! belingolife 온라인 수업에 대해 더 알고 싶습니다."
});

Object.assign(translations["zh-CN"], {
  title: "belingolife | 在线英语",
  heroTitle: "以真实练习为核心的在线英语。",
  heroText: "适合想提升口语、海外学习、英语工作或在真实交流中建立信心的课程。",
  heroPrimary: "通过 WhatsApp 联系",
  methodButton: "方法",
  resultsButton: "成果",
  methodLabel: "指导式学习",
  methodTitle: "诊断、会话练习和按级别进步。",
  methodSectionEyebrow: "方法",
  methodSectionTitle: "课堂中使用的学习方法。",
  methodOneTag: "主动回忆",
  methodOneTitle: "Active recall",
  methodOneText: "先不看材料，尝试从记忆中提取信息。",
  methodTwoTag: "SRS",
  methodTwoTitle: "Spaced repetition",
  methodTwoText: "用逐渐延长的间隔复习，记住词汇和结构。",
  methodThreeTag: "自然输入",
  methodThreeTitle: "Comprehensible input",
  methodThreeText: "通过视频、vlog 和真实情境，在语境中习得词汇。",
  levelExampleLabel: "例子",
  levels: {
    beginner: { label: "初级", title: "开始开口说英语的基础", description: "简单对话所需的核心句子、发音和结构。", example: '"My name is Ana. I like coffee."' },
    intermediate: { label: "中级", title: "更自信地交流", description: "实用词汇、常用时态和日常场景。", example: '"I have been studying English because I want to travel."' },
    advanced: { label: "高级", title: "服务真实目标的流利度", description: "讨论、工作、海外学习和细节纠正。", example: '"I would like to improve my fluency for meetings and academic conversations."' }
  },
  contactEyebrow: "联系",
  contactTitle: "选择你想和我们联系的方式。",
  contactText: "通过你喜欢的渠道发送咨询。",
  contactWhatsappText: "发送自动消息开始对话。",
  contactWhatsappButton: "立即联系",
  footerText: "为真实目标打造的在线英语。",
  whatsappDefault: "你好！我想了解更多 belingolife 在线课程。",
  mailSubject: "关于 belingolife 英语课程的咨询",
  mailBody: "你好！我想了解更多 belingolife 在线课程。"
});

Object.assign(translations["ja-JP"], {
  title: "belingolife | オンライン英語",
  heroTitle: "実践で学ぶオンライン英語。",
  heroText: "話す力、留学、仕事、実際の会話での自信を高めたい人のためのレッスンです。",
  heroPrimary: "WhatsAppで相談",
  methodButton: "方法",
  resultsButton: "結果",
  methodLabel: "ガイド学習",
  methodTitle: "診断、会話練習、レベル別成長。",
  methodSectionEyebrow: "方法",
  methodSectionTitle: "レッスンで使う学習方法。",
  methodOneTag: "能動的想起",
  methodOneTitle: "Active recall",
  methodOneText: "教材を見る前に、記憶から情報を取り出す練習です。",
  methodTwoTag: "SRS",
  methodTwoTitle: "Spaced repetition",
  methodTwoText: "間隔を少しずつ広げて復習し、語彙と構造を定着させます。",
  methodThreeTag: "自然なインプット",
  methodThreeTitle: "Comprehensible input",
  methodThreeText: "動画、vlog、実際の場面を使って文脈の中で語彙を身につけます。",
  levelExampleLabel: "例",
  levels: {
    beginner: { label: "初級", title: "話し始めるための基礎", description: "簡単な会話のための基本フレーズ、発音、文の構造。", example: '"My name is Ana. I like coffee."' },
    intermediate: { label: "中級", title: "より自信のある会話", description: "実用語彙、主要な時制、日常場面の練習。", example: '"I have been studying English because I want to travel."' },
    advanced: { label: "上級", title: "実際の目標のための流暢さ", description: "ディスカッション、仕事、海外学習、細かな表現修正。", example: '"I would like to improve my fluency for meetings and academic conversations."' }
  },
  contactEyebrow: "連絡",
  contactTitle: "私たちへの連絡方法を選んでください。",
  contactText: "好きな連絡方法でお問い合わせください。",
  contactWhatsappText: "自動メッセージで会話を始められます。",
  contactWhatsappButton: "今すぐ相談",
  footerText: "実際の目標のためのオンライン英語。",
  whatsappDefault: "こんにちは！belingolife のオンラインレッスンについてもっと知りたいです。",
  mailSubject: "belingolife 英語レッスンについての問い合わせ",
  mailBody: "こんにちは！belingolife のオンラインレッスンについてもっと知りたいです。"
});

// DOM references
const tabs = document.querySelectorAll(".tab");
const levelTag = document.querySelector("#level-tag");
const courseTitle = document.querySelector("#course-title");
const courseDescription = document.querySelector("#course-description");
const levelExampleLabel = document.querySelector("#level-example-label");
const levelExample = document.querySelector("#level-example");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const questionEl = document.querySelector("#question");
const answersEl = document.querySelector("#answers");
const feedbackEl = document.querySelector("#feedback");
const scoreEl = document.querySelector("#score");
const nextQuestionBtn = document.querySelector("#next-question");
const whatsappFloat = document.querySelector("#whatsapp-float");
const heroWhatsapp = document.querySelector("#hero-whatsapp");
const instagramLink = document.querySelector("#instagram-link");
const gmailLink = document.querySelector("#gmail-link");
const contactInstagramLink = document.querySelector("#contact-instagram-link");
const contactWhatsappLink = document.querySelector("#contact-whatsapp-link");
const languageToggle = document.querySelector("#language-toggle");
const languageMenu = document.querySelector("#language-menu");
const currentFlag = document.querySelector("#current-flag");
const currentLanguage = document.querySelector("#current-language");
const languageButtons = document.querySelectorAll("[data-lang]");
const levelsToggle = document.querySelector("#levels-toggle");
const levelsSection = document.querySelector("#cursos");
const methodToggle = document.querySelector("#method-toggle");
const methodSection = document.querySelector("#metodo");
const resultsToggle = document.querySelector("#results-toggle");
const resultsSection = document.querySelector("#depoimentos");

// State
let currentLanguageCode = getStoredLanguage();
let currentLevel = "beginner";
let currentQuestion = 0;
let score = 0;
let answered = false;

// Storage and URL helpers
function getStoredLanguage() {
  try {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    return translations[storedLanguage] ? storedLanguage : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function storeLanguage(languageCode) {
  try {
    localStorage.setItem(STORAGE_KEY, languageCode);
  } catch {
    // Language selection still works if browser storage is unavailable.
  }
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildMailUrl(subject, body) {
  return `mailto:${GMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Translation rendering
function translatePage(copy) {
  document.documentElement.lang = currentLanguageCode;
  document.title = copy.title;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n] || "";
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = copy[element.dataset.i18nPlaceholder] || "";
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", copy[element.dataset.i18nAria] || "");
  });
}

function updateLanguageButton() {
  const language = languages[currentLanguageCode];
  currentLanguage.textContent = language.short;
  currentFlag.className = `flag ${language.flag}`;
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguageCode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

// Levels
function updateLevels(copy) {
  tabs.forEach((tab) => {
    const level = copy.levels[tab.dataset.level];
    tab.textContent = level.label;
    tab.classList.toggle("active", tab.dataset.level === currentLevel);
  });
  const selectedLevel = copy.levels[currentLevel];
  levelTag.textContent = selectedLevel.label;
  courseTitle.textContent = selectedLevel.title;
  courseDescription.textContent = selectedLevel.description;
  levelExampleLabel.textContent = copy.levelExampleLabel;
  levelExample.textContent = selectedLevel.example;
}

function updateSelectOptions(select, options, placeholderText) {
  select.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = placeholderText;
  select.appendChild(placeholder);
  Object.entries(options).forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = label.label || label;
    option.textContent = label.label || label;
    option.dataset.key = value;
    select.appendChild(option);
  });
}

function toggleRevealSection(section, toggle, shouldScroll = true) {
  const isOpen = section.classList.toggle("is-open");
  section.setAttribute("aria-hidden", String(!isOpen));
  toggle.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    window.setTimeout(() => section.scrollIntoView({ behavior: "smooth", block: "start" }), shouldScroll ? 180 : 0);
  }
}

function openRevealSection(section, toggle) {
  if (section.classList.contains("is-open")) return;
  section.classList.add("is-open");
  section.setAttribute("aria-hidden", "false");
  toggle.setAttribute("aria-expanded", "true");
}

// Quiz
function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;
  renderQuestion();
}

function renderQuestion() {
  const copy = translations[currentLanguageCode];
  const questions = copy.questions;
  const question = questions[currentQuestion];
  answered = false;
  feedbackEl.textContent = "";
  questionEl.textContent = question.prompt;
  scoreEl.textContent = `${score} / ${questions.length}`;
  answersEl.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const isCorrect = index === question.correct;
      button.classList.add(isCorrect ? "correct" : "wrong");
      if (isCorrect) {
        score += 1;
        feedbackEl.textContent = question.feedback;
      } else {
        const correctAnswer = question.answers[question.correct];
        feedbackEl.textContent = `${copy.almost} ${correctAnswer}.`;
        answersEl.children[question.correct].classList.add("correct");
      }
      scoreEl.textContent = `${score} / ${questions.length}`;
    });
    answersEl.appendChild(button);
  });
}

// WhatsApp and language application
function applyLanguage(languageCode) {
  currentLanguageCode = translations[languageCode] ? languageCode : DEFAULT_LANGUAGE;
  const copy = translations[currentLanguageCode];
  translatePage(copy);
  updateLanguageButton();
  updateLevels(copy);
  resetQuiz();
  whatsappFloat.href = buildWhatsAppUrl(copy.whatsappDefault);
  heroWhatsapp.href = buildWhatsAppUrl(copy.whatsappDefault);
  instagramLink.href = INSTAGRAM_URL;
  contactInstagramLink.href = INSTAGRAM_URL;
  contactWhatsappLink.href = buildWhatsAppUrl(copy.whatsappDefault);
  gmailLink.href = buildMailUrl(copy.mailSubject || copy.contactTitle, copy.mailBody || copy.whatsappDefault);
  storeLanguage(currentLanguageCode);
}

// UI events
tabs.forEach((tab) => tab.addEventListener("click", () => {
  currentLevel = tab.dataset.level;
  updateLevels(translations[currentLanguageCode]);
}));

levelsToggle.addEventListener("click", () => toggleRevealSection(levelsSection, levelsToggle));
methodToggle.addEventListener("click", () => toggleRevealSection(methodSection, methodToggle));
resultsToggle.addEventListener("click", () => toggleRevealSection(resultsSection, resultsToggle));

languageToggle.addEventListener("click", () => {
  const isOpen = languageMenu.classList.toggle("open");
  languageToggle.setAttribute("aria-expanded", String(isOpen));
});

languageButtons.forEach((button) => button.addEventListener("click", () => {
  applyLanguage(button.dataset.lang);
  languageMenu.classList.remove("open");
  languageToggle.setAttribute("aria-expanded", "false");
}));

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-switcher")) {
    languageMenu.classList.remove("open");
    languageToggle.setAttribute("aria-expanded", "false");
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  if (link.getAttribute("href") === "#cursos") openRevealSection(levelsSection, levelsToggle);
  if (link.getAttribute("href") === "#metodo") openRevealSection(methodSection, methodToggle);
  if (link.getAttribute("href") === "#depoimentos") openRevealSection(resultsSection, resultsToggle);
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

nextQuestionBtn.addEventListener("click", () => {
  const questions = translations[currentLanguageCode].questions;
  currentQuestion = (currentQuestion + 1) % questions.length;
  if (currentQuestion === 0) score = 0;
  renderQuestion();
});

applyLanguage(currentLanguageCode);
