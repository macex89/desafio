import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import ChartRequest from "./ChartRequest"
import "../css/coordinator.css"


function HomeCoordinator() {
    const [events, setEvents] = useState();
    const [coordinator,setCoordinator] = useState();
    const [totalPendings,setTotalPendings] = useState();
    const [totalConfirmed,settotalConfirmed] = useState();
    var [search,setSearch] = useState();

    const getEvents = () => {
        fetch(`/get-coordinator-events`)
            .then((res) => res.json(res))
            .then(res => {
                setEvents(res);
                var results = res.map(() =>{return true})
                setSearch(results);
            });
    }

    const searchEvents = (e) => {
        if(e.key === 'Enter'){
            var value = document.getElementById("search-input").value.toLowerCase();
            var results = events.map((event,i) =>{
                 var name = event.titulo.toLowerCase(); 
                 if (name.includes(value)){
                     return true
                 }else{
                    return false
                }
            })
            setSearch(results);
        }
    }

    const getRequests = () => {
        fetch(`/get-coordinator-requests`)
            .then((res) => res.json(res))
            .then(res => {
                setTotalPendings(res.pendings.length);
                settotalConfirmed(res.accepted.length);
            });
    }

    useEffect(() => {
        getEvents();
        getRequests();
    }, [])

    return (
        <div className="page-content-coord">
            <div className="search-input-container">
                <CiSearch className="search-icon"/>
                <input id="search-input" className="seach-input" placeholder="Buscar" onKeyDown={searchEvents}></input>
            </div>
            <div className="coordinator-intro">
                <div className="coordinator-img"></div>   
                <div className="info">
                   <div className="coordinator-name">Elena Mederos Cebreros</div> 
                   <div className="pending-requests">{totalPendings} solicitudes pendientes</div> 
                   <div className="confirm-requests">{totalConfirmed} confirmadas</div> 
                </div>
            </div>
            <div>
            <div className="new-event-container"><a className="new-event" href="/nuevo-evento">Nuevo Evento</a></div>
            <p className='pTitleEvent'>Eventos publicados</p>
                {events ?
                events.map((event, i) => {
                    return(
                        search[i] ? 
                        <Link to={`/solicitudes/evento/${btoa(event.id)}`} className="box-link" key={`link-${i}`}>
                            <div className="container-event" key={`container-event-${i}`}>
                                <div className="event-img" key={`event-img-${i}`}></div>
                                <div className="event-details" key={`event-details-${i}`}>
                                    <div className="event-title" key={`title-${i}`}>{event.titulo}</div>
                                    <div className="event-location" key={`localtion-${i}`}><HiOutlineLocationMarker/> {event.municipio}</div>
                                    {/* <div className="event-location" key={`location-${i}`}><HiOutlineLocationMarker/> La Hiruela</div> */}
                                    <div key={`request-${i}`}>10 solicitudes| 8 confirmadas</div>
                                    <div key={`chart-request-container${i}`}>
                                        <ChartRequest accepts="15" pending="3" total="30" key={`chart-request-${i}`}></ChartRequest>
                                    </div>
                                </div>
                                <div className="event-datetime" key={`event-datetime-${i}`}>
                                    <div key={`date-${i}`}>20/03/23</div>
                                    <div key={`time-${i}`}>18h</div>
                                </div>
                            </div>
                        </Link>
                        : ""
                    )})
                :""}
            </div>
        </div>
    );
}

export default HomeCoordinator;