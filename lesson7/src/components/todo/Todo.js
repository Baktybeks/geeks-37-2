import React, { useState } from 'react';
import classes from './Todo.module.css';
import Button from '../Button';
import Input from '../input/Input';


const Todo = ({
    todo,
    handleDelete,
    handleDone,
    handleEdit,
    handleCurrentEdit,
    isEdit
}) => {
    const [ input, setInput ] = useState(todo.title);
    return (
        <>
            <li className={`${classes.todo} ${todo.completed && classes.done} `}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
                <Button text={'edit'} action={() => handleCurrentEdit(todo.id)}/>
                <Button text={'done'} action={() => handleDone(todo.id)}/>
                <Button text={'delete'} action={() => handleDelete(todo.id)}/>
            </li>
            {
                isEdit && <div>
                    <Input
                        onChange={event => setInput(event.target.value)}
                        placeholder={'Введите новое название'}
                        value={input}
                    />
                    <Button action={() => {
                        handleEdit({
                            ...todo, title: input
                        });
                        handleCurrentEdit(false)
                    }} text={'Save'}/>
                    <Button action={() => {
                        handleCurrentEdit(false)
                    }} text={'Cancel'}/>
                </div>
            }
        </>
    );
};

export default Todo;