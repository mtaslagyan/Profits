import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addClient} from '../../store/actions/clientActions'
import {Link} from 'react-router-dom'


class AddClient extends Component {

  state = {
    id: null,
    name: null,
    price: null,
  }

  handleChange = (e) => {
      //we do it this way because we have multiple inputs
      this.setState({
          [e.target.id] : e.target.value
      })
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    // use .props to submit and send the new client to the parent as a prop
    // this.props sends the props to the parent. in this case we send to addClient, and what we send is the updated this.state param.
    this.props.addClient(this.state);
    e.target.reset();
    // this.setState({
    //   id: null,
    //   name: null,
    //   price: null,
    // })
  }

  render() {
    const {clientErr} = this.props;
    console.log(clientErr + "do you see this??")
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="mt-5">
            <h2>Step 1 : Add a New Client</h2>
            <label htmlFor="name">Client First and Last Name: </label>
            <input type="text" id="name" onChange={this.handleChange} required/><br/>
            <label htmlFor="price">Client Price: </label>
            <input type="number" step="0.5" id="price" onChange={this.handleChange} required/> <br/>
            {clientErr ? (<p className="py-3 text-danger">{clientErr}</p>):(null)}
            <button className="btn btn-primary mt-3">Add Client</button>
            <br/>
            <Link to="/sessions"><button className="btn btn-secondary mt-3">Step 2: Add Sessions</button></Link>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    clientErr : state.clients.clientErr
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addClient: (client) => dispatch(addClient(client))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddClient)
