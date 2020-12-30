import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyChart from './MyChart';

const data1 = [12, 36, 15, 25, 35, 10, 40];
const data2 = [5, 10, 15, 20, 25, 30];
const data3 = [10, 5, 10, 5, 10];

const w = 1000;
const h = 800;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyChart data={data1} w={w} h={h} color="green"/>
      </header>
    </div>
  );
}

export default App;
