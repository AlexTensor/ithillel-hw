import {JSX} from "react";
import {Employee} from "../interfaces/interfaces.ts";
import '../styles/EmployeeCard.scss'

function EmployeeCard(employeeData: Employee): JSX.Element {
    return (
        <>
            <div className="card">
                <h2>{employeeData.first_name}</h2>
                <div>{employeeData.last_name}</div>
                <div>{employeeData.email}</div>
                <div>{'$' + employeeData.salary}</div>
            </div>
        </>
    )
}
export default EmployeeCard;