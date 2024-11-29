import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import React, { useState, useRef, useEffect } from "react";

 

export default function Calendar() {
 
  
  const [events, setEvents] = useState([])
  React.useEffect(() => {
    fetch('https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings')
    .then(response => { 
      if (!response.ok)
        throw new Error("Error in fetch: " + response.statusText);  
         response.json()
      .then(responseData => { 
      setEvents((responseData._embedded.trainings))
    })
  
      return response;
    }) 

    .catch(err => console.error(err))
  }, [])
   



  return (
    <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin]}
              headerToolbar={{
                // left: "myCustomButton prev,today,next",
                left: "prev,today,next",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
              }}
      initialView='dayGridMonth'
      events={
        events
      }
      eventContent={renderEventContent}
    />
  )
}
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
