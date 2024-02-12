import { NavLinks } from "../../Utils/Constant";
import { Link, NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

const LongNav = () => {
    return (
        <div className='w-full p-4 lg:flex justify-evenly items-center bg-white shadow-md gap-4 h-[70px] hidden'>
            <Link to='/' className='text-center lg:text-[30px] text-[25px] font-[400] p-1 text-slate-900 font-display' >
                Social Forum
            </Link>
            <ul className='min-w-[680px] lg:flex justify-between capitalize p-2'>
                {NavLinks.map((navlink) => {
                    const { id, text, url } = navlink
                    return (
                        <li key={id}  >
                            <NavLink to={url} className='text-slate-900 font-normal p-1 lg:text-[16px] transition font-raleway text-[20px] mx-1 mt-2 hover:text-gray-800 hover:border-b-[2px] hover:border-b-secondary'> {text} </NavLink>
                        </li>
                    )
                })}
            </ul>
            <Link to='/login' className='text-center border-2 rounded-full border-slate-900 lg:text-[30px] text-[25px] font-[400] p-1 text-slate-900 font-display' >
                <BsPersonFill />
            </Link>
        </div>
    )
}

export default LongNav