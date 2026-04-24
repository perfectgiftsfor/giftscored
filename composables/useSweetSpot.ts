// Sweet-spot types + helpers — giftscored (Nuxt 3) variant.
//
// Cross-stack sibling of topgiftsfor's types/sweet-spot.ts + idealgiftfor's
// sweet-spot-types.ts. Per air-gap rule §1.1 each property has its own
// copy with different naming / field ordering. Nuxt auto-imports from
// composables/, so consumers just use `useSweetSpot()` or the types directly.

export type AgeKey = `age_${number}`;
export type GsGender = 'boy' | 'girl' | 'ungendered';
export type GsTier = 'my_child' | 'family_best_friend' | 'friend_classmate';

export interface GsSweetSpotRow {
  row_id: number;
  age_key: AgeKey;
  age_display: string;
  age_category: string;
  is_milestone: boolean;
  gender: GsGender;
  relationship_tier: GsTier;
  sweet_spot_low_usd: number;
  sweet_spot_high_usd: number;
  sweet_spot_anchor_usd: number;
  budget_tier_min_usd: number;
  stretch_tier_max_usd: number;
  justification_text: string;
  data_source: string;
  last_updated: string;
}

export interface GsProductEntry {
  id: string;
  name: string;
  brand?: string;
  description: string;
  image: { src: string; alt: string; width?: number; height?: number };
  offers: {
    priceUsd: number;
    availability: 'InStock' | 'OutOfStock' | 'PreOrder';
    retailer: string;
    retailerUrl: string;
  };
  giftScore?: number;
}

export function toAgeKeyText(age: number): AgeKey {
  return `age_${age}` as AgeKey;
}

/**
 * Thin composable wrapper — pre-wired for a future `$fetch` or
 * `useFetch` call against Supabase. Right now just a placeholder so
 * pages can `const { row } = useSweetSpot(...)` and swap in the real
 * fetch later without touching the consumers.
 */
export function useSweetSpot() {
  return {
    toAgeKeyText,
  };
}
