import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Mary', 'John', 'Sarah', 'Ryan', 'Cian', 'Emma'],
                datasets:[
                    {
                        label:'Commits',
                        data:[32, 14, 10, 26, 18, 9],
                        backgroundColor:'rgba(255, 99, 132, 0.6)'                        
                    }
                ]
            }
        }
    }

    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRation: false
                    }}
                />
            </div>
        )
    }
}

export default Chart;