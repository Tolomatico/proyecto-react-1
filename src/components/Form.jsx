import { useState, useEffect } from "react"
import { Error } from "./Error"

export const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  const [error, setError] = useState(false)


  useEffect(() => {

    if (Object.keys(paciente).length > 0) {

      setNombre(paciente.nombre)
      setApellido(paciente.apellido)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)


    }

  }, [paciente])


  const generarId = () => {

    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)


    return random + fecha
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    if ([nombre, apellido, email, fecha, sintomas].includes("")) {
      setError(true)
      return
    }

    setError(false)

    const objetoPaciente = {
      nombre,
      apellido,
      email,
      fecha,
      sintomas,

    }

    if (paciente.id) {

      objetoPaciente.id = paciente.id
    
      console.log(paciente)
      console.log(objetoPaciente)

      const pacientesActualizado =pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
    
      setPacientes(pacientesActualizado)
      setPaciente({})


    } else {
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }





    setNombre("")
    setApellido("")
    setEmail("")
    setFecha("")
    setSintomas("")


  }



  return (
    <div className="mx-5 md:w-1/2  ">


      <h3 className=" text-3xl font-black  text-center pb-5">Formulario</h3>

      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg">
        {error && <Error>
          <p>
            Todos los campos son obligatorios
          </p>
        </Error>}
        <div className="mb-5 ">
          <label htmlFor="nombre" className="block font-bold uppercase">Nombre del paciente</label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingrese el nombre"
            className="border-2 p-2 w-full placeholder-indigo-700 rounded-md"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}

          />
        </div>

        <div className="mb-5">
          <label htmlFor="apellido" className="block font-bold uppercase">Apellido del paciente</label>
          <input
            id="apellido"
            type="text"
            placeholder="Ingrese el apellido"
            className="border-2 p-2 w-full placeholder-indigo-700 rounded-md"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block font-bold uppercase">Correo electrónico</label>
          <input
            id="email"
            type="text"
            placeholder="Ingrese su email"
            className="border-2 p-2 w-full placeholder-indigo-700 rounded-md"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className="block font-bold uppercase">Fecha de ingreso</label>
          <input
            id="fecha"
            type="date"
            className="border-2 p-2 w-full  rounded-md"
            value={fecha}
            onChange={(event) => setFecha(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block font-bold uppercase">Ingrese sus síntomas</label>
          <textarea id="sintomas" className="border-2 p-2 w-full placeholder-indigo-700 rounded-md"
            placeholder="Describa sus síntomas"
            value={sintomas}
            onChange={(event) => setSintomas(event.target.value)}

          />
        </div>

        <input
          type="submit"
          className="border-6 w-full bg-indigo-600 p-4
           text-white rounded-md font-bold uppercase hover:bg-indigo-500 cursor-pointer transition-all "
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />

      </form>



    </div>
  )
}
