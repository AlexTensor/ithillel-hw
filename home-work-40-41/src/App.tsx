// @ts-expect-error
import 'reset-css'
import './styles/App.scss'
import MainForm from "./components/MainForm.tsx";
import {useState} from "react";
import Header from "./components/Header.tsx";
import EmployeesList from "./components/EmployeesList.tsx";

function App() {
    const [employees, employeeSet] = useState([]);
    const [searchValue, setSearchValue]: [string, any] = useState<string>('John');

  return (
    <>
        <Header name={searchValue}/>
        <MainForm employeeSet={employeeSet} setSearchValue={setSearchValue}/>
        {employees.length === 0 ? <h2 className='not-found'>Not Found</h2> : <EmployeesList data={employees}/>}
    </>
  )
}

export default App
