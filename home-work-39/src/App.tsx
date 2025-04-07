import {JSX} from "react";
import moment from "moment";
import SiteHeader from "./components/SiteHeader.tsx";
import EmployeesDashboard from "./components/EmployeesDashboard.tsx";

// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-expect-error
// import "reset-css"

function App(): JSX.Element {

    const nowTime: string = moment().format('DD/MM/YYYY hh:mm');

    return (
        <>
            <SiteHeader nowTime={nowTime} />
            <EmployeesDashboard />
        </>
    )
}

export default App
