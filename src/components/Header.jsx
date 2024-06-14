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
      case '/': ChangeBackGroundColor('#042121'); break;
      case '/auth': ChangeBackGroundColor('#035e49'); break;
      case '/Profile': ChangeBackGroundColor('#2aba8f'); break;
      case '/university': ChangeBackGroundColor('#00d67d'); break;
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