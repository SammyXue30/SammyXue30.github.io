---
layout: page
title: Line Effect
description: A Peripheral Visual Effect with Motion Lines for Reducing VR Sickness
img: assets/img/LineEffect.gif
importance: 1
category: Work
related_publications: false
---

<div class="row align-items-center">
  <!-- 左侧文字 -->
  <div class="col-md-8">
    <p>
      VR Sickness or Cybersickness remains a significant challenge grappling the Virtual Reality (VR) industry. 
      Its primary cause is widely understood through the 
      <a href="https://dl.acm.org/doi/abs/10.1145/333329.333344">sensory conflict theory</a>.
    </p>
    <p>
      This theory posits a "physiological mismatch" or "perceptual conflict" between two vital sensory systems: the visual system and the vestibular system. 
      In a typical VR scenario, when a user navigates a virtual landscape, their eyes register optical flow, signaling to the brain that they are in motion. 
      However, if the user is physically stationary, the vestibular system detects no actual movement, contradicting the visual input.
    </p>
  </div>

  <!-- 右侧图片 -->
  <div class="col-md-4">
    {% include figure.liquid 
       loading="eager" 
       path="assets/img/VestibularSystem.jpg" 
       title="Vestibular System" 
       caption="Vestibular System" 
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
