import React, { useState } from 'react';
import classes from './TodoList.module.css';
import Todo from '../todo/Todo';


const TodoList = ({list,
    handleDelete,
    handleDone,
    handleEdit
}) => {

    const [currentEdit, setCurrentEdit] = useState('')
    return (
        <ul className={classes.todo_list}>
            {
                list.map(item=> <Todo
                    key={item.id}
                    todo={item}
                    handleDelete={handleDelete}
                    handleDone={handleDone}
                    handleEdit={handleEdit}
                    handleCurrentEdit={setCurrentEdit}
                    isEdit={currentEdit === item.id}
                /> )
            }
        </ul>
    );
};

export default TodoList;