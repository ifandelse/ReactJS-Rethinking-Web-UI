##ReactJS Architectural Principles

* Maintain unidirectional data flow
    * Parent-to-Child(ren)
    * Children to Dispatcher
    * Dispatcher to "Stores"
    * Stores to Views
* Dispatcher acts as a "central hub"
* Stores register with Dispatcher
* 'Controller Views' update with new store state
* Changes in component tree ripple down