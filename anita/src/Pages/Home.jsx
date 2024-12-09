import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { HomeStyle } from '../styles/Home/HomeStyle'
import { TopBar } from '../components/Topbar/Topbar'

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBar />
      <div style={{ flex: 1, display: 'flex' }}>
        <Sidebar />
      </div>
    </div>


  )
}

export default Home