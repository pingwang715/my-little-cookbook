import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "./components/About.jsx";
import Like from "./components/Like.jsx";
import Home, { recipesLoader } from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";
import Add from "./components/add.jsx";
import { LikeProvider } from "./store/like-context.jsx";
import Edit from "./components/Edit.jsx";

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} loader={recipesLoader} />
    <Route path="/home" element={<Home />} loader={recipesLoader} />
    <Route path="/about" element={<About />} />
    <Route path="/like" element={<Like />} />
    <Route path="/add" element={<Add />} />
    <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
    <Route path="/recipes/:recipeId/edit" element={<Edit />} />
  </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LikeProvider>
      <RouterProvider router={appRouter} fallbackElement={<div>Loading...</div>}/>
    </LikeProvider>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
    />
  </StrictMode>,
);
