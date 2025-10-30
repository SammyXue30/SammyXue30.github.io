---
layout: page
title: Collaborative Avatars for Motivation
description: A VR study on how collaborating with one’s avatar affects motivation.
tags: [C#, Unity]
img: assets/img/scene.jpg
importance: 4
category: Work
---
<div class="mb-3">
  {% for tag in page.tags %}
    <span class="badge bg-primary me-1">{{ tag }}</span>
  {% endfor %}
</div>
<hr class="mb-4">



This project explores how observing praise in VR influences real-world motivation. Prior work shows that seeing one’s avatar succeed and be praised, a process called <a href="https://www.tandfonline.com/doi/full/10.1080/15213260802669474?casa_token=ab9oLqR2sEUAAAAA%3AeEdu7u4XCBRJXuXXepY-Xr076yfOn5a2n9DHR9ngL8Cvaxc0ieHsAcAXXcVa0U9dJ6a7hdMkdJUcXg" target="_blank">vicarious reinforcement</a>, can boost motivation, but users have usually been passive observers. We asked: what happens if the user collaborates with their avatar before observing praise?

<hr class="mb-4">
<h4 class="mb-3">Experiment</h4>
<div class="row justify-content-center mt-3">
  <div class="col-sm-10">
    {% include figure.liquid loading="eager" path="assets/img/Experiment.jpg" title="App Interface Overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Experimental setup and scenes: (top-left) Virtual environment built in Unity; (top-right) participant’s embodied avatar cleaning a messy virtual room; (bottom-right) mother-figure avatar praising the avatar; (bottom-left) appearance of the mother-figure avatar.
</div>
The virtual environment was developed in <code>Unity</code> and presented in first-person view through a Meta Quest 2 headset. Before the experiment, each participant created a personalized avatar using <code>VRoid Studio</code> to closely match their real appearance. This avatar was then imported into the Unity scene as their embodied representation.<br> 

A between-subjects VR experiment (N=10) compared two conditions:<br> 
1. Non-Involvement (Passive Condition): The participant passively watches their embodied avatar clean a messy virtual room alone. Afterward, a mother-figure avatar enters and praises the avatar for its work.<br> 
2. Involvement (Active Condition): The participant actively collaborates with their avatar to clean the room together. Afterward, they observe the same mother-figure avatar praise their avatar for the joint effort.<br> 

After the VR session, participants were given snacks while completing questionnaires. Their behavior was then unobtrusively observed to assess whether they would voluntarily clean up two types of trash, their own snack wrappers and pre-placed surrounding trash, serving as an objective measure of real-world cleaning motivation.

<hr class="mb-4">
<h4 class="mb-3">Findings</h4>
<div class="row justify-content-center mt-3">
  <div class="col-sm-10">
    {% include figure.liquid loading="eager" path="assets/img/Findings.jpg" title="App Interface Overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
As a preliminary pilot study, no significant differences were found, but distinct trends emerged across measures. Subjective Motivation was higher in the active involvement group, suggesting that collaboration with the avatar enhanced personal motivation. Avatar Impression (AAQ) scores were higher in the passive group, indicating greater empathy toward the observed avatar. For the behavioral measures—Own Trash and Surrounding Trash—no clear differences were observed, implying that emotional or motivational effects in VR did not translate into real-world cleaning behavior.

<hr class="mb-4">
<h4 class="mb-3">Link</h4>
<div class="text-start mt-2">
  <p><a href="https://conference.vrsj.org/ac2025/program/doc/3E1-05.pdf" target="_blank"><strong>[Presented at the 30th Annual Conference of the Virtual Reality Society of Japan (VRSJ 2025)]</strong></a></p>
</div>

<hr class="mb-4">
<h4 class="mb-3">Credits</h4>
Yika Huang (黃 羿嘉) — First Author & Development<br> 
Shingo Suzuki (鈴木 慎吾) — Development<br> 
Bowen Xue (薛 博文) — Development<br> 
Yong-Hao Hu (胡 永澔) — Mentor<br> 
Atsuya Matsumoto (松本 篤弥) — Mentor<br> 
Takato Mizuho (瑞穂 嵩人) — Mentor<br> 
Takuji Narumi (鳴海 拓志) — Professor<br> 
Hideaki Kuzuoka (葛岡 英明) — Professor<br> 