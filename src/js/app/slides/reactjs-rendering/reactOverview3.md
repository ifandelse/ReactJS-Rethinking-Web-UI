* Components render to an intermediate DOM
* Changes are diff-ed with the real DOM
* Minimum set of DOM operations are computed and queued
* Batch executes all updates (usually beats manual DOM ops)
* The virtual DOM means you could render server-side in node.js
