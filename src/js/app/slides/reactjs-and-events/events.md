* ReactJS implements a "synthetic events" system
* Uses event delegation at root
* Handlers receive a `SyntheticEvent` instance (a *consistent-cross-browser* wrapper)
* Full W3C spec HTML5 events as far back as IE8
* You can still attach to normal DOM events if needed