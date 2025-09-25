import React from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import MainNavigation from './components/MainNavigation'

const router = createBrowserRouter([
    {path: "/", element:<MainNavigation/>, children: [
        {path: "/", element:<Home/>}
    ]}
  
])


export default function App() {
  return (
    <div></div>
  )
}
