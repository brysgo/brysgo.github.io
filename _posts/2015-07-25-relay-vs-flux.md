---
layout: post
title:  "Will Relay replace Flux?"
date:   2015-07-25 12:59:33
categories: development frameworks
tags:
- facebook
- react
- relay
- flux
---
> [Relay][relay-preview] is out in preview! Have a look.

When people talk about Relay they think of it as the server-client link in the
Facebook stack, but is that really all it is?

Flux still has a place on the client because you need to manage temporary app
state, right?

I think it doesn't. Flux is an architecture for unidirectional data flow that
separates out input from the user and the server so that it can react without
getting tangled up. It does so at the high cost of tremendous verbosity and a
significant drop in top down readability.

Enter Relay. Relay is a higher level abstraction that wraps React components in
containers that declaratively specify data to sync with the server. Since Relay
uses GraphQL to communicate with the server, it doesn't seem like there is a
solution for temporary app state. Relay does, however, provide a much cleaner
way to organize the data of your app, so why would you go back to Flux instead
of creating a solution on the same level of abstraction?

GraphQL server in the browser? Why not? You could create an in-memory GraphQL
database for temporary app state if you need to.

React transmit is a Relay framework which replaces GraphQL with plain old
JS Promises. I have been using it for the time being to structure the data of
my apps. I have also been fortunate enough to stumble upon the temporary state
issue and solved it the way I suggested above, by querying local stores from
Transmit instead of querying the server.

Basically, it needs to choose a random ID between 0 and 999 and keep some memory
of which ones have already been chosen.

Here is the client-side store and here is the view that uses it...

<script src="https://gist.github.com/brysgo/f9613e71386b00aa4d03.js"></script>

> # Update Log
> - *2015-07-25*: Published
> - *2015-08-14*: Add link to relay

[relay-preview]:https://facebook.github.io/relay/
