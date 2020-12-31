import React, { Component } from 'react';
import './App.css';
import Chart from './Components/Chart';
import sampleData from './sampleData.json';

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
    var sampleLabels = [];
    var sampleCommits = []
    for(var i = 0; i < sampleData.length; i++){
      sampleLabels.push(sampleData[i].name)
      sampleCommits.push(sampleData[i].numberOfCommits)
    }
    this.setState({
      chartData:{
        labels:sampleLabels,
        datasets:[
          {
            label:'Commits', // Needed if using legend, no need in this case
            data:sampleCommits,
            backgroundColor:'rgba(55, 199, 232, 10)'
          }
        ]
      }
    });
  }

  render(){
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default App;
