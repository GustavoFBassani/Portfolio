const { createApp } = Vue;

createApp({
    data() {
        return {
            ...PORTFOLIO_DATA,
            editMode: false,
            activeModal: null,
            currentLang: 'en',
        }
    },
    computed: {
        currentExperience() {
            return this.experience;
        },
        currentEducation() {
            return this.education;
        },
        allProjects() {
            const apple = this.appleStoreProjects.map(p => ({ ...p, inAppStore: true }));
            const feat = this.featuredProjects.map(p => ({ ...p, inAppStore: false }));
            const others = this.otherProjects.map(p => ({ ...p, inAppStore: false }));
            return [...apple, ...feat, ...others];
        }
    },
    methods: {
        toggleLanguage() {
            this.currentLang = this.currentLang === 'en' ? 'pt' : 'en';
            localStorage.setItem('portfolioLang', this.currentLang);
        },
        t(key) {
            const entry = this.translations?.[key];
            if (!entry) return key;
            return typeof entry === 'string' ? entry : (entry[this.currentLang] || entry['en'] || key);
        },
        l(obj) {
            if (!obj) return '';
            if (typeof obj === 'string') return obj;
            return obj[this.currentLang] || obj['en'] || '';
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
            return `projeto.html?id=${project.id}`;
        }
    },
    mounted() {
        const savedLang = localStorage.getItem('portfolioLang');
        if (savedLang) {
            this.currentLang = savedLang;
        } else {
            const userLang = navigator.language || navigator.userLanguage || '';
            this.currentLang = userLang.toLowerCase().includes('pt') ? 'pt' : 'en';
        }
    }
}).mount('#app');
