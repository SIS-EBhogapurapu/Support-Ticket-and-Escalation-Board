Support-Ticket-and-Escalation-Board/
│
├── .vscode/                → VS Code settings
│   ├── extensions.json      → Suggests extensions
│   ├── launch.json          → Debug/run settings
│   ├── mcp.json             → Custom config
│   └── tasks.json           → Automates tasks
│
├── public/                  → Static files
│   └── favicon.ico          → Browser tab icon
│
├── src/                     → Main source code
│   ├── app/                 → Root Angular module
│   │   ├── login/           → Login feature
│   │   │   ├── login.html   → Login page UI
│   │   │   ├── login.css    → Login page styles
│   │   │   ├── login.ts     → Login logic
│   │   │   └── login.spec.ts→ Test placeholder
│   │   ├── app.config.ts    → App configuration (routes/providers)
│   │   ├── app.css          → Styles for root component
│   │   ├── app.html         → Template for root component
│   │   ├── app.routes.ts    → Navigation paths
│   │   ├── app.spec.ts      → Test placeholder
│   │   └── app.ts           → Root component
│   │
│   ├── index.html           → Main HTML entry point
│   ├── main.ts              → Starts the Angular app
│   ├── styles.css           → Global styles
│   └── details2.md          → Documentation file
│
├── angular.json             → Angular build & run config
├── package.json             → Dependencies & scripts
├── package-lock.json        → Exact versions of dependencies
├── tsconfig.json            → TypeScript compiler settings
├── tsconfig.app.json        → App-specific TS settings
├── tsconfig.spec.json       → Test-specific TS settings
├── README.md                → Project overview
├── AngularInstallation.md   → Setup guide
└── details.md               → Previous documentation
