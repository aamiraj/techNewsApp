import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/DashBoard/Dashboard";
import Main from "../layout/Main/Main";
import AddNews from "../pages/Main/Dashboard/AddNews";
import ListNews from "../pages/Main/Dashboard/ListNews";
import UpdateNews from "../pages/Main/Dashboard/UpdateNews";
import History from "../pages/Main/History/History";
import Home from "../pages/Main/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <ListNews />,
          },
          {
            path: "/dashboard/addNews",
            element: <AddNews />,
          },
          {
            path: "/dashboard/updateNews/:id",
            element: <UpdateNews />,
            loader: ({ params }) =>
              fetch(`https://tech-news-server-aamiraj.vercel.app/news/${params.id}`),
          },
        ],
      },
    ],
  },
]);

export default router;
