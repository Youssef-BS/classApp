import React , {useEffect , useState , useContext} from 'react'
import data from "../../data/events.json"
import EventCard from "./EventCard"


const Event = () => {
    const [events, setEvents] = useState([])
    const [loading , setLoading] = useState(true)
    const event = useContext(EventCard);
    useEffect(() => {
        const getData = () => {
            setEvents(data)
        } 
        getData()
        setLoading(false)
    }, [])
  return (
    <div>
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