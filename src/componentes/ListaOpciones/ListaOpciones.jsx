import './listaopciones.css'

export const ListaOpciones = (props) => {
    //utilizar metodo map
    //nombre del arreglo
    //usa un arrow function
    return (
        <>
            <div className={'lista-opciones'}>
                <label htmlFor="">Equipos</label>
                <select name="" id="" value={props.valor} onChange={(ev)=>{props.actualizarValor(ev.target.value)}}>
                    <option value="" disabled defaultValue={''} hidden>Seleccione un Equipo</option>
                    {props.equipos.map((equipo,index)=>{
                        return<option key={index} value={equipo}> {equipo}</option>
                    })}
                </select>
            </div>
        </>
    )
}