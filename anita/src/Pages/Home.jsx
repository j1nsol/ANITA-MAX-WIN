import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { HomeStyle } from '../styles/Home/HomeStyle'

import { UserTopBar } from '../components/Topbar/UserTopBar'


const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <UserTopBar />
      <div style={{ flex: 1, display: 'flex' }}>
      <Sidebar />
      </div>
    </div>


  )
}

export default Home