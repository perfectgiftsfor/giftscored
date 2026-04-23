// composables/site.ts — giftscored.com identity.
//
// Single source of truth for domain, publication name, editor, parent.
// Imported by composables/schema.ts and by individual pages for copy.

export const SITE = {
  url: 'https://giftscored.com',
  name: 'GiftScored',
  tagline: 'Rubric-based gift scoring — how we think about gifts, what we weigh, and why.',
  parent: 'Ramban Group',
  editorName: 'Robin Lake',
  editorTitle: 'Methodology Editor',
  editorUrl: 'https://giftscored.com/about/#robin-lake',
  foundingDate: '2026-04-23',
};

export const useSite = () => SITE;
