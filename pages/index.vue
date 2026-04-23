<script setup lang="ts">
import {
  articleNode,
  editorPersonNode,
  faqPageNode,
  graph,
  organizationNode,
  websiteNode,
} from '~/composables/schema';
import { SITE } from '~/composables/site';

const DATE_PUBLISHED = '2026-04-23';
const DATE_MODIFIED = '2026-04-23';

const title = 'Rubric-based gift scoring — how we think, what we weigh';
const description =
  'GiftScored evaluates gifts against a public rubric: brand reputation, category fit, price-to-value, and giftability. We publish the weights, the refresh cycle, and what the rubric cannot know.';

useHead({
  title,
  meta: [{ name: 'description', content: description }],
  link: [{ rel: 'canonical', href: SITE.url + '/' }],
});

const FAQS = [
  {
    question: 'What is the Gift Score?',
    answer:
      "The Gift Score is a transparent rubric for evaluating gifts from publicly-available signals. It weights four dimensions — brand reputation and review density, category fit for the occasion, price-to-value calibration, and giftability (returnability, exchange window, arrival experience). Each dimension has a documented weight and a documented failure mode. We publish the rubric so you can disagree with any single weight and still use the framework.",
  },
  {
    question: 'Do you hand-test the products you score?',
    answer:
      "No. GiftScored is explicitly a framework-first publication. Our scores synthesize long-track-record editorial reviews (publications like Wirecutter, America's Test Kitchen, trade press), aggregated consumer review signals across major retailers, manufacturer specifications, and return-policy data. Where a product has not been tested by a reputable third party, we say so on the page and mark the score accordingly. Claiming hands-on tests we did not run would falsify the value the rubric is supposed to provide.",
  },
  {
    question: 'Why publish the rubric at all?',
    answer:
      "Because a score without a disclosed method is an opinion in a lab coat. The weights matter — a 10% shift in how we value returnability versus review density would move rankings by tens of places. Publishing the rubric lets a reader audit whether our weighting matches their own priorities, substitute their own weights, or reject the score entirely for a given gift moment. Transparency is the product.",
  },
  {
    question: 'Who writes the methodology?',
    answer:
      "Robin Lake is the Methodology Editor. Robin is a disclosed editorial pen name used by a single operator at Ramban Group during pre-incorporation. The pen name is a handle for editorial consistency; behind it is a real human making real decisions about rubric weights. Full disclosure is on the About page.",
  },
];

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    articleNode({
      headline: title,
      description,
      url: '/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Home',
    }),
    faqPageNode(FAQS),
  ),
);
</script>

<template>
  <article>
    <h1>Gifts, scored against a rubric you can read.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      Most gift sites rank by whatever pays best. GiftScored ranks by a
      published rubric, with the weights on the page. You can disagree
      with any line and still use the framework.
    </p>

    <h2>What the Gift Score measures</h2>
    <p>
      Every product or idea we consider runs through four weighted
      dimensions. None is perfect on its own; the combination is what
      survives a sanity check across occasions and relationships.
    </p>
    <ul>
      <li><strong>Brand &amp; review density (30%)</strong> — long-track-record editorial reputation plus cross-retailer consumer-review volume and consistency. A brand that has been well-reviewed for a decade across multiple retailers beats a brand with three hundred five-star Amazon reviews from last month.</li>
      <li><strong>Category fit (30%)</strong> — does this category tend to land for the occasion, the relationship, and the stage of life involved? Category fit is the highest-variance dimension and the one where the rubric can correct a product-only view.</li>
      <li><strong>Price-to-value (25%)</strong> — is the spend calibrated for the gift moment, and does the product carry its price honestly? Overspend as apology is a common miscalibration that the rubric is designed to flag.</li>
      <li><strong>Giftability (15%)</strong> — arrival experience, returnability, exchange window, and whether the product can be replaced without the giver&rsquo;s involvement.</li>
    </ul>

    <h2>What the rubric cannot know</h2>
    <p>
      Three things a public rubric will never capture: whether the
      recipient already owns the item, whether the relationship can
      carry a gift at that price band, and whether the moment asks for
      an object or for time. No score substitutes for the giver&rsquo;s
      judgment. The rubric narrows the field; the last call is yours.
    </p>

    <h2>Framework, not hand-testing</h2>
    <p>
      GiftScored is an editorial publication by <strong>Ramban Group</strong>.
      We are explicitly a framework-first operation. We do not claim to
      hand-test the products we score. Our inputs are public: editorial
      reviews from long-track-record publications, aggregated retailer
      review signals, manufacturer specifications, and return-policy
      documents. We disclose every input on the methodology pages.
    </p>
    <p>
      The Methodology Editor is <strong>Robin Lake</strong>, a disclosed
      editorial pen name in pre-incorporation use. Full disclosure at
      <NuxtLink to="/about/">/about/</NuxtLink> and editorial standards at
      <NuxtLink to="/editorial/">/editorial/</NuxtLink>.
    </p>

    <h2>Start with the methodology</h2>
    <ul>
      <li><NuxtLink to="/methodology/">The methodology hub</NuxtLink> — rubric, weights, and refresh cycle</li>
      <li><NuxtLink to="/methodology/how-we-pick/">How we pick what to score</NuxtLink></li>
      <li><NuxtLink to="/methodology/how-we-score/">How the score is calculated</NuxtLink></li>
      <li><NuxtLink to="/methodology/quarterly-refresh/">Why the rubric runs quarterly</NuxtLink></li>
    </ul>

    <h2>Frequently asked</h2>
    <div v-for="faq in FAQS" :key="faq.question">
      <h3>{{ faq.question }}</h3>
      <p>{{ faq.answer }}</p>
    </div>
  </article>
</template>
