---
layout: layout.njk
title: Writing
permalink: /blog/
---

# Writing

<ul class="writing-list">
{% for post in collections.writing %}
{% include "writing-card.liquid" %}
{% endfor %}
</ul>
