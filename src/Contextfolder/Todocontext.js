// import { createContext ,useContext} from "react"

//  export const todocontextapi=createContext({
//  todos:[
//     {
//         id:1,
//         todo:"muzi message",
//         complete:true
//     }
//  ],
//  addtodo:(todo)=>{},
//  deletetodo:(id)=>{},
// updatetodo:(id,todo)=>{},
// tooglecomplete:(id)=>{}
//  });


// export const ContextTodoprovider=todocontextapi.Provider



// export const usecontextdata=()=>{
//     return  useContext(todocontextapi)
// }
import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider