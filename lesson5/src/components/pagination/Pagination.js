import React from 'react';
import Button from '../Button';


const Pagination = ({prev, next, page}) => {
    return (
        <div>
            <Button text={'prev'} action={prev}/>
            <p>{page}</p>
            <Button text={'next'} action={next}/>
            
        </div>
    );
};

export default Pagination;