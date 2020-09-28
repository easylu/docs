---
title: FAQ
---

## What do I do if go links keep taking me to search results?

Browsers need to be "taught" that go links are URLs and not search engine queries.
Otherwise, typing "go/foo" just takes you to something like
https://www.google.com/search?q=go%2Ffoo.

Trotto's browser extensions aim to automatically teach the browser to treat go links
as URLs, but you may still find go links are treated as search queries. One way this can
happen is if you clear your browsing history.

If you run into this issue, simply type `http://go` into your address bar, or click [here](http://go).
Either of those steps will add a `go` URL to your browsing history and cause the browser to
correctly treat go links as URLs going forward.
