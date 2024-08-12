import { createElement } from "react";
import { createRoot } from "react-dom/client";

const CustomReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me",
};

const username = "Nitin";

const ReactElement = createElement(
  //! React Understand this
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click Me to visit Google",
  username // At last of tree formation, variables are added
);

const anotherReactElement = //! At the end its converted to tree like structure, as react doesn't under stand this
  (
    <a href="https://google.com" target="_blank">
      Visit Goggle
    </a>
  );

//! createRoot(document.getElementById("root")).render(MyApp()); // Valid but not a good practise

createRoot(document.getElementById("root")).render(
  <>
    {/* //! It will give error, because render function is not abel to get what is this */}
    {/* {CustomReactElement}  */}
    <br />
    {ReactElement}
    <br />
    {anotherReactElement}
  </>
);

//! {var} -> Evaluated Expression
