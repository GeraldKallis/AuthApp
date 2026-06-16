# AuthApp

A React 19 authentication flow built with React Router 7 for route protection.

[Live video walkthrough](https://geraldkallis.com) · Internally named `secureauth` in package config

## What it does

Lays the groundwork for login, session-aware navigation, and protected routes — the access-control pattern every real product eventually needs. Built on the newest stable React and Vite, reflecting comfort with current, fast-moving front-end tooling rather than legacy setups.

## Features

- Route-level access control via React Router 7, gating pages behind an authenticated session
- Clean, Tailwind-driven UI for login and auth screens
- Built on React 19 and Vite 7
- Structured as the front-end half of a secure auth system — designed to be wired up to a real auth backend or provider (e.g. Supabase Auth, Auth0, or a custom API)

## Tech stack

- **React 19**
- **React Router 7** — route protection and navigation
- **Tailwind CSS** — styling
- **Vite** — build tool and dev server

## Getting started

### Prerequisites

- Node.js 20.19+ or 22.12+ (required by Vite 7 / React Router 7)

### Installation

```bash
git clone https://github.com/GeraldKallis/AuthApp.git
cd AuthApp
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Project structure

```
src/
├── routes/            # Protected and public route definitions
├── components/        # Login form, layout, guards
├── App.jsx
└── main.jsx
```

## Roadmap

- Wire up to a real authentication provider (JWT-based session handling is scaffolded)
- Add password reset flow
- Add persistent session storage

## License

MIT
