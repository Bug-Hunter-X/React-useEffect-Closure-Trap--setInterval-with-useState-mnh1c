# React useEffect Closure Trap: setInterval with useState

This example demonstrates a common pitfall in React when using `useEffect` with `setInterval`.  The closure created within the `useEffect` callback captures the final value of the `count` variable, leading to unexpected behavior. The solution involves using functional updates to capture the correct value at each interval call.

## Bug
The bug lies in how the `setInterval` callback function within `useEffect` is created.  Because it uses a closure over `count`, it will always use the final value of `count` after the loop completes. 

## Solution
The solution is to use functional updates (`setCount(prevCount => prevCount + 1)`) within the `setInterval` callback. This ensures that you're always working with the current state.
