import { Link, useLocation } from "react-router-dom"; 

import "../styles/Header.scss";
import logo from "../assets/logo.png";
import { useEffect } from 'react';
import  useStore  from '../hooks/Background';

export default function Header() {
  const BackGroundColor = useStore((state) => state.BackGroundColor)
  const ChangeBackGroundColor = useStore((state) => state.ChangeBackGroundColor)
  const location = useLocation()

  useEffect(()=>{
    switch(location.pathname) {
      case '/': ChangeBackGroundColor('linear-gradient( 90deg,#0081A7,#00AFB9)'); break;
      case '/auth': ChangeBackGroundColor('linear-gradient( 90deg,#00AFB9,#FED9B7)'); break;
      case '/Profile': ChangeBackGroundColor('linear-gradient(90deg, #FED9B7, #F07167)'); break;
      case '/university': ChangeBackGroundColor('linear-gradient(90deg, #F07167, #f8483c)'); break;
    }
  },[location,ChangeBackGroundColor])
  
  return (
    <div className="container" style={{background:BackGroundColor}}> 
        <Link to="/">
          <img src={ logo }/>  
        </Link>
        <Link to="/auth">Auth</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/university"> University</Link>
    </div>
  );
}