# Modern UI Development With Node.js
Modern UI Development with Node isn't about build systems, transpilers, or even isomorphic rendering.  It is,
however it's not looking at them as separate parts of an application, its looking at them as building blocks
for piecing together an application.
### Modern UI Development
* The Past
  * HTML 2.0 Was released in 1994
  * 1993 - CSS spec is a W3c Recommendation
  * 1995 Allaire ColdFusion 1.0!
  * ... EXT, Dojo, Prototype
  * 2006 - jQuery - still writing things in two languages
  * 2009 - Node - JavaScript Everywhere!  The modern UI
    * We still weren't sure what to do with this new technology?
    * Connect & Express came along and we all started replacing our PHP sites with node, (without rethinking our architecture)
    * We also got Grunt to automate tasks like minifying JavaScript and compiling our LESS, Templates, and CoffeeScript
  * 2011 - Grunt changed the game
    * We started doing things like linting our code, minifying our code, however it was something we did separate from the application.
    * Server was still separate from the front end.
  * Today - Node has become the new "Frontend Backend" [https://nodesource.com/blog/node-and-the-frontend-backend](https://nodesource.com/blog/node-and-the-frontend-backend)
    * However instead of looking at all of the things node does discretely we need to look at Node holistically.
### Development - Writing Future Friendly JavaScript
* Doesn't just mean using ES6 (but well cover it for sure)
* Step one, choose a task runner
* Make sure everything is a module
    * example of swapping out react's transpiler with Babel
    * glob your paths
       * JS
       * CSS
* Modules
    * Write them, everything is a module
    * Refactor, make more modules
    * CommonJS
        * one syntax
        * will work in Node w/o any build step
        * not W3C spec
    * ES6 exports
        * future browser friendly
        * easy to plug into Babel
* Writing ES6
    * Use Babel
        * Yes it gives you access to cool new features, but more importantly it lets you write tomorrows code today.
        * Developers will copy the patterns they see in the existing codebase.
          * Just saw something on a PR that was bad and I asked where it came from and the devleoper said he wasn't sure but that he copied the current pattern in place.
            * This was a smart guy.
### Code Quality
* Code quality starts at line 0.  Bake it into the fabric of your application.
  * Source control hooks - automate installation
    * `gulp hook`
* Be annoying, but not too aggressive
  * warnings for non-critical things (these are easily ignored)
  * errors for critical tings
    * syntax errors
    * failing tests
* ESLint
  * configurable, parses syntax
  * pick your battles (do you really want to break a build on whitespace differences?)
* CSSLint
  * nesting was the worst ting to happen to css!
  * {{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}
* UNIT TESTS
  * make testing fun by making it easy
  * testing culture, lead by example, it takes time
### Transpolation
* ES6
  * It's ready
  * brief overview (it is part of modern UI development)
    * classes
    * enhanced object syntax, kinda
    * desctucturing
    * arrow functions
    * string literals
* Languages that Transpile to JS
  * JSX
  * CoffeeScript
  * ClosureScript
* Templates
* CSS
##Serving Pages
#### Packaging
* Browserify
* Webpack
  * create  webpack bundles on server and client
* Groundskeeper & pragmas
 * cleanest way to reduce payload
### As Server
* Spend as little time in Node as  you can
* call service - throw callback in message queue
  * Compile template
  * Send to client
* SOA
  * Restfull endpoints
### Universal
  * QA Noticed big percieved speed increase
  * It's actually pretty hard!
  * Generating markup on the server is easy
  * Generating markup that will eventually run your client JS app on the client
  * Rehydration on Client
  * the real key to making isomorphic APPS!
### Other Stuff
* Node-webkit
* Native
### Takeaways
 # use node.js as a server
 * use node.js to make life easier for devleopers
 * use node.js to write isomorphic code.
