import React from 'react';
import classes from './user.module.css';


const User = ({name}) => {
    // console.log(props);
    // const {name} = props
    return (
        <div>
            <p className={classes.content}>Name: {name}</p>
            {/*<p>age: {age}</p>*/}
            {/*<p>phone: {phone}</p>*/}
        </div>
    );
};

export default User;