---
layout: page
title: project 4
description: another without an image
tags: [Python, C, Visual Studio Code]
img: assets/img/7.jpg
importance: 4
category: Work
---
<div class="mb-3">
  {% for tag in page.tags %}
    <span class="badge bg-primary me-1">{{ tag }}</span>
  {% endfor %}
</div>
<hr class="mb-4">

<div class="row justify-content-center mt-3">
  <div class="col-sm-10">
    {% include figure.liquid loading="eager" path="assets/img/telephone.gif" title="App Interface Overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Payphone as Interface 
</div>

