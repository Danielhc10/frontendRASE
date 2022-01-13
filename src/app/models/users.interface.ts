'use strict'
export type Roles = 'MEDICO' | 'ADMIN';

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
