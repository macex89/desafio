import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../img/logo.png'
import MyCalendar from './MyCalendar'
import { Footer } from './layout/Footer'

import { MenuAllEvents } from './MenuAllEvents'
import { MenuModal } from './MenuModal'



export const HomeVolunteer = () => {

    const [events, setEvents] = useState()
    const [calendar, setCalendar] = useState(true)
    const [formations, setFormations] = useState(true)



    useEffect(() => {

        fetch("/get-events")
            .then(response => response.json(response))
            .then(response => {
                console.log(response)
                setEvents(response)

                // setEvents(response)

            })


    }, [])





    return (
        <div>

            <div className='divLoginCar'>
                <img src={logo} className='imgLogin2' alt="Logo Cruz Roja" />


                <div><MenuModal /></div>
            </div>

            <motion.div className='slider-container'>
                <div className='menuFormation'>
                    <p className='pTitleEvent'>Eventos Recomendados</p>
                    <p className='pPesEvent'><MenuAllEvents /></p>
                </div>
                <motion.div className='slider' drag='x'
                    dragConstraints={{ right: 0, left: -785 }} >

                    {events ? events.map((everyEvent, i) => (
                        <motion.div className='imageCarrusel'>

                            <div key={i} className="boxEventAll">
                                <img src={`/${everyEvent.image}`} className="imgEventAll" alt="" />
                                <div className='divEventWhite'>
                                    <p className='pCarruselEvent'>{everyEvent.titulo} </p>
                                    <p className='pCarruselLocal'>{everyEvent.localizacion}</p>
                                    <p className='pCarruselTime'>{everyEvent.fecha_ini}</p>
                                </div>
                            </div>

                        </motion.div>

                    )) : "Cargando..."}


                </motion.div>

            </motion.div>

            {calendar ?
                <div>
                    <p className='pEvent'>Mis eventos</p>
                    <MyCalendar />
                </div>
                : ""}

            <motion.div className='slider-container'>
                <div className='divPesEvent'>
                    <p className='pTitleEvent'>Eventos Disponibles</p>
                    <p className='pPesEvent'><MenuAllEvents /></p>
                </div>

                <motion.div className='slider' drag='x'
                    dragConstraints={{ right: 0, left: -772 }} >


                    {events ? events.map((everyEvent, i) => (
                        <motion.div className='imageCarrusel'>

                            <div key={i} className="boxEventAll">
                                <img src={`/${everyEvent.image}`} className="imgEventAll" alt="" />
                                <div className='divEventWhite'>
                                    <p className='pCarruselEvent'>{everyEvent.titulo} </p>
                                    <p className='pCarruselLocal'>{everyEvent.localizacion}</p>
                                    <p className='pCarruselTime'>{everyEvent.fecha_ini}</p>
                                </div>
                            </div>

                        </motion.div>

                    )) : "Cargando..."}

                </motion.div>

            </motion.div>

            <div className='divFormations'>
                <div className='menuFormation'>

                    <p className='pForm'>Formaciones</p>
                    <p className='pPesEvent'><MenuAllEvents /></p>

                </div>
                {/* 
                <div>

                    {formations ? formations.map((formation, i) => (

                        <div key={i}>

                            <div>
                                <p>{formation.nombreFormacion}</p>
                            </div>

                        </div>

                    )) : ""}

                </div> */}
            </div>
        </div>
    )


}
