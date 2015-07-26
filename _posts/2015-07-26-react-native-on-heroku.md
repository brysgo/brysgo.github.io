---
layout: post
title:  "React Native on Heroku"
date:   2015-07-26 00:09:33
categories: development tools
tags:
- react-native
- react
- heroku
- paas
---
As a web developer doing iOS development with react native, I need a staging
environment for the product manager to review changes to the app.

<img src="/assets/heroku-logo.png" style="height:200px;width:200px;float:right;margin:15px;"/>

On the web, that means using Heroku, but with a react native app it is a bit
more complicated.

My react native app has two components, the packager (for serving the client
code) and the server (for interacting with the app).

Heroku only lets one process bind to an external port, so it wasn't easy to do
without creating two heroku apps.

My solution was to proxy the bundle from the server, the problem with this, is
that if the packager is running in a worker, it can't be reached over localhost.

The packager is launched via a shell script, and by opening it, I can see what
javascript file is being run. All I had to do was require the packager in my
server (yes I know I could just use a node child process, but this is cooler).

My server uses websockets, so this is how I added the proxy...

<script src="https://gist.github.com/brysgo/17b0536381632eb67c27.js"></script>

You will see that I also added `react-native-env` and made an `environment.plist`
ala [this blog post][ios-env-article] with a `hostname` so that my application 
will know which server to use.

To change environments I just swap out the `environment.plist` with one that has
a different `hostname`.

[ios-env-article]: http://www.blackdogfoundry.com/blog/migrating-ios-app-through-multiple-environments/
