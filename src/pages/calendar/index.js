import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import Footer from "components/footer";

import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";

const ExtrasFullCalandar = () => {
  const events = [
    {
      title: "All Day Event",
      start: "2023-01-01",
    },
    {
      title: "Long Event",
      start: "2023-01-07",
      end: "2023-01-10",
    },
    {
      groupId: 999,
      title: "Repeating Event",
      start: "2023-01-09T16:00:00",
    },
    {
      groupId: 999,
      title: "Repeating Event",
      start: "2023-01-16T16:00:00",
    },
    {
      title: "Conference",
      start: "2023-01-11",
      end: "2023-01-13",
    },
    {
      title: "Meeting",
      start: "2023-01-12T10:30:00",
      end: "2023-01-12T12:30:00",
    },
    {
      title: "Lunch",
      start: "2023-01-12T12:00:00",
    },
    {
      title: "Meeting",
      start: "2023-01-12T14:30:00",
    },
    {
      title: "Happy Hour",
      start: "2023-01-12T17:30:00",
    },
    {
      title: "Dinner",
      start: "2023-01-12T20:00:00",
    },
    {
      title: "Birthday Party",
      start: "2023-01-13T07:00:00",
    },
    {
      title: "Click for Google",
      url: "http://google.com/",
      start: "2023-01-28",
    },
  ];

  return (
    <main className="workspace main">
      <Breadcrumb title="FullCalendar" className="Breadcrumb">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Extras</BreadcrumbItem>
        <BreadcrumbItem>FullCalendar</BreadcrumbItem>
      </Breadcrumb>

      <div className="card p-5">
        <FullCalendar
          className="FullCalendar"
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialDate="2023-01-12"
          navLinks={true} 
          editable={true}
          dayMaxEvents={true} 
          events={events}
        />
      </div>

      <Footer />
    </main>
  );
};

export default ExtrasFullCalandar;
