---
categories: development philosophy
date: 2016-04-01T01:13:33Z
tags:
- react
- graphql
- relay
- rails
- emberjs
- rest
- engineering
title: Imaginary Lines
url: /2016/04/01/imaginary-lines/
---

If I had to sum up the job of a software engineer in laymen's terms, I would
tell you that we draw imaginary lines around imaginary concepts until those
concepts can map to both a specific set of instructions for a machine and a
common understanding for programmers.

Why am I stating the obvious? Well, it is quite simply to emphasize just how
important it is where we draw those lines.

To illustrate this, lets start all the way on the left side
of the machine instruction / common understanding spectrum. By that I mean a
simple procedural program. This program needs to do a list of technological
things. For instance, it needs to take input, process the input and react to
it, displaying some output.

As my list of instructions grows, my understandability shrinks. But I'm a
software engineer, I can fix this! If we just split up our code into separate
responsabilities, the complexity is managed.

So now we have a place to put code that handles input, a place to put code that
handles business logic and a place to format my output. However, the complexity
of our code is not done growing. We now have different types of input, more
rules to apply to process the input, and multiple ways of displaying the same
input. But I'm a software engineer, I can fix this.

Lets get more specific about responsabilities, we can split the input set and
handle different kinds of input in different places, some of our business logic
does one thing to our data while other business logic does another thing, we
can split that up, and we can create decorators for all the ways we need to
display our state!

After all that complexity management, I think it is time to meet with the
client and show them how cool their app is going to be. Enter client... 'wow,
great work you guys, I hope it isn't a problem that we are thinking about
changing widgets to have round tuits and respond to thingy mabobers.'

Now we realize our mistake. We've been so busy putting everything in our neat
little piles, we didn't realize that the imaginary lines we've been drawing
to do it were around concepts completely tangential to our domain. Meaning, 
in order to change a concept, we need to change it in 40 places 
neatly hidden by gems that magically composes services so you don't have to
think about them. By the time we are done tracking down the things we need to
change, we better cross our fingers and hope it all still works (Or run our
test suit that grows exponentially in size).

So we've learned our lesson, what do we do differently next time? How do we
avoid the same mistake? The answer to that is quite simple, draw your imaginary
lines along your domain, rather than your technologies.

What does that mean in the real world?

Well having a product component in react that has the styles declared right
under the react component and the required data declared just under that in a
relay container follows this principle

However, a controller that processes a request for a product in a separate file
from a model that does logic for the product and another file that displays the
product and another file that adds a layer on top of the product for another 
display, does not follow this principle.