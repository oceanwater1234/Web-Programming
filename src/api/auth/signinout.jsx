import { apiInstance } from ".."

export const signout = async(body) => {
    return await apiInstance().post("/auth/SignOut",body)
}