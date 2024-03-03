import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageLayout from "./PageLayout/PageLayout";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RootPage from "./Pages/RootPage/RootPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import ThemeContext from "./Context/ThemeContext";
import { useState } from "react";

function App() {
  // type ThemeContextType = {
  //   theme: string;
  //   setTheme: (theme: string) => void;
  // };

  const [theme, setTheme] = useState('light');
  

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
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
