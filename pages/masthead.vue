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

const title = 'Masthead';
const description =
  'The editorial team behind GiftScored: Robin Lake, Methodology Editor; beat coverage; editorial philosophy; pitch and corrections channels; and the Ramban Group disclosure.';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: SITE.url + '/masthead/' },
    { property: 'og:type', content: 'article' },
  ],
  link: [{ rel: 'canonical', href: SITE.url + '/masthead/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([{ name: 'Masthead', path: '/masthead/' }]),
    articleNode({
      headline: title,
      description,
      url: '/masthead/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Masthead',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>Masthead.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      One editorial voice, one pen name, one rubric. A publication
      that scores things owes the reader a clear accounting of who
      is scoring, what they write about, and what they deliberately
      do not write. Everything below is the accounting.
    </p>

    <h2>Editorial team</h2>
    <p>
      <strong>Robin Lake</strong>, Methodology Editor. Robin Lake
      is a disclosed editorial pen name used by a single operator
      at <strong>Ramban Group</strong>, the parent company behind
      GiftScored. The pen-name posture is standard for multi-brand
      editorial publishing during pre-incorporation: it gives the
      masthead a stable byline while the legal entity is being
      formed, and it signals that one human is accountable for
      every rubric decision rather than a rotating cast of anonymous
      contractors. The pen name retires when contributor editors
      are hired under their legal names. Full disclosure on
      <NuxtLink to="/about/#robin-lake">/about/</NuxtLink>.
    </p>

    <h2>Beats</h2>
    <p>What Robin writes about:</p>
    <ul>
      <li>The Gift Score rubric &mdash; the four weighted dimensions and the failure modes each is designed to catch.</li>
      <li>Worked examples applying the rubric to specific gift moments, with every sub-score and every composite done in the open.</li>
      <li>Quarterly rubric refreshes &mdash; which weights moved, why they moved, and what the refresh cycle caught.</li>
      <li>Methodology transparency &mdash; the sanity-check passes, the caveats, and the commitments that keep commission rate out of the composite.</li>
    </ul>
    <p>What Robin does <strong>not</strong> write:</p>
    <ul>
      <li>Single-product reviews. The rubric is the product, not a verdict on one SKU.</li>
      <li>Affiliate-ranked listicles. Commission is excluded from the rubric by construction and from ordering by policy.</li>
      <li>&ldquo;Top N&rdquo; posts without disclosed weights. If a page ranks things, the weights that produced the ranking are on the same page.</li>
      <li>Hand-tested-product claims. Inputs are editorial reviews from long-track-record publications, cross-retailer consumer-review profiles, manufacturer specs, and return-policy documents &mdash; not a workshop bench.</li>
    </ul>

    <h2>Editorial philosophy</h2>
    <p>
      The posture is <em>published rubric</em>. A gift score without
      a disclosed rubric is an opinion wearing a lab coat &mdash; the
      number looks precise, its source is invisible, and the reader
      is expected to defer to the decimal place. GiftScored inverts
      that: the rubric exists so a reader can disagree with any line
      and still use the framework.
    </p>
    <p>
      The weights on
      <NuxtLink to="/methodology/how-we-score/">the rubric page</NuxtLink>
      were chosen deliberately &mdash; brand and review density at
      30%, category fit at 30%, price-to-value at 25%, giftability
      at 15%. The math is legible: sub-scale ceilings sum to 100, so
      the composite is the plain sum of four sub-scores, and every
      worked example shows the arithmetic. A reader who weights
      giftability heavier or price-to-value lower can substitute
      their own ceilings and re-run the numbers. That substitution
      is the point.
    </p>
    <p>
      Methodology is the product. The specific SKUs referenced on
      moment pages will age out of stock; the rubric that placed
      them there is designed to outlast them.
    </p>

    <h2>How to pitch the editor</h2>
    <p>
      Pitches to
      <a href="mailto:editor@giftscored.com">editor@giftscored.com</a>.
      Especially welcome:
    </p>
    <ul>
      <li><strong>Applied-rubric requests.</strong> &ldquo;Score these five candidates for a specific moment&rdquo; &mdash; a named occasion, a relationship, a spend band, a shortlist. Worked examples are where the rubric earns its keep.</li>
      <li><strong>Rubric critiques.</strong> A specific weight that is miscalibrated, with the reasoning for why a different ceiling would do better work. A well-argued critique can move a weight at the next quarterly refresh.</li>
      <li><strong>Methodology extensions.</strong> New sub-scales worth considering &mdash; an additional dimension, a decomposition of an existing one, a failure mode not caught by the current four.</li>
    </ul>

    <h2>Corrections</h2>
    <p>
      Factual errors, prices that have moved, return policies that
      have changed, scores that do not hold up:
      <a href="mailto:editor@giftscored.com">editor@giftscored.com</a>.
      Material corrections land within <strong>48 hours</strong> of
      notification and are noted inline on the affected page with
      the date of the fix. Score-challenge submissions &mdash; a
      reasoned case that a specific composite is wrong &mdash; are
      welcome on the same address under the same SLA.
    </p>

    <h2>Ramban Group disclosure</h2>
    <p>
      GiftScored is an editorial brand of
      <strong>Ramban Group</strong>, which operates a portfolio of
      independent editorial publications across distinct domains,
      voices, and rubrics. Standard multi-brand disclosures apply:
      each property runs on its own methodology, each byline is
      disclosed on its own masthead, and the parent-company name is
      printed here rather than hidden. Full ownership and
      commercial disclosures on
      <NuxtLink to="/about/">/about/</NuxtLink>; editorial standards
      and affiliate posture on
      <NuxtLink to="/editorial/">/editorial/</NuxtLink>.
    </p>

    <hr />
    <p>
      <NuxtLink to="/about/">&larr; About GiftScored</NuxtLink>
      &middot;
      <NuxtLink to="/editorial/">Editorial standards &rarr;</NuxtLink>
    </p>
  </article>
</template>
