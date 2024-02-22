import React from 'react'
import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageDates = () => {
  return (
    <section className='manageDates'>
      <h1>Manages Dates</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/booktype-one">Observation Deck</Link>
        <Link to="/admin/manage-dates/booktype-two">Tower Walk</Link>
        <Link to="/admin/manage-dates/booktype-three">Sky Deck + Sky Box</Link>
        <Link to="/admin/manage-dates/booktype-four">Combo: Observation Deck + Sky Deck + Sky Box</Link>
      </div>
    </section>
  )
}

export default ManageDates