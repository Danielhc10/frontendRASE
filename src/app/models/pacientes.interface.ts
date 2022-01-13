'use strict'

export interface IPaciente{
    nombre: string,
    ape_pat: string,
    ape_mat: string,
    fech_nac: Date,
    sexo: string,
    curp: string,
    telefono: string,
    correo: string,
    tipo_sangre: string,
    estado_civil: string,
    ocupacion: string, 
    notas: string,
    archivo_paciente: string,
    activo: boolean
}