import React from 'react'
import UniversityAPI from '../api'
import { Link } from 'react-router-dom'

// The University looks up the university using the number parsed from
// the URL's pathname. If no university is found with the given
// index, then a "university not found" message is displayed.
const University = (props) => {
  const university = UniversityAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!university) {
    return <div>Sorry, but the university was not found</div>
  }
  return (
    <div>
      <h1>{university.name} (#{university.rank})</h1>
      <h2>Location: {university.location}</h2>
      <Link to='/AllUniversities'>Back</Link>
    </div>
  )
}

export default University
