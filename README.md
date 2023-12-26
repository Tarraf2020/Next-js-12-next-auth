# Next.js TypeScript Project with NextAuth.js

![Next.js](https://img.shields.io/badge/Next.js-12.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.5.4-blue)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-4.1.2-blue)

This is a Next.js project with TypeScript, utilizing NextAuth.js for authentication. The project includes a custom authentication hook for server-side rendering and supports user authentication and admin authentication.

## Table of Contents

- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Authentication Hook](#authentication-hook)
- [User Roles](#user-roles)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Environment Variables:**

   ```bash
   NEXTAUTH_URL=http://localhost:3000
   AUTH_SECRET=my-secret-key
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   Your application should now be running on http://localhost:3000.

## Authentication with NextAuth.js

NextAuth.js is used for authentication. It supports various authentication providers, including credentials.

- Credentials Provider: Allows users to log in with a username and password.
