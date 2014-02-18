#Add Some Fun to Functional Programming With RXJS

Everyone knows that managing and structuring Async and Evented heaving isn't much fun, however with RXJS it becomes as simple as 1,2,3.  

####About Me
 * bla
 * bla
 * bla

####Functional Primer (At least as much as you need to know for RX).
 * Avoid State
 * Use functions to transform data and return NEW data

####What is Reactive JavaScript?

 * builds on functional constructs
 * New datatypes Observable & Observer
 * The Observer Pattern + Iterator Pattern = Reactive Programming
 * When the Observable gets data it pushes it to its Observers
 
 
####Why Reactive

 * take advantage of multiple cores
 * normalize async data & events
 * avoid state
 
####Observable vs. Promise vs. EventEmitter in Node

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

####The 5 Pillars of Functional (with a Reactive Twist)

 * Map
 * Reduce & Scan
 * Filter
 * Zip
 * concatAll
 
**Map**

 * Map _transforms_ data in an observable collection (e.g give me an item in an )
 * Say you wanted to take an  
 
**Reduce / Scan**

**Filter**

**Zip**

**Concat All**

####Combining the Pillars with Observable Instances

 * distinctUntilChanged
 * throttle
 * takeUntil
 * take
 * skip

####UI Patterns in RX

 * In UI programming it's important to know when to make the switch from declarative (5 pillars) to imparative (if's and elses)
 * replace if's with filters
 * replace loops with map, reduce, & filter
 * You don't have to cram too much into a single "stream"
 
 ####jQuery code implemented in RX
  * Event Delegation
  * AJAX Callbacks
