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
        }
    },
    methods: {
        t(key) {
            return this.translations?.[key] || key;
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
    }
}).mount('#app');
