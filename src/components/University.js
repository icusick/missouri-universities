import React, { Component } from 'react'
import { UniversityAPI }  from '../api'
import { Link } from 'react-router-dom'

// The University looks up the university using the number parsed from
// the URL's pathname. If no university is found with the given
// index, then a "university not found" message is displayed.
class University extends Component {
  render() {
    const university = UniversityAPI.get(
      parseInt(this.props.match.params.id, 10)
    )
    console.log(university)
    if (!university) {
      return <div>Sorry, but the university was not found</div>
    }
    return (
      <div>
        <h1>{university.name} (#{university.rank})</h1>
        <h2>Location: {university.location}</h2>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}

export default University
