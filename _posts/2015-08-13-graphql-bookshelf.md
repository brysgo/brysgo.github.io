---
layout: post
title:  "Graphql + Bookshelf"
date:   2015-08-13 00:09:33
categories: development libraries
tags:
- graphql
- bookshelf
- knex
- graphql-js
---
I recently switched over the project I was working on from MongoDB to PostgreSQL.
The reason for the switch is not what I'm writing to discuss, but I'll just say
that the unpredictability of mongodb was starting to become an issue in development.
The thought was that if it was already difficult before the data starts pouring in,
it will probably be a nightmare one the product is in use. And that meant switching
from [graffiti-mongoose][graffiti-mongoose], to my own graphql database glue.

I searched for an ORM that could take the place of mongoose and it wasn't long
before I stumbled upon [BookshelfJS][bookshelfjs]. Built alongside its query
building counterpart by [@tgriesser][tgriesser], it was a good choice of where
to start.

Then I had a choice, I could build a [graffiti][graffiti] adapter for postgres,
but I wanted something more lightweight than graffiti. My [graphql schema][graphql-schema]
were more akin to controllers than database models, so the idea of having them
exclusively tied to models didn't feel right. I needed custom attributes that
were not on my models to be in my graphql schema.

Instead of building a larger solution, I collected helper methods every time I
needed to do something related to accessing the bookshelf model. I ended up
with a bunch of neat little wrappers to help with bookshelf graphql schema
and I spent yesterday putting it together with some tests and documentation
to open source.

##[https://github.com/brysgo/graphql-bookshelf](https://github.com/brysgo/graphql-bookshelf)

Enjoy!

*Footnote -- I haven't played around with Relay enough yet to know if this will
work with connection types, but it will almost certainly work for plain old 
graphql schema.*

[graffiti-mongoose]:https://github.com/RisingStack/graffiti-mongoose
[bookshelfjs]:http://bookshelfjs.org/
[tgriesser]:https://github.com/tgriesser
[graffiti]:https://github.com/RisingStack/graffiti
[graphql-schema]:https://github.com/brysgo/graphql-bookshelf/tree/master/schema
