# Modern UI Development With Node.js
Modern UI Development with Node isn't about build systems, transpilers, or even isomorphic rendering.  It is,
however it's not looking at them as separate parts of an application, its looking at them as building blocks
for piecing together an application.

### Code Quality  ( can I set up a project )
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
  * pick your battles (do you really want to break a build on whitespace differences?? )
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
### Modules
* Use modules, use them on the client, use them on the server
  * Separates the jr from the rest
* ES6 module syntax or commonJS
#### Packaging
* Browserify
* Webpack
* Netflix
### Isomorphic / Universal
* Rendr
* React
  * 0.13 Render to string
  * 0.14 improvements
  * Rehydration on Client
# As Server
* Spend as little time in Node as  you can
* call service - throw callback in message queue
  * Compile template
  * Send to client
# Other Stuff
* Node-webkit
* Native
