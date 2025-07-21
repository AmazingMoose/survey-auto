import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/surveys'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const update = (payload) => {
    console.log(payload)
    const config = {
        params: {
            payload
        }
    }
    const request = axios.post(baseUrl, config)
    return request.then(res => res.data)
}

export default { getAll, update }