# Securing Node.js Applications - Example Application

This application is meant to be a fully self-contained demonstration of the
principles and lessons in the companion book. By examining the source code and
using the web-based interface, you can learn by a more hands-on approach.

## Getting Started

You will need to have access to the command line, and have
[Node.js](http://nodejs.org/) installed. Their website should have instructions
for your specific platform.

Then, you will need to install the npm module dependencies we are using for
these examples, which can be done with:

    $ npm install

After that, you can run the full application with:

    $ node app.js

Using a web browser, visit: [http://localhost:3000/](http://localhost:3000/)

The interface is not pretty by any means, the primary means of instruction here
is the source code itself. You are free to tinker with and learn about through
experimentation in your own fashion.

## Table of Contents

 * Chapter 2 - General JavaScript (Command-Line Only)
 * [Chapter 3](chapter3/) - Application
 * [Chapter 4](chapter4/) - Request
 * [Chapter 5](chapter5/) - Response

## Source Code Organization

For chapter 2, the source code examples are command-line only, so you will need
to execute scripts manually (via `node chapter2/01-strict-mode.js`) to see the
output. (although the primary means of instruction is still the source code
itself)

For chapters 3-5, web application is hierarchically broken down into many
smaller sub-applications, which help the code samples more clearly reflect an
application of your own.

Express has a feature that allows for "mounting" an Express application within
another application, along with url namespacing for those sub-applications. We
use this feature heavily, but you really do not need to concern yourself with
that particular implementation detail.

Each chapter in the book has a corresponding folder. Each of these folders is
also a self-contained Express application. Each individual lesson is contained
within the various `*.js` source code files populating the chapter's directory.
Lastly, each lesson is also a self-contained Express application.

Each source code file is heavily commented, attempting to allow you to approach
each of these lessons at any time and in any order.
