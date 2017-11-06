import React from 'react'
import UniversityAPI from '../api'
import { Link } from 'react-router-dom'

// The AllUniversities iterates over all of the universities and creates
// a link to their profile page.
const AllUniversities = () => (
  <div>
   <ul>
     {
       UniversitiyAPI.all().map(u => (
         <li key={u.number}>
           <Link to={`/university/${u.number}`}>{u.name}</Link>
         </li>
       ))
     }
   </ul>
 </div>
)

export default AllUniversities