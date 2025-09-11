import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  type LoaderFunctionArgs,
} from "react-router";
import Videos from "./pages/Videos.tsx";
import VideoDetail from "./pages/VideoDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: searchLoader,
        Component: Videos,
      },
      {
        path: "/videos",
        loader: searchLoader,
        Component: Videos,
      },
      {
        path: "/watch/:videoId",
        Component: VideoDetail,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

async function searchLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchKey = url.searchParams.get("q")?.trim();
  return { q: searchKey, results: [] };
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
