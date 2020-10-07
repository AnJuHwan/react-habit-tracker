import React, { useState } from 'react';

const SimpleHabit = (props) => {
    // count , setCount를 0으로 할당 
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    }
    return(
        <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
}
            
    

export default SimpleHabit;