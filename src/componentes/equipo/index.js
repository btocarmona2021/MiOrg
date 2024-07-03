import './equipo.css'
import {Colaborador} from "../colaborador";
import rgba from 'hex-to-rgba'


export const Equipo = (props) => {
    const {id, titulo, colorPrimario, colorSecundario} = props.datos

    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    return (
        <>{colaboradores.length > 0 &&
            <section className='equipo' style={{backgroundColor: rgba(colorPrimario, 0.4)}}>
                <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
                <input
                    className={'color'}
                    type="color"
                    value={colorPrimario}
                    onChange={(ev) => {
                        actualizarColor(ev.target.value, id)
                    }}/>


                <div className='colaboradores' style={{backgroundColor: colorSecundario}}>
                    {colaboradores.map((colaborador, index) => {
                        return <Colaborador
                            key={colaborador.nombre}
                            colaborador={colaborador}
                            key={index} colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />
                    })}

                </div>
            </section>
        }
        </>
    )
}