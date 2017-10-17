---
categories: development philosophy
date: 2016-06-21T01:54:33Z
subtitle: avoid getting stuck with a pile of glass shards
tags:
- software
- engineering
- complexity
- abstractions
title: Crystallize your abstractions carefully...
url: /2016/06/21/crystallize-carfully/
---

For as long as I've been a developer I have been reminded of the [rule of three
for refactoring][rule-of-three] and every time I hear it, I die a little inside.

If building a new abstraction is so painful, that it is easier to copy and paste
large chunks of code, you need to rethink the way you are building your
abstractions. Building the right abstractions isn't just a time consuming
distraction from building software, it *is* software engineering.

With that out of the way, let me try and explain how I decide what to abstract
so that years from now when I'm older some obnoxious young know it all can tell
me how I've been doing it wrong :-)

Before I do that, I'd like to first try and paint a picture of a software
as something that has a life of its own. When it is born, it is only a small
cluster of abstract concepts that fit nicely into a solution for the user. But
the days of clear cut simplicity are few, as the application grows it is fed
features, design changes and bug fixes. Depending on the process your team used
to digest all your application's food, you can end up with a beauty or a beast.

Now let's pair back this analogy to something more mathematical that we can
better understand as engineers, let's think of our application as a growing
crystal. Your core abstractions sit on the inside, and all the features, changes
and fixes it is fed cause new abstractions to crystalize around the old ones.

Each addition to the crystal should only contain the thing that makes that
abstraction unique, and for the parts that are not unique, it should attach
itself to the crystal on which it grows.

What do I mean by attach itself? Well, say I have a user info form and a user
info dialog. If I'm following the [rule of three][rule-of-three], I would just
copy the form and be on with my day. Then, two weeks later, developer John Smith
joins the project and has no clue about the user info forms. He gets a story to
add a user info sidebar, so he looks for a user info form and all he has to do
is copy it into the sidebar and presto chango! Meanwhile, it is time to add a
field to the user info form (it is required, sorry). The change was easy, but
with it, we just broke a dialog and sidebar.

If you were to attach it to the abstractions that are already there, you would
compose the form into your new dialog abstraction, and then two weeks later,
when John Smith joins the project, you tell him, we go by [this](#) philosophy
and you link him here. Then, when he needs to add the form to the sidebar, he
knows that copy pasting is not okay, and he builds a sidebar component that
composes the form. The time comes to add the field to the form, you don't even
need to think about anything on the crystal further out than your abstraction
because as long as you are meeting the basic expectations of all the users of
your abstraction, all of your changes should successfully propagate throughout
your app without you having to break a sweat.

Using this technique, so long as you maintain clear interfaces for using your
abstraction, when you make a change to it, you only need to worry about the part
of your crystal that is directly adjacent towards the inside. This allows you to
think in the context of the abstraction you are working on and not have to worry
about fringe complexity that was added in after the fact.

![](https://images4.alphacoders.com/105/105864.jpg)

[rule-of-three]:https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)