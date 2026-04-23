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

const title = 'Worked example: applying the Gift Score rubric to graduation gifts';
const description =
  'Five candidate graduation gifts scored dimension by dimension against the published rubric, with the rationale for every sub-score and every composite written out in full.';

const faqs = [
  {
    question: 'Are the composite Gift Scores on this page real scores published on moment pages?',
    answer:
      'No. The five composites on this page are worked examples: illustrative applications of the published rubric to generic graduation candidate types. Real moment-page Gift Scores are applied to specific SKUs with their specific spend bands, return policies, and editorial records at scoring time.',
  },
  {
    question: 'Why does plain cash with a handwritten letter beat a premium smartwatch in this example?',
    answer:
      'Because the rubric weights category fit at 30 of 100 and brand alone cannot carry a composite. A smartwatch has a decade-plus brand record but sits mid-low on category fit because many graduates already own one and the object is not uniquely graduation-shaped. Cash skips the brand dimension by construction but scores near the ceiling on the other three because a transition moment rewards flexibility, honest spend, and zero return friction.',
  },
  {
    question: 'Can commemorative merchandise ever win a graduation composite against these other shapes?',
    answer:
      'Inside this rubric, rarely. Class-of merchandise scores low on three dimensions at once: brand density (commodity), category fit (backward-looking at a forward-pointing moment), and giftability (hard to return, easy to regret). A reader weighting sentimentality far higher than the published weights would get a different answer, which is the reason the weights are published.',
  },
];

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: SITE.url + '/methodology/worked-example-graduation/' },
  ],
  link: [{ rel: 'canonical', href: SITE.url + '/methodology/worked-example-graduation/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([
      { name: 'Methodology', path: '/methodology/' },
      { name: 'Worked example: graduation gifts', path: '/methodology/worked-example-graduation/' },
    ]),
    articleNode({
      headline: title,
      description,
      url: '/methodology/worked-example-graduation/',
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
    <h1>Worked example: applying the rubric to graduation gifts.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      A worked example is the rubric shown in motion: five candidate
      graduation gifts scored dimension by dimension, with the
      rationale for every sub-score written out and the composite
      arithmetic done in the open. Graduation was chosen because
      it is a transition moment where the weights separate
      forward-pointing objects from backward-pointing ones. The
      five composites below are illustrative examples, not scores
      attached to specific SKUs on moment pages.
    </p>

    <h2>What a worked example is for</h2>
    <p>
      The <NuxtLink to="/methodology/how-we-score/">rubric page</NuxtLink>
      documents the weights and the failure modes each dimension is
      designed to catch. This page runs five candidates through the
      four dimensions &mdash; brand &amp; review density
      (0&ndash;30), category fit (0&ndash;30), price-to-value
      (0&ndash;25), and giftability (0&ndash;15) &mdash; and reports
      each composite on the 0&ndash;100 Gift Score range.
    </p>

    <h2>Candidate 1 &mdash; Cash with a handwritten letter</h2>
    <p>
      A mid-three-figure cash gift inside a handwritten letter about
      the recipient&rsquo;s four years and what comes next.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>22 / 30</strong>. Cash has no brand; the rubric scores the handwritten artifact and caps in the low 20s without an editorial-press record.</li>
      <li>Category fit: <strong>28 / 30</strong>. A transition moment rewards optionality, and the letter anchors the cash to the specific recipient.</li>
      <li>Price-to-value: <strong>23 / 25</strong>. Cash carries its price honestly by definition; small deduction because the envelope sits slightly below the calibrated graduation spend band for close family.</li>
      <li>Giftability: <strong>14 / 15</strong>. Zero return friction; small deduction only because presentation depends on the giver&rsquo;s handwriting rather than a production process.</li>
    </ul>
    <p>
      <strong>22 + 28 + 23 + 14 = 87.</strong> Why this rank: the
      highest composite here, because three of the four dimensions
      align with the shape of a transition moment.
    </p>

    <h2>Candidate 2 &mdash; A serious piece of luggage (Away, Monos, Travelpro)</h2>
    <p>
      A carry-on or mid-size bag from a well-reviewed brand at a
      mid-three-figure spend band.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>25 / 30</strong>. Contemporary luggage brands carry decade-plus editorial records with consistent cross-retailer reviews; heritage lines add another layer of track record.</li>
      <li>Category fit: <strong>26 / 30</strong>. A graduate stepping into adult travel &mdash; relocations, first solo flights, first business trips &mdash; is close to ceiling on category fit for a durable carry object.</li>
      <li>Price-to-value: <strong>20 / 25</strong>. Inside the calibrated envelope; small deduction because premium luggage sits near the top of the band.</li>
      <li>Giftability: <strong>13 / 15</strong>. Presentable packaging and generous return window; small deduction because colour and size preferences can force recipient involvement on an exchange.</li>
    </ul>
    <p>
      <strong>25 + 26 + 20 + 13 = 84.</strong> Why this rank: brand
      and category fit both land in the mid-to-high 20s, and
      price-to-value holds because premium luggage carries its
      price through years of use.
    </p>

    <h2>Candidate 3 &mdash; A smartwatch (Apple Watch, Garmin)</h2>
    <p>
      A mid-tier smartwatch from a dominant brand at a
      mid-three-figure spend band.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>28 / 30</strong>. Dominant smartwatch brands sit near the ceiling; editorial records span a decade, cross-retailer reviews are dense.</li>
      <li>Category fit: <strong>13 / 30</strong>. Most recent graduates already wear a smartwatch or have declined to; watches are not a uniquely graduation-shaped object and the rubric penalises generic objects on moment-specific pages.</li>
      <li>Price-to-value: <strong>14 / 25</strong>. Fast depreciation as new generations ship, and a graduate who does not already own one often has a reason; the rubric treats that as a double deduction.</li>
      <li>Giftability: <strong>12 / 15</strong>. Clean return window; small deduction because band size and cellular-plan questions can force recipient involvement on an exchange.</li>
    </ul>
    <p>
      <strong>28 + 13 + 14 + 12 = 67.</strong> Why this rank: the
      smartwatch dominates on brand and stumbles on category fit
      and price-to-value &mdash; exactly the failure mode the
      rubric was designed to catch.
    </p>

    <h2>Candidate 4 &mdash; A kitchen starter set (chef&rsquo;s knife + cast iron + cookbook)</h2>
    <p>
      A three-object set: a mid-tier chef&rsquo;s knife, a
      pre-seasoned cast-iron skillet, and a well-reviewed
      general-purpose cookbook.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>21 / 30</strong>. Individual components carry strong records (heritage cookware, long-running publishers); the curated-bundle format sits slightly below a single-brand premium object.</li>
      <li>Category fit: <strong>24 / 30</strong>. Setting up adult life is one of the shapes a graduation gift is supposed to take. Small deduction because recipients moving in with a partner may already own these objects.</li>
      <li>Price-to-value: <strong>21 / 25</strong>. Inside the spend band and each component carries its price across long-term kitchen use.</li>
      <li>Giftability: <strong>12 / 15</strong>. Three objects means three return policies, which holds the dimension below 14 even though each component is cleanly returnable.</li>
    </ul>
    <p>
      <strong>21 + 24 + 21 + 12 = 78.</strong> Why this rank: a
      forward-pointing composite set that loses a point on
      giftability only for the multi-object return logistics.
    </p>

    <h2>Candidate 5 &mdash; A Class of 2026 branded frame or commemorative merchandise</h2>
    <p>
      A personalised frame, engraved plaque, or licensed
      commemorative object stamped with the year and institution
      name.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>10 / 30</strong>. Commemorative merchandise is commodity in editorial terms; there is no long-track-record publication reviewing class-of objects.</li>
      <li>Category fit: <strong>9 / 30</strong>. A transition moment wants forward-pointing objects; a commemorative artifact is backward-pointing by construction.</li>
      <li>Price-to-value: <strong>10 / 25</strong>. Licensed commemorative objects carry a markup that has almost nothing to do with material cost.</li>
      <li>Giftability: <strong>7 / 15</strong>. Personalised objects are typically non-returnable &mdash; the failure mode this dimension exists to catch.</li>
    </ul>
    <p>
      <strong>10 + 9 + 10 + 7 = 36.</strong> Why this rank: the
      lowest composite here, because the object scores badly on
      all four dimensions and personalisation eliminates the
      giftability escape hatch.
    </p>

    <h2>What the rubric caught</h2>
    <p>
      The rubric cleanly separates forward-pointing transition
      objects (cash with a letter at 87, luggage at 84, a kitchen
      starter at 78) from backward-pointing commemorative objects
      (class-of merchandise at 36). A heritage-brand smartwatch
      sits in the middle (67) because brand dominance cannot
      compensate for the category-fit and price-to-value weights
      when the object is not uniquely graduation-shaped. The
      weights were chosen deliberately so a transition moment
      scores the shape of the object, not only its brand record.
    </p>

    <h2>Try it yourself</h2>
    <p>
      The weights on the rubric page are defaults, not a verdict.
      A reader who weights giftability heavier than 15%, or
      price-to-value lower than 25% for a close-family graduate,
      should substitute their own ceilings and re-compute the
      five composites above. That is the point of publishing the
      arithmetic in the open.
    </p>

    <h2>Related methodology pages</h2>
    <ul>
      <li>
        <NuxtLink to="/methodology/worked-example-anniversary/">Worked example: anniversary gifts</NuxtLink>
        &mdash; the rubric applied to a different moment, where shared-history objects do the heaviest sorting.
      </li>
      <li>
        <NuxtLink to="/methodology/worked-example-mom-birthday/">Worked example: mom&rsquo;s birthday gifts</NuxtLink>
        &mdash; another moment where the rubric correctly devalues brand-density when category fit is low.
      </li>
      <li>
        <NuxtLink to="/methodology/how-we-score/">How the score is calculated</NuxtLink>
        &mdash; the rubric itself, with weights and rationale.
      </li>
    </ul>

    <hr />
    <p>
      <NuxtLink to="/methodology/worked-example-anniversary/">&larr; Worked example: anniversary gifts</NuxtLink>
      &middot;
      <NuxtLink to="/methodology/worked-example-mom-birthday/">Worked example: mom birthday gifts &rarr;</NuxtLink>
    </p>
  </article>
</template>
