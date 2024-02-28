import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageLayout from "./PageLayout/PageLayout";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RootPage from "./Pages/RootPage/RootPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";


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
    { path: "/dashboard/:id", element: <DashboardPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
