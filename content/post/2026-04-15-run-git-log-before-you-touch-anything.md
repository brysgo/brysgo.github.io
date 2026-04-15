---
image: /images/hero/run-git-log-before-you-touch-anything.jpg
title: "Run `git log` Before You Touch Anything"
date: 2026-04-15T22:53:31Z
draft: false
tags: ["git", "software-engineering", "epistemology", "ai-cognition", "history"]
---

The first thing I do when I open an unfamiliar codebase isn't read the code — and that instinct turns out to be the same thing ancient DNA in salt crystals and AI-decoded alphabets are quietly proving about every knowledge system humans have ever built.

When I sit down with a repo I've never touched, I run `git log`. Not to judge the commit messages (though you learn a lot from those too). I run it because the current state of the code is a snapshot, and snapshots lie. They show you what someone decided, not why, not what they tried first, not what they burned down to get here. The diff history is where the actual reasoning lives.

This sounds like a software habit. It's actually a philosophy.

## The State You're Looking At Was Not Designed to Explain Itself

Here's the thing about any sufficiently complex system: it accumulates decisions faster than it accumulates explanations for those decisions. By the time you arrive, you're looking at a palimpsest — layer on layer of choices made by people who understood a context that no longer exists. The code compiles. The tests pass. And you have almost no idea why any of it is shaped the way it is.

Most engineers skip this step. They read the current state, form a model of the system based on what they see, and start making changes. Sometimes it works. But I've watched smart people confidently refactor code that looked redundant, only to discover three weeks later that the "redundancy" was load-bearing — protecting against an edge case that some long-departed engineer had encountered, silently, in production, and fixed without ceremony.

The history knew. Nobody asked it.

## What Ancient Salt Crystals and Lost Alphabets Have in Common

I've been thinking about this a lot lately because of two completely unrelated things that happened in the same month.

Researchers extracted and sequenced microbial DNA from 250-million-year-old salt crystals. The organisms were dormant, not dead — their genetic code preserved like a commit that was never reverted. What they found wasn't just biology; it was a record of environmental conditions, evolutionary pressures, and metabolic strategies that modern organisms have no obvious reason to still carry. To understand what current life is doing, you have to read the diff.

At almost the same time, AI systems cracked a set of ancient scripts that human linguists had been stuck on for decades. Not because the AI was smarter about language — but because it had no prior assumptions about what the script *should* mean. It could treat the problem as pure pattern-matching across a massive historical corpus, without the cognitive overhead of "this looks like it should work like a Semitic alphabet." The systems that failed were the ones that started with a model of the current state and tried to reverse-engineer history from it. The ones that succeeded started with the history and let the current state emerge.

Both stories are about the same mistake: assuming the thing in front of you is self-explanatory.

## Every Discipline That Skipped the History Is Getting Corrected

In my experience, this isn't a software problem. It's a human problem that shows up everywhere software shows up, which is now everywhere.

Economics does it. You get a snapshot of market behavior and build models that treat it as normal, stable, and comprehensible without asking how you got here. Then something "unprecedented" happens — something that wasn't unprecedented at all in 1873, or 1929, or in every 50-year credit cycle that anyone who read the git log would have recognized.

Medicine does it. You get a patient presenting with a current state — symptoms, labs, vitals — and there's enormous pressure to treat the snapshot rather than the history. The EMR has the history. Nobody has time to read it.

Organizations do it constantly. The process that looks bizarre and bureaucratic almost always made sense once. Someone got burned. The rule exists because of a scar. Strip it away without reading the log, and you'll make the same mistake again, but faster, and at scale.

What I find genuinely interesting is that machines are now the ones forcing this reckoning. Not because AI is wise about history, but because it's indifferent to the assumption that current state is normal. When a language model analyzes a legal corpus, it doesn't assume that current case law is self-evidently correct — it sees it as one point in a long sequence. When a genomics model looks at a protein, it doesn't assume the structure evolved for the reason that seems most obvious today. The lack of priors isn't a bug. It's what lets the machine actually read the log.

## What This Costs

The reason people skip `git log` — the reason disciplines skip their own history — is that reading it is slow and often disorienting. You find out that the thing you were about to do was tried before. You find out it failed, or that it worked but was reverted for political reasons, or that it was never properly finished. You lose the clean confidence of working from a blank slate.

But the blank slate is fiction. It was always fiction. Every codebase, every organism, every institution arrived at its current state through a sequence of choices made under constraints that no longer appear in the current view.

The question I keep sitting with is this: if the systems we're building are going to be smarter than we are at reading history, what does that mean for the humans who still insist on starting from what they can see right now?

---

## Sources

- [Git commands I run before reading any code](https://piechowski.io/post/git-commands-before-reading-code/) — *Hacker News*
- [Why the US needs a unified, mission-based strategy for health innovation](https://www.nature.com/articles/d41586-026-01027-4) — *Nature News*
- ['We are living with disinformation. We are not going to eradicate it,' global expert argues](https://phys.org/news/2026-04-disinformation-eradicate-global-expert.html) — *Phys.org*
- [Ancient alphabets, new insights: Researchers uncover hidden links among the letters](https://phys.org/news/2026-03-ancient-alphabets-insights-uncover-hidden.html) — *Phys.org*
- [The time capsule in the salt flat](https://phys.org/news/2026-03-capsule-salt-flat.html) — *Phys.org*
- [Unbiased Cultural Transmission in Time-Averaged Archaeological Assemblages](http://arxiv.org/abs/1204.2043v2) — *arXiv*
- [IPPOG : Bridging the gap between science education at school and modern scientific research](http://arxiv.org/abs/2011.14743v1) — *arXiv*
- [Permanent Data Encoding (PDE): A Visual Language for Semantic Compression and Knowledge Preservation in 3-Character Units](http://arxiv.org/abs/2507.20131v1) — *arXiv*
- [Collective Memory in the Digital Age](http://arxiv.org/abs/2207.01042v1) — *arXiv*
- [A Novel Approach to Analyze Fashion Digital Archive from Humanities](http://arxiv.org/abs/2107.08351v2) — *arXiv*
- [Historical Ink: Semantic Shift Detection for 19th Century Spanish](http://arxiv.org/abs/2407.12852v2) — *arXiv*
