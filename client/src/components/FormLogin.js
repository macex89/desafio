import React from 'react'
import logo from '../img/logo.png'
import logoApple from '../img/logoApple.png'
import logoFacebook from '../img/logoFacebook.png'
import logoGoogle from '../img/logoGoogle.png'
import statusBar from '../img/statusBar.png'
import rectangle from '../img/rectangle.png'




export const FormLogin = () => {

    const loginUser = async e => {

        e.preventDefault();

        let loginDates = {
            dniUser: e.target.dniUser.value,
            passwordUser: e.target.passwordUser.value
        }


        let Metadatos = {
            method: 'POST',
            body: JSON.stringify(loginDates),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };


        fetch("http://localhost:5000/login", Metadatos)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)

            })
    }



    return (

        <div className='formLogin'>

            <div>
                <img src={statusBar} className='statusBar' alt="" />
            </div>
            <img src={logo} className='imgLogin' alt="" />

            <form className='formUser' onSubmit={loginUser}>

                <div className='typeDocuments'>
                    <select name="documents" className='selectDocuments'>
                        <option value="dni">DNI</option>
                        <option value="passport">Pasaporte</option>
                        <option value="nie">NIE</option>
                    </select>
                </div>

                <div className='documentNumber'>
                    <input type="text" required placeholder='Número de documento' name='dniUser' />
                </div>

                <div className='userPass'>
                    <input type="password" required placeholder='Contraseña' name='passwordUser' />
                </div>

                <div className='divSubmitForm'>
                    <input type="submit" value="Acceder" className='butForm' />
                </div>

                <div className='textForm'>
                    <p>No soy voluntario,pero me gustaría serlo</p>
                    {/* <a href=""> Quiero ser voluntario</a> */}
                </div>

                <div className='textForm'>
                    <p>Vaya, parece que he olvidado el password</p>
                    {/* <a href="">¿Podeís enviármelo?</a> */}
                </div>

                <div className='socialMedia'>
                    <p>¿O podría acceder con?</p>
                </div>

                <div className='iconMedia'>
                    <img src={logoGoogle} className="imgIcon" alt='logo google' />
                    <img src={logoApple} className="imgIcon" alt='logo apple'/>
                    <img src={logoFacebook} className="imgIcon" alt='logo facebook'/>
                </div>

                <p></p>
            </form>

            <div>
                <img src={rectangle} className='rectangleBar' alt="" />
            </div>

        </div>
    )
}
