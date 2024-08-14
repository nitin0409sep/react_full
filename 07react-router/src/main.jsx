import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout, Home, About, Contact, User, Github } from "./index";
import { githubUserData } from "./components/Github/Github";
import "./index.css";

//! 1st way to right routes
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {
//         path:'',
//         element: <Home />
//       },
//       {
//         path:'about',
//         element: <About />
//       },
//       {
//         path:'contact',
//         element: <Contact />
//       },
//       {
//         path:'*',
//         element: <Home />
//       }
//     ]
//   }
// ])

//! 2nd way to write routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />}>
        {/* Nested Route - about/nitin */}
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="user" element={<User />}>
        {/* Nested Route - User/:id */}
        <Route path=":id" element={<Contact />} />
      </Route>
      <Route loader={githubUserData} path="github" element={<Github />} />
      {/* <Route path="*" element={<Home />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
