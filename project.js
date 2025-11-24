const { createApp } = Vue;

createApp({
    data() {
        return {
            currentLang: localStorage.getItem('lang') || 'pt',
            // Usa as traduções globais do data.js
            translations: PORTFOLIO_DATA.translations,
            project: {
                title: '',
                shortDescription: '',
                longDescription: '',
                longDescriptionEn: '',
                what: '',
                whatEn: '',
                image: '',
                links: [],
                tools: [],
                screenshots: []
            }
        }
    },
    mounted() {
        // Atualiza o atributo lang do documento
        document.documentElement.lang = this.currentLang === 'pt' ? 'pt-BR' : 'en';
        
        const urlParams = new URLSearchParams(window.location.search);
        
        this.project = {
            title: urlParams.get('title') || 'Nome do Projeto',
            shortDescription: urlParams.get('short') || '',
            longDescription: urlParams.get('long') || 'Descrição do projeto',
            longDescriptionEn: urlParams.get('longEn') || 'Project description',
            what: urlParams.get('what') || '',
            whatEn: urlParams.get('whatEn') || '',
            image: urlParams.get('image') || 'https://via.placeholder.com/1200x400/667eea/ffffff?text=Projeto',
            links: [],
            tools: [],
            screenshots: []
        };

        const linksParam = urlParams.get('links');
        if (linksParam) {
            try {
                this.project.links = JSON.parse(linksParam);
            } catch (e) {
                this.project.links = [linksParam];
            }
        } else if (urlParams.get('link')) {
            this.project.links = [urlParams.get('link')];
        }
        
        const toolsParam = urlParams.get('tools');
        if (toolsParam) {
            try {
                const parsed = JSON.parse(toolsParam);
                this.project.tools = Array.isArray(parsed) ? parsed : [];
            } catch (e) {
                this.project.tools = toolsParam ? toolsParam.split(',').map(s => s.trim()).filter(Boolean) : [];
            }
        }
        
        const screenshotsParam = urlParams.get('screenshots');
        if (screenshotsParam) {
            try {
                const parsed = JSON.parse(screenshotsParam);
                this.project.screenshots = Array.isArray(parsed) ? parsed : [];
            } catch (e) {
                this.project.screenshots = screenshotsParam ? screenshotsParam.split(',').map(s => s.trim()).filter(Boolean) : [];
            }
        }

        // Escuta mudanças no localStorage para sincronizar idioma entre abas/páginas
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
