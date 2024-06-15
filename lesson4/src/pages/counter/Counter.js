import React, { useState } from 'react';
import Button from '../../components/Button';


const Counter = () => {
    const [ count, setCount ] = useState(0);

    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <p>Count: {count}</p>
            <Button action={increment} text={'increment'}/>
            <Button action={decrement} text={'decrement'}/>
        </div>
    );
};

export default Counter;