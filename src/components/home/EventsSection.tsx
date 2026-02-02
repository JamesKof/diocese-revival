import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import faithfulWoman from "@/assets/faithful-woman.jpg";

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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Events List */}
          <div>
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">
              Mark Your Calendar
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Upcoming Events
            </h2>
            
            <div className="space-y-4">
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

            <Link to="/media/news" className="inline-block mt-6">
              <Button variant="outline" className="group">
                View Full Calendar
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src={faithfulWoman}
                alt="A joyful parishioner in traditional Ghanaian attire during Mass"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <p className="text-accent font-semibold text-sm mb-1">Join Our Community</p>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Experience the Joy of Faith
              </h3>
              <p className="text-muted-foreground text-sm">
                Our vibrant community welcomes all to celebrate and grow in faith together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
