import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import Resources from './Pages/Resources'
import Error from './Pages/Error'
import Layout from "./Layout"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import ForgetPassword from "./Pages/ForgetPassword"
import UpdatePassword from "./Pages/UpdatePassword"

function App() {

  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<Home />} />
        <Route path='aboutus' element={<About />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='faq' element={<Faq />} />
        <Route path='resources' element={<Resources />} />
        <Route path="*" element={<Error />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/login/update-password/:id' element={<UpdatePassword />} />
    </Routes>
  )
}

export default App
