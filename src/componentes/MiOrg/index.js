import './miorg.css'


export const MiOrg = (props) => {
    const setMostrarFormulario = props.setMostrarFormulario
    const mostrarFormulario = props.mostrarFormulario
    return (
        <section className={'orgSection'}>
            <h3 className={'orgSection__title'}>Mi organización</h3>
            <img className={'orgSection__agregar'} src="/img/add.png" alt="Agregar" onClick={() => {
                setMostrarFormulario(!mostrarFormulario)
            }}/>
        </section>
    )
}
