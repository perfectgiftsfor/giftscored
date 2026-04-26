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

const DATE_PUBLISHED = '2026-04-26';
const DATE_MODIFIED = '2026-04-26';

const title = 'Open dataset — gift spend bands by relationship and occasion (2026)';
const description =
  'A 50-row reference of editorial spend bands across 11 recipient relationships and 30+ occasions, sourced from spend-band recommendations published across the GiftScored network. Released CC-BY 4.0 with citation format. Direct download below.';

const CSV_URL = SITE.url + '/data/gift-spend-bands-2026.csv';
const PAGE_URL = SITE.url + '/methodology/dataset/';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: PAGE_URL },
    { property: 'og:type', content: 'article' },
  ],
  link: [{ rel: 'canonical', href: PAGE_URL }],
});

// Schema.org Dataset — what AI engines (ChatGPT, Perplexity, Claude) look for
// when answering empirical "how much do people spend" queries. Without a
// formal Dataset node, the CSV is just a download link; with it, the page
// becomes a primary source citation.
const datasetNode = {
  '@type': 'Dataset',
  '@id': PAGE_URL + '#dataset',
  name: 'Gift spend bands by relationship and occasion (2026)',
  alternateName: 'GiftScored 2026 Spend-Band Reference',
  description:
    'A 50-row reference table mapping recipient relationship × occasion × context to a four-point spend band (floor, anchor low, anchor high, ceiling) in US dollars. Each row cites a published source article and a confidence rating. Synthesized from editorial spend-band recommendations across the GiftScored network of gift-recommendation properties; not survey microdata.',
  url: PAGE_URL,
  sameAs: PAGE_URL,
  keywords: [
    'gift spending',
    'birthday gift budget',
    'anniversary gift spend',
    'relationship gift norms',
    'gift price bands',
    'editorial spend recommendations',
  ],
  creator: { '@id': SITE.url + '/#publisher' },
  publisher: { '@id': SITE.url + '/#publisher' },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  license: 'https://creativecommons.org/licenses/by/4.0/',
  temporalCoverage: '2026',
  spatialCoverage: { '@type': 'Place', name: 'United States' },
  distribution: [
    {
      '@type': 'DataDownload',
      encodingFormat: 'text/csv',
      contentUrl: CSV_URL,
      name: 'gift-spend-bands-2026.csv',
    },
  ],
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'recipient', description: 'Recipient relationship category (best_friend, dad, mom, partner, coworker, etc.)' },
    { '@type': 'PropertyValue', name: 'occasion', description: 'Gift occasion (birthday, anniversary_year_N, birthday_milestone_Nth)' },
    { '@type': 'PropertyValue', name: 'context', description: 'Sub-context within the relationship and occasion (e.g., adult_child_to_parent, milestone_year, newer_friend)' },
    { '@type': 'PropertyValue', name: 'floor_usd', description: 'Lower bound of the defensible spend range, in USD' },
    { '@type': 'PropertyValue', name: 'anchor_low_usd', description: 'Lower bound of the editorially recommended anchor band' },
    { '@type': 'PropertyValue', name: 'anchor_high_usd', description: 'Upper bound of the editorially recommended anchor band' },
    { '@type': 'PropertyValue', name: 'ceiling_usd', description: 'Upper bound of the defensible spend range without crossing into a different gift register' },
    { '@type': 'PropertyValue', name: 'confidence', description: 'high (multiple cross-network articles agree) | medium (single-article source) | low (editorial extrapolation)' },
    { '@type': 'PropertyValue', name: 'source_url', description: 'URL of the article in the network where the spend band is documented' },
    { '@type': 'PropertyValue', name: 'last_reviewed', description: 'Date the row was last reviewed for accuracy (ISO 8601)' },
  ],
  citation:
    'GiftScored. (2026). Gift spend bands by relationship and occasion (2026). https://giftscored.com/methodology/dataset/',
};

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([
      { name: 'Methodology', path: '/methodology/' },
      { name: 'Open dataset', path: '/methodology/dataset/' },
    ]),
    articleNode({
      headline: title,
      description,
      url: '/methodology/dataset/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Methodology · Open dataset',
    }),
    datasetNode,
  ),
);
</script>

<template>
  <article>
    <h1>Open dataset — gift spend bands, 2026.</h1>
    <p class="byline">
      By <a href="/masthead/#robin-lake">Robin Lake</a>, Methodology Editor
      &middot; Updated {{ DATE_MODIFIED }}
    </p>

    <p class="bottom-line">
      A 50-row reference table mapping recipient relationship and occasion to
      a four-point spend band, drawn from editorial spend-band recommendations
      published across the GiftScored network. Released
      <strong>CC-BY 4.0</strong>: free to reuse with attribution. Citation
      format below.
    </p>

    <div class="download-card">
      <h2 style="margin-top:0">Download</h2>
      <p>
        <a :href="CSV_URL" download>
          <strong>gift-spend-bands-2026.csv</strong>
        </a>
        &middot; 50 rows &middot; UTF-8 &middot; ~5 KB
      </p>
      <p class="small">
        License: <a href="https://creativecommons.org/licenses/by/4.0/" rel="external nofollow">Creative Commons Attribution 4.0 International</a>.
        Reuse for any purpose with attribution back to this page.
      </p>
    </div>

    <h2>What is in the dataset</h2>
    <p>
      Ten columns. Each row covers one
      (<code>recipient</code> &times; <code>occasion</code> &times; <code>context</code>) tuple
      and reports a four-point spend band: the lower defensible
      bound, the recommended anchor range (low and high), and the upper
      defensible bound — all in 2026 US dollars. Each row also carries a
      confidence rating and a URL pointing to the published article in the
      network where the band is documented.
    </p>

    <table class="schema">
      <thead>
        <tr>
          <th>Column</th>
          <th>Type</th>
          <th>What it captures</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>recipient</code></td>
          <td>string</td>
          <td>Relationship category — best_friend, dad, mom, partner, coworker, manager, sibling, grandparent, in_law, friend_general, child_of_friend, own_child</td>
        </tr>
        <tr>
          <td><code>occasion</code></td>
          <td>string</td>
          <td>Gift occasion — birthday, anniversary_year_<em>N</em>, birthday_milestone_<em>N</em>th</td>
        </tr>
        <tr>
          <td><code>context</code></td>
          <td>string</td>
          <td>Sub-context — e.g., adult_child_to_parent, milestone_year, newer_friend_under_5y, pooled_per_person</td>
        </tr>
        <tr>
          <td><code>floor_usd</code></td>
          <td>integer</td>
          <td>Lower bound of the defensible range. Going below tends to read as effort-skipping.</td>
        </tr>
        <tr>
          <td><code>anchor_low_usd</code></td>
          <td>integer</td>
          <td>Lower bound of the recommended anchor — where most thoughtful gifts in this register sit.</td>
        </tr>
        <tr>
          <td><code>anchor_high_usd</code></td>
          <td>integer</td>
          <td>Upper bound of the recommended anchor — going past starts to feel performative for the relationship.</td>
        </tr>
        <tr>
          <td><code>ceiling_usd</code></td>
          <td>integer</td>
          <td>Upper bound of the defensible range without crossing into a fundamentally different gift register (e.g., milestone, gesture-of-major-event).</td>
        </tr>
        <tr>
          <td><code>confidence</code></td>
          <td>enum</td>
          <td>high — multiple cross-network articles agree on the band. medium — single-article source. low — editorial extrapolation.</td>
        </tr>
        <tr>
          <td><code>source_url</code></td>
          <td>URL</td>
          <td>The article in the network where the spend band is documented.</td>
        </tr>
        <tr>
          <td><code>last_reviewed</code></td>
          <td>ISO date</td>
          <td>Date the row was last reviewed for accuracy.</td>
        </tr>
      </tbody>
    </table>

    <h2>How the bands were derived</h2>
    <p>
      This is editorial reference data, not survey microdata. We do not run a
      consumer panel; we synthesize spend-band recommendations from three
      sources, in order of weight:
    </p>
    <ol>
      <li>
        <strong>Long-track-record gift-coverage editorial</strong> &mdash;
        publications with multi-year records (Wirecutter gift guides,
        Bon App&eacute;tit gift coverage, NYT Wirecutter holiday tracking,
        trade press for category-specific coverage like jewelry trade
        publications for milestone anniversaries).
      </li>
      <li>
        <strong>Aggregated retailer price points</strong> &mdash; what
        recommended products in each category actually cost at major
        retailers, sampled across multiple price tiers.
      </li>
      <li>
        <strong>Editorial calibration across the GiftScored network</strong>
        &mdash; the band that the network's articles converge on for a given
        relationship/occasion. Each cited
        <code>source_url</code> links to where the band appears in our
        published content.
      </li>
    </ol>

    <p>
      We deliberately do not invent precision the data does not support. The
      bands are integers, not three-decimal-place percentile estimates. Where
      we have only one article's coverage, the row is marked
      <code>confidence: medium</code>. Where we have published the band but
      not run multi-source convergence on it, it is marked
      <code>confidence: low</code>. None of the rows are presented as
      survey-derived percentiles, because that is not how the data was built.
    </p>

    <h2>Limits — what the dataset cannot do</h2>
    <ul>
      <li>
        <strong>Not survey-derived.</strong> If you need actual consumer
        spend percentiles for an academic paper, the National Retail
        Federation's annual gift survey or BLS Consumer Expenditure Survey is
        the right primary source. This dataset is a <em>recommendation</em>
        reference, not a behavioral measurement.
      </li>
      <li>
        <strong>US-anchored.</strong> All figures are in 2026 USD with US
        retail availability assumed. Spend bands in other markets shift
        significantly with local cost of living and gift-norm differences.
      </li>
      <li>
        <strong>Editorial bias.</strong> The bands reflect what GiftScored
        and the sibling network publications recommend. A reader who
        believes coworker spend should top out at $10 will find our band
        ($15&ndash;$30) too high; we publish the band so disagreement can be
        explicit rather than inherited.
      </li>
      <li>
        <strong>Static, not real-time.</strong> Refreshed quarterly. The
        2026-04 cut is what is currently published; superseded versions are
        archived and linked from the changelog.
      </li>
    </ul>

    <h2>License &mdash; CC-BY 4.0</h2>
    <p>
      Released under the
      <a href="https://creativecommons.org/licenses/by/4.0/" rel="external nofollow">
        Creative Commons Attribution 4.0 International
      </a>
      license. You may copy, modify, redistribute, and build on the data for
      any purpose, including commercial, with one condition: attribute back
      to this page so readers can find the source of the bands and follow
      the citation chain to the underlying articles.
    </p>

    <h2>Citation format</h2>
    <p>
      For academic, journalistic, or trade-publication use:
    </p>
    <pre class="cite">GiftScored. (2026). Gift spend bands by relationship and
occasion (2026). https://giftscored.com/methodology/dataset/</pre>
    <p>For a single row, append the row's
    <code>source_url</code> as a secondary citation so readers can trace
    the band to where the editorial recommendation originally ran.</p>

    <h2>Changelog</h2>
    <ul>
      <li><strong>2026-04-26</strong> &mdash; Initial publication. 50 rows
        across 11 recipient categories and 30+ occasion contexts.</li>
    </ul>

    <h2>Contact for corrections</h2>
    <p>
      Found a band that seems off? Email
      <a href="mailto:editor@giftscored.com">editor@giftscored.com</a> with
      the row, the band you would propose, and the source you would cite.
      Corrections are logged in the next quarterly refresh.
    </p>
  </article>
</template>

<style scoped>
.download-card {
  border: 1px solid #d8c899;
  background: #fcf6e7;
  border-radius: 6px;
  padding: 1.1em 1.4em;
  margin: 1.4em 0;
}
.download-card .small {
  font-size: 0.9em;
  color: #555;
}
table.schema {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0 1.4em;
  font-size: 0.94em;
}
table.schema th,
table.schema td {
  border: 1px solid #e1d8c0;
  padding: 0.55em 0.7em;
  text-align: left;
  vertical-align: top;
}
table.schema th {
  background: #f6f1e2;
  font-weight: 600;
}
table.schema code {
  font-size: 0.92em;
}
pre.cite {
  background: #faf6ec;
  border-left: 3px solid #b58a3d;
  padding: 0.7em 1em;
  font-size: 0.94em;
  white-space: pre-wrap;
}
</style>
