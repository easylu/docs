---
title: Supporting the "go" hostname
---

To get the most out of go links, every user in your organization should be able to access your
Trotto instance through the `go` hostname. This means users can access a go link like
`go/roadmap` by simply typing `go/roadmap` into their browser bar, compared to a more verbose
equivalent like `trot.to/roadmap`.

You can implement support for the `go` hostname in a variety of ways.

## The Trotto browser extension

Trotto's open source browser extension is by far the simplest way to support `go`. With an extension-based implementation,
the browser recognizes that when you type `go/somewhere` into the browser bar, you're using a go link, and the browser
redirects the request to your Trotto instance.

If you're using fully-managed Trotto at [trot.to](https://trot.to/_/auth/login), you can install the extension
immediately:

* [Chrome extension](https://chrome.google.com/webstore/detail/trotto-go-links/nkeoojidblilnkcbbmfhaeebndapehjk)
* [Firefox extension](https://addons.mozilla.org/firefox/addon/trotto-go-links)
* [Safari extension](https://apps.apple.com/us/app/trotto-go-links-for-safari/id1550901097)

If you're self-hosting Trotto, deploying your own copy of the extension is simple. Check out the extension repo's
[README](https://github.com/trotto/browser-extension).

## Internal DNS

Large companies like Google use internal DNS to point the `go` hostname to their go links solution. Since the go
links user needs to be on the company network (or VPN) to use go links via internal DNS, this is more limiting
than an implementation using browser extensions. However, both implementations can be used at the same time, so if
a user isn't on the company network but has a go links extension installed, go links will continue to work for them.

## Search domain

A [search domain](https://en.wikipedia.org/wiki/Search_domain) (also called a DNS suffix) is a domain that your
computer uses to resolve otherwise unrecognized domain names. A search domain might be configured in your computer's
settings or via your network.

Say you have a search domain of `trot.to` set up on your Mac. If you type `go/allhands` into your browser, your
computer will see if `go.trot.to` exists. When it finds that is a valid domain, you'll automatically be redirected
to `go.trot.to/allhands`, and ultimately to your company's weekly all-hands Zoom.

Below are specific instructions for configuring search domains for fully-managed Trotto at `trot.to`.

### macOS

1. Open `System Preferences`, then click `Network`
2. In the list at the left, select the network connection service you want to use (such as Wi-Fi or Ethernet), then
   click `Advanced`
3. Click the `DNS` tab
4. Click the Add button (`+`) at the bottom of the `Search Domains` list, then enter the search domain: `trot.to`
5. Click `OK`
6. Click `Apply`
7. Repeat these steps for any other network connection services you use frequently

### Windows

1. Go to `Control Panel` > `Network and Internet` > `Network and Sharing Center`, then click `Change Adapter Settings`
   on the left side
2. Right-click your network connection service (normally `Local Area Connection` or `Wireless Network Connection`) and
   select `Properties`
3. Select `Internet Protocol version 4 (TCP/IPv4)` and click the `Properties` button
4. On the `General tab`, click the `Advanced...` button
5. In the `Append these DNS suffixes (in order)` list, click `Add`, then enter the search domain: `trot.to`
6. Click `OK`
7. Repeat these steps for any other network connection services you use frequently

### Linux

1. In `NetworkManager`, edit your network connection service and click the `IPv4 Settings` tab
2. In the `Search domains` field, enter the search domain: `trot.to`
3. Click Save
4. Repeat these steps for any other network connection services you use frequently

## Hosts files
A [hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) is a file on your computer that maps hostnames to IP
addresses. For example, `34.71.68.101` is Trotto's static IP, and an entry like the below would direct a request for
`go/roadmap` to `34.71.68.101/roadmap`, resolving the go link through Trotto.

```
34.71.68.101   go
```
