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
            <li className={classes.todo}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
                <p>completed: {todo.completed ? 'выполнено' : 'не выполнено'}</p>
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
                    }} text={'Save'}/>
                    <Button action={() => {

                    }} text={'Cancel'}/>
                </div>
            }
        </>
    );
};

export default Todo;