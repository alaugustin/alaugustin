/* -------------------- new JS template below -------------------- */
const aaaApp = {
    projectData: {
        version: '2.0.0',
        author: 'Al Augustin',
        project: 'Al Augustin homepage',
        projectDate: '2023',
    },

    // GLOBAL VARIABLES --------------------
    globalVar: {
        footerHolder: document.getElementById('currentYear'),
        currentYear: new Date().getFullYear()
    },

    // -------------------- INITIALIZATION --------------------
    init: function () {

        // CALL DOM INVOKING FUNCTIONS HERE --------------------
        aaaApp.onDomReady();
        aaaApp.eventHandlers();
    },

    onDomReady: () => {
        aaaApp.footer();
    },

    footer: () => {
        const { currentYear, footerHolder } = aaaApp.globalVar
        const footerYearHolder = footerHolder;

        footerYearHolder.textContent = `- ${currentYear}`;
    },

    // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------
    eventHandlers: () => {
        console.log(`eventHandlers here`);
    },
};

// -------------------- LOAD init() --------------------
window.addEventListener('load', () => {
    aaaApp.init();
});
