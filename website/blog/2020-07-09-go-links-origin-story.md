---
title: The Go Links Origin Story: Q&A with Benjamin Staffin
author: Jon Gaulding
---

Where and how did [go links](https://www.trot.to/go-links) originate? What's the history of the useful internal short links we use and love today?

<!--truncate-->

Perhaps unsurprisingly, go links have their origin at Google, specifically with a sysops fellow named Benjamin. He worked as a Site Reliability Engineer at Google from 2005 to 2013. The need for go links emerged from Googlers constantly asking for code reviews on their short links. In an effort to take work off his plate, Benjamin created a system that let Googlers set up go links for themselves—no code reviews needed. I caught up with him for a Q&A about the history of go links.

_Follow Benjamin on Twitter ([@bstaffin](https://twitter.com/bstaffin)) and [on GitHub](https://github.com/benley)._

### How did go links start and evolve at Google?

When I was on SysOps at Google, we were frequently asked to set up shortlinks that people wanted to put on the corporate network, including some that were requested only after they'd been used in printed materials.  These weren't hard to set up, but they took 5 or 10 minutes apiece and the time added up quickly.

To take that work off my plate and let Googlers set up shortlinks themselves, I wanted to create a sort of "AOL keywords" for companies. The first version (prior to go.corp) was just some Apache `mod_rewrite` rules that used regexes in a text file to rewrite `http://bqa/<something>` (billing test environments) to arbitrary destinations.

In probably the latter half of 2006, another engineer at Google, Eric DeFriez, built the first full-fledged go links app, letting Googlers create go links to their hearts' content.

### So did it take off pretty quickly? By the time I joined Google in 2010, go links were a way of life.

Yes, as I recall, it took off pretty quickly, especially because we were trying to push people to use go links to create shortcuts rather than other methods like bare hostnames, which took time away from our team. Creating a go link was easy and self-serve.

### Was there any pushback at Google against the rollout of go links?

Not much, and not in the way of policy. There was some concern around things like, say, `go/yahoo` not pointing to Yahoo, but by and large people recognized it was solving a real problem and were supportive.

### Have you set up go links at other companies you've worked at?

I've never been the one to do it, but I've seen them pop up at companies I've worked at since Google. At Fitbit, for example, someone put together a simple app during a hack week and it caught on.

### Was the go links app part of your core work, or was it more of a 20% time project?

It was never on my OKRs or anything like that, but it had the support of leadership since it solved a real problem and let us reclaim time.

### How was the ["Short Links" Google Apps lab](https://www.makeuseof.com/tag/use-your-google-apps-domain-to-make-short-urls/) related to the go links app used inside Google?

That app was built as one of the first publicly-available App Engine apps to work with Google Apps. 

### What's it like seeing companies built around this idea you pioneered?

I think it's pretty cool! For me it's a reminder that (a) some of my ideas do have real value, and (b) having a good idea is only the very beginning of creating something. The harder (and more important) part is actually executing it.
