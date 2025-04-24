import {NavLink} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/photos'>Photos</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;