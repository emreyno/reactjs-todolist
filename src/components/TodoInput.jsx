// import React, { useState } from 'react'

// export default function TodoInput(props) {

//     const { handledAddTodos } = props
//     const { todoValue, setTodoValue } = useState('')

//     // function onClickbtn(newtd) {
//     //     setTodos(newtd)
//     // }


//     return (
//         <header>
//             <input value={todoValue} onChange={(e) => { setTodoValue(e.target.value) }} placeholder='Enter todo...' />
//             <button onClick={() => { 
//                 handledAddTodos(todoValue)
//                 setTodoValue('') 
//             }}>Add</button>

//         </header>
//     )
// }  



export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}