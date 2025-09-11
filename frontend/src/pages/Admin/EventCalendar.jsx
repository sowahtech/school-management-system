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
        <AddEventForm>
          <h2>Add New Event</h2>
          <EventInput type="text" placeholder="enter event" />
          <AddEventButton type="submit">Add Event</AddEventButton>
        </AddEventForm>

        <Events>
          <h2>Events</h2>
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default EventCalendar;
