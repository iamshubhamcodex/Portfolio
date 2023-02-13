import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
    errorElement: <p>No Page Found</p>,
  },
  {
    path: "/About",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/Work",
    element: (
      <>
        <Navbar />
        <Work />
      </>
    ),
  },
  {
    path: "/Contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  {
    path: "/Notes",
    element: (
      <>
        <Navbar />
        <p>Notes Page </p>
      </>
    ),
  },
  // {
  //   path: "/:id",
  //   element: <p>About Page{id} </p>,
  // },
]);
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Navbar />
      <Home /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
