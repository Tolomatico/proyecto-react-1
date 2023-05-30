import { useState, useEffect } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { PacientList } from "./components/PacientList"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])

  const [paciente, setPaciente] = useState({})

  useEffect(()=>{
    
    localStorage.setItem("pacientes", JSON.stringify(pacientes))

  },[pacientes])



  const eliminarPaciente = id => {

    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)

  }




  return (
    <div className="container mx-auto">
      <Header />

      <div className="mt-12   md:flex  ">
        <Form

          setPaciente={setPaciente}
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <PacientList
          eliminarPaciente={eliminarPaciente}
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>

    </div>
  )
}

export default App
