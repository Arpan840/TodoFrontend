import React from 'react'
import Header from './Header'
import TodoForm from './TodoForm'
import Todos from './Todos'

const Home = () => {
  return (
    <>
    <div className='container text-center '  >
        <Header></Header>
        <TodoForm></TodoForm>
        <Todos></Todos>
    </div>
    </>
  )
}

export default Home