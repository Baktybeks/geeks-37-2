import React from 'react';
import classes from './Todo.module.css';
import Button from '../Button';


const Todo = ({todo, handleDelete}) => {
    return (
        <li className={classes.todo}>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>completed: {todo.completed ? 'выполнено' : 'не выполнено'}</p>
            <Button text={'delete'} action={()=>handleDelete(todo.id)}/>
        </li>
    );
};

export default Todo;