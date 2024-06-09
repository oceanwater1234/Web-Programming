import "../styles/Header.scss";
import { Link } from "react-router-dom"; 
import logo from "../icons/logo.png";
import { useState } from "react";


export default function Header({ backgroundColor }) {
  return (
    <div className="container" style={{ background: backgroundColor }}> 
        <Link to="/">
          <img src={ logo }/>  
        </Link>
        <Link to="/SignIn">SignIn</Link>
        <Link to="/SignUp">SignUp</Link>
        <Link to="/Todo">Todo</Link>
        <Link to="/University"> University</Link>
    </div>
  );
}
