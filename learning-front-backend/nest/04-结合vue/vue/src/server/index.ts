import axios from 'axios'

export const addUser = (data:object) => axios.post('/api/user',data).then(res => res.data)
 
export const getList = (data:object) => axios.get('/api/user',{params:data}).then(res => res.data)
 
export const delUser = (data:{id:number}) => axios.delete(`/api/user/${data.id}`).then(res => res.data)
 
export const updateUser = (data:{id:number}) => axios.patch(`/api/user/${data.id}`,data).then(res => res.data)

//添加tag
export const addTags = (data:object) => axios.post(`/api/user/add/tags`,data).then(res => res.data)