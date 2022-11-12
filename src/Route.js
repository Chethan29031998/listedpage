
import App from "./App";
import Listing from "./Page/Listing";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import Valid from "./Page/Valid";

const Routes=[{
    path: "/",
    element: <App/>,
    children: [
      {
        path: "listing",
        element: <Listing />,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "signup",
        element: <SignUp/>,
      },
      {
        path: "valid",
        element: <Valid/>,
      },
    ]
}]

export default Routes 