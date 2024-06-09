import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Main from "./Main";
import University from "./University";
import { useState } from "react";

export default function App() {
  const [headerColor, setHeaderColor] = useState('linear-gradient( 90deg,#0081A7,#00AFB9)');

  return (
    <>
      <Header backgroundColor={headerColor}/>
      <Routes>
        <Route path="/" element={<Main setHeaderColor={setHeaderColor}/>}></Route>
        <Route path="/Todo" element={<Todo setHeaderColor={setHeaderColor}/>}></Route>
        <Route path="/SignUp" element={<SignUp setHeaderColor={setHeaderColor}/>}></Route>
        <Route path="/SignIn" element={<SignIn setHeaderColor={setHeaderColor}/>}></Route>
        <Route path="/University" element={<University setHeaderColor={setHeaderColor}/>}></Route>
      </Routes>
    </>
  );
}
