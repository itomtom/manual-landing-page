# Manual Landing Page

![Manual Logo](https://cdn.manual.co/assets/icons/logo.svg)

## Overview

A dynamic landing page for Manual that includes an interactive quiz to guide users through deciding if Manual is the right product for them. The project aims to better explain the value proposition to users who land on the page from ads.

## Features

- **Responsive Design** - Optimized for all screen sizes
- **Interactive Quiz** - 3-step questionnaire to assess user needs
- **Dynamic Content** - Quiz questions loaded from external API
- **Single-page Application** - Seamless experience without page reloads

## Technologies

- React
- TypeScript
- Vite
- CSS/SCSS
- Fetch API

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/manual-landing-page.git

# Navigate to the project directory
cd manual-landing-page

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

## Usage

The application will be available at `http://localhost:5173/` (or your configured port).

To lint the project with eslint, use the following command:

```bash
npm run lint
```

To build the project, use the following command:

```bash
npm run build
```

To test the project with vitest, use the following command:

```bash
npm run test
```

### Quiz Flow

1. User clicks "Take the quiz" button on the landing page
2. Series of questions appear one by one
3. Based on answers, users receive personalized results
4. User can go back and change answers if needed

## Project Structure

```
manual-landing-page/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Landing/
│   │   └── Quiz/
│   ├── hooks/
│   ├── types/
│   └── App.tsx
├── index.html
└── README.md
```

## Design

The design mockups are available on Figma:
[Manual Landing Page - Figma Design](https://www.figma.com/file/6k8OY18TEGeO07Fpol86QM/Landing-Page---Exercise?node-id=1%3A2)

### Font Resources

- [TT Norms Pro Serif](https://www.dafont.com/tt-norms-pro-serif.font)
- [TT Norms](https://font.download/font/tt-norms)
- [TT Norms Pro Font Family](https://www.deefont.com/tt-norms-pro-font-family/)

## API Integration

The quiz questions are fetched from:
```
https://manual-case-study.herokuapp.com/questionnaires/972423.json
```

## Quiz Logic

- The quiz consists of 3 questions about hair loss
- If a user selects an option with `isRejection: true`, they will see a rejection message
- If the user completes the quiz without triggering any rejection conditions, they will see a success message

## License

[MIT](LICENSE)
