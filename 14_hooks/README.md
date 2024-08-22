# Hooks

## 1. useDeffered()

## 2. useCallback()

### useCallback: Memoizes the function but doesn’t prevent re-renders of the component.

### The useCallback hook memoizes the fetchUsers function, ensuring that the function reference remains the same as long as its dependencies (query) do not change. However, this does not prevent the component from re-rendering. When the parent component re-renders, the child component will also re-render by default.

## 3. memo()

### Prevents Children Component from re-rendering unless absolutely necessary, you can use React.memo in the child component. React.memo is a higher-order component that memoizes the result of a component's render and only re-renders the component if its props change.

### React.memo checks if the props have changed between renders. If the props remain the same, it skips the re-render of Children.
