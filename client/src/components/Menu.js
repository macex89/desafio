import React from 'react'

export const Menu = () => {
    return (
  
        <main className='mainModal'>
            <input id="mostrar-modal" type="radio" name="modal" />
            <label for="mostrar-modal" className='menuModal'>☰</label>
            <input id="cerrar-modal" type="radio" name="modal" />
            <label for="cerrar-modal">X</label>
            <div id="modal">
                <div className='divModal'>
                    <div className='divHr'>
                    <h2 className='pModal'>Selecciona una acción </h2>
                    <hr/>
                    </div>
                <h3 className='pModal'>Copiar enlace del evento</h3>
                <h3 className='pModal'>Compartir evento</h3>
                <h3 className='pModal'>Contactar con el coordinador</h3>
                <h3 className='pModal'>Reportar evento</h3>
                </div>
            </div>
        </main>
    )
}
