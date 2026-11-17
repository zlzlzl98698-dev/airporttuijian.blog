<script setup lang="ts">
import { computed } from 'vue'
import { siteConfig } from '../../data/site'

interface BreadcrumbItem {
  title: string
  link?: string
}

const props = defineProps<{
  items: BreadcrumbItem[]
}>()

const schemaJson = computed(() => {
  const itemListElement = props.items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.title,
    ...(item.link ? { item: `${siteConfig.url}${item.link}` } : {})
  }))

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  })
})
</script>

<template>
  <nav class="breadcrumb-nav" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="breadcrumb-item"
      >
        <a v-if="item.link" :href="item.link" class="breadcrumb-link">{{ item.title }}</a>
        <span v-else class="breadcrumb-current" aria-current="page">{{ item.title }}</span>
        <span v-if="index < items.length - 1" class="breadcrumb-separator">/</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb-nav {
  margin: 0.5rem 0 1.25rem;
  font-size: 13.5px;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 6px;
}

.breadcrumb-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
}

.breadcrumb-link {
  color: #64748b;
  text-decoration: none;
  transition: color 0.15s ease;
}

.breadcrumb-link:hover {
  color: #2563eb;
  text-decoration: underline;
}

.breadcrumb-current {
  color: #0f172a;
  font-weight: 500;
}

.breadcrumb-separator {
  color: #cbd5e1;
  font-size: 12px;
}
</style>
