import axios from 'axios'

const baseUrl = 'https://localhost:3001/api/surveys'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}


export default { getAll }