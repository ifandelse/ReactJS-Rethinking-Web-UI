##ReactJS - Rethinking Web UI

##The 'What'
This is a presentation that I've been putting together for both [NoogaJS](http://noogajs.org/#/) and [Devlink](http://www.devlink.net/). As with any "introduction"-style presentation, the hope is to convey enough of the basics and the philosophy to encourage interested developers to go and check it out for themselves and start building things with it!

###Demo & Theme
While preparing for Devlink, I wandered down a VERY fun rabbit trail researching classic video games. This theme/idea quickly made its way into the presentation, so hopefully you'll find it as fun as I did!
The initial "let's build a component" walkthrough covers building just part of what landed in the demo (there's a partial demo of it after the code walk through, but the full demo is at the end of the slide deck). In the demo, you can cycle through 8 different games to see a description and trivia, and if you click on one of the pictures, it will open a trivia question about the game.

##The 'How'
Clone this repo, and run `npm install` from the root. Then run `npm start`. If `open` doesn't open a browser window for you, open one to <http://localhost:3080>. Use the left and right arrow keys to navigate through the presentation (focus has to be on the page for the arrow keys to work). I've only
tested this presentation in Chrome - but odds are it will work fine in Safari and Firefox. No idea about
IE. I often boot my windows VM just to intentionally neglect it.

##The 'Why'
I love the web - and I love JavaScript. However, as much of an OSS geek I've been – and as excited as I've been by the promises made my client-side frameworks – my hopes have been constantly dashed against the rocks. ReactJS is the first time my thinking about how UI should be done has been radically challenged and changed. I'm the most excited I've been about client-side UI in *years*, thanks to ReactJS.

##The Caveats
For some reason, I thought it would be fun to build this presentation *in* React. This started when I wanted to just include embedded examples in my slide deck....and then I thought "I know, I'll just make my slides components, too". All that to say...it's not exactly a shining example of "Hey! Go model your React project after my slide deck". *Please don't*. There are rough spots. I used a ton of brute force to make things happen. But I got to spend a lot of time playing with low level stuff, and that was a win. If you catch something I've missed, please tell me!

##Further Reading
For anyone that comes across this repo (and especially those who attended the presentation), please let me direct you to the numerous giants upon whose shoulders I stand. The people and posts below are liberally quoted & referenced both in the actual slide content as well as what I typically say as I go through the presentation. In many ways this presentation is simply my own attempt to flatter each of them by imitation.

* [ReactJS Site](http://facebook.github.io/react/index.html)
* [ReactJS - Complementary Tools Wiki Page](https://github.com/facebook/react/wiki/Complementary-Tools)
* [Intro to React](https://www.youtube.com/watch?feature=player_detailpage&v=XxVg_s8xAms)
* [Pete Hunt: React - Rethinking Best Practices](https://www.youtube.com/watch?v=DgVS-zXgMTk)
* [JavaScript Jabber Podcast #73 - React with Pete Hunt and Jordan Walke](http://javascriptjabber.com/073-jsj-react-with-pete-hunt-and-jordan-walke/)
* [Mountain West JavaScript 2014 - Be Predictable, Not Correct. by Pete Hunt](https://www.youtube.com/watch?feature=player_detailpage&v=h3KksH8gfcQ)
* [Steven Luscher - Developing User Interfaces With Facebook's React](https://www.youtube.com/watch?v=1OeXsL5mr4g)
* [Pros and Cons of Facebook's React vs. Web Components (Polymer)](http://programmers.stackexchange.com/questions/225400/pros-and-cons-of-facebooks-react-vs-web-components-polymer)
* [Ben Smith's super fun post on React + SVG](http://10consulting.com/2014/02/19/d3-plus-reactjs-for-charting/)
* [A Thrown-to-the-Wolves-Hands-On Introduction to React Part 1 (by me)](http://tech.pro/blog/2020/a-thrown-to-the-wolves-hands-on-introduction-to-react)
* [A Thrown-to-the-Wolves-Hands-On Introduction to React Part 2](http://tech.pro/blog/2044/a-thrown-to-the-wolves-hands-on-introduction-to-react-part-2)
* ["IMGUI - Immediate Mode GUI" (Johannes Norneby's work in progress)](http://www.johno.se/book/imgui.html)
* [Immediate Mode Graphical User Interfaces (slide deck)](http://www.cse.chalmers.se/edu/year/2011/course/TDA361/Advanced%20Computer%20Graphics/IMGUI.pdf)
* [Simple Made Easy (talk by Rich Hickey)](http://www.infoq.com/presentations/Simple-Made-Easy) (one of the single most important talks you can watch, IMO)
* [React’s diff algorithm - by Christopher Chedeau](http://calendar.perfplanet.com/2013/diff/)
* [React v0.11 RC](http://facebook.github.io/react/blog/2014/07/13/react-v0.11-rc1.html)
* [Using ReactJS and Kendo UI Together](http://ifandelse.com/using-reactjs-and-kendoui-together/)
* [Benchmarks Comparing popular frameworks (including React)](http://www.petehunt.net/react/tastejs/benchmark.html)
* [Wolfenstein 3D Demo in ReactJS](http://www.petehunt.net/wolfenstein3D-react/wolf3d.html)