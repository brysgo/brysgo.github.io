---
categories: development tools
date: 2015-12-11T00:09:33Z
tags:
  - development
  - jscodeshift
  - codemods
  - recast
  - migration
title: jscodemigrate (deps|dependencies)
url: /2015/12/11/jscodemigrate-deps/
---

If you haven't yet read about jscodemigrate, read about it [here](/development/tools/2015/12/05/jscodemigrate.html).
If you already know about jscodemigrate then stick around because there is a new
feature, and it is ready for you to use, just `npm install jscodemigrate@latest --save-dev`.

You already know that you can run all of your jscodeshift scripts at once and
easily maintain your project with a directory full of timestamped codemods, but
now, you can make it easy for those who depend on your npm packages to respond
quickly to your API changes.

All you have to do is make a code migration with the option `moduleApiChange: true`.
Then just instruct all your faithful to run `jscodemigrate deps` to copy your
code migration into their codemods folder so they can have it run with their code migrations.

[https://github.com/brysgo/jscodemigrate](https://github.com/brysgo/jscodemigrate)
