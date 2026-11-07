# FridgeChef Website

Marketing site for the FridgeChef iOS app. Next.js 16 (App Router), React 19, Tailwind CSS v4. All pages are static.

Requires Node 20.9 or later.

```bash
npm install
npm run dev
npm run build
```

## Structure

Turkish is the default language and lives at the root. English lives under `/en`. Each language has its own root layout, so `<html lang>` is correct on the server.

| Route | Content |
|---|---|
| `/`, `/en` | Landing page |
| `/support`, `/en/support` | Support and FAQ |
| `/privacy`, `/en/privacy` | Privacy policy |
| `/terms`, `/en/terms` | Terms of use |

- `content/tr.ts`, `content/en.ts`: all site copy
- `content/legal.ts`: privacy policy and terms
- `lib/site.ts`: App Store id, emails, prices and the site URL (`NEXT_PUBLIC_SITE_URL`)
- `components/AppUi.tsx`: pieces of the app's interface, in its colours and type weights

## Copy rules

The copy must match what the app does. Check the app repo before adding a claim. Do not add weight-loss amounts, spot-reduction promises, invented user counts or reviews, or Android download links.

When prices change in App Store Connect, update `PRICES` in `lib/site.ts`.

Use Apple's unmodified badge artwork in `public/badges`, and do not place it on tilted or animated elements. The interface pieces deliberately have no iPhone frame, because Apple restricts how device images may be used.
