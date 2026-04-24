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

const title = 'Editorial standards';
const description =
  'How GiftScored decides what to score, how we handle affiliate links, and what distinguishes our methodology from retailer-owned listicles.';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: SITE.url + '/editorial/' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: SITE.url + '/editorial/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([{ name: 'Editorial standards', path: '/editorial/' }]),
    articleNode({
      headline: title,
      description,
      url: '/editorial/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Editorial',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>Editorial standards.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      GiftScored is a methodology-first editorial publication. The
      value of a score is exactly the transparency of its method. We
      write the way a research journal would write about products,
      not the way a retailer would move them.
    </p>

    <h2>What &ldquo;methodology-first&rdquo; means</h2>
    <p>
      Every page on this site either documents the rubric or applies
      it to a specific gift moment. The rubric &mdash; four weighted
      dimensions on a 0&ndash;100 scale &mdash; is the thing worth
      citing. Where we reference specific products, they are selected
      from a candidate bench that survives the sourcing pass on
      <NuxtLink to="/methodology/how-we-pick/">/methodology/how-we-pick/</NuxtLink>.
      We do not claim to hand-test products we score.
    </p>
    <p>
      This is an intentional editorial choice. Framework-level advice
      has longer shelf life than product-level claims, transfers
      between categories we have and have not explicitly covered,
      respects the reader&rsquo;s judgment about their own recipient,
      and is honest about the limits of what a rubric built on public
      signals can know.
    </p>

    <h2>How we select benchmark products</h2>
    <p>
      When we reference a specific brand or product, it has been
      benched by the Methodology Editor from sources that include:
      long-track-record editorial reputation (publications such as
      Wirecutter, America&rsquo;s Test Kitchen, Consumer Reports,
      category-specific trade press), cross-retailer consumer-review
      profiles with consistent signals across at least two major
      retailers, manufacturer specifications, and return-policy
      documents that make the product plausible as a gift.
    </p>
    <p>
      Commission rate is never part of this decision. The Methodology
      Editor does not see which products pay a higher affiliate
      percentage when benching candidates or scoring them.
    </p>

    <h2>Affiliate relationships</h2>
    <p>
      GiftScored participates in several affiliate programs, including
      the Amazon Services LLC Associates Program. When a reader clicks
      an outbound retailer link on this site and makes a purchase,
      GiftScored receives a small commission at no extra cost to the
      reader. Affiliate relationships do not determine what we score
      or how we score it. Individual pages may carry a top-of-page
      disclosure noting that affiliate links appear below.
    </p>
    <p>
      <strong>The Amazon required statement:</strong> As an Amazon
      Associate, GiftScored earns from qualifying purchases.
    </p>

    <h2>What we don&rsquo;t do</h2>
    <ul>
      <li><strong>No sponsored content.</strong> If a brand wants to pay for placement, the answer is no. If that ever changes, any such page will be labeled clearly as sponsored and set outside the regular editorial feed.</li>
      <li><strong>No hands-on testing claims.</strong> We do not write &ldquo;we tested this for six weeks&rdquo; about products we did not test. We synthesize public signals and say so. If a page ever does reflect a hands-on test, the page will say so explicitly with dates and conditions.</li>
      <li><strong>No AI-generated content without editorial review.</strong> Writing tools may be used internally; the Methodology Editor makes every published call.</li>
      <li><strong>No paraphrased listicles.</strong> We don&rsquo;t rewrite other publications&rsquo; gift guides, and we don&rsquo;t run &ldquo;top 10&rdquo; listicles whose order is driven by affiliate economics.</li>
      <li><strong>No dark patterns.</strong> No forced newsletter gate to read content, no fake urgency timers, no artificial scarcity framing, no &ldquo;only 3 left&rdquo; widgets.</li>
    </ul>

    <h2>Corrections</h2>
    <p>
      Spot a factual error? A price that has moved? A score that
      does not hold up? Write to
      <a href="mailto:editor@giftscored.com">editor@giftscored.com</a>.
      Material corrections land within 48 hours of notification and
      are noted inline on the affected page with the date of the fix.
    </p>

    <h2>Ownership and editorial independence</h2>
    <p>
      GiftScored is an editorial brand of Ramban Group. The
      Methodology Editor is Robin Lake, a disclosed pen name during
      pre-incorporation. See <NuxtLink to="/about/">/about/</NuxtLink>
      for the full ownership, pen-name, and commercial disclosures.
    </p>
  </article>
</template>
