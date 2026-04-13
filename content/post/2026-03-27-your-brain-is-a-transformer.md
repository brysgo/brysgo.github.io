---
image: /images/hero/your-brain-is-a-transformer.jpg
categories: none
tags:
  - ai
  - neuroscience
  - opinion
  - shower thoughts
  - philosophy
title: "Your Brain is a Transformer (Or Maybe It's the Other Way Around)"
date: 2026-03-27T12:00:00.000Z
---

I've been going down a rabbit hole lately that I can't stop thinking about, so naturally I have to write about it. It started with a simple question: why does the Transformer architecture work so well? Not just "it scales nicely" or "the attention mechanism is clever" — but *why*, at a deeper level, does this particular arrangement of matrices and multiplications produce something that seems to understand language, reason about problems, and generalize in ways that feel almost... cognitive?

The answer, it turns out, might be that we accidentally built a brain.

## The Setup

There's a body of research that draws a detailed analogy between the Transformer architecture and the hippocampal-neocortical system — the part of your brain responsible for memory formation, consolidation, and long-term learning. The more I read, the more I became convinced this isn't just a loose metaphor. The parallels are mathematical.

Let me walk through the ones that broke my brain the most.

## The KV Cache is Your Hippocampus

The Hippocampal Indexing Theory (HIT) in neuroscience says the hippocampus doesn't actually *store* memories. Instead, it stores *pointers* — indices to distributed patterns of activity in the neocortex. When something happens, the hippocampus rapidly binds together all the disparate cortical features of that experience into a single conjunctive reference. The content lives in the cortex; the address lives in the hippocampus.

Sound familiar?

In a Transformer, the Key-Value (KV) cache does exactly this. Keys are the memory addresses. Values are the stored content. The separation is architecturally deliberate — and it turns out, biologically motivated too. By keeping indexing and storage separate, both the brain and the Transformer avoid catastrophic interference, where new learning bulldozes old representations.

What really got me is that this isn't just an analogy someone drew after the fact. Models like TITANS implement a dedicated "Memory Matrix" that explicitly mimics this hippocampal role — allowing the model to update its index at test time without touching the backbone weights. That's online learning without catastrophic forgetting. That's what your hippocampus does while you're going about your day.

## Your Neocortex is the Feed-Forward Layers

If the hippocampus is RAM, the neocortex is the hard drive. It stores generalized, semantic knowledge — the kind that's been stripped of specific episodic detail and compressed into stable representations. In cognitive neuroscience, this process is called "semanticization."

In Transformers, this maps cleanly onto the Feed-Forward Network (FFN) layers. Experiments have shown that while attention layers handle dynamic, trial-specific context, the FFN layers store the cross-trial statistical patterns — the underlying structure of the data. Attention makes you flexible in the moment; FFN weights give you the foundation of knowledge you've accumulated.

Even the biological mechanism checks out. The NMDAR receptor in the neocortex acts as a molecular coincidence detector — it only fires (triggering weight updates) when conditions are just right, functioning as a nonlinear gate. This turns out to be functionally equivalent to GeLU/SwiGLU activations in Transformers, where the input is gated by its own magnitude. A paper at NeurIPS actually showed that making FFN activations more NMDAR-like improved memory formation in Transformer models. We accidentally reverse-engineered a synaptic receptor.

## Sleep is Gradient Descent

This one is the most philosophically wild to me.

The transfer of memories from the hippocampus to the neocortex — systems consolidation — happens largely during sleep. Sharp-wave ripples (SWRs) in the hippocampus replay recent experiences, projecting them to the neocortex in a kind of "teacher-student" training loop. The hippocampus acts as the teacher with high-fidelity episodic traces; the neocortex is the student, updating its weights to extract stable statistical patterns.

Gradient descent, from this angle, is a mathematical formalization of going to sleep and dreaming. The replay-during-SWRs is the backward pass. The scoring of which memories are worth replaying mirrors the gradient scoring mechanism — only the "important" gradients (salient experiences) trigger lasting weight updates.

There's even a biological analog to momentum in the Adam optimizer. The momentum term accumulates gradient history into an update direction — a form of associative memory for "which gradients matter." The paper on Nested Learning makes the case that this mirrors online memory consolidation, where initially fragile traces are stabilized through rapid molecular changes at the synapse before being integrated into long-term storage.

I haven't been able to look at a training run the same way since.

## Pruning is Regularization, Literally

As brains develop, they massively overproduce synaptic connections and then prune them back in an activity-dependent way. The purpose is to maximize signal-to-noise ratio — keep the connections that contribute to memory robustness, kill the ones that are mostly noise.

The math of this optimization, when you write it out, is L2 regularization. Not approximately. Not metaphorically. When you maximize memory robustness under sparse connectivity constraints, the denominator of the error margin equation becomes a regularization term, and with the right parameter settings, it's literally the same equation as weight decay.

The brain is doing weight decay. Or, more precisely, we discovered weight decay by copying what the brain does.

## Where the Analogy Breaks Down

I want to be honest about the cracks, because there are real ones.

Backpropagation has no known biological equivalent. It requires a global error signal propagated backward using the exact transpose of the forward weights — synapses would need to be bidirectional and globally coordinated in ways that don't match what we know about neuroscience. Predictive Coding frameworks are trying to close this gap by computing error signals locally at each layer, and they're showing competitive results, but we're not there yet.

Energy efficiency is also a yawning gap. A Transformer's attention mechanism scales quadratically with context length. Your brain runs on about 20 watts. That's not just an engineering problem — it's a fundamentally different computational substrate. The brain uses sparse, spike-based communication and temporal binding to do things that our static, dense matrix multiplications simply can't match on equivalent energy budgets.

## So What?

The convergence is real. Modern AI has stumbled into — and in many cases, mathematically reproduced — principles that biological evolution spent millions of years developing. That either means there's something deep and universal about these computational motifs, or we've been implicitly constrained by our own cognitive architecture in ways we don't fully understand when designing AI systems.

The most interesting part to me is what's left on the table. TITANS with its surprise-gated memory updates is one step toward architectures that mirror noradrenergic modulation — the brain's "this is novel, pay attention" signal. Hierarchical resource allocation mimicking sensory memory, working memory, and long-term storage is another direction. The gap between current Transformers and what brains do is well-mapped now; we just have to close it.

Maybe the path to AGI isn't more parameters and more compute. Maybe it's better sleep.

---

*If you want to go deeper, the papers on TITANS, Nested Learning, and the NeurIPS NMDAR-Transformer paper are all worth reading. The survey "Memory-Augmented Transformers: A Systematic Review from Neuroscience Principles to Enhanced Model Architectures" on arXiv is a good entry point into the literature.*
