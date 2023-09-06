


import * as actionTypes from "../type";
export const todoReducer=(state=[],action)=>{
    switch(action.type){
        case actionTypes.ADDNEW_TODO:
            return[action.paylode,...state]
            case actionTypes.GETALL_TODOS:
                return action.paylode;
                case actionTypes.TOGGLE_TODO:
                    return state.map(todo=>(
                        todo._id===action.paylode._id ? {...todo,done:!todo.done}:todo
                      


                    ))
                    case actionTypes.DELETE_TODO:
                        return state.filter(todo=>todo._id!== action.paylode._id);

                    
                    
        default:
        return state
    }
}