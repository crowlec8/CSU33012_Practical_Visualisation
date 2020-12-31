import React from 'react';
import './App.css';
//import MyChart from './MyChart';
import Chart from './Components/Chart';

/*const data1 = [
  {label:"Mary", value:12},
  {label:"John", value:36},
  {label:"Ryan", value:15}, 
  {label:"Sarah", value:25},
  {label:"Cian", value:35},
  {label:"Jack", value:10},
  {label:"Sarah", value:40} 
]
const data2 = [5, 10, 15, 20, 25, 30];
//const data3 = [10, 5, 10, 5, 10];

const w = 500;
const h = 400;*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chart />
      </header>
    </div>
  );
}

export default App;
//<MyChart data={data2} w={w} h={h} color="green"/>