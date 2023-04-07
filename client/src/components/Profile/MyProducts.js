import React from "react";
import '../Profile/profile.css'

import { Link } from 'react-router-dom'

export default function MyProducts({
  _id,
  title,
  description,
  picture,
  price,
  isCompleted,
}) {
  return (
    <div className="eventBoard">
    <div className="event-info">
        <img src={picture} alt={title}/>
        <h2>Title:  {title}</h2>
        <Link to={`/details/${_id}`} className="details-button">Details</Link>
    </div>
    </div> 
  )
}

{/* <ol className="list-group list-group-numbered" style={{maxWidth: '100%', width: 'auto'}}>
<li className="list-group-item d-flex justify-content-between align-items-start">
  <div className="ms-2 me-auto">
    <div className="fw-bold text-truncate" style={{marginRight: 200 + 'px'}}>Title:  {title}</div>
    <Link to={`/details/${_id}`} className="btn btn-outline-warning btn-custom">Details</Link>
  </div>
</li>
</ol> */}
