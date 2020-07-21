import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'localhost:80',
  timeout: 10000,
  headers: {'Content-type': 'application/json'}
});

export async function postImage(payload) {
  try {
    let response = axiosInstance.post('/api/image', payload)

    return response
  } catch (error) {
    console.error(error)
  }
}