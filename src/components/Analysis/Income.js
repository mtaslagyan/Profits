import React, {Component} from 'react'
import {connect} from 'react-redux'

class Income extends Component {
        


        calculation = () => {
            const { sessionList = [], clientList = [] } = this.props;
            let totalIncome = 0;
            sessionList.forEach(session => {
                clientList.forEach(client => {
                    if (client.name === session.name) {
                        totalIncome += client.price * session.duration;
                    }
                });
            });
            return totalIncome;
        }
        
        totalHours = () => {
            const { sessionList = []} = this.props;
            let totalHours = 0;
            sessionList.forEach(session => {
                let duration = session.duration;
                totalHours = totalHours + (Number(duration));
            })
            

            return totalHours;
        }

        render() {
            
           
            const { sessionList } = this.props;
            
            if (sessionList !== undefined) {
                const totalIncome = this.calculation();
                const totalHours = this.totalHours();
                return (
                    <div className="mt-5 text-center">
                        <h2 className="mb-4">Step 3 : Analyze</h2>
                        <h3>Total Weekly Income: ${totalIncome}</h3>
                        <h3>Total Hours in a Week: {totalHours}</h3>
                    </div>
                )
            }
            else {return <div className="mt-5 text-center"><h2>Here is your current income: </h2>You are broke</div>}
            
    }
}

const mapStateToProps = (state) => {
    return {
        sessionList: state.sessions.sessionList,
        clientList: state.clients.clientList
    }
}

export default connect(mapStateToProps)(Income)
    