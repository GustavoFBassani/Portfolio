const { createApp } = Vue;

createApp({
    data() {
        return {
            // Carrega os dados do arquivo data.js
            ...PORTFOLIO_DATA,
            
            // Estado da aplicação (UI)
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
        updateField(section, field, event) {
            const newValue = event.target.innerText.trim();
            if (field) {
                this[section][field] = newValue;
            }
        },
        getProjectLink(project) {
            const params = new URLSearchParams({
                title: project.title,
                image: project.image,
                links: JSON.stringify(project.links || []),
                screenshots: JSON.stringify(project.screenshots || []),
                short: project.shortDescription || '',
                long: project.longDescription || '',
                longEn: project.longDescriptionEn || '',
                what: project.what || '',
                whatEn: project.whatEn || '',
                tools: JSON.stringify(project.tools || [])
            });
            return `projeto.html?${params.toString()}`;
        }
    }
}).mount('#app');
