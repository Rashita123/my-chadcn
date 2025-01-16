ChandCN style library

## Installation

```bash
npm install @rashitamehta/button
```

## Usage

```tsx
import Button from '@rashitamehta/button';

export default function App() {
return <Button variant="primary">Click Me!</Button>;
}
```

## Components

### Button
A customizable button component with various styles and states.

#### Props
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md') 
- `disabled`: boolean (default: false)
- `onClick`: () => void
- `children`: React.ReactNode

### Avatar
A circular avatar component that displays user images or initials.

#### Props
- `src`: string - Image URL
- `alt`: string - Alt text for image
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `fallback`: string - Initials to show when image fails to load

## Development

This library is built using:
- React
- TypeScript
- Tailwind CSS

