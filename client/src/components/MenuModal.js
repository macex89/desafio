import React from 'react'
import logMenu from '../img/logMenu.png';
import compartir from '../img/compartir.png';
import bocadillo from '../img/bocadillo.png';
import exportar from '../img/exportar.png';
import alerta from '../img/alerta.png';


export const MenuModal = () => {



    return (
        <div>
            <a href="#openModal" className='aModal'> <img src={logMenu} className='imgMenuModal2' /></a>

            <div id="openModal" class="modalDialog">
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
