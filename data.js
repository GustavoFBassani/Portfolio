// Centraliza todo o conteúdo do site (textos, projetos, traduções).
// Assim a gente não mistura dados com a lógica dos componentes.

const PORTFOLIO_DATA = {
    translations: {
        aboutMe: 'About Me',
        professionalExperience: 'Professional Experience',
        academicEducation: 'Academic Education',
        appleStoreProjects: 'Apple Store Projects',
        featuredProjects: 'Featured Projects',
        otherProjects: 'Other Projects',
        aboutText: `iOS Developer in training, with a unique trajectory combining 10 years of experience in mathematics teaching with a strong passion for technology. Initially moved to Porto Alegre to study Metallurgical Engineering, but found in mathematics education a way to unite work and passion, teaching ever since. From this experience, I developed an interest in technology as a learning tool and programming logic, which motivated me to steer my career towards software development.

Currently, I am a scholarship holder at the Apple Developer Academy, where I develop projects for the iOS ecosystem focusing on Swift, SwiftUI, UIKit, and software architecture. In parallel, I am studying Internet Systems Technology at IFRS, deepening knowledge in algorithms, data structures, and object-oriented programming. My goal is to unite my analytical base developed in mathematics with the creation of innovative and impactful technological solutions.`,
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
    },
    profile: {
        name: 'Gustavo Ferreira Bassani',
        title: 'Welcome to my iOS Development Portfolio!',
        email: 'gustavo_fbassani@hotmail.com',
        photo: 'images/perfil.png'
    },

    appleStoreProjects: [
        {
            id: 'completeness',
            title: 'Completeness',
            shortDescription: 'Habit tracking app to improve focus and daily productivity.',
            longDescription: 'This application was developed with a focus on performance, scalability and user experience, adopting the MVVM architecture to separate responsibilities and ensure clear reactive states between ViewModels and Views in SwiftUI. Persistence uses SwiftData with declarative models and reactive queries, automatically reflecting interface changes. The project is structured in multiple targets for staging and production environments, plus a dedicated target for watchOS with efficient WatchConnectivity communication, offering fast Apple Watch experiences including complications. SwiftUI Widgets provide essential information on Home and Lock Screen with intelligent timelines and adaptive design. Factory patterns and dependency injection centralize service, repository and ViewModel creation, facilitating implementation swaps and increasing testability. The UI Tests suite validates critical flows, accessibility, navigation and error states, integrating with the build pipeline for continuous quality. Asynchronous operations use Swift Concurrency (async/await and actors) for concurrency safety and readability. Finally, observability with structured logs and accessibility focus (Dynamic Type, VoiceOver and high contrast) ensure efficient diagnosis, privacy and a fluid, inclusive experience across the Apple ecosystem.',
            what: '• Create custom habits with intelligent suggestions based on your needs.\n• Visual rewards and instant feedback on every achievement.\n• "Completeness" metric showing progress up to 100%.\n• Weekly and monthly charts to track consistency and evolution.\n• SwiftUI Widgets on Home and Lock Screen for quick actions (mark, review, track).\n• Optimized interface on Apple Watch to complete habits in seconds.\n• Interactive notifications with quick actions (complete, defer, add note).\n• Real-time synchronization between iPhone and Apple Watch.\n• Quick sessions on watchOS focused on practicality and fluidity.\n• Offline mode with automatic updates when reconnecting.\n• Habit schedule with calendar and daily checklist.\n• Smart reminders that adapt to your routine.\n• Built for those seeking consistency, balance and continuous progress.',
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
            shortDescription: 'Journaling app with Japanese aesthetics and immersive 3D elements.',
            longDescription: 'Nikki Journal was developed with a focus on sensory experience, emotional clarity and structured reflection, using SwiftUI and the MVVM architecture to ensure a clear separation of responsibilities between Views and ViewModels. The app explores three-dimensional concepts through RealityKit and Reality Composer, using 3D objects as narrative and symbolic elements that reinforce the meaning of journal entries. Data persistence is handled with SwiftData, enabling declarative models and reactive UI updates as users write or revisit their records. The project emphasizes code clarity and structural simplicity, with conscious use of Swift Concurrency (async/await) for future asynchronous operations. Nikki Journal aims to transform journaling into a moment of pause and contemplation, blending technology, minimalist Japanese design and personal storytelling.',
            what: '• Free-form journaling focused on personal reflection.\n• Japanese-inspired aesthetics with minimalist and symbolic design.\n• Integrated 3D elements used as visual and narrative metaphors.\n• Interactive objects created with Reality Composer to reinforce emotions and intentions.\n• Clear organization of entries for easy reading and revisiting.\n• Calm, distraction-free experience designed for moments of pause.\n• Architectural foundation prepared for future expansion.',
            image: 'images/NikkiJournal.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/Nikki', label: 'View on GitHub', icon: 'github' },
                { url: 'https://apps.apple.com/br/app/nikki-journal/id6756323938?l=en-GB Nikki Journal', label: 'View on App Store', icon: 'apple' }
            ],
            tools: ['SwiftUI', 'RealityKit', 'Reality Composer', 'SwiftData', 'MVVM', 'Swift Concurrency', 'Localizable'],
            mainTools: ['SwiftUI', 'RealityKit', 'Reality Composer', 'MVVM'],
            screenshots: ['images/Nikki-1.png', 'images/Nikki-2.png', 'images/Nikki-3.png']
        }
    ],
    featuredProjects: [
        {
            id: 'freela-ontap',
            title: 'Freela-OnTap',
            shortDescription: 'Platform connecting companies and freelancers on-demand.',
            longDescription: 'Freela OnTap is an application developed in UIKit with MVC architecture, designed to connect freelancers from bars and restaurants with contractors in an agile and intuitive way. The project adopts good development practices, with SwiftLint ensuring code standardization and readability. The backend uses CloudKit, exploring public containers for data storage and synchronization between users, ensuring a fluid experience integrated with the Apple ecosystem. The app structure was designed to offer robust error handling with clear user feedback and organized logs for efficient debugging. Additionally, the project prioritizes scalability, separating responsibilities between controllers, models and network services. The result is clean, easy-to-maintain code ready to evolve with new features while maintaining focus on performance, security and usability.',
            what: '• Connects freelancers and clients quickly and directly.\n• Create detailed profiles with portfolio and skills.\n• Proposal system with real-time status.\n• Smart filters to find projects aligned with your profile.\n• Complete history of contracts, ratings and feedback.\n• Design focused on simplicity, clarity and productivity.\n• Ideal for those who make a living from freelancing and want everything in one place.',
            image: 'images/FreelaOnTap.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/FreelaOnTap', label: 'View on GitHub', icon: 'github' }
            ],
            tools: ['UIKit', 'CoreData', 'CloudKit', 'Public Containers', 'MVC', 'SwiftLint', 'Async/Await', 'Error Handling'],
            mainTools: ['UIKit', 'CloudKit', 'MVC'],
            screenshots: ['images/FreelaOnTap-1.png', 'images/FreelaOnTap-2.png', 'images/FreelaOnTap-3.png']
        },
        {
            id: 'expensshare',
            title: 'Expensshare',
            shortDescription: 'App to split and track household expenses simply.',
            longDescription: 'Expensshare is an application developed for study purposes, created to practice SwiftUI and MV architecture. The app aims to facilitate the administration of household and shared expenses, focusing on simplicity, speed and clarity. It allows groups such as family, friends or housemates to record expenses, indicate who paid, divide amounts fairly and track how much each person owes, all in an intuitive interface designed for everyday use.',
            what: '• Expense registration: record expenses with name, description, amount, date, payer and receipt photo.\n• Division between people: associate expense with who paid and see how the amount impacts each participant\'s balance.\n• Custom categories: organize expenses in categories (ex.: groceries, bills, transportation, leisure) for easy analysis.\n• Reports and insights: track totals by period and category, identify spending patterns and see who contributed most.\n• Local synchronization and performance: data saved efficiently on device with fast loading and smooth navigation.\n• Simple and secure editing: update any expense with a few taps while preserving history and data consistency.\n• Receipt attachments: add photos of receipts to facilitate future verification.',
            image: 'images/expensshare.png',
            links: [
                { url: 'https://github.com/GustavoFBassani/Expensshare/tree/main', label: 'View on GitHub', icon: 'github' },
                { url: 'https://www.figma.com/design/Z8czxgcBAknm6qa8YjgG25/Gustavo-Ferreira-Bassani?node-id=204-16261', label: 'View on Figma', icon: 'figma' }
            ],
            tools: ['SwiftUI', 'SwiftData', 'Figma'],
            mainTools: ['SwiftUI', 'SwiftData', 'MV'],
            screenshots: ['images/expensshare-1.png', 'images/expensshare-2.png', 'images/expensshare-3.png']
        }, 
        {
            id: "before-it-floods",
            title: "Before It Floods",
            shortDescription: "Interactive educational experience about flood preparedness and risk awareness.",
            longDescription: "Before It Floods is an interactive experience created for the Swift Student Challenge with the goal of raising awareness about flood risks and the importance of preparation before extreme weather events. The project combines educational storytelling with simple interactive elements to guide the user through decisions and situations related to flood preparedness. Developed using Swift and Apple’s native frameworks, the project focuses on clarity, accessibility, and user engagement, presenting information through a short narrative flow designed to be easily understood in a few minutes. The app emphasizes environmental awareness and social responsibility, encouraging users to think about preventive actions and safety measures before disasters occur. The codebase was structured with simplicity and readability in mind, prioritizing maintainable architecture and a clear separation between interface and logic.",
            what: "• Interactive narrative experience about flood preparedness.\n• Educational approach focused on prevention and safety.\n• Short guided flow designed to be completed in a few minutes.\n• Simple decision-based interactions to reinforce learning.\n• Clear visual communication focused on accessibility.\n• Project created specifically for the Swift Student Challenge.\n• Focus on social impact and environmental awareness.",
            image: "images/BeforeItFlood.png",
            links: [
                { "url": "https://github.com/GustavoFBassani/BeforeItFloods", "label": "View on GitHub", "icon": "github" }
            ],
            tools: ["Swift", "SwiftUI", "SpriteKit", "Xcode", "User Experience Design", "Educational Design"],
            mainTools: ["Swift", "SwiftUI", "SpriteKit", "UX Design"],
            screenshots: ["images/BeforeItFloods-1.png", "images/BeforeItFloods-2.png", "images/BeforeItFloods-3.png"]
        }
    ],
    otherProjects: [
        {
            id: 'api-challenge',
            title: 'API-Challenge',
            shortDescription: 'Fictional marketplace built with a public API for study.',
            longDescription: 'A fictional marketplace developed for studying API integration. The app simulates a real product environment, allowing you to test different endpoints, handle asynchronous responses, and explore complete flows for requesting, sending, and processing data. The project is structured using MVVM with dependency injection to improve testing and modularity. The entire app is localizable, includes native iOS accessibility features, and was designed to practice best practices in architecture, unit tests, code organization, and user experience.',
            what: '• Simulates a marketplace to practice API consumption.\n• Lists products with name, image, and price fetched through requests.\n• Displays complete item details, such as descriptions and additional information.\n• Allows testing different endpoints and visualizing how the data changes.\n• Supports favoriting and unfavoriting marketplace items.\n• Shows real network states, such as loading, error, and refreshing.\n• Provides a complete experience to practice requests, responses, and data processing.',
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
            shortDescription: 'Terminal quiz game fetching questions from an API in real time.',
            longDescription: 'Terminal game developed in Swift for study purposes. The app aims to provide a fun and educational experience, allowing users to test their knowledge in various question categories. With a simple and interactive interface, the game challenges players to answer multiple-choice questions, accumulating points as they progress. The project was structured to facilitate the addition of new questions and categories, promoting scalability and code maintenance.',
            what: '• Terminal-based game with multiple-choice questions.\n• Various categories to test different areas of knowledge.\n• Scoring system to track your performance.\n• Simple and interactive interface for easy navigation.\n• Scalable structure for adding new questions and categories.',
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
            section: 'Software Development',
            items: [
                {
                    position: 'Scholarship Holder - Apple Developer Academy',
                    company: 'PUCRS',
                    location: 'Porto Alegre, RS',
                    period: 'Jan 2025 – Present',
                    description: 'Development of iOS applications using Swift, SwiftUI, and UIKit, applying agile methodologies (Scrum) in collaborative projects. Participation in code reviews, pair programming, and innovation challenges. Focus on modern software architecture (MVC, MVVM), design patterns, and development of solutions with social impact.'
                }
            ]
        },
        {
            section: 'Education',
            items: [
                {
                    position: 'Mathematics Teacher',
                    company: 'Curso Meta',
                    location: 'Porto Alegre, RS',
                    period: '2021 – 2024',
                    description: 'Classes aimed at preparation for the UFRGS entrance exam, focusing on theory, problem-solving, and strategic review. Development of logical reasoning and resolution techniques.'
                },
                {
                    position: 'Mathematics Teacher',
                    company: 'Universitário',
                    location: 'Porto Alegre, RS',
                    period: '2021 – 2024',
                    description: 'Mathematics teaching for high school and entrance exam preparation (UFRGS and ENEM). Also acted as a private tutor, developing personalized materials and teaching strategies.'
                },
                {
                    position: 'Mathematics Teacher',
                    company: 'AlphaHelp',
                    location: 'Porto Alegre, RS',
                    period: '2016 – 2019',
                    description: 'Private mathematics lessons focusing on individualized preparation for UFRGS and ENEM.'
                },
                {
                    position: 'Mathematics Teacher',
                    company: 'EducaMed & PEAC',
                    location: 'Porto Alegre, RS',
                    period: '2013 – 2016',
                    description: 'Acting in popular courses aimed at educational inclusion and democratization of access to higher education. Preparatory classes for ENEM and entrance exams.'
                }
            ]
        }
    ],
    education: [
        {
            degree: 'Technology in Internet Systems',
            institution: 'IFRS – Federal Institute of Rio Grande do Sul',
            period: '2025 – Present',
            description: 'Focus on algorithms, data structures, object-oriented programming, web development, and databases.'
        },
        {
            degree: 'Degree in Mathematics',
            institution: 'UFRGS – Federal University of Rio Grande do Sul',
            period: '2018 – 2022',
            description: 'Complete training in mathematics with emphasis on didactics and logical reasoning.'
        }
    ]
};
