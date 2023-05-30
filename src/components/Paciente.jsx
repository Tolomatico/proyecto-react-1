import React from 'react'

export const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

        const {nombre,apellido,email,fecha,sintomas,id} = paciente 

        const handleEliminarPaciente=()=>{

            const confirmarPacienteAEliminar=confirm(`Desea eliminar a ${paciente.nombre} de la lista de pacientes?`)
            if(confirmarPacienteAEliminar){

                eliminarPaciente(id)

            }
        }

    return (
        <div className="bg-white shadow-md p-6 rounded-lg ml-6 mt-5 mb-5 py-10" >

       
            <p className="font-bold mb-3">Nombre: 
                <span className="font-normal normal-case pl-1">{nombre}
                </span>
            </p>

            <p className="font-bold mb-3">Apellido: 
                <span className="font-normal normal-case  pl-1">{apellido}
                </span>
            </p>
            <p className="font-bold mb-3">Email:   
                <span className="font-normal normal-case  pl-1">{email}
                </span>
            </p>
            <p className="font-bold mb-3">Fecha:   
                <span className="font-normal normal-case  pl-1">{fecha}
                </span>
            </p>
            <p className="font-bold mb-3">Síntomas: 
                <span className="font-normal normal-case  pl-1">{sintomas}
                </span>
            </p>

            <div className='flex  justify-evenly'>
            <button
            onClick={()=>setPaciente(paciente)}

             className='bg-indigo-700 font-bold text-white rounded-md p-2  m-2 px-10 uppercase hover:bg-indigo-500  transition-all'>Editar</button>
            <button
            onClick={handleEliminarPaciente}
             className='bg-red-700 font-bold text-white rounded-md p-2  m-2 px-10 uppercase  hover:bg-red-500 transition-all'>Eliminar</button>
            </div>

           </div>           
            )
}
