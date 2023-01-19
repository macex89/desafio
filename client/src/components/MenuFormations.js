import React from 'react'
import { useState, useEffect } from 'react'
import formacion from '../img/formacion.jpg'

export const MenuFormations = () => {

    const [formations, setFormations] = useState()


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


    return (
        <div>
            <a href="#openModal3" className='aModal2'>Ver todos</a>

            <div id="openModal3" className="modalDialog">
                <div className='modalEventsTotal'>
                    <a href="#close" title="Close" className="close">X</a>
                    <p className='pFormDis'>Formaciones disponibles</p>
                    
                    {formations ? formations.map((formation, i) => (
                    
                            <div key={i} className="boxAllFormation">
                                <img src={formacion} className='imgLogin3' alt="Logo Cruz Roja" />
                                <p className='pFormation'>{formation.nombre} </p>
                            </div>

                    )) : "no hay"}

                </div>
            </div>
        </div>
    
    )
}
