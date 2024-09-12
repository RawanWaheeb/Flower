



import React from 'react';
import './App.css';
import { MyNav } from "./component/MyNav";
import { Products } from "./component/Products";
import { ProductsDetails } from "./component/ProductsDetails";
import { ProductsForm } from "./component/ProductsForm";
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { NoutFound } from './pages/NoutFound';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp'; 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { SharedLayout } from './layout/SharedLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductsDetails />} />
          <Route path='/products/:id/edit' element={<ProductsForm />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} /> 
        </Route>
        <Route path='/*' element={<NoutFound />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router}>
        <MyNav />
      </RouterProvider>
    </>
  );
}

export default App;




































