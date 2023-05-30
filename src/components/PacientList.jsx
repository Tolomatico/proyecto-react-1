import { Paciente } from "./Paciente"


export const PacientList = ({ pacientes, setPaciente ,eliminarPaciente}) => {

 

  return (
    <div className="mx-5 md:w-1/2  lg:h-screen overflow-scroll">

      {pacientes && pacientes.length ? (


        <>
          <h1 className="text-3xl font-black text-center">Listado de pacientes</h1>

          {
            pacientes.map((paciente) =>

              <Paciente eliminarPaciente={eliminarPaciente} key={paciente.id} paciente={paciente} setPaciente={setPaciente} />

            )}
        </>
      )
        : (

          (<h1 className="text-3xl font-black text-center">No se encuentra ningún paciente</h1>
          )
        )




      }





    </div>
  )
}
