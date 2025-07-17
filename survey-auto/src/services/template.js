import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/templates'

const uploadTemplate = (payload) => {
    const request = axios.post(baseUrl, payload)
    return request.then(response => response.data)
} 

export default { uploadTemplate }
