# @specialist/shared

Shared types, schemas, constants, and contracts for the Specialist platform.

## Installation

```bash
npm install github:tu-usuario/specialist-shared#main
# or
pnpm add github:tu-usuario/specialist-shared#main
```

## Usage

```typescript
import { User, UserRole, loginSchema, LoginDTO } from '@specialist/shared'

// Use types
const user: User = {
  id: '123',
  email: 'user@example.com',
  name: 'John Doe',
  role: UserRole.USER,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

// Use schemas for validation
const result = loginSchema.parse({
  email: 'user@example.com',
  password: 'password123',
})

// Use constants
if (user.role === USER_ROLES.ADMIN) {
  // Admin logic
}
```

## Structure

- `types/` - TypeScript type definitions
- `schemas/` - Zod validation schemas
- `constants/` - Shared constants
- `contracts/` - API contracts

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run dev

# Clean
npm run clean
```

## Publishing

This package is installed directly from GitHub, so after making changes:

1. Build: `npm run build`
2. Commit and push: `git push origin main`
3. Other repos can update with: `npm install @specialist/shared`

