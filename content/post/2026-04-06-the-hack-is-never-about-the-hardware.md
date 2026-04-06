---
image: /images/hero/the-hack-is-never-about-the-hardware.jpg
title: "The Hack Is Never About the Hardware"
date: 2026-04-06T12:00:00Z
draft: false
tags: ["technology", "ai", "future"]
---

A guy on the internet turned his MacBook into a touchscreen using a $1 infrared sensor, some tape, and a weekend. The comments, predictably, exploded. People called it genius. People called it cursed. A few people asked why Apple doesn't just do this. That last question is the interesting one — and the answer has nothing to do with hardware.

## The Dollar Part Isn't the Story

The technical trick here is almost beside the point. An infrared sensor bounces a grid of invisible light across the screen surface; when your finger breaks the beam, software translates that position into a touch event. It's not elegant. It adds latency. It has edge cases Apple's engineers would never ship. But it *works*, and it works for roughly the cost of a pack of gum.

When I see something like this, my first instinct isn't admiration for the cleverness — it's suspicion about the constraint. Because when a hobbyist solves a "hard" problem with embarrassingly cheap parts, that's usually a signal. It means the hardness wasn't really physical. It was institutional.

## Artificial Scarcity Is a Business Model

Touch support on macOS laptops has been conspicuously absent for years. Apple's official position has been something like: *touch doesn't make sense on a laptop, ergonomically speaking.* And there's truth in that — reaching up to tap a vertical screen is fatiguing. But that's a UI argument, not a hardware argument. The hardware has been trivially possible for a long time.

What's actually happening is a product segmentation decision dressed up as a design philosophy. Touch goes in iPads. Keyboards and trackpads go in MacBooks. The two product lines are kept separate because mixing them cannibalizes margin. This is rational business behavior. It is not, however, a law of physics.

I've been thinking about this pattern a lot lately, because it keeps showing up everywhere once you start looking for it. The expensive HDMI cable that performs identically to the cheap one. The "premium" software feature that's a configuration flag behind a paywall. The medical device that costs $40,000 in the US and $400 in a country where the manufacturer faces real pricing pressure. In each case, the scarcity is constructed. The price is a policy, not a cost.

## When the Curtain Drops

What makes the MacBook touchscreen hack culturally interesting is the moment it creates: a moment where the constructed nature of the constraint becomes visible. The emperor isn't naked exactly, but you can suddenly see the seams in the costume.

This happens more and more as the tools for building things get cheaper and more powerful. A solo developer in a weekend can now replicate features that took enterprise software teams years to ship. A teenager with a 3D printer can manufacture parts that used to require a machine shop. And a person with a $1 sensor and a GitHub repo can expose the gap between "this is technically hard" and "this is something we've decided not to do."

The gap, once visible, is hard to unsee. And institutions that have built business models on keeping it invisible are in a genuinely precarious position — not because anyone is attacking them, but because the physics keep getting cheaper.

## The Part I Find Most Interesting

In my experience building software, the hardest problems are rarely technical in the way they appear from the outside. The hard parts are almost always about coordination, incentives, and who controls the constraint. A codebase that looks impenetrable is usually that way because of organizational structure, not complexity. A feature that "can't be done" often means it can't be done *under the current priorities and business model*.

This is why I pay attention when someone does a thing cheaply that was supposedly expensive. Not because I want to shame the institution that charged more — sometimes there are real reasons for the cost differential, even if they're not obvious. But because it's diagnostic. It tells you something about where the real leverage is.

The MacBook touchscreen guy didn't change the hardware industry. He probably won't. But he made something legible that was previously obscured: the distance between what's physically possible and what we're allowed to have, and who benefits from maintaining that distance.

## The Question I Keep Sitting With

As AI compresses more of the cost of building things — writing code, generating designs, synthesizing research — I keep wondering which constraints will fall next, and how fast. Which expensive things will turn out to have been expensive because of physics, and which will turn out to have been expensive because of policy?

And maybe more importantly: when those constraints drop, who's paying attention?
