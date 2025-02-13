import React , {useContext , createContext} from 'react'
import { Button } from 'react-bootstrap';


const eventContext = createContext();

const EventCard = ({name , description , img , price , nbTickets , nbParticipants , like}) => {
  const eventData = {name, description, img, price, nbTickets, nbParticipants, like} ;
  return (
    <eventContext.Provider value={eventData}>
    <h2>{name}</h2>
    <img src={img} alt='' />
    <p>{description}</p>
    <p>nb Ticket :{nbTickets}</p>
    <p>Price: {price}</p>
    <p>nb nbParticipants: {nbParticipants}</p>
    <p>{like}</p>
    <Button>Book an Event</Button>
</eventContext.Provider>
  )
}

export default EventCard