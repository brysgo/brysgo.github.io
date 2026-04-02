---
image: /images/hero/you-didn-t-get-hacked-you-delegated-trust-to-a-stranger-and-they-got-h.jpg
title: "You Didn't Get Hacked. You Delegated Trust to a Stranger and They Got Hacked."
date: 2026-04-02T12:00:00Z
draft: false
tags: ["technology", "ai", "future"]
---

---

Axios has 50 million weekly downloads. Most of those developers couldn't tell you who maintains it, where they live, or whether they use 2FA on their npm account. That's not a criticism — I couldn't tell you either. I use it constantly. The point is that we've made a quiet, collective decision to trust a name in a `package.json` the same way we trust a light switch: we flip it, it works, we move on.

And then one day it doesn't work in the way you hoped — not a bug, but a backdoor. And we call it "getting hacked."

## The Problem Isn't Supply Chains, It's Trust Accounting

When a malicious package slips into a popular library and ends up running in millions of production environments, the framing we reach for is usually some variant of "the software supply chain is broken." That's technically true but analytically useless. It describes the pipe that failed without asking why we were drinking from it in the first place.

The better frame is accounting. Every `npm install` is a trust transaction. You are extending trust to a maintainer, their infrastructure, their OpSec habits, their judgment about what packages *they* depend on, and so on, recursively, all the way down. At each layer, that trust gets diluted and distributed among people you've never heard of. The ecosystem that makes it possible to build a full-stack app in an afternoon is also an ecosystem where a single compromised account — someone you've never met, using a password from a 2019 data breach — can push malicious code to tens of thousands of dependents overnight.

We've been running a massive trust deficit for years and calling it developer productivity. Those aren't opposites, but they're not the same thing either.

## What "Transitive Dependency" Really Means

I've been thinking about this more carefully lately, and I think the phrase "transitive dependency" is doing a lot of work to obscure something important. When people say it, they usually mean: a package your package depends on. Technically accurate. But what it *actually* means, in terms of trust, is: a stranger your stranger trusts.

Your package trusts `axios`. `axios` trusts `follow-redirects`. `follow-redirects` is maintained by one person. That one person's account security is now load-bearing infrastructure for millions of applications. This isn't hypothetical — `follow-redirects` had a real vulnerability in 2024 that propagated exactly this way.

The dependency graph of a typical Node.js application isn't a bill of materials. It's a social graph. And like most social graphs, it contains a lot of people you've never vetted, connected by relationships you never examined, with access to things you care about deeply.

## Why We Got Here

In my experience, this didn't happen because developers are careless. It happened because the incentives were almost perfectly designed to produce this outcome.

Open source rewards shipping. Stars, downloads, adoption — these are the metrics that matter in the ecosystem, and they accrue to people who publish useful things, not people who carefully audit what they depend on. The tooling made adding a dependency faster than writing the code yourself, which is often the right call. And for years, the attacks were rare enough that the risk felt abstract.

There's also a psychological mechanism at play. When you install a package with 50 million weekly downloads and a green badge from a major company using it, it feels like due diligence has been done. Somewhere. By someone. The numbers are proxy trust signals, and they work — until they don't, because what they actually measure is popularity, not security hygiene.

## The Accounting Fix Nobody Wants to Do

The actual fix isn't more CVE scanners or dependency bots, though those help at the margins. It's doing the trust accounting honestly. That means asking not just "does this package have known vulnerabilities?" but "do I understand who controls this code, under what conditions, with what access controls?"

That's a much harder question. For most projects, answering it fully would be paralyzing — the average Node application has hundreds of transitive dependencies. But there's a version of this that's tractable: being explicit about where your *direct* trust boundary sits, auditing the ten or twenty packages that are truly load-bearing for your application, and treating those the way you'd treat a vendor with production database access. Because that's effectively what they have.

Some teams are starting to vendor critical dependencies — copying them into the repo, owning the update cycle deliberately. It's tedious. It feels like going backwards. But it's also an honest acknowledgment that "install and forget" was never actually a security posture.

## The Deeper Question

What I keep coming back to is this: the open source ecosystem is one of the genuine wonders of the software world. The leverage it provides is extraordinary. I'm not arguing against using it. I'm arguing for being honest about what we're doing when we use it.

Every dependency is a delegation of trust. Most of the time, that trust is well-placed, and the whole thing works beautifully. But when something goes wrong, the right question isn't "how did we get hacked?" It's "to whom did we delegate trust, and did they deserve it?"

I'm not sure most of us can answer that question about our own production systems right now. I'm not sure I can. And I think that's worth sitting with.
