# Recoil State Management Demo

A simple React application demonstrating state management using Recoil, a state management library for React.

## Features

- **Atom-based State Management**: Uses Recoil's `atom` for managing individual state pieces
- **Derived State**: Implements `selector` for computed/derived state
- **React Integration**: Seamlessly works with React functional components and hooks
- **Vite Build Tool**: Fast development server and optimized production builds

## State Management

The application demonstrates the following Recoil concepts:

1. **Atoms**: Basic units of state that components can subscribe to
   - `networkAtom`: Tracks network notifications
   - `jobsAtom`: Tracks job-related notifications
   - `notificationsAtom`: Tracks general notifications
   - `messagingAtom`: Tracks message notifications (with state updates)

2. **Selectors**: For derived/computed state
   - `totalNotificationSelector`: Calculates the sum of all notifications

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint

## Usage

The application demonstrates a simple notification counter interface with the following features:

- Displays counts for different types of notifications
- Shows a "99+" indicator when network notifications exceed 100
- Includes a button to increment the messaging counter
- Automatically updates the total notification count

## Project Structure

```
src/
  ├── App.jsx          # Main application component with UI
  ├── atoms.js        # Recoil state definitions
  ├── main.jsx        # Application entry point
  └── App.css         # Component styles
```

## Dependencies

- React 18
- Recoil (for state management)
- Vite (build tool)
- ESLint (code linting)
