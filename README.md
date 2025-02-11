# Todo App

## Introduction
This is a React-based Todo application created using Vite. It allows users to manage their tasks efficiently.

## Features
- Add, edit, and delete todos
- Expandable cards for viewing descriptions
- Full-width responsive design

## Installation
Follow these steps to set up the project locally:

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Development Server
```sh
npm run dev
```

## Deployment

### Deploy on GitHub Pages (Static Hosting)
1. Install GitHub Pages package:
   ```sh
   npm install gh-pages --save-dev
   ```
2. Add these scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run the deployment command:
   ```sh
   npm run deploy
   ```
4. Enable GitHub Pages in repository settings.

### Deploy on Vercel (Recommended)
1. Install Vercel globally:
   ```sh
   npm install -g vercel
   ```
2. Deploy the app:
   ```sh
   vercel
   ```

## Project Structure
```
├── src/
│   ├── components/    # Reusable components
│   ├── pages/         # Different pages (Home, Todo, etc.)
│   ├── assets/        # Images and other static assets
│   ├── style/         # CSS files for individual components/pages
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Entry point
│   ├── styles.css     # Global styles
├── public/            # Static assets
├── package.json       # Dependencies and scripts
├── README.md          # Project documentation


```

## Uninstall Unnecessary Dependencies Before Pushing to GitHub
Run the following to remove large files before committing:
```sh
rm -rf node_modules
rm -rf dist
```
Add `.gitignore` with:
```
node_modules/
dist/
.env
```

## License
This project is open-source and available under the MIT License.
## 🚀 Live Demo  
Check out the live version of this project:  
🔗 [Todo App](https://todo-19otapbss-chirags-projects-44a827c7.vercel.app)

