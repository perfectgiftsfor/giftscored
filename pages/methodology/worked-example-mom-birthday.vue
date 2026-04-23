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

const title = 'Worked example: applying the Gift Score rubric to mom-birthday gifts';
const description =
  'Five candidate mom-birthday gifts scored dimension by dimension against the published rubric, with the rationale for every sub-score and every composite written out in full.';

const faqs = [
  {
    question: 'Are the composite Gift Scores on this page real scores published on moment pages?',
    answer:
      'No. The five composites on this page are worked examples: illustrative applications of the published rubric to generic mom-birthday candidate types. Real moment-page Gift Scores are applied to specific SKUs with their specific spend bands, return policies, and editorial records at scoring time.',
  },
  {
    question: 'Why does a bouquet from a dominant brand score so low against this rubric?',
    answer:
      'Because the rubric weights category fit at 30 of 100, and generic flowers are penalised on specificity for a moment that rewards it. A mass-marketed bouquet can carry brand density but cannot carry category fit when the recipient has no demonstrated tie to the specific shipment; price-to-value compounds the problem because the object is gone in a week. Brand density alone is designed not to rescue a composite from those two failures.',
  },
  {
    question: 'Can a candle multi-pack or a generic bouquet ever win a mom-birthday composite against these other shapes?',
    answer:
      'Inside this rubric, rarely. Both categories score badly on category fit because they are generic rather than specific, and both score badly on price-to-value for what they deliver. A reader whose mother has explicitly named a candle brand or a florist as her favourite would see the category-fit dimension climb sharply, which is the reason the weights are published and the sub-scores printed alongside.',
  },
];

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: SITE.url + '/methodology/worked-example-mom-birthday/' },
  ],
  link: [{ rel: 'canonical', href: SITE.url + '/methodology/worked-example-mom-birthday/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([
      { name: 'Methodology', path: '/methodology/' },
      { name: 'Worked example: mom-birthday gifts', path: '/methodology/worked-example-mom-birthday/' },
    ]),
    articleNode({
      headline: title,
      description,
      url: '/methodology/worked-example-mom-birthday/',
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
    <h1>Worked example: applying the rubric to mom-birthday gifts.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      A worked example is the rubric shown in motion: five
      candidate mom-birthday gifts scored dimension by dimension,
      with the rationale for every sub-score written out and the
      composite arithmetic done in the open. Mom-birthday was
      chosen because brand-advertising volume and category fit
      frequently point in opposite directions for it. The five
      composites below are illustrative examples, not scores
      attached to specific SKUs on moment pages.
    </p>

    <h2>What a worked example is for</h2>
    <p>
      The <NuxtLink to="/methodology/how-we-score/">rubric page</NuxtLink>
      documents the weights and the failure modes each dimension
      is designed to catch. This page runs five candidates through
      the four dimensions &mdash; brand &amp; review density
      (0&ndash;30), category fit (0&ndash;30), price-to-value
      (0&ndash;25), and giftability (0&ndash;15) &mdash; and
      reports each composite on the 0&ndash;100 Gift Score range.
    </p>

    <h2>Candidate 1 &mdash; A Storyworth-bound family memoir</h2>
    <p>
      A twelve-month guided memoir service that collects a
      parent&rsquo;s answers to weekly prompts and binds them into
      a printed hardcover, delivered around the birthday.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>22 / 30</strong>. Storyworth is well-established in the guided-memoir category with a multi-year editorial record; the category itself is narrower than mainstream consumer brands, which caps the dimension in the low 20s.</li>
      <li>Category fit: <strong>28 / 30</strong>. A mid-life legacy-triggering moment is close to ceiling for a category that asks the recipient to tell her own story and delivers a shared-history artifact a year later.</li>
      <li>Price-to-value: <strong>22 / 25</strong>. Inside the calibrated envelope; price is carried by the hardcover deliverable plus twelve months of service.</li>
      <li>Giftability: <strong>13 / 15</strong>. Strong arrival experience; small deduction because the recipient must participate for the object to exist.</li>
    </ul>
    <p>
      <strong>22 + 28 + 22 + 13 = 85.</strong> Why this rank: the
      highest composite here, because category fit and
      price-to-value both align with the specific shape of a
      mom-birthday moment.
    </p>

    <h2>Candidate 2 &mdash; A Brooklinen or Parachute sheet-set upgrade</h2>
    <p>
      A premium linen or percale sheet set from a
      direct-to-consumer bedding brand at a
      mid-to-upper-three-figure spend band.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>24 / 30</strong>. Contemporary DTC bedding brands carry dense editorial records with consistent cross-retailer reviews; small deduction because the top of this dimension is held by brands with longer single-category histories.</li>
      <li>Category fit: <strong>25 / 30</strong>. Sheets are a high-daily-contact object, and upgrading a commodity into a premium version is one of the most reliably-landing shapes for an established household.</li>
      <li>Price-to-value: <strong>21 / 25</strong>. Inside the spend band; small deduction because premium bedding carries a brand-plus-marketing component in the price.</li>
      <li>Giftability: <strong>13 / 15</strong>. Clean return windows; small deduction because sheet-size and colour preferences can force recipient involvement on an exchange.</li>
    </ul>
    <p>
      <strong>24 + 25 + 21 + 13 = 83.</strong> Why this rank: a
      clean score on an everyday-upgrade object, with all four
      dimensions landing in a narrow band rather than one
      dimension carrying the composite.
    </p>

    <h2>Candidate 3 &mdash; A 1-800-Flowers generic bouquet</h2>
    <p>
      A mid-tier delivered bouquet from a dominant mass-market
      florist, selected from the default seasonal assortment.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>24 / 30</strong>. The brand is widely advertised with a decade-plus editorial record and dense consumer review volume; the dimension is the strength of this candidate.</li>
      <li>Category fit: <strong>8 / 30</strong>. Generic flowers are the rubric&rsquo;s archetypal category-fit failure for this moment: the object has no demonstrated tie to the specific recipient.</li>
      <li>Price-to-value: <strong>8 / 25</strong>. A mid-tier bouquet is gone inside a week; the rubric treats fast-consumable categories harshly on price-to-value when the moment is a milestone and the object lacks specificity.</li>
      <li>Giftability: <strong>8 / 15</strong>. Reliable arrival; larger deduction because flowers cannot be returned or exchanged in any meaningful sense.</li>
    </ul>
    <p>
      <strong>24 + 8 + 8 + 8 = 48.</strong> Why this rank: the
      brand-density score cannot carry a composite across two
      failed high-weight dimensions. The worked-example
      illustration of why brand dominance alone does not win
      inside this rubric.
    </p>

    <h2>Candidate 4 &mdash; A Zingerman&rsquo;s food hamper matched to her taste</h2>
    <p>
      A curated specialty-grocer hamper &mdash; olive oils,
      cheeses, chocolates, or preserves &mdash; selected against
      the recipient&rsquo;s known preferences at a mid-three-figure
      spend band.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>20 / 30</strong>. Specialty-grocer brands carry strong editorial records inside food publications; the dimension caps in the low 20s because the category is narrower than mainstream consumer brands.</li>
      <li>Category fit: <strong>25 / 30</strong>. A consumable hamper matched to documented taste combines specificity with a clean arrival event. Small deduction because taste can drift between orderings.</li>
      <li>Price-to-value: <strong>21 / 25</strong>. Inside the envelope; the consumable nature would normally deduct, but the specificity recovers the dimension.</li>
      <li>Giftability: <strong>13 / 15</strong>. Clean arrival and standard replacement policy for damaged goods; small deduction because a consumable cannot be returned once opened.</li>
    </ul>
    <p>
      <strong>20 + 25 + 21 + 13 = 79.</strong> Why this rank:
      specificity lifts category fit above where generic
      consumables would sit, and giftability holds up because the
      damaged-goods replacement policy is straightforward.
    </p>

    <h2>Candidate 5 &mdash; A Yankee Candle multi-pack</h2>
    <p>
      A three-or-four candle multi-pack in seasonal fragrances
      from a dominant mass-market candle brand at a low-to-mid
      spend band.
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>22 / 30</strong>. The brand is ubiquitous with a long editorial record and dense cross-retailer reviews; the only strong dimension for the candidate.</li>
      <li>Category fit: <strong>6 / 30</strong>. Most mom-birthday recipients already own a surplus of candles, and the giver&rsquo;s fragrance taste is an unreliable proxy for the recipient&rsquo;s. The rubric penalises that mismatch sharply on a moment-specific page.</li>
      <li>Price-to-value: <strong>6 / 25</strong>. Low in absolute terms but high per ounce of commodity wax, and the multi-pack format does not change that.</li>
      <li>Giftability: <strong>8 / 15</strong>. Returnable while sealed; deducts because scent-unseen exchanges typically require recipient involvement.</li>
    </ul>
    <p>
      <strong>22 + 6 + 6 + 8 = 42.</strong> Why this rank: the
      lowest composite here, because three of the four dimensions
      score in single digits or low single-teens and the strong
      brand dimension cannot compensate.
    </p>

    <h2>What the rubric caught</h2>
    <p>
      The rubric devalues volume-and-brand-density signals when
      category fit and personal specificity are low. Both the
      generic bouquet (48) and the mass-market candle multi-pack
      (42) score poorly despite high brand recognition, because
      genericness is penalised on a moment-specific page. The
      specificity-driven candidates &mdash; a guided memoir at 85
      and a taste-matched hamper at 79 &mdash; pull well ahead,
      and an everyday-upgrade object (bedding at 83) rounds out
      the top because a high-daily-contact category is a reliably
      landing shape. The weights were chosen so brand-density
      alone cannot rescue a category-fit failure.
    </p>

    <h2>Try it yourself</h2>
    <p>
      The weights on the rubric page are defaults, not a verdict.
      A reader whose mother has explicitly named a florist brand,
      or whose taste in candles the reader can document with
      confidence, should re-score those candidates with a
      category-fit ceiling closer to 22 of 30 and substitute the
      resulting composites for the illustrative figures above.
      That is the point of publishing the arithmetic in the open.
    </p>

    <hr />
    <p>
      <NuxtLink to="/methodology/worked-example-graduation/">&larr; Worked example: graduation gifts</NuxtLink>
      &middot;
      <NuxtLink to="/methodology/quarterly-refresh/">Quarterly refresh &rarr;</NuxtLink>
    </p>
  </article>
</template>
