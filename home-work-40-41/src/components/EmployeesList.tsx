import {JSX} from "react";
import {Employee} from "../interfaces/interfaces.ts";
import EmployeeCard from "./EmployeeCard.tsx";
import '../styles/EmployeesList.scss'

function EmployeesList({data}: {data: Employee[]}): JSX.Element {

    return (
        <>
            <div className='cardList'>
                {
                    data.map(function(item: Employee): JSX.Element {
                        return <EmployeeCard {...item} key={item.id} />
                    })
                }
            </div>
        </>
    )

}
export default EmployeesList;