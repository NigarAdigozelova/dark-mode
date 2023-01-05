import React, { useContext } from 'react'
import { MainContext } from '../context/ContextProvider'
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const {todos,setTodos}=useContext(MainContext)
    const handleDelete=({id})=>{
        setTodos(todos.filter((item)=>item.id !== id))
    }
    const handleChecked=(item)=>{
        setTodos(
            todos.map((i)=>{
                
                if(i.id===item.id){
                    
                    return{...i,completed:!i.completed}
                    
                }
                return i;
            })
        )

    }
    
  return (
    <div>
      {todos.map((item)=>{
        return(
            <li className='list' key={uuidv4()}>
                <div className='inp'>
                <input className={`lists ${item.completed ? "complete" : ""}`} type="text" value={item.title} onChange={(e)=>e.preventDefault()} />
              
              <div className='buttons'>
              <button onClick={()=>handleChecked(item)}><i className="fa-solid fa-check"></i></button>
              <button onClick={()=>handleDelete(item)}><i className="fa-solid fa-trash"></i></button>
              </div>
                </div>
                
            </li>

        )
      })}
    </div>
  )
}

export default TodoList
