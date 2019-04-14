import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddSession from './AddSession'
import {deleteSession, deleteAllSessions} from '../../store/actions/sessionActions'

class Sessions extends Component {

  handleClick = (id) => {
    this.props.deleteSession(id)
  }

  deleteAllSessionsButton = () => {
    this.props.deleteAllSessions();
  }

  render() {
    const {sessionList, clientList} = this.props
    return (
      <div className="sessions mt-5 text-center">
      <AddSession/>
        <h2 className="mt-5">Here are a list of your existing Sessions...</h2>
        <button className="btn btn-danger text-center my-2" onClick={this.deleteAllSessionsButton}>delete all</button>
        <div className="text-center">*deleting all sessions will reset analysis*</div>
        <hr/>
        {sessionList && sessionList.map(session => {
          return(
            <div key={session.id}>
              <ul>
                <li>Client Name: {session.name}</li>
                <li>Session Duration: {session.duration} hour(s)</li>
                <li>Session Day: {session.dayOfWeek}</li>
                <li>Session Price: {session.price}</li>
                <button className="btn btn-warning" onClick={() => {this.handleClick(session.id)}} >Delete</button>

              </ul>
            </div>
          )    
        })}
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return{
    sessionList : state.sessions.sessionList,
    clientList : state.clients.clientList
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    deleteSession: (id) => dispatch(deleteSession(id)),
    deleteAllSessions: () => dispatch(deleteAllSessions())
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Sessions)
