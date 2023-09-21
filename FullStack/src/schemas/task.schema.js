import {z} from 'zod'
export const createTaskSchema = z.object({
tittle: z.string({
    required_error: 'titulo ees requerido'
}),
description: z.string({
    required_error: 'descripcion debe ser string'
}),
date: z.string().datetime().optional(),







})