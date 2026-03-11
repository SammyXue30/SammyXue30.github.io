---
layout: page
title: "Met Gala '24 Sketches"
description:
tags: [Procreate, iPad]
img: /assets/img/metgala.jpg
importance: 6
category: Art
---
<style>
  .digital-sketches-gallery .row {
    margin-bottom: 1rem;
  }

  .digital-sketches-gallery figure {
    margin-bottom: 0;
  }

  .digital-sketches-gallery picture {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 320px;
  }

  .digital-sketches-gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .digital-sketches-gallery picture {
      height: 240px;
    }
  }
</style>

<div class="mb-3">
  {% for tag in page.tags %}
    <span class="badge bg-primary me-1">{{ tag }}</span>
  {% endfor %}
</div>
<hr class="mb-4">

<div class="digital-sketches-gallery">
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/IMG_3005 - 01.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/IMG_3006 - 01.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/IMG_3007 - 01.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/IMG_2953 - 01.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/IMG_2954 - 01.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row">
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/IMG_2956 - 01.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/IMG_2957 - 01.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/IMG_2949 - 01.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/IMG_2948 - 01.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/未命名作品 - 01.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
</div>
