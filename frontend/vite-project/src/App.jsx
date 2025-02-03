import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Mens from './Mens'
import Womens from './Womens'
import Product from './Product'
import AdminHome from './Admin/AdminHome'
import AdminLogin from './Admin/AdminLogin'
import AdminDashboard from './Admin/AdminDasboard'
import UploadProduct from './Admin/UploadProduct'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Product/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='mens' element={<Mens/>}/>
        <Route path='womens' element={<Womens/>}/>
        


        </Route>



    </Routes>

    <Routes>
      <Route path='/admin' element={<AdminHome/>}>
      <Route index element={<AdminLogin/>}/>
      <Route path='adminDashboard' element={<AdminDashboard/>}/>
      <Route path='uploadproduct' element={<UploadProduct/>}/>

      </Route>


    </Routes>
    
    
    
    
    
    </BrowserRouter>
    
    
    
    
    
    </>
  )
}

export default App