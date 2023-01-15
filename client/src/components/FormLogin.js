import {React, useState} from 'react';
import Cookies from 'universal-cookie';
import checkDni from '../helper/ValidationDni';
import checkNotAllChar from '../helper/ValidationNotAllChar';
import logo from '../img/logo.png';
import logoApple from '../img/logoApple.png';
import logoFacebook from '../img/logoFacebook.png';
import logoGoogle from '../img/logoGoogle.png';
import statusBar from '../img/statusBar.png';
import rectangle from '../img/rectangle.png';
import { NavLink, useNavigate } from "react-router-dom";

export const FormLogin = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [msn,setMsn] = useState();
    
    const loginUser = async e => {
        e.preventDefault();
        const cleanDni = checkNotAllChar(e.target.docUser.value);
        const cleanPass = checkNotAllChar(e.target.passwordUser.value);
        if (cleanDni && cleanPass){
            switch (e.target.documents.value) {
                case "dni":
                    var {validation, message } = checkDni(e.target.docUser.value);
                    break;
                case "pasaporte":
                    var {validation, message} = {validation:false,message:""};
                    break;
                case "nie":
                    var {validation, message} = {validation:false,message:""};
                    break;
                default:
                    var {validation, message} = {validation:false,message: "El tipo de documento elegido no es correcto"};
            }

            if (validation){
                let loginData = {
                    num_doc: e.target.docUser.value,
                    contraseña: e.target.passwordUser.value,
                }

                let Metadatos = {
                    method: 'POST',
                    body: JSON.stringify(loginData),
                    mode: "cors",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-type": "application/json",
                    },
                };
                await fetch("/login-user", Metadatos)
                    .then((response) => response.json())
                    .then((response) => {
                        if (response.validation){
                            cookies.set('session', response.jwt, { path: '/' });
                            navigate(`/loading/${btoa(response.user.rol)}`);
                        }else {
                            setMsn(response.message);
                        }
                })
             }else {
                setMsn(message);
             }
        }
    }

    return (
        <div className='formLogin'>
            {/* <div>
                <img src={statusBar} className='statusBar' alt="" />
            </div> */}
            <img src={logo} className='imgLogin' alt="" />

            <form className='formUser' onSubmit={loginUser}>

                <div className='typeDocuments'>
                    <select name="documents" className='selectDocuments'>
                        <option value="dni">DNI</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="nie">NIE</option>
                    </select>
                </div>

                <div className='documentNumber'>
                    <input type="text" required placeholder='Número de documento' name='docUser' />
                </div>

                <div className='userPass'>
                    <input type="password" required placeholder='Contraseña' name='passwordUser' />
                </div>

                <div className='divSubmitForm'>
                    <input type="submit" value="Acceder" className='butForm'/>
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
                    <img src={logoApple} className="imgIcon" alt='logo apple' />
                    <img src={logoFacebook} className="imgIcon" alt='logo facebook' />
                </div>

                <p></p>
            </form>
            {/* <div>
                <img src={rectangle} className='rectangleBar' alt="" />
            </div> */}
        </div>
    )
}
