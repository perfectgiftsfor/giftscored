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

const title = 'Terms of use';
const description =
  'Terms under which readers may use GiftScored: editorial content, affiliate links, liability, and correction policy.';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: SITE.url + '/terms/' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: SITE.url + '/terms/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([{ name: 'Terms', path: '/terms/' }]),
    articleNode({
      headline: title,
      description,
      url: '/terms/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Legal',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>Terms of use.</h1>
    <p class="byline">Effective {{ DATE_PUBLISHED }} &middot; Last updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      These are the terms under which GiftScored content is
      published: an editorial rubric, not personal advice; affiliate
      links that never influence a score; corrections within 48 hours;
      standard liability limits for an independent editorial
      publication. They apply as stated from day one.
    </p>

    <h2>Editorial content</h2>
    <p>
      GiftScored content is informational. The Gift Score is a
      weighted rubric composed of public signals as documented on the
      methodology pages. A score is a synthesis and not a personal
      recommendation for a specific reader&rsquo;s situation. Readers
      remain responsible for the final gift decision.
    </p>

    <h2>Affiliate links</h2>
    <p>
      This site contains affiliate links. When a reader clicks an
      outbound retailer link and makes a purchase, GiftScored may
      receive a commission at no additional cost to the reader.
      Affiliate relationships do not determine scores. See the
      <NuxtLink to="/editorial/">editorial standards</NuxtLink> for full
      disclosure, including the required Amazon Associates statement.
    </p>

    <h2>No warranty</h2>
    <p>
      GiftScored is provided &ldquo;as is.&rdquo; We make reasonable
      efforts to keep information current (see the
      <NuxtLink to="/methodology/quarterly-refresh/">quarterly refresh</NuxtLink>
      policy) but cannot warrant that every price, specification, or
      return policy on the site is correct at the moment of reading.
      Verify any price-sensitive detail with the retailer before
      purchase.
    </p>

    <h2>Limitation of liability</h2>
    <p>
      To the extent permitted by law, GiftScored and Ramban Group are
      not liable for indirect, incidental, or consequential damages
      arising from use of the site or reliance on its content.
    </p>

    <h2>Corrections</h2>
    <p>
      Material factual errors are corrected within 48 hours of
      notification and noted inline with the date of the fix. Email
      <a href="mailto:editor@giftscored.com">editor@giftscored.com</a>.
    </p>

    <h2>Governing law</h2>
    <p>
      Once the operating entity is incorporated, governing law and
      venue will appear here. Until then, disputes will be handled in
      good faith via email correspondence with the editor.
    </p>

    <h2>Changes</h2>
    <p>
      If these terms change materially, the effective date above will
      update and a note will be posted on the site for at least 30
      days.
    </p>
  </article>
</template>
