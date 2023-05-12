import axios from 'axios'
import { ADDNEW_TODO,DELETE_TODO,GETALL_TODOS,TOGGLE_TODO, UPDATE_TODO } from '../type';

export const addNewTodo=(data)=>async(dispatch)=>{
   try {
   const res=await axios.post("http://localhost:3002/todos",{data});
   dispatch({type:ADDNEW_TODO,paylode:res.data})
   } catch (error) {
    console.log(error)
   }
}
export const fetchAllTodos=(data)=>async(dispatch)=>{
   try {
      const res=await axios.get("http://localhost:3002/getTodos")
      dispatch({type:GETALL_TODOS,paylode:res.data})
   } catch (error) {
      console.log(error)
   }
}
export const toggleToDo=(id)=>
   async(dispatch)=>{
      try {
         const update=await axios.put(`http://localhost:3002/todos/${id}`)
         dispatch({type:TOGGLE_TODO,paylode:update.data})
      } catch (error) {
         
      }
   }
   export const updateTodo=(id,data)=>
   async(dispatch)=>{
      try {
         const update=await axios.put(`http://localhost:3002/todosUpdate/${id}`,{data})
         dispatch({type:UPDATE_TODO,paylode:update.data})
      } catch (error) {
         console.log(error)
      }
   }
   export const deleteTodo=(id)=>
   async(dispatch)=>{
      try {
         const del=await axios.delete(`http://localhost:3002/todosDelete/${id}`)
         dispatch({type:DELETE_TODO,paylode:del.data})
      } catch (error) {
         console.log(error)
      }
   }
