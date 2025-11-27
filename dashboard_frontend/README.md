# React Dashboard (Ocean Professional)

This project is a modern React dashboard featuring a responsive bento-style grid and Tailwind CSS styling.

## Features
- Bento grid of square cards (Analytics, Profile, Reports, Settings)
- Top navigation bar with smooth transitions
- Tailwind CSS with Ocean Professional theme
- Accessible focus states and keyboard navigability
- React Router navigation between pages

## Getting Started

### `npm start`
Runs the app in development mode. Open http://localhost:3000 to view it.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## Styling (Tailwind)
Tailwind is configured via `tailwind.config.js` and `postcss.config.js`.
Theme colors:
- Primary: #2563EB
- Secondary/Success: #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
Gradient: `from-blue-500/10 to-gray-50`

The main styles are applied via utility classes in JSX. See `src/components` and `src/pages`.

## Environment Variables
The app can run without any additional env variables. If you use existing ones, they are available (e.g., REACT_APP_API_BASE, REACT_APP_BACKEND_URL, etc.). No new variables are required for this UI.
