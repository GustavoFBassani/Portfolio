const { createApp } = Vue;

createApp({
    data() {
        return {
            currentLang: 'en',
            currentTheme: 'dark',
            translations: PORTFOLIO_DATA.translations,
            project: null
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

        const params = new URLSearchParams(window.location.search);
        const projectId = params.get('id');

        const allProjects = [
            ...PORTFOLIO_DATA.appleStoreProjects,
            ...PORTFOLIO_DATA.featuredProjects,
            ...PORTFOLIO_DATA.otherProjects
        ];

        const foundProject = allProjects.find(p => p.id === projectId);

        if (foundProject) {
            this.project = foundProject;
        } else {
            window.location.href = 'index.html';
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
        }
    }
}).mount('#app');
