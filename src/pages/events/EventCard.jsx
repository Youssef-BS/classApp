import React, { useState }  from 'react'
import { Button } from 'react-bootstrap';


const EventCard = ({name , description , img , price , nbTickets , nbParticipants , like}) => {
  const [islike , setLike] = useState(like);
  const handleLike = () => {
    setLike(!islike);
  }
  return (
    <div className='event-card bg-light bg-gradient p-4 m-2 rounded text-center shadow' key={name}>
    <strong>{name}</strong>
    <img src={img} alt='' className='rounded'/>
    <p>{description}</p>
    <p>nb Ticket :{nbTickets}</p>
    <p>Price: {price}</p>
    <p>nb nbParticipants: {nbParticipants}</p>
    <Button className='btn btn-success' onClick={handleLike}>{islike ? "liked" : "not liked"}</Button>
    <Button>Book an Event</Button>
</div>
  )
}

export default EventCard