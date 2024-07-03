import "./colaborador.css";
import {RiDeleteBack2Fill} from "react-icons/ri";
import {FaHeart, FaRegHeart} from "react-icons/fa";


export const Colaborador = (props) => {
    const {nombre, puesto, foto, id, fav} = props.colaborador
    const {eliminarColaborador, like} = props
    return (
        <div className={'colaborador'}>
            <div className="encabezado" style={{backgroundColor: props.colorPrimario}}>
                <img src={foto} alt={'Foto de ' + nombre}/>
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                <RiDeleteBack2Fill onClick={(ev) => {
                    ev.preventDefault()
                    eliminarColaborador(props.colaborador)
                }} className={'eliminar'}/>
                {fav === true ? <FaHeart
                        fill={'red'}
                        onClick={()=>{
                            like(id)
                        }}
                    /> :
                    <FaRegHeart
                        fill={'gray'}
                        onClick={()=>{
                            like(id)
                        }}
                    />}

            </div>
        </div>
    )
};
