import React from 'react'
import {UniversityAPI} from '../api'
import { Link } from 'react-router-dom'

// The AllUniversities iterates over all of the universities and creates
// a link to their profile page.
const AllUniversities = () => (
  <div>
   <ul>
     {
       UniversityAPI.all().map(u => (

         <li key={u.index}>

           <Link to={`/university/${u.index}`}>{u.name}</Link>
           <div className="col-md-3 offset-md-8">{u.location}</div>

         </li>

       ))
     }
   </ul>
 </div>
)

export default AllUniversities
