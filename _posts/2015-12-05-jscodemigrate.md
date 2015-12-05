---
layout: post
title:  "jscodeshift + rails migrations = jscodemigrate"
date:   2015-15-05 00:09:33
categories: development tools
tags:
- jscodeshift
- codemods
- recast
- migration
---
I've worked on lots of projects big and small, but as time went on they all
suffered from the same problem. [Changing standards and updated api's left
code fragmented as the codebase grew][code-fragmenting].

![](http://www.tlnt.com/media/2012/12/lumberg-office-space_320.jpg)

From the time I started working on [coffeelint][coffeelint], the problem has been stewing in
my head. Subconciously on the lookout for a solution, I heard about [codemods][codemod-talk].
Let me preface by saying I've been quite obsessed with everything facebook
engineering [has been doing][facebook-open-source] in open source lately. Needless to say I took notice.

I tried to jump in to the game but after playing around with
[jscodeshift][jscodeshift] in the super nifty [ast explorer][ast-explorer] I noticed
there was a peice missing. Only this time, a mortal human like myself could fill it.

We have been told that facebook has a codemod runner and I have no doubt
that there is a bit of process in place governing it. But outside of facebook, we
only have a one off runner that is hard to work into a team's process.

Inspired by my desire to solve this problem and an admiration for the way rails
handles [database migrations][rails-migrations] I decided to build a code migration tool that wraps
[jscodeshift][jscodeshift]. It might be a little rough, since it is hot off the vim, but I'm
eager to hear what people think about the concept.

# TRY IT OUT
[https://github.com/brysgo/jscodemigrate](https://github.com/brysgo/jscodemigrate)


[code-fragmenting]:https://xkcd.com/927/
[coffeelint]:https://github.com/clutchski/coffeelint/issues/195
[codemod-talk]:https://youtu.be/d0pOgY8__JM
[facebook-open-source]:http://www.fastcompany.com/3038842/how-facebooks-massive-open-source-push-delivers-better-code-and-better-engineers
[jscodeshift]:https://github.com/facebook/jscodeshift
[ast-explorer]:http://astexplorer.net/
[rails-migrations]:http://blog.lilyjen.com/an-intro-to-rails-migrations/
