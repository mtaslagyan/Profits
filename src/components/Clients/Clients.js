import React, { Component } from 'react'
import AddClient from './AddClient'
import {connect} from 'react-redux'
import {deleteClient, deleteAllClients} from '../../store/actions/clientActions'
import {deleteAllSessions} from '../../store/actions/sessionActions'

class Clients extends Component {

  handleClick = (id) => {
    this.props.deleteClient(id)
  }

  deleteAllClientsButton = () => {
    this.props.deleteAllClients();
    this.props.deleteAllSessions();
  } 

  render() {
    const {clientList} = this.props
    return (
      <div className="clients container mt-5 text-center">
              <AddClient/>
        <h2 className="mt-5">Here Are Your List of Clients...</h2>
        <button className="btn btn-danger text-center my-2" onClick={this.deleteAllClientsButton}>delete all</button> 
        <div className="text-center">*deleting all clients will reset sessions and analysis*</div>
        <hr/>
        {clientList && clientList.map(client => {
          return(
            <div className="my-2" key={client.id}>
              <div>
                <span className="client-name">Client Name: {client.name}</span> | Client Price: {client.price}
                <button className="btn btn-warning ml-2" onClick={() => {this.handleClick(client.id)}}>Delete</button>
              </div>      
            </div>
            
          )
        })}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clientList : state.clients.clientList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    deleteClient : (id) => dispatch(deleteClient(id)), 
    deleteAllClients : () => dispatch(deleteAllClients()),
    deleteAllSessions : () => dispatch(deleteAllSessions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients)
