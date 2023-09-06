import {AiOutlineDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'
import { toggleToDo,updateTodo,deleteTodo } from '../Redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
export const Todo=({todo})=>{
  
  const [editing,setEditing]=useState(false);
  const[text,setText]=useState(todo.data)
    const dispatch=useDispatch()
    const onSubmit=(e)=>{
       e.preventDefault();
       setEditing(editing===true?false:false)
       dispatch(updateTodo(todo._id,text))
    }
    return(
        <div className="card border border-info" style={{display:"flex", flexDirection:"row", backgroundColor:todo.done===true?"red":"white", color:todo.done===true?"white":"black"}} onClick={()=>dispatch(toggleToDo(todo._id))}  >
        <div className="card-body" style={{display:editing===true?"none":""}}>{todo.data}</div>
       {editing===true?<form onSubmit={onSubmit} style={{width:"100vw"}}>
  <div className="mb-3" style={{display:editing===true?"inline":""}}>
    <input type="text" className="form-control" value={text} onChange={(e)=>setText(e.target.value)}/>
  </div>
</form >:""}
        <div className='mx-2' style={{display:"flex", flexDirection:"row"}}>
        <h1 className='mx-2'><AiOutlineDelete onClick={()=>dispatch(deleteTodo(todo._id))}></AiOutlineDelete></h1>
        <h1><FaEdit onClick={()=>setEditing(editing===false?true:false)}></FaEdit></h1>
          </div>
      </div>
    )
}