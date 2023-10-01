import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Userlist from "./components/Userlist"
import RootLayout from "./components/Rootlayout"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/userlist" element={<Userlist/>}></Route>
  </Route>
))

function App() {
  
  return <RouterProvider router={router}/>

}

export default App
