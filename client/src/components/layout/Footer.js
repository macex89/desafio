import React from 'react'
import imgFooter from '../../img/imgFooter.png'
import barra from '../../img/barra.png'


export const Footer = () => {
    return (
            <footer className='footerC'>
                <div className='divFooter'>
                <p className='pdif'>Política de Privacidad</p>
                <p><img src={barra} className="imgbarra"/></p>
                <p>Política de Cookies</p>
                <br/>
                <p><img src={barra} className="imgbarra"/></p>
                <p>Aviso Legal</p>
                <br/>
                <p><img src={barra} className="imgbarra"/></p>
                <p>Quienes somos</p>
                </div>
                <div className='divFooA'>
                    <a href="">Ver más</a>
                </div>
            </footer>
    )
}
