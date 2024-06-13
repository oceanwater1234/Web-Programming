import { Routes, Route, useLocation } from "react-router-dom";

import Header from '../components/Header';
import Profile from "../pages/Profile/Profile";
import Main from "./Main";
import University from "./University";
import Auth from "../pages/Auth/Auth";

export default function App() {
  const location = useLocation();

  return (
    <>
     <Header/>
      <Routes location={location}>
        <Route path="/" element={<Main/>} />
        <Route path="/auth" element={<Auth />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/university" element={<University/>}/>
      </Routes>
    </>
  );
}
