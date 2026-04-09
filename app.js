const { createApp } = Vue;

createApp({
    data() {
        return {
            ...PORTFOLIO_DATA,
            activeModal: null,
            currentLang: 'en',
            currentTheme: 'dark',
        }
    },
    computed: {
        currentExperience() {
            return this.experience;
        },
        currentEducation() {
            return this.education;
        },
        recentExperiences() {
            const allExps = [];
            if (this.experience) {
                this.experience.forEach(section => {
                    if (section.items) {
                        allExps.push(...section.items);
                    }
                });
            }
            return allExps.slice(0, 2);
        },
        allProjects() {
            return PORTFOLIO_DATA.projects.map(p => ({ ...p, inAppStore: p.inAppStore ?? false }));
        }
    },
    methods: {
        toggleTheme() {
            this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('portfolioTheme', this.currentTheme);
            if (this.currentTheme === 'light') {
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
            }
        },
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
        const savedTheme = localStorage.getItem('portfolioTheme');
        const theme = savedTheme || ((window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark');
        this.currentTheme = theme;
        if (theme === 'light') {
            document.body.classList.add('light-theme');
        }

        const savedLang = localStorage.getItem('portfolioLang');
        if (savedLang) {
            this.currentLang = savedLang;
        } else {
            const userLang = navigator.language || navigator.userLanguage || '';
            this.currentLang = userLang.toLowerCase().includes('pt') ? 'pt' : 'en';
        }
    }
}).mount('#app');
