import axios from "axios"
const getAllItems = (url) => {
    return axios.get(url).then(resp => resp.data)
}
const deleteItem = (url, id) => {
    return axios.delete(`${url}/${id}`).then(resp => resp.data)
}
const updateItem = (url, id, obj) => {
    return axios.put(`${url}/${id}`, obj).then(resp => resp.data)
}
const addItem = (url, obj) => {
    return axios.post(url, obj).then(resp => resp.data)
}
export default { getAllItems, deleteItem, updateItem, addItem }