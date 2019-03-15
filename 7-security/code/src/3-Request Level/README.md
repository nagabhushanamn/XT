# Chapter 4

## [General Request Size Limit](limit/)

Limit the size of incoming request bodies, to prevent users from flooding your
disk, network or application thread itself.

## [Request Size Limit by Content-Type](parser-limit/)

Limit the size of incoming request bodies, to prevent users from flooding your
disk, network or application thread itself.

## [Stream Request Bodies](stream/)

If taking a direct file upload (like an `HTTP PUT`) then you can stream the
request body, rather than buffering it entirely in memory. This can save you
precious RAM/memory, not to mention protecting from request flooding.

## [Event Loop Responsiveness](toobusy/)

Using the [node-toobusy](https://github.com/lloyd/node-toobusy) module, a
monitor is set up on the Node event-loop, and when a certain amount of lag is
detected, it tells the server to not serve the request. This allows the amount
of load placed on a server not to allow it to run out of control.

## [Cross-Site Request Forgery](csrf/)

Preventing CSRF via a built-in
[Express/Connect middleware](http://www.senchalabs.org/connect/csrf.html).

## [Input Filtering](input-filter/)

Validating and filtering user input via
[express-validator](https://github.com/ctavan/express-validator) /
[node-validator](https://github.com/chriso/node-validator).
