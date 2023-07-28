import './listaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label htmlFor="">{props.label}</label>
            <select 
                onChange={evento => props.textOnChange(evento.target.value)} 
                required={props.obrigatorio} 
                value={props.value}
            >
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa