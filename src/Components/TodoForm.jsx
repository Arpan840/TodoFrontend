import React, { useState } from 'react';
import { addNewTodo } from '../Redux/actions';
import {useDispatch} from 'react-redux'

const TodoForm = () => {
    const[todo,setTodo]=useState("")
    const onChange=(e)=>{
      setTodo(e.target.value)
    }
    const dispatch=useDispatch();
   
    const onSubmit=(e)=>{
        e.preventDefault()
      dispatch(addNewTodo(todo))
        
      console.log(todo)
      setTodo("")
    }
    
  return (
    <>
    <div className="container border border-info d-flex justify-content-center">
        <form className='row ' onSubmit={onSubmit} >
  
  <div className="col-auto">
   
    <input type="text" className="form-control my-3 " style={{width:"60vw"}}  placeholder="Enter new Todo..." value={todo} onChange={onChange}/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3 my-3">Add Todo</button>
  </div>
</form>
    </div>
    </>
  )
}

export default TodoForm