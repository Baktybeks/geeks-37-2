import React, { useEffect, useState } from 'react';
import classes from './Fetch.module.css';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';

export const postAxios = async(API, student) => {
    console.log(student);
    const {id, name, surname, groupId} = student
    const response = await axios.post(`${BASE_URL}${API}`, {
        id, name, surname, groupId
    });
    const data = response.data;
    console.log(data,'postAxiospostAxios');
};
const Fetch = () => {
    const [ students, setStudents ] = useState([]);
    console.log(students);
    const [refresh, setRefresh] =useState(false)

    const getApi = async(API) => {
        const response = await fetch(`${BASE_URL}${API}`);
        const data = await response.json();
        return data;
    };

    const getAxios = async(API) => {
        const response = await axios(`${BASE_URL}${API}`);
        const data = response.data;
        console.log(data);
    };

    const postApi = async(API) => {
        await fetch(`${BASE_URL}${API}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ surname: 'Sariev', name: 'Bakyt', id: '200', groupId: 2 })
        }).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));
    };





    const patchApi = async(API, id) => {
        await fetch(`${BASE_URL}${API}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ surname: 'Baktybekov' })
        }).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));
    };
    const deleteApi = async(API, id) => {
        await fetch(`${BASE_URL}${API}/${id}`, {
            method: 'DELETE',
        }).then(response => response.json()).then(data => {console.log(data)
        setRefresh(prev=> !prev)
        }).catch(error => console.error(error));
    };

    useEffect(() => {
        getApi('student').then(data => setStudents(data))
    }, [refresh]);

    return (
        <div className={classes.wrapper}>
            <button className={classes.btn} onClick={() => getApi('student').then(data => setStudents(data))}>getApi
            </button>
            <button className={classes.btn} onClick={() => getAxios('student')}>getApi</button>
            <button className={classes.btn} onClick={() => postApi('student')}>postApi</button>
            <button className={classes.btn} onClick={() => postAxios('student')}>postAxios</button>
            <button className={classes.btn} onClick={() => patchApi('student', '1')}>patchApi</button>
            <button className={classes.btn} onClick={() => deleteApi('student', '200')}>delete</button>
            {
                students.map(student => <div key={student.id}>
                    <p>{student.id} {student.name}</p>
                    <button className={classes.btn} onClick={() => deleteApi('student', student.id)}>delete</button>
                </div>)
            }

        </div>
    );
};

export default Fetch;