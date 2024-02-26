import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageLayout from "./PageLayout/PageLayout";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RootPage from "./Pages/RootPage/RootPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollTo(0, 0);
    };

    // Dodanie listenera do obsługi zmiany routingu
    window.addEventListener("popstate", scrollHandler);

    // Usunięcie listenera po zniszczeniu komponentu
    return () => {
      window.removeEventListener("popstate", scrollHandler);
    };
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { path: "/", element: <PageLayout /> },
        { path: "/form/:id", element: <LoginPage /> },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
      children: [
        { path: "/dashboard/home", element: <DashboardPage /> },
        { path: "/dashboard/account", element: <DashboardPage /> },
        { path: "/dashboard/alice", element: <DashboardPage /> },
        { path: "/dashboard/settings", element: <DashboardPage /> },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
