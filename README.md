## Additions by TK

- Added [FullCalendar](https://fullcalendar.io/) to Ember app via yarn
  - Utilize DayView to populate events
  - Detects event click events
  - This took a fair bit to understand how to incorporate correctly with EmberJS -- was able to use a modifier to display the calendar when invoked, passing in event data
  - Had to add yarn `ember-auto-import` and upgrade `webpack` in order to be able to load FullCalendar CSS imports
    - Had some nice folks from the EmberJS community on Discord/Stack help me where I got stuck here

## TK TODOs

- Clicking event triggers modal with details and button to "book"
- Booked events have a unique color or appearance 
- Clicking book triggers grapqhl mutation to run mutation
- Local timezone conversion
