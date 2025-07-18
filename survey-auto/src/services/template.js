import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/templates'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const getById = (id) => {
    return axios.get(`${baseUrl}/${id}`).then(response => response.data)
}

const uploadTemplate = (payload) => {
    const formData = new FormData()
    formData.append('template', payload.templateFile)
    formData.append('templateName', payload.templateName)
    const config = {
        headers: {
            "Content-type": "multipart/form-data",
        },
    }
    const request = axios.post(baseUrl, formData, config)
    return request.then(response => response.data)
} 

export default { getAll, getById, uploadTemplate }
