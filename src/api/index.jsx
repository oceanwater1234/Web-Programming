import axios from "axios"

export const apiInstance = (withCredentials) => {
    axios.create({
        baseURL:"http://localhost:8000/auth/SignUp",
        withCredentials: withCredentials ?? true,
        headers:{
            "Content-Type": "application/json",
        }
    })
}

let originalRequest = [];

export const authInstance = (retry) => {
    const instance = axios.create({
        baseURL:"http://localhost:8000/auth/SignUp",
        withCredentials:true,
        headers:{
            "Content-Type": "application/json",
        },
    })

    instance.interceptors.request.use(async (config) => {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(
            "accessToken"
        )}`

        originalRequest.push({
            url: config.url || "",
            method: config.method || "",
            data: JSON.stringify(config.data) || "",
        })
        return config
    })

    instance.interceptors.response.use(
        (config) => config,
    )
    return instance
}