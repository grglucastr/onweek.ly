import React, { Component } from 'react';
import { connect } from 'react-redux';


class TaskList extends Component {

  render(){

    const { tasks } = this.props;
    
    return( 
      <>
        <div className="task-list-container mt-4">
          {
            tasks.map(task => (
              <div key={task.id} className="task-list-item">
                { task.subject }
              </div>
            ))
          }
        </div>
      </>
    )
  }
}

function mapStateToProps(tasks){
  return {tasks};
}

export default connect(mapStateToProps)(TaskList);