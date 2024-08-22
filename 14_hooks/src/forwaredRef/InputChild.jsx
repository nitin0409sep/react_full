import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputChild = forwardRef(({ placeholder }, ref) => {
  const inputRef = useRef(null);

  //! Instead of exposing an entire DOM node, you can expose a custom object, called an imperative handle, with a more constrained set of methods. To do this, you’d need to define a separate ref to hold the DOM node:
  //? If some component(ForwardRefParent Comp) gets a ref to MyInput, it will only receive your { focus, callMe } object instead of the DOM node.
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },

        callMe() {
          console.log(ref);
          console.log("callME");
        },
      };
    },
    []
  );

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        style={{ padding: "10px" }}
      />
    </div>
  );
});

export default InputChild;
