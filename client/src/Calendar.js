import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import CalendarHeatmap from 'reactjs-calendar-heatmap'

//import CalendarHeatmap from 'calendar-heatmap-graph'


import moment from 'moment'

class Calendar extends Component {

    constructor(props) {
        super(props)

        // Initialize random data for the demo
        var d3 = require("d3");

        let now = moment().endOf('day').toDate()
        let time_ago = moment().startOf('day').subtract(10, 'year').toDate()
        let data = d3.timeDays(time_ago, now).map(function (dateElement, index) {
            return {
                date: dateElement,
                details: Array.apply(null, new Array(Math.floor(Math.random() * 15))).map(function(e, i, arr) {
                    return {
                        'name': 'Project ' + Math.ceil(Math.random() * 10),
                        'date': function () {
                            let projectDate = new Date(dateElement.getTime())
                            projectDate.setHours(Math.floor(Math.random() * 24))
                            projectDate.setMinutes(Math.floor(Math.random() * 60))
                            return projectDate
                        }(),
                        'value': 3600 * ((arr.length - i) / 5) + Math.floor(Math.random() * 3600) * Math.round(Math.random() * (index / 365))
                    }
                }),
                init: function () {
                    this.total = this.details.reduce(function (prev, e) {
                        return prev + e.value
                    }, 0)
                    return this
                }
            }.init()
        })


        let dataq = [
            {
                date: "2019-01-01",
                total: 20,
                details: [
                    {
                        name: "Commit 1",
                        date: "2019-01-01 12:30:45",
                        value: 10
                    },
                    {
                        name: "Commit 2",
                        date: "2019-01-01 13:37:00",
                        value: 10
                    },
                    {
                        name: "Commit 3",
                        date: "2019-01-01 14:37:00",
                        value: 10
                    }
                ]
            },
            {
                date: "2019-01-04",
                total: 20,
                details: [
                    {
                        name: "Commit 1",
                        date: "2019-01-04 12:30:45",
                        value: 10
                    }
                ]
            },
            {
                date: "2019-01-05",
                total: 20,
                details: [
                    {
                        name: "Commit 1",
                        date: "2019-01-05 12:30:45",
                        value: 10
                    },
                    {
                        name: "Commit 2",
                        date: "2019-01-05 13:37:00",
                        value: 10
                    }
                ]
            },
            {
                date: "2019-02-07",
                total: 20,
                details: [
                    {
                        name: "Commit 1",
                        date: "2019-02-07 12:30:45",
                        value: 10
                    },
                    {
                        name: "Commit 2",
                        date: "2019-02-07 13:37:00",
                        value: 10
                    }
                ]
            },
            {
                date: "2019-02-09",
                total: 20,
                details: [
                    {
                        name: "Commit 1",
                        date: "2019-02-09 12:30:45",
                        value: 10
                    },
                    {
                        name: "Commit 2",
                        date: "2019-02-09 13:37:00",
                        value: 10
                    }
                ]
            },
            {
                date: "2019-02-15",
                total: 20,
                details: [
                    {
                        name: "Commit 1",
                        date: "2019-02-15 12:30:45",
                        value: 10
                    },
                    {
                        name: "Commit 2",
                        date: "2019-02-15 13:37:00",
                        value: 10
                    }
                ]
            },
            {
                date: "2019-03-04",
                total: 20,
                details: [
                    {
                        name: "Commit 1",
                        date: "2019-03-04 12:30:45",
                        value: 10
                    }
                ]
            }
        ];

        this.state = {
            data: dataq,
            color: "#0500f0",
            overview: 'year',
        }
    }

    print(val) {
        console.log(val)
    }





    render() {


        return (
            <CalendarHeatmap
                data={this.state.data}
                color={this.state.color}
                overview={this.state.overview}
                handler={this.print.bind(this)}>
            </CalendarHeatmap>
        )
    }
}




export default Calendar;
