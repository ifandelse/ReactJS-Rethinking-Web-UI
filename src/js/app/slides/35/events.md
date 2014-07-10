* ReactJS implements a "synthetic events" system
* Use event delegation at root
* Handlers receive a `SyntheticEvent` instance (a *consistent-cross-browser* wrapper)
* Full W3C spec HMLT5 events as far back as IE8
* You can still attach to normal DOM events if needed