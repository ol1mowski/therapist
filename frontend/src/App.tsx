import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageLayout from "./PageLayout/PageLayout";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RootPage from "./Pages/RootPage/RootPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { path: "/", element: <PageLayout /> },
        { path: "/form/:id", element: <LoginPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
