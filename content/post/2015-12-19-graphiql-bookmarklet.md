---
categories: development tools
date: 2015-12-19T13:41:33Z
tags:
- graphql
- graphiql
- relay
- bookmarklet
title: GraphiQL Bookmarklet
url: /2015/12/19/graphiql-bookmarklet/
---

I'm sure most of you, if you have done any work with graphql, have heard of
[graphiql][graphiql]. It is an indespensible tool for writing and testing graphql queries.

The problem is that now that I'm 
[not using express at the moment][graphql-relay-ruby]. I don't want to go
through the trouble of trying to fit graphiql into my stack.

# To solve it, [a graphiql bookmarklet][bookmarklet]:

<script src="https://gist.github.com/brysgo/c06b5b2e6c7a8d4380e5.js"></script>

# Enjoy!

[graphql-relay-ruby]:https://github.com/rmosolgo/graphql-relay-ruby
[bookmarklet]:javascript:(function()%7B'use%20strict'%3Bfunction%20loadScript(url)%20%7Breturn%20new%20Promise(function%20(callback)%20%7Bvar%20head%20%3D%20document.getElementsByTagName('head')%5B0%5D%3Bvar%20script%20%3D%20document.createElement('script')%3Bscript.type%20%3D%20'text%2Fjavascript'%3Bscript.src%20%3D%20url%3Bscript.onreadystatechange%20%3D%20callback%3Bscript.onload%20%3D%20callback%3Bhead.appendChild(script)%3B%7D)%3B%7Dfunction%20loadStyle(url)%20%7Breturn%20new%20Promise(function%20(callback)%20%7Bvar%20head%20%3D%20document.getElementsByTagName('head')%5B0%5D%3Bvar%20link%20%3D%20document.createElement('link')%3Blink.type%20%3D%20'text%2Fcss'%3Blink.rel%20%3D%20'stylesheet'%3Blink.href%20%3D%20url%3Blink.onreadystatechange%20%3D%20callback%3Blink.onload%20%3D%20callback%3Bhead.appendChild(link)%3B%7D)%3B%7DloadScript('https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Freact%2F0.14.3%2Freact.js').then(function%20()%20%7Breturn%20Promise.all(%5BloadStyle('https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fgraphiql%2F0.4.5%2Fgraphiql.css')%2C%20loadScript('https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Freact%2F0.14.3%2Freact-dom.js')%2C%20loadScript('https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fgraphiql%2F0.4.5%2Fgraphiql.js')%5D).then(function%20()%20%7Bfunction%20graphQLFetcher(graphQLParams)%20%7Breturn%20fetch(window.location.origin%20%2B%20'%2Fgraphql'%2C%20%7Bmethod%3A%20'post'%2Cheaders%3A%20%7B%20'Content-Type'%3A%20'application%2Fjson'%20%7D%2Cbody%3A%20JSON.stringify(graphQLParams)%7D).then(function%20(response)%20%7Breturn%20response.json()%3B%7D)%3B%7DsetTimeout(function%20()%20%7Breturn%20ReactDOM.render(React.createElement(GraphiQL%2C%20%7B%20fetcher%3A%20graphQLFetcher%20%7D)%2C%20document.body)%3B%7D%2C%200)%3B%7D)%3B%7D)%7D)()
[graphiql]:https://github.com/graphql/graphiql