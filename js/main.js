const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = mobileMenuBtn?.querySelector('i');
const contactForm = document.getElementById('contact-form');

const translations = {
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.services': 'Services',
        'nav.projects': 'Projets',
        'nav.news': 'Actualités',
        'nav.contact': 'Contact',
        'menu.open': 'Ouvrir le menu',
        'menu.close': 'Fermer le menu',
        'hero.badge': 'Établissement Public Industriel et Commercial',
        'hero.subtitle': 'الوكالة العقارية لمدينة الجزائر',
        'hero.desc': 'Real Estate Agency of the City of Algiers - Gestion et Valorisation Immobilière',
        'hero.btnServices': 'Découvrir nos services',
        'hero.btnContact': 'Nous contacter',
        'about.badge': 'À propos de nous',
        'about.title': 'Notre Mission',
        'about.desc': "L'EPIC RFVA de la wilaya d'Alger s'engage à gérer et valoriser le patrimoine immobilier public, offrant des solutions immobilières professionnelles pour le développement urbain durable.",
        'about.visionTitle': 'Notre Vision',
        'about.visionText': 'Devenir un acteur majeur dans le développement immobilier de la wilaya d\'Alger, en innovant et en adaptant nos services aux besoins du marché immobilier et aux exigences du développement urbain durable.',
        'about.valuesTitle': 'Nos Valeurs',
        'about.value1': 'Intégrité et transparence',
        'about.value2': 'Excellence professionnelle',
        'about.value3': 'Innovation et adaptation',
        'about.value4': 'Partenariat et collaboration',
        'about.historyTitle': 'Historique',
        'about.historyText1': "Créée en 1999, l'EPIC RFVA de la wilaya d'Alger a pour mission de gérer et valoriser le patrimoine immobilier de l'État, tout en accompagnant les projets de développement urbain et immobilier.",
        'about.historyText2': "Au fil des années, nous avons développé une expertise reconnue dans la gestion immobilière, l'accompagnement des projets et la mise en œuvre d'initiatives innovantes dans le secteur de l'immobilier.",
        'about.stat1Title': 'Certifié ISO',
        'about.stat1Desc': 'Qualité reconnue',
        'about.stat2Title': 'Équipe qualifiée',
        'about.stat2Desc': '200+ experts',
        'services.badge': 'Nos Prestations',
        'services.title': "Services de l'EPIC",
        'services.desc': 'Découvrez l\'ensemble de nos services immobiliers destinés aux particuliers, aux entreprises et aux partenaires du secteur immobilier.',
        'services.card1Title': 'Gestion Immobilière',
        'services.card1Text': 'Gestion professionnelle du patrimoine immobilier public et privé pour optimiser la valorisation.',
        'services.card1Item1': 'Gestion des biens',
        'services.card1Item2': 'Maintenance et entretien',
        'services.card1Item3': 'Optimisation des rendements',
        'services.card2Title': 'Location et Vente',
        'services.card2Text': "Services complets de location et de vente de biens immobiliers dans la wilaya d'Alger.",
        'services.card2Item1': 'Location résidentielle',
        'services.card2Item2': 'Vente de biens',
        'services.card2Item3': 'Bureaux et commerces',
        'services.card3Title': 'Valorisation du Patrimoine',
        'services.card3Text': 'Expertise et valorisation du patrimoine immobilier pour maximiser son potentiel.',
        'services.card3Item1': 'Estimation immobilière',
        'services.card3Item2': 'Conseil en investissement',
        'services.card3Item3': 'Stratégie de valorisation',
        'services.card4Title': 'Conseil en Immobilier',
        'services.card4Text': 'Accompagnement et conseil expert pour tous vos projets immobiliers.',
        'services.card4Item1': 'Conseil personnalisé',
        'services.card4Item2': 'Étude de faisabilité',
        'services.card4Item3': 'Accompagnement juridique',
        'services.card5Title': 'Gestion Locative',
        'services.card5Text': 'Gestion complète des locations pour les propriétaires et les locataires.',
        'services.card5Item1': 'Gestion des baux',
        'services.card5Item2': 'Encaissement des loyers',
        'services.card5Item3': 'Gestion des litiges',
        'services.card6Title': 'Transactions Immobilières',
        'services.card6Text': 'Facilitation des transactions immobilières avec accompagnement juridique et administratif.',
        'services.card6Item1': 'Achat et vente',
        'services.card6Item2': 'Formalités administratives',
        'services.card6Item3': 'Actes notariés',
        'projects.badge': 'Nos Réalisations',
        'projects.title': 'Projets en Cours',
        'projects.desc': "Découvrez nos projets immobiliers majeurs qui contribuent au développement urbain de la wilaya d'Alger.",
        'projects.more': 'En savoir plus →',
        'projects.status.ongoing': 'En cours',
        'projects.status.new': 'Nouveau',
        'projects.status.planned': 'Planifié',
        'news.badge': 'Restez Informé',
        'news.title': 'Actualités',
        'news.desc': 'Suivez nos dernières nouvelles, événements et annonces importantes sur notre',
        'news.link': 'page Facebook officielle',
        'news.readMore': 'Lire la suite →',
        'contact.badge': 'Contactez-nous',
        'contact.title': 'Restons en Contact',
        'contact.desc': 'Notre équipe est à votre disposition pour répondre à toutes vos questions immobilières et vous accompagner dans vos projets de location, achat ou gestion.',
        'contact.name': 'Nom complet',
        'contact.email': 'Email',
        'contact.phone': 'Téléphone',
        'contact.subject': 'Sujet',
        'contact.message': 'Message',
        'contact.send': 'Envoyer le message',
        'contact.address': 'Adresse',
        'contact.hours': 'Horaires',
        'contact.facebook': 'Facebook',
        'contact.form.success': 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.',
        'footer.quickLinks': 'Liens Rapides',
        'footer.services': 'Nos Services',
        'footer.contact': 'Contact',
        'footer.follow': 'Suivez-nous sur Facebook',
        'footer.legal': 'Mentions légales',
        'footer.privacy': 'Politique de confidentialité',
        'footer.sitemap': 'Plan du site',
        'footer.rights': '© 2026 EPIC RFVA — Wilaya d\'Alger. Tous droits réservés.'
    },
    ar: {
        'nav.home': 'الرئيسية',
        'nav.about': 'من نحن',
        'nav.services': 'الخدمات',
        'nav.projects': 'المشاريع',
        'nav.news': 'الأخبار',
        'nav.contact': 'اتصل بنا',
        'menu.open': 'فتح القائمة',
        'menu.close': 'إغلاق القائمة',
        'hero.badge': 'مؤسسة صناعية وتجارية عمومية',
        'hero.subtitle': 'الوكالة العقارية لمدينة الجزائر',
        'hero.desc': 'وكالة العقارات لمدينة الجزائر - إدارة وتثمين العقارات',
        'hero.btnServices': 'اكتشف خدماتنا',
        'hero.btnContact': 'تواصل معنا',
        'about.badge': 'من نحن',
        'about.title': 'مهمتنا',
        'about.desc': 'تلتزم المؤسسة العمومية للصناعة والتجارة RFVA بولاية الجزائر بإدارة وتثمين الممتلكات العقارية العمومية وتقديم حلول عقارية احترافية من أجل تنمية عمرانية مستدامة.',
        'about.visionTitle': 'رؤيتنا',
        'about.visionText': 'أن نكون جهة رائدة في التطوير العقاري لولاية الجزائر، من خلال الإبداع وتكييف خدماتنا مع احتياجات السوق العقاري ومتطلبات التنمية الحضرية المستدامة.',
        'about.valuesTitle': 'قيمنا',
        'about.value1': 'النزاهة والشفافية',
        'about.value2': 'التميز المهني',
        'about.value3': 'الابتكار والتكيّف',
        'about.value4': 'الشراكة والتعاون',
        'about.historyTitle': 'التاريخ',
        'about.historyText1': 'تأسست المؤسسة العمومية RFVA بولاية الجزائر سنة 1999 بهدف إدارة وتثمين الأملاك العقارية للدولة، مع دعم مشاريع التنمية الحضرية والعقارية.',
        'about.historyText2': 'على مر السنوات، تطور خبراؤنا في مجال الإدارة العقارية ومرافقة المشاريع وتنفيذ مبادرات مبتكرة في القطاع العقاري.',
        'about.stat1Title': 'معتمدة ISO',
        'about.stat1Desc': 'جودة معترف بها',
        'about.stat2Title': 'فريق مؤهل',
        'about.stat2Desc': 'أكثر من 200 خبير',
        'services.badge': 'خدماتنا',
        'services.title': 'خدمات المؤسسة',
        'services.desc': 'اكتشف مجموع خدماتنا العقارية الموجهة للأفراد والشركات وشركائنا في القطاع العقاري.',
        'services.card1Title': 'الإدارة العقارية',
        'services.card1Text': 'إدارة احترافية للممتلكات العقارية العامة والخاصة لتحسين قيمتها.',
        'services.card1Item1': 'إدارة الأملاك',
        'services.card1Item2': 'الصيانة والدعم',
        'services.card1Item3': 'تحسين العائد',
        'services.card2Title': 'الإيجار والبيع',
        'services.card2Text': 'خدمات متكاملة للإيجار والبيع في ولاية الجزائر.',
        'services.card2Item1': 'إيجار سكني',
        'services.card2Item2': 'بيع العقارات',
        'services.card2Item3': 'مكاتب ومتاجر',
        'services.card3Title': 'تثمين الممتلكات',
        'services.card3Text': 'خبرة وتثمين للممتلكات العقارية لرفع إمكاناتها.',
        'services.card3Item1': 'تقدير عقاري',
        'services.card3Item2': 'استشارات استثمارية',
        'services.card3Item3': 'استراتيجية تثمين',
        'services.card4Title': 'استشارات عقارية',
        'services.card4Text': 'مرافقة واستشارات متخصصة لجميع مشاريعكم العقارية.',
        'services.card4Item1': 'استشارة مخصصة',
        'services.card4Item2': 'دراسة جدوى',
        'services.card4Item3': 'مرافقة قانونية',
        'services.card5Title': 'إدارة الإيجارات',
        'services.card5Text': 'إدارة كاملة للإيجارات لأصحاب العقارات والمستأجرين.',
        'services.card5Item1': 'إدارة العقود',
        'services.card5Item2': 'تحصيل الإيجارات',
        'services.card5Item3': 'إدارة النزاعات',
        'services.card6Title': 'المعاملات العقارية',
        'services.card6Text': 'تسهيل المعاملات العقارية مع دعم قانوني وإداري.',
        'services.card6Item1': 'شراء وبيع',
        'services.card6Item2': 'الإجراءات الإدارية',
        'services.card6Item3': 'وثائق notariales',
        'projects.badge': 'إنجازاتنا',
        'projects.title': 'مشاريع جارية',
        'projects.desc': 'اكتشف مشاريعنا العقارية الكبرى التي تسهم في التنمية الحضرية بولاية الجزائر.',
        'projects.more': 'المزيد →',
        'projects.status.ongoing': 'جارية',
        'projects.status.new': 'جديد',
        'projects.status.planned': 'مخطط',
        'news.badge': 'ابقَ على اطلاع',
        'news.title': 'الأخبار',
        'news.desc': 'تابع آخر مستجداتنا وأحداثنا وإعلاناتنا المهمة على',
        'news.link': 'صفحتنا الرسمية على فيسبوك',
        'news.readMore': 'اقرأ المزيد →',
        'contact.badge': 'تواصلوا معنا',
        'contact.title': 'لنظل على تواصل',
        'contact.desc': 'فريقنا في خدمتك للإجابة على أي سؤال عقاري ومرافقتكم في مشاريع الإيجار والشراء والإدارة.',
        'contact.name': 'الاسم الكامل',
        'contact.email': 'البريد الإلكتروني',
        'contact.phone': 'الهاتف',
        'contact.subject': 'الموضوع',
        'contact.message': 'الرسالة',
        'contact.send': 'إرسال الرسالة',
        'contact.address': 'العنوان',
        'contact.hours': 'مواعيد العمل',
        'contact.facebook': 'فيسبوك',
        'contact.form.success': 'شكرًا لرسالتكم! سنرد عليكم في أقرب وقت ممكن.',
        'footer.quickLinks': 'روابط سريعة',
        'footer.services': 'خدماتنا',
        'footer.contact': 'اتصل بنا',
        'footer.follow': 'تابعنا على فيسبوك',
        'footer.legal': 'الإشعارات القانونية',
        'footer.privacy': 'سياسة الخصوصية',
        'footer.sitemap': 'خريطة الموقع',
        'footer.rights': '© 2026 EPIC RFVA — ولاية الجزائر. جميع الحقوق محفوظة.'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.news': 'News',
        'nav.contact': 'Contact',
        'menu.open': 'Open menu',
        'menu.close': 'Close menu',
        'hero.badge': 'Industrial and Commercial Public Establishment',
        'hero.subtitle': 'Real Estate Agency of Algiers',
        'hero.desc': 'Real Estate Agency of the City of Algiers - Property Management and Enhancement',
        'hero.btnServices': 'Discover our services',
        'hero.btnContact': 'Contact us',
        'about.badge': 'About us',
        'about.title': 'Our Mission',
        'about.desc': 'The EPIC RFVA of the Wilaya of Algiers is committed to managing and enhancing public real estate assets while offering professional real estate solutions for sustainable urban development.',
        'about.visionTitle': 'Our Vision',
        'about.visionText': 'To become a major player in the real estate development of the Wilaya of Algiers by innovating and adapting our services to market needs and sustainable urban development requirements.',
        'about.valuesTitle': 'Our Values',
        'about.value1': 'Integrity and transparency',
        'about.value2': 'Professional excellence',
        'about.value3': 'Innovation and adaptability',
        'about.value4': 'Partnership and collaboration',
        'about.historyTitle': 'History',
        'about.historyText1': 'Created in 1999, the EPIC RFVA of the Wilaya of Algiers is responsible for managing and enhancing the State\'s real estate assets while supporting urban and real estate development projects.',
        'about.historyText2': 'Over the years, we have developed recognized expertise in real estate management, project support, and the implementation of innovative initiatives in the sector.',
        'about.stat1Title': 'ISO Certified',
        'about.stat1Desc': 'Recognized quality',
        'about.stat2Title': 'Qualified Team',
        'about.stat2Desc': '200+ experts',
        'services.badge': 'Our Services',
        'services.title': 'EPIC Services',
        'services.desc': 'Discover our full range of real estate services for individuals, businesses, and partners in the sector.',
        'services.card1Title': 'Real Estate Management',
        'services.card1Text': 'Professional management of public and private real estate portfolios to optimize value.',
        'services.card1Item1': 'Asset management',
        'services.card1Item2': 'Maintenance and upkeep',
        'services.card1Item3': 'Return optimization',
        'services.card2Title': 'Renting and Sales',
        'services.card2Text': 'Complete services for renting and selling real estate in the Wilaya of Algiers.',
        'services.card2Item1': 'Residential leasing',
        'services.card2Item2': 'Property sales',
        'services.card2Item3': 'Offices and retail',
        'services.card3Title': 'Asset Valorization',
        'services.card3Text': 'Expertise and valuation to maximize the potential of real estate assets.',
        'services.card3Item1': 'Property appraisal',
        'services.card3Item2': 'Investment advice',
        'services.card3Item3': 'Valorization strategy',
        'services.card4Title': 'Real Estate Advisory',
        'services.card4Text': 'Expert guidance and support for all your real estate projects.',
        'services.card4Item1': 'Customized advice',
        'services.card4Item2': 'Feasibility study',
        'services.card4Item3': 'Legal support',
        'services.card5Title': 'Property Management',
        'services.card5Text': 'Full management of rentals for property owners and tenants.',
        'services.card5Item1': 'Lease management',
        'services.card5Item2': 'Rent collection',
        'services.card5Item3': 'Dispute resolution',
        'services.card6Title': 'Real Estate Transactions',
        'services.card6Text': 'Facilitating real estate transactions with legal and administrative support.',
        'services.card6Item1': 'Buying and selling',
        'services.card6Item2': 'Administrative procedures',
        'services.card6Item3': 'Notarial acts',
        'projects.badge': 'Our Achievements',
        'projects.title': 'Ongoing Projects',
        'projects.desc': 'Discover our major real estate projects contributing to urban development in the Wilaya of Algiers.',
        'projects.more': 'Learn more →',
        'projects.status.ongoing': 'Ongoing',
        'projects.status.new': 'New',
        'projects.status.planned': 'Planned',
        'news.badge': 'Stay Informed',
        'news.title': 'News',
        'news.desc': 'Follow our latest updates, events, and important announcements on our',
        'news.link': 'official Facebook page',
        'news.readMore': 'Read more →',
        'contact.badge': 'Contact us',
        'contact.title': 'Let\'s Stay in Touch',
        'contact.desc': 'Our team is available to answer all your real estate questions and support you in your rental, purchase, and management projects.',
        'contact.name': 'Full name',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.subject': 'Subject',
        'contact.message': 'Message',
        'contact.send': 'Send message',
        'contact.address': 'Address',
        'contact.hours': 'Working hours',
        'contact.facebook': 'Facebook',
        'contact.form.success': 'Thank you for your message! We will reply as soon as possible.',
        'footer.quickLinks': 'Quick Links',
        'footer.services': 'Our Services',
        'footer.contact': 'Contact',
        'footer.follow': 'Follow us on Facebook',
        'footer.legal': 'Legal notice',
        'footer.privacy': 'Privacy policy',
        'footer.sitemap': 'Sitemap',
        'footer.rights': '© 2026 EPIC RFVA — Wilaya of Algiers. All rights reserved.'
    }
};

let currentLang = localStorage.getItem('site-lang') || 'fr';

function setMobileMenuOpen(open) {
    if (!mobileMenu || !menuIcon) return;

    mobileMenu.classList.toggle('hidden', !open);
    menuIcon.classList.toggle('fa-bars', !open);
    menuIcon.classList.toggle('fa-times', open);
    document.body.classList.toggle('menu-open', open);
    mobileMenuBtn?.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileMenuBtn?.setAttribute('aria-label', translations[currentLang][open ? 'menu.close' : 'menu.open']);
}

function applyTranslations() {
    const langData = translations[currentLang];
    if (!langData) return;

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        if (langData[key]) {
            element.placeholder = langData[key];
        }
    });

    document.querySelectorAll('[data-lang-btn]').forEach((button) => {
        const isActive = button.dataset.langBtn === currentLang;
        button.classList.toggle('bg-white/20', isActive);
        button.classList.toggle('bg-[#c9a227]', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('site-lang', lang);
    applyTranslations();
    setMobileMenuOpen(false);
}

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-[#1e3a5f]/95', 'backdrop-blur-lg', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-[#1e3a5f]/95', 'backdrop-blur-lg', 'shadow-lg');
            navbar.classList.add('bg-transparent');
        }
    });
}

document.querySelectorAll('[data-lang-btn]').forEach((button) => {
    button.addEventListener('click', () => {
        setLanguage(button.dataset.langBtn);
    });
});

mobileMenuBtn?.addEventListener('click', () => {
    setMobileMenuOpen(mobileMenu.classList.contains('hidden'));
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const offset = navbar?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top, behavior: 'smooth' });
        setMobileMenuOpen(false);
    });
});

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(translations[currentLang]['contact.form.success']);
    contactForm.reset();
});

applyTranslations();
