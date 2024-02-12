import LongNav from './LongNav'
import Sidebar from './Sidebar'

const Navbar = () => {

  return (
   <nav className='sticky top-0 z-30 w-full border-2'>
    <LongNav/>
    <Sidebar/>
   </nav>
  )
}

export default Navbar
