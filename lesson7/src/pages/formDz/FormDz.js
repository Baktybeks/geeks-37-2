import React from 'react';
import c from './FormDz.module.css'
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
const regExPassword = new RegExp(/(?=.*\d)(?=.*[A-Z])/)
const regExEmail = new RegExp(/^[a-zA-Z\d-_\.]+@[a-zA-Z\d-_]+\.[a-zA-Z-_]{2,8}$/)
export const scheme = yup.object().shape({
    name: yup.string().trim().required('обязательное поле').min(3, 'необходимо как мин. 3 символа').max(30, 'max is 30 symbles'),
    email: yup.string().trim().required('requared').matches(regExEmail, 'invalid email'),
    password: yup.string().trim().required('required').min(8, 'min 8').matches(regExPassword, 'invalid password'),
    password2: yup.string().oneOf([yup.ref('password'), null], 'пароли должны совпадать')
})

const FormDz = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},

    } = useForm({
            resolver:yupResolver(scheme)
        }
    )
    const submit = (data) => {
        console.log(data)
    }

    const error = (a) => {
        console.log(a)
    }

    // const name = watch('name')

    return (
        <form onSubmit={handleSubmit(submit, error)}>
            <input type={`text`}
                   className={c.input}
                   aria-invalid={errors.name ? true : false}
                   {...register('name')}
            />
            <input type={`email`}
                   className={c.input}
                   aria-invalid={errors.email ? true : false}
                   {...register('email')}
            />
            <input type={`password`}
                   className={c.input}
                   aria-invalid={errors.password ? true : false}
                   {...register('password')}
            />
            <input type={`password`}
                   className={c.input}
                   aria-invalid={errors.password2 ? true : false}
                   {...register('password2')}
            />
            <button>send</button>
        </form>
    );
};

export default FormDz;