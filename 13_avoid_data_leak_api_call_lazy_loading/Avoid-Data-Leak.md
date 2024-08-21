# Avoid Data Leak & Lazy Loading Concepts

## Case - Suppose we hit an API, and it takes 3-4 sec's to bring data , and within that u changed your mind and navigated to some other component. Then at that time the chances of data leak will be increased, so the react will give you the warning too.

# #! Solution

### useRef - hook - 1 solution

# Changing the value of a ref (isMounted.current = false) does not cause a re-render, while updating state does.

## lazy(load) => load -> a Promise or another thenable (a Promise-like object with a then method).

### Load - return a Promise or some other thenable (a Promise-like object with a then method). It needs to eventually resolve to an object whose .default property is a valid React component type, such as a function, memo, or a forwardRef component.
