import React from 'react'
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import logMenu from '../img/logMenu.png';
import bell from '../img/campana.png';
import bellAlert from '../img/campana.roja.png';
import { AiOutlineLogout, AiOutlineUser,AiOutlinePlusCircle } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

export const MenuModalCoordinator = (props) => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const logout = () =>{
        cookies.remove('session', { path: '/' });
        localStorage.clear();
        navigate("/");
    }

    return (
        <div>
            {props.pendings ? <img src={bellAlert} className='imgMenuModal2' /> : <img src={bell} className='imgMenuModal2' />}
            <a href="#openModal" className='aModal'> <img src={logMenu} className='imgMenuModal2' /></a>
            <div id="openModal" class="modalDialog">
                <div className='modalEventsTotal'>
                    <a href="#close" title="Close" class="close">X</a>
                    <h2 className='pModal2'>Selecciona una acción </h2>
                    <hr />
                    <div className='divPmodal'>
                        <p><AiOutlineUser className='logout-icon imgMenuModal'/></p>
                        <h3 className='pModal'> Perfil</h3>
                    </div>
                    <div className='divPmodal'>
                        <p className='pModal'><AiOutlinePlusCircle  className='logout-icon imgMenuModal'/></p>
                        <h3 className='pModal'>Crear Evento</h3>
                    </div>
                    <div className='divPmodal'>
                        <p><BiWorld className='logout-icon imgMenuModal'/></p>
                        <h3 className='pModal'>Comunidad</h3>
                    </div>
                    <div className='divPmodal' onClick={logout}>
                        <p><AiOutlineLogout className='logout-icon imgMenuModal' /></p>
                        <h3 className='pModal'>Cerrar Sesión</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
