import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import Footer from '../components/Footer/Footer'


const Layout = () => {
  const sideBarRef = useRef();

  return (
    <>
        <Header sideBarRef={sideBarRef} />
        <div className='layout'>
            <SideBar sideBarRef={sideBarRef} />
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout