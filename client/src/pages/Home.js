import React, { useEffect, useState } from "react";
import { Footer } from "../components/layout/Footer";
import {HomeVolunteer} from "../components/HomeVolunteer"
import HomeCoordinator from "../components/HomeCoordinator"

function Home() {
    const [coordinator, setCoordinador] = useState(false);
    const [volunteer, setVolunteer] = useState(false);

    const getRol = async () => {
         fetch('/get-role')
            .then((res) => res.json(res))
            .then(res => {
                if (res== "coordinador") {
                    setCoordinador(true);
                }else{
                    setVolunteer(true);
                }
            });
    }

    useEffect(() => {
        getRol();
    }, [])

    return (
        <div>
            {coordinator ? 
            <HomeCoordinator></HomeCoordinator>
            :""}
            {volunteer ? 
            <HomeVolunteer></HomeVolunteer>
             :""}
            <Footer></Footer>   
        </div>
    );
}

export default Home;