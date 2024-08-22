# Hooks

## 1. useDeffered()

## 2. useCallback()

### useCallback: Memoizes the function but doesn’t prevent re-renders of the component.

### The useCallback hook memoizes the fetchUsers function, ensuring that the function reference remains the same as long as its dependencies (query) do not change. However, this does not prevent the component from re-rendering. When the parent component re-renders, the child component will also re-render by default.

## 3. memo()

### Prevents Children Component from re-rendering unless absolutely necessary, you can use React.memo in the child component. React.memo is a higher-order component that memoizes the result of a component's render and only re-renders the component if its props change.

### React.memo checks if the props have changed between renders. If the props remain the same, it skips the re-render of Children.

## 4. useForwardRef() & useImperativeHandler()

### forwardRef accepts a render function as an argument. React calls this function with props and ref:

### Instead of exposing an entire DOM node, you can expose a custom object, called an imperative handle, with a more constrained set of methods. To do this, you’d need to define a separate ref to hold the DOM node:

## 5. useMemo()

### Caches the result of a calculation between re-renders.

### useMemo hook is designed to return a memoized value.

## 6. useLayoutEffect()

### useLayoutEffect can hurt performance. useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

# Remaining

### useInsertionEffect

### useLayoutEffect

### useSyncExternalStore

### useTransition
