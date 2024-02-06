import React, { useState } from "react";
import './Button.css'

const MyButton = ({btnClasName, btnLabel, onbtnClick}) => {
    return (
        <button className={`btn ${btnClasName}`} onClick={onbtnClick} >{btnLabel}</button>
    )
}

const Button = () => {
    const [count, setCount] = useState(0);
    // const decreaseHandler = () => count > 0 ? setCount(count - 1) : "";
    const decreaseHandler = () => count > 0 && setCount(count-1);
    const increaseHandler = () => setCount(count + 1);

    return (
        <>
            <div>My Count {count} </div>
            {/* <MyButton btnClasName="increase" btnLabel="Increment" onbtnClick={() => setCount(count+1)} /> */}
            <MyButton btnClasName="increase" btnLabel="Increment" onbtnClick={increaseHandler} />
            <MyButton btnClasName="decrease" btnLabel="Decrement" onbtnClick={decreaseHandler}/>
        </>
    )
}

export default Button