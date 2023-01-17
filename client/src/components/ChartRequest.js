import React, { useEffect, useState } from "react";
import "../css/chart-request.css"

function ChartRequest(props) {

    const pending = props.pending;
    const accepts = props.accepts;
    const total = props.total;

    const getWidthBlue = () => {
        return Math.trunc((accepts * 187)/total);
    }

    const getWidthRed = () => {
        return Math.trunc((pending * 187)/total);
    }
    
    var widthRed = getWidthRed()  + getWidthBlue();
    widthRed = widthRed.toString() + "px";
    var widthBlue = getWidthBlue().toString() + "px";

        return (
        <div className="container">
           <div className="total-div">
                <div className="blue" style={{width: widthBlue}}></div>
                <div className="red" style={{width: widthRed}}></div>
           </div>
        </div>
    );
}

export default ChartRequest;