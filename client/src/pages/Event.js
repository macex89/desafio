import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import logo from '../img/logo.png'
import logoComunidad from '../img/logoComunidad.png'
import { Footer } from "../components/layout/Footer";
import imgMedicinas from '../img/imgMedicinas.png'
import { MenuModal } from "../components/MenuModal";
import { ButtonBack } from "../components/ButtonBack"


function Event() {
    const { id } = useParams();
    const [event, setEvent] = useState();

    const getEvent = () => {
        fetch(`/get-event/${id}`)
            .then((res) => res.json(res))
            .then(res => {
                setEvent(res);
            });
    }

    useEffect(() => {
        getEvent();

    }, [])

    console.log(event)

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
        await fetch("/new-request", data)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
    }



    // const imagesEvents =
    // {
    //     id: '1',
    //     title: 'Reparto de medicinas',
    //     subtitle: 'Cruz Roja Española Sierra Norte',
    //     descripcion: 'La intervención de Cruz Roja Española (CRE) en materia de prevención y promoción de la salud ha estado enmarcada en estos últimos años por el Plan de Salud que vio la luz en 2007',
    //     image: imgMedicinas
    // }



    return (
        <div className="page-content">

            <div className='divLoginCar'>
                <p className="buttonBack"><ButtonBack/></p>
                <img src={logo} className='imgLogin2' alt="Logo Cruz Roja" />
                <p><MenuModal /></p>
            </div>

            {/* {event ?  */}

            {event &&

                <div className="boxEventDates">
                    <img src={`/${event.image}`} className="imgEventAll2" alt="" />
                    <div className="pfichaDoc">
                    <p className='pCarruselEvent2'>{event.titulo} </p>
                    <p className='pCarruselTime2'>Cruz Roja Española Sierra Norte</p>
                    <p className='pCarruselTime2'>{event.localizacion}</p>
                    </div>
                    <div className="pfichaTiempo">
                    <p className='pCarruselTime3'>{event.fecha_ini}</p>
                    <p className='pCarruselTime3'>|</p>
                    <p className='pCarruselTime3'>{event.hora_empezar}</p>
                    <p className='pCarruselTime3'>{event.hora_terminar}</p>
                    <p className='pCarruselTime3'>h</p>
                    </div>

                    <div className="divContEvent2">

                        <div className="divCom2">
                            <img src={logoComunidad} className='imgLogoCom' alt="Logo Cruz Roja" />
                            <button onClick={() => { enrollTo() }} className="butAsis">Asistir</button>

                        </div>
                        <hr />

                        <h2 className="pCarruselEvent2">¿Qué vamos a hacer?</h2>

                    </div>
                    <p className='pCarruselLocal'>{event.descripcion}</p>

                    <hr />

                    <h2 className="pCarruselEvent2">¿Quién es nuestro coordinador?</h2>

                    <p className='pCarruselLocal'>{event.coordinador}</p>

                </div>
            }


            <Footer className=".footerC2" />
        </div>
    );
}

export default Event;