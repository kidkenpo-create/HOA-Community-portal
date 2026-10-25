# HOA Community Portal

Independently operated community information website. Recovered source from Vercel deployment `dpl_Edb8NBgznE7pn68EWrzeBda9hiQi`.

**Status: recovery in progress; not deployable.** Several source files are still pending migration. Do not connect automatic production deployments.

## Security blockers

- Remove seeded default administrator credentials.
- Replace plaintext password storage with strong password hashing and secure server-side sessions.
- Review all API routes for authorization, input validation, and rate limiting.
- Review resident data stored in browser localStorage.
- Keep database credentials in Vercel environment variables, never Git.
- Verify content/image rights and clearly distinguish this site from the official HOA.

Existing Vercel production is unchanged while code is recovered and reviewed.
