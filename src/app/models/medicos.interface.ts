'use strict'
import  { Especialidad }  from "./especialidad.interface"

export interface Medicos{
    nombre: string,
    ape_paterno: string,
    ape_materno: string,
    curp_doc: string,
    especialidad: Especialidad,
    correo: string,
    telefono: string,
    cedula: string,
    num_recetas: number,
    activo: boolean
}