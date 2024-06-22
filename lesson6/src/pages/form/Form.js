import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import classes from './Form.module.css';
import button from '../../components/Button';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import input from '../../components/input/Input';


const regExpAge = new RegExp(/^(100|[1-9][0-9]?|0)$/);
export const schema = Yup.object().shape({
    name: Yup.string().trim().required('обязательное поле').min(2, 'необходимо минимум два символа'),
    name2: Yup.string().trim().required('обязательное поле').min(5, 'необходимо минимум 5 символа'),
    age: Yup.string().required('обязательное поле').matches(regExpAge, 'неверный формат')
});

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        reset,
        setValue,
        watch,
        control
    } = useForm(
        {
            defaultValues: {
                age: 18,
                name: 'Bakyt'
            },
            resolver: yupResolver(schema)
        }
    );

    const submit = (data) => {
        console.log(data);
    };
    const error = (data) => {
        console.log(data);
    };

    const name = watch('name');

    const isName = () => {
        console.log('Вызвана');
        return true;
    };

    return (
        <form onSubmit={handleSubmit(submit, error)}>
            <p style={{ fontSize: 20, color: 'red' }}>{name}</p>
            <Controller
                name={'name2'}
                control={control}
                render={({ field }) => (
                    <input {...field} type={'text'}/>
                    )
                }/>
            <input className={classes.input}
                   type={'text'}
                   aria-invalid={errors.name ? true : false}
                   {...register('name',
                       // {
                       //     required: true,
                       //     validate: value => value.length > 4 || 'Текст должен быть юольше 4 символов'
                       // }
                   )}/>
            <p>{errors.name?.message}</p>

            <input type={'text'}
                   aria-invalid={errors.age ? true : false}

                   {...register('age')}/>
            <p>{errors.age?.message}</p>
            <button>Отправить</button>
            <button type="button" onClick={() => clearErrors()}>Очистить ошибки</button>
            <button type="button" onClick={() => setValue('name', 'Вася')}>Установить имя</button>
            <button type="button" onClick={() => reset({
                age: '',
                name: ''
            })}>Сбросить
            </button>

        </form>
    );
};

export default Form;