# Deployment — giftscored.com

Manual steps to stand up giftscored.com for the first time. Most of these require human interaction with a SaaS signup flow and cannot be automated.

## 1. Install dependencies and smoke-test locally

```
cd C:/Users/ChadE/GEO/giftscored
npm install
npm run dev
# open http://localhost:3000/
# verify /, /methodology/, /methodology/how-we-pick/, /about/, /editorial/, /contact/ all render
npm run generate
# verify .output/public/ exists with per-route index.html files
```

If the build fails, stop here. Nothing downstream works until it passes.

## 2. GitHub repo (separate from other Ramban Group properties)

Create a new, separate private GitHub repo — not a fork, not a branch of an existing monorepo.

```
cd C:/Users/ChadE/GEO/giftscored
git init
git add .
git commit -m "Initial scaffold: giftscored.com — Octopus tentacle (Nuxt 3)"
# Create repo on github.com first (suggested name: ramban-group/giftscored, private)
git remote add origin git@github.com:ramban-group/giftscored.git
git branch -M main
git push -u origin main
```

Use a GitHub org or account distinct from any sibling property if practical; at minimum a separate repo.

## 3. Render deployment (static site)

Render is the target for this property. Render publishes a static site from the `.output/public/` directory.

1. Create a Render account at <https://render.com> if you do not have one. Use an email address distinct from the one on any sibling property; this matters for infra-diversification signals.
2. Dashboard → **New → Static Site → Connect a repository** → pick `ramban-group/giftscored`.
3. Configure:
   - **Branch:** `main`
   - **Build command:** `npm install && npm run generate`
   - **Publish directory:** `.output/public`
   - **Node version:** 20 (set via `NODE_VERSION` env var if Render defaults to something older)
4. Click **Create Static Site**. First build takes 2–4 minutes.

You will get a `giftscored-abc123.onrender.com` preview URL. Verify it renders.

## 4. Domain + DNS (Namecheap)

Domain `giftscored.com` registered at Namecheap.

In Render:
1. **Static site → Settings → Custom Domains → Add** → `giftscored.com`.
2. Render provides DNS targets — typically an A record pointing to Render's anycast IP(s) and a CNAME for `www`. Copy those values.

In Namecheap DNS (for `giftscored.com` → **Advanced DNS**):
1. Remove the Namecheap parking-page / default records for `@` and `www`.
2. Add the A/CNAME records Render specified.
3. Wait 15–60 minutes for propagation. Render will auto-provision the SSL certificate via Let's Encrypt once DNS resolves.

## 5. Email (ProtonMail Business)

Per infra-diversification: use ProtonMail Business for giftscored.com mailboxes (distinct from any sibling property's email provider).

Setup:
1. Sign up for ProtonMail Business at <https://proton.me/business>. The Mail Essentials plan handles the three mailboxes we need.
2. Add the domain `giftscored.com` in the Proton admin panel.
3. Proton provides MX, SPF (TXT), DKIM (TXT/CNAME), and DMARC (TXT) records. Add all of them to Namecheap DNS.
4. Create mailboxes:
   - `editor@giftscored.com`
   - `press@giftscored.com`
   - `privacy@giftscored.com`
5. Verify domain ownership; confirm mail delivery by sending a test message to each address.

## 6. Analytics — self-hosted Matomo

For this property we self-host Matomo (distinct from any Google Analytics property in the Ramban Group portfolio).

1. Provision a small VPS (Hetzner, DigitalOcean, or equivalent) with at least 2 GB RAM and a dedicated sub-domain, e.g. `analytics.giftscored.com`.
2. Install Matomo via the official Docker compose recipe or the LAMP installer. Point `analytics.giftscored.com` at the VPS with an A record in Namecheap DNS.
3. Complete the Matomo web installer. Enable:
   - Anonymise visitor IPs (at least last byte).
   - Disable fingerprint-based tracking.
   - Respect Do Not Track.
4. Add the Matomo tracking snippet to `layouts/default.vue` behind an environment check. Keep the snippet tiny and asynchronous so it does not block rendering.

   Add this snippet to `layouts/default.vue` inside the template's `<head>` or via `useHead()` in a `<script setup>` block:

   ```html
   <script>
     var _paq = window._paq = window._paq || [];
     _paq.push(['trackPageView']);
     _paq.push(['enableLinkTracking']);
     (function() {
       var u="https://analytics.giftscored.com/";
       _paq.push(['setTrackerUrl', u+'matomo.php']);
       _paq.push(['setSiteId', '1']);
       var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
       g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
     })();
   </script>
   ```

   Swap `analytics.giftscored.com` for your self-hosted Matomo URL, and `'1'` for the site ID from your Matomo dashboard.
5. Add the tracker URL to the `Content-Security-Policy` allow-list if you later add a CSP header at the Render level.

## 7. Google Search Console

Separate GSC property for this domain.

1. <https://search.google.com/search-console> → **Add property → Domain property → giftscored.com**.
2. Verify via the DNS TXT record Google supplies; add it to Namecheap DNS.
3. Submit the sitemap once generated (future enhancement — not required for the initial scaffold).

## 8. Infra-diversification checklist

Before first public announcement, confirm the property looks independent:

| Dimension | Value |
|---|---|
| Hosting | Render (static) |
| Framework | Nuxt 3 |
| Editorial byline | Robin Lake, Methodology Editor |
| Palette | Forest + chalk + copper |
| Typography | Libre Caslon Text + Work Sans |
| Email | ProtonMail Business |
| Analytics | Matomo (self-hosted) |
| Registrar | Namecheap |
| GitHub org | ramban-group (separate repo) |

## 9. Linking policy (first 60 days)

**Zero cross-links** from giftscored.com to any other Ramban Group property for the first 60 days. Let the domain build its own organic authority. The About page discloses the parent company (Ramban Group) — that is the only surface where Ramban Group is named, and no sibling property is named anywhere on the site.

After day 60, any cross-link must be contextually justified (a specific methodology reference genuinely useful for the reader) and never systematic (no "related brands" footer, no "as seen on" block, no cross-posted content).

## 10. First expansion after launch

Once the ten scaffold pages are live and tracking:

- Add the first scored-moment pages — `/scores/birthday/for-a-parent/`, `/scores/wedding/for-the-couple/` etc. — each applying the rubric to a specific moment with per-dimension sub-scores on the page.
- Add a `/rubric/v1/` changelog page so future rubric-version changes are auditable.
- Expose a simple sitemap.xml at `/sitemap.xml`.

Each scored-moment page follows the methodology-first pattern: rubric on the page, weights visible, sub-scores broken out, limitations named.
