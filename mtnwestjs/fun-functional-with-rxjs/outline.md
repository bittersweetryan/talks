####About Me
 * bla
 * bla
 * bla

####What is Reactive JavaScript?
 
####Why Reactive

 * take advantage of multiple cores
 * normalize async data & events
 * makes use of good functional constructs to help reduce bugs ( less state )
 
####Observable vs. Promise

 * can retry
 * hot or cold datasource
 * Can manage the flow of multiple async calls out at once
   * merging strategies
     * merge, mergeAll, switch latest
 	

####The Power of Observables

 * The Observer Pattern + Iterator Pattern = Reactive Programming
 * Observable as a new Datatype
 * Creating Observables
   * fromEvent
   * fromPromise
 * Observers
   * onNext()
   * onComplete()
   * onError()
 * Build compostable data streams that are easy to read
     * Event delegation
     * Async AJAX example
     
####Flattening Strategies
 * concat
 * concatAll
 * switchLatest

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

When using RX it's easy to get Observables that contain arrays of other Observables.  
 
 * Example
 
####Patterns in RX

 * In UI programming it's important to know when to make the switch from declarative (5 pillars) to imparative (if's and elses)
 * replace if's with filters
 * replace loops with map, reduce, & filter
 * You don't have to cram too much into a single "stream"
 
 ####jQuery code implemented in RX
  * Event Delegation
  * AJAX Callbacks
