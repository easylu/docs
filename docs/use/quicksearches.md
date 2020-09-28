---
title: Quicksearches
---

You can use [programmatic go links](programmatic-go-links) to set up team-wide quicksearches for any app your team
uses often.

For example, to search Google Drive, you might create a go link like `go/drive/%s` (or even `go/d/%s`) that points
to `https://drive.google.com/drive/search?q=%s`. Once you've created the go link, anyone on your team can use it.

## Finding the quicksearch URL

You can usually determine the URL a quicksearch go link should point to by trying an actual search on the service,
then copying the URL and replacing the term you searched for with the `%s` placeholder.
