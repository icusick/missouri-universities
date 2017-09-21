import React, { Component } from 'react';
import './App.css';

class App extends Component {

    data = [
              {rank: 1, name: " Washington University in St.Louis", location: "St.Louis"},
              {rank: 2, name: " Universty of Missouri", location: "Columbia"},
              {rank: 3, name: " University of Missouri-Kansas City", location: "Kansas City"},
              {rank: 4, name: " Saint Louis University", location: "St.Louis"},
              {rank: 5, name: " University of Missouri-St.Louis", location: "St.Louis"},
              {rank: 6, name: " Missouri State University", location: "Springfield"},
              {rank: 7, name: " Missouri University of Science and Technology", location: "Rolla"},
              {rank: 8, name: " Webster University", location: "St.Louis"},
              {rank: 9, name: " Truman State University", location: "Kirksville"},
              {rank: 10, name: " Southeast Missouri State University", location: "Cape Girardeau"}
   ];

   render() {

       return (

      <div className="container">
        <div className="row">
          <div className="col-md-4"> Rank</div>
          <div className="col-md-4"> University </div>
          <div className="col-md-4"> Location </div>
       </div>


        {this.data.map(function(University, index){
          return (
              <div className="row" key={ index }>
                <div className="col-md-4">{University.rank}</div>
                <div className="col-md-4">{University.name}</div>
                <div className="col-md-4">{University.location}</div>
              </div>);
            })}



       </div>
    );
  }
}

export default App;
