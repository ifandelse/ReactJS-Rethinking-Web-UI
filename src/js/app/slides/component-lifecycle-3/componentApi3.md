* `shouldComponentUpdate(nextProps, nextState)` - called before render when new props or state are received. (return false to prevent a component update)
* `componentWillUpdate` - called right before render (not 1st render) when new props or state are being received.
* `componentDidUpdate` - called right after updating has occurred (but not on 1st render). Operate on the DOM here if needed.
