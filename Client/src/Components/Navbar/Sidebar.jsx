import { useState } from "react"
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLinks } from "../../Utils/Constant";

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className='w-full p-4 justify-center items-center bg-slate-200 shadow-md flex-col border-2 h-screen'>
            <h2 className='text-start text-[25px] font-[700] mb-2 ml-5 text-slate-900'>
                Social Forum
            </h2>
            <button className='absolute top-[32px] right-[20px] lg:hidden cursor-pointer hover:scale-110 hover:rotate-12 transition' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {!isSidebarOpen && <AiOutlineMenu className='text-3xl text-secondary' />}
            </button>
            <ul className={isSidebarOpen ? 'flex flex-col gap-3 pt-[60px] h-screen w-screen absolute z-10 top-0 left-0 bg-slate-200' : 'hidden'}>
                <h1 className='text-start text-[40px] font-[700] mb-[10px] mt-[-45px] ml-3 text-slate-900'>Social forum</h1>
                {NavLinks.map((navlink) => {
                    const { id, text, url } = navlink
                    return (
                        <li key={id} className='capitalize' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <NavLink to={url} className='block text-slate-900 font-light p-2 transition text-[20px] mx-1 mt-2 hover:text-gray-800 rounded-md hover:translate-x-3 hover:bg-slate-500'> {text} </NavLink>
                        </li>
                    )
                })}
                <button className='z-20 absolute top-[30px] right-[30px] hover:rotate-12 hover:scale-110' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <AiOutlineClose className='text-3xl text-danger ' />
                </button>
            </ul>
        </div>
    )
}

export default Sidebar