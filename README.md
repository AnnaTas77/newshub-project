# NewsHub

![NewsHub Landing Page](/public/images/NewsHub-Landing-Page-new.png)

Welcome to **NewsHub**! This project is a simplified full-stack news platform developed using Next.js, TypeScript, SQLite 3, Sequelize, and Emotion CSS. It serves as a small-scale representation of a comprehensive news website.

The primary objective of this project is to create a seamless full-stack application that enables users to view news articles effortlessly. The user interface is designed to be intuitive and engaging, ensuring a positive user experience for all visitors.

Additionally, the project features an Admin section that functions as a simplified Content Management System (CMS) tailored for editors. This section allows editors to create, edit, and delete news articles efficiently, which is essential for keeping the platform's content current and relevant.

Please note that user authentication has not been implemented in this project due to time constraints. Despite this limitation, the project successfully demonstrates the core functionalities of a news platform and provides a solid foundation for future enhancements.

## Table of Contents

- [Tech Stack](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Testing](#testing)

## Tech Stack

- **Backend**: Next.js (using Pages Router), TypeScript, Sequelize, SQLite3
- **Frontend**: Next.js, TypeScript, Emotion CSS

## Features

- **Home Page**: A dedicated home page for users to view articles, providing an intuitive and engaging interface for browsing content.
- **Admin Page**: A simplified CMS for editors to manage content.
- **Intuitive User Interface**: Designed for a positive user experience.
- **Server-Side Rendering (SSR)**: The application implements server-side rendering to pre-render pages on the server, improving load times and enhancing SEO.
- **API Endpoints**: Several API endpoints are available for managing articles.

## Getting Started

To get started with the NewsHub project, please follow these steps:

### 1. Database Setup

Before running the application, you need to set up the database. This project uses Sequelize with SQLite3. To seed the database with the initial data, follow these steps:

```bash
npm run seed
```

### 2. Starting the development server

Launches a local server that allows you to view the application in a web browser at [http://localhost:3000](http://localhost:3000).

```bash
npm run dev
```

## API Endpoints

This project includes several API endpoints built with Next.js.

- **GET** `/api/articles`: Fetch a list of all articles.

  - This endpoint retrieves all articles from the database, allowing users to view the complete list of articles available on the platform.

- **GET** `/api/articles/:id`: Fetch a single article by its ID.

  - This endpoint retrieves a specific article based on the provided ID, enabling users to view detailed information about that article.

- **POST** `/api/articles`: Create a new article.

  - This endpoint allows users to create a new article by sending the necessary data in the request body.

- **PUT** `/api/articles/:id`: Update an existing article.

  - This endpoint updates an existing article identified by its ID. Users can modify the article's content by sending the updated data in the request body.

- **DELETE** `/api/articles/:id`: Delete an article.
  - This endpoint allows users to delete an article from the database using its ID.

The [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/articles](http://localhost:3000/api/articles). This endpoint can be edited in `pages/api/articles.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction).

## Testing

**Please note that the tests are not comprehensive due to time constraints for this project.**

### End-to-End Testing with Cypress

I have incorporated end-to-end (E2E) tests using [Cypress](https://www.cypress.io/). These tests simulate user interactions with the UI to ensure that the application functions correctly from the user's perspective. They cover various scenarios to validate the overall user experience.

### API Testing with Jest

The API has been tested using [Jest](https://jestjs.io/). These tests verify the functionality of the API endpoints, ensuring that they respond correctly to various requests and handle errors.

## Contributing

🚀 Please feel free to experiment with this project, run it locally, and contribute. Your feedback and contributions are welcome and appreciated!
