import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";
import PrivatRoute from "../PrivatRoute/PrivatRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import Myapporment from "../../Pages/Dashboard/Myapporment/Myapporment";
import Alluser from "../../Pages/Dashboard/AllUser/Alluser";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivatRoute>
            <DashboardLayout></DashboardLayout>
          </PrivatRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <Myapporment></Myapporment>,
          },
          {
            path: "/dashboard/alluser",
            element: (
              <AdminRoute>
                {" "}
                <Alluser></Alluser>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/addDoctor",
            element: (
              <AdminRoute>
                {" "}
                <AddDoctor></AddDoctor>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/managedoctor",
            element: (
              <AdminRoute>
                <ManageDoctor></ManageDoctor>
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);
export default router;
