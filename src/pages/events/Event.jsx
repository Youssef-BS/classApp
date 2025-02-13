import React , {useEffect , useState} from 'react';
import data from "../../data/events.json";
import EventCard from "./EventCard";
import "./event.css";


const Event = () => {
    const [events, setEvents] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        const getData = () => {
            setEvents(data)
        } 
        getData()
        setLoading(false)
    }, [])
  return (
    <div className='list-event d-flex flex-wrap list-event'>
        {loading && <p>Loading...</p>}
        {!loading && 
                events.map((event) => (
            <EventCard
                key={event.name}
                name={event.name}
                description={event.description}
                img={'images/'+event.img}
                price={event.price}
                nbTickets={event.nbTickets}
                nbParticipants={event.nbParticipants}
                like={event.like}
            />
        ))
        }

    </div>
  )
}

export default Event