---
layout: page
title: Projects
permalink: /projects/
description: A collection of research and interactive projects blending culture, design, and immersive technology.
nav: true
nav_order: 3
title_icons: [Work.PNG, Art.PNG]
display_categories: [Work, Art]
horizontal: false
---

<!-- pages/projects.md -->
<style>
  .project-category-label {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .project-category-icon {
    height: 1em;
    width: auto;
    display: block;
    object-fit: contain;
  }
</style>

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  {% assign category_image = '' %}
  {% if category == 'Work' %}
    {% assign category_image = 'Work.PNG' %}
  {% elsif category == 'Art' %}
    {% assign category_image = 'Art.PNG' %}
  {% endif %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">
      <span class="project-category-label">
        {% if category_image != '' %}
          <img
            src="{{ category_image | prepend: 'assets/img/' | relative_url }}"
            alt="{{ category }}"
            class="project-category-icon"
            loading="eager"
          >
        {% endif %}
        <span>{{ category }}</span>
      </span>
    </h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
