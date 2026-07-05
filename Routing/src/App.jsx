import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import DashBoard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import "./components/NavBar.css";
import Param from "./components/Param";
import Courses from "./components/Courses";
import Results from "./components/Results";
import Mocktest from './components/Mocktest'
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        <About />
      </div>
    ),
  },
  {
    path: "/Dashboard",
    element: (
      <div>
        <NavBar />
        <DashBoard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Courses />
      },
      {
        path: "mock-test",
        element:<Mocktest></Mocktest>
      },
      {
        path: "results",
        element: <Results />
      }
    ]
  },
  {
    path: "/student/:id",
    element: <Param />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;