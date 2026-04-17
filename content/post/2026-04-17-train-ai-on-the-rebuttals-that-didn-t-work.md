---
image: /images/hero/train-ai-on-the-rebuttals-that-didn-t-work.jpg
title: "Train AI on the Rebuttals That Didn't Work"
date: 2026-04-17T15:57:47Z
draft: false
tags: ["ai-training", "peer-review", "epistemology", "paradigm-lock", "reasoning"]
---

Every researcher who has written a meticulous, airtight rebuttal and watched their score stay flat has generated the most valuable training signal in science—and nobody is using it.

I've been thinking about this for a while. The academic review process produces this strange artifact: a document where someone makes a genuinely good argument, the argument goes nowhere, and then the whole exchange gets buried in a conference management system forever. We treat it as failure. We should treat it as data.

## The Gap Between Norms and Behavior

Fields have official epistemology and actual epistemology, and they're rarely the same thing. The official line in machine learning, say, is that empirical results on held-out benchmarks are what matter. The actual behavior, frequently, is that reviewers respond to whether a paper fits a certain aesthetic—does it have a clean story, does it cite the right lineage, does it feel like the kind of thing this community produces. These aren't the same criterion.

A failed rebuttal is a precise instrument for measuring that gap. When a reviewer says "the results don't generalize" and you come back with three ablations, two additional datasets, and a theoretical bound—and the score doesn't move—something real just happened. The reviewer's stated objection was answered. The *actual* objection wasn't. That delta is information.

The problem is we've never treated it as such.

## What You'd Actually Be Training On

Imagine you assembled a dataset not of papers and their reviews, but of rebuttals and the delta they caused. A rebuttal that moved a score upward tells you what arguments this community accepts as valid. A rebuttal that didn't move anything—especially a technically strong one—tells you something more interesting: what arguments this community officially *should* accept but practically doesn't.

Fine-tune a model on that gap and you're doing something different than fine-tuning on the successful cases alone. You're teaching it the shape of paradigm lock-in. You're showing it where a field's stated values and revealed values diverge. That's not a bug in the training signal. That's the signal.

Most of our alignment and reasoning work goes in the opposite direction—we try to get models to agree with human judgment, to be calibrated to human preferences, to score well on the things humans say they value. But human judgment in any sufficiently mature field is systematically biased toward whatever got the field to where it is now. A model trained purely on what worked will get very good at working within a paradigm. It will be useless at questioning one.

## The Deeper Problem With How We Train Reasoning

I've noticed that the models I use most are excellent at explaining established ideas and weak at generating friction against them. If I ask a model to steelman a heterodox position, it'll do a decent job, but there's something a little rote about it. It's learned the form of "here's a counterargument" without having internalized the *feeling* of being right and unheard.

That sounds like a strange thing to want to train into a machine. But it's actually just epistemic robustness. A reasoner that can only operate within accepted frames isn't a reasoner, it's a very fast librarian. The whole point of having AI that can help with hard intellectual problems is that it should be capable of noticing when the consensus is wrong—or at least, when the consensus is drifting away from its own stated values.

The failed rebuttal dataset is a map of exactly those moments. It's a corpus of "here is a good argument, and here is the institutional immune response to it." That's genuinely rare. We have plenty of data about what arguments succeeded. We have almost no curated data about which good arguments lost anyway, and why.

## Why This Is Hard and Worth Doing

The practical obstacles are real. Conference rebuttal data is locked in systems like OpenReview or HotCRP, inconsistently formatted, and often deeply context-dependent. You'd need to reconstruct the review, the rebuttal, the final decision, and ideally the area chair's reasoning. You'd need enough metadata to cluster by field and paradigm, not just by topic.

And then there's the philosophical question: are you trying to train a model that's better at persuading reviewers, or one that's better at knowing when a reviewer is wrong? Those require different labels, different reward signals, maybe different architectures. The second one is harder. It's also the one that matters.

In my experience, the most valuable intellectual resource in any field isn't the papers that got accepted—it's the arguments that were right but went nowhere. Science publishes its wins. Its losses are harder to find and more instructive.

The question I keep sitting with: if we built a model that was good at recognizing when a field is defending itself rather than evaluating evidence—would we actually want to use it?

---

## Sources

- [GoodPoint: Learning Constructive Scientific Paper Feedback from Author Responses](https://arxiv.org/abs/2604.11924) — *arXiv · AI*
- [The Non-Optimality of Scientific Knowledge: Path Dependence, Lock-In, and The Local Minimum Trap](https://arxiv.org/abs/2604.11828) — *arXiv · AI*
- [The Uses of Argument in Mathematics](http://arxiv.org/abs/math/0504090v1) — *arXiv*
- [Large Language Models Reasoning Abilities Under Non-Ideal Conditions After RL-Fine-Tuning](http://arxiv.org/abs/2508.04848v1) — *arXiv*
- [Making Large Language Models Better Reasoners with Alignment](http://arxiv.org/abs/2309.02144v1) — *arXiv*
- [Does My Rebuttal Matter? Insights from a Major NLP Conference](http://arxiv.org/abs/1903.11367v2) — *arXiv*
