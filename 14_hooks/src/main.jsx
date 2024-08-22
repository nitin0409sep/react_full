import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { lazy, Suspense } from "react";
const About = lazy(() => delayLoading(import("./components/About.jsx")));
const Contact = lazy(() => import("./components/Contact.jsx"));
import ForwardRefParent from "./forwaredRef/ForwardRefParent.jsx";
import LayoutEffect from "./layoutEffect/LayoutEffect.jsx";
import Memo from "./memo/Memo.jsx";
import Reducer from "./reducer/Reducer.jsx";

//! Route based lazy loading
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="about"
        element={
          <Suspense fallback={<div>Loading About...</div>}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<div>Loading Contact...</div>}>
            <Contact />
          </Suspense>
        }
      />

      <Route path="forwardRef" element={<ForwardRefParent />} />
      <Route path="layoutEffect" element={<LayoutEffect />} />
      <Route path="memo" element={<Memo />} />
      <Route path="reducer" element={<Reducer />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);

//? Add a fixed delay so we can see the loading state
function delayLoading(promise) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
