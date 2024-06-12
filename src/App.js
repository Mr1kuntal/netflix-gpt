import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";


const AppLayout = () => {

  return (
      <Provider store={appStore}>
      <>
      
      <Body/>
      <Outlet/>
      
      </>      
      </Provider>  
      
  )
};

const appRouter = createBrowserRouter([
  {
      path : "/",
      element : <AppLayout/>,
      // errorElement : <Error/>,  // this will load when there is any error on our page 
      children : [
          {
              path : "/",
              element : <Login/>
          },
          {
              path : "/browse",
              element : <Browse/>
          },                                                       
      ]
  }
])


function App() {
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
