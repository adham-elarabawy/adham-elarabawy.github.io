---
title: Projects
layout: layout.njk
---

<h1 class="text-2xl font-semibold text-ink mb-6 px-6 max-w-4xl mx-auto font-sans">All Projects</h1>

<ul class="space-y-6 max-w-4xl mx-auto px-6">
{% assign sortedProjects = collections.projects | sort: "data.date" | reverse %}
{% for project in sortedProjects %}
<li class="flex flex-col md:flex-row md:items-center gap-y-1 md:gap-x-4 p-3">

    <div class="aspect-[5/4] w-full md:w-48 overflow-hidden bg-sand-100 flex items-center justify-center shrink-0 rounded-sm">
      <img
        src="{{ project.data.image }}"
        alt="{{ project.data.title }}"
        class="w-full h-full object-cover object-center transition duration-300"
      />
    </div>

    <div class="mt-2 md:mt-0">
      <h3 class="text-base md:text-lg font-medium text-ink mb-1 font-sans">
        {% if project.data.external_url %}
          <a href="{{ project.data.external_url }}" target="_blank" rel="noopener" class="hover:underline hover:text-olive-800 cursor-pointer">
            {{ project.data.title }}
          </a>
        {% else %}
          <a href="{{ project.url }}" class="hover:underline hover:text-olive-800 cursor-pointer">
            {{ project.data.title }}
          </a>
        {% endif %}
      </h3>

      {% if project.data.description %}
      <p class="text-sm text-sand-700 mb-1 last:mb-0">
        {{ project.data.description }}
      </p>
      {% endif %}

      <p class="text-xs text-sand-600">
        {{ project.data.tags | join: ', ' }} · {{ project.data.date | date: "%B %Y" }}
      </p>
    </div>
  </li>
  {% endfor %}
</ul>
