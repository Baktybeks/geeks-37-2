import React from 'react';
import classes from './content.module.css';


const Content = ({text, number, boolean}) => {
    return (
        <div>
            <p className='content'>{text}</p>
            <p className={classes.content}>{number}</p>
            <p>{boolean ? 'true' : 'false'}</p>
        </div>
    );
};

export default Content;