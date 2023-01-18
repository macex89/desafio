import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";
import { CiSearch, CiCalendar } from "react-icons/ci";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import ChartPercent from "../components/ChartPercent";
import logo from '../img/logo.png';
import { Footer } from "../components/layout/Footer";
import '../css/coordinator.css'
import {ButtonBack} from '../components/ButtonBack'
import { MenuModalCoordinator } from "../components/MenuModalCoordinator";


function EventRequests() {
    var { id } = useParams();
    id = atob(id);
    const [titleEvent,setTitleEvent] = useState();
    const [coordinator,setCoordinator] = useState();
    const [requests,setRequests] = useState();
    const [totalPendings,setTotalPendings] = useState(0);
    const [totalConfirmed,setTotalConfirmed] = useState(0);
    var [search,setSearch] = useState();

    const getEvent = () => {
        fetch(`/get-event/${id}`)
            .then((res) => res.json(res))
            .then(res => {
                setTitleEvent(res.titulo);
         });
    }

    const getRequests = () => {
        fetch(`/get-requests-by-event/${id}`)
            .then((res) => res.json(res))
            .then(res => {
                setRequests(res.results);
                var re = res.results.map(() =>{return true})
                setSearch(re);
         });
    }

    const getTotalNumberRequest = () => {
        fetch(`/get-coordinator-events`)
            .then((res) => res.json(res))
            .then(res => {
                setTotalPendings(res.totalPending);
                setTotalConfirmed(res.totalAccepted);
            });
    }

    const getCoordinator = () => {
        fetch(`/get-logued-coordinator`)
            .then((res) => res.json(res))
            .then(res => {
                setCoordinator(res);
        });
    }

    useEffect(() => {
        getCoordinator();
        getTotalNumberRequest();
        getEvent();
        getRequests();
    }, []);

    const updateRegistrations = async ()=> {
        let Metadatos = {
            method: 'POST',
            body: JSON.stringify({id}),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };
        await fetch("/update-registrations", Metadatos)
            .then((res) => res.json())
            .then((res) => {       
        })
    }

    const acceptRequest = async (id_request)=> {
        let Metadatos = {
            method: 'POST',
            body: JSON.stringify({id_request}),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };
        await fetch("/accept-request", Metadatos)
            .then((res) => res.json())
            .then((res) => {
                if(res){
                    updateRegistrations();
                    setTotalConfirmed(totalConfirmed+1);
                    setTotalPendings(totalPendings-1);
                    document.getElementById(`container-${id_request}`).style.display="none";
                }         
        })
    }

    const rejectRequest = async (id_request)=> {
        let Metadatos = {
            method: 'POST',
            body: JSON.stringify({id_request}),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };
        await fetch("/reject-request", Metadatos)
            .then((res) => res.json())
            .then((res) => {
                if(res){
                    setTotalConfirmed(totalConfirmed+1);
                    setTotalPendings(totalPendings-1);
                    document.getElementById(`container-${id_request}`).style.display="none";
                } 
        })
    }

    const searchRequests = (e) => {
        if(e.key === 'Enter'){
            var value = document.getElementById("search-input").value.toLowerCase();
            var results = requests.map((request,i) =>{
                 var name = (request.user.nombre + " " + request.user.apellido_1 + " "+ request.user.apellido_2).toLowerCase(); 
                 if (name.includes(value)){
                     return true
                 }else{
                    return false
                }
            })
            setSearch(results);
        }
    }

    return (
        <div>
            <div className='divLoginCar'>
            <p className="buttonBack"><ButtonBack /></p>
                <img src={logo} className='imgLogin2' alt="Logo Cruz Roja" />
                <div><MenuModalCoordinator pendings={totalPendings}/></div>
            </div> 
           <div className="page-content-coord">
           <div className="search-input-container">
                <CiSearch className="search-icon"/>
                <input id="search-input" className="seach-input" placeholder="Buscar" onKeyDown={searchRequests}></input>
            </div>
            {coordinator ?
                <div className="coordinator-intro">
                    <div className="coordinator-img"><img className="coordinator-image" src={`/users/${coordinator.image}`}></img></div>   
                    <div className="info">
                    <div className="coordinator-name">{coordinator.nombre} {coordinator.apellido_1} {coordinator.apellido_2}</div> 
                    <div className="pending-requests">{totalPendings} solicitudes pendientes</div> 
                    <div className="confirm-requests">{totalConfirmed} confirmadas</div> 
                    </div>
                </div>
            :"" }
            <div className="new-event-container">+<a className="new-event" href="">Filtrar por nombre</a><AiOutlineDown color={"#4b4b4b"}/><CiCalendar className="icon-calendar" color={"#4b4b4b"}/></div>
            <p className='title'>{titleEvent}</p>
            {requests ?  
                requests.map((request, i) => {
                    return(
                        search[i] ? 
                        <div id={`container-${request.id}`}className="container-event" key={`container-event-${i}`}>
                            <div className="event-img" key={`event-img-${i}`}><img className="event-image" src={`/users/${request.user.image}`}></img></div>
                            <div className="event-details" key={`event-details-${i}`}>
                                <div className="event-title" key={`title-${i}`}>{request.user.nombre} {request.user.apellido_1} {request.user.apellido_2}</div>
                                <div className="event-location" key={`localtion-${i}`}><HiOutlineLocationMarker/> {request.user.localidad}</div>
                                <div key={`chart-request-container${i}`}>
                                    <ChartPercent key={`chart-request-${i}`}></ChartPercent>
                                </div>
                            </div>
                            <div className="event-datetime" key={`event-datetime-${i}`}>
                                <AiOutlineCheckCircle color="green" className="react-icon" onClick={()=>{acceptRequest(request.id)}}></AiOutlineCheckCircle>
                                <AiOutlineCloseCircle color="red" className="react-icon" onClick={()=>{rejectRequest(request.id)}}></AiOutlineCloseCircle>
                            </div>
                        </div>
                        :""
                    )
                })
            :""}
            </div>  
            <Footer></Footer>   
        </div>
    );
}

export default EventRequests;