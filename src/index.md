---
title: Home
layout: layout.njk
---

<section class="mt-8 md:mt-12 mb-0">
  <div class="max-w-4xl mx-auto flex flex-row gap-3 md:gap-6 items-start md:items-center">

    <div class="w-24 sm:w-28 md:w-40 shrink-0">
      <img
        src="/assets/main/me.jpg"
        alt="Adham Elarabawy"
        width="96"
        height="117"
        class="w-24 sm:w-28 md:w-40 h-auto rounded-sm shadow-sm"
      />
    </div>

    <div class="min-w-0 text-left">
      <h1 class="text-xl md:text-2xl font-semibold tracking-tight mb-1 text-text">Adham Elarabawy</h1>
      <p class="text-[0.95rem] md:text-[1.05rem] leading-[1.55] md:leading-relaxed text-gray-700 max-w-prose break-words">
        I work on vision research at <a href="https://deepmind.com" target="_blank" rel="noopener" class="text-accent-600 hover:text-accent-800 transition">Google DeepMind</a>, with a focus on video understanding, representations, and long-context capabilities. I also enjoy tennis and cooking, sometimes even successfully.
      </p>
      <div class="flex flex-wrap justify-start gap-x-4 gap-y-1 mt-3 text-xs md:text-sm">
        <a href="https://github.com/adham-elarabawy" target="_blank" rel="noopener" class="text-gray-500 hover:text-accent-600 transition no-underline">GitHub</a>
        <a href="https://linkedin.com/in/adham-elarabawy" target="_blank" rel="noopener" class="text-gray-500 hover:text-accent-600 transition no-underline">LinkedIn</a>
        <a href="https://x.com/adhamelarabawy" target="_blank" rel="noopener" class="text-gray-500 hover:text-accent-600 transition no-underline">X</a>
        <a href="https://youtube.com/@AdhamElarabawy" target="_blank" rel="noopener" class="text-gray-500 hover:text-accent-600 transition no-underline">YouTube</a>
      </div>
    </div>
  </div>
</section>

<hr class="my-8 md:my-10" />

<h2 class="mt-0 mb-4 text-xl md:text-2xl font-semibold tracking-tight text-text">
  Selected Projects
</h2>

<ul class="mt-0 mb-0 pl-0 list-none space-y-0 divide-y divide-gray-200 sm:divide-gray-100">
{% assign sortedProjects = collections.projects | sort: "data.date" | reverse %}
{% for project in sortedProjects %}
    {% if project.data.featured %}
{% include "project-card.liquid" %}
    {% endif %}
  {% endfor %}
</ul>

<div class="text-sm text-right mt-3">
  <a href="/projects/" class="text-accent-600 hover:text-accent-800 hover:underline">&rarr; See all projects</a>
</div>
