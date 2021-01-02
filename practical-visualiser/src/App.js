 import React, { Component } from 'react';
 import './App.css';
 import Chart from './Components/Chart';
 import sampleData from './sampleData.json';

let repo = "github";
let commit_url = "https://api.github.com/repos/esjmb/"+repo+"/commits";
let repo_url = "https://api.github.com/users/esjmb/repos";
let my_url = "https://api.github.com/users/crowlec8";

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{},
      items: [],
      isLoaded: true,
    }
  }


  
  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    var sampleLabels = [];
    var sampleCommits = [];
    //console.log(sampleCommits[0]);
    //for(var i = 0; i < this.state.person.length; i++){
    // for(var i = 0; i < 30; i++){
    //    sampleLabels.push(this.state.person[i].commit.committer.name)
    // }

    for(var i = 0; i < sampleData.length; i++){
      for(var j = 0; j < sampleData.length; j++){
        if( sampleData[i].name === sampleData[j].name){
          if(sampleCommits[i] === undefined){
            sampleLabels[i] = sampleData[j].name;
            sampleCommits[i] = 0;
          }
          sampleCommits[i] += 1;
        }   
      }
    }

    for(i = 0; i < sampleLabels.length; i++){
      for(j = 0; j < sampleLabels.length; j++){
        if( sampleLabels[i] === sampleLabels[j] && i!==j){
          sampleLabels.splice(j, 1);
          sampleCommits.splice(j, 1);
          j--;
        }
      }
    }

    this.setState({
      chartData:{
        labels: sampleLabels,
        datasets:[
          {
            label:'Commits', // Needed if using legend, no need in this case
            data:sampleCommits,
            //data:[16, 28, 39, 8, 19, 11, 21, 30, 15, 2],
            backgroundColor:'rgba(55, 199, 232, 10)'
          }
        ]
      }
    });
  };

  render(){
    var { isLoaded, items } = this.state;

    if(!isLoaded){
      return <div>loading...</div>;
    }
    else{

      return (
        <div className="App">
          <Chart chartData={this.state.chartData} />

        </div>
      );
    }
  }
}


//<Chart chartData={this.state.chartData} />

export default App;