<!--
  BudgetTierFilter.vue — giftscored (Nuxt 3) implementation of the
  behavior contract at boss-brief/component-specs/BudgetTierFilter.md.

  3 chips (budget / sweet / stretch) + custom-range disclosure.
  Emits `change` with {min, max, tier}; parent re-filters product list.
-->
<script setup lang="ts">
import type { GsSweetSpotRow } from '~/composables/useSweetSpot';

type TierLabel = 'budget' | 'sweet' | 'stretch' | 'custom';

interface PriceRange {
  min: number;
  max: number;
}

interface Props {
  row: GsSweetSpotRow;
  currentRange: PriceRange;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'change', range: PriceRange & { tier: TierLabel }): void;
}>();

const tiers = computed(() => [
  {
    label: 'budget' as const,
    displayLabel: 'Budget',
    min: props.row.budget_tier_min_usd,
    max: props.row.sweet_spot_low_usd,
  },
  {
    label: 'sweet' as const,
    displayLabel: 'Sweet',
    min: props.row.sweet_spot_low_usd,
    max: props.row.sweet_spot_high_usd,
  },
  {
    label: 'stretch' as const,
    displayLabel: 'Stretch',
    min: props.row.sweet_spot_high_usd,
    max: props.row.stretch_tier_max_usd,
  },
]);

const currentTier = computed<TierLabel>(() => {
  for (const t of tiers.value) {
    if (t.min === props.currentRange.min && t.max === props.currentRange.max) return t.label;
  }
  return 'custom';
});

const customMin = ref<number>(props.currentRange.min);
const customMax = ref<number>(props.currentRange.max);

function push(range: PriceRange & { tier: TierLabel }) {
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set('price', `${range.min}-${range.max}`);
    window.history.pushState({ price: range.tier }, '', url.toString());
  }
  emit('change', range);
}

function activate(tier: (typeof tiers.value)[number]) {
  if (tier.label === currentTier.value) return;
  push({ min: tier.min, max: tier.max, tier: tier.label });
}

function applyCustom(event: Event) {
  event.preventDefault();
  let min = Number(customMin.value);
  let max = Number(customMax.value);
  if (Number.isNaN(min) || Number.isNaN(max)) return;
  if (min > max) [min, max] = [max, min];
  min = Math.max(5, min);
  max = Math.min(500, max);
  push({ min, max, tier: 'custom' });
}
</script>

<template>
  <div class="budget-filter" role="group" aria-label="Change price range">
    <button
      v-for="t in tiers"
      :key="t.label"
      type="button"
      :class="['chip', { 'is-active': currentTier === t.label }]"
      :aria-pressed="currentTier === t.label"
      @click="activate(t)"
    >
      <span class="chip__label">{{ t.displayLabel }}</span>
      <span class="chip__range">${{ t.min }}–${{ t.max }}</span>
      <span v-if="t.label === 'sweet'" class="chip__recommended" aria-label="recommended tier">
        ✓ recommended
      </span>
    </button>

    <details class="custom" :open="currentTier === 'custom'">
      <summary :class="['chip', { 'is-active': currentTier === 'custom' }]">Custom</summary>
      <form class="custom__form" @submit="applyCustom">
        <label>
          <span>Min</span>
          <span class="currency">$</span>
          <input
            type="number"
            :min="5"
            :max="500"
            v-model.number="customMin"
            aria-label="Minimum price in US dollars"
            inputmode="numeric"
          />
        </label>
        <label>
          <span>Max</span>
          <span class="currency">$</span>
          <input
            type="number"
            :min="5"
            :max="500"
            v-model.number="customMax"
            aria-label="Maximum price in US dollars"
            inputmode="numeric"
          />
        </label>
        <button type="submit">Apply</button>
      </form>
    </details>
  </div>
</template>
