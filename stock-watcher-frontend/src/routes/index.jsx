import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Signals from "../pages/Signals.jsx";
import Holdings from "../pages/Holdings.jsx";
import Settings from "../pages/Settings.jsx";
import NotFound from "../pages/NotFound.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "signals", element: <Signals /> },
      { path: "holdings", element: <Holdings /> },
      { path: "settings", element: <Settings /> }
    ]
  },
  { path: "*", element: <NotFound /> }
]);