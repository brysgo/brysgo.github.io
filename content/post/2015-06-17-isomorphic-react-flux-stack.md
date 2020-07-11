---
categories: development tools
date: 2015-06-17T10:07:43Z
tags:
  - development
  - react
  - isomorphic
  - flux
  - redux
  - jasmine
  - nodejs
title: Searching for an Isomorphic Reactiflux Stack
url: /2015/06/17/isomorphic-react-flux-stack/
---

> Now that [Relay][relay] is out in preview, it will probably replace Flux entirely.

# Why React?

A few months ago, the release of [React Native][react-native] by Facebook convinced me to make
the leap to [React][react].

I spent a while working on a [React Native][react-native] app and quickly learned that I needed
to bring in [Flux][flux]. After watching a few videos and reading a few blogs, I added my own
implementation of flux to my react native app.

The javascript nature, minimalism, isomorphic potential, and cross platform possibilities were
almost too good to be true. I fell in love with the stack and set out to refine the set of tools
I'm using around my personal priorities.

# Goals

- Isomorphic app
  - Having the right information at page load is essential
  - Not having to compromise on interactivity is the dream
- Native mobile support
  - Get as close to write once, run anywhere as possible
  - Without sacrificing quality
- Sustainable tools
  - Ensure all tools use sound engineering practices
  - Make sure there is either a stable following to a tool or an easy pivot
- High quality testing
  - Stack should be designed to hold complexity well
  - Regression tests should be simple and clear

# What I've tried so far...

## Why not go with vanilla [Flux](https://github.com/facebook/flux)?

Using only the Flux tools given by Facebook seems like a no-brainer, but
besides being extraneously verbose, you have to maintain, grow, and enforce the
framework yourself.

### Pros

- Pretty good assurance that it will not fall out of popularity and leave you
  stranded.

### Cons

- Verbose in a bad way
- Leaves a ton of tooling to the imagination
- I lot of ways to mess up
- Left to your own devices on isomorphism

## [Fluxible](https://github.com/yahoo/fluxible)

A full featured flux framework from Yahoo.

### Pros

- Isomorphic
- Lots of convenience functionality
- Yahoo backs it and they still are a large company

### Cons

- A touch magical
- Pretty large
- Still a bit verbose

## [Reflux](https://github.com/spoike/refluxjs)

A minimalistic rethinking of Flux for the functional programming world.

### Pros

- Simplicity
- Relatively small
- Easy to conceptualize and get started
- No dispatcher, it is built in

### Cons

- Not isomorphic
- Small bits of built in magic, make it less flexible
- Suggests creating stores that subscribe to other stores
  - This could create hidden complexity layers deep

## [Flummox](https://github.com/acdlite/flummox)

Minimal isomorphic Flux.

### Cons

- Readme says it will not be supported

### Pros

- Gave me the name of a framework the author likes better

## [Redux](https://github.com/gaearon/redux)

Advertised as "Atomic Flux with hot reloading," A minimalistic, isomorphic
take on Flux that is bare bones but extensible.

> ### Current Winner
>
> In spite of its small following and young API, the minimalistic approach
> only gets as far from the vanilla implementation of Flux as you want it
> to. This would make it relatively easy to pivot to another Flux implementation
> of maintain independantly.

### Pros

- Minimalistic
- Extensible
- Isomorphic
- Hot reloads code
- Dispatcher optional, atomic by default

### Cons

- Pre-1.0 API likely to have breaking changes
- Smaller following
- May not be a winner

> # Update Log
>
> - _2015-06-17_: Published
> - _2015-08-14_: Added note about Relay

[react]: http://facebook.github.io/react/
[react-native]: https://facebook.github.io/react-native/
[flux]: https://facebook.github.io/flux/
[relay]: https://facebook.github.io/relay/
