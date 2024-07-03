import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import {ListaOpciones} from "../ListaOpciones/ListaOpciones";
import {Boton} from "../Boton";
import {useState} from "react";
import {v4 as uuid} from "uuid";
import rgba from "hex-to-rgba";


const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, setTitulo] = useState('');
    const [color, setColor] = useState('')

    const manejarEquipo = (ev) => {
        ev.preventDefault()
        let nuevoEquipo = {
            id: uuid(),
            titulo,
            colorPrimario: color,
            colorSecundario: (rgba(color,0.4))
        }

        props.registrarEquipo(nuevoEquipo)
    };


    const manejarEnvio = (ev) => {
        ev.preventDefault();

        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        };
        props.registrarColaborador(datosAEnviar)
    };

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required={true}
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                <CampoTexto
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required={true}
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <CampoTexto
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required={true}
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones equipos={props.equipos} valor={equipo} actualizarValor={actualizarEquipo}/>
                <Boton texto={"Crear colaborador"}/>
            </form>
            <form onSubmit={manejarEquipo}>
                <h2>Rellena el formulario para crear el Equipo.</h2>
                <CampoTexto
                    titulo="Titulo"
                    placeholder="Ingresar titulo"
                    required={true}
                    valor={titulo}
                    actualizarValor={setTitulo}
                />
                <CampoTexto
                    titulo="Color"
                    type={'color'}
                    placeholder="Ingresar Color Hexadecimal"
                    required={true}
                    valor={color}
                    actualizarValor={setColor}
                />
                <Boton texto={"Registrar Equipo"}/>
            </form>
        </section>
    );
};

export default Formulario;
