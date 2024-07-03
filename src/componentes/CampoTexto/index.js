import "./CampoTexto.css"

const CampoTexto = (props) => {
    const {type = 'text'} = props

    const placeholderModificado = `${props.placeholder}...`
    return <div className={`campo-texto`}>
        <label>{props.titulo}</label>
        <input
            className={`campo-${type}`}
            type={type}
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={(ev) =>
                props.actualizarValor(ev.target.value)}/>
    </div>
}

export default CampoTexto