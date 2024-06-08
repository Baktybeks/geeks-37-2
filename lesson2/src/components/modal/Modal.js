import React from 'react';
import classes from './modal.module.css';


const Modal = ({children, action}) => {
    return (
        <>
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <button onClick={action}>Close</button>
                {children}
            </div>
        </>
    );
};

export default Modal;