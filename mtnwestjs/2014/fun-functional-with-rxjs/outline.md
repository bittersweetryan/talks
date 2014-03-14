#Add Some Fun to Functional Programming With RXJS

Everyone knows that managing and structuring Async and Evented heaving isn't much fun, however with RXJS it becomes as simple as 1,2,3.  

###About Me
 * bla
 * bla
 * bla
 
###Flattening patterns
 * Talk about the 3
 * switchLatest()
   * ajax requests
   * examples
   * visual representation
 * concat & concatAll
 * merge & mergeAll
 * showing promises vs. observables
 * promises only show one thing
 * observables 
 


####Functional Primer (With an RX twist).

**Higher order functions frequently used in RX**

 * map( projectionFunction ) transforms data & returns new values
    * A map operation on an Obervable will only get invoked once something subscribes to an observable
		* `example`
 * filter( predicateFunction )
	* removes items from an array that make the predicate function return false
		* `example`
 * reduce( combinator, initialValue )
	* uses the information from each iteration to calculate the current value
		* `example`
 * mergeAll
	* reduces the level of nesting by 1
		* `example`
     
####Extending the Pillars With Some RX Functions

 * distinctUntilChanged
 * throttle
 * takeUntil
 * take
 * skip
 * defaultIfEmpty
 
####Flattening Strategies

When using RX it's easy to get Observables that contain arrays of other Observables.  

 * concat
   * example
 * concatAll
   * example
 * switchLatest
   * example

####Build Your Own Observer  
 * Observers
   * onNext()
   * onComplete()
   * onError()
 * Build compostable data streams that are easy to read
 
####UI Patterns in RX

 * In UI programming it's important to know when to make the switch from declarative (5 pillars) to imparative (if's and elses)
 * replace if's with filters
 * replace loops with map, reduce, & filter
 * You don't have to cram too much into a single "stream"
 
####controling side effects
 * using share to share a dataSource stream
 * use scan to create a continous "reduce"
 
###Showing how to concat the array


#low conceptual overhead 