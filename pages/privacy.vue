<script setup lang="ts">
import {
  articleNode,
  breadcrumbListNode,
  editorPersonNode,
  graph,
  organizationNode,
  websiteNode,
} from '~/composables/schema';
import { SITE } from '~/composables/site';

const DATE_PUBLISHED = '2026-04-23';
const DATE_MODIFIED = '2026-04-23';

const title = 'Privacy policy';
const description =
  'How GiftScored handles reader data: analytics, affiliate tracking, email, cookies, and your rights under GDPR and CCPA.';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: SITE.url + '/privacy/' },
  ],
  link: [{ rel: 'canonical', href: SITE.url + '/privacy/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([{ name: 'Privacy', path: '/privacy/' }]),
    articleNode({
      headline: title,
      description,
      url: '/privacy/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Legal',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>Privacy policy.</h1>
    <p class="byline">Effective {{ DATE_PUBLISHED }} &middot; Last updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      GiftScored collects the minimum data needed to publish an
      editorial site: aggregate analytics, and email if you write to
      us. We do not build reader profiles, we do not sell email
      addresses, and we do not run third-party advertising trackers.
      The commitments below apply from day one and are audit-ready as
      stated.
    </p>

    <h2>What we collect</h2>
    <ul>
      <li><strong>Aggregate analytics.</strong> Page views, referral source, device class, and broad geography (country or region), via a self-hosted or privacy-preserving analytics tool. No individually-identifying reader profiles are built.</li>
      <li><strong>Affiliate tracking.</strong> When a reader clicks an outbound retailer link, the retailer sets a cookie so the sale can be attributed to GiftScored. This is the retailer&rsquo;s cookie, under the retailer&rsquo;s policy, not ours.</li>
      <li><strong>Email, if you contact us.</strong> If you email one of the listed addresses, we retain the email for editorial, press, or privacy correspondence purposes.</li>
    </ul>

    <h2>What we do not collect</h2>
    <ul>
      <li>No sign-in, no account system, no reader profile.</li>
      <li>No third-party advertising trackers.</li>
      <li>No session replay, heatmap, or behavioural-advertising tooling.</li>
    </ul>

    <h2>Cookies</h2>
    <p>
      GiftScored itself sets no first-party cookies for personalisation
      or advertising. Analytics cookies, if present, are strictly for
      aggregate measurement. Outbound affiliate links cause the
      destination retailer to set its own cookies under its own policy.
    </p>

    <h2>Your rights</h2>
    <p>
      Readers in the EU/UK (GDPR) and California (CCPA) have rights to
      access and deletion. To exercise these rights, email
      <a href="mailto:privacy@giftscored.com">privacy@giftscored.com</a>
      from the address at issue and we will respond within the
      statutory window.
    </p>

    <h2>Data controller</h2>
    <p>
      Ramban Group operates GiftScored pre-incorporation. The sole
      operator is the data controller of record. Once the LLC is
      formed, this section will update with the legal entity name and
      registered-agent contact.
    </p>

    <h2>Changes</h2>
    <p>
      If this policy changes materially, the effective date above will
      update and a note will be posted on the site for at least 30
      days.
    </p>
  </article>
</template>
