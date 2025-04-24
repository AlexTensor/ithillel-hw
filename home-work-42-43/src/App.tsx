import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import About from "./components/About.tsx";
import Photos from "./components/Photos.tsx";
import Error404 from "./components/error404.tsx";
import Layout from "./components/Layout.tsx";
import Home from "./components/Home.tsx";
import {createContext} from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const MyFirstContext = createContext({data: 'default'});


function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <MyFirstContext.Provider value={{data: 'some data'}}><Layout /></MyFirstContext.Provider>,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: 'about',
            element: <About />
          },
          {
            path: 'photos',
            element: <Photos />
          },
          {
            path: '*',
            element: <Error404 />
          }
        ]
      }
    ]
  );


  return (
    <RouterProvider router={router} />
  )
}

export default App
