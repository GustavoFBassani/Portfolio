const { createApp } = Vue;

createApp({
    data() {
        return {
            // Traz tudo do data.js pra cá
            ...PORTFOLIO_DATA,
            
            // Controle de UI
            editMode: false,
            activeModal: null,
            currentLang: localStorage.getItem('lang') || 'pt',
        }
    },
    computed: {
        currentExperience() {
            return this.experience[this.currentLang] || this.experience.pt;
        },
        currentEducation() {
            return this.education[this.currentLang] || this.education.pt;
        }
    },
    methods: {
        t(key) {
            return this.translations?.[this.currentLang]?.[key] || key;
        },
        toggleLanguage() {
            this.currentLang = this.currentLang === 'pt' ? 'en' : 'pt';
            localStorage.setItem('lang', this.currentLang);
            document.documentElement.lang = this.currentLang === 'pt' ? 'pt-BR' : 'en';
        },
        openModal(modalName) {
            this.activeModal = modalName;
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.activeModal = null;
            document.body.style.overflow = 'auto';
        },
        getProjectLink(project) {
            // Manda pro detalhe usando só o ID
            return `projeto.html?id=${project.id}`;
        }
    }
}).mount('#app');
