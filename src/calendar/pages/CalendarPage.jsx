import { Navbar } from "../";
import { Calendar } from "react-big-calendar";
import { addHours} from "date-fns";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {localizer , getMessagesEs} from '../../helpers'

const events = [{
  title: 'cumpleaños del jefe',
  note: 'Hay que comprar un regalo',
  start: new Date(),
  end: addHours(new Date(), 2),

}]

export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) => {

  }


  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc (100vh - 80px)' }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};
