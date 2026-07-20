---
title: Home
layout: layout.njk
---

<section class="mt-8 md:mt-12 mb-8 md:mb-12">
  <div class="max-w-4xl mx-auto flex flex-row gap-4 md:gap-6 items-center">

    <div class="w-28 md:w-40 shrink-0">
      <img
        src="/assets/main/me.jpg"
        alt="Adham Elarabawy"
        class="w-28 md:w-40 h-auto rounded-sm shadow-sm"
      />
    </div>

    <div class="text-left">
      <h1 class="text-2xl font-semibold tracking-tight mb-1 text-text">Adham Elarabawy</h1>
      <p class="text-[1.05rem] leading-relaxed text-gray-700 max-w-prose">
        I work on vision research at <a href="https://deepmind.com" target="_blank" rel="noopener" class="text-accent-600 hover:text-accent-800 transition">Google DeepMind</a>, with a focus on video understanding, representations, and long-context capabilities. I also enjoy tennis and cooking, sometimes even successfully.
      </p>
      <div class="flex justify-start gap-4 mt-3 text-sm">
        <a href="https://github.com/adham-elarabawy" target="_blank" rel="noopener" class="text-gray-500 hover:text-accent-600 transition no-underline">GitHub</a>
        <a href="https://linkedin.com/in/adham-elarabawy" target="_blank" rel="noopener" class="text-gray-500 hover:text-accent-600 transition no-underline">LinkedIn</a>
        <a href="https://x.com/adhamelarabawy" target="_blank" rel="noopener" class="text-gray-500 hover:text-accent-600 transition no-underline">X</a>
        <a href="https://youtube.com/@AdhamElarabawy" target="_blank" rel="noopener" class="text-gray-500 hover:text-accent-600 transition no-underline">YouTube</a>
      </div>
    </div>
  </div>
</section>

---

<h2 class="text-xl md:text-2xl font-semibold tracking-tight text-text mb-3">
  Selected Projects
</h2>

<ul class="space-y-0 divide-y divide-gray-100">
{% assign sortedProjects = collections.projects | sort: "data.date" | reverse %}
{% for project in sortedProjects %}
    {% if project.data.featured %}
<li class="flex flex-row items-start gap-x-3 py-2.5 first:pt-0">

    <div class="w-28 md:w-40 shrink-0 overflow-hidden rounded-sm">
      <img
        src="{{ project.data.image }}"
        alt="{{ project.data.title }}"
        class="w-full aspect-[5/4] object-cover object-center"
      />
    </div>

    <div class="min-w-0">
      <p class="text-xs text-gray-400 mb-0.5 tracking-wide uppercase">
        {{ project.data.date | date: "%B %Y" }}
      </p>
      <h3 class="text-sm md:text-base font-semibold text-text mb-0.5 leading-snug">
        {% if project.data.external_url %}
          <a href="{{ project.data.external_url }}" target="_blank" rel="noopener" class="hover:text-accent-600 transition no-underline">
            {{ project.data.title }}
          </a>
        {% else %}
          <a href="{{ project.url }}" class="hover:text-accent-600 transition no-underline">
            {{ project.data.title }}
          </a>
        {% endif %}
      </h3>

      {% if project.data.description %}
      <p class="text-sm text-gray-600 leading-snug mb-1">
        {{ project.data.description }}
      </p>
      {% endif %}

      {% if project.data.note %}
      <p class="text-xs italic text-gray-500 mb-1">
        {{ project.data.note }}
      </p>
      {% endif %}

      <p class="text-xs text-gray-400">
        {{ project.data.tags | join: ' · ' }}
      </p>
    </div>
  </li>
    {% endif %}
  {% endfor %}
</ul>

<div class="text-sm text-right mt-3">
  <a href="/projects/" class="text-accent-600 hover:text-accent-800 hover:underline">&rarr; See all projects</a>
</div>

---

<h2 class="text-xl md:text-2xl font-semibold tracking-tight text-text mb-3">
  Featured Writing
</h2>

Coming soon!

<!-- <ul class="space-y-6 max-w-4xl mx-auto">
  {% for post in collections.blog | reverse %}
    {% if post.data.featured %}
    <li>
      <h3 class="text-base font-medium text-text mb-1">
        <a href="{{ post.url }}" class="hover:underline">{{ post.data.title }}</a>
      </h3>
      <p class="text-sm text-gray-500 mb-1">
        {{ post.data.description }}
      </p>
      <p class="text-xs text-gray-400">
        {{ post.date | date: "%B %Y" }}
      </p>
    </li>
    {% endif %}
  {% endfor %}
</ul> -->

<div class="text-sm text-right max-w-4xl mx-auto mt-2">
  <a href="/blog/" class="text-accent-600 hover:text-accent-800 hover:underline">&rarr; Read all writing</a>
</div>
