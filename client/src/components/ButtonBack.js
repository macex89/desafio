import React from 'react'
import { NavLink } from 'react-router-dom'
import back from '../img/back.png'

export const ButtonBack = () => {
    return (
      <NavLink to="/home">
        <button className="butBackEvent" > <img src={back}/></button>
      </NavLink>
    );
  }
  
  export default ButtonBack;