import React, { Component } from 'react'
import Income from './Income'
import Chart from './Chart'
import {connect} from 'react-redux'
import {deleteAllClients} from '../../store/actions/clientActions'
import {deleteAllSessions} from '../../store/actions/sessionActions'
import {Link} from 'react-router-dom'

class Analysis extends Component {

  resetAllButton = () => {
    this.props.deleteAllClients();
    this.props.deleteAllSessions();

  }

  render() {
    return (
      <div className="container mt-5 ">
        <Income/>
        <hr className="mt-5"/>
        <Chart/>
        <div className="text-center">
          <Link to="/clients">
            <button className="btn btn-warning my-4" onClick={this.resetAllButton}>
            reset and start over
            </button>
          </Link>
        </div>
        {/* <button className="btn btn-success">Download PDF of Screen</button> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      sessionList : state.sessions.sessionList
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    deleteAllClients : () => dispatch(deleteAllClients()),
    deleteAllSessions : () => dispatch(deleteAllSessions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis)
