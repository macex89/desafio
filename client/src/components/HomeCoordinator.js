import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./layout/Footer";
import "../css/coordinator.css"


function Coordinator() {
    const [events, setEvents] = useState();

    const getEvents = () => {
        fetch(`/get-coordinator-events`)
            .then((res) => res.json(res))
            .then(res => {
                setEvents(res);
                console.log(res);
            });
    }

    // const getRequests = () => {
    //     fetch(`/get-coordinator-requests`)
    //         .then((res) => res.json(res))
    //         .then(res => {
                
    //         });
    // }

    useEffect(() => {
        getEvents();
        // getRequests();
    }, [])

    return (
        <div className="page-content">
            <div>
                <div className="coordinator-img"></div>   
                <div className="info"></div>
            </div>
            <div>
                {events ?
                events.map((order, i) => {
                    return(
                        <Link>
                            <div className="container-event">
                                <div className="event-img"></div>
                                <div></div>
                            </div>
                        </Link>
                    )})
                :""}
            </div>
            <Footer/>
        </div>
    );
}

export default Coordinator;