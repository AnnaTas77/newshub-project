# NewsHub

Welcome to NewsHub! This project is designed to provide a platform for managing and displaying articles using a modern tech stack. Below you'll find instructions on how to set up and run the project.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Database Setup](#database-setup)
- [Running the API](#running-the-api)
- [Running the Frontend](#running-the-frontend)


## Technologies Used

- **Backend**: Next.js (using Pages Router), TypeScript, Sequelize, SQLite3
- **Frontend**: Next.js, TypeScript, Emotion CSS

## Getting Started

To get started with the NewsHub project, follow these steps:

1. Database Setup

Before running the application, you need to set up the database. This project uses Sequelize with SQLite3. To seed the database with the initial data, follow these steps:

```bash
npm run seed
```

2. To start the API server, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the UI of the project.

The [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/articles](http://localhost:3000/api/articles). This endpoint can be edited in `pages/api/articles.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
