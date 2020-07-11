---
categories: space future
tags:
  - scifi
  - aerospace
  - engineering
  - abstract
  - wishlist
title: "High Altitude Mass Volley"
date: 2019-08-07T02:00:28Z
---

## Preamble

I have always been interested in space, but this idea for getting there cheaper has been brewing for a few years, and while I’ve yet to sit down and do the math, it has gotten to a place where it seems intuitive enough to work.

Before I go into the solution, let’s look at the problem. At present, out best way of getting to space involves stacking explosives as high as we can, sitting on top with a countdown, and hoping that we planned for all the eventualities.

Setting aside the risk to life and property involved in this, we have the issue of more weight requiring more fuel, which is in turn, more weight. This makes it so launching payloads doesn’t scale linearly.

## Inspirational work

This all started with a jump back in time to Newton’s cannonball. It certainly would solve for having to carry that pesky fuel? The problem with this, is that if you want to reach orbital velocity, not even accounting for air resistance, the acceleration required would be more than enough to kill you.

But we are determined to get to space! Violent acceleration can’t stop us. What about a train? Those accelerate slowly and get going really fast. This is actually a great idea. You would need a massively long train, but something like Elon Musk’s hyperloop might do. Aside from the capital costs of this approach, we have to deal with air resistance when we exit the hyperloop. This could potentially be solved by building a hyperloop muzzle that ascends into the sky to where the air is thin. I am a huge fan of this idea and it would drastically lower the cost of sending things to space if we are able to invest enough upfront to make it happen. But is there a way we can do something at lower cost now? Can we overcome the challenge of acceleration, fuel weight, and air resistance without being united in the effort by another cold war?

## Back to the basics

If we think back to the cannon, it works, we can accelerate small pellets past escape velocity with current technology and we have very sophisticated targeting software that could hit a target from very far away. What if we just had a lot of very small guns shooting a space ship to propel it to orbit?

There are more than a couple problems with this, including:

1. air resistance
2. turbulence complicating targeting
3. obstructions blocking the craft
4. wear on the craft from impact
5. collecting projectiles

But if done right, this approach could be very desirable. It could allow our payload to have almost no sophistication, which would make reusability much easier. It also could tie into an electrical grid, which would make it cheap.

Wear on the craft is the easiest to solve. We can use electromagnetic projectiles, or even just make the projectiles very soft and light.

Second easiest to solve for is collection. With a little bit of sophistication on our craft, we can collect the pellets and fire them back at collectors, or without sophistication, we can place collectors where the mass will fall.

Finally, air resistance, turbulence and other atmospheric obstructions are where we really start to scratch our heads. Could these be show stoppers?

# Proposal

What if we put these little projectile accelerators at the top of the atmosphere? How would we do that? Balloons.
If we launched a network of balloons that functioned to fire tiny projectiles rapidly at high velocities, we get a new set of problems, but not ones that can’t be solved.

New problems:

1. Power
2. Getting payload to upper atmosphere
3. Collecting projectiles (harder)
4. Maintaining balloon fleet

Since we are no longer in the ground, we can’t tap into the grid directly, but we can use a combination of solar and microwave charging.

It is harder to fly a payload to high altitude than it is to go from the ground, but airplanes do a pretty good job of that.

The last two are the harder ones, but not unsolvable. For collecting pellets, the payload would have to be equipped with something to catch the pellets and fire them back. Ideally with some kind of targeting pellet spray nozzle with the ability to spread the pellets accross many collectors. The balloons would need to redistribute the pellets amongst themselves. This could be through phisical links between balloons or by relaying shots between balloons. While this is hard, it is not impossible. One way the collection problem could be circumvented, is by making dry ice and not worrying about collection. Would cost a bit more energy, but may be a good fallback.

Finally, we have to maintain a fleet of balloons. Helium is expensive and we would need to make sure each balloon has power, pellets, helium, and a functional microcontroller. While this is daunting, companies have attempted to maintain fleets of balloons in the past, so again, should be doable.

Now I won’t pretend my proposed solution is perfectly safe, or that payloads scale in a perfectly linear fashion, but it seems to make significant leaps in solving both of these issues as well as many others, including reusability.

## Future work

Seeing as this is the culmination of lots of shower thoughts, and that I’ve never worked in the aerospace industry, there is still lots of work to be done pressure testing the idea.

1. Parameter setting — set the mass and velocity of the projectiles, determine number of balloons and surface are of balloon network
2. Prove energy transfer to balloons — microwave, solar, etc
3. Network balloons through hardware and/or software — can you share resources between them, stabilize each other
4. Prove that electromagnetic gun can rapid fire light projectiles to satisfy parameters
5. Prove that projectile collection or in air manufacturing is possible

I hope that I get a chance to take some of these on in the future. But I’m also interested to hear what other people’s thoughts are. Has anyone explored something similar? Are there obvious things that I missed?
