#Add Some Fun to Functional Programming With RXJS

Everyone knows that managing and structuring Async and Evented heaving isn't much fun, however with RXJS it becomes as simple as 1,2,3.  

####About Me
 * bla
 * bla
 * bla

####Functional Primer (At least as much as you need to know for RX).

**Why Functional**

 * Avoid State changes
 	* less bugs
 	* easier to read (you dont need to remember everything that happened to `var a` to determine its value)
 * Use functions to transform data and return NEW data
 * chain functions together to reate data "streams"
 
**Commonly used transformation functions**

 * map( projectionFunction ) transforms data & returns new values
 	* differs from forEach 
 	 * `example`
 * filter( predicateFunction )
 	* removes items from an array that make the predicate function return false
 	 * `example`
 * reduce( combinator, initialValue )
 	* uses the information from each iteration to calculate the  	current value
 	* `example`
 * mergeAll
 	* reduces the level of nesting by 1
 	 * `example`
 
####Observable vs. Promises vs. Event Callbacks

 * can retry
 * hot or cold datasource
 * Can manage the flow of multiple async calls out at once
   * merging strategies
     * merge, mergeAll, switch latest
 	
####The Power of Observables & Observers

 * Creating Observables
   * fromEvent
   * fromPromise
 * Observers
   * onNext()
   * onComplete()
   * onError()
 * Build compostable data streams that are easy to read
     
####Flattening Strategies

When using RX it's easy to get Observables that contain arrays of other Observables.  

 * concat
 * concatAll
 * switchLatest
 * Example
 

####Combining the Pillars with Observable Instances

 * distinctUntilChanged
 * throttle
 * takeUntil
 * take
 * skip
 * defaultIfEmpty

####UI Patterns in RX

 * In UI programming it's important to know when to make the switch from declarative (5 pillars) to imparative (if's and elses)
 * replace if's with filters
 * replace loops with map, reduce, & filter
 * You don't have to cram too much into a single "stream"
 
 ####jQuery code implemented in RX
  * Event Delegation
  * AJAX Callbacks
