const translations = {
  de: {
    navServices: "Leistungen",
    navGallery: "Arbeiten",
    navContact: "Kontakt",
    eyebrow: "Gartenbau in Lohne (Oldb)",
    heroTitle: "Saubere Gartenarbeit, starke Außenbereiche.",
    heroText:
      "Von Rasen und Hecken bis zu Pflaster, Terrassen und kompletter Außenpflege: Mario Hoxha unterstützt private und gewerbliche Kunden zuverlässig, ordentlich und mit Blick fürs Detail.",
    callNow: "Jetzt anrufen",
    viewWork: "Arbeiten ansehen",
    trust1: "Kostenlose Anfrage",
    trust2: "Faire Preise",
    trust3: "Lohne & Umgebung",
    heroCardTitle: "Garten, Hof & Wege",
    heroCardText: "Ordentliche Ergebnisse für Ihr Zuhause.",
    aboutEyebrow: "Über den Service",
    aboutTitle: "Ein Ansprechpartner für Außenanlagen, Pflege und Ordnung.",
    aboutText:
      "Ob regelmäßige Gartenpflege, ein frischer Schnitt, neue Wege oder eine komplette Aufwertung des Außenbereichs: Der Fokus liegt auf zuverlässiger Arbeit, klarer Kommunikation und einem Ergebnis, das sauber aussieht und lange hält.",
    servicesEyebrow: "Leistungen",
    servicesTitle: "Alles, was Garten und Außenbereich brauchen.",
    service1Title: "Gartenpflege",
    service1Text: "Rasen mähen, Unkraut entfernen, Beete pflegen und Außenflächen sauber halten.",
    service2Title: "Hecken & Sträucher",
    service2Text: "Formschnitt, Rückschnitt und saisonale Pflege für gepflegte Grundstücke.",
    service3Title: "Pflaster & Wege",
    service3Text: "Verlegen, Ausbessern und Reinigen von Wegen, Terrassen und Hofflächen.",
    service4Title: "Haus- & Hofservice",
    service4Text: "Praktische Hilfe rund ums Grundstück, damit alles ordentlich und nutzbar bleibt.",
    processEyebrow: "Ablauf",
    processTitle: "Einfach anfragen, schnell starten.",
    step1Title: "Kontakt aufnehmen",
    step1Text: "Rufen Sie an, schreiben Sie per E-Mail oder öffnen Sie direkt die Karte.",
    step2Title: "Arbeit besprechen",
    step2Text: "Vor Ort oder per Foto wird geklärt, was gemacht werden soll.",
    step3Title: "Sauber umsetzen",
    step3Text: "Die Arbeit wird zuverlässig, ordentlich und termingerecht erledigt.",
    galleryEyebrow: "Galerie",
    galleryTitle: "Einblicke in bisherige Arbeiten.",
    contactEyebrow: "Kontakt",
    contactTitle: "Bereit für einen gepflegten Außenbereich?",
    contactText:
      "Schreiben oder rufen Sie direkt an. Für eine schnelle Einschätzung können Sie auch Fotos vom Garten, Hof oder der gewünschten Arbeit per E-Mail senden.",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    locationLabel: "Standort",
  },
  en: {
    navServices: "Services",
    navGallery: "Work",
    navContact: "Contact",
    eyebrow: "Landscaping in Lohne (Oldb)",
    heroTitle: "Clean garden work, strong outdoor spaces.",
    heroText:
      "From lawns and hedges to paving, terraces and complete outdoor care: Mario Hoxha supports private and commercial customers reliably, neatly and with attention to detail.",
    callNow: "Call now",
    viewWork: "View work",
    trust1: "Free inquiry",
    trust2: "Fair prices",
    trust3: "Lohne & nearby",
    heroCardTitle: "Garden, yard & paths",
    heroCardText: "Tidy results for your home.",
    aboutEyebrow: "About the service",
    aboutTitle: "One contact for outdoor areas, care and order.",
    aboutText:
      "Whether regular garden maintenance, a fresh cut, new paths or a complete upgrade of the outdoor area: the focus is reliable work, clear communication and a result that looks clean and lasts.",
    servicesEyebrow: "Services",
    servicesTitle: "Everything your garden and outdoor area needs.",
    service1Title: "Garden care",
    service1Text: "Lawn mowing, weed removal, bed care and keeping outdoor areas clean.",
    service2Title: "Hedges & shrubs",
    service2Text: "Shaping, pruning and seasonal maintenance for well-kept properties.",
    service3Title: "Paving & paths",
    service3Text: "Laying, repairing and cleaning paths, terraces and yard areas.",
    service4Title: "Home & yard service",
    service4Text: "Practical help around the property so everything stays tidy and usable.",
    processEyebrow: "Process",
    processTitle: "Simple inquiry, quick start.",
    step1Title: "Get in touch",
    step1Text: "Call, send an email or open the map directly.",
    step2Title: "Discuss the job",
    step2Text: "On site or by photo, the work can be checked and agreed.",
    step3Title: "Clean execution",
    step3Text: "The work is completed reliably, neatly and on time.",
    galleryEyebrow: "Gallery",
    galleryTitle: "A look at previous work.",
    contactEyebrow: "Contact",
    contactTitle: "Ready for a well-kept outdoor area?",
    contactText:
      "Write or call directly. For a quick estimate, you can also send photos of the garden, yard or requested work by email.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Location",
  },
};

const button = document.querySelector("[data-language-toggle]");
const year = document.querySelector("[data-year]");
let language = "de";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[language][key];
  });
  button.textContent = language === "de" ? "EN" : "DE";
}

button.addEventListener("click", () => {
  setLanguage(language === "de" ? "en" : "de");
});

year.textContent = new Date().getFullYear();
setLanguage(language);
