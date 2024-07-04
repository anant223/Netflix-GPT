export const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];

export const Language = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "hi",
    name: "हिंदी",
  },
  {
    code: "es",
    name: "español",
  },
  {
    code: "du",
    name: "Deutsch",
  },
];

export const lang = {
  en: {
    search: "Get Started >",
    inputPlaceholder: "Email Address",
    heading: "Unlimited movies, TV shows and more",
    para: "Watch anywhere. Cancel anytime",
    para2:
      "Ready to watch? Enter your email to create or restart your membership.",
  },

  hi: {
    search: "शुरू करें",
    inputPlaceholder: "मेल पता",
    heading: "असीमित फिल्में, टीवी शो और बहुत कुछ",
    para: "कहीं भी देखो. किसी भी समय रद्द करें",
    para2:
      "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।",
  },

  es: {
    search: "Empezar",
    inputPlaceholder: "Dirección de correo electrónico",
    heading: "Películas ilimitadas, programas de TV y más",
    para: "Mira en cualquier lugar. Cancelar en cualquier momento",
    para2:
      "¿Listo para mirar? Ingrese su correo electrónico para crear o reiniciar su membresía.",
  },
  du: {
    search: "loslegen",
    inputPlaceholder: "E-Mail-Adresse",
    heading: "Unbegrenzt viele Filme, Fernsehsendungen und mehr",
    para: "Überall ansehen. Jederzeit kündbar",
    para2: "Bereit zum Zuschauen? Geben Sie Ihre E-Mail-Adresse ein, um Ihre Mitgliedschaft zu erstellen oder neu zu starten.",
  },
};


export const fewObjects = [
  {
    link: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
    ,heading: "Enjoy on your TV",
    para: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
  },
  {
    link: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    heading: "Download your shows to watch offline",
    para: "Save your favourites easily and always have something to watch.",
  },
  {
    link: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
    heading: "Watch everywhere",
    para: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
  },
  {
    link: "https://occ-0-2164-1490.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d",
    heading: "Create profiles for kids",
    para: "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
  },
];

export   const QNAContent = [
  {
    id: 0,
    Question: "What is Netflix?",
    Ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices",
    Ans2: ""
  },
  {
    id: 1,
    Question: "How much does Netflix cost?",
    Ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    Ans2: ''
  },
  {
    id:2,
    Question: "Where can i watch?",
    Ans: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." ,
    Ans2: "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    id: 3,
    Question: "How do i cancel?",
    Ans: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
];

export const vol = ( 
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="white"
    className="bi bi-volume-up"
    viewBox="0 0 16 16"
  >
    <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
    <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11" />
  </svg>
);
export const nonvol = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="white"
    className="bi bi-volume-mute"
    viewBox="0 0 16 16"
  >
    <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0" />
  </svg>
);


