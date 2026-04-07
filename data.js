// Centraliza todo o conteúdo do site (textos, projetos, traduções).
// Estrutura atualizada para suporte multi-idioma (en, pt).

const PORTFOLIO_DATA = {
    translations: {
        aboutMe: { en: 'About Me', pt: 'Sobre Mim' },
        professionalExperience: { en: 'Professional Experience', pt: 'Experiência Profissional' },
        academicEducation: { en: 'Academic Education', pt: 'Formação Acadêmica' },
        appleStoreProjects: { en: 'Apple Store Projects', pt: 'Projetos na App Store' },
        featuredProjects: { en: 'Featured Projects', pt: 'Projetos em Destaque' },
        otherProjects: { en: 'Other Projects', pt: 'Outros Projetos' },
        aboutText: {
            en: `iOS Developer in training, with a unique trajectory combining 10 years of experience in mathematics teaching with a strong passion for technology. Initially moved to Porto Alegre to study Metallurgical Engineering, but found in mathematics education a way to unite work and passion, teaching ever since. From this experience, I developed an interest in technology as a learning tool and programming logic, which motivated me to steer my career towards software development.

Currently, I am a scholarship holder at the Apple Developer Academy, where I develop projects for the iOS ecosystem focusing on Swift, SwiftUI, UIKit, and software architecture. In parallel, I am studying Internet Systems Technology at IFRS, deepening knowledge in algorithms, data structures, and object-oriented programming. My goal is to unite my analytical base developed in mathematics with the creation of innovative and impactful technological solutions.`,
            pt: `Desenvolvedor iOS em formação com uma trajetória singular, unindo 10 anos de experiência lecionando matemática com uma forte paixão por tecnologia. Inicialmente me mudei para Porto Alegre para estudar Engenharia Metalúrgica, mas encontrei no ensino da matemática uma maneira de unir trabalho e paixão. Dessa vivência, desenvolvi meu interesse pela tecnologia como ferramenta de aprendizagem e lógica de programação, o que me impulsionou a redirecionar a carreira para a área de desenvolvimento de software.

Atualmente sou bolsista na Apple Developer Academy (PUCRS), onde desenvolvo projetos nativos para o ecossistema iOS explorando Swift, SwiftUI, UIKit e arquitetura de software escalável. Em paralelo, curso Tecnologia em Sistemas para Internet no IFRS, aprofundando minha visão em algoritmos e estrutura de dados. O meu grande objetivo é integrar as fortes bases analíticas que tirei da matemática na construção de aplicativos de grande impacto.`
        },
        backToResume: { en: 'Back to Resume', pt: 'Voltar ao Portfólio' },
        aboutProject: { en: 'About the Project', pt: 'Sobre o Projeto' },
        whatAppDoes: { en: 'What the app does', pt: 'O que o app faz' },
        noFunctionalDescription: { en: 'No functional description provided for this project.', pt: 'Nenhuma descrição funcional fornecida.' },
        mainTools: { en: 'Main Tools', pt: 'Principais Ferramentas' },
        noToolsSpecified: { en: 'No tools specified for this project.', pt: 'Nenhuma ferramenta listada.' },
        screenshots: { en: 'Screenshots', pt: 'Capturas de Tela' },
        noScreenshots: { en: 'No screenshots', pt: 'Nenhuma imagem' },
        interestedInProject: { en: 'Interested in this project?', pt: 'Interessado neste projeto?' },
        checkSourceCode: { en: 'Check out the source code and live demo!', pt: 'Dê uma olhada no código e faça o download!' },
        viewProject: { en: 'View project', pt: 'Ver Projeto' },
        'View on GitHub': { en: 'View on GitHub', pt: 'Ver no GitHub' },
        'View on App Store': { en: 'View on App Store', pt: 'Ver na App Store' },
        'View on Figma': { en: 'View on Figma', pt: 'Ver no Figma' }
    },
    profile: {
        name: 'Gustavo Ferreira Bassani',
        title: { en: 'Welcome to my iOS Development Portfolio!', pt: 'Bem-vindo ao meu Portfólio de iOS!' },
        email: 'gustavo_fbassani@hotmail.com',
        photo: 'images/perfil.png'
    },

    appleStoreProjects: [
        {
            id: 'completeness',
            title: 'Completeness',
            shortDescription: { 
                en: 'Habit tracking app to improve focus and daily productivity.', 
                pt: 'Aplicativo de rastreamento de hábitos focado em produtividade diária.' 
            },
            longDescription: {
                en: 'This application was developed with a focus on performance, scalability and user experience, adopting the MVVM architecture to separate responsibilities and ensure clear reactive states between ViewModels and Views in SwiftUI. Persistence uses SwiftData with declarative models and reactive queries, automatically reflecting interface changes. The project is structured in multiple targets for staging and production environments, plus a dedicated target for watchOS with efficient WatchConnectivity communication, offering fast Apple Watch experiences including complications. SwiftUI Widgets provide essential information on Home and Lock Screen with intelligent timelines and adaptive design. Factory patterns and dependency injection centralize service, repository and ViewModel creation, facilitating implementation swaps and increasing testability. The UI Tests suite validates critical flows, accessibility, navigation and error states, integrating with the build pipeline for continuous quality. Asynchronous operations use Swift Concurrency (async/await and actors) for concurrency safety and readability. Finally, observability with structured logs and accessibility focus (Dynamic Type, VoiceOver and high contrast) ensure efficient diagnosis, privacy and a fluid, inclusive experience across the Apple ecosystem.',
                pt: 'Este aplicativo foi focado em desempenho, escalabilidade e UX, adotando arquitetura MVVM limpa e isolamento de estado com SwiftUI. A persistência dos dados foi erguida com o SwiftData usando modelos declarativos. O projeto apresenta multienvironments (Produção/Stage) e suporta um ecossistema estendido incluindo um app dedicado super veloz para watchOS via WatchConnectivity. Recursos como Widgets na Home/Lock Screen com timelines dinâmicos também constam. Padrões de Injeção de Dependências e abstrações foram elaborados para garantir total cobertura em Testes de UI e Unitários. A base assíncrona roda via Swift Concurrency (Atores e async/await). Trata-se de um projeto sólido com logs estruturados e suporte à acessibilidade nativa (VoiceOver interativo e letreiros dinâmicos).'
            },
            what: {
                en: '• Create custom habits with intelligent suggestions based on your needs.\n• Visual rewards and instant feedback on every achievement.\n• "Completeness" metric showing progress up to 100%.\n• Weekly and monthly charts to track consistency and evolution.\n• SwiftUI Widgets on Home and Lock Screen for quick actions (mark, review, track).\n• Optimized interface on Apple Watch to complete habits in seconds.\n• Interactive notifications with quick actions (complete, defer, add note).\n• Real-time synchronization between iPhone and Apple Watch.\n• Quick sessions on watchOS focused on practicality and fluidity.\n• Offline mode with automatic updates when reconnecting.\n• Habit schedule with calendar and daily checklist.\n• Smart reminders that adapt to your routine.\n• Built for those seeking consistency, balance and continuous progress.',
                pt: '• Criação rotineira customizada com sugestões inteligentes pelo próprio uso.\n• Reconhecimentos visuais dinâmicos em cada quebra de recorde.\n• Monitoramento diário indicando saúde de rotina e "Completeza" beirando os 100%.\n• Análises através de gráficos interativos do SwiftCharts com janelas temporais.\n• Widgets com deep link para engajamento instantâneo via tela de bloqueio.\n• Ações rápidas unificadas no braço via Apple Watch sem pegar o celular.\n• Integração fluida em Notificações Locais com Call To Actions.\n• 100% Funcional Offline com sincronias em background.\n• Sistema de lembrete com agendamento local.'
            },
            image: 'images/Completeness.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/Completeness', label: 'View on GitHub', icon: 'github' },
                { url: 'https://apps.apple.com/br/app/completeness/id6752423274', label: 'View on App Store', icon: 'apple' }
            ],
            tools: ['SwiftUI', 'CloudKit', 'CI/CD', 'Localizable', 'WatchOS', 'Widgets', 'Swift Concurrency', 'MVVM', 'SwiftData', 'Testes', 'Scrum'],
            mainTools: ['SwiftUI', 'WatchOS', 'Widgets', 'MVVM'],
            screenshots: ['images/Completeness-1.png', 'images/Completeness-2.png', 'images/Completeness-3.png']
        },
        {
            id: 'nikki-journal',
            title: 'Nikki Journal',
            shortDescription: {
                en: 'Journaling app with Japanese aesthetics and immersive 3D elements.',
                pt: 'Um Diário focado em estéticas Orientais minimalistas com visualizadores imersivos em 3D.'
            },
            longDescription: {
                en: 'Nikki Journal was developed with a focus on sensory experience, emotional clarity and structured reflection, using SwiftUI and the MVVM architecture to ensure a clear separation of responsibilities between Views and ViewModels. The app explores three-dimensional concepts through RealityKit and Reality Composer, using 3D objects as narrative and symbolic elements that reinforce the meaning of journal entries. Data persistence is handled with SwiftData, enabling declarative models and reactive UI updates as users write or revisit their records. The project emphasizes code clarity and structural simplicity, with conscious use of Swift Concurrency (async/await) for future asynchronous operations. Nikki Journal aims to transform journaling into a moment of pause and contemplation, blending technology, minimalist Japanese design and personal storytelling.',
                pt: 'Ao desenharmos o projeto Nikki Journal, o foco arquitetônico foi a imersão emocional combinada à reflexão através de um design extremamente calmo e contemplativo usando puramente SwiftUI. O diferencial absurdo do App é a aplicação conceitual 3D utilizando a RealityKit. No app cada nota e representação emocional converte em metáforas em objetos 3D renderizadas via GPU de forma leve. Os dados são guardados e atrelados de forma imutável usando a elegância do SwiftData e a separação sólida na View Model. A experiência é zen, livre de distrações para que o usuário interaja em tempo real com sua narrativa.'
            },
            what: {
                en: '• Free-form journaling focused on personal reflection.\n• Japanese-inspired aesthetics with minimalist and symbolic design.\n• Integrated 3D elements used as visual and narrative metaphors.\n• Interactive objects created with Reality Composer to reinforce emotions and intentions.\n• Clear organization of entries for easy reading and revisiting.\n• Calm, distraction-free experience designed for moments of pause.\n• Architectural foundation prepared for future expansion.',
                pt: '• Tela livre isolada para pensamentos focados em pausa.\n• Tema japonês unicamente construído sem bibliotecas visuais de terceiros.\n• Troca narrativa contendo renderização 3D como metáforas reativas.\n• Arquivo vivo manipulável em realidade virtual desenhado via Reality Composer.\n• Grade com organização automática e filtros.\n• Experiência extremamente orgânica voltadas à ansiedade.\n• Arquitetura escalável para integrações de nuvem futuras.'
            },
            image: 'images/NikkiJournal.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/Nikki', label: 'View on GitHub', icon: 'github' },
                { url: 'https://apps.apple.com/br/app/nikki-journal/id6756323938?l=en-GB', label: 'View on App Store', icon: 'apple' }
            ],
            tools: ['SwiftUI', 'RealityKit', 'Reality Composer', 'SwiftData', 'MVVM', 'Swift Concurrency', 'Localizable'],
            mainTools: ['SwiftUI', 'RealityKit', 'MVVM'],
            screenshots: ['images/Nikki-1.png', 'images/Nikki-2.png', 'images/Nikki-3.png']
        }
    ],
    featuredProjects: [
        {
            id: 'freela-ontap',
            title: 'Freela-OnTap',
            shortDescription: {
                en: 'Platform connecting companies and freelancers on-demand.',
                pt: 'Plataforma nativa sob demanda conectando freelances ao mercado vivo.'
            },
            longDescription: {
                en: 'Freela OnTap is an application developed in UIKit with MVC architecture, designed to connect freelancers from bars and restaurants with contractors in an agile and intuitive way. The project adopts good development practices, with SwiftLint ensuring code standardization and readability. The backend uses CloudKit, exploring public containers for data storage and synchronization between users, ensuring a fluid experience integrated with the Apple ecosystem. The app structure was designed to offer robust error handling with clear user feedback and organized logs for efficient debugging. Additionally, the project prioritizes scalability, separating responsibilities between controllers, models and network services. The result is clean, easy-to-maintain code ready to evolve with new features while maintaining focus on performance, security and usability.',
                pt: 'Freela OnTap é o balcão desenhado 100% via UIKit com separação limpa clássica de Modelo/Vista/Controlador focando numa ponte instantânea entre freelancers de bar e empresas buscando suporte ágil. A integridade visual e funcional foi gerida rigorosamente com os logs e linters do SwiftLint. O mais divertido foi construir a infraestrutura total das requisições via Containers Públicos do CloudKit sem depender de parceiros ou Backenders terceiros – tudo fluindo via ecossistema iOS. Tratativas robustas nas requisições impedem "breakeds" de interface em caso de falha de serviço, gerenciando falhas customizadas. É um projeto nativo purista com base e redes estáveis.'
            },
            what: {
                en: '• Connects freelancers and clients quickly and directly.\n• Create detailed profiles with portfolio and skills.\n• Proposal system with real-time status.\n• Smart filters to find projects aligned with your profile.\n• Complete history of contracts, ratings and feedback.\n• Design focused on simplicity, clarity and productivity.\n• Ideal for those who make a living from freelancing and want everything in one place.',
                pt: '• Pareamento inteligente ligando contratantes diretos com banco de perfis.\n• Sistema de Currículo Nativo e portabilidade dentro do próprio perfil no celular.\n• Atualização fluida do status das negociações baseada no modelo relacional.\n• Sistema de buscas complexos com algoritmos baseados em distâncias e nicho.\n• Histórico de contratos unificados garantindo avaliações diretas e confiança do banco.\n• Estética UI clean priorizando informações densas.'
            },
            image: 'images/FreelaOnTap.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/FreelaOnTap', label: 'View on GitHub', icon: 'github' }
            ],
            tools: ['UIKit', 'CoreData', 'CloudKit', 'Public Containers', 'MVC', 'SwiftLint', 'Async/Await', 'Error Handling'],
            mainTools: ['UIKit', 'CloudKit', 'MVC'],
            screenshots: ['images/Freelaontap-1.png', 'images/Freelaontap-2.png', 'images/Freelaontap-3.png']
        },
        {
            id: 'expensshare',
            title: 'Expensshare',
            shortDescription: {
                en: 'App to split and track household expenses simply.',
                pt: 'O controle transparente para administrar e fracionar as contas colaborativas.'
            },
            longDescription: {
                en: 'Expensshare is an application developed for study purposes, created to practice SwiftUI and MV architecture. The app aims to facilitate the administration of household and shared expenses, focusing on simplicity, speed and clarity. It allows groups such as family, friends or housemates to record expenses, indicate who paid, divide amounts fairly and track how much each person owes, all in an intuitive interface designed for everyday use.',
                pt: 'Desenvolvido no tempo livre por propósitos educacionais visando fortalecer a modelagem pura via MV e as últimas atualizações do SwiftUI, ExpensShare é a solução amigável destinada à complexa tarefa de dividir repasses entre amigos ou coabitantes. Do design aos módulos de registro e cálculo residual de dívidas justas, cada canto do APP foi feito visando diminuir etapas.'
            },
            what: {
                en: '• Expense registration: record expenses with name, description, amount, date, payer and receipt photo.\n• Division between people: associate expense with who paid and see how the amount impacts each participant\'s balance.\n• Custom categories: organize expenses in categories (ex.: groceries, bills, transportation, leisure) for easy analysis.\n• Reports and insights: track totals by period and category, identify spending patterns and see who contributed most.\n• Local synchronization and performance: data saved efficiently on device with fast loading and smooth navigation.\n• Simple and secure editing: update any expense with a few taps while preserving history and data consistency.\n• Receipt attachments: add photos of receipts to facilitate future verification.',
                pt: '• Base de registros de depósitos, onde, porquê e a foto real do documento da conta alocada para os participantes.\n• Cálculo instantâneo do impacto por pessoa unificado via dashboards.\n• Suporte nativo em subcategorias de uso financeiro e labels adaptáveis.\n• Insigths e painéis detalhados sem sobre-carregar a linha de leitura.\n• Máxima fluidez garantindo integridade das mudanças e banco de edições histórico.'
            },
            image: 'images/expensshare.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/Expensshare/tree/main', label: 'View on GitHub', icon: 'github' },
                { url: 'https://www.figma.com/design/Z8czxgcBAknm6qa8YjgG25/Gustavo-Ferreira-Bassani?node-id=204-16261', label: 'View on Figma', icon: 'figma' }
            ],
            tools: ['SwiftUI', 'SwiftData', 'Figma'],
            mainTools: ['SwiftUI', 'SwiftData', 'MV'],
            screenshots: ['images/Expensshare-1.png', 'images/Expensshare-2.png', 'images/Expensshare-3.png']
        },
        {
            id: 'before-it-floods',
            title: 'Before It Floods',
            shortDescription: {
                en: 'Interactive educational experience about flood preparedness and risk awareness.',
                pt: 'Experiência lúdica para mitigações rápidas relacionadas com desastres fluviais.'
            },
            longDescription: {
                en: 'Before It Floods is an interactive experience created for the Swift Student Challenge with the goal of raising awareness about flood risks and the importance of preparation before extreme weather events. The project combines educational storytelling with simple interactive elements to guide the user through decisions and situations related to flood preparedness. Developed using Swift and Apple’s native frameworks, the project focuses on clarity, accessibility, and user engagement, presenting information through a short narrative flow designed to be easily understood in a few minutes. The app emphasizes environmental awareness and social responsibility, encouraging users to think about preventive actions and safety measures before disasters occur. The codebase was structured with simplicity and readability in mind, prioritizing maintainable architecture and a clear separation between interface and logic.',
                pt: 'Submissão ao torneio mundial da Apple (Swift Student Challenge), Before it Floods possui impacto e mensagem forte na comunidade construído para disseminar inteligência e mitigações sobre tragédias como em enchentes massivas urbanas no Sul do Brasil (minha terra e cenário do drama). Eu atuei juntando as premissas educativas com as ferramentas maravilhosas das Game Engines nativas em SpriteKit, transformando cada situação numa interação de consequência clara. Tudo arquitetado como uma jornada lúdica desenhada num escopo extremamente enxuto e robusto de UX com viés social.'
            },
            what: {
                en: '• Interactive narrative experience about flood preparedness.\n• Educational approach focused on prevention and safety.\n• Short guided flow designed to be completed in a few minutes.\n• Simple decision-based interactions to reinforce learning.\n• Clear visual communication focused on accessibility.\n• Project created specifically for the Swift Student Challenge.\n• Focus on social impact and environmental awareness.',
                pt: '• Histórias interativas baseadas em consequências diretas focadas em reações extremas aos temporais.\n• Abordagem educacional sem jargões engessados com feedback da engine lúdica.\n• Acessibilidade nativa e progressão de cenas simples e de altíssima resposta tátil.\n• Projeto concebido 100% de forma autoral para as restrições da WWDC com impacto sócio-ambiental explícito.'
            },
            image: "images/BeforeItFlood.png",
            links: [
                { "url": "https://github.com/GustavoFBassani/BeforeItFloods", "label": "View on GitHub", "icon": "github" }
            ],
            tools: ["Swift", "SwiftUI", "SpriteKit", "Xcode", "User Experience Design", "Educational Design"],
            mainTools: ["Swift", "SwiftUI", "SpriteKit", "UX Design"],
            screenshots: ["images/BeforeItFloods-1.png", "images/BeforeItFloods-2.png", "images/BeforeItFloods-3.png"]
        },
        {
            id: 'StarBits',
            title: 'StarBits',
            shortDescription: {
                en: 'A grid-based puzzle game where you guide a fire puffle through ice caves.',
                pt: 'Grid game inteligente com ambientação congelada num projeto Game Challenge 2D via Apple.'
            },
            longDescription: {
                en: "StarBits is an engaging grid-based puzzle game developed as a project for the Apple Game Challenge. Inspired by classic mini-games, the player must guide a fire puffle through increasingly complex ice caves without falling into the water. The gameplay revolves around tactical movement, melting ice tiles, pushing rocks to bridge gaps, and using portals to collect stars and reach the objective. Developed entirely with Apple's native frameworks, the app features a seamless combination of SwiftUI for responsive, modern menus (like the world and level selector), and SpriteKit for dynamic 2D mechanics. Local progression is securely managed using SwiftData, allowing players to unlock new worlds based on their performance. The codebase showcases strong architectural skills, employing a modular design that clearly separates game entities, tile management, and movement logic.",
                pt: 'Criado ao longo da base de gamificação, ele se inspira em resoluções lógicas mecânicas e quebra-cabeças sob grades para fundir o mundo de blocos de gelos. Uma faísca e muitos movimentos cruciais a frente. A integração e os laços do GameplayKit juntamente ao SpriteKit ditam toda a força estrutural que este tipo de renderização precisa em processamento móvel e ao mesmo tempo funde aos menus vivos criados sobre SwiftUI nativo. Tudo está modularizado separando comportamentos de blocos específicos e dados rastreáveis da SwiftData por fase.'
            },
            what: {
                en: "• Classic grid-based puzzle mechanics with progressive difficulty.\n• Multiple themed worlds and levels to unlock using collected stars.\n• Interactive elements including pushable rocks, melting ice, and portals.\n• Intuitive custom on-screen D-Pad controls designed for iOS.\n• Seamless integration between SwiftUI interfaces and SpriteKit game scenes.\n• Player progress and unlocked data persisted locally using SwiftData.\n• Clean architecture with isolated manager classes for entities and logic.",
                pt: '• Motor clássico baseado em grids, detecção de colisões e física contínua aplicada com atrito em gelo.\n• Gestão customizada dos mundos dividida na lógica limpa em SwiftUI.\n• Ações exclusivas atreladas a reações secundárias, blocos rochosos arrastáveis empurrando gelos com base no peso das portas reativas.\n• Arquitetura forte, baseada em camadas gerenciadoras independentes no ecossistema sem pacotes de terceiros.\n• Progresso blindado e salvo veloz via SwiftData de ponta.'
            },
            image: "images/StarBits.png",
            links: [
                { url: "https://github.com/SandlerRodrigo/game-challenge", "label": "View on GitHub", "icon": "github" }
            ],
            tools: ["Swift", "SwiftUI", "SpriteKit", "SwiftData", "GameplayKit", "Xcode"],
            mainTools: ["SwiftUI", "SpriteKit", "SwiftData"],
            screenshots: ["images/StarBits-1.png", "images/StarBits-2.png", "images/StarBits-3.png"]
        }
    ],
    otherProjects: [
        {
            id: 'api-challenge',
            title: 'API-Challenge',
            shortDescription: {
                en: 'Fictional marketplace built with a public API for study.',
                pt: 'Manequim e infraestrutura de e-commerce criado focando na conexão de endpoints ao Front.'
            },
            longDescription: {
                en: 'A fictional marketplace developed for studying API integration. The app simulates a real product environment, allowing you to test different endpoints, handle asynchronous responses, and explore complete flows for requesting, sending, and processing data. The project is structured using MVVM with dependency injection to improve testing and modularity. The entire app is localizable, includes native iOS accessibility features, and was designed to practice best practices in architecture, unit tests, code organization, and user experience.',
                pt: 'Uma aplicação baseada unicamente no processo de consumo, modelagem limpa na deserialização e tratamentos dinâmicos ligados aos fluxos de uma Fake API REST simulando e-commerces. Os dados remotos constroem a interface, exigindo lidar diretamente de forma nativa e isolada aos fluxos complexos de Async do projeto mantendo o App fluido mas lidando com injeções, mocking nativo nos testes de unidade da ViewModel e o tratamento de cache e dados na interface com as garantias nativas de segurança a concorrência.'
            },
            what: {
                en: '• Simulates a marketplace to practice API consumption.\n• Lists products with name, image, and price fetched through requests.\n• Displays complete item details, such as descriptions and additional information.\n• Allows testing different endpoints and visualizing how the data changes.\n• Supports favoriting and unfavoriting marketplace items.\n• Shows real network states, such as loading, error, and refreshing.\n• Provides a complete experience to practice requests, responses, and data processing.',
                pt: '• Mockers focados em simulações transacionais de Market.\n• Tratamento seguro da hierarquia Json para Models fortemente tipados via structs em Swift limitando "undefined behaviours" (comportamentos ocultos).\n• Telas que conversam assíncronas gerindo loadings espetaculares focados na UX dos refreshs de busca remota.\n• Arquitetado na fundação moderna do ecossistema assíncrono Apple sem bibliotecas como RXSwift ou Alamofire.'
            },
            image: 'images/emptyIcon.png',
            links: [
                { url: 'https://github.com/EduardoFen12/API-Challange', label: 'View on GitHub', icon: 'github' },
            ],
            tools: ['SwiftUI', 'SwiftData', 'MVVM', 'API Integration', 'Dependency Injection', 'Localization', 'Accessibility', 'Unit Testing'],
            mainTools: ['SwiftUI', 'MVVM', 'API Integration'],
            screenshots: ['images/apiChallenge-1.png', 'images/apiChallenge-2.png', 'images/apiChallenge-3.png']
        },
        {
            id: 'trivia-game',
            title: 'Trivia Game',
            shortDescription: {
                en: 'Terminal quiz game fetching questions from an API in real time.',
                pt: 'Executável em Prompt (Terminal) processando Game APIs externas via linhas de comando.'
            },
            longDescription: {
                en: 'Terminal game developed in Swift for study purposes. The app aims to provide a fun and educational experience, allowing users to test their knowledge in various question categories. With a simple and interactive interface, the game challenges players to answer multiple-choice questions, accumulating points as they progress. The project was structured to facilitate the addition of new questions and categories, promoting scalability and code maintenance.',
                pt: 'Sólido app via Swift compilado via comando em macOS contendo todo o rigor lógico desenvolvido em scripts independentes rodando nativamente simulando Quizzes usando APIs. O forte estruturador baseado puramente nas fundações clássicas foca na escopo rápido de expansão e manutenção.'
            },
            what: {
                en: '• Terminal-based game with multiple-choice questions.\n• Various categories to test different areas of knowledge.\n• Scoring system to track your performance.\n• Simple and interactive interface for easy navigation.\n• Scalable structure for adding new questions and categories.',
                pt: '• Loops sistêmicos amigáveis guiando o painel das perguntas via bash e logs textuais.\n• Categoria parametrizada alimentada pela abstração do protocolo URLSession.\n• Abordagem modular visando rápida integração.'
            },
            image: 'images/emptyIcon.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/TriviaGame', label: 'View on GitHub', icon: 'github' },
            ],
            tools: ['Swift', 'Foundations', 'Terminal App', 'API-Integration'],
            mainTools: ['Swift', 'Terminal App'],
            screenshots: []
        },
    ],
    experience: [
        {
            section: { en: 'Software Development', pt: 'Desenvolvimento' },
            items: [
                {
                    position: { en: 'Scholarship Holder - Apple Developer Academy', pt: 'Bolsista e Desenvolvedor - Apple Developer Academy' },
                    company: 'PUCRS',
                    location: 'Porto Alegre, RS',
                    period: { en: 'Jan 2025 – Present', pt: 'Jan 2025 – Atual' },
                    description: {
                        en: 'Development of iOS applications using Swift, SwiftUI, and UIKit, applying agile methodologies (Scrum) in collaborative projects. Participation in code reviews, pair programming, and innovation challenges. Focus on modern software architecture (MVC, MVVM), design patterns, and development of solutions with social impact.',
                        pt: 'Desenvolvimento direto construindo a fundo em todas as arquiteturas Apple baseadas em padrões exigidos nos torneios nativos e demandas educacionais rigorosas de Scrum com reviews técnicos e pair programmings, criando código extremamente limpo na base do UIKit e SwiftUI visando problemas complexos reais.'
                    }
                }
            ]
        },
        {
            section: { en: 'Education', pt: 'Docência Exatas' },
            items: [
                {
                    position: { en: 'Mathematics Teacher', pt: 'Professor Matemático e Logística' },
                    company: 'Curso Meta',
                    location: 'Porto Alegre, RS',
                    period: { en: '2021 – 2024', pt: '2021 – 2024' },
                    description: {
                        en: 'Classes aimed at preparation for the UFRGS entrance exam, focusing on theory, problem-solving, and strategic review. Development of logical reasoning and resolution techniques.',
                        pt: 'Construção didática intensiva gerindo alto nível tático educacional visando resolução em exatas no exame unificado com foco nos modelos algorítmicos teóricos dos raciocínios das graduações rigorosas (Engenharias).'
                    }
                },
                {
                    position: { en: 'Mathematics Teacher', pt: 'Professor Matemático' },
                    company: 'Universitário',
                    location: 'Porto Alegre, RS',
                    period: { en: '2021 – 2024', pt: '2021 – 2024' },
                    description: {
                        en: 'Mathematics teaching for high school and entrance exam preparation (UFRGS and ENEM). Also acted as a private tutor, developing personalized materials and teaching strategies.',
                        pt: 'Elaborações focadas e tutoria focada guiando a fundo resoluções pontuais com materiais parametrizados de apoio matemático em colégios em alto foco.'
                    }
                },
                {
                    position: { en: 'Mathematics Teacher', pt: 'Tutor de Exatas Avançadas' },
                    company: 'AlphaHelp',
                    location: 'Porto Alegre, RS',
                    period: { en: '2016 – 2019', pt: '2016 – 2019' },
                    description: {
                        en: 'Private mathematics lessons focusing on individualized preparation for UFRGS and ENEM.',
                        pt: 'Tutoria especializada a resolver as bases de falhas individualizadas da lógica e exatas dos discentes focadas nos funis federais (UFRGS e ENEM).'
                    }
                },
                {
                    position: { en: 'Mathematics Teacher', pt: 'Professor de Educação de Acesso' },
                    company: 'EducaMed & PEAC',
                    location: 'Porto Alegre, RS',
                    period: { en: '2013 – 2016', pt: '2013 – 2016' },
                    description: {
                        en: 'Acting in popular courses aimed at educational inclusion and democratization of access to higher education. Preparatory classes for ENEM and entrance exams.',
                        pt: 'Atuação ativista gerando suporte matemático popular às margens das grandes academias preparando para transições vitais sociais de acesso com aulas e debates sobre ENEM.'
                    }
                }
            ]
        }
    ],
    education: [
        {
            degree: { en: 'Technology in Internet Systems', pt: 'Graduação - Sistemas para Internet' },
            institution: 'IFRS – Instituto Federal do Rio Grande do Sul',
            period: { en: '2025 – Present', pt: '2025 – Atual' },
            description: {
                en: 'Focus on algorithms, data structures, object-oriented programming, web development, and databases.',
                pt: 'Engenharia profunda nos componentes focados da infraestrutura distribuida, abordando estrutura lógica dos bancos, algoritmos complexos, arquiteturas REST e paradigmas do mercado POO em diversas fundações.'
            }
        },
        {
            degree: { en: 'Degree in Mathematics', pt: 'Licenciatura - Bacharelado em Matemática' },
            institution: 'UFRGS – Universidade Federal do Rio Grande do Sul',
            period: { en: '2018 – 2022', pt: '2018 – 2022' },
            description: {
                en: 'Complete training in mathematics with emphasis on didactics and logical reasoning.',
                pt: 'Imersão fundamental de raciocínio da lógica abstrata das engenharias visando ensino formal com alta escalada metodológica.'
            }
        }
    ]
};
