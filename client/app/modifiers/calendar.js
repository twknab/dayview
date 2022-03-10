// app/modifiers/calendar.js
import { modifier } from 'ember-modifier';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export default modifier((element, eventData) => {
  let calendar = new Calendar(element, {
    plugins: [dayGridPlugin, timeGridPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek',
    },
    events: [
      {
        title: 'Kayak Tour',
        start: '2022-03-09T14:30:00',
        end: '2022-03-09T19:30:00',
      },
    ],
  });

  // let calendar = new Calendar(element, {
  //   initialView: 'dayGridMonth',
  //   ...overrideOptions,
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay',
  //     ...(overrideOptions.headerToolbar || {})
  //   },
  //   events: overrideOptions.events
  //     ? overrideOptions.events
  //     : [{
  //         title: 'Kayak Tour',
  //         start: '2022-03-09T14:30:00',
  //         end: '2022-03-09T19:30:00',
  //       }],
  // });

  calendar.render();

  return () => {
    // if the calendar has a teardown function, you'd want to call that here
  };
});
