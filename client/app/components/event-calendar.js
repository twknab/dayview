import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class EventCalendarComponent extends Component {
  @tracked eventData = [
      {
        title: 'Kayak Tour',
        start: '2022-03-09T14:30:00',
        end: '2022-03-09T19:30:00',
      },
    ];
}
