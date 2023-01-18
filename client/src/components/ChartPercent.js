import React, { useEffect, useState } from "react";
import "../css/chart-request.css"

function ChartRequest() {

    const getRandomInt = (min,max) => {
        return Math.round(Math.random() * (max - min) + min)
    }
    
    var widthBlue = getRandomInt(0,187)+ "px";

        return (
        <div className="container">
           <div className="total-div">
                <div className="blue" style={{width: widthBlue}}></div>
           </div>
        </div>
    );
}

export default ChartRequest;