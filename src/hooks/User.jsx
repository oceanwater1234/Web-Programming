import {  useQuery } from 'react-query';
import { useNavigate } from "react-router-dom";
import { authInstance } from '../api';
import {  hello } from '../api/auth/baby';


export function useUserInfo() {
    const router = useNavigate();
    const publicRoute = ["/", "/signin", "/signup"];

    return useQuery("userInfo", async () => {
      if (publicRoute.includes(router.pathname)) {
        return null;
      }
  
      try {
        const res = await hello();
        console.log("Hello")
        return res.data;
      } catch (err) {
        if (err.response?.status === 401) {
          return null;
        }
        throw err;
      }
    });
}