import React, { useState } from 'react'
import './ToDo.css'

const ToDo = () => {
    const [inputText, setInputText] = useState("");
    const [todoItems, setTodoItems] = useState([]);

    const inputHandler = (e) => {
        setInputText(e.target.value)
    }

    const addHandler = () => {
        console.log("Added value " + inputText)
        if(inputText !== "") {
            setTodoItems([...todoItems, inputText]);
            setInputText("")
        }
    }

    const editHandler = (clickedId) => {
        console.log("Edit index "+ clickedId)
        const oldItem = todoItems.filter((item, index) => index === clickedId)
        const newText = window.prompt('Edit your text', oldItem)

        if(newText) {
            console.log("new Text: "+ newText)
            const updatedTodoItems = todoItems.map(
                (item, index) => index === clickedId ? [newText]: item
            )
            setTodoItems(updatedTodoItems)
        }
    }

    const deleteHandler = (deletedId) => {
        let updatedTodoList = todoItems.filter((item, index) => index !== deletedId)
        setTodoItems(updatedTodoList)
    }

  return (
    <div className='todolist'>
        <h2>Todo List</h2>
        <input type="text" value={inputText} onChange={inputHandler} placeholder='add item ...' />
        <button type="button" onClick={addHandler}>ADD</button>

        <div className='content'>
            {
                todoItems.map( (item, index) =>
                    <div key={index} className='todo'>
                        <p>{item}</p>
                        <div className='btn'>
                            <button type='button' className='delete' onClick={() => deleteHandler(index)}>Delete</button>
                            <button type='button' onClick={() => editHandler(index)}>Edit</button>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default ToDo 