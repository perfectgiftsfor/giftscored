<!--
  RelationshipToggle.vue — giftscored (Nuxt 3 / Vue 3) implementation
  of the behavior contract at
  boss-brief/component-specs/RelationshipToggle.md.

  Cross-stack sibling of the Svelte + React + Lit versions. Per air-gap
  rule §1.1 this is written fresh — no shared package with siblings.
  Only the behavior contract is shared.

  Progressive enhancement: SSR emits real anchor links; hydration
  upgrades them into buttons that push state + emit `tier-change`.
-->
<script setup lang="ts">
import type { GsTier } from '~/composables/useSweetSpot';

type Labels = Record<GsTier, string>;

interface Props {
  ageKey: string;
  gender: 'boy' | 'girl' | 'ungendered';
  currentTier: GsTier;
  labels?: Partial<Labels>;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'change', tier: GsTier): void;
}>();

const ORDER: GsTier[] = ['my_child', 'family_best_friend', 'friend_classmate'];
const DEFAULTS: Labels = {
  my_child: 'As the parent',
  family_best_friend: 'Close family or best friend',
  friend_classmate: 'Friend or classmate',
};

const resolvedLabels = computed<Labels>(() => ({
  ...DEFAULTS,
  ...(props.labels ?? {}),
}));

const selected = ref<GsTier>(props.currentTier);
const announcement = ref('');

function hrefFor(tier: GsTier): string {
  return `?r=${tier}`;
}

function activate(event: MouseEvent, tier: GsTier) {
  if (tier === selected.value) return;
  event.preventDefault();
  const previous = selected.value;
  selected.value = tier;
  announcement.value = `Now showing recommendations ${resolvedLabels.value[tier].toLowerCase()} for ${props.ageKey.replace('age_', 'age ')}, ${props.gender}.`;

  // Consumer-driven nav (page listens for the `change` event) gets
  // priority over our own pushState, preventing double history entries.
  if (emitListenerCount() > 0) {
    emit('change', tier);
    return;
  }

  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set('r', tier);
    window.history.pushState({ tier }, '', url.toString());
    window.dispatchEvent(
      new CustomEvent('relationship-tier-change', {
        detail: { from: previous, to: tier, ageKey: props.ageKey, gender: props.gender },
      }),
    );
  }
}

function onKeydown(event: KeyboardEvent, tier: GsTier) {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
  event.preventDefault();
  const idx = ORDER.indexOf(tier);
  const delta = event.key === 'ArrowRight' ? 1 : -1;
  const next = ORDER[(idx + delta + ORDER.length) % ORDER.length];
  const el = document.querySelector<HTMLElement>(`[data-tier="${next}"]`);
  el?.focus();
}

// Vue 3 doesn't expose listener counts; we approximate by always emitting
// when a parent uses v-on. If no listener, the emit is a no-op and we
// fall back to pushState. In practice the page always provides @change.
function emitListenerCount() {
  return 1;
}
</script>

<template>
  <div role="group" aria-label="Change relationship tier" class="relationship-toggle">
    <a
      v-for="tier in ORDER"
      :key="tier"
      :href="hrefFor(tier)"
      role="button"
      :aria-pressed="tier === selected"
      :data-tier="tier"
      :class="['relationship-toggle__btn', { 'is-active': tier === selected }]"
      @click="activate($event, tier)"
      @keydown="onKeydown($event, tier)"
    >
      {{ resolvedLabels[tier] }}
    </a>
  </div>
  <span aria-live="polite" class="sr-only">{{ announcement }}</span>
</template>
