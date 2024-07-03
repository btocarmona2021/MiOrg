import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import {MiOrg} from "./componentes/MiOrg";
import {useState} from "react";
import {Equipo} from "./componentes/equipo";
import {Footer} from "./componentes/footer";
import {v4 as uuid} from "uuid";


function App() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const [colaboradores, setColaboradores] = useState([
        {
            id: uuid(),
            equipo: "FrontEnd",
            foto: "https://github.com/harlandlohora.png",
            nombre: "Harland Lohora",
            puesto: "Instructor",
            fav:true
        },
        {
            id: uuid(),
            equipo: "Programación",
            foto: "https://github.com/btocarmona2021.png",
            nombre: "Alberto Carmona",
            puesto: "Desarrollador de software e instructor ",
            fav:true

        },
        {
            id: uuid(),
            equipo: "UX y Diseño",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            nombre: "Jeanmarie Quijada",
            puesto: "Instructora en Alura Latam",
            fav:true

        },
        {
            id: uuid(),
            equipo: "Programación",
            foto: "https://github.com/christianpva.png",
            nombre: "Christian Velasco",
            puesto: "Head de Alura e Instructor",
            fav:true

        },
        {
            id: uuid(),
            equipo: "Innovación y Gestión",
            foto: "https://github.com/JoseDarioGonzalezCha.png",
            nombre: "Jose Gonzalez",
            puesto: "Dev FullStack",
            fav:false

        }])
    const [equipos, actualizarEquipos] = useState([
        {
            id: uuid(),
            titulo: 'Programación',
            colorPrimario: "#57c278",
            colorSecundario: "#d9f7e9"
        },
        {
            id: uuid(),
            titulo: 'FrontEnd',
            colorPrimario: "#dd3a66",
            colorSecundario: "#fddede"
        },
        {
            id: uuid(),
            titulo: 'DataScience',
            colorPrimario: "#7f3fff",
            colorSecundario: "#e9d6ff"
        },
        {
            id: uuid(),
            titulo: 'Devops',
            colorPrimario: "#a6d08a",
            colorSecundario: "#f0fff4"
        },
        {
            id: uuid(),
            titulo: 'UX y Diseño',
            colorPrimario: "#e17055",
            colorSecundario: "#f3e8e9"
        },
        {
            id: uuid(),
            titulo: 'Móvil',
            colorPrimario: "#3a7a92",
            colorSecundario: "#e8f8ff"
        },
        {
            id: uuid(),
            titulo: 'Innovación y Gestión',
            colorPrimario: "#a333c3",
            colorSecundario: "#f3e8e9"
        }
    ])

    const registrarColaborador = (datosAEnviar) => {
        setColaboradores([...colaboradores, datosAEnviar])
    }

    const registrarEquipo=(equipo)=>{
        actualizarEquipos([...equipos,equipo])
    }
    const eliminarColaborador = (colab) => {
        const eliminaColaborador = colaboradores.filter((colaborador) => {
            if (colaborador.id === colab.id) {
                return colaborador
            }
        });
        setColaboradores(eliminaColaborador)
    }

    const actualizarColor = (color, titulo) => {
        const equiposActualizados = equipos.map((equipo) => {
            if (equipo.id === titulo) {
                equipo.colorPrimario = color
            }
            return equipo
        })
        actualizarEquipos(equiposActualizados)
    }

    const like=(id)=>{
        const likes = colaboradores.map((colaborador)=>{
            if (colaborador.id===id){
                colaborador.fav=!colaborador.fav
            }
            return colaborador
        })
        setColaboradores(likes)

    }

    return (
        <div>
            <Header/>
            {mostrarFormulario &&
                <Formulario
                    equipos={equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                    registrarEquipo={registrarEquipo}
                />}
            <MiOrg
                setMostrarFormulario={setMostrarFormulario}
                mostrarFormulario={mostrarFormulario}
            />
            {equipos.map((equipo) => {
                return <Equipo
                    datos={equipo}
                    key={equipo.titulo}
                    colaboradores={colaboradores.filter((colaborador) => {
                        return colaborador.equipo === equipo.titulo
                    })}
                    eliminarColaborador={eliminarColaborador}
                    actualizarColor={actualizarColor}
                    like={like}
                />
            })}
            <Footer/>
        </div>
    );
}

export default App;
