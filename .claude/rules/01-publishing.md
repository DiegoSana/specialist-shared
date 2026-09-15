---
paths:
  - "src/**"
  - "dist/**"
  - "package.json"
---

# Changing and "publishing" this package

There is no registry and no monorepo link — this package ships by committing built output to git.

1. Edit under `src/<types|schemas|constants|contracts>/`, re-export from that folder's
   `index.ts` if it's a new file.
2. `npm run build` (runs `tsc`, emits to `dist/`).
3. Commit `src/` and the resulting `dist/` diff **together** — a `src/`-only commit does nothing
   for consumers, since they never run this package's build themselves at install time in a way
   that reflects new `src/` changes not yet compiled.
4. Push to `main`. Only then can a consumer (`specialist-admin`, `dependency:
   "@specialist/shared": "github:DiegoSana/specialist-shared#main"`) pick it up, via
   `npm install` in that repo (its own `postinstall` rebuilds from the freshly-fetched package,
   using what's on `main`).

Never hand-edit anything under `dist/` — it's generated and will be silently overwritten by the
next `npm run build`.

Before changing a type/enum/schema that another repo already imports, grep that repo for the
export name (e.g. `grep -rn "AuthResponse" ../specialist-admin --include="*.ts*"`) to find every
call site that needs updating in the same change.
