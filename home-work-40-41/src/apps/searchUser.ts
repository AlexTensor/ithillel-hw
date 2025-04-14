import axios, {AxiosResponse} from "axios";
import {Employee} from "../interfaces/interfaces.ts";
const BASE_URL = 'https://boringapi.com/api/v1'

async function searchUser(name:string): Promise<Employee[]> {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}/employees?search=${name}`);
        return response.data.employees;
    } catch (err: any | undefined) {
        console.error(err.toJSON())
        return []
    }
}

export {searchUser};
