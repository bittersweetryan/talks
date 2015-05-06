* Atwoods Law
* Why Node is Good For Us
	* The new view layer [http://www.nczonline.net/blog/2013/10/07/node-js-and-the-new-web-front-end/](http://www.nczonline.net/blog/2013/10/07/node-js-and-the-new-web-front-end/)   
		* Decrease time to render (Get some hard data from JS Perf?)
	* The cost of context switching
		* Java, JSP's, JavaScript, Groovy
	* SOA Architecture lets us build a lighter weight web-tier
		* very few dependencies need to load at runtime
		* faster workflow, save & refresh
* Embrace The JavaScript Ecosystem
	* Express
		* Hugely popular
		* Very modular V4
		* Very simple API
		* Easily extended
			* Custom Middlewares
			* POJO's as Models
	* Gulp
		* Started with Grunt but quickly outgrew it.
		* Streaming vastly improved our build times.
	* LESS
	* Dust Templates
		* More on this later
* Service Layer
	* Groovy -> JSON -> Client -> JSON -> GROOVY
	* Take advantage of the mature, well tested JAVA infrastructure already in place
	* RX -> non-blocking (see my other talk)
* Isomorphic JS for the win
	* Dust templates and helpers shared on server and client.
	* CommonJS on the Server, ES6 on the client.
	* Same templates rendered on the server and on the client.
	* No Sessions
* Unit Testing
	* One Library
		* Server testing
		* Browser testing 
* Assets
	* Quickly learned that serving a huge number of assets through a "public" dir was inefficient
	* create all assets on build time, assign a unique URL based on a hash
* Modules
	* CommonJS
	* ES6
* Collaboration
	* Modules	 
	* Local - NPM
	* Git
		* NOT a silver bullet, but did improve our workflows
		* Very close to a git-flow workflow
			* Gitflow
		* Better code reviews through PR's
			* A funny thing happened when we switched to PR's and let engineers review code when we could dedicate time to it
			* We started getting really good feedback.