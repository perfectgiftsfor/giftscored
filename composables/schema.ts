// composables/schema.ts — Schema.org @graph helpers for giftscored.com.
//
// Ported from the sibling Ramban Group scaffold at idealgiftfor. Intentionally
// fresh copy: different node @ids, different description copy, different
// knowsAbout topics so the JSON-LD fingerprint is distinct per property. Two
// sites with identical schema structure look like a doorway network; two
// genuinely-structured sites look like independent publishers.

import { SITE } from './site';

const ORG_ID = `${SITE.url}/#publisher`;
const SITE_ID = `${SITE.url}/#website`;
const EDITOR_ID = `${SITE.url}/#robin-lake`;

export interface ArticleNodeInput {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  articleSection?: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: SITE.url,
    parentOrganization: {
      '@type': 'Organization',
      name: SITE.parent,
    },
    foundingDate: SITE.foundingDate,
    description:
      'Independent editorial publication that scores gifts against a public rubric. Methodology-first: we publish what we weigh, how we weight it, and what we explicitly cannot know from outside a product.',
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'en-US',
    publisher: { '@id': ORG_ID },
  };
}

export function editorPersonNode() {
  return {
    '@type': 'Person',
    '@id': EDITOR_ID,
    name: SITE.editorName,
    url: SITE.editorUrl,
    jobTitle: SITE.editorTitle,
    description:
      "Methodology Editor at GiftScored. Designs and maintains the scoring rubric, documents the weights, and runs the quarterly refresh. Robin Lake is a disclosed editorial pen name used by a single operator at Ramban Group during pre-incorporation; see /about/ for full disclosure.",
    knowsAbout: [
      'gift scoring methodology',
      'rubric design and weighting',
      'consumer product evaluation frameworks',
      'review-aggregation synthesis',
      'editorial transparency standards',
      'giftability as a product attribute',
    ],
    worksFor: { '@id': ORG_ID },
  };
}

export function breadcrumbListNode(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE.url + '/',
      },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: SITE.url + item.path,
      })),
    ],
  };
}

export function articleNode(input: ArticleNodeInput) {
  return {
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: { '@id': EDITOR_ID },
    publisher: { '@id': ORG_ID },
    articleSection: input.articleSection ?? 'Methodology',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE.url + input.url,
    },
  };
}

export function faqPageNode(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function graph(...nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
