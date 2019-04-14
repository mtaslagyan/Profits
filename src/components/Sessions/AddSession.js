import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addSession} from '../../store/actions/sessionActions'
import {Link} from 'react-router-dom'


class AddSession extends Component {
  state = {
    id: null, 
    name: null, 
    duration: null, 
    dayOfWeek: null,
    price: null
  }

  handleChange = (e) => {
    //we do it this way because we have multiple inputs
    this.setState({
        // [name] is now 'whatever was chosen'
        [e.target.id] : e.target.value,      
    })
   console.log([e.target.id]); 
  } 

  

  handleSubmit = (e) => {
    e.preventDefault();
   
      let newPrice = 0;
      this.props.clientList.filter(client => {
        if (client.name === this.state.name) 
        {newPrice = client.price}
        this.setState({
          price : newPrice
        }, () => {
           console.log("price = " + this.state.price, 'newPrice = ' + newPrice)
        });
      })
    
    this.props.addSession({ ...this.state, price: newPrice });
    e.target.reset();
  }   
  
  render() {
    const {clientList} = this.props
    return(
      <div className="mt-5">
          <h2>Step 2 : Add a Session</h2>
          <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Client Name: </label>
              <select onChange={(e) => this.handleChange(e)} id="name" required>
                  <option value=""></option>
                  {clientList.map(client => 
                      <option key={client.id} value={client.name.value}>
                          {client.name}
                      </option>
                  )}
              </select>
              <br/>
              <label htmlFor="dayOfWeek">Day of Week: </label>
              <select onChange={(e) => this.handleChange(e)} id="dayOfWeek" required>
                    <option value=""></option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
              </select>
              <br/>
              <label htmlFor="duration">Session Duration (in hours): </label>
              <input type="number" step="0.5" id="duration" onChange={this.handleChange} required/><br/>
              <button className="btn btn-primary mt-3">Add Session</button> 
              <br/>
              <Link to="/analysis"><button className="btn btn-secondary mt-3">Step 3: Analyze Income</button></Link>
          </form>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  console.log(state)
  return {
    clientList: state.clients.clientList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSession: (session) => dispatch(addSession(session))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(AddSession)
