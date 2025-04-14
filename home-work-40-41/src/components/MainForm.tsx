import '../styles/mainForm.scss'
import React, {JSX, useEffect, useRef} from "react";
import {searchUser} from "../apps/searchUser.ts";
import {Employee} from "../interfaces/interfaces.ts";

function MainForm({employeeSet, setSearchValue}:{employeeSet: any, setSearchValue: any}): JSX.Element {
    const input: React.RefObject<any> = useRef(null);
    async function onClick(): Promise<void> {
        if(input && input.current.value.length > 1) {
            setSearchValue(input.current.value);
            const result: Employee[] = await searchUser(input.current.value);
            employeeSet(result);
        }
    }

    async function getEmployees(): Promise<void> {
        const result: Employee[] = await searchUser(input.current.value);
        employeeSet(result)
    }

    useEffect(() => {
        setSearchValue((searchValue: string): string => input.current.value = searchValue);
        getEmployees()
    }, [])

    return (
      <>
          <div className="mainForm">
            <input name='userName' ref={input} placeholder='Type name...'></input>
            <button type='button' onClick={onClick}>Search</button>
          </div>
      </>
    );
}
export default MainForm;