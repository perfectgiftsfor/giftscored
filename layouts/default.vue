<script setup lang="ts">
import { SITE } from '~/composables/site';

const year = new Date().getFullYear();
</script>

<template>
  <div class="min-h-screen flex flex-col bg-chalk text-forest">
    <header class="border-b border-forest/15 bg-chalk">
      <div class="max-w-reading mx-auto px-4 py-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
        <NuxtLink to="/" class="no-underline">
          <span class="font-serif text-2xl font-bold text-forest">GiftScored</span>
          <span class="block md:inline md:ml-3 text-xs uppercase tracking-widest text-forest/60 font-sans">Methodology-first gift scoring</span>
        </NuxtLink>

        <nav class="flex flex-wrap gap-x-5 gap-y-1 text-sm font-sans">
          <NuxtLink to="/methodology/" class="text-forest hover:text-copper no-underline">Methodology</NuxtLink>
          <NuxtLink to="/about/" class="text-forest hover:text-copper no-underline">About</NuxtLink>
          <NuxtLink to="/editorial/" class="text-forest hover:text-copper no-underline">Editorial</NuxtLink>
          <NuxtLink to="/contact/" class="text-forest hover:text-copper no-underline">Contact</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <div class="max-w-reading mx-auto px-4 py-10">
        <slot />
      </div>
    </main>

    <footer class="border-t border-forest/15 bg-chalk mt-16">
      <div class="max-w-reading mx-auto px-4 py-8 text-sm font-sans text-forest/70">
        <p class="mb-2">
          <strong class="text-forest">GiftScored</strong> — an editorial publication by {{ SITE.parent }}.
          Methodology Editor: {{ SITE.editorName }} (disclosed pen name; see <NuxtLink to="/about/" class="text-copper">/about/</NuxtLink>).
        </p>
        <p class="mb-2">
          The Gift Score is a framework for reasoning about gifts from publicly-available signals. We do not claim to hand-test every product we reference.
        </p>
        <p class="flex flex-wrap gap-x-4 gap-y-1">
          <NuxtLink to="/privacy/" class="text-copper">Privacy</NuxtLink>
          <NuxtLink to="/terms/" class="text-copper">Terms</NuxtLink>
          <NuxtLink to="/editorial/" class="text-copper">Editorial standards</NuxtLink>
          <NuxtLink to="/contact/" class="text-copper">Contact</NuxtLink>
        </p>
        <p class="mt-4 text-xs text-forest/50">&copy; {{ year }} GiftScored / {{ SITE.parent }}.</p>
      </div>
    </footer>
  </div>
</template>
