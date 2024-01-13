# Project Overview

This repository contains the source code for a web application, organized with a structured folder layout for clarity and maintainability.

## Folder Structure

```
13-01-2023 "5.12pm"
|-- public/
| |-- index.html
| |-- favicon.ico
|-- src/
| |-- assets/
| | |-- images/
| | |-- styles/
| | | |-- global.css
| | | |-- header.css
| | | |-- sidebar.css
| | | |-- topnav.css
| |-- components/
| | |-- common/
| | | |-- Header.js
| | | |-- Sidebar.js
| | | |-- TopNav.js
| | |-- posts/
| | | |-- Post.js
| | | |-- PostList.js
| |-- layouts/
| | |-- MainLayout.js
| |-- pages/
| | |-- Blog.js
| | |-- Home.js
| | |-- PostDetail.js
| |-- routes/
| | |-- HomeRoute.js
| | |-- BlogRoute.js
| | |-- PostDetailRoute.js
| |-- services/
| | |-- api.js
| |-- utils/
| | |-- formatDate.js
| |-- App.js
| |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
```

## Project Structure

- **`public/`**: Contains static assets such as HTML files (`index.html`) and a favicon (`favicon.ico`).
- **`src/`**: Main source code directory.
  - **`assets/`**: Holds images and styles.
    - **`images/`**: Image assets.
    - **`styles/`**: CSS stylesheets.
      - `global.css`: Global styles.
      - `header.css`: Styles for the header component.
      - `sidebar.css`: Styles for the sidebar component.
      - `topnav.css`: Styles for the top navigation component.
  - **`components/`**: Reusable React components.
    - **`common/`**: Common components like Header, Sidebar, and TopNav.
    - **`posts/`**: Components related to displaying and managing posts.
  - **`layouts/`**: Components defining the overall layout structure of the application.
  - **`pages/`**: React components representing different pages of the application.
  - **`routes/`**: Components defining navigation paths and routes.
  - **`services/`**: Contains utility functions and API-related logic.
    - `api.js`: API-related functionality.
  - **`utils/`**: General utility functions.
    - `formatDate.js`: Utility for formatting dates.
  - `App.js` and `index.js`: Entry points for the application.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`package.json`**: Configuration file for Node.js projects.

## How to Run This Project

- **step 1** : Clone the Repository
- **step 2** : Navigate to the directory cd your-repository
- **step 3** : open new terminal
- **step 4** : install the dependency

```
npm install
```

- **step 5** : run the Project

```
npm start
```

### This will run your project on **http://localhost:3000**

## Build for Production:

```
npm run build
```
