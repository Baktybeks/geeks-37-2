import React from 'react';
import classes from './Header.module.css';


const Header = ({links}) => {
    console.log(links);
    return (
        <ul className={classes.list}>
            {
                links.map((link, index) =>
                    <li key={index} className={classes.link}>{link}</li>)
            }
        </ul>
    );
};

export default Header;