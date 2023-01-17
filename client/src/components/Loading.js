import {React, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import logo from '../img/logo.png'

export const Loading = () => {
    const navigate = useNavigate();
    var { rol } = useParams();
    rol = atob(rol);

    useEffect(()=>{
        setTimeout(() => {
            navigate("/home");
          }, "3000")
    },[])

    return (
        <div className='divLoading'>

            <div>
                <img src={logo} className='statusBar2' alt="" />
            </div>
            <div className='contenedor'>

                <div className='barra'>
                    <div className='texto'></div>
                </div>
            </div>

        </div>
    )
}
