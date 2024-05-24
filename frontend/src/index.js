import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import "./css/index.css";

import App from "./pages/app/App";
import MoviesPage from "./pages/movies-page/MoviesPage";
import { RatedPageLazy } from "./pages/rated-page/RatedPage.lazy";
import { MoviePageLazy } from "./pages/movie-page/MoviePage.lazy";
import { NotFoundPageLazy } from "./pages/not-found-page/NotFound.lazy";
import { Suspense } from "react";

const root = document.getElementById("root");

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <MoviesPage />
          </Suspense>
        ),
      },
      {
        path: "/rated",
        element: (
          <Suspense>
            <RatedPageLazy />
          </Suspense>
        ),
      },
      {
        path: "/movie",
        element: (
          <Suspense>
            <MoviePageLazy />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense>
        <NotFoundPageLazy />
      </Suspense>
    ),
  },
]);

container.render(
  <MantineProvider
    theme={{
      fontFamily: "Inter, sans-serif",
      fontFamilyMonospace: "Inter, sans-serif",
      headings: { fontFamily: "Inter, sans-serif" },
    }}
  >
    <RouterProvider router={router} />
  </MantineProvider>
);
