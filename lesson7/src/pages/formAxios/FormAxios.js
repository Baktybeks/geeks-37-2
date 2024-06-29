import React from 'react';
import c from './FormAxios.module.css'
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { postAxios } from '../fetch/Fetch';
export const scheme = yup.object().shape({
    id: yup.string().trim().required('обязательное поле').min(1, 'необходимо как мин. 3 символа').max(30, 'max is 30 symbles'),
    surname: yup.string().trim().required('обязательное поле').min(3, 'необходимо как мин. 3 символа').max(30, 'max is 30 symbles'),
    name: yup.string().trim().required('обязательное поле').min(3, 'необходимо как мин. 3 символа').max(30, 'max is 30 symbles'),
    groupId: yup.string().trim().required('обязательное поле').min(1, 'необходимо как мин. 3 символа').max(30, 'max is 30 symbles'),
})

const FormAxios = () => {


    const {
        register,
        handleSubmit,
        formState: {errors},

    } = useForm({
            resolver:yupResolver(scheme)
        }
    )
    const submit = (data) => {
        postAxios('student',data)
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
                   aria-invalid={errors.id ? true : false}
                   {...register('id')}
            />
            <input type={`text`}
                   className={c.input}
                   aria-invalid={errors.name ? true : false}
                   {...register('name')}
            />
            <input type={`text`}
                   className={c.input}
                   aria-invalid={errors.surname ? true : false}
                   {...register('surname')}
            />
            <input type={`text`}
                   className={c.input}
                   aria-invalid={errors.groupId ? true : false}
                   {...register('groupId')}
            />
            <button>send</button>
        </form>
    );
};

export default FormAxios;