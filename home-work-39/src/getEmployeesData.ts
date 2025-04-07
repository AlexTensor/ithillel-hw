import {Employee} from "./interfaces/interfaces.ts";

export async function getEmployeesData(): Promise<Employee[]> {
    return fetch('https://boringapi.com/api/v1/employees')
        .then(res => res.json())
        .then(data => data.employees);
}