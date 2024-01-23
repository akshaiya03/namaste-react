import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"
import { lazy ,Suspense} from "react"
import Contact from "./src/components/Contact"
import Error from "./src/components/Error"
import Restaurantmenu from "./src/components/Restaurantmenu"
import { Provider } from "react-redux"
import appstore from "./src/components/utilitise/appstore"
import Cart from "./src/components/Cart"


const About=lazy(()=>import("./src/components/About"))
const App = () => {
    return (
      <Provider store={appstore}>
      <div className="completeapp">
          <Header/>
          <Outlet/>
      </div>
      </Provider>
    )
}
const approuter =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
    {
       path:"/about",
       element:
       <Suspense fallback="loading.."><About/></Suspense>
    },
    {
       path:"/ContactUs",
       element:<Contact/>,
    },
    {
      path:"/restaurant/:redId",
      element:<Restaurantmenu/>
    },
    {
      path:"/Cart",
      element:<Cart/>
    }
],
errorElement:<Error/>
}
])


  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
