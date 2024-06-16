import { authInstance } from "..";

export const UserInfo = {
    school: "",
    name: "",
    username:""    
}
  
export const hello = async () => {
    return await authInstance().get("http://localhost:8000/auth");
};