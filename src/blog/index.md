---
layout: layout.njk
title: Writing
pagination:
  data: collections.blog
  size: 1000
  reverse: true
permalink: /blog/
---

# Writing

Coming soon...

<!-- <div class="mt-8 space-y-8">
  {% for post in pagination.items %}
    <article class="border-t border-gray-200 pt-6">
      <h2 class="text-lg font-medium text-text mb-1">
        <a href="{{ post.url }}" class="hover:underline">
          {{ post.data.title }}
        </a>
      </h2>

      {% if post.data.description %}
        <p class="text-gray-500 text-sm mb-1">
          {{ post.data.description }}
        </p>
      {% endif %}

      <p class="text-xs text-gray-400">
        {{ post.date | date: "%B %Y" }}
      </p>
    </article>
  {% endfor %}
</div> -->
