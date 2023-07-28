import { useState } from 'react'
import './campoTexto.css'

const CampoTexto = (props) => {
    const textOnChange = (evento) => {
        props.textOnChange(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
                onChange={textOnChange} 
                required={props.obrigatorio} 
                value={props.valor}
                placeholder={props.placeholder} 
            />
        </div>
    )
}

export default CampoTexto