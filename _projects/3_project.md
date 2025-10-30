---
layout: page
title: Line Effect
description: A Peripheral Visual Effect with Motion Lines for Reducing VR Sickness
tags: [Swift, Python, C#, Xcode, Unity]
img: assets/img/LineEffect.gif
importance: 3
category: Work
related_publications: false
---
<div class="mb-3">
  {% for tag in page.tags %}
    <span class="badge bg-primary me-1">{{ tag }}</span>
  {% endfor %}
</div>
<hr class="mb-4">
<div class="row align-items-center">
  <!-- 左侧文字 -->
  <div class="col-md-8">
    <p>
      VR sickness, or cybersickness, remains a significant challenge for the <code>virtual reality (VR)</code> industry.  <br> 
      Its primary cause is commonly explained by <a href="https://dl.acm.org/doi/abs/10.1145/333329.333344">the sensory conflict theory</a>, which posits a physiological or perceptual mismatch between two essential sensory systems: the visual system and the vestibular system.
    </p>
    <p>
      In a typical VR experience, when users navigate through a virtual environment, their eyes detect optical flow that signals motion to the brain.  <br> 
      However, if their bodies remain stationary, the vestibular system senses no movement—contradicting the visual input and resulting in discomfort.
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

While existing mitigation techniques, such as the <a href="https://ieeexplore.ieee.org/abstract/document/8446346">Dot Effect</a>, have shown potential in reducing cybersickness, they often do so at the cost of immersion, diminishing the overall sense of presence and realism.

The objective of this research was to design and implement a novel peripheral visual effect, termed the `Line Effect`, aimed at mitigating cybersickness without compromising the immersive quality of VR.


<hr class="mb-4">
<h4>Preliminary Experiment (AR Prototype & Selection)</h4>
<div style="height: 1.5rem;"></div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" 
            path="assets/img/ControlPanel.jpg" 
            title="The Three States of the MLs Control Panel on iPad Pro 12.9-inch"
            caption="MLs (iOS AR App) on iPad Pro 12.9-inch"
            class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Before implementing the effect in VR, it was critical to identify the most natural and effective arrangement of motion lines. Conducting this investigation directly in VR was undesirable, as it could induce the very sensory conflict we sought to mitigate. <br> 
Therefore, `Augmented Reality (AR)` was chosen as the experimental platform because it allows digital content to be seamlessly integrated into real-world perception while maintaining a full multisensory experience.

<div class="row align-items-center">
  <!-- 左侧文字 -->
  <div class="col-md-8">
    <p>
      An iOS AR App titled “MLs” (Motion Lines) was developed using <code>ARKit</code>. An interactive control panel was built with <code>SwiftUI</code> and <code>SF Symbols</code>, enabling participants to evaluate 27 unique arrangements of motion lines by adjusting three parameters: Line Size, Matrix Size, and Spacing.
    </p>
    <p>
      To ensure precise transfer of the selected configuration from AR to Unity, a <code>Python</code> script using OpenCV was developed. This “Cyan Detector” analyzed video recordings to calculate the density of motion lines, ensuring accurate replication in the final VR implementation.
    </p>
  </div>

  <!-- 右侧图片 -->
  <div class="col-md-4">
    {% include figure.liquid 
       loading="eager" 
       path="assets/img/PreliminaryExperiment.jpg" 
       title="Preliminary Experiment in a Gym Using the App" 
       caption="Experiment in a Gym Using the App" 
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<hr class="mb-4">
<h4 class="mb-3">Main Experiment (Unity Implementation)</h4>
<div style="height: 1.5rem;"></div>
<div class="col-sm mt-3 mt-md-0">
  {% include figure.liquid loading="eager" path="assets/img/Channels.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
    Visual Representation of Line Effect Structure
</div>
Simply replacing the spheres in the Dot Effect with motion line models produced visually unnatural results. The main issue was that the Dot Effect’s original script reset the parent GameObject’s position whenever it crossed a boundary, causing all attached objects to perceptually “jump.” Combined with a trail renderer, this created jarring discontinuities and unnatural streaks.

The Line Effect’s structure was fundamentally redesigned in `Unity (C#)` by introducing a channel-based architecture.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Base Line.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Dot Effect.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Line Effect.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Baseline (no visual effect) / Dot Effect / Line Effect
</div>

Instead of resetting the entire grid, the Line Effect generates a multi-channel grid, where each line within a channel is managed independently. When the furthest line in a channel crosses the boundary, only that line is removed and a new one is inserted at the channel’s starting point. <br> 
This mechanism produces a continuous, fluid flow of motion lines that dynamically respond to the user’s movement, eliminating perceptual jumps and ensuring a smooth, organic sense of motion.

<div class="row text-center">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/MainExperiment.jpg" title="VR-Based Experiment" class="img-fluid rounded z-depth-1" %}
    <div class="caption mt-2">VR-Based Experiment</div>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/Data 1.jpg" title="SSQ Scores" class="img-fluid rounded z-depth-1" %}
    <div class="caption mt-2">SSQ Scores</div>
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/Data 2.jpg" title="Naturalness Scores" class="img-fluid rounded z-depth-1" %}
    <div class="caption mt-2">Naturalness Scores</div>
  </div>
</div>

A main experiment involving 19 participants compared three visual conditions:	1. Baseline (no visual effect), 2. Dot Effect, 3.	Line Effect

Results from a repeated-measures one-way ANOVA supported the efficacy of the Line Effect. <br> 
The Line Effect significantly reduced cybersickness (measured by SSQ scores) while preserving the perceived naturalness of the VR experience—successfully addressing the limitations of the Dot Effect.

<hr class="mb-4">
<h4 class="mb-3">Link</h4>
<div class="text-start mt-2">
  <p><a href="https://drive.google.com/file/d/1yxPIE7ruP1nEx6b3l1g3n-zT26zpN-XS/view?usp=share_link" target="_blank"><strong>[Research Report]</strong></a></p>
  <p><a href="https://drive.google.com/file/d/1EIDYY1DrOviFCu-5gos2_iJj2YyCfPlu/view?usp=share_link" target="_blank"><strong>[Research Overview]</strong></a></p>
</div>

<hr class="mb-4">
<h4 class="mb-3">Credits</h4>
Bowen Xue (薛博文) — Development<br>
Nakamura Koki (中村光輝) — Mentor<br>
Bao Yue (包 躍) — Professor<br>