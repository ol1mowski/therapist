import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageLayout from "./PageLayout/PageLayout";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <PageLayout /> },
    { path: "/login", element: <LoginPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
