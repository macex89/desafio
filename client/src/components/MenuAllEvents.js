import React from 'react'
import { useState, useEffect } from 'react'

export const MenuAllEvents = () => {


    const [allEvents, setAllEvents] = useState()


    useEffect(() => {

        fetch("/get-events")
            .then(response => response.json(response))
            .then(response => {
                console.log(response)
                setAllEvents(response)

                // setEvents(response)

            })


    }, [])


    return (
        <div>
            <a href="#openModal2" className='aModal2'>Ver todos</a>

            <div id="openModal2" class="modalDialog">
                <div className='modalEventsTotal'>
                    <a href="#close" title="Close" class="close">X</a>

                    {allEvents ? allEvents.map((everyEvent, i) => (
                    
                            <div key={i} className="boxEventAll2">
                                <p className='pCarruselEvent'>{everyEvent.titulo} </p>
                                <p className='pCarruselLocal'>{everyEvent.localizacion}</p>
                            </div>

                    )) : "no hay"}

                </div>
            </div>
        </div>
    )
}
