// Centraliza todo o conteúdo do site (textos, projetos, traduções).
// Assim a gente não mistura dados com a lógica dos componentes.

const PORTFOLIO_DATA = {
    translations: {
        pt: {
            aboutMe: 'Sobre Mim',
            professionalExperience: 'Experiência Profissional',
            academicEducation: 'Formação Acadêmica',
            appleStoreProjects: 'Projetos na Apple Store',
            featuredProjects: 'Projetos em Destaque',
            otherProjects: 'Outros Projetos',
            technicalSkills: 'Habilidades Técnicas',
            languages: 'Idiomas',
            'Desenvolvedor iOS Mobile': 'Desenvolvedor iOS Mobile',
            'Experiência sólida com:': 'Experiência sólida com:',
            'Boa familiaridade': 'Boa familiaridade',
            'Conhecimento em desenvolvimento': 'Conhecimento em desenvolvimento',
            'Nativo': 'Nativo',
            'Intermediário': 'Intermediário',
            aboutText: `Lecionei matemática por 10 anos...`,
            backToResume: 'Voltar ao Currículo',
            aboutProject: 'Sobre o Projeto',
            whatAppDoes: 'O que o app faz',
            noFunctionalDescription: 'Descrição funcional não informada para este projeto.',
            mainTools: 'Ferramentas Principais',
            noToolsSpecified: 'Nenhuma ferramenta especificada para este projeto.',
            screenshots: 'Screenshots',
            noScreenshots: 'Sem screenshots',
            interestedInProject: 'Interessado neste projeto?',
            checkSourceCode: 'Confira o código-fonte e a demonstração ao vivo!',
            viewProject: 'Ver projeto',
            'Ver no GitHub': 'Ver no GitHub',
            'View on GitHub': 'View on GitHub',
            'Ver na Apple Store': 'Ver na Apple Store',
            'View on App Store': 'View on App Store',
            'Ver no Figma': 'Ver no Figma',
            'View on Figma': 'View on Figma'
        },
        en: {
            aboutMe: 'About Me',
            professionalExperience: 'Professional Experience',
            academicEducation: 'Academic Education',
            appleStoreProjects: 'Apple Store Projects',
            featuredProjects: 'Featured Projects',
            otherProjects: 'Other Projects',
            technicalSkills: 'Technical Skills',
            languages: 'Languages',
            'Desenvolvedor iOS Mobile': 'iOS Mobile Developer',
            'Experiência sólida com:': 'Strong experience with:',
            'Boa familiaridade': 'Good familiarity',
            'Conhecimento em desenvolvimento': 'Knowledge under development',
            'Nativo': 'Native',
            'Intermediário': 'Intermediate',
            aboutText: `I taught mathematics for 10 years...`,
            backToResume: 'Back to Resume',
            aboutProject: 'About the Project',
            whatAppDoes: 'What the app does',
            noFunctionalDescription: 'No functional description provided for this project.',
            mainTools: 'Main Tools',
            noToolsSpecified: 'No tools specified for this project.',
            screenshots: 'Screenshots',
            noScreenshots: 'No screenshots',
            interestedInProject: 'Interested in this project?',
            checkSourceCode: 'Check out the source code and live demo!',
            viewProject: 'View project',
            'Ver no GitHub': 'View on GitHub',
            'View on GitHub': 'View on GitHub',
            'Ver na Apple Store': 'View on App Store',
            'View on App Store': 'View on App Store',
            'Ver no Figma': 'View on Figma',
            'View on Figma': 'View on Figma'
        }
    },
    profile: {
        name: 'Gustavo Ferreira Bassani',
        title: 'Desenvolvedor iOS Mobile',
        email: 'gustavo_fbassani@hotmail.com',
        phone: '(51) 99764-5781',
        location: 'Porto Alegre, RS',
        photo: 'images/perfil.png'
    },
    appleStoreProjects: [
        {
            id: 'completeness',
            title: 'Completeness',
            shortDescription: 'App para monitoramento de hábitos e bem estar feito para melhorar foco e produtividade no dia a dia.',
            shortDescriptionEn: 'Habit tracking and wellness app designed to improve focus and daily productivity.',
            longDescription: 'Este aplicativo foi desenvolvido com foco em performance, escalabilidade e experiência do usuário, adotando a arquitetura MVVM para separar responsabilidades e garantir estados reativos claros entre ViewModels e Views em SwiftUI; a persistência utiliza SwiftData com modelos declarativos e consultas reativas, refletindo automaticamente as alterações nas interfaces; o projeto é estruturado em múltiplos targets para ambientes como staging e produção, além de um target dedicado para watchOS com comunicação eficiente via WatchConnectivity, oferecendo experiências rápidas no Apple Watch, incluindo complicações; os Widgets em SwiftUI fornecem informações essenciais no Home e Lock Screen com timelines inteligentes e design adaptativo; padrões de fábrica (factories) e injeção de dependência centralizam a criação de serviços, repositórios e ViewModels, facilitando a troca de implementações e aumentando a testabilidade; a suíte de UI Tests valida fluxos críticos, acessibilidade, navegação e estados de erro, integrando-se ao pipeline de build para garantir qualidade contínua; operações assíncronas utilizam Swift Concurrency (async/await e atores) para segurança de concorrência e legibilidade, com serviços de rede e sincronização isolados e estratégias de retry e cancelamento; por fim, observabilidade com logs estruturados e foco em acessibilidade (Dynamic Type, VoiceOver e alto contraste) asseguram diagnóstico eficiente, privacidade e uma experiência fluida e inclusiva em todo o ecossistema Apple.',
            longDescriptionEn: 'This application was developed with a focus on performance, scalability and user experience, adopting the MVVM architecture to separate responsibilities and ensure clear reactive states between ViewModels and Views in SwiftUI. Persistence uses SwiftData with declarative models and reactive queries, automatically reflecting interface changes. The project is structured in multiple targets for staging and production environments, plus a dedicated target for watchOS with efficient WatchConnectivity communication, offering fast Apple Watch experiences including complications. SwiftUI Widgets provide essential information on Home and Lock Screen with intelligent timelines and adaptive design. Factory patterns and dependency injection centralize service, repository and ViewModel creation, facilitating implementation swaps and increasing testability. The UI Tests suite validates critical flows, accessibility, navigation and error states, integrating with the build pipeline for continuous quality. Asynchronous operations use Swift Concurrency (async/await and actors) for concurrency safety and readability. Finally, observability with structured logs and accessibility focus (Dynamic Type, VoiceOver and high contrast) ensure efficient diagnosis, privacy and a fluid, inclusive experience across the Apple ecosystem.',
            what: '• Criação de hábitos personalizados e sugestões inteligentes conforme sua necessidade.\n• Recompensas visuais e feedback instantâneo a cada conquista.\n• Métrica de "completeness" que mostra o progresso até 100%.\n• Gráficos semanais e mensais para acompanhar consistência e evolução.\n• Widgets em SwiftUI na Tela Inicial e Bloqueio para ações rápidas (marcar, revisar, acompanhar).\n• Interface otimizada no Apple Watch para concluir hábitos em segundos.\n• Notificações interativas com ações rápidas (concluir, adiar, adicionar nota).\n• Sincronização em tempo real entre iPhone e Apple Watch.\n• Sessões rápidas no watchOS com foco em praticidade e fluidez.\n• Modo offline com atualização automática ao reconectar.\n• Agenda de hábitos com calendário e checklist diário.\n• Lembretes inteligentes que se adaptam à sua rotina.\n• Feito para quem busca consistência, equilíbrio e progresso contínuo.',
            whatEn: '• Create custom habits with intelligent suggestions based on your needs.\n• Visual rewards and instant feedback on every achievement.\n• "Completeness" metric showing progress up to 100%.\n• Weekly and monthly charts to track consistency and evolution.\n• SwiftUI Widgets on Home and Lock Screen for quick actions (mark, review, track).\n• Optimized interface on Apple Watch to complete habits in seconds.\n• Interactive notifications with quick actions (complete, defer, add note).\n• Real-time synchronization between iPhone and Apple Watch.\n• Quick sessions on watchOS focused on practicality and fluidity.\n• Offline mode with automatic updates when reconnecting.\n• Habit schedule with calendar and daily checklist.\n• Smart reminders that adapt to your routine.\n• Built for those seeking consistency, balance and continuous progress.',
            image: 'images/Completeness.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/Completeness', label: 'Ver no GitHub', labelEn: 'View on GitHub', icon: 'github' },
                { url: 'https://apps.apple.com/br/app/completeness/id6752423274', label: 'Ver na Apple Store', labelEn: 'View on App Store', icon: 'apple' }
            ],
            tools: ['SwiftUI', 'CloudKit', 'CI/CD', 'Localizable', 'WatchOS', 'Widgets', 'Swift Concurrency', 'MVVM', 'SwiftData', 'Testes', 'Scrum'],
            mainTools: ['SwiftUI', 'WatchOS', 'Widgets', 'MVVM'],
            screenshots: ['images/Completeness-1.png', 'images/Completeness-2.png', 'images/Completeness-3.png']
        }
    ],
    featuredProjects: [
        {
            id: 'freela-ontap',
            title: 'Freela-OnTap',
            shortDescription: 'Freela OnTap é uma plataforma que conecta empresas e profissionais de forma rápida, simples e sob demanda.',
            shortDescriptionEn: 'Freela OnTap is a platform that connects companies and professionals quickly, simply and on-demand.',
            longDescription: 'Freela OnTap é um aplicativo desenvolvido em UIKit com arquitetura MVC, projetado para conectar freelancers de bares e restaurantes e contratantes de maneira ágil e intuitiva. O projeto adota boas práticas de desenvolvimento, com SwiftLint garantindo a padronização e legibilidade do código. O backend utiliza CloudKit, explorando containers públicos para o armazenamento e sincronização de dados entre usuários, garantindo uma experiência fluida e integrada ao ecossistema Apple. A estrutura do app foi pensada para oferecer tratamento robusto de erros, com feedbacks claros ao usuário e logs organizados para depuração eficiente. Além disso, o projeto prioriza escalabilidade, separando responsabilidades entre controladores, modelos e serviços de rede. O resultado é um código limpo, de fácil manutenção e preparado para evoluir com novas funcionalidades, mantendo o foco em performance, segurança e usabilidade.',
            longDescriptionEn: 'Freela OnTap is an application developed in UIKit with MVC architecture, designed to connect freelancers from bars and restaurants with contractors in an agile and intuitive way. The project adopts good development practices, with SwiftLint ensuring code standardization and readability. The backend uses CloudKit, exploring public containers for data storage and synchronization between users, ensuring a fluid experience integrated with the Apple ecosystem. The app structure was designed to offer robust error handling with clear user feedback and organized logs for efficient debugging. Additionally, the project prioritizes scalability, separating responsibilities between controllers, models and network services. The result is clean, easy-to-maintain code ready to evolve with new features while maintaining focus on performance, security and usability.',
            what: '• Conecta freelancers e clientes de forma rápida e direta.\n• Criação de perfis detalhados com portfólio e habilidades.\n• Sistema de propostas com status em tempo real.\n• Filtros inteligentes para encontrar projetos alinhados ao seu perfil.\n• Histórico completo de contratos, avaliações e feedbacks.\n• Design focado em simplicidade, clareza e produtividade.\n• Ideal para quem vive do freelancing e quer tudo em um só lugar.',
            whatEn: '• Connects freelancers and clients quickly and directly.\n• Create detailed profiles with portfolio and skills.\n• Proposal system with real-time status.\n• Smart filters to find projects aligned with your profile.\n• Complete history of contracts, ratings and feedback.\n• Design focused on simplicity, clarity and productivity.\n• Ideal for those who make a living from freelancing and want everything in one place.',
            image: 'images/FreelaOnTap.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/FreelaOnTap', label: 'Ver no GitHub', labelEn: 'View on GitHub', icon: 'github' }
            ],
            tools: ['UIKit', 'CoreData', 'CloudKit', 'Public Containers', 'MVC', 'SwiftLint', 'Async/Await', 'Error Handling'],
            mainTools: ['UIKit', 'CloudKit', 'MVC'],
            screenshots: ['images/FreelaOnTap-1.png', 'images/FreelaOnTap-2.png', 'images/FreelaOnTap-3.png']
        },
        {
            id: 'expensshare',
            title: 'Expensshare',
            shortDescription: 'App para controlar despesas domésticas com interface simples.',
            shortDescriptionEn: 'App to control household expenses with a simple interface.',
            longDescription: 'O Expensshare é um aplicativo desenvolvido para fins de estudo, criado para praticar SwiftUI e arquitetura MV. O app tem como objetivo facilitar a administração de despesas domésticas e compartilhadas, com foco em simplicidade, rapidez e clareza. Ele permite que grupos como família, amigos ou colegas de casa registrem gastos, indiquem quem pagou, dividam valores de forma justa e acompanhem quanto cada pessoa deve, tudo em uma interface intuitiva e pensada para o uso cotidiano.',
            longDescriptionEn: 'Expensshare is an application developed for study purposes, created to practice SwiftUI and MV architecture. The app aims to facilitate the administration of household and shared expenses, focusing on simplicity, speed and clarity. It allows groups such as family, friends or housemates to record expenses, indicate who paid, divide amounts fairly and track how much each person owes, all in an intuitive interface designed for everyday use.',
            what: '• Registro de despesas: cadastre gastos com nome, descrição, valor, data, pagador e foto de recibo.\n• Divisão entre pessoas: associe a despesa a quem pagou e visualize como o valor impacta o saldo de cada participante.\n• Categorias personalizadas: organize gastos em categorias (ex.: mercado, contas, transporte, lazer) para facilitar análises.\n• Relatórios e insights: acompanhe totais por período e por categoria, identifique padrões de consumo e veja quem mais contribuiu.\n• Sincronização local e performance: dados salvos de forma eficiente no dispositivo, com carregamento rápido e navegação fluida.\n• Edição simples e segura: atualize qualquer despesa com poucos toques, preservando o histórico e a consistência dos dados.\n• Anexos de recibos: adicione fotos de comprovantes para facilitar conferências futuras.',
            whatEn: '• Expense registration: record expenses with name, description, amount, date, payer and receipt photo.\n• Division between people: associate expense with who paid and see how the amount impacts each participant\'s balance.\n• Custom categories: organize expenses in categories (ex.: groceries, bills, transportation, leisure) for easy analysis.\n• Reports and insights: track totals by period and category, identify spending patterns and see who contributed most.\n• Local synchronization and performance: data saved efficiently on device with fast loading and smooth navigation.\n• Simple and secure editing: update any expense with a few taps while preserving history and data consistency.\n• Receipt attachments: add photos of receipts to facilitate future verification.',
            image: 'images/expensshare.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/Expensshare/tree/main', label: 'Ver no GitHub', labelEn: 'View on GitHub', icon: 'github' },
                { url: 'https://www.figma.com/design/Z8czxgcBAknm6qa8YjgG25/Gustavo-Ferreira-Bassani?node-id=204-16261', label: 'Ver no Figma', labelEn: 'View on Figma', icon: 'figma' }
            ],
            tools: ['SwiftUI', 'SwiftData', 'Figma'],
            mainTools: ['SwiftUI', 'SwiftData', 'MV'],
            screenshots: ['images/expensshare-1.png', 'images/expensshare-2.png', 'images/expensshare-3.png']
        }
    ],
    otherProjects: [
        {
            id: 'api-challenge',
            title: 'API-Challenge',
            shortDescription: 'marketplace feito com API pública para fins de estudos .',
            shortDescriptionEn: 'Marketplace built with a public API for study purposes.',
            longDescription: 'Um marketplace fictício desenvolvido com foco em estudos de integração com APIs. O app simula um ambiente real de produtos, permitindo testar diferentes endpoints, lidar com respostas assíncronas e explorar fluxos completos de requisição, envio e tratamento de dados. O projeto foi estruturado em MVVM, com injeção de dependência para facilitar testes e modularidade. Todo o app é localizable, possui recursos de acessibilidade nativos do iOS, e foi pensado para treinar boas práticas de arquitetura, testes unitários, organização de código e experiência do usuário.',
            longDescriptionEn: 'A fictional marketplace developed for studying API integration. The app simulates a real product environment, allowing you to test different endpoints, handle asynchronous responses, and explore complete flows for requesting, sending, and processing data. The project is structured using MVVM with dependency injection to improve testing and modularity. The entire app is localizable, includes native iOS accessibility features, and was designed to practice best practices in architecture, unit tests, code organization, and user experience.',
            what: '• Simula um marketplace para treinar consumo de APIs.\n• Lista produtos com nome, imagem e preço obtidos via requisições.\n• Exibe detalhes completos de cada item, como descrição e informações adicionais.\n• Permite testar diferentes endpoints e visualizar como os dados mudam.\n•É possível favoritar e desfavoritar itens do marketplace \n• Mostra estados reais de rede, como carregamento, erro e atualização.\n• Oferece uma experiência completa para praticar requisições, respostas e processamento de dados.',
            whatEn: '• Simulates a marketplace to practice API consumption.\n• Lists products with name, image, and price fetched through requests.\n• Displays complete item details, such as descriptions and additional information.\n• Allows testing different endpoints and visualizing how the data changes.\n• Supports favoriting and unfavoriting marketplace items.\n• Shows real network states, such as loading, error, and refreshing.\n• Provides a complete experience to practice requests, responses, and data processing.',
            image: 'images/emptyIcon.png',
            links: [
                { url: 'https://github.com/EduardoFen12/API-Challange', label: 'Ver no GitHub', labelEn: 'View on GitHub', icon: 'github' },
            ],
            tools: ['SwiftUI', 'SwiftData', 'MVVM', 'API Integration', 'Dependency Injection', 'Localization', 'Accessibility', 'Unit Testing'],
            mainTools: ['SwiftUI', 'MVVM', 'API Integration'],
            screenshots: ['images/apiChallenge-1.png', 'images/apiChallenge-2.png', 'images/apiChallenge-3.png']
        },
        {
            id: 'trivia-game',
            title: 'Trivia Game',
            shortDescription: 'Jogo de terminal que busca perguntas via API e testa seus conhecimentos em tempo real.',
            shortDescriptionEn: 'Terminal-based quiz game that fetches questions from an API and tests your knowledge in real time.',
            longDescription: 'jogo de terminal desenvolvido em swift para fins de estudo. O app tem como objetivo proporcionar uma experiência divertida e educativa, permitindo que os usuários testem seus conhecimentos em diversas categorias de perguntas. Com uma interface simples e interativa, o jogo desafia os jogadores a responderem perguntas de múltipla escolha, acumulando pontos conforme avançam. O projeto foi estruturado para facilitar a adição de novas perguntas e categorias, promovendo a escalabilidade e a manutenção do código.',
            longDescriptionEn: 'Terminal game developed in Swift for study purposes. The app aims to provide a fun and educational experience, allowing users to test their knowledge in various question categories. With a simple and interactive interface, the game challenges players to answer multiple-choice questions, accumulating points as they progress. The project was structured to facilitate the addition of new questions and categories, promoting scalability and code maintenance.',
            what: '• Jogo de terminal com perguntas de múltipla escolha.\n• Diversas categorias para testar conhecimentos variados.\n• Sistema de pontuação para acompanhar o desempenho.\n• Interface simples e interativa para fácil navegação.\n• Estrutura escalável para adicionar novas perguntas e categorias.',
            whatEn: '• Terminal-based game with multiple-choice questions.\n• Various categories to test different areas of knowledge.\n• Scoring system to track your performance.\n• Simple and interactive interface for easy navigation.\n• Scalable structure for adding new questions and categories.',
            image: 'images/emptyIcon.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/TriviaGame', label: 'Ver no GitHub', labelEn: 'View on GitHub', icon: 'github' },
            ],
            tools: ['Swift', 'Foundations', 'Terminal App','API-Integration'],
            mainTools: ['Swift', 'Terminal App'],
            screenshots: []
        },
    ],
    skills: {
        'Experiência sólida com:': [
            { name: 'Swift' },
            { name: 'UIKit' },
            { name: 'SwiftUI' },
            { name: 'CoreData' },
            { name: 'SwiftData' },
            { name: 'Git/GitHub' },
            { name: 'MVC' },
            { name: 'MVVM' },
            { name: 'Factory' },
            { name: 'Singleton' },
            { name: 'Responsive Design' },
            { name: 'Figma' },
        ],
        'Boa familiaridade': [
            { name: 'CloudKit' },
            { name: 'Scrum/Agile' },
            { name: 'Concurrency' },
            { name: '(async/await, DispatchQueue)' },
            { name: 'Memory Management' },
            { name: 'Dependency Injection' },
            { name: 'Design Patterns' },
            { name: 'Unit and UI Testing' },
            { name: 'Apple WatchOS Development' },
            { name: 'Accessibility' },
            { name: 'Lifecycle in UIKit and SwiftUI' },
            { name: 'Property Wrappers' },
            { name: 'Localization and Internationalization' },
            { name: 'RESTful APIs' },
            { name: 'Error Handling (try/throws)' },
        ],
        'Conhecimento em desenvolvimento': [
            { name: 'UI/Unit Testing' },
            { name: 'CI/CD' },
            { name: 'Local and Push Notifications' },
            { name: 'Widgets in SwiftUI' },
            { name: 'WatchConnectivity' },
            { name: 'Swift Package Manager' },
            { name: 'CocoaPods' },
            { name: 'Clean and VIPER Architectures' },
        ],
    },
    languages: [
        { name: 'Português', flag: '🇧🇷', level: 'Nativo' },
        { name: 'English', flag: '🇺🇸', level: 'Intermediário' }
    ],
    experience: {
        pt: [
            {
                section: 'Experiência Profissional',
                items: [
                    {
                        position: 'Desenvolvedor iOS',
                        company: 'Empresa X',
                        location: 'Porto Alegre, RS',
                        period: '2023 - Atual',
                        description: 'Desenvolvimento de aplicativos iOS nativos.'
                    }
                ]
            }
        ],
        en: [
            {
                section: 'Professional Experience',
                items: [
                    {
                        position: 'iOS Developer',
                        company: 'Company X',
                        location: 'Porto Alegre, RS',
                        period: '2023 - Present',
                        description: 'Native iOS app development.'
                    }
                ]
            }
        ]
    },
    education: {
        pt: [
            {
                degree: 'Bacharelado em Ciência da Computação',
                institution: 'Universidade X',
                period: '2015 - 2019'
            }
        ],
        en: [
            {
                degree: 'Bachelor in Computer Science',
                institution: 'University X',
                period: '2015 - 2019'
            }
        ]
    }
};
