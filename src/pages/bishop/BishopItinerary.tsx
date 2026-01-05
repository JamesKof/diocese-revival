import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

const itinerary = [
  {
    month: "January 2024",
    events: [
      {
        date: "January 7",
        event: "Mass for World Day of Peace",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "January 14",
        event: "Pastoral Visit - Akatsi Deanery",
        location: "St. Anthony Parish, Akatsi",
        time: "10:00 AM",
      },
      {
        date: "January 21",
        event: "Confirmation Mass",
        location: "St. Paul Parish, Denu",
        time: "10:00 AM",
      },
    ],
  },
  {
    month: "February 2024",
    events: [
      {
        date: "February 2",
        event: "World Day for Consecrated Life",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "February 11",
        event: "World Day of the Sick",
        location: "Catholic Hospital, Battor",
        time: "10:00 AM",
      },
      {
        date: "February 14",
        event: "Ash Wednesday Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "6:00 PM",
      },
      {
        date: "February 18",
        event: "Pastoral Visit - Sogakope Deanery",
        location: "Christ the King Parish, Sogakope",
        time: "10:00 AM",
      },
    ],
  },
  {
    month: "March 2024",
    events: [
      {
        date: "March 3",
        event: "Lenten Recollection for Clergy",
        location: "Diocesan Pastoral Centre",
        time: "9:00 AM",
      },
      {
        date: "March 10",
        event: "Pastoral Visit - Keta Deanery",
        location: "Various Parishes",
        time: "All Day",
      },
      {
        date: "March 19",
        event: "Solemnity of St. Joseph",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "March 24",
        event: "Palm Sunday Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "March 28",
        event: "Chrism Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "10:00 AM",
      },
      {
        date: "March 31",
        event: "Easter Sunday Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
    ],
  },
  {
    month: "April 2024",
    events: [
      {
        date: "April 7",
        event: "Divine Mercy Sunday",
        location: "Holy Spirit Cathedral, Keta",
        time: "3:00 PM",
      },
      {
        date: "April 14",
        event: "Confirmation Mass - Denu Deanery",
        location: "St. Francis Parish, Aflao",
        time: "10:00 AM",
      },
      {
        date: "April 21",
        event: "World Day of Prayer for Vocations",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
    ],
  },
];

const BishopItinerary = () => {
  return (
    <Layout>
      <PageHeader
        title="Bishop's Itinerary"
        subtitle="Schedule of the Bishop's pastoral activities"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground font-serif text-center mb-12">
              Below is the schedule of pastoral visits, liturgical celebrations, and other 
              activities of Most Rev. Gabriel Edoe Kumordji, SVD. This schedule is subject 
              to change.
            </p>

            <div className="space-y-12">
              {itinerary.map((month, monthIndex) => (
                <div key={monthIndex}>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 pb-2 border-b border-accent flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-accent" />
                    {month.month}
                  </h2>

                  <div className="space-y-4">
                    {month.events.map((event, eventIndex) => (
                      <Card key={eventIndex} className="border-border hover:border-accent/50 transition-colors">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="md:w-24 shrink-0">
                              <div className="text-accent font-semibold">{event.date}</div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-heading font-semibold text-foreground">
                                {event.event}
                              </h3>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {event.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {event.time}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-12 bg-muted/50 rounded-xl p-6 text-center">
              <p className="text-muted-foreground text-sm">
                <strong>Note:</strong> This itinerary is subject to change. For confirmation 
                of events or to request the Bishop's presence at a special occasion, please 
                contact the Diocesan Secretariat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BishopItinerary;
