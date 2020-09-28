---
title: Programmatic go links
---

Trotto supports programmatic go links, which are links containing placeholders that map onto the destination URL.

For example, you might want to use a placeholder to create a go link like the following:

`go/gh/%s` → `https://github.com/my_org/%s`

Then, when anyone on your team types `go/gh/frontend`, they'll be redirected to the frontend repo
at `https://github.com/my_org/frontend`.

## Multiple placeholders

You can use multiple placeholders in your go links. If you create a go link like `go/[keyword]/%s/%s`, the text
you enter in place of `%s` when using the go link will be substituted, in order, into each `%s` detected in your
destination URL.
