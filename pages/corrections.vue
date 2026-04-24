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

const title = 'Corrections log';
const description =
  'The public corrections log for GiftScored. Rubric re-tunings, score revisions, dataset updates, and material factual corrections are recorded here with dates and affected URLs.';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: SITE.url + '/corrections/' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: SITE.url + '/corrections/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([{ name: 'Corrections log', path: '/corrections/' }]),
    articleNode({
      headline: title,
      description,
      url: '/corrections/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Editorial &middot; Corrections',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>Corrections log.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      A methodology-first publication owes a larger transparency
      debt than a hand-testing publication does. If the rubric is
      the thing worth citing, every adjustment to the rubric, every
      re-tuned weight, and every revised sub-score is editorial
      information that belongs in public view. This page is that
      ledger.
    </p>

    <h2>Why this page exists</h2>
    <p>
      GiftScored does not claim to hand-test the products it scores.
      That editorial choice raises the bar on a different kind of
      discipline: the rubric, the weights, and the reasoning behind
      any score change must be auditable from outside the building.
      A corrections log maintained in the background &mdash; known
      only to the editor &mdash; would quietly undo the transparency
      the rubric is supposed to guarantee. So the log lives here,
      and every material change lands on it.
    </p>
    <p>
      Four categories of change belong on this page: rubric revisions
      (any edit to the four weighted dimensions or their weights),
      score revisions (any published Gift Score that moves for a
      reason other than the regular quarterly refresh), dataset
      updates (any change to the bench or to the public signals the
      rubric reads from), and material factual corrections on
      methodology or worked-example pages.
    </p>

    <h2>Our corrections SLA</h2>
    <p>
      Material factual errors are corrected within 48 hours of
      notification and noted inline on the affected page with the
      date of the fix. A material error is anything that would
      plausibly change a reader&rsquo;s decision: a price that has
      moved by more than 10%, a spec misstatement, a warranty or
      return-policy error, a miscalculated sub-score, or any error
      that affects the composite Gift Score.
    </p>
    <p>
      Non-material edits &mdash; a typo, a broken internal link, a
      clarified phrasing that does not change meaning &mdash; are
      fixed without a log entry. Rubric changes and score revisions
      always generate a log entry regardless of size.
    </p>

    <h2>How to submit a correction</h2>
    <p>
      Email <a href="mailto:editor@giftscored.com">editor@giftscored.com</a>
      with the URL of the affected page, the specific claim or number
      you think is wrong, and the source you&rsquo;re reading the
      correct version from. The Methodology Editor reads the inbox
      directly. Corrections from the public take the same 48-hour
      SLA as corrections caught internally.
    </p>

    <h2>Score revision log</h2>
    <p>
      No rubric revisions or score corrections to log yet. Every
      change to the Gift Score formula or any published sub-score
      will be logged here with date + URL + what changed.
    </p>

    <h2>Log</h2>
    <p>
      No entries yet. This page was published with the site launch
      and will be appended to as rubric revisions, score revisions,
      dataset updates, and material factual corrections are made.
      Each entry will record the date, the affected URL, a short
      description of what changed, and &mdash; for rubric or score
      revisions &mdash; the rubric version in effect before and
      after the change.
    </p>

    <hr />
    <p>
      <NuxtLink to="/editorial/">Editorial standards</NuxtLink>
      &middot;
      <NuxtLink to="/methodology/">Methodology hub</NuxtLink>
      &middot;
      <NuxtLink to="/methodology/quarterly-refresh/">Quarterly refresh</NuxtLink>
    </p>
  </article>
</template>
