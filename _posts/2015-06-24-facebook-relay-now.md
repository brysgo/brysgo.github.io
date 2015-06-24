---
layout: post
title:  "What does Facebook's Relay mean for you?"
date:   2015-06-17 10:07:43
categories: development philosophy
tags:
- react
- isomorphic
- flux
- relay
---
When Facebook announced their data model and database 
[Relay and GraphQL][relay-announcement] it got people pretty excited. The next
question was, when can I start using it?

# Short answer

When Facebook is done putting on the finishing touches and getting it ready for
consumption by us mortals.

# Long answer

The two open source products facebook announced represent more than just tools 
you can start using. They represent concepts that aren't new, but have been 
simplified by choosing the one way that worked best and sticking to it.

For instance, lets take a look at the Relay example from the announcement:

> TODO: example here

Yes it uses fancy custom ES6 interpolated strings, but the cool part is that
they are building a composable, declarative data model that at the top mirrors
the react view heirarchy and underneith boils down to the common data shared by
all the higher level data models.

For example using plain old javascript, you could just do this:

> TODO: example without fancy relay stuff

Sure, if you wait for Relay it will all flow seamlessly too and from Facebook's
graph database, but if you can easily build some basic serialization to your 
favorite database in the meantime.

> TODO: database serialization example

[relay-announcement]: https://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html
