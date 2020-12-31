import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import color from 'color';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: false
    }

    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width = '500'
                    height = '400'
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: this.props.displayTitle
                                }
                            }]
                        },
                        title:{
                            display:true,
                            text:'Total number of commits to repositories',
                            fontSize:40,
                            fontColor:'white'
                        },
                        legend:{
                            display:this.props.displayLegend
                        },

                    }}
                />
            </div>
        )
    }
}

export default Chart;