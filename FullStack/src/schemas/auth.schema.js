import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is requeried'
    }) ,

email: z.string({
    required_error: 'Email is requeried'
}).email({
    required_error: 'Email incorrecto'
}),
password: z.string({
    required_error: 'Password is requeried'
})
.min (6, {
    message: 'Contraseña minimo de 6 caracteres'
}),

})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is requeried'
}).email({
    message: 'email invallido'
}),
password: z.string({
    required_error: 'Password is requeried'
}).min (6, {
    message: 'Contraseña minimo de 6 caracteres'})
})
