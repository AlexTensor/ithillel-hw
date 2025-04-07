import {JSX} from "react";
import "../styles/SiteHeader.css"

function SiteHeader({nowTime}: {nowTime: string}): JSX.Element {
    return (
        <>
            <h1>Employees List<br/>{nowTime}</h1>
        </>
    );
}
export default SiteHeader;