import './boton.css'

export const Boton = (props) => {
    return (
        <>
            <button className={'boton'}>{props.texto}</button>
        </>
    )
}