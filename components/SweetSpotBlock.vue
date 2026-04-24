<!--
  SweetSpotBlock.vue — giftscored (Nuxt 3) implementation of the
  behavior contract at boss-brief/component-specs/SweetSpotBlock.md.

  Three variants: 'full' | 'compact' | 'inline'. Pure display; the
  parent page owns the Supabase fetch and re-passes rows on toggle.
-->
<script setup lang="ts">
import type { GsSweetSpotRow } from '~/composables/useSweetSpot';

interface Props {
  row: GsSweetSpotRow;
  showJustification?: boolean;
  variant?: 'full' | 'compact' | 'inline';
}

const props = withDefaults(defineProps<Props>(), {
  showJustification: true,
  variant: 'full',
});

const anchor = computed(() => props.row.sweet_spot_anchor_usd);
const lowHigh = computed(() => `$${props.row.sweet_spot_low_usd}–$${props.row.sweet_spot_high_usd}`);
const srLowHigh = computed(() => `$${props.row.sweet_spot_low_usd} to $${props.row.sweet_spot_high_usd}`);

const lastUpdatedDisplay = computed(() =>
  new Date(props.row.last_updated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
);

const stale = computed(() => {
  const days = (Date.now() - new Date(props.row.last_updated).getTime()) / (1000 * 60 * 60 * 24);
  return days > 180;
});
</script>

<template>
  <span v-if="variant === 'inline'" class="sweet-spot-inline">
    <span :aria-label="srLowHigh">{{ lowHigh }}</span> (anchor ${{ anchor }})
  </span>

  <span v-else-if="variant === 'compact'" class="sweet-spot-compact">
    <span :aria-label="srLowHigh">{{ lowHigh }}</span>
    <span class="sep" aria-hidden="true"> · </span>
    anchor ${{ anchor }}
    <span class="sep" aria-hidden="true"> · </span>
    sweet tier
  </span>

  <section v-else class="sweet-spot" aria-label="Sweet-spot pricing for this combination">
    <h2 class="sweet-spot__heading">Sweet spot for this combination</h2>

    <p class="sweet-spot__range">
      <span :aria-label="srLowHigh">{{ lowHigh }}</span>
    </p>
    <p class="sweet-spot__anchor">anchor <strong>${{ anchor }}</strong></p>

    <dl class="sweet-spot__tiers">
      <div class="tier">
        <dt>Budget tier</dt>
        <dd>${{ row.budget_tier_min_usd }}–${{ row.sweet_spot_low_usd }}</dd>
      </div>
      <div class="tier is-current" aria-label="Current tier">
        <dt>Sweet tier</dt>
        <dd>
          ${{ row.sweet_spot_low_usd }}–${{ row.sweet_spot_high_usd }}
          <span class="you" aria-label="recommended tier">← this is you</span>
        </dd>
      </div>
      <div class="tier">
        <dt>Stretch tier</dt>
        <dd>${{ row.sweet_spot_high_usd }}–${{ row.stretch_tier_max_usd }}</dd>
      </div>
    </dl>

    <p v-if="showJustification" class="sweet-spot__why">
      <strong>Why this range:</strong> {{ row.justification_text }}
    </p>

    <p class="sweet-spot__source">
      Source: {{ row.data_source }}
      <span class="sep" aria-hidden="true"> · </span>
      Updated <time :datetime="row.last_updated">{{ lastUpdatedDisplay }}</time>
      <span v-if="stale" class="stale-flag">Refreshing this quarter</span>
    </p>
  </section>
</template>
