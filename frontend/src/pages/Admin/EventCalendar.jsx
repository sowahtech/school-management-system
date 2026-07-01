import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText,
} from "../../styles/EventCalendarStyles";

const EventCalendar = () => {

  const [events, setEvents] = useState([])
  const [newEvent, setNewEvent] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchEvents();
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/vt/events/getall")
      setEvents(response.data.events || [])
    } catch (error) {
      console.error('Error fetching events', error)
    }
  }

  const addEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/vt/events/create', {
        event: newEvent
      })
      console.log('Response data: ', response.data) // this will log the response data
      setEvents([...events, response.data.events])
      setNewEvent('')
    } catch (error) {
      console.error('Error adding event: ', error)
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error)
      } else {
        setError('Error adding event')
      }
    }
  }

  return (
    <EventCalendarContainer style={{ paddingLeft: 250 }}>
      <Sidebar />
      <Content>
        <h1>Events and Calendar</h1>
        <div>Current Time: </div>
        <CalendarContainer>
          {/* Here we can display calendar */}
          Calendar
        </CalendarContainer>
        <AddEventForm onSubmit={addEvent}>
          <h2>Add New Event</h2>
          <EventInput type="text" value={newEvent} onChange={(e) => setNewEvent(e.target.value)} placeholder="enter event" />
          <AddEventButton type="submit">Add Event</AddEventButton>
        </AddEventForm>

        <Events>
          <h2>Events</h2>
          {events.map((event, index) => {
            <Event key={index}>{event}</Event>
          })}
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default EventCalendar;
