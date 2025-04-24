import Menu from "./Menu.tsx";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <div>
            <Menu />
            <Outlet />
            <Menu />
        </div>
    );
};

export default Layout;