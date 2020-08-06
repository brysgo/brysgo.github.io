---
categories: none
tags:
  - development
  - backstory
  - open source
title: "coming soon: peerstate"
date: 2020-08-06T08:05:02.536Z
---

All of my open source projects start with trying to build something, getting frustrated, saying in my head "I wish I could just do this," then obsessively investigating what it would take to be able to "just do this."

Sometimes this inspiration comes on a work project, but more often, it comes when I am working on a side project, or playing with some new open source thing. My first example of such a project, was when I was working on an investment project called Herd. It was my first react native app, and I was frustrated that I couldn't use environment variables. At the time, react native was very new and I couldn't find a good way to use environment variables, so I learned how to write a babel plugin, made one for my environment variables (rather quickly), pushed it to npm, and forgot about it.

When I checked on it a couple years later, I noticed that it was getting thousands of downloads a week on npm, but had no GitHub stars. I gave the project a bit more love after this realization, but ever since, I have been trying to make a project I can be passionate and proud of become popular.

This sorta happened when graphql-gun became popular, except in this case, it got lots of GitHub stars, but relatively few npm users. The problem with this project, was that while it was a really cool demo, and could be used practically, it didn't really solve any fundamental problem that couldn't be solved by using gundb alone. I suppose it adds a declarative interface to something that was imperative, and if that is your style, it does make a bit of a difference, but it was an island of declarative code in a sea of imperative frameworks.

If I really wanted to make graphql-gun useful for building apps, I would need a simple, declarative, batteries included authentication and authorization framework that goes along with it. Like any good library though, I didn't want it to be coupled to a particular decentralized system, so I decided to go with a system of packages that can integrate with different things that I am interested in integrating with, like react and gundb, along with a core package to house common code and a server CLI for doing traditional client-server style key management to maintain control over your service while getting all extra robustness of a decentralized system.

The result of all of this is [peerstate](https://github.com/peerstate). It is still in the early stages of development, but I will let everyone know when it is ready and hopefully it will fit well into some existing ecosystems while giving everyone a nice declarative way to do authentication and authorization in their hybrid decentralized apps.