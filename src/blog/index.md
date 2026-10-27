---
layout: layout.njk
title: Writing
permalink: /blog/
---

# Writing

<ul class="writing-list">
{% for post in collections.writing %}
{% include "writing-card.liquid" %}
{% else %}
  <li class="writing-empty">Nothing published yet.</li>
{% endfor %}
</ul>
