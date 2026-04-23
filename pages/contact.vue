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

const title = 'Contact GiftScored';
const description =
  'Editorial, press, and privacy contacts for GiftScored. Corrections, pitches, and data-rights requests.';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: SITE.url + '/contact/' },
  ],
  link: [{ rel: 'canonical', href: SITE.url + '/contact/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([{ name: 'Contact', path: '/contact/' }]),
    articleNode({
      headline: title,
      description,
      url: '/contact/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Contact',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>Contact.</h1>
    <p class="byline">Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      Three inboxes, one human reading them. Please use the address
      that matches the subject; it routes faster and is more likely to
      get a prompt reply.
    </p>

    <h2>Editorial &mdash; corrections, score questions, reader feedback</h2>
    <p>
      <a href="mailto:editor@giftscored.com">editor@giftscored.com</a>
    </p>
    <p>
      Use this for factual corrections (a price that has moved, a
      return policy that has changed, a spec that is wrong), questions
      about how a specific score was calculated, or general editorial
      feedback on the rubric. Material corrections are handled within
      48 hours of notification.
    </p>

    <h2>Press &mdash; interviews, methodology questions, reprints</h2>
    <p>
      <a href="mailto:press@giftscored.com">press@giftscored.com</a>
    </p>
    <p>
      For journalists, researchers, or publishers wanting to cite or
      discuss the GiftScored methodology, interview the Methodology
      Editor (Robin Lake, disclosed pen name), or request permission
      to reprint excerpts. Please include your outlet, deadline, and
      the specific methodology question you are reporting on.
    </p>

    <h2>Privacy &mdash; data access and deletion requests</h2>
    <p>
      <a href="mailto:privacy@giftscored.com">privacy@giftscored.com</a>
    </p>
    <p>
      For GDPR, CCPA, and other data-rights requests. We honour
      verified access and deletion requests within the statutory
      window. See the <NuxtLink to="/privacy/">privacy policy</NuxtLink>
      for the full list of data we collect and how to exercise your
      rights.
    </p>

    <h2>Pitching a methodology feature</h2>
    <p>
      GiftScored publishes original methodology &mdash; we do not
      publish contributed gift guides, sponsored posts, or
      link-placement requests. If you have a methodological angle that
      fits our rubric framework (for example, a refinement to a
      weighting scheme, a category we have not scored, or a new
      public signal worth incorporating into the rubric), a short
      email to <a href="mailto:editor@giftscored.com">editor@giftscored.com</a>
      is the best way in.
    </p>
    <p>
      Outreach asking for &ldquo;a link from your site&rdquo; or
      &ldquo;a quick guest post&rdquo; will not get a reply.
    </p>

    <h2>Mailing address</h2>
    <p>
      Ramban Group operates GiftScored pre-incorporation. Once the
      LLC is formed, a full postal address will appear here for legal
      correspondence. Until then, email is the official channel for
      everything.
    </p>
  </article>
</template>
