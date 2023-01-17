import React from "react"
import { Routes, Route, BrowserRouter} from 'react-router-dom'
// import { Home } from "../components/HomeVolunteer"
import  Home  from "../pages/Home"
import { FormLogin } from "../components/FormLogin"
import { Loading } from "../components/Loading"
import  Event  from "../pages/Event"
import  NewEvent  from "../pages/NewEvent"
import EventRequests from "../pages/EventRequests"

export const Router = () => {

    return (
        <BrowserRouter>
            <div className='routes'>
                <Routes>
                    <Route path="/" element={<FormLogin/>} />
                    <Route path="/loading/:rol" element={<Loading/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/evento/:id" element={<Event/>} />
                    <Route path="/solicitudes/evento/:id" element={<EventRequests/>} />
                    <Route path="/nuevo-evento" element={<NewEvent/>} />  
                </Routes>
            </div>
        </BrowserRouter>
    )
}