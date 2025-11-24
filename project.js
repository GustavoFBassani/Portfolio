const { createApp } = Vue;

createApp({
    data() {
        return {
            currentLang: localStorage.getItem('lang') || 'pt',
            translations: PORTFOLIO_DATA.translations,
            project: null // Carrega no mounted
        }
    },
    mounted() {
        document.documentElement.lang = this.currentLang === 'pt' ? 'pt-BR' : 'en';
        
        // Pega o ID da URL pra saber qual projeto carregar
        const params = new URLSearchParams(window.location.search);
        const projectId = params.get('id');

        // Junta todas as listas pra facilitar a busca
        const allProjects = [
            ...PORTFOLIO_DATA.appleStoreProjects,
            ...PORTFOLIO_DATA.featuredProjects,
            ...PORTFOLIO_DATA.otherProjects
        ];

        const foundProject = allProjects.find(p => p.id === projectId);

        if (foundProject) {
            this.project = foundProject;
        } else {
            // Se o ID for inválido ou não existir, volta pra home
            window.location.href = 'index.html';
        }

        // Sincroniza idioma entre abas
        window.addEventListener('storage', (e) => {
            if (e.key === 'lang' && e.newValue) {
                this.currentLang = e.newValue;
                document.documentElement.lang = this.currentLang === 'pt' ? 'pt-BR' : 'en';
            }
        });
    },
    methods: {
        t(key) {
            return this.translations[this.currentLang][key] || key;
        }
    }
}).mount('#app');
