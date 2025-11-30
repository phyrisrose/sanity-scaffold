# Web App Scaffold

A production-ready web application scaffold with a modern tech stack, designed for scalability and developer experience.

## 🚀 Tech Stack

### Core

- **Language**: TypeScript
- **Framework**: React 18 + Vite
- **State Management**: Redux Toolkit
- **Data Fetching**: React Query (TanStack Query)

### Styling

- **CSS Framework**: Tailwind CSS
- **CSS Preprocessor**: SCSS/Sass modules
- **Component Library**: Shadcn UI
- **Design System**: Fully customizable with semantic tokens

### Testing

- **Test Runner**: Vitest
- **Testing Library**: React Testing Library
- **Test UI**: Vitest UI

### CMS

- **Headless CMS**: Sanity.io (configured, awaiting credentials)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   ├── Counter.tsx     # Example Redux component
│   └── TechStack.tsx   # Tech stack display
├── store/              # Redux store
│   ├── index.ts        # Store configuration
│   ├── hooks.ts        # Typed Redux hooks
│   └── slices/         # Redux slices
├── styles/             # SCSS modules
│   └── example.module.scss
├── lib/                # Utilities & configs
│   ├── utils.ts        # Helper functions
│   └── sanity.ts       # Sanity.io client
├── pages/              # Page components
├── hooks/              # Custom React hooks
└── test/               # Test setup
```

## 🛠️ Setup

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure Sanity.io (optional)
# Add your Sanity project ID and dataset to .env
```

### Development

```bash
# Start dev server
npm run dev

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Key Features

### Redux Toolkit Setup

- Fully typed with TypeScript
- Example counter slice included
- Custom typed hooks (`useAppDispatch`, `useAppSelector`)
- Ready for additional slices

### React Query Integration

- Already configured in App.tsx
- Ready for API calls and data fetching
- Works seamlessly with Redux

### Styling Options

- **Tailwind**: Utility-first CSS with custom design tokens
- **SCSS Modules**: Component-scoped styles with preprocessing
- **Design System**: Semantic color tokens in `src/index.css`
- Mix and match approaches as needed

### Testing Setup

- Vitest configured with jsdom environment
- React Testing Library integrated
- Example tests in `Counter.test.tsx`
- Run `npm run test:ui` for interactive testing

### Sanity.io

- Client configured in `src/lib/sanity.ts`
- Add credentials to `.env` file
- Helper functions for image URLs included

## 🎨 Design System

The design system uses semantic tokens defined in `src/index.css`:

```css
--primary        # Main brand color
--secondary      # Secondary UI elements
--accent         # Accent/highlight color
--background     # Page background
--foreground     # Text on background
--muted          # Muted elements
--border         # Border colors
```

Custom gradients and animations are also available:

- `bg-gradient-primary`
- `bg-gradient-accent`
- `shadow-elegant`
- `animate-fade-in`
- `animate-slide-in`

## 📝 Using SCSS Modules

```tsx
import styles from '@/styles/example.module.scss';

function MyComponent() {
  return <div className={styles.container}>Content</div>;
}
```

## 🔧 Adding Redux Slices

1. Create a new slice in `src/store/slices/`
2. Add to store configuration in `src/store/index.ts`
3. Use typed hooks from `src/store/hooks.ts`

## 🎻 Sanity.io setup

Sanity setup has two distinct pieces

- Sanity Studio — this is what the editors use to create content. It lives in a standalone React application under `/studio`
- Sanity client in the main application: it's set up to query the data lake using GROQ query language, and it contains all the pages and UI components to build the UI from

## 🧪 Writing Tests

Tests are co-located with components (`*.test.tsx`):

```tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Hello')).toBeInTheDocument();
  });
});
```

## 🚢 Deployment

Build the project:

```bash
npm run build
```

The `dist/` folder contains the production-ready application.

Deploy to any static hosting service:

- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

## 📚 Further Reading

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Query](https://tanstack.com/query/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Sanity.io](https://www.sanity.io/)

## 🤝 Contributing

This scaffold is designed to be customized for your specific needs. Feel free to:

- Add/remove dependencies
- Modify the design system
- Customize the folder structure
- Add additional tooling

## 📄 License

MIT
