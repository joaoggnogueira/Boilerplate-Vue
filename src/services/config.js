import axios from "axios"

export const http = axios.create({
  baseURL: "https://api.landing.muda.la",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})
