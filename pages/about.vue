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

const title = 'About GiftScored';
const description =
  'GiftScored is an editorial publication by Ramban Group. Full disclosure of ownership, editorial pen name, affiliate relationships, and how the methodology is maintained.';

useHead({
  title,
  meta: [{ name: 'description', content: description }],
  link: [{ rel: 'canonical', href: SITE.url + '/about/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([{ name: 'About', path: '/about/' }]),
    articleNode({
      headline: title,
      description,
      url: '/about/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'About',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>About GiftScored.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      GiftScored is a methodology-first editorial publication owned
      and operated by <strong>Ramban Group</strong>. One editorial
      voice, one pen name, full disclosure. The value of a score is
      exactly the transparency of its method.
    </p>

    <h2>The one-line version</h2>
    <p>
      GiftScored scores gifts against a public rubric. We publish the
      weights, the inputs, the refresh cycle, and the explicit limits
      of what a rubric can know. A reader who disagrees with any
      weight can substitute their own and still use the framework.
    </p>

    <h2>Ownership</h2>
    <p>
      GiftScored is an editorial brand of <strong>Ramban Group</strong>.
      Ramban Group operates a portfolio of independent editorial
      publications. Each property has its own domain, its own editorial
      voice, its own design, its own rubric or framework, and its own
      team. The parent company is named here because disclosed
      ownership is standard practice; anything else would be hiding.
    </p>

    <h2 id="robin-lake">Who writes the methodology</h2>
    <p>
      <strong>Robin Lake</strong>, Methodology Editor. Robin is a
      disclosed editorial pen name used by a single operator at
      Ramban Group during pre-incorporation. The name is a handle for
      editorial consistency; behind it is a real human making real
      decisions about rubric weights, candidate benches, and refresh
      priorities. The pen name will retire when we hire contributor
      editors under their legal names.
    </p>
    <p>
      This is standard practice among editorial publications and is
      disclosed here so readers can calibrate how they read the byline.
      Every editorial and methodology standard on this site applies
      regardless of who is writing under the pen name on any given
      day.
    </p>

    <h2>How we make money</h2>
    <p>
      Affiliate commission. When a reader clicks an outbound retailer
      link on this site and makes a purchase, GiftScored receives a
      small percentage of the sale at no extra cost to the reader. We
      participate in the Amazon Services LLC Associates Program (the
      required verbatim statement: &ldquo;As an Amazon Associate we
      earn from qualifying purchases.&rdquo;) and a handful of other
      major affiliate programs where relevant.
    </p>
    <p>
      <strong>Commission rate is never an input to the Gift Score.</strong>
      The Methodology Editor is not shown commission data when scoring,
      and the rubric explicitly excludes affiliate economics as a
      dimension. This is the single most important commitment on the
      site and the one most easily audited: read the rubric on
      <NuxtLink to="/methodology/how-we-score/">/methodology/how-we-score/</NuxtLink>
      and see that commission is not a variable.
    </p>

    <h2>What GiftScored is &mdash; and isn&rsquo;t</h2>
    <p>
      <strong>GiftScored is methodology-first editorial.</strong>
      The product of this site is the rubric &mdash; the framework
      you can apply whether or not you use our specific scores. Where
      we reference specific products, they are benched from the
      candidate-selection pass documented on
      <NuxtLink to="/methodology/how-we-pick/">/methodology/how-we-pick/</NuxtLink>.
      We do not claim to hand-test products we score. Our inputs are
      editorial reviews from long-track-record publications, aggregated
      consumer-review signals across retailers, manufacturer
      specifications, and return-policy documents.
    </p>
    <p>We do <strong>not</strong>:</p>
    <ul>
      <li>Accept sponsored posts or paid reviews.</li>
      <li>Accept vendor freebies disguised as tested products.</li>
      <li>Publish AI-generated content without editorial review.</li>
      <li>Run &ldquo;top 10&rdquo; listicles ranked by affiliate commission.</li>
      <li>Sell your email address or personal data. See the <NuxtLink to="/privacy/">privacy policy</NuxtLink>.</li>
    </ul>

    <h2>Corrections</h2>
    <p>
      Spot a factual error, a price that has moved, a return policy
      that has changed, or a score that does not hold up? Tell us at
      <a href="mailto:editor@giftscored.com">editor@giftscored.com</a>.
      Material corrections land within 48 hours of notification and
      are noted inline on the affected page with the date of the fix.
    </p>

    <h2>Legal structure</h2>
    <p>
      Ramban Group operates this publication pre-incorporation of a
      formal LLC. Once the LLC is formed, this page will update with
      the legal name, registered-agent address, and EIN. Until then,
      the sole operator is the data controller of record. Contact
      information is on <NuxtLink to="/contact/">/contact/</NuxtLink>.
    </p>

    <hr />
    <p>
      <NuxtLink to="/editorial/">Read the editorial standards &rarr;</NuxtLink>
    </p>
  </article>
</template>
