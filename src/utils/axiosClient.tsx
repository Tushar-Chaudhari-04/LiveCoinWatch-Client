import axios from "axios"

let origin='http://localhost:8081/api'

// process.env.REACT_APP_BASE_URL?process.env.REACT_APP_BASE_URL:
export const axiosClient=axios.create({
  baseURL:origin
})