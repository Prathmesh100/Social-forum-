import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import Resources from './Pages/Resources'
import Error from './Pages/Error'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/aboutus' element={<About />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/resources' element={<Resources />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
