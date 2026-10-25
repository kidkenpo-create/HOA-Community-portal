# Portal verification plan

This is a **test plan**, not evidence that the tests have passed. Do not promote the GitHub repository to production until the application source is complete and the checks below pass.

## Page-by-page acceptance tests

| Page | Required checks |
| --- | --- |
| Home | Loads without errors; navigation works; mobile and desktop layout; correct disclaimers |
| About | Content is accurate; links work; no implication of official HOA endorsement |
| Homes | Listing cards, images, filters and inquiries function; placeholder imagery labeled |
| Amenities | Details render; request flows validate input; no false success notices |
| Classifieds | Create, edit, remove and view listings with proper ownership checks |
| Events | Calendar and event submissions work; dates and time zones correct |
| Bulletin | Read, post, comment, like, share and moderation permissions work |
| Contact | Bray Homes Realty section renders; phone and email links work; HOA inquiries separated |
| Login | No default admin access; passwords hashed; sessions protected; authorization enforced |

## Cross-cutting checks

- Run `pnpm install --frozen-lockfile`, `pnpm lint` and `pnpm build` after full recovery.
- Exercise every API route with unauthenticated, resident and administrator sessions.
- Check required environment variables without committing secret values.
- Test at mobile (375 px), tablet (768 px) and desktop (1440 px).
- Verify keyboard navigation, labels, contrast and focus indicators.
- Check loading, empty and error states.
- Confirm image licensing, ownership and alt text; keep existing pictures as temporary placeholders.
- Confirm no personally identifying resident data is exposed publicly.
- Confirm the website is independently operated, not an official HOA site.

## Current blockers

1. Vercel source retrieval truncates larger files, including the portal shell, styles and data.
2. Nested route source files are not fully enumerated by the available deployment file listing.
3. The deployed prototype contains a hard-coded administrator account with an insecure password.
4. GitHub has not been connected to Vercel for automated preview builds.
5. A complete build and browser end-to-end test has **not** been performed.

## Release policy

Keep the existing Vercel deployment unchanged. Make preview deployments only after source recovery and security remediation. Publish only after a successful build and acceptance tests.
