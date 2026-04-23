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

const title = 'How we pick what to score';
const description =
  'The candidate-sourcing framework behind the Gift Score: which brands and categories make it onto the bench, which ones we refuse to score, and why some categories are excluded entirely.';

useHead({
  title,
  meta: [{ name: 'description', content: description }],
  link: [{ rel: 'canonical', href: SITE.url + '/methodology/how-we-pick/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([
      { name: 'Methodology', path: '/methodology/' },
      { name: 'How we pick', path: '/methodology/how-we-pick/' },
    ]),
    articleNode({
      headline: title,
      description,
      url: '/methodology/how-we-pick/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Methodology &middot; How we pick',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>How we pick what to score.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      Before anything gets a Gift Score, it has to survive a
      candidate-selection pass. The bench is shorter than most gift
      sites&rsquo; inventory by design, because including every
      product that exists would dilute the rubric into noise.
    </p>

    <h2>The three inputs to the candidate bench</h2>
    <p>
      For every gift moment we cover &mdash; a relationship, an
      occasion, a price band &mdash; the candidate list is built from
      three sources, in this order of weight.
    </p>

    <h3>1. Long-track-record editorial reviews</h3>
    <p>
      Publications with a multi-year record of independent product
      testing in a given category: Wirecutter, America&rsquo;s Test
      Kitchen, Consumer Reports, trade press in the specific
      category (for example, kitchen knife tests in a culinary trade
      publication). A product that a track-record reviewer has
      recommended for three or more refresh cycles carries weight that
      a single-point-in-time review cannot.
    </p>
    <p>
      We do not include round-ups from publications that produce
      gift content primarily as an affiliate vehicle. The filter here
      is editorial independence, not brand prestige.
    </p>

    <h3>2. Cross-retailer consumer review signals</h3>
    <p>
      Aggregated consumer reviews across multiple major retailers
      (Amazon, the brand&rsquo;s own store, a specialty retailer
      where relevant). Single-retailer high-review-count products are
      treated with scepticism; cross-retailer consistency is the
      signal we want. A product at 4.5 stars on Amazon and 4.6 stars
      on Nordstrom from a brand sold at both is a stronger signal
      than a product at 4.8 stars on Amazon only.
    </p>
    <p>
      We discount recent review volume that appears to be the result
      of review-solicitation campaigns. A product whose review count
      tripled in the last ninety days without a pricing change or a
      new model launch gets flagged for manual review.
    </p>

    <h3>3. Category fit against the moment</h3>
    <p>
      Before a product is benched it has to plausibly fit the
      occasion. A product that would be excellent for one recipient
      and miscalibrated for another is benched only against the
      moment it fits. The category-fit pass is the hardest one to
      get right and is the reason the rubric runs as moments
      (&ldquo;milestone birthday for a parent&rdquo;) rather than as
      pure category rankings (&ldquo;best leather wallets&rdquo;).
    </p>

    <h2>Categories we refuse to score</h2>
    <ul>
      <li><strong>Category-less gift cards.</strong> Unrestricted gift cards score well on giftability and fail every other dimension; they exist outside the rubric.</li>
      <li><strong>Regulated categories we are not equipped to evaluate.</strong> Firearms, cannabis, prescription items, alcohol for specific occasions where legality varies by jurisdiction.</li>
      <li><strong>Bespoke services.</strong> Custom commissions (a painted portrait, a commissioned memoir) are not scored because the product is the artist, not a reproducible good.</li>
      <li><strong>Products whose return policy excludes the recipient.</strong> If a product is non-returnable without the purchaser&rsquo;s receipt and the recipient is downstream, it fails giftability hard enough that we don&rsquo;t bench it at all.</li>
    </ul>

    <h2>How a candidate falls off the bench</h2>
    <p>
      Three common reasons: the product is discontinued, the brand
      changes ownership and the new owner does not carry the old
      editorial record, or the product&rsquo;s review profile diverges
      across retailers in a way that suggests a quality change. When
      a candidate falls off, the score on any page that references it
      is marked as under review until the quarterly refresh resolves
      the question.
    </p>

    <h2>Why the bench is deliberately short</h2>
    <p>
      A rubric that scores five hundred items in a category is not a
      rubric &mdash; it is a retailer product feed with a score
      column. We bench the number of candidates the rubric can
      honestly discriminate between: usually fifteen to forty items
      per moment, sometimes fewer when the category is narrow.
    </p>
    <p>
      If a reader wants the full taxonomy of a category, there are
      better resources. GiftScored exists because most gift decisions
      need exactly the opposite: a smaller, explicitly-ranked list
      with the reasoning on the page.
    </p>

    <hr />
    <p>
      <NuxtLink to="/methodology/">&larr; Methodology hub</NuxtLink>
      &middot;
      <NuxtLink to="/methodology/how-we-score/">How the score is calculated &rarr;</NuxtLink>
    </p>
  </article>
</template>
