* Components render to a virtual DOM
* Changes are diff-ed in the virtual DOM
* Minimum set of DOM operations are computed and queued
* Batch executes all updates to "patch" the real DOM
