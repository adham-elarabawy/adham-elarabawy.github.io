---
title: Projects
layout: layout.njk
---

<h1 class="text-2xl font-semibold text-text mb-4">All Projects</h1>

<ul class="mt-0 mb-0 pl-0 list-none space-y-0 divide-y divide-gray-200 sm:divide-gray-100">
{% assign sortedProjects = collections.projects | sort: "data.date" | reverse %}
{% for project in sortedProjects %}
{% include "project-card.liquid" %}
  {% endfor %}
</ul>
