import axiosInstance from '../../utils/axios'

export const getTransactions = async () => {
  const response = await axiosInstance.get('/transactions')
  return response.data
}

export const addTransactions = async (data) => {
  const response = await axiosInstance.post('/transactions', data)
  return response.data
}

export const editTransactions = async (id, data) => {
  const response = await axiosInstance.put(`/transactions/${id}`, data)
  return response.data
}

export const deleteTransactions = async (id) => {
  const response = await axiosInstance.delete(`/transactions/${id}`)
  return response.data
}
