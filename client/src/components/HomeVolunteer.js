import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../img/logo.png'
import campana from '../img/campana.png'
import punto from '../img/punto.png'
import MyCalendar from './MyCalendar'
import { Footer } from './layout/Footer'
import { useNavigate } from "react-router-dom";
import { MenuAllEvents } from './MenuAllEvents'
import { MenuModal } from './MenuModal'
import { MenuFormations } from './MenuFormations'
import { MenuEventsRecomended } from './MenuEventsRecomended'
import { BsDot } from "react-icons/bs";





export const HomeVolunteer = () => {

    const [events, setEvents] = useState()
    const [calendar, setCalendar] = useState(true)
    const [formations, setFormations] = useState()
    const navigate = useNavigate();




    useEffect(() => {

        fetch("/get-events")
            .then(response => response.json(response))
            .then(response => {
                setEvents(response)

                // setEvents(response)

            })


    }, [])



    const getFormation = () => {
        fetch("/get-formations")
            .then(response => response.json(response))
            .then(response => {
                setFormations(response)

            })

    }


    useEffect(() => {
        getFormation();

    }, [])




    function goToPag(id) {
        // window.location = id
        navigate(id);

    }


    const eventosLocal = JSON.parse(localStorage.getItem('eventos'))


    return (
        <div>

            <div className='divLoginCar'>
                <img src={logo} className='imgLogin3' alt="Logo Cruz Roja" />

                <div><MenuModal /></div>
            </div>

            <motion.div className='slider-container'>
                <div className='menuFormation'>
                    <p className='pTitleEvent'>Eventos Recomendados</p>
                    <p className='pPesEvent'><MenuEventsRecomended /></p>
                </div>
                <motion.div className='slider' drag='x'
                    dragConstraints={{ right: 0, left: -880 }} >

                    {events ? events.map((everyEvent, i) => (
                        <motion.div className='imageCarrusel'>

                            <div key={i} className="boxEventAll">
                                <button onClick={() => goToPag(`/evento/${everyEvent.id}`)} className="butStart">
                                    <img src={`/${everyEvent.image}`} className="imgEventAll" alt="" />
                                </button>
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
            <div className='divPuntosEventos'>
                <p className='iconPunto1'><BsDot size={30} /></p>
                <p className='pConfirmens'>Confirmados</p>
                <p className='iconPunto2'><BsDot size={30} /></p>
                <p className='pConfirmens'>Pendientes</p>
            </div>
            {localStorage && <div className='divEventVisu'>
             
                <p className='infoEventP'>| {eventosLocal.fecha_ini}</p>
               
                <p className='iconPunto'><BsDot size={30}  /></p>
                <p className='infoEventP'>{eventosLocal.titulo}</p>
                <p className='iconPunto'><BsDot size={30} /></p>
                <p className='infoEventP'>{eventosLocal.hora_empezar}h</p>

            </div>}



            <motion.div className='slider-container'>
                <div className='divPesEvent'>
                    <p className='pTitleEvent'>Eventos Disponibles</p>
                    <p className='pPesEvent'><MenuAllEvents /></p>
                </div>

                <motion.div className='slider' drag='x'
                    dragConstraints={{ right: 0, left: -880 }} >


                    {events ? events.map((everyEvent, i) => (
                        <motion.div className='imageCarrusel'>

                            <div key={i} className="boxEventAll">
                                <button onClick={() => goToPag(`/evento/${everyEvent.id}`)} className="butStart">
                                    <img src={`/${everyEvent.image}`} className="imgEventAll" alt="" />
                                </button>
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
                    <p className='pPesEvent'><MenuFormations /></p>

                </div>
            </div>

            <div className='boxDivForma'>
                {formations ? formations.map((formation, i) => (


                    <div key={i} className="divFormations">
                        <p className='everyFormation'><img src={punto} className="imgPunto" /> {formation.nombre} </p>
                    </div>


                )) : "no hay"}

            </div>
        </div >
    )


}
