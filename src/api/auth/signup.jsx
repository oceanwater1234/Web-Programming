import { apiInstance } from ".."

export const signup = async(body) => {
    return await apiInstance().post("/auth/SignUp",body)
}