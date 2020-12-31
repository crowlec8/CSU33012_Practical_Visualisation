import React, { Component } from 'react';
import './App.css';
import Chart from './Components/Chart';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    //Ajax call here
    this.setState({
      chartData:{
        labels: ['Mary', 'John', 'Sarah', 'Ryan', 'Cian', 'Emma'],
        datasets:[
            {
                label:'Commits', // Needed if using legend, no need in this case
                data:[28, 14, 10, 26, 18, 9],
                backgroundColor:'rgba(255, 199, 132, 0.6)'                        
            }
        ]
      }
    });
  }

  render(){
    return (
      <div className="App">
        <style>{'body {background-color: red;}'}</style>
        <header className="App-header">
          <Chart chartData={this.state.chartData} />
        </header>
      </div>
    );
  }
}

export default App;
