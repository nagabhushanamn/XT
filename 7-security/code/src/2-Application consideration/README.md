# Chapter 3

## Authentication

These examples cover various authentication concepts and modules, the common
username/password combinations we will use and reuse are:

| Username | Password |
| -------- | -------- |
| admin    | password |
| user     | 123456   |


### HTTP Basic Authentication (via [Connect Middleware](http://www.senchalabs.org/connect/basicAuth.html))

[Simple](basicAuth/simple)

Demonstrates a simple implementation of HTTP Basic Authentication, only a single
username and password are available: (`admin` / `password`)

[Callback](basicAuth/callback)

Demonstrates a callback implementation of HTTP Basic Authentication. Now, we can
refer to an in-memory list of usernames/passwords.

[Async Callback](basicAuth/async)

Demonstrates an asynchronous implementation of HTTP Basic Authentication.
Now, we can refer to some remote list of usernames/passwords.


### [Simple Username / Password Combination](userpass/) (via [Passport.js](http://passportjs.org/))

[Passport.js](http://passportjs.org/) offers a variety of authentication options
and an extensible architecture for custom solutions. Here, we will implement a
simple username/password system, where the credentials are likely stored in your
database. For our example here, however, we'll just use a simulated async
callback.

### [Local Strategy + Session Support](session/)

Uses the same underlying authentication strategy as above, only adding what is
required to enable session support.

### Other Passport Strategies

Other Passport Strategies include OpenId/OAuth which can cover a great variety
of platforms. Check their [website](http://passportjs.org/) and related modules
for examples and documentation.

These other examples were not included here to keep the entire demo self-contained
and without remote dependencies.


## Authorization

### [Simple Restriction Based on Login](authorization-simple/)

Restricts access to specific URLs to logged in users only via custom middleware.
Could also use the same principle to restrict by specific roles, groups, etc.

### [Advanced Restriction Based on Role](authorization-advanced/)

Similar to above example, but adds restricting access by roles.


## [Error Handling](errors/)

Demonstrates some error-handling mechanisms available to Express.



[Table of Contents](..)
