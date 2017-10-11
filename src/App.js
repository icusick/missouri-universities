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
              {rank:10, name: " Southeast Missouri State University", location: "Cape Girardeau"}
   ];

   render() {

       return (

  <div className="container">

         <div className="navbar navbar-default navbar-static-top">
             <a href='/'className="navbar-brand">
             <img src="images/united-states-flag.png" alt="american flag"/>
                Top 10 Universities in Missouri

             </a>

                <ul className="nav navbar-nav">
                   <li><a href="index.html">Home</a></li>
                   <li><a href="about.html">About</a></li>
                   <li><a href="contact.html">Contact</a></li>
               </ul>
           </div>

          <div className="row">
             <div className="col-md-offset-1"><h2> Rank</h2></div>
             <div className="col-md-8"><h2>University</h2> </div>
             <div className="col-md-3"><h2>Location</h2> </div>
         </div>


        {this.data.map(function(University, index){
            return (
               <div className="row" key={ index }>
                 <div className="col-md-offset-1">{University.rank}</div>
                 <div className="col-md-8">{University.name}</div>
                 <div className="col-md-3">{University.location}</div>
              </div>);
        })}

        <div className= "footer">

                 <div className="row">
                 <div className="col-md-4"><h3>Facebook</h3></div>
                 <div className="col-md-4"><h3>Twitter</h3></div>
                 <div className="col-md-4"><h3>Google+</h3></div>

                   <h2 class ="text-center">2017, Top 10 Universities in MO</h2>

        </div>
    </div>




 </div>


   );
  }
}








export default App;
