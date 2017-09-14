import React, { Component } from 'react';
import './App.css';

class App extends Component {
  data = [
              {rank: 1, name: "WashU", location: "St.Louis"},
              {rank: 2, name: "Universty of Missouri", location: "Columbia"},
              {rank: 3, name: "University of Missouri-Kansas City", location: "Kansas City"},
              {rank: 4, name: "Saint Louis University", location: "St.Louis"},
              {rank: 5, name: "University of Missouri-St.Louis", location: "St.Louis"},
              {rank: 6, name: " Missouri State University", location: "Springfield"},
              {rank: 7, name: " Missouri University of Science and Technology", location: "Rolla"},
              {rank: 8, name: "Webster University", location: "St.Louis"},
              {rank: 9, name: "Truman State University", location: "Kirksville"},
              {rank: 10, name: "Southeast Missouri State University", location: "Cape Girardeau"}
  ];

  render() {


    return (
      <div>
        <ul>
            {this.data.map(function(university, index){
              return (<li key={ index }>{university.name}</li>);
            })}
        </ul>


        <div className="App">
          <div className="App-header">

            <img src="App-logo" alt="logo" />
            <h2>Welcome to top 10 universities in MO......</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload
          </p>
        </div>
       </div>
    );
  }
}

export default App;
