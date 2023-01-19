import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import location from "../img/location.png"

export const MenuAllEvents = () => {


    const [allEvents, setAllEvents] = useState()
    const navigate = useNavigate();


    useEffect(() => {

        fetch("/get-events")
            .then(response => response.json(response))
            .then(response => {
                console.log(response)
                setAllEvents(response)

                // setEvents(response)

            })


    }, [])


    function goToPag(id) {
        // window.location = id
        navigate(id);

    }


    return (
        <div>
            <a href="#openModal2" className='aModal2'>Ver todos</a>

            <div id="openModal2" className="modalDialog">
                <div className='modalEventsTotal'>
                    <a href="#close" title="Close" className="close">X</a>
                    <p className='titEventDispMod'>Eventos disponibles</p>
                    {allEvents ? allEvents.map((everyEvent, i) => (

                        <div key={i} className="boxEventAll2">

                            <button onClick={() => goToPag(`/evento/${btoa(everyEvent.id)}`)} className="butStartEvent">
                                <div className='divEventAllImage'>
                                    <img src={everyEvent.image} className="imgEventAllDiv" alt="" />
                                    <div className='divEventAllDiv'>
                                        <p className='pCarruselEvent'>{everyEvent.titulo} </p>
                                        <p className='pCarruselLocal'>  <img src={location} />{everyEvent.municipio}</p>
                                    </div>
                                    <div className='divTimeAll'>
                                        {/* <p className='pTimeAll'>{everyEvent.fecha_ini}</p> */}
                                        {/* <p>{everyEvent.hora_empezar}</p> */}
                                    </div>
                                </div>
                            </button>

                        </div>

                    )) : "no hay"}

                </div>
            </div>
        </div>
    )
}
