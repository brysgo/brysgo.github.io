---
categories: linux termux
tags:
  - linux
  - authorization
  - security
  - termux
  - devops
  - opinion
title: "Why are operating systems still multi-user?"
date: 2017-11-05T14:10:28Z
---

So I'm minding my own business, setting up Arch linux in my unrooted Termux
installation on my phone, when all of a sudden, `makepkg` wants me to not be
root to run a build. Excuse me? What century are we in?

Let me clarify, when I am running linux in a container to build applications
the operating system should not be bothering me with arbitrary user systems.

When was the last time you logged into a multi-user unix system that had other
users on it? Was it in your CS department in college? Me too.

We don't share computers anymore, even [toddlers get their own phones](https://www.cbsnews.com/news/kids-with-cell-phones-how-young-is-too-young/) with more
computing power than you had in your desktop when Linux was born. Not only do
we not share computers, it is actually the opposite, computers share us.
Many companies have figured that out by now, using the "cloud" to build multi
computer operating systems.

So I say no one is actually leveraging multi user linux systems in a way that is
intuitive, and you say, well what about enterprise and large institutions. Well,
if they are managing servers that multiple people log into, they should
probably think about modernizing the way they orchestrate their systems.

Let me explain what I mean, and to do so I will divide up the uses of Linux into
two categories.

1. Running a remote service for people to use.
2. Running a local machine for someone to use.

When solving for the first, you might say, "I want all my users to log in and
have complete access to a unix environment." To that, I would ask "Do you
really need a whole unix environment to use service, or can you build a more
direct interface?" If the answer is you need a unix environment, I would say,
you should build containers for your users and log them into containers.
However, the answer is much more likely to be no, we just need our users to
check their email, to which I would say, you probably just want to run an email
service and have it communicate with some central authorization service.
To that you might say, "That is exactly what I'll do, except I'll just use unix
permissions for my authorization because it is there." To that I would ask,
"Do you really want your service authorization coupled to your computer operating
system?" Operating systems are made to run hardware to the point where it becomes
a generic, pluggable system to run software. What if you got new hardware that
was better, but required a different operating system, do you want to port
your authorization to the new system? A better way to solve this problem, would
be to look for a solid, system independent authorization module and use that.

Now how about the second use case? This takes us back to the fact that we no
longer share computers, and if we did, it wouldn't be the responsibility of
the computer operating system to manage this, it would be a service on top.
Let's look at android for instance, now I will admit I don't know a whole lot
about how the internals relate to linux, but I do know what the security focus
has been on, and it hasn't been user level security, it has been app level.
Users install software from a plethora of sources, and they don't fully understand
the consequences of doing so. A system like android has built authorization and
sandboxing around each application, giving it permission to access only what
it needs to do the job it has. That isn't to say that android doesn't leverage
the multi-user nature of linux, but it certainly doesn't need to, and it doesn't
exactly fit cleanly into the paradigm of multi-system users that it is building
for.

I am happy to have a discussion about this (maybe it already exists), but I would
love to see a version of linux that did away with multiple users and instead
focused on app level security.

\*The views expressed in this article are my own and do not represent those of my employer.
