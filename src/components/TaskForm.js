import React from 'react'
import { Link } from 'react-router-dom'
import './Base.css'

class AddTask extends React.Component{

  htmlFormSubmit(e){
    e.preventDefault();
    console.log('log me here');
    
  }

  render(){
    return(
      <div className="border-spacing">
        <h3>New Task</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              id="subject"
              name="subject"            
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              cols="30"
              rows="8"></textarea>
          </div>
          <div>
            <label htmlFor="requester">Requester:</label>
            <input
              id="requester"
              name="requester"/>
          </div>
          <div>
            <label htmlFor="type-voc">Type:</label>

            <label htmlFor="type-voc">
              <input
                type="radio"
                id="type-voc"
                name="type"
                value="1"/> VOC
            </label>
            
            <label htmlFor="type-issue">
              <input
                type="radio"
                id="type-issue"              
                name="type"
                value="1"/> Issue
            </label>
          </div>

          <div>
            <label htmlFor="status-plan">Current Status:</label>

            <label htmlFor="status-plan">
              <input
                type="radio"
                id="status-plan"
                name="status"
                value="1"/> Plan
            </label>
            
            <label htmlFor="status-progress">
              <input
                type="radio"
                id="status-progress"   
                name="status"
                value="2"/> In Progress
            </label>
            

            <label htmlFor="status-done">
              <input
                type="radio"
                id="status-done"
                name="status"
                value="3"/> Done
            </label>
          </div>

          <div>
            <label htmlFor="start-date">Start Date:</label>
            <input
              id="start-date"
              name="startDate"
            />
          </div>

          <div>
            <label htmlFor="expected-end-date">Expected End Date:</label>
            <input
              id="expected-end-date"
              name="expectedEndDate"
            />
          </div>

          <div>
            <label htmlFor="remark">Remark:</label>
            <textarea
              id="remark"
              name="remark"
              cols="30"
              rows="8"
            ></textarea>
          </div>


          <Link to="/">
            Cancel
          </Link>

          <button>Save</button>
        </form>

      </div>
    )
  }
}

export default AddTask