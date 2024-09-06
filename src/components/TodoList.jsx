// import React from 'react'
// import TodoCard from './TodoCard'

// export default function TodoList(props) {
//     const { todos } = props
//     return (

//         <ul className="main">
//             {todos.map((todo, todoIndex) => {
//                 return (
//                     // <li className="todoItem" key={todoIndex}>{todo}
//                     //     <i class="fa-solid fa-pen-to-square"></i>
//                     // </li>
//                     <TodoCard key={todoIndex}>
//                         <p>{todo}</p>
//                     </TodoCard>

//                 )
//             })}
//         </ul>
//     )
// }
import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos } = props


    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}