// app/modifiers/calendar.js
import { modifier } from 'ember-modifier';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export default modifier((element, [eventData]) => {
  console.log("THIS IS EVENT DATA");
  console.log(eventData);
  let calendar = new Calendar(element, {
    plugins: [dayGridPlugin, timeGridPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: eventData ? eventData : [],
  });

  calendar.render();

  return () => {
    // if the calendar has a teardown function, you'd want to call that here
  };
});
