import {JSX, useState} from "react";
import {getEmployeesData} from "../getEmployeesData.ts"
import {Employee} from "../interfaces/interfaces.ts";
import EmployeeCard from "./EmployeeCard.tsx";
import "../styles/EmployeesDashbord.css";

function EmployeesDashboard(): JSX.Element {
    const [getDataStatus, setDataStatus] = useState<boolean>(false);
    const [loadedData, setLoadedData] = useState<Employee[]>([]);

    async function getData(): Promise<void> {
        setDataStatus(!getDataStatus);
        if(!getDataStatus) {
            setLoadedData(await getEmployeesData())
        }else{
            setLoadedData([]);
        }

    }
    return (
        <>
            <button onClick={async () => await getData()}>{!getDataStatus ? 'Get Data' : 'Clear Data'}</button>
            <div className='cardList'>
                {
                    loadedData.map(function(item: Employee): JSX.Element {
                        return <EmployeeCard {...item} key={item.id} />
                    })
                }
            </div>
        </>
    )

}
export default EmployeesDashboard;