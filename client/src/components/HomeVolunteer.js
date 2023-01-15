import React, { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../img/logo.png'
import MyCalendar from './MyCalendar'
import { Footer } from './layout/Footer'
import { Menu } from './Menu'

export const HomeVolunteer = () => {

    const [events, setEvents] = useState(true)
    const [calendar, setCalendar] = useState(true)
    const [formations, setFormations] = useState(true)

    const imagesEvents = [
        {
            id: '1',
            title: 'Awesome forest',
            image:
                'https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg',
        },
        {
            id: '2',
            title: 'A litle bird.',
            image:
                'https://cdn.pixabay.com/photo/2011/09/27/18/52/bird-9950_960_720.jpg',
        },
        {
            id: '3',
            title: 'The best friend.',
            image:
                'https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg',
        },
        {
            id: '4',
            title: 'Beautiful desert.',
            image:
                'https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759_960_720.jpg',
        },
        {
            id: '5',
            title: 'Harley Davidson motorcycle.',
            image:
                'https://cdn.pixabay.com/photo/2018/10/26/22/55/harley-davidson-3775527_960_720.jpg',
        },
        {
            id: '2',
            title: 'A litle bird.',
            image:
                'https://cdn.pixabay.com/photo/2011/09/27/18/52/bird-9950_960_720.jpg',
        },
        {
            id: '3',
            title: 'The best friend.',
            image:
                'https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg',
        },
    ]



    return (
        <div>

            <div className='divLoginCar'>
                <img src={logo} className='imgLogin2' alt="Logo Cruz Roja" />
                
            </div>
            <div><Menu/></div>

            <motion.div className='slider-container'>
                <p className='pTitleEvent'>Eventos disponibles</p>
                <motion.div className='slider' drag='x'
                    dragConstraints={{ right: 0, left: -954 }} >
                    {events ? imagesEvents.map(event => (
                        <motion.div className='imageCarrusel'>
                            <img src={event.image} alt="" />

                        </motion.div>

                    )) : ""}

                </motion.div>

            </motion.div>

            {calendar ?
                <div>
                    <p className='pEvent'>Mis eventos</p>
                    <MyCalendar />
                </div>
                : ""}

            <motion.div className='slider-container'>
                <p className='pTitleEvent'>Eventos Recomendados</p>
                <motion.div className='slider' drag='x'
                    dragConstraints={{ right: 0, left: -954 }} >
                    {imagesEvents.map(recommended => (
                        <motion.div className='imageCarrusel'>
                            <img src={recommended.image} alt="" />

                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>

            <div className='divFormations'>

                <p className='pForm'>Formaciones</p>
{/* 
                <div>

                    {formations ? formations.map((formation, i) => (

                        <div key={i}>

                            <div>
                                <p>{formation.nombreFormacion}</p>
                            </div>

                        </div>

                    )) : ""}

                </div> */}
            </div>
        </div>
    )


}
