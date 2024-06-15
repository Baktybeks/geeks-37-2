import React, { useState } from 'react';
import User from '../../components/user/User';
import Content from '../../components/content/content';
import Example from '../../components/example/Example';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import TodoList from '../../components/todoList/TodoList';
import Button from '../../components/Button';


const Main = () => {
    const [ show, setShow ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    const [ inputTask, setInputTask ] = useState('');
    const [ tasks, setTasks ] = useState([
        {
            id: 4,
            title: 'coding',
            completed: false
        },
        {
            id: 5,
            title: 'eat',
            completed: false
        },
        {
            id: 6,
            title: 'sleep',
            completed: true
        }
    ]);
    console.log(tasks);
    const handleShow = () => {
        setShow(prev => !prev);
    };

    const handleChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    };

    const handleChangeTask = (event) => {
        console.log(event.target.value);
        setInputTask(event.target.value);
    };

    const handleAdd = () => {
        console.log('add');
        setTasks(prev=>
            [...prev, {
            id: tasks.length>0 ?  tasks[tasks.length-1].id+1 : 1,
            title: inputTask,
            completed: false
        }])
    };

    const handleDelete = (id) => {
        console.log(id);
    }



    return (
        <>
            {/*<h1>hello</h1>*/}
            <TodoList list={tasks} handleDelete={handleDelete}/>
            {/*<User name={'Bakyt'} age={18} phone={468465165146}/>*/}
            {/*<Content text={'Bakyt'} number={18} boolean={true}/>*/}
            {/*<Example>*/}
            {/*    <p style={{ color: 'yellowgreen' }}>Bakyt</p>*/}
            {/*</Example>*/}
            <Button action={handleShow} text={'Открыть модалку'}/>
            {
                show && <Modal
                    handleShow={handleShow}
                    handleChangeTask={handleChangeTask}
                    handleAdd={handleAdd}/>
            }
            {/*<Input placeholder={'напишите текст'} onChange={handleChange}/>*/}
            {/*<Input placeholder={'напишите текст'} onChange={handleChange}/>*/}
            {/*<Input placeholder={'напишите текст'} onChange={handleChange}/>*/}
            {/*<Input placeholder={'напишите текст'} onChange={handleChange}/>*/}
            {/*<Input placeholder={'напишите текст'} onChange={handleChange}/>*/}
            {/*<h1 style={{ fontSize: '20px', color: 'red' }}> {inputValue}</h1>*/}
        </>
    );
};

export default Main;