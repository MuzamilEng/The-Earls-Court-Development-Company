import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Home'
import UpdateForm from './app/pages/UpdateForm'
import UpdateMain from './app/pages/UpdateMain'
import UpdatePost from './app/pages/UpdatePost'
import AddPost from './app/pages/AddPost'
import Admin from './app/pages/Admin'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/update' element={<UpdateForm />} />
        <Route path='/edit-main/:id' element={<UpdateMain />} />
        <Route path='/edit-post/:id' element={<UpdatePost />} />
        <Route path='/add-post' element={<AddPost />} />
      </Routes>
    </>
  )
}

export default App