import { apiInstance } from ".."

export const signin = async(body) => {
    return await apiInstance().post("/auth/SignIn",body)
}