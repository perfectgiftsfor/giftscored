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

const title = 'How the score is calculated';
const description =
  'The four weighted rubric dimensions, the failure modes each is designed to catch, and the sanity-check passes a Gift Score has to survive before publication.';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: SITE.url + '/methodology/how-we-score/' },
    { property: 'og:type', content: 'article' },
  ],
  link: [{ rel: 'canonical', href: SITE.url + '/methodology/how-we-score/' }],
});

useJsonLd(
  graph(
    organizationNode(),
    websiteNode(),
    editorPersonNode(),
    breadcrumbListNode([
      { name: 'Methodology', path: '/methodology/' },
      { name: 'How we score', path: '/methodology/how-we-score/' },
    ]),
    articleNode({
      headline: title,
      description,
      url: '/methodology/how-we-score/',
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      articleSection: 'Methodology &middot; How we score',
    }),
  ),
);
</script>

<template>
  <article>
    <h1>How the score is calculated.</h1>
    <p class="byline">By Robin Lake, Methodology Editor &middot; Updated {{ DATE_MODIFIED }}</p>

    <p class="bottom-line">
      The Gift Score is a weighted composite of four dimensions on a
      0&ndash;100 scale. Each dimension catches a specific failure
      mode. No single dimension can carry the score; no dimension is
      zero-weighted. Weights were chosen deliberately and are published
      so a reader can substitute their own.
    </p>

    <h2>The rubric, with rationale</h2>
    <table class="rubric-table">
      <thead>
        <tr>
          <th>Dimension</th>
          <th>Weight</th>
          <th>Failure mode caught</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Brand &amp; review density</td>
          <td>30%</td>
          <td>Novelty-biased ranking. A brand with a ten-year record beats a brand with ninety days of high-volume reviews.</td>
        </tr>
        <tr>
          <td>Category fit</td>
          <td>30%</td>
          <td>Wrong-category gifts that score well on the product alone. A perfectly-made item that is the wrong shape for the moment should not win.</td>
        </tr>
        <tr>
          <td>Price-to-value</td>
          <td>25%</td>
          <td>Overspend as apology. The rubric flags gifts whose price exceeds the calibrated spend band for the relationship and occasion.</td>
        </tr>
        <tr>
          <td>Giftability</td>
          <td>15%</td>
          <td>Objects the giver loves that the recipient cannot return or exchange without the giver&rsquo;s involvement.</td>
        </tr>
      </tbody>
    </table>

    <h2>Brand &amp; review density (30%)</h2>
    <p>
      Scored on a 0&ndash;30 scale from the candidate-bench research.
      A product from a brand recommended by three or more
      long-track-record editorial publications across two or more
      refresh cycles caps this dimension. A product with strong
      single-retailer reviews but no editorial-press record tops out
      around 20 of 30. A product with neither caps at about 10 of 30.
      The point of this dimension is to dampen novelty bias.
    </p>

    <h2>Category fit (30%)</h2>
    <p>
      Scored on a 0&ndash;30 scale against the specific moment the
      page is for. Category fit is the highest-variance dimension
      and the one where the rubric most strongly corrects a
      product-only view. A cast-iron Dutch oven is an excellent
      product and a poor gift for someone who already owns two; the
      rubric reflects that on a moment-specific page and not on a
      generic product-category page.
    </p>

    <h2>Price-to-value (25%)</h2>
    <p>
      Scored on a 0&ndash;25 scale. Price-to-value is not &ldquo;cheapest
      wins.&rdquo; It is &ldquo;does the price make sense for the
      moment, and does the product carry its price honestly?&rdquo; A
      $300 gift that overspends a $100 moment is penalised; a $30 gift
      that underspends a $150 moment is also penalised. The
      calibrated spend band for each moment is documented on the moment
      page.
    </p>

    <h2>Giftability (15%)</h2>
    <p>
      Scored on a 0&ndash;15 scale. This dimension captures whether
      the recipient can live with the gift after it arrives:
      return window length, exchange policy, whether the recipient
      needs the purchaser&rsquo;s receipt, whether packaging is
      presentable, and whether the arrival experience signals care.
      A product that wins the first three dimensions and loses
      giftability is not a winning gift.
    </p>

    <h2>How we turn sub-scores into the Gift Score</h2>
    <p>
      The composite is the plain sum of the four sub-scores. The
      sub-scales were chosen so they add to a 0&ndash;100 range
      without rescaling:
    </p>
    <p>
      <strong>Gift Score = Brand &amp; review density (0&ndash;30) + Category fit (0&ndash;30) + Price-to-value (0&ndash;25) + Giftability (0&ndash;15)</strong>
    </p>
    <p>
      Because 30 + 30 + 25 + 15 = 100, the composite is already on a
      0&ndash;100 scale and needs no further normalisation. The weights
      are embedded in the sub-scale ceilings rather than applied as a
      separate multiplication; this keeps the arithmetic legible for a
      reader auditing a score on the page.
    </p>

    <h3>Rounding</h3>
    <p>
      Sub-scores are scored to the nearest whole number; the composite
      is the whole-number sum. In prose we sometimes write
      &ldquo;high-80s&rdquo; or &ldquo;mid-90s&rdquo; rather than an
      exact figure when the last digit would imply a precision the
      public inputs cannot support. A score reported as exactly 87 on a
      page has been calculated as exactly 87; a score described as
      &ldquo;high-80s&rdquo; has been calculated and then deliberately
      softened because the inputs did not justify a single-point claim.
    </p>

    <h3>A worked example</h3>
    <p>
      Consider a premium Breville espresso grinder scored as a gift for
      a serious home-coffee hobbyist with a four-figure espresso setup
      already in place (see the rubric applied to five candidates on a
      single moment in the <NuxtLink to="/methodology/worked-example-anniversary/">anniversary worked example</NuxtLink>):
    </p>
    <ul>
      <li>Brand &amp; review density: <strong>27 / 30</strong> (long editorial track record across multiple publications and refresh cycles, consistent cross-retailer consumer reviews).</li>
      <li>Category fit: <strong>22 / 30</strong> (the recipient&rsquo;s workflow strongly favours a dedicated grinder at this level; small deduction for the risk that the exact model overlaps an item the recipient already owns).</li>
      <li>Price-to-value: <strong>18 / 25</strong> (price is calibrated for a significant-milestone moment and the unit carries its price, with a modest deduction for the spend band sitting near the top of the occasion&rsquo;s envelope).</li>
      <li>Giftability: <strong>11 / 15</strong> (presentable packaging and generous return window; small deduction because the unit is bulky enough that a size-unseen return requires coordination).</li>
    </ul>
    <p>
      <strong>27 + 22 + 18 + 11 = 78.</strong> The page reports a Gift
      Score of 78, with those four sub-scores printed alongside so the
      reader can see which dimension carried the composite and which
      dimension dragged it.
    </p>

    <h2>Sanity-check passes</h2>
    <p>
      Before a Gift Score is published, it survives four checks:
    </p>
    <ol>
      <li><strong>The blind-weights pass.</strong> The Methodology Editor recomputes the composite with the weights concealed from the inputs. If the ranking order changes materially, one of the inputs is doing too much work and the rubric notes the tension on the page.</li>
      <li><strong>The recipient pass.</strong> Would a thoughtful giver, reading this score alone, reach a reasonable gift decision? If the answer is no, the page gets more context rather than a different score.</li>
      <li><strong>The return-policy pass.</strong> Every score assumes the return policy stated at scoring time. If the policy has changed by publication, the score is re-run.</li>
      <li><strong>The &ldquo;things the rubric cannot know&rdquo; caveat.</strong> Every moment page carries this caveat out loud. A rubric that does not name its blind spots is a rubric readers should trust less.</li>
    </ol>

    <h2>Substituting your own weights</h2>
    <p>
      A reader who weights giftability above 15% (common for
      long-distance givers) or drops price-to-value below 25% (common
      for milestone occasions) should substitute their own weights.
      The rubric is a default, not a verdict. That is the entire point
      of publishing it.
    </p>

    <h2>Related methodology pages</h2>
    <ul>
      <li>
        <NuxtLink to="/methodology/worked-example-anniversary/">Worked example: anniversary gifts</NuxtLink>
        &mdash; the rubric applied to five candidate anniversary gifts with the arithmetic shown per dimension.
      </li>
      <li>
        <NuxtLink to="/methodology/worked-example-graduation/">Worked example: graduation gifts</NuxtLink>
        &mdash; a different moment where the category-fit dimension does the heaviest sorting.
      </li>
      <li>
        <NuxtLink to="/methodology/quarterly-refresh/">Quarterly rubric refresh</NuxtLink>
        &mdash; the editorial discipline that keeps the rubric from fossilising.
      </li>
    </ul>

    <hr />
    <p>
      <NuxtLink to="/methodology/how-we-pick/">&larr; How we pick</NuxtLink>
      &middot;
      <NuxtLink to="/methodology/quarterly-refresh/">Quarterly refresh &rarr;</NuxtLink>
    </p>
  </article>
</template>
