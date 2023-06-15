import content from './data';

/* -------------------- new JS template below -------------------- */
let aaaApp = {
  version: '2.0.0',
  author: 'Al Augustin',
  project: 'Al Augustin homepage',
  projectDate: '2023',

  // -------------------- INITIALIZATION --------------------
  init: function () {
    let context = this;

    // GLOBAL VARIABLES --------------------
    context.config = {
      currentYear: content.currentYear
    };

    // CALL DOM INVOKING FUNCTIONS HERE --------------------
    aaaApp.onDomReady();
    aaaApp.eventHandlers();
  },

  onDomReady: () => {
    aaaApp.footer();
  },

  footer: () => {
    const siteConfig = aaaApp.config;
    const footerYearHolder = document.getElementById('footerYear');

    footerYearHolder.textContent = `- ${siteConfig.currentYear}`;
  },

  // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
  eventHandlers: () => {
    const siteConfig = aaaApp.config;
    console.log({siteConfig});
  },
};

// -------------------- LOAD init() --------------------
window.addEventListener('load', () => {
  aaaApp.init();
});
