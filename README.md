# spaces

## Introduction

`spaces` is a Next.js project that organizes content into multiple “spaces,” each showcasing a different kind of
information—such as **bookcase**, **quotes**, **formula**, **timeline**, and more. This structure allows you to present
varied content in a modular, easy-to-navigate layout.

## Technologies

- **Next.js** – React framework for server-side rendering and static site generation.
- **React** – Library for building component-based user interfaces.
- **ESLint** – Linting tool, integrated via `next lint` and `@rushstack/eslint-patch` for consistent code quality.
- **Prettier** – Opinionated code formatter for maintaining a uniform code style.

## How to Start It

For Ubuntu users on a fresh system:

1. **Update package lists**
    ```bash
    sudo apt update
    ```
2. **Install Node.js and npm**
    ```bash
    sudo apt install -y nodejs npm
    ```
3. **(Optional) Install pnpm**
    ```bash
    sudo npm install -g pnpm
    ```
4. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd spaces
    ```
5. **Install dependencies**
   ```bash
    pnpm install
   # or npm install
    ```
6. **Run the development server**
    ```bash
    pnpm dev
    ```
7. **Open in your browser**
    Visit http://localhost:3000 to view the app.