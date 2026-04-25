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

const DATE_PUBLISHED = '2026-04-25';
const DATE_MODIFIED = '2026-04-25';

const title = 'Disclosures — GiftScored';
const description =
  'GiftScored disclosures: affiliate posture (none — methodology property), editorial pen name, parent company, AI usage, and what this publication does not do.';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: SITE.url + '/disclosures/' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: SITE.url + '/disclosures/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([{ name: 'Disclosures', path: '/disclosures/' }]),
    articleNode({
      headline: 'Disclosures',
      description,
      url: '/disclosures/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Disclosures',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>Disclosures.</h1>
    <p class="byline">
      Last reviewed by
      <NuxtLink to="/masthead/#robin-lake">Robin Lake</NuxtLink>,
      Methodology Editor &middot; Updated {{ DATE_MODIFIED }}
    </p>

    <p class="bottom-line">
      Everything a thoughtful reader should know about GiftScored's
      methodology-first posture, its absence of affiliate links, who
      is behind the byline, and what this publication deliberately
      does not do.
    </p>

    <h2>Affiliate disclosure</h2>
    <p>
      <strong>GiftScored carries no affiliate links.</strong> The
      methodology property publishes the rubric — it does not pick
      products, rank products, or earn from product purchases. Sibling
      Ramban Group properties apply the rubric on their own surfaces;
      affiliate economics are not a variable in the rubric and not a
      revenue line for this site.
    </p>
    <p>
      This is the single most important commitment on the site and the
      one most easily audited: read the rubric on
      <NuxtLink to="/methodology/how-we-score/">/methodology/how-we-score/</NuxtLink>
      and verify that commission is not a dimension and not a tie-breaker.
    </p>

    <h2>Editorial pen name</h2>
    <p>
      All methodology pages on GiftScored are published under the byline
      <strong>Robin Lake, Methodology Editor</strong>. This is a
      disclosed editorial pen name used by a single operator at
      Ramban Group during the pre-incorporation phase of the
      publication. Behind the name is a real human making real
      decisions about rubric weights, candidate benches, and refresh
      priorities. The pen name will retire when we hire contributor
      editors under their legal names.
    </p>

    <h2>Parent company</h2>
    <p>
      GiftScored is an editorial brand of <strong>Ramban Group</strong>.
      Ramban Group operates a portfolio of independent editorial
      publications. Each property has its own domain, its own editorial
      voice, its own rubric or framework, and its own team. There is
      no cross-linking between sister properties and no shared
      branding visible to readers.
    </p>
    <p>
      GiftScored operates pre-incorporation of a formal LLC. Once the
      LLC is formed, this page will update with the legal name,
      registered-agent address, and EIN.
    </p>

    <h2>AI usage</h2>
    <p>
      Methodology copy on GiftScored — the rubric, the weight
      definitions, the worked examples — is written and maintained by
      a human Methodology Editor. AI tooling is used for proofreading
      and structure suggestions; we do not publish AI-generated rubric
      entries, AI-generated worked examples, or AI-generated weight
      revisions without human editorial review and revision.
    </p>

    <h2>What GiftScored does not do</h2>
    <ul>
      <li>Accept sponsored posts or paid reviews.</li>
      <li>Accept vendor freebies disguised as tested products.</li>
      <li>Publish AI-generated methodology content without editorial review.</li>
      <li>Run "top 10" listicles ranked by anything, let alone commission.</li>
      <li>
        Claim hands-on product testing. The rubric operates on
        publicly-available signals — that is explicitly disclosed.
      </li>
      <li>
        Sell, rent, or trade your email address or personal data. See
        the <NuxtLink to="/privacy/">privacy policy</NuxtLink>.
      </li>
      <li>
        Cross-link with sibling Ramban Group properties during the
        first 60 days of live traffic per property.
      </li>
      <li>Combine content with perfectgiftsfor.com (unrelated publisher).</li>
    </ul>

    <h2>Corrections</h2>
    <p>
      Spotted a factual error, a price that has moved, a return policy
      that has changed, or a score that does not hold up against the
      rubric? Email
      <a href="mailto:editor@giftscored.com">editor@giftscored.com</a>.
      Material corrections land within 48 hours of notification and
      are noted inline on the affected page with the date of the fix.
      The full corrections log lives at
      <NuxtLink to="/corrections/">/corrections/</NuxtLink>.
    </p>

    <h2>Contact</h2>
    <p>
      For methodology questions, press inquiries, or privacy concerns,
      see <NuxtLink to="/contact/">/contact/</NuxtLink> for the
      routing addresses. The disclosed editor is reachable at
      <a href="mailto:editor@giftscored.com">editor@giftscored.com</a>.
    </p>

    <hr />
    <p>
      <NuxtLink to="/about/">About the publication</NuxtLink> &middot;
      <NuxtLink to="/editorial/">Editorial standards</NuxtLink> &middot;
      <NuxtLink to="/methodology/">The rubric</NuxtLink> &middot;
      <NuxtLink to="/corrections/">Corrections log</NuxtLink>
    </p>
  </article>
</template>
