# Full-Stack Take-Home Challenge

![peek-graphql-ember](https://gist.github.com/MartinBeuriot/6e208cd6645066547de9c7b96b9fad86/raw/fb812b50edc8b4d6a8644b1956239672a373175a/fs-challenge.png)

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

## Problem Description

- In the ember app, display the events in a one day calendar view in a way that looks like a day of google calendar.
- Add the ability to add a "booking" to an event. This will require writing a new Mutation in Elixir that wires up the `create_booking` context function created for you.

### Extras

At a minimum, we ask the above be implemented. Extra points for the following:

- Filters when retrieving events
- UI for multiple days
- Querying bookings and displaying them
- [Anything else you think would make for a cool experience]