import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AllUniversities from './components/AllUniversities';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';


class App extends Component{

   //   data = [
   //            {rank: 1, name: " Washington University in St.Louis", location: "St.Louis"},
   //            {rank: 2, name: " Universty of Missouri", location: "Columbia"},
   //            {rank: 3, name: " University of Missouri-Kansas City", location: "Kansas City"},
   //            {rank: 4, name: " Saint Louis University", location: "St.Louis"},
   //            {rank: 5, name: " University of Missouri-St.Louis", location: "St.Louis"},
   //            {rank: 6, name: " Missouri State University", location: "Springfield"},
   //            {rank: 7, name: " Missouri University of Science and Technology", location: "Rolla"},
   //            {rank: 8, name: " Webster University", location: "St.Louis"},
   //            {rank: 9, name: " Truman State University", location: "Kirksville"},
   //            {rank:10, name: " Southeast Missouri State University", location:"Cape Girardeau"}
   // ];
   data = [""];

   render() {

       return (
 <div className="whole component">
               <Header />
               <Main/>


            <div className=" container-fluid">
                 <div classname="col-md-12"><img src="images/students.jpg" alt="Walking students"/></div>
                    <div className="row">
                       <div className="col-md-offset-1"><h2> Rank</h2></div>
                       <div className="col-md-8"><h2>University</h2> </div>
                       <div className="col-md-3"><h2>Location</h2></div>
                    </div>


             <AllUniversities/>


         {this.data.map(function(University, index){
            return (
             <div className="row" key={ index }>
                 <div className="col-md-offset-1">{University.rank}</div>
                 <div className="col-md-8">
                  <a href={index}>{University.name}</a>
                 </div>
                 <div className="col-md-3">{University.location}</div>
            </div>);
        })}
        </div>




      <div className="socialMedia">
            <div className="row">
                 <div className="col-md-4"><img src="images/social_facebook.png" alt="Facebook"/></div>
                 <div className="col-md-4"><img src="images/social_twitter.png" alt="Twitter"/></div>
                 <div className="col-md-4"><img src="images/social_instagram.png" alt="Instagram"/></div>

            </div>

    </div>
        <h3>Copyright &copy; 2017,  <span>Top 10 Universities</span>,  All Rights Reserved </h3>
</div>


   );
  }
}

export default App;
