# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development
```bash
# Start development server (runs on http://localhost:8080)
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Testing
```bash
# Run tests (vitest is installed but no script defined in package.json)
npx vitest

# Run tests in watch mode
npx vitest --watch

# Run tests with UI
npx vitest --ui

# Run a single test file
npx vitest path/to/test.test.tsx
```

## Architecture

### Tech Stack Overview
- **Framework**: React 18 with Vite build tool
- **Language**: TypeScript with relaxed strictness settings (noImplicitAny, strictNullChecks disabled)
- **State Management**: Redux Toolkit with typed hooks
- **Data Fetching**: React Query (TanStack Query v5)
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + SCSS modules (both available)
- **Component Library**: Shadcn UI (Radix UI primitives)
- **Testing**: Vitest + React Testing Library + jsdom
- **CMS**: Sanity.io client configured (requires credentials in .env)

### State Management Pattern
This project uses **Redux Toolkit + React Query together**:
- **Redux Toolkit**: For client-side application state (UI state, user preferences, etc.)
- **React Query**: For server state (API data fetching, caching, synchronization)

When adding features:
- Use Redux slices for app state that doesn't come from the server
- Use React Query hooks for API calls and server data
- Both are already wired up in `App.tsx` via Provider components

### Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Shadcn UI components (50+ pre-built)
│   ├── Counter.tsx    # Example Redux component
│   └── *.test.tsx     # Tests co-located with components
├── store/             # Redux Toolkit setup
│   ├── index.ts       # Store configuration (add new reducers here)
│   ├── hooks.ts       # Typed hooks (useAppDispatch, useAppSelector)
│   └── slices/        # Redux slices (create new slices here)
├── lib/               # Utilities and external service clients
│   ├── utils.ts       # cn() helper for Tailwind class merging
│   └── sanity.ts      # Sanity CMS client
├── pages/             # Page-level components (mapped in App.tsx routes)
├── hooks/             # Custom React hooks
├── styles/            # SCSS module files
└── test/              # Test configuration (setup.ts)
```

### Path Aliases
Use `@/` prefix for imports from `src/`:
```typescript
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/store/hooks';
import { cn } from '@/lib/utils';
```

### Adding Redux State
1. Create a new slice in `src/store/slices/yourFeature.ts`
2. Export the reducer from the slice
3. Add the reducer to `src/store/index.ts` in the `reducer` object
4. Use typed hooks from `src/store/hooks.ts`: `useAppDispatch()` and `useAppSelector()`

Example slice pattern (see `counterSlice.ts`):
```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface YourState {
  // state shape
}

export const yourSlice = createSlice({
  name: 'yourFeature',
  initialState,
  reducers: {
    // reducers here
  },
});

export const { actions } = yourSlice.actions;
export default yourSlice.reducer;
```

### Styling Approaches
Three styling methods are available (mix as needed):

1. **Tailwind Utilities**: Primary method, use for most styling
2. **CSS Variables**: Design tokens defined in `src/index.css` (HSL colors only)
3. **SCSS Modules**: Import `.module.scss` files for component-scoped styles

Design system tokens (use in Tailwind or CSS):
- Colors: `--primary`, `--secondary`, `--accent`, `--background`, `--foreground`, `--muted`, `--border`
- Custom gradients: `bg-gradient-primary`, `bg-gradient-accent`
- Custom shadow: `shadow-elegant`
- Custom animations: `animate-fade-in`, `animate-slide-in`
- Dark mode: Automatically handled via `.dark` class

### Testing Patterns
- Tests use Vitest with jsdom environment
- Co-locate tests with components: `Component.test.tsx` next to `Component.tsx`
- Test setup file: `src/test/setup.ts` (imports `@testing-library/jest-dom`)
- For Redux components: Create a test store using `configureStore` (see `Counter.test.tsx`)
- Use `@testing-library/react` for rendering and `@testing-library/user-event` for interactions

### Sanity.io Integration
- Client configured in `src/lib/sanity.ts`
- Requires environment variables in `.env`:
  - `VITE_SANITY_PROJECT_ID`
  - `VITE_SANITY_DATASET`
- Use `urlFor()` helper for image URLs
- All Vite env vars must be prefixed with `VITE_`

### Shadcn UI Components
- Pre-built components in `src/components/ui/`
- Configuration in `components.json`
- Base color scheme: slate
- To add new Shadcn components: Follow Shadcn CLI or manual installation
- Components use CSS variables and support dark mode out of the box

### TypeScript Configuration
TypeScript is configured with **relaxed strictness**:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedLocals: false`
- `noUnusedParameters: false`

This means type safety is not enforced strictly. When adding code, match the existing patterns rather than enforcing strict types.

### Routing
- React Router v6 is configured in `App.tsx`
- Add new routes in the `<Routes>` component
- Keep the catch-all `path="*"` route last for 404 handling
- Page components live in `src/pages/`

### Development Server
- Dev server runs on `http://localhost:8080` (port 8080, not the Vite default 5173)
- Configured in `vite.config.ts` with `host: "::"` for network access
- Uses React SWC plugin for fast refresh

## Notes
- This project was scaffolded with Lovable.dev (see LOVABLE.md)
- Bun lockfile exists but npm is used for package management
- Design system colors must be HSL format
- Environment variables require `VITE_` prefix to be exposed to client code
