import { Routes, Route, useLocation } from "react-router-dom";

import Header from '../components/Header';
import Todo from "./Todo";
import Auth from "./Auth";
import Main from "./Main";
import University from "./University";

export default function App() {
  const location = useLocation();

  return (
    <>
     <Header/>
      <Routes location={location}>
        <Route path="/" element={<Main/>} />
        <Route path="/auth" element={<Auth />}/>
        <Route path="/todo" element={<Todo />}/>
        <Route path="/university" element={<University/>}/>
      </Routes>
    </>
  );
}
