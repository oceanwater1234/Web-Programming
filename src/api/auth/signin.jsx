import { apiInstance } from ".."

export const signin = async(body) => {
    return await apiInstance().post("http://localhost:8000/auth/SignIn",body)
}