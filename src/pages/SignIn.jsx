import { useState } from "react";
import "../styles/SiginIn.scss"

export default function SignIn({ setHeaderColor }) {
  setHeaderColor('linear-gradient( 90deg,#00AFB9,#FED9B7)')

  return (
    <div className="main2">
        <div className="wrapper">
            Hello World!
        </div>
    </div>
  );
}