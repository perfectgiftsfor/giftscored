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

const title = 'Why the rubric runs quarterly';
const description =
  'The quarterly refresh: what it changes, what triggers an out-of-cycle re-score, and how we version the rubric so an old score can always be audited against the rubric that produced it.';

useHead({
  title,
  meta: [{ name: 'description', content: description }],
  link: [{ rel: 'canonical', href: SITE.url + '/methodology/quarterly-refresh/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([
      { name: 'Methodology', path: '/methodology/' },
      { name: 'Quarterly refresh', path: '/methodology/quarterly-refresh/' },
    ]),
    articleNode({
      headline: title,
      description,
      url: '/methodology/quarterly-refresh/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Methodology &middot; Quarterly refresh',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>Why the rubric runs quarterly.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      Gift information ages faster than most evergreen content admits.
      Prices move, stock disappears, return policies tighten, brands
      change hands. Every Gift Score on this site carries a
      &ldquo;last refreshed&rdquo; date, and the rubric itself is
      re-run quarterly so the date means something.
    </p>

    <h2>The refresh cadence</h2>
    <p>
      Four times a year: January, April, July, October. Each refresh
      covers every scored page, not a rolling subset. This is expensive
      in editorial hours and is intentional &mdash; a partial refresh
      would make some scores reliably stale without flagging which
      ones. Uniform refresh dates mean a reader can trust that
      everything on the site was looked at in the same window.
    </p>

    <h2>What each refresh changes</h2>
    <ul>
      <li><strong>Prices.</strong> Re-verified at the primary retailer and at one alternative. Prices that have moved more than 10% trigger a price-to-value re-score.</li>
      <li><strong>Return policies.</strong> Re-checked against published retailer documents. A shortened return window can move giftability by enough to change the ranking.</li>
      <li><strong>Review profiles.</strong> Consumer-review density and consistency re-read across retailers. A divergence between retailers (four stars at one, three at another on a product that used to be consistent) triggers manual investigation.</li>
      <li><strong>Editorial references.</strong> Long-track-record publications&rsquo; latest tests re-scanned. New tests that unseat a previously-recommended product are reflected in the next-quarter score.</li>
      <li><strong>Bench membership.</strong> Candidates added, candidates removed. The bench is not static; the rubric is.</li>
    </ul>

    <h2>What does <em>not</em> change at the regular refresh</h2>
    <p>
      The weights. 30 / 30 / 25 / 15 is the default rubric and the
      weights do not drift quarter-to-quarter. If we change the
      weights, that is a rubric version change, announced explicitly on
      the methodology pages and versioned (rubric v1, rubric v2,
      etc.) so any score can be read against the rubric that
      produced it. We have not changed the weights since launch and do
      not anticipate frequent changes.
    </p>

    <h2>Out-of-cycle re-scores</h2>
    <p>
      Three triggers can force a score update between quarterly
      refreshes:
    </p>
    <ol>
      <li><strong>A stock-out or discontinuation at the primary retailer.</strong> The affected product is flagged as &ldquo;under review&rdquo; inline, with the date and reason, within 48 hours of notification.</li>
      <li><strong>A return-policy change that moves giftability by enough to change ranking.</strong> Retailers tightening a return window shortly before a major gift season is a common example; it usually warrants an immediate re-score.</li>
      <li><strong>A correction from a reader or the brand.</strong> Factual errors about a product &mdash; spec, price, country of manufacture, warranty &mdash; are fixed within 48 hours of notification and the correction is noted inline with the date of the fix.</li>
    </ol>

    <h2>How an old score is audited</h2>
    <p>
      Every Gift Score page carries: a last-refreshed date, the rubric
      version (currently v1), and the per-dimension sub-scores that
      produced the composite. If a reader wants to know why a score
      reached 82 in April and 78 in July, the sub-scores are on the
      page, the rubric is unchanged across that window, and the
      quarterly refresh notes document what moved in the inputs.
    </p>

    <h2>Why quarterly, not continuous</h2>
    <p>
      A continuously-updated score creates the illusion of live
      precision and hides the work behind a loading spinner. Quarterly
      refresh is honest about the refresh interval and makes the
      editorial review visible: a new last-refreshed date signals that
      a human re-looked at the inputs, not that an API returned a
      different price. Most gift decisions live on a monthly horizon;
      quarterly is frequent enough.
    </p>

    <hr />
    <p>
      <NuxtLink to="/methodology/how-we-score/">&larr; How we score</NuxtLink>
      &middot;
      <NuxtLink to="/methodology/">Methodology hub</NuxtLink>
    </p>
  </article>
</template>
