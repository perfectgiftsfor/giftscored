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

const title = 'The GiftScored methodology';
const description =
  'The rubric, the weights, the refresh cycle, and the explicit limits of what a public score can know. Everything we weigh is documented on the linked deep guides.';

useHead({
  title,
  meta: [{ name: 'description', content: description }],
  link: [{ rel: 'canonical', href: SITE.url + '/methodology/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([{ name: 'Methodology', path: '/methodology/' }]),
    articleNode({
      headline: title,
      description,
      url: '/methodology/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Methodology',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>The methodology.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      A score without a disclosed method is an opinion wearing a lab
      coat. This hub links to the three documents that together define
      the Gift Score: what we pick, how we score it, and how often we
      re-run the rubric.
    </p>

    <h2>The rubric at a glance</h2>
    <table class="rubric-table">
      <thead>
        <tr>
          <th>Dimension</th>
          <th>Weight</th>
          <th>Primary signal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Brand &amp; review density</td>
          <td>30%</td>
          <td>Long-track-record editorial reviews plus cross-retailer consumer review volume and consistency.</td>
        </tr>
        <tr>
          <td>Category fit</td>
          <td>30%</td>
          <td>Does this category tend to land for the occasion, relationship, and life stage?</td>
        </tr>
        <tr>
          <td>Price-to-value</td>
          <td>25%</td>
          <td>Is the spend calibrated to the moment? Does the product carry its price?</td>
        </tr>
        <tr>
          <td>Giftability</td>
          <td>15%</td>
          <td>Arrival experience, returnability, exchange window, replaceability without the giver.</td>
        </tr>
      </tbody>
    </table>

    <h2>The three methodology deep guides</h2>
    <p>
      Each of the guides below is a standalone document on one part of
      the rubric. Read them in order or jump to the one most relevant
      to the question you have about a specific score.
    </p>
    <ul>
      <li>
        <NuxtLink to="/methodology/how-we-pick/"><strong>How we pick what to score</strong></NuxtLink> &mdash;
        the candidate-sourcing framework: which brands and categories make it onto the bench, which ones we refuse to score, and why we exclude certain categories from the rubric entirely.
      </li>
      <li>
        <NuxtLink to="/methodology/how-we-score/"><strong>How the score is calculated</strong></NuxtLink> &mdash;
        the weights with their rationale, the failure modes each dimension is designed to catch, and the sanity-check passes we run before a score is published.
      </li>
      <li>
        <NuxtLink to="/methodology/quarterly-refresh/"><strong>Why the rubric runs quarterly</strong></NuxtLink> &mdash;
        what the refresh cycle changes, what triggers an out-of-cycle re-score, and how we version the rubric so an old score can be audited against the rubric that produced it.
      </li>
    </ul>

    <h2>What the rubric deliberately excludes</h2>
    <p>
      Commission rate, retailer cookie duration, and every other
      affiliate-economics variable. If a product scores higher, that
      is never because it pays better. The rubric is scored by the
      Methodology Editor without visibility into which retailer is
      offering which commission at the time of scoring.
    </p>

    <h2>What the rubric cannot capture</h2>
    <p>
      Whether the recipient already owns the item. Whether the
      relationship can carry the price band. Whether the moment asks
      for an object at all. The rubric narrows the field; the last
      call always belongs to the giver.
    </p>

    <hr />
    <p>
      <NuxtLink to="/editorial/">Editorial standards</NuxtLink>
      &middot;
      <NuxtLink to="/about/">About the publication</NuxtLink>
    </p>
  </article>
</template>
