import axios from "axios";
const baseUrl = "http://localhost:3001"

export async function post(route, data) {
    // This axios is one the take away of the fullstack open course...
    // It makes sense...
    let job = await axios.post(`${baseUrl}/${route}`, data);

    if (job.status == 200) {
        return job.data; 
    } else {
        throw new Error(`Failed with ${job.status} error`);
    }
}