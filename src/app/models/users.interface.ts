'use strict'
export type Roles = 'MEDICO' | 'ADMI';

export interface IUser{
    email: string,
    password: string
}

export interface UserResponse{
    message: string,
    token: string,
    userId: string,
    role: Roles
}