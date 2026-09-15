# Specialist Shared (specialist-shared)

`@specialist/shared` — a small hand-written TypeScript package (types, Zod schemas, constants,
API contracts) shared between the Specialist frontends. Consumed by `specialist-admin` (via
`@specialist/shared` in `package.json`); **not** currently consumed by `specialist-be` or
`specialist-fe` (they keep their own local type definitions — see Gotchas). Sibling repos in
`/var/www/specialist/`: `specialist-be` (backend, the canonical domain model), `specialist-fe`
(public web app), `specialist-admin` (admin portal, the only consumer today).

## Commands

```bash
npm run build     # tsc -> dist/ (must be run, and dist/ committed, before consumers see a change)
npm run dev       # tsc --watch
npm run clean     # rm -rf dist
```

No lint or test setup in this repo. Definition of done for a change here: `npm run build` succeeds
with no TS errors, `dist/` is committed alongside the `src/` change, and (if a consumer's shape
changed) the affected consumer repo (currently only `specialist-admin`) is updated to match.

## Architecture in one screen

```
src/types/         Plain TypeScript interfaces/enums (types/user.ts -> User, UserRole, UserStatus)
src/schemas/        Zod schemas + inferred DTO types (schemas/auth.schema.ts -> loginSchema,
                     LoginDTO, AuthResponse)
src/constants/      Plain object constants mirroring enum-like backend values (constants/roles.ts
                     -> USER_ROLES, USER_STATUS, REQUEST_STATUS)
src/contracts/      Endpoint path/method maps per feature area (contracts/admin.contract.ts ->
                     AdminContract), documentation-as-code for admin.* endpoints
src/index.ts        Barrel: `export * from './types' | './schemas' | './constants' | './contracts'`
dist/               Committed build output (see Gotchas) — never hand-edit, always regenerate.
```

## Conventions

- Add a new export by creating a file under the matching `src/<category>/` folder and re-exporting
  it from that folder's `index.ts` (which `src/index.ts` already re-exports wholesale) — don't
  export individual files directly from the package root.
- Zod schemas live in `schemas/`; derive the DTO type from the schema with `z.infer<typeof
  xSchema>` (see `LoginDTO`) rather than hand-writing a parallel interface that can drift from the
  validator.
- Keep this package's `enum`/constant value strings byte-for-byte identical to the backend's
  Prisma enums (`specialist-be`'s `schema.prisma` and `docs/API.md` are the source of truth) —
  this package does not import from or generate against the backend, so alignment is manual.

## Gotchas

- **`dist/` is deliberately committed to git** (see the comment in `.gitignore`): consumers install
  this package as `github:DiegoSana/specialist-shared#main`, a raw GitHub URL, not from npm — there
  is no registry publish step and no build-on-install for the *consumer* to rely on beyond its own
  `postinstall` (`npm run build` runs there too, but only against what's in `dist/`... actually
  against `src/` — regardless, always run `npm run build` locally and commit the resulting `dist/`
  diff in the same commit as any `src/` change, or downstream repos silently keep the old compiled
  output).
- **`types/user.ts`'s `User`/`UserRole` are stale and do not match the real backend model.** The
  backend's actual `User` has `firstName`/`lastName` and independent profile booleans
  (`hasClientProfile`/`hasProfessionalProfile`/`hasCompanyProfile`/`isAdmin`), not a single
  `role: UserRole` enum + `name` field. `schemas/auth.schema.ts`'s `AuthResponse.user` already
  reflects the correct (booleans-based) shape — `types/user.ts` was written earlier and never
  reconciled with it. `specialist-admin`'s `lib/api/admin.ts` works around this by hand-declaring
  its own `User` interface instead of importing this package's. If you touch `types/user.ts`,
  prefer fixing it to match `AuthResponse.user` (and updating `specialist-admin`'s call sites)
  over adding new code that relies on the stale shape.
- No consumer uses `workspace:`/`file:` linking or a monorepo tool (no Turborepo/Nx/pnpm
  workspaces across `/var/www/specialist/`) — every change here requires a manual
  build-commit-push-then-`npm install`-in-the-consumer cycle. There is no way to test a change
  against `specialist-admin` without pushing to `main` first, unless you temporarily point that
  repo's `package.json` dependency at a local `file:../specialist-shared` path (revert before
  committing).
- `specialist-be` and `specialist-fe` do not depend on this package at all; don't assume changes
  here are visible to either.
