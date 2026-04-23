// composables/useJsonLd.ts — inject a Schema.org @graph as a JSON-LD <script>.
//
// Usage inside any `<script setup>`:
//   useJsonLd(graph(organizationNode(), websiteNode(), ...));
//
// Nuxt renders the tag at generate-time so it ships in the pre-rendered HTML.

export function useJsonLd(payload: object) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(payload),
      },
    ],
  });
}
