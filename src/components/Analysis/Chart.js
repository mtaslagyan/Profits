import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import {connect} from 'react-redux'


class Chart extends Component {

    dayOfWeek = () => {
        
        const {sessionList} = this.props;
        let sundayIncome = 0;
        let mondayIncome = 0;
        let tuesdayIncome = 0;
        let wednesdayIncome = 0;
        let thursdayIncome = 0;
        let fridayIncome = 0;
        let saturdayIncome = 0;

        sessionList.forEach(session => {
        if (session.dayOfWeek === "Sunday") {
            sundayIncome += session.price * session.duration;
        } else if (session.dayOfWeek === "Monday") {
            mondayIncome += session.price * session.duration;
        } else if (session.dayOfWeek === "Tuesday") {
            tuesdayIncome += session.price * session.duration;
        } else if (session.dayOfWeek === "Wednesday") {
            wednesdayIncome += session.price * session.duration;
        } else if (session.dayOfWeek === "Thursday") {
            thursdayIncome += session.price * session.duration;
        } else if (session.dayOfWeek === "Friday") {
            fridayIncome += session.price * session.duration;
        } else {
            saturdayIncome += session.price * session.duration;
        }
        });
        return [
        sundayIncome,
        mondayIncome,
        tuesdayIncome,
        wednesdayIncome,
        thursdayIncome,
        fridayIncome,
        saturdayIncome
        ]
        
    }

    state = {
        chartData : {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                label: 'Income $',
                data: this.dayOfWeek(),
                
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ]
            }]
        }
    }

    render() {
        const dailyIncome = this.dayOfWeek();
        console.log(dailyIncome)
        return (
            <div>
            <Bar 
                data={this.state.chartData} 
                options={{
                    layout: {
                        padding: {
                            left: 50,
                            right: 50,
                            up:50,
                            bottom:50
                        }
                    },
                    title: {
                        display:true,
                        text: 'Weekly Distribution',
                        fontSize: 35
                    },
                    legend: {
                        display:true,
                        position: 'right'
                    },
                    scales: {
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'day of week'
                            },
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'income $'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clientList : state.clients.clientList,
        sessionList : state.sessions.sessionList
    }
}

export default connect(mapStateToProps)(Chart)