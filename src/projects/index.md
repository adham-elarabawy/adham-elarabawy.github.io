---
title: Projects
layout: layout.njk
---

<h1 class="text-2xl font-semibold text-text mb-4">All Projects</h1>

<ul class="space-y-0 divide-y divide-gray-100">
{% assign sortedProjects = collections.projects | sort: "data.date" | reverse %}
{% for project in sortedProjects %}
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
      <p class="text-sm text-gray-600 leading-snug mb-1.5">
        {{ project.data.description }}
      </p>
      {% endif %}

      {% if project.data.authors %}
      <p class="text-[0.7rem] text-gray-400 leading-[1.35] mb-1.5">
        {% for author in project.data.authors %}{% if author == "Adham Elarabawy" %}<strong class="font-semibold text-gray-600">{{ author }}</strong>{% else %}{{ author }}{% endif %}{% if project.data.equal_contributors contains author %}<sup class="ml-px">&#42;</sup>{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}{% if project.data.affiliation %}<span class="mx-1 text-gray-300" aria-hidden="true">·</span><span class="italic font-medium text-gray-500">{{ project.data.affiliation }}</span>{% endif %}
      </p>
      {% endif %}

      <p class="text-xs text-gray-400">
        {{ project.data.tags | join: ' · ' }}
      </p>
    </div>
  </li>
  {% endfor %}
</ul>
