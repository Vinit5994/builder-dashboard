import React from 'react'
import '../App.css'
import Boxes from './Boxes'

import Choice from './Choice'
import Items from './Items'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <>
       <div className="dashboard">
        <Sidebar />
        <div className="main">
          <div className="inner">
            <Boxes />
            
            <Choice />
          </div>
          <Items />
        </div>
      </div>
    </>
  )
}

export default Dashboard
