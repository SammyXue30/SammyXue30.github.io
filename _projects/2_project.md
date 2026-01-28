---
layout: page
title: The You You Are
description: An interactive installation for real-time dialogue with another self.
tags: [Python, C, Visual Studio Code]
img: assets/img/TheYouYouAre.jpg
importance: 2
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

<div class="row align-items-center">
  <!-- 左侧文字 -->
  <div class="col-md-8">
    <p>
     The You You Are is an interactive installation that uses <code>real-time voice cloning (Eleven Multilingual v3)</code> and <code>LLM(ChatGPT-4o)</code> to simulate a phone call with another version of yourself from the multiverse.<br>
     Housed inside <code>a modified payphone</code>, the installation invites participants to engage in a live and unexpected conversation with an entity that speaks, listens, and responds in their own voice.
    </p>
    <p>
      This work was exhibited at the University of Tokyo <a href="https://www.u-tokyo.ac.jp/focus/ja/events/z0115_00083.html" target="_blank">iii Exhibition 2025</a>.
    </p>
    <p>
      The experience unfolds as a seamless narrative from curiosity to reflection. Upon picking up the payphone receiver, the participant is greeted by a interface on the screen, requesting consent to temporarily sample their voice. After agreeing, the participant answers three brief, open-ended questions that provide the audio data for real-time voice cloning. Moments later, a “parallel self,” powered by generative AI, begins speaking in the participant’s own voice, initiating a live dialogue across realities. When the call ends, a built-in thermal printer produces a small receipt summarizing key moments from the conversation—a tangible trace of an otherwise ephemeral exchange.
    </p>
    <p>
      The installation invites participants to reflect on who they really are. It creates a curious paradox: the voice sounds like one’s own, yet the thoughts and memories belong to someone else. Through this mix of the familiar and the unfamiliar, the experience gently asks the question at the heart of The You You Are.
    </p>

  </div>

  <!-- 右侧图片（上下排列） -->
  <div class="col-md-4 d-flex flex-column align-items-center">
    <div class="mb-3 w-100">
      {% include figure.liquid 
         loading="eager" 
         path="assets/img/Interacting.jpg" 
         title="Interacting with The You You Are at the iii Exhibition"
         caption="Interacting with The You You Are at the iii Exhibition"
         class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="w-100">
      {% include figure.liquid 
         loading="eager" 
         path="assets/img/Receipt.jpg" 
         title="Conversation Memento Receipt" 
         caption="Conversation Memento Receipt" 
         class="img-fluid rounded z-depth-1" %}
    </div>
  </div>
</div>



<div class="row justify-content-center mt-3">
  <div class="col-sm-10">
    {% include figure.liquid loading="eager" path="assets/img/HardwareOverview.png" title="App Interface Overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The internal structure of the payphone
</div>

<hr class="mb-4">
<h4 class="mb-3">Link</h4>
<div class="text-start mt-2">
  <p><a href="https://www.youtube.com/watch?v=l_jqDmLcaAE" target="_blank"><strong>[Watch the Experience]</strong></a></p>
</div>

<hr class="mb-4">
<h4 class="mb-3">Credits</h4>
Bowen Xue (薛博文) — Project Lead & Technical Architect<br> 
Genta Ono (小野源太) — Director (Creative & Technical)<br> 
Tsubasa Yoshida (吉田翼) — Lead Engineer<br> 
Siyu Yao (姚思妤) — Designer<br> 
Wenhe Wang (王文鶴) — Special Thanks<br> 



