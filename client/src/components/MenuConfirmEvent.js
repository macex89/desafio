import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'


export const MenuConfirmEvent = () => {
    const { id } = useParams();
    const [local, setLocal] = useState();

    const enrollTo = async () => {

        let data = {
            method: 'POST',
            body: JSON.stringify({ fk_id_actividad: id }),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },

        };

       
        getEvent(localStorage.setItem("eventos", JSON.stringify(local)));

        await fetch("/new-request", data)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
    }




    const getEvent = () => {
        fetch(`/get-event/${id}`)
            .then((res) => res.json(res))
            .then(res => {
                console.log(res)
                setLocal(res)

            });
    }

    useEffect(() => {
        getEvent();

    }, [])




    return (
        <div>
            <div>

                <a href="#openModal2" className='aModal3'>Asistir</a>

            </div>


            <div id="openModal2" className="modalDialog">
                <div className='modalEventsTotal2'>
                    <a href="#close" title="Close" className="close">X</a>
                    <div className='divModalAsistirEvento'>
                        <p className='pAsistir'>Asistir al evento</p>
                        <p className='pSeguro'>¿Estás seguro de que deseas asistir a este evento recomendado?</p>
                        <button onClick={() => { enrollTo() }} className="butAsis2">Claro, me encantaría</button>
                        {/* <p className='pGracias'>No, gracias</p> */}
                        <a href="#close" title="Close" class="close" className='pGracias'>No gracias</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
