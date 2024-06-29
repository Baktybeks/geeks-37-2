import React, { useEffect, useMemo, useState } from 'react';
import TodoList from '../../components/todoList/TodoList';
import Input from '../../components/input/Input';
import Button from '../../components/Button';
import Modal from '../../components/modal/Modal';
import Pagination from '../../components/pagination/Pagination';


const TodoPage = () => {
    const [ show, setShow ] = useState(false);
    const [ inputTask, setInputTask ] = useState('');
    const [ regex, setRegex ] = useState('');
    const [ filterOption, setFilterOption ] = useState('completed');
    const [ tasks, setTasks ] = useState([]);
    console.log(show);

    const handleShow = () => {
        setShow(prev => !prev);
    };

    const handleChangeSearch = (event) => {
        console.log(event.target.value);
        setRegex(event.target.value);
    };

    const handleChangeTask = (event) => {
        console.log(event.target.value);
        setInputTask(event.target.value);
    };

    const handleAdd = () => {
        console.log('add');
        setTasks(prev =>
            [ ...prev, {
                id: tasks.length > 0 ? tasks[ tasks.length - 1 ].id + 1 : 1,
                title: inputTask,
                completed: false
            } ]);
    };

    const clear = () => {
        localStorage.clear()
        setTasks([])
    }

    const handleDone = (id) => {
        console.log(id);
        tasks.map(task => {
            if (task.id === id) {
                return task.completed = !task.completed;
            }
        });
        setTasks([ ...tasks ]);
    };

    const handleEdit = (text) => {
        tasks.map(task => {
            if (task.id === text.id) return task.title = text.title;
        });
        setTasks([ ...tasks ]);
        console.log(text);
    };
    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const searchTask = () => {
        return tasks.filter(task => task.title.match(regex)) || [];
    };

    const filterTasks = searchTask();

    //   useEffect(() => {
    //     const myLocalStorage = JSON.parse(localStorage.getItem('tasks'));
    //     if (myLocalStorage === null) {
    //         return localStorage.setItem('tasks', JSON.stringify(tasks));
    //     }
    //     if (myLocalStorage.length !==0) {
    //         setTasks(myLocalStorage)
    //     }
    // },[]);
    //
    // useEffect(()=> {
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // },[tasks])
    const BASE_URL = 'https://jsonplaceholder.typicode.com/'
    const API = 'todos'
    const limit=10
    const [offset, setOffset] = useState(0)
    const getApi = async() => {
        const response = await fetch (`${BASE_URL}${API}/?_limit=${limit}&_start=${offset}`)
        console.log(response);
        const data= await response.json()
        console.log(data);
        return data
    }

    useEffect(() => {
        getApi().then((data)=> setTasks(data))
    }, [offset]);

    const page = Math.floor(offset/limit)+1
    console.log(page);
    const handlePrev = () => {
        return setOffset(prev=> prev-limit)
    }
    const handleNext = () => {
        return setOffset(prev=> prev+limit)
    }

    const handleFilterChange= (event) => {
        setFilterOption(event.target.value)
    }

    const filterOptionTasks = tasks.filter(task=> {
        switch(filterOption) {
            case 'completed': return task.completed
            case 'notCompleted': return !task.completed
            default: return true
        }
    })

    const  options= [
        {value: 'all', label: 'Все таски'},
        {value: 'completed', label: 'Выполненные'},
        {value: 'notCompleted', label: 'Не выполненные'},

    ]

    return (
        <>
            <select onChange={handleFilterChange} value={filterOption}>
                {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            <Button action={clear} text={'очистить все'}/>
            <Input placeholder={'поиск'} onChange={handleChangeSearch}/>

            <Button action={handleShow} text={'Открыть модалку'}/>
            {
                show && <Modal
                    handleShow={handleShow}
                    handleChangeTask={handleChangeTask}
                    handleAdd={handleAdd}
                />
            }
            <TodoList
                list={filterOptionTasks}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
            />


            <Pagination prev={handlePrev} next={handleNext} page={page}/>
        </>
    );
};

export default TodoPage;