import { Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    id: 1,
    title: "Sunday Mass - Cathedral",
    date: "Every Sunday",
    time: "8:00 AM & 10:00 AM",
    location: "Holy Spirit Cathedral, Keta",
  },
  {
    id: 2,
    title: "Adoration & Benediction",
    date: "First Friday",
    time: "6:00 PM",
    location: "All Parishes",
  },
  {
    id: 3,
    title: "Youth Fellowship",
    date: "Every Saturday",
    time: "3:00 PM",
    location: "Diocesan Youth Center",
  },
];

export function EventsSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">
              Join Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Upcoming Events
            </h2>
          </div>
          <Link to="/media/news">
            <Button variant="outline">View Full Calendar</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 hover:shadow-md transition-all"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                {event.title}
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
