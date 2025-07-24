---
title: Home
layout: layout.njk
---

<section class="px-6 mt-16 md:mt-24 mb-16 md:mb-24">
  <div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start">
    
    <div class="relative w-36 h-52 shrink-0">
      <!-- Default photo -->
      <img
        src="/assets/main/me.jpg"
        alt="Adham Elarabawy"
        class="w-full h-full object-cover rounded-sm border border-sand-600 shadow-sm transition-opacity duration-300 ease-in-out"
      />
      
      <!-- Ghibli-style hover photo -->
      <img
        src="/assets/main/me-ghibli.jpg"
        alt="Studio Ghibli style Adham"
        class="absolute top-0 left-0 w-full h-full object-cover rounded-sm border border-sand-600 shadow-sm opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
      />
    </div>

    <div class="text-center md:text-left">
      <h1 class="text-2xl font-semibold tracking-tight mb-1 text-ink">Adham Elarabawy</h1>
      <p class="text-sm text-sand-700 mb-4">
        Research Engineer at
        <a href="https://deepmind.com" target="_blank" rel="noopener" class="text-ink hover:underline">
          Google DeepMind
        </a>
      </p>
      <p class="text-[1.05rem] leading-relaxed text-sand-900 max-w-prose">
        I work on Gemini’s long-context capabilities, exploring how scaling, memory systems, and model architecture can expand the boundaries of intelligent reasoning.
      </p>

      <div class="flex justify-center md:justify-start gap-4 text-sand-600 mt-4 text-lg">
        <a
          href="https://github.com/adham-elarabawy"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          class="hover:text-olive-600 no-underline"
        >
          <i class="ti ti-brand-github text-lg text-sand-600 hover:text-olive-600 antialiased"></i>
        </a>
        <a
          href="https://linkedin.com/in/adham-elarabawy"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          class="hover:text-olive-600 no-underline"
        >
          <i class="ti ti-brand-linkedin text-lg text-sand-600 hover:text-olive-600 antialiased"></i>
        </a>
        <a
          href="https://x.com/adhamelarabawy"
          target="_blank"
          rel="noopener"
          aria-label="Twitter/X"
          class="hover:text-olive-600 no-underline"
        >
          <i class="ti ti-brand-x text-lg text-sand-600 hover:text-olive-600 antialiased"></i>
        </a>
        <a
          href="https://youtube.com/@AdhamElarabawy"
          target="_blank"
          rel="noopener"
          aria-label="YouTube"
          class="hover:text-olive-600 no-underline"
        >
          <i class="ti ti-brand-youtube text-lg text-sand-600 hover:text-olive-600 antialiased"></i>
        </a>
      </div>
    </div>
  </div>
</section>




---

<h2 class="text-xl md:text-2xl font-semibold tracking-tight text-ink mb-4">
  Selected Projects
</h2>

<ul class="space-y-6 max-w-4xl mx-auto px-6">
{% assign sortedProjects = collections.projects | sort: "data.date" | reverse %}
{% for project in sortedProjects %}
    {% if project.data.featured %}
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
    {% endif %}
  {% endfor %}
</ul>





<div class="text-sm text-right max-w-4xl mx-auto px-6 mt-2">
  → <a href="/projects/" class="text-olive hover:underline">See all projects</a>
</div>

---

<h2 class="text-xl md:text-2xl font-semibold tracking-tight text-ink mb-4">
  Featured Writing
</h2>

Coming soon!

<!-- <ul class="space-y-6 max-w-4xl mx-auto px-6">
  {% for post in collections.blog | reverse %}
    {% if post.data.featured %}
    <li>
      <h3 class="text-base font-medium text-ink mb-1">
        <a href="{{ post.url }}" class="hover:underline">{{ post.data.title }}</a>
      </h3>
      <p class="text-sm text-sand-700 mb-1">
        {{ post.data.description }}
      </p>
      <p class="text-xs text-sand-600">
        {{ post.date | date: "%B %Y" }}
      </p>
    </li>
    {% endif %}
  {% endfor %}
</ul> -->

<div class="text-sm text-right max-w-4xl mx-auto px-6 mt-2">
  → <a href="/blog/" class="text-olive hover:underline">Read all writing</a>
</div>
