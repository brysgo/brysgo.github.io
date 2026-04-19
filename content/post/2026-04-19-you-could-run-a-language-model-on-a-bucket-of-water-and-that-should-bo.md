---
title: "You Could Run a Language Model on a Bucket of Water (And That Should Bother You)"
date: 2026-04-19T01:04:13Z
draft: false
tags: ["llm-inference", "substrate-independence", "compute-efficiency", "ai-access", "hardware"]
---

The math that makes ChatGPT work doesn't care whether it runs on an H100, a pile of punch cards, or literal ripples in a tub — and sitting with that fact long enough will quietly dissolve most of your assumptions about what "AI" actually is.

I'm not being metaphorical. There are actual demonstrations of mechanical systems — wave interference patterns, physical dominoes, even chemical reaction-diffusion networks — performing operations that are mathematically identical to what happens inside a transformer. Not analogous. Identical. The computation is the same; only the substrate differs.

## The Physics Doesn't Care

At its core, a language model is matrix multiplication, repeated many times. Floating point numbers get combined according to weights, passed through a nonlinearity, and the whole process repeats. That's it. Stripped to the bone, it's an enormous pile of multiply-and-add operations.

There's nothing in those operations that demands silicon. You could implement them with water flowing through channels, with light bouncing through carefully arranged glass, with dominoes — given enough dominoes and enough patience. The physical world is full of systems that can be coerced into computing, and "matrix multiplication" is not a privileged operation that only GPUs are allowed to perform.

Alan Turing understood this. The Church-Turing thesis is exactly this claim: computation is substrate-agnostic. If it can be computed at all, it can be computed by anything capable of universal computation. We've known this since the 1930s. We just forgot to apply it to the thing everyone is suddenly scared of.

## The Real Barrier Is Economics, Not Physics

What separates "industrial AI" from "garage AI" right now is not some fundamental physical wall. It's money and time.

An H100 runs a forward pass through a large model in milliseconds because it can do trillions of floating point operations per second. A mechanical computer made of water wheels and gears could run the same forward pass — in, say, a geological epoch. The math is the same. The throughput is not.

But here's what I've been thinking about: that gap is not fixed. And the direction of movement is not symmetric.

On one side, hardware efficiency keeps improving. Quantization — reducing model weights from 32-bit floats down to 4-bit integers, or even 1-bit — dramatically cuts the compute required without catastrophically hurting quality. Models are getting smaller and faster at inference. The minimum hardware requirement to run a useful language model has dropped by several orders of magnitude in three years.

On the other side, novel substrates are getting more capable. Optical computing, analog computing, neuromorphic chips — these are real research areas with real funding and real results. Some of them can perform matrix operations at fractions of the energy cost of digital silicon. The competitive moat that Nvidia currently holds is real, but it's a moat around one particular way of doing the computation, not around the computation itself.

## Why This Should Bother You (In a Good Way)

When I say this "should bother you," I don't mean it should scare you. I mean it should interrupt the comfortable narrative that AI is this special, contained thing that only exists inside giant data centers controlled by a handful of companies.

The idea that you need a $30,000 GPU cluster to run intelligence is load-bearing for a lot of current thinking about AI governance, AI access, and who gets to build with AI. If inference gets cheap enough — really cheap, in the way that storage got cheap, in the way that networking got cheap — most of those arguments dissolve. Not all of them. But most.

In my experience, the things that look like fundamental limits in technology are usually economic limits wearing physics clothes. "You can't do X without Y" almost always means "doing X without Y is currently impractical at the price point and timescale people expect." That's a very different claim.

## The Bucket of Water, Seriously

There's a specific flavor of discomfort that comes from realizing an idea you thought was exotic and high-tech is actually substrate-neutral. Nuclear weapons feel special until you understand that the physics is just ordinary particle interactions at scale. Consciousness feels special until you sit with the possibility that it might be what certain kinds of information processing feel like from the inside.

LLMs feel special — centralized, powerful, dangerous, expensive — until you realize that the math they're running is, in principle, implementable in a bucket of water with the right wave patterns.

That doesn't make them less interesting. It makes them more interesting. It means the thing we're actually building isn't a piece of industrial hardware. It's a form of computation that the physical world has always been capable of. We just found an efficient way to ask it.

I don't know exactly what follows from that. But I think it's worth sitting with before deciding you understand what AI is, where it can exist, or who gets to have it.

---

## Sources

- [This 22-Year-Old Builds Semiconductors in His Parents' Garage](https://hardware.slashdot.org/story/22/01/23/238228/this-22-year-old-builds-semiconductors-in-his-parents-garage) — *research_report*
- [Reservoir computing - Wikipedia](https://en.wikipedia.org/wiki/Reservoir_computing) — *research_report*
- [Spreadsheets are all you need: GPT2 in your browser](https://spreadsheets-are-all-you-need.ai/gpt2/) — *research_report*
- [An introduction to reservoir computing](https://arxiv.org/html/2412.13212v1) — *research_report*
- [GPT-2 Wikipedia](https://en.wikipedia.org/wiki/GPT-2) — *research_report*
- [Sam Zeloof: Who Needs a Cleanroom When You Have a Garage?](https://community.cadence.com/cadence_blogs_8/b/breakfast-bytes/posts/samzeloof) — *research_report*
- [Reducing Energy Footprint of LLM Inference Through FPGA-Based Heterogeneous Computing](https://www.mdpi.com/2079-9292/15/5/1052) — *research_report*
- [Magnetic-core memory - Wikipedia](https://en.wikipedia.org/wiki/Magnetic-core_memory) — *research_report*
- [Pneumatic Logic Gates Made With Simple Tools](https://www.instructables.com/Pneumatic-Logic-Gates-Made-With-Simple-Tools/) — *research_report*
- [BitNet Explained: Why 1-Bit AI Models Matter for Local AI Workflows](https://www.junia.ai/blog/bitnet-1-bit-model-local-ai-workflows) — *research_report*
- [LLM Weights Context and Memory Explained Simply](https://medium.com/@tahirbalarabe2/llm-weights-context-and-memory-explained-simply-03685b6789c0) — *research_report*
- [Oral discussion Report: BitNet 1.58-bit LLM and RVV Hardware Acceleration](https://hackmd.io/@yenpo5678/ryDQmK54Zx) — *research_report*
- [Reservoir Computing as a Language Model](https://arxiv.org/html/2507.15779v3) — *research_report*
- [Sam Zeloof Wikipedia](https://en.wikipedia.org/wiki/Sam_Zeloof) — *research_report*
- [The Great Squeeze - Understanding LLM Information Density](https://dentro.de/ai/blog/2025/12/20/the-great-squeeze---understanding-llm-information-density/) — *research_report*
- [Physical reservoir computing: a tutorial](https://eprints.whiterose.ac.uk/id/eprint/219817/1/s11047-024-09997-y.pdf) — *research_report*
- [An Analog Approach to Nonlinear Classification Using Trainable Perceptron Circuits](https://www.instructables.com/An-Analog-Approach-to-Nonlinear-Classification-Usi/) — *research_report*
- [Optical computing - Wikipedia](https://en.wikipedia.org/wiki/Optical_computing) — *research_report*
- [Unweight: how we compressed an LLM 22%](https://blog.cloudflare.com/unweight-tensor-compression/) — *research_report*
- [BitNet b1.58 - Achieved accuracy better than Llama](https://ai-scholar.tech/en/articles/large-language-models/BitNet1-58b) — *research_report*
- [The Zeloof Z2 Integrated Circuit Has 1,200 Transistors](https://hackaday.com/2021/08/14/the-zeloof-z2-intergrated-circuit-has-100-transistors/) — *research_report*
- [What is GPU Memory and Why it Matters for LLM Inference](https://www.bentoml.com/blog/what-is-gpu-memory-and-why-it-matters-for-llm-inference) — *research_report*
