import React from 'react';
import { Link } from 'react-router-dom'

function AppHeader(props){
  return(
    <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tasks/">Tasks</Link></li>
          <li><Link to="/tasks/add/">Add Task</Link></li>
        </ul>
    </div>
  )
}


export default AppHeader;