import { apiInstance } from ".."

export const signup = async(body) => {
    return await apiInstance().post("http://localhost:8000/auth/SignUp",body)
}