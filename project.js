const { createApp } = Vue;

createApp({
    data() {
        return {
            currentLang: 'en',
            translations: PORTFOLIO_DATA.translations,
            project: null
        }
    },
    mounted() {
        document.documentElement.lang = 'en';

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
        t(key) {
            return this.translations[key] || key;
        }
    }
}).mount('#app');
