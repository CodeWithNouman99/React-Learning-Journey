import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      DashBoard Page
      <Outlet></Outlet>
    </div>
  )
}

export default Dashboard
