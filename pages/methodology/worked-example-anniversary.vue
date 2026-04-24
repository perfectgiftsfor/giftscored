<script setup lang="ts">
import {
  articleNode,
  breadcrumbListNode,
  editorPersonNode,
  faqPageNode,
  graph,
  organizationNode,
  websiteNode,
} from '~/composables/schema';
import { SITE } from '~/composables/site';

const DATE_PUBLISHED = '2026-04-23';
const DATE_MODIFIED = '2026-04-23';

const title = 'Worked example: applying the Gift Score rubric to anniversary gifts';
const description =
  'Five candidate anniversary gifts scored dimension by dimension against the published rubric, with the rationale for every sub-score and every composite written out in full.';

const faqs = [
  {
    question: 'Are the composite Gift Scores on this page real scores published on moment pages?',
    answer:
      'No. The five composites on this page are worked examples: illustrative applications of the published rubric to generic anniversary candidate types. Real moment-page Gift Scores are applied to specific SKUs with their specific spend bands, return policies, and editorial records at scoring time.',
  },
  {
    question: 'Why did a custom dated artifact beat a premium watch in this example?',
    answer:
      'Because the rubric weights category fit at 30 of 100. A premium watch can carry brand-and-review density easily, but its shared-history tie to the specific couple is thin, which pulls category fit down. A dated artifact from the couple\u2019s year trades a little brand weight for a large category-fit gain and a clean giftability ceiling.',
  },
  {
    question: 'Can a subscription box ever win an anniversary composite against these other shapes?',
    answer:
      'Inside this rubric, rarely. Subscriptions score mid-low on category fit for anniversaries, low on brand differentiation by construction, and only mid on giftability because the product is ongoing rather than a single arrival. A reader weighting giftability lower and convenience higher would get a different answer, which is the reason the weights are published.',
  },
];

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: SITE.url + '/methodology/worked-example-anniversary/' },
    { property: 'og:type', content: 'article' },
  ],
  link: [{ rel: 'canonical', href: SITE.url + '/methodology/worked-example-anniversary/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([
      { name: 'Methodology', path: '/methodology/' },
      { name: 'Worked example: anniversary gifts', path: '/methodology/worked-example-anniversary/' },
    ]),
    articleNode({
      headline: title,
      description,
      url: '/methodology/worked-example-anniversary/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Methodology &middot; Worked example',
    }),
    faqPageNode(faqs),
  ),
);
</script>

<template>
  <article>
    <h1>Worked example: applying the rubric to anniversary gifts.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      A worked example is the rubric shown in motion: five candidate
      anniversary gifts scored dimension by dimension, with the
      rationale for every sub-score written out and the composite
      arithmetic done in the open. Anniversary was chosen because it
      is a high-stakes, high-variance moment where the published
      weights do real separating work. The five composites below are
      illustrative examples, not scores attached to specific SKUs on
      moment pages.
    </p>

    <h2>What a worked example is for</h2>
    <p>
      The <NuxtLink to="/methodology/how-we-score/">rubric page</NuxtLink>
      documents the weights and the failure modes each dimension is
      designed to catch. This page runs five real-shaped candidates
      through the four dimensions &mdash; brand &amp; review density
      (0&ndash;30), category fit (0&ndash;30), price-to-value
      (0&ndash;25), and giftability (0&ndash;15) &mdash; and reports
      each composite on the standard 0&ndash;100 Gift Score range.
    </p>

    <h2>Candidate 1 &mdash; A framed, dated artifact from the couple&rsquo;s year</h2>
    <p>
      A custom-drawn map of the neighbourhood where the couple met,
      framed, with the date stamped in the corner.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>18 / 30</strong>. Independent makers cap in the high teens because reviews are single-retailer and press records are thin.</li>
      <li>Category fit: <strong>28 / 30</strong>. A dated, place-specific artifact sits near the ceiling for a moment that rewards shared-history anchors.</li>
      <li>Price-to-value: <strong>22 / 25</strong>. Inside the calibrated anniversary spend band; small deduction because frame quality varies.</li>
      <li>Giftability: <strong>14 / 15</strong>. Arrives boxed and ready to hang, standard return window, no coordination required.</li>
    </ul>
    <p>
      <strong>18 + 28 + 22 + 14 = 82.</strong> Why this rank: category
      fit and giftability cover for a brand dimension that
      structurally caps in the high teens.
    </p>

    <h2>Candidate 2 &mdash; A premium watch (Tudor Black Bay, Omega Seamaster)</h2>
    <p>
      A well-reviewed mechanical watch from a heritage brand at a
      four-figure spend band.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>27 / 30</strong>. Decade-plus editorial records across multiple publications; consistent cross-retailer consumer reviews.</li>
      <li>Category fit: <strong>14 / 30</strong>. The shared-history tie is thin, and the rubric penalises generic objects on moment-specific pages even when the product-only view is strong.</li>
      <li>Price-to-value: <strong>15 / 25</strong>. The spend band overshoots most anniversary moments; overspend-as-apology is penalised rather than credited.</li>
      <li>Giftability: <strong>12 / 15</strong>. Presentable packaging and a generous return window; small deduction because sizing requires recipient involvement to exchange cleanly.</li>
    </ul>
    <p>
      <strong>27 + 14 + 15 + 12 = 68.</strong> Why this rank: the
      watch dominates on brand and stumbles on category fit and
      price-to-value &mdash; the weights doing what they were
      designed to do.
    </p>

    <h2>Candidate 3 &mdash; A weekend trip booked for a specific date</h2>
    <p>
      Two nights at a destination hotel in a city that matters to the
      couple, booked for the anniversary weekend.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>22 / 30</strong>. Hospitality brands are scored slightly more cautiously than product brands given property-level variance; records are dense at the upper-mid tier.</li>
      <li>Category fit: <strong>28 / 30</strong>. Past the first few years, anniversary category fit rewards time over objects; a dated reservation is close to ceiling.</li>
      <li>Price-to-value: <strong>22 / 25</strong>. Inside the calibrated milestone envelope; a booking carries its price in a way a comparable object spend does not.</li>
      <li>Giftability: <strong>13 / 15</strong>. No shipping, no return question; small deduction because travel logistics can shift.</li>
    </ul>
    <p>
      <strong>22 + 28 + 22 + 13 = 85.</strong> Why this rank: the
      strongest composite here, because category fit and giftability
      both align for a dated experience.
    </p>

    <h2>Candidate 4 &mdash; A diamond necklace from a well-reviewed online retailer</h2>
    <p>
      A fine-jewellery necklace from a brand with strong
      cross-retailer reviews, at a mid-four-figure spend band.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>25 / 30</strong>. Large online jewellers with decade-plus records and high review volume score near the top of this dimension.</li>
      <li>Category fit: <strong>18 / 30</strong>. Fine jewellery is credible and generic; generic objects sit below shared-history objects on the specific moment page.</li>
      <li>Price-to-value: <strong>16 / 25</strong>. The rubric deducts when the spend band overshoots a non-milestone anniversary, even when the product carries an honest markup.</li>
      <li>Giftability: <strong>13 / 15</strong>. Generous return window and presentable packaging; small deduction because sizing and style make the &ldquo;return without giver involvement&rdquo; pass imperfect.</li>
    </ul>
    <p>
      <strong>25 + 18 + 16 + 13 = 72.</strong> Why this rank: a
      strong brand score and clean giftability carry a category-fit
      dimension held in the high teens by genericness rather than by
      product quality.
    </p>

    <h2>Candidate 5 &mdash; A subscription box for the couple</h2>
    <p>
      A monthly wine, cheese, or coffee subscription marketed as an
      anniversary gift, first box timed to the anniversary date.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>14 / 30</strong>. Subscription brands are largely commodity in editorial terms; the category caps in the mid-teens.</li>
      <li>Category fit: <strong>12 / 30</strong>. The anniversary moment wants a deliberate single arrival; an ongoing commodity experience is penalised on shape.</li>
      <li>Price-to-value: <strong>16 / 25</strong>. Subscriptions sit cleanly inside calibrated spend bands and carry their price honestly; the best of the four dimensions for this category.</li>
      <li>Giftability: <strong>10 / 15</strong>. The first box arrives well; deduction because subsequent boxes are an ongoing logistical commitment rather than a single giftable event.</li>
    </ul>
    <p>
      <strong>14 + 12 + 16 + 10 = 52.</strong> Why this rank: the
      lowest composite in this example set, because the rubric treats
      commodity consumables harshly on the two highest-weighted
      dimensions.
    </p>

    <h2>What the rubric caught</h2>
    <p>
      Across the five candidates the rubric places shared-history
      objects and booked experiences at the top of the 0&ndash;100
      Gift Score range (82 and 85) and commodity consumables at the
      bottom (52). Heritage-brand objects sit in the middle (68 and
      72) because brand dominance cannot compensate for the
      category-fit and price-to-value weights on moment-specific
      pages. A similar separation shows up in the
      <NuxtLink to="/methodology/worked-example-graduation/">graduation worked example</NuxtLink>,
      where the category-fit dimension again does the heaviest
      sorting against otherwise strong candidates. That separation is
      the product in action: the weights were chosen deliberately so
      that brand alone cannot carry a composite into the 80s on an
      occasion where category fit is the highest-stakes dimension.
    </p>

    <h2>Try it yourself</h2>
    <p>
      The weights on the rubric page are defaults, not a verdict. A
      reader who weights giftability heavier than 15%, or
      price-to-value lower than 25% for a milestone year, should
      substitute their own ceilings and re-compute the five
      composites above. That is the point of publishing the
      arithmetic in the open.
    </p>

    <h2>Related methodology pages</h2>
    <ul>
      <li>
        <NuxtLink to="/methodology/worked-example-graduation/">Worked example: graduation gifts</NuxtLink>
        &mdash; the same rubric applied to a different moment, with a different weighting outcome.
      </li>
      <li>
        <NuxtLink to="/methodology/worked-example-mom-birthday/">Worked example: mom&rsquo;s birthday gifts</NuxtLink>
        &mdash; the rubric correctly devalues brand-and-review density when category fit is low.
      </li>
      <li>
        <NuxtLink to="/methodology/how-we-score/">How the score is calculated</NuxtLink>
        &mdash; the rubric itself, with the weights and the rationale for each dimension ceiling.
      </li>
    </ul>

    <hr />
    <p>
      <NuxtLink to="/methodology/how-we-score/">&larr; How the score is calculated</NuxtLink>
      &middot;
      <NuxtLink to="/methodology/quarterly-refresh/">Quarterly refresh &rarr;</NuxtLink>
    </p>
  </article>
</template>
