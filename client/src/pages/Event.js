import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import logo from '../img/logo.png'
import logoComunidad from '../img/logoComunidad.png'
import { Footer } from "../components/layout/Footer";
import { Menu } from "../components/Menu";
import imgMedicinas from '../img/imgMedicinas.png'

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



    const imagesEvents =
    {
        id: '1',
        title: 'Reparto de medicinas',
        subtitle: 'Cruz Roja Española Sierra Norte',
        descripcion: 'La intervención de Cruz Roja Española (CRE) en materia de prevención y promoción de la salud ha estado enmarcada en estos últimos años por el Plan de Salud que vio la luz en 2007',
        image:imgMedicinas
    }


    return (
        <div className="page-content">
    
            <div className='divLoginCar'>
                <img src={logo} className='imgLogin2' alt="Logo Cruz Roja" />
                <p><Menu/></p>
            </div>

            {/* {event ?  */}
            <div className="divContEvent">
                {/* <img src={imagesEvents.image} className="imgEventR" /> */}
                <img src={imagesEvents.image}/>
                <div className="divTextEvent">
                    <h2 className="h2Title">{imagesEvents.title}</h2>
                    <p>{imagesEvents.subtitle}</p>
                </div>
                <div className="divCom">
                <img src={logoComunidad} className='imgLogoCom' alt="Logo Cruz Roja" />
                <button onClick={() => { enrollTo() }} className="butAsis">Asistir</button>
                
                </div>
                <hr/>
                <h2 className="h2Sub">¿Qué vamos a hacer?</h2>
                <p className="pDesc">{imagesEvents.descripcion}</p>
                <hr/>
                <h2 className="h2Coor">¿Quién es nuestro coordinador?</h2>
            </div>
            {/* :""}   */}
            <Footer/>
        </div>
    );
}

export default Event;