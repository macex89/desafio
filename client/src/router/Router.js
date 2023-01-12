import React from "react"
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { FormLogin } from "../components/FormLogin"


export const Router = () => {

    return (
        <BrowserRouter>
            <div className='routes'>
                <Routes>
    
                    <Route path="/login" element={<FormLogin/>} />
            
                </Routes>
            </div>
        </BrowserRouter>
    )
}