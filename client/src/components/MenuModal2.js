import React from 'react'
import compartir from '../img/compartir.png';
import bocadillo from '../img/bocadillo.png';
import exportar from '../img/exportar.png';
import alerta from '../img/alerta.png';
import { BiDotsVerticalRounded } from "react-icons/bi";

import '../css/dots.css'


export const MenuModal2 = () => {


    return (
        <div>

    
                <div>
                    <a href="#openModal7" className='aModal7'> <BiDotsVerticalRounded className="dots" color="white"/></a>

                </div>

            <div id="openModal7" class="modalDialog">
                <div className='modalEventsTotal'>
                    <a href="#close" title="Close" class="close">X</a>

                    <h2 className='pModal2'>Selecciona una acción </h2>
                    <hr />
                    <div className='divPmodal'>
                        <p><img src={compartir} className='imgMenuModal' /></p>
                        <h3 className='pModal'> Copiar enlace del evento</h3>
                    </div>
                    <div className='divPmodal'>
                        <p className='pModal'><img src={exportar} className='imgMenuModal' /></p>
                        <h3 className='pModal'>Compartir evento</h3>
                    </div>
                    <div className='divPmodal'>
                        <p><img src={bocadillo} className='imgMenuModal' /></p>
                        <h3 className='pModal'>Contactar con el coordinador</h3>
                    </div>
                    <div className='divPmodal'>
                        <p> <img src={alerta} className='imgMenuModal' /></p>
                        <h3 className='pModal'>Reportar evento</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
