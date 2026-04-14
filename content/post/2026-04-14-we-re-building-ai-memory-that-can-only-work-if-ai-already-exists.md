---
image: /images/hero/we-re-building-ai-memory-that-can-only-work-if-ai-already-exists.jpg
title: "We're Building AI Memory That Can Only Work If AI Already Exists"
date: 2026-04-14T21:51:19Z
draft: false
tags: ["technology", "ai", "future"]
---

There's a dependency loop buried in the foundation of modern computing, and almost nobody is talking about it. The most advanced post-DRAM storage technologies — the ones being engineered right now to train the next generation of models — require machine learning just to function correctly. Which means we're quietly wiring a requirement into the hardware layer: you need AI to run the storage, and you need the storage to run AI.

I've been thinking about this for a few months and I can't shake it.

## The Problem With Every Alternative to DRAM

DRAM is fast, reliable, and extremely well-understood. It's also hitting its physical limits. The industry has known this for years, which is why there's been a sustained push toward alternatives: Phase Change Memory (PCM), Resistive RAM (ReRAM), Magnetoresistive RAM (MRAM), and a handful of others that operate at near-atomic scales.

The density numbers are genuinely impressive. Some of these technologies promise 10x or more the storage density of DRAM at a fraction of the energy cost. If any of them work at scale, they would be transformative for AI training — you could hold vastly larger models in fast memory, which changes what's even possible to train.

But here's the thing nobody leads with in the press releases: every one of these technologies has defects. Real, serious, structural defects. PCM has drift — the resistance of cells changes over time unpredictably, so data that was there yesterday reads differently today. ReRAM has variation — cells that should behave identically don't, because manufacturing at atomic scale introduces noise that's fundamentally hard to eliminate. MRAM has its own quirks. None of these are minor engineering inconveniences. They're physics.

## The Patch Is Machine Learning

So how do you ship a product built on fundamentally noisy hardware? You train a model to correct for the noise.

This is not hypothetical. There's real research — out of IBM, Intel, academic labs — on using neural networks to compensate for PCM drift, to map the actual behavior of individual ReRAM cells rather than assuming they're all equivalent, to predict and correct errors before they propagate. The model learns the idiosyncrasies of the physical substrate and then operates as a translation layer between "what we asked the hardware to store" and "what the hardware actually stored."

In other words: the error correction layer for next-generation AI memory is itself an AI.

## Why This Is Stranger Than It Sounds

There's a version of this story where the punchline is just "AI is eating software." Sure. But this is different. This isn't AI automating a business process or accelerating some knowledge work task. This is AI being wired into the functioning of the physical layer that AI runs on.

The dependency is vertical in a way that matters. If the AI doing error correction is even slightly wrong — miscalibrated, undertrained, drifted itself — the reads and writes it's correcting are corrupted in ways that are nearly impossible to detect downstream. The substrate your model trains on is only as reliable as the model managing the substrate. That's not a software abstraction problem. That's a hardware reliability problem that has been pushed one level up and is now somebody else's machine learning problem.

In my experience, the most fragile systems are the ones where a dependency loop exists but nobody has formally acknowledged it. The loop doesn't get designed around. It doesn't get tested. It gets discovered, usually at the worst time.

## What We're Actually Building

I think the deep issue here isn't technical — it's conceptual. We've gotten very comfortable thinking of AI as a layer on top of computing. Software. A thing that runs on the stack. The stack itself is inert, reliable, classical.

That separation is becoming less true. The storage hardware that serves the next generation of large models may not function correctly without a prior generation of models managing it. Which means the stack is no longer inert. It's learned. And what it has learned may be wrong, may drift, may fail in ways that look statistically normal until they don't.

The history of computing has a lot of stories about assumptions baked into foundational layers that caused enormous problems decades later. Time zones. Integer overflow. Trust in packet headers. In each case, the assumption seemed reasonable at the time. In each case, the abstraction held until it didn't.

I don't know exactly what it means that we're building AI substrate that requires AI to function. But I'm pretty confident it means something — and I suspect we won't fully understand what until the loop breaks somewhere critical and we have to trace it all the way back down to the hardware.

What happens when the model managing memory gets things subtly wrong for months before anyone notices?

---

## Sources

- [447 TB/cm² at zero retention energy – atomic-scale memory on fluorographane](https://zenodo.org/records/19513269) — *Hacker News*
- [Energy Saving Techniques for Phase Change Memory (PCM)](http://arxiv.org/abs/1309.3785v1) — *arXiv*
- [ML-PCM : Machine Learning Technique for Write Optimization in Phase Change Memory (PCM)](http://arxiv.org/abs/2512.00026v1) — *arXiv*
- [Memristors -- from In-memory computing, Deep Learning Acceleration, Spiking Neural Networks, to the Future of Neuromorphic and Bio-inspired Computing](http://arxiv.org/abs/2004.14942v1) — *arXiv*
- [Improving Phase Change Memory Performance with Data Content Aware Access](http://arxiv.org/abs/2005.04753v1) — *arXiv*
- [Analog Neural Computing with Super-resolution Memristor Crossbars](http://arxiv.org/abs/2105.04614v1) — *arXiv*
- [Designing Efficient and High-performance AI Accelerators with Customized STT-MRAM](http://arxiv.org/abs/2104.02199v1) — *arXiv*
