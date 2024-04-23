// import React, { useEffect } from 'react'
// import { ContextTodoprovider } from './Contextfolder/Todocontext';
// import TodoForm from './Componenets/TodoForm'
// import TodoItem from './Componenets/TodoItem'

// export default function App() {
// const [todos,SetTodos]=React.useState([]);

// const addtodo=(todo)=>{
//    SetTodos((prev)=>[{id:Date.now(),...todo},...prev])
// }

// const updatetodo=(id,todo)=>{
// SetTodos((prevalue)=>prevalue.map((foreach)=>(foreach.id === id ? todo  : foreach)))
// }

// const deletetodo=(id)=>{
// SetTodos((pre)=>pre.filter((todo)=>todo.id !== id ))
// }

// const tooglecomplete=(id)=>{
// SetTodos((pre)=>pre.map((eachval)=>eachval.id===id ? {...eachval,complete:!eachval.complete}: eachval))
// }

// useEffect(()=>{
// const todos=JSON.parse(localStorage.getItem("todos"))

// if(todos && todos.length >0){
// SetTodos(todos)
// }
// },[])

// useEffect(()=>{
// localStorage.setItem("todos ", JSON.stringify(todos))
// },[todos])




//   return (
//    <ContextTodoprovider value={{todos,addtodo,deletetodo,updatetodo,tooglecomplete}}>
//             <div className="bg-[#172842] min-h-screen py-8">
//                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//                     <div className="mb-4">
//                     <TodoForm/>
//                     </div>
//                     <div className="flex flex-wrap gap-y-3">
//                     {todos.map((todo)=>(
//                     <div key={todo.id} className='w-full'> 
//                     <TodoItem todo={todo}/>

//                     </div>
//                     ))}
//                     </div>
//                 </div>
//             </div>
//        </ContextTodoprovider>
//   )
// }
import { useState, useEffect } from 'react'
import {TodoProvider} from './Contextfolder'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos here</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}                
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App