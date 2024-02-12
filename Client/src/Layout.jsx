import LongNav from "./Components/Navbar/LongNav"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <LongNav />
            <Outlet />
        </div>
    )
}

export default Layout