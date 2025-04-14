import {JSX} from "react";
import '../styles/Header.scss'

function Header({name}: {name: string}): JSX.Element {
    return (
        <h1>Search by {name}</h1>
    )
}

export default Header;