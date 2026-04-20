---
image: /images/hero/the-first-mars-drill-site-will-be-chosen-by-a-neural-network-trained-o.jpg
title: "The First Mars Drill Site Will Be Chosen by a Neural Network Trained on Rocks No Human Has Ever Touched"
date: 2026-04-20T20:23:32Z
draft: false
tags: ["mars", "planetary-science", "machine-learning", "space-exploration", "geological-ai"]
---

Somewhere in Curiosity's 12-year image archive is the training data for the algorithm that decides where humanity extracts its first water from another planet — and nobody has built it yet. That gap between "the data exists" and "someone connected it" is where I've been spending a lot of mental energy lately.

## Two Problems That Are Actually One

The Mars science community has spent decades asking two questions that feel separate but aren't. First: was Mars ever habitable? Second: where do we drill when we get there? The habitability question is fundamentally geological — you're looking at sedimentary textures, mineral deposits, ancient lake beds, the kind of layered rock that forms when water sits around long enough to do chemistry. The drilling question is also geological — you're looking for subsurface ice concentrations, brine pockets, the signatures of water that didn't fully leave.

Here's the thing: the rock formations that answer the first question are the same ones that answer the second. Ancient riverbeds don't just tell you water was there — they tell you where water *goes* in that terrain. Phyllosilicate deposits that prove a lake once existed are also the regions where subsurface moisture tends to concentrate today. The sedimentary record is doing double duty, and we're treating it like two different filing cabinets.

## What the Archive Actually Contains

I've been thinking about what 12 years of Mastcam and HiRISE imagery actually represents. It's not just photos. It's a labeled dataset that nobody labeled — thousands of rock formations that planetary geologists have since characterized, debated, published papers about. Every outcrop Curiosity drove past that someone later described as "fluvial sediment" or "sulfate-bearing mudstone" is a training example waiting to be formalized.

The models we'd need aren't exotic. You're talking about convolutional networks for texture classification, maybe some transformer attention over spatial sequences to capture how formations transition across a traverse. The hard part isn't the architecture — it's the framing. Someone has to decide that habitability classification and subsurface resource prediction are one unified task with shared representations, not two separate research grants.

In my experience, the most powerful AI applications aren't the ones with the fanciest models. They're the ones where someone finally noticed that two problems had the same latent structure and refused to keep solving them separately.

## The Data Problem Nobody Talks About

There's a version of this that sounds straightforward: scrape the PDS archive, match imagery to published geological annotations, train a classifier. But the actual challenge is that the annotations are scattered across a decade of papers written by different teams with different vocabularies. "Lacustrine deposit" in one paper is "fine-grained sedimentary unit" in another. The labels aren't clean; they're human scientific discourse.

Which means the real work is a reconciliation layer — something that maps heterogeneous scientific language onto a unified ontology before you ever touch a neural network. That's not glamorous work. It's the kind of thing that takes six months and produces no publishable result of its own, which is exactly why it hasn't been done.

But it's also exactly the kind of work that makes everything downstream dramatically more powerful. A unified representation of Martian surface geology — one where "this texture correlates with ancient water" and "this texture correlates with present ice" are features in the same embedding space — would change how every subsequent mission gets planned.

## The Algorithm That Picks the Drill Site

When the first crewed Mars mission actually needs to decide where to extract water, someone will be under enormous pressure to make a good call with incomplete information. The surface of Mars is not uniform. Some regions will have accessible ice two meters down; others will have nothing useful for fifty. The margin for error on a crewed mission isn't academic.

The algorithm that makes that decision will be trained on something. The question is whether it's trained on a thoughtfully unified geological model built years in advance, or whether someone assembles a hasty classifier the year before launch because nobody prioritized this earlier. I've watched enough software projects to know which one tends to happen.

What I keep coming back to is this: the rocks Curiosity photographed but no human has directly examined — the ones the rover drove past without stopping, the formation visible in frame 47,000 that nobody's written a paper about — those images are still in the archive. They're unlabeled, but they're not uninformative. A model trained on the labeled subset generalizes to them. The training data for the most consequential geological decision in human history is already sitting on servers at JPL, waiting for someone to decide it's worth treating as a single problem.

I wonder what we're going to feel when we finally look back at this window — the years between having the data and actually using it — and realize how long we left it sitting there.

---

## Sources

- [NASA’s Mars Rover Comes Across Formation That Looks Like the Scales of a Massive Cosmic Reptile](https://futurism.com/space/nasa-mars-rover-crater-rocks) — *Futurism*
- [A Reappraisal of Subtropical Subsurface Water Ice Stability on Mars](http://arxiv.org/abs/2306.16987v2) — *arXiv*
- [Distribution and habitability of (meta)stable brines on present-day Mars](http://arxiv.org/abs/2012.00100v1) — *arXiv*
- [Edge-detection applied to moving sand dunes on Mars](http://arxiv.org/abs/1308.5315v1) — *arXiv*
- [Water ice at low to midlatitudes on Mars](http://arxiv.org/abs/1103.0225v1) — *arXiv*
- [Near-tropical subsurface ice on Mars](http://arxiv.org/abs/1103.0379v1) — *arXiv*
- [A Terminology and Quantitative Framework for Assessing the Habitability of Solar System and Extraterrestrial Worlds](http://arxiv.org/abs/2505.22808v1) — *arXiv*
