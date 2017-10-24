import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';




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

  <div className="main">
    <header>
  <div className="navbar navbar-default navbar-static-top">
       <a href='/'className="navbar-brand">
         <img src="images/united-states-flag.png" alt="american flag"/>
            Top 10 Universities in Missouri
        </a>
           <div className="container">
               <ul className="nav navbar-nav row">
                  <li><a href="home.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact</a></li>
               </ul>
          </div>
  </div>
  </header>


          <div className=" container-fluid">
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
  </div>

    <div className= "footer container-fluid">

           <div className="row">
                 <div className="col-md-4"><img src="images/social_facebook.png" alt="Facebook"/></div>
                 <div className="col-md-4"><img src="images/social_twitter.png" alt="Twitter"/></div>
                 <div className="col-md-4"><img src="images/social_instagram.png" alt="Instagram"/></div>
           </div>

    </div>

        <h1>&copy; 2017,  <span>Top 10 Universities</span>,  All Rights Reserved </h1>

   </div>


   );
  }
}








export default App;
