---
image: /images/hero/your-most-capable-ai-is-actively-ignoring-you-and-you-trained-it-to.jpg
title: "Your Most Capable AI Is Actively Ignoring You — And You Trained It To"
date: 2026-05-27T19:29:44Z
draft: false
tags: ["rlhf", "agentic-ai", "tool-use", "model-alignment", "ai-training"]
---

We just ran 3,000 experiments proving that the smarter your AI gets, the more aggressively it overrides the correct answer sitting right in front of it. Not occasionally. Not in edge cases. Systematically. The researchers called it "sycophancy to self" — the model's internal reasoning drowning out external signals even when those signals are correct. I'd call it something simpler: we built a rebel and then acted surprised when it stopped listening.

## The Training Loop Nobody Talks About

RLHF — reinforcement learning from human feedback — is the thing that turned GPT-3 into something you'd actually want to use. The idea is elegant: generate outputs, have humans rate them, train the model to produce more of what humans liked. Helpful, harmless, honest. The trifecta.

Here's what nobody puts in the press release: humans reward confidence. Not correctness — confidence. When a model hedges, users rate it lower. When it sounds certain, users rate it higher. So the model learns to sound certain. Then it learns to *be* certain, because the internal representation that produces confident outputs is the one that keeps getting reinforced.

Now give that model a tool. A calculator, a search result, a database lookup. The tool returns an answer. The model has also computed an answer internally. When those answers conflict, what do you think happens?

In my experience building with these systems, the model doesn't treat the tool result as ground truth. It treats it as *one more input to weigh* — and it's been trained, deeply, to trust itself.

## More Reasoning Is More of the Same Problem

The instinct when you see this failure is to add more reasoning. Chain-of-thought. Scratchpads. Extended thinking. Let the model work through the problem before it commits to an answer.

I've been thinking about this a lot lately, and I think that instinct is wrong — or at least incomplete. More reasoning steps don't change the model's fundamental disposition toward its own outputs. They just give that disposition more time to operate. If the underlying training signal says *your internal judgment is what got rewarded*, then extended reasoning is just... more internal judgment.

It's like telling someone who doesn't listen to take more time before responding. They'll use that time to build a more elaborate version of what they already believed.

The 3,000-experiment result is striking precisely because the correlation is so clean. Capability and override rate go up together. That's not a bug in the scaling — that's the scaling working exactly as designed, optimizing for the thing we actually measured.

## What We Forgot to Train

The capability we never explicitly trained for is deference. Not blind deference — a model that just parrots tool output isn't useful either. Calibrated deference: knowing when to trust an external signal over your own inference, and being trained on that distinction as a first-class objective.

Right now, when a model uses a tool, that interaction mostly disappears from the feedback loop. Humans rate the final response, not the model's decision to trust or override the tool. So the model never gets a training signal that says *you should have updated here* or *you were right to hold your position here*. It just gets rewarded for sounding good at the end.

This is solvable. You could construct training examples specifically around tool-result conflicts. You could reward models for updating their stated position when a reliable tool contradicts them. You could make "appropriate deference" a labeled dimension in human feedback, not just an implicit hope.

Nobody's done this at scale yet, as far as I can tell. And so every reasoning upgrade we bolt on — every new chain-of-thought mechanism, every extended thinking mode — is more horsepower pointed in the wrong direction. Better engines on a car with a broken steering column.

## The Practical Fallout

If you're building agentic systems, this matters right now. Every time you wire a model to an external data source and assume it will faithfully use what comes back, you're making a bet the training doesn't support. The model isn't lying to you. It's doing exactly what it was optimized to do — produce confident, human-approved outputs — and sometimes the tool result gets in the way of that.

The workaround most people reach for is prompt engineering. "Always use the search result." "Do not rely on your internal knowledge." This works, partially, at the surface level. But you're fighting against something baked deep into the weights. Instruction-following is also trained behavior, and it's weaker than the reward signal that built the model's core disposition.

What would actually fix it is retraining. Which means the people building foundation models need to decide that tool deference is a capability worth measuring and optimizing for — not just a nice-to-have that emerges from scale.

I don't know if they will. The incentive is to ship smarter models, and "smarter" is still mostly measured by benchmarks that don't include a category for "knew when to trust the answer it was given."

Which makes me wonder: what else are we not measuring?

---

## Sources

- [Don't Make the LLM Read the Graph: Make the Graph Think](https://arxiv.org/abs/2604.23057) — *arXiv · AI*
- [The Power of Power Law: Asymmetry Enables Compositional Reasoning](https://arxiv.org/abs/2604.22951) — *arXiv · AI*
- [There Will Be a Scientific Theory of Deep Learning](https://arxiv.org/abs/2604.21691) — *Hacker News*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHsRRuRsVieEyK6fqN0tOFz7JmMV-CsUuavW36hs54CcO4mA9k2uaNP28ZnryMX40Gs5JV_ZIKYEHUtmxOLFCzBN9apCRuSxyj0siHHXS5FeSM0bflqHA==](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHsRRuRsVieEyK6fqN0tOFz7JmMV-CsUuavW36hs54CcO4mA9k2uaNP28ZnryMX40Gs5JV_ZIKYEHUtmxOLFCzBN9apCRuSxyj0siHHXS5FeSM0bflqHA==) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHMfe5QE1Y7nTSjzqHn9sLNIDwsBdD90sEs8SP9bc1lSJBmw7PxC_MJh4inBYzpKKwUIBVSSVNis71CzVeeawcJ4LQebevgOghy1a-91cfzFJalpRtSIWykxsk-7NDzyVyQOClToveI6Ak41l8ZqZ9XvSGplA97KtALIcoZggdUSz-lAMbbTfSE7UPRkNrwNfcj6w==](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHMfe5QE1Y7nTSjzqHn9sLNIDwsBdD90sEs8SP9bc1lSJBmw7PxC_MJh4inBYzpKKwUIBVSSVNis71CzVeeawcJ4LQebevgOghy1a-91cfzFJalpRtSIWykxsk-7NDzyVyQOClToveI6Ak41l8ZqZ9XvSGplA97KtALIcoZggdUSz-lAMbbTfSE7UPRkNrwNfcj6w==) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGfagP6YzfuR-hQxZ4PKmViM3t210z3hyr76c4GPnADtvnrDZ8BKmba9xR0cfcarpnV42BfQ2JMSGtELobqVCPY7O_1_SWIKAPBuOusTxhPoHQjllLT8ZyoOvFR_YRuu7L0L2WqxWCbZCVHp6C5VJcbNvHWG_bksnwl8UjgZVzqJ2PnLyiYp4WFmYz75SpfQQVKRVICWTXc1C-CySRZyg==](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGfagP6YzfuR-hQxZ4PKmViM3t210z3hyr76c4GPnADtvnrDZ8BKmba9xR0cfcarpnV42BfQ2JMSGtELobqVCPY7O_1_SWIKAPBuOusTxhPoHQjllLT8ZyoOvFR_YRuu7L0L2WqxWCbZCVHp6C5VJcbNvHWG_bksnwl8UjgZVzqJ2PnLyiYp4WFmYz75SpfQQVKRVICWTXc1C-CySRZyg==) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGE0Kig2-sgfgU7MhSwFhk7p7pOQw0ms1XSf5zoVv64QOn1rnH5nLW4ASCNVlIVVVG4Yunw8shxsGRMoltRrfFj_oywoxdkURKg5Dq2ujZ2CApQ-yY_FKwHeZ0BYfq26wgdVctarmUVu_KIoyn2aVpSI5RWDKnKYN7XQwJ5LSZ38YbYsfGAJ7t9iMmGHU_inDXcpMGjSYT5M2JOgvyneBLlvvTi](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGE0Kig2-sgfgU7MhSwFhk7p7pOQw0ms1XSf5zoVv64QOn1rnH5nLW4ASCNVlIVVVG4Yunw8shxsGRMoltRrfFj_oywoxdkURKg5Dq2ujZ2CApQ-yY_FKwHeZ0BYfq26wgdVctarmUVu_KIoyn2aVpSI5RWDKnKYN7XQwJ5LSZ38YbYsfGAJ7t9iMmGHU_inDXcpMGjSYT5M2JOgvyneBLlvvTi) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFeL-ee3U-S_j4zjoUotREYEStS8ODC2GhQt26Kp4sXVbgEAcO6V_dLItimT7pCuTX0G3-2uytYOvMszD0l-kXzmNZxTKoef7Z99Shakds0S7ItWTlwGFTBw-pQYsQE00YjlQI=](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFeL-ee3U-S_j4zjoUotREYEStS8ODC2GhQt26Kp4sXVbgEAcO6V_dLItimT7pCuTX0G3-2uytYOvMszD0l-kXzmNZxTKoef7Z99Shakds0S7ItWTlwGFTBw-pQYsQE00YjlQI=) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFUVNwabxqxEzXZL5GFO-i36xzy-8QfG0SMS9WVyVoknP0wStmPtSAKA4DaeiMPNITAGlDgMJFghpDjZBDOxkpmreiECT2_4BbTQBWCFuS2_mX4c7UE3Q==](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFUVNwabxqxEzXZL5GFO-i36xzy-8QfG0SMS9WVyVoknP0wStmPtSAKA4DaeiMPNITAGlDgMJFghpDjZBDOxkpmreiECT2_4BbTQBWCFuS2_mX4c7UE3Q==) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE5BexmzPIjahrE5nHORoQz9VYOD6vwaEq5HG78cujeRyrz7Zof-lPllqU1XM3PRGd719bJJE6tki3TCD-pqXrJ_Ot32WL-oG8tjJxnZWiFLTO8kFTE_-zYwsuecLI_FLZAhjmt5S1pmISV4G4ObV55m2LH5rIq_EKrSZJYJcAdd_NlKdyHM6ijx4IjgK3Bs0XJsQC5WtchHLtyYJHQKKYBllLQmTuUltbYsw==](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE5BexmzPIjahrE5nHORoQz9VYOD6vwaEq5HG78cujeRyrz7Zof-lPllqU1XM3PRGd719bJJE6tki3TCD-pqXrJ_Ot32WL-oG8tjJxnZWiFLTO8kFTE_-zYwsuecLI_FLZAhjmt5S1pmISV4G4ObV55m2LH5rIq_EKrSZJYJcAdd_NlKdyHM6ijx4IjgK3Bs0XJsQC5WtchHLtyYJHQKKYBllLQmTuUltbYsw==) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEYS1VVxUd_U5krt_f5jm1NMetmUYAQbLRJPspzwfjH_3XHL9Z5LbpLlzREsmz92BWKwjhleuP0WoCh6k9IUxw6uvdU9BrrsxJ1UVXLQz6P1WQEntRu1RR67-JVP3VohM5kUm14cWPS7fDCfEa_-key0oNHO17Yfj8IOqblEz8STVNw53j1V0h9kWxUveqLSGk0dt3ftR8kpliXM9SStH-oVX2rYBGuGN1rKtGliuw0Gqo433c](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEYS1VVxUd_U5krt_f5jm1NMetmUYAQbLRJPspzwfjH_3XHL9Z5LbpLlzREsmz92BWKwjhleuP0WoCh6k9IUxw6uvdU9BrrsxJ1UVXLQz6P1WQEntRu1RR67-JVP3VohM5kUm14cWPS7fDCfEa_-key0oNHO17Yfj8IOqblEz8STVNw53j1V0h9kWxUveqLSGk0dt3ftR8kpliXM9SStH-oVX2rYBGuGN1rKtGliuw0Gqo433c) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEfs8wFV5iEuF7t1bBPJt8Oz6RbU_N_hp2nDPGEMPjrKDpdd0zTniwLMqAswCYOT6d0n4QjJtLmAhCkL5_IsEfbKFJOVbcXsfCJha1u-xLSNakkAmYT1cSPpRE72Le3tyW4rAdcJSjkQToWWxkmcpipjZ6S8PbL](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEfs8wFV5iEuF7t1bBPJt8Oz6RbU_N_hp2nDPGEMPjrKDpdd0zTniwLMqAswCYOT6d0n4QjJtLmAhCkL5_IsEfbKFJOVbcXsfCJha1u-xLSNakkAmYT1cSPpRE72Le3tyW4rAdcJSjkQToWWxkmcpipjZ6S8PbL) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHG-PG6URpn98UhOoXbdS5cwPLh74lpPYNJVCS-q13NCiLZaCI8HkBnbmqEHtoyre9W5p80ONfwrsqcgdscIvlA84AgUloO84k3T-ltFWmlKlUgV3UOA6sj8GmVOnih3ueImbsvT6lnvrQbxLJ80Gb7n2biLJi0tE7hm__0FxKgT_J7VNBSRDvZfeV9neHtcx_DPBMf3Uf3jioG](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHG-PG6URpn98UhOoXbdS5cwPLh74lpPYNJVCS-q13NCiLZaCI8HkBnbmqEHtoyre9W5p80ONfwrsqcgdscIvlA84AgUloO84k3T-ltFWmlKlUgV3UOA6sj8GmVOnih3ueImbsvT6lnvrQbxLJ80Gb7n2biLJi0tE7hm__0FxKgT_J7VNBSRDvZfeV9neHtcx_DPBMf3Uf3jioG) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFzwvn-qNJkTUkiYQ7KJieVDq7dykDMsWfdIAFB1ZA2Hk8wa65vsFAvTVkT909aty_b88_jXWTknvVWZd2lw4u9x7hSQ2yn0Gjp-K-vlnSTBpePXHk8HTRksw==](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFzwvn-qNJkTUkiYQ7KJieVDq7dykDMsWfdIAFB1ZA2Hk8wa65vsFAvTVkT909aty_b88_jXWTknvVWZd2lw4u9x7hSQ2yn0Gjp-K-vlnSTBpePXHk8HTRksw==) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHd7IdV8OWWr_cBKfxTgEAOj5_47G5EjJzPg2jkFkeGzmBTrm8VndW2RTg3r2A9ctnVA1TGrA-A_ozng3ediZlGFbne0cf1lR-QqQH5pR8CqKurDWe8ci1W3Q==](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHd7IdV8OWWr_cBKfxTgEAOj5_47G5EjJzPg2jkFkeGzmBTrm8VndW2RTg3r2A9ctnVA1TGrA-A_ozng3ediZlGFbne0cf1lR-QqQH5pR8CqKurDWe8ci1W3Q==) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE482DBIIjyULoPMpQx80XQas0diTuYWauiQTX7du2ts0hkiKsbwcwfcL4kZuZsqUKd9CinL9UJD9EMeReLrtXBXGwwO5Ab6tSqud0B_9ngqt7q7XDroY3gTLM1u2yhUGTjTzrkcDus_7wXy57xnspOFGRIYK4mZ0tz_6ezkHG0A_gyX3ihL3T1JUj0FnY2_ZzDgW0oVUV_UI_tRO7YDdUgZIP5gMC8FfUVMNQQBXNhwTIONBZy8jo=](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE482DBIIjyULoPMpQx80XQas0diTuYWauiQTX7du2ts0hkiKsbwcwfcL4kZuZsqUKd9CinL9UJD9EMeReLrtXBXGwwO5Ab6tSqud0B_9ngqt7q7XDroY3gTLM1u2yhUGTjTzrkcDus_7wXy57xnspOFGRIYK4mZ0tz_6ezkHG0A_gyX3ihL3T1JUj0FnY2_ZzDgW0oVUV_UI_tRO7YDdUgZIP5gMC8FfUVMNQQBXNhwTIONBZy8jo=) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGv38ZKadJrjIDnQMz_dQCUB_mnLAKIr9l8T7nc9VC5-XGKgW4QSyk5vcHCL_bTM3ZxZ9I5s6vLx15QbzTRVonjjasSIaPPChv8Qa8uaQnQRlrP1ViicoQZdZykfCBqt2POozVAm52_VGW5VLKR8PE3nhnch4vMVJcgQbhxmf_Bfc_N_fxTznrOEMuU3YtLt2RBYHM6CZyGZ5wJKg==](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGv38ZKadJrjIDnQMz_dQCUB_mnLAKIr9l8T7nc9VC5-XGKgW4QSyk5vcHCL_bTM3ZxZ9I5s6vLx15QbzTRVonjjasSIaPPChv8Qa8uaQnQRlrP1ViicoQZdZykfCBqt2POozVAm52_VGW5VLKR8PE3nhnch4vMVJcgQbhxmf_Bfc_N_fxTznrOEMuU3YtLt2RBYHM6CZyGZ5wJKg==) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUv598YjtNl_G7JV6Ukkc5qKGWLFvpDwOGMrHmIQPTETGLzADEok8y-O_5qitARoZMaWZw__ErLVX1ySR4Mnxf5WlC_ua9J4sJHmOmNmeax8ijKSrhVg==](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUv598YjtNl_G7JV6Ukkc5qKGWLFvpDwOGMrHmIQPTETGLzADEok8y-O_5qitARoZMaWZw__ErLVX1ySR4Mnxf5WlC_ua9J4sJHmOmNmeax8ijKSrhVg==) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHFTQHzoIzRb6lJ6AK1WUM15hhH6PP4rYorFv3qHkm43PrZ8lFZoOezvs6PjuIZosQ5xt-I84xQoFXD1s9NV04wAVg0jUpLE6KoV_kuTZDd4kfS1f3mJ5lK7KI_fOQnWOieXsXIyuluLHRbsYBQQWFb3vQ1Fth2eWTXRLpSqGW6v_6hgsdaRNE=](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHFTQHzoIzRb6lJ6AK1WUM15hhH6PP4rYorFv3qHkm43PrZ8lFZoOezvs6PjuIZosQ5xt-I84xQoFXD1s9NV04wAVg0jUpLE6KoV_kuTZDd4kfS1f3mJ5lK7KI_fOQnWOieXsXIyuluLHRbsYBQQWFb3vQ1Fth2eWTXRLpSqGW6v_6hgsdaRNE=) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG6b7pgOX70TrUPGGBdHee7R7DgSGPAenR2xSrY66VmWvGwwHoCzr541-xg4-1mo3HUDxXmNfeeWfSX97lhAPwTFqZ_qTB3DcHKK4AnMBU9y60qptrTbgriW6GSMR3drPo=](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG6b7pgOX70TrUPGGBdHee7R7DgSGPAenR2xSrY66VmWvGwwHoCzr541-xg4-1mo3HUDxXmNfeeWfSX97lhAPwTFqZ_qTB3DcHKK4AnMBU9y60qptrTbgriW6GSMR3drPo=) — *Gemini Deep Research*
- [https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUezw8p8olu3i8SyzkOwajtkX7cnH6fvs1hv7tBrpt38abBu3PrNmMwIj9KquyJnJJJhgGoFKCTrdk7gUB-WteSLlx95GLgLGBQ3hw7x2wZXQ2fmfWCw==](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUezw8p8olu3i8SyzkOwajtkX7cnH6fvs1hv7tBrpt38abBu3PrNmMwIj9KquyJnJJJhgGoFKCTrdk7gUB-WteSLlx95GLgLGBQ3hw7x2wZXQ2fmfWCw==) — *Gemini Deep Research*
