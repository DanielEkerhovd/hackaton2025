# React + Vite + Tailwind || A template by Daniel

This is a template repository for starting a React project with Vite. It includes TailwindCSS, PostCSS, Autoprefixer, Prettier, Husky, Lint-staged, and React Router.
Feel free to use this when creating own projects.

## Features
- **React** with **Vite** for fast development
- **TailwindCSS** for styling
- **PostCSS & Autoprefixer** for better CSS handling
- **React Router** for client-side navigation
- **Prettier, Husky & Lint-staged** for commit handling and code formatting

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/DanielEkerhovd/Vite-React-Tailwind.git
   cd Vite-React-Tailwind
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for linting issues
- `npm run prepare` - For setting up husky (does this automatic on npm i)

## Project Structure
```
├── src
│   ├── components  # Reusable components
│   ├── pages       # Page components for routing
│   ├── index.css   # Global styles and Tailwind setup
│   ├── main.jsx    # Entry point for React
│   ├── App.jsx     # Root component
│
├── public          # Static assets
├── index.html      # Index page
│
├── .husky          # Husky pre-commit hooks
├── .prettierrc     # Prettier config
├── .prettierignore # Prettier ignore for tailwind and eslint configs
├── tailwind.config.js # TailwindCSS configuration
├── vite.config.js  # Vite configuration
├── eslint.config.js  # Eslint configuration
├── .gitignore # For ignoring base files for github uploads
└── README.md       # Project documentation
```

## Commit Handling

This project uses **Husky** and **Lint-staged** to ensure quality commits:
- **Prettier** formats staged files before commit
- **ESLint** runs checks on staged JavaScript/JSX files
