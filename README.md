# CLO Virtual Fashion

A virtual fashion product listing app built with React and Vite. Users can search, filter, and browse a collection of fashion items with pricing options.

**Hosted here:**  
[https://clo-set-connect-store-page.vercel.app/](https://clo-set-connect-store-page.vercel.app/)

## Features

- Product listing with images, title, creator, and price
- Search bar to filter products by title or creator
- Filter by pricing options: Paid, Free, View Only
- Responsive grid layout
- Styled with styled-components

## Project Structure

```
├── public/
├── src/
│   ├── App.jsx
│   ├── Context.jsx
│   ├── main.jsx
│   ├── Components/
│   │   ├── Header/
│   │   ├── SearchBar/
│   │   ├── Filter/
│   │   └── Product/
│   └── Services/
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd clo-virtual-fashion
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Configuration

- Vite configuration: `vite.config.js`
- ESLint configuration:
