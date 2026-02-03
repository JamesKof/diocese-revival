import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

const itinerary = [
  {
    month: "January 2026",
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
    month: "February 2026",
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
        date: "February 18",
        event: "Ash Wednesday Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "6:00 PM",
      },
      {
        date: "February 22",
        event: "Pastoral Visit - Sogakope Deanery",
        location: "Christ the King Parish, Sogakope",
        time: "10:00 AM",
      },
    ],
  },
  {
    month: "March 2026",
    events: [
      {
        date: "March 1",
        event: "Lenten Recollection for Clergy",
        location: "Diocesan Pastoral Centre",
        time: "9:00 AM",
      },
      {
        date: "March 8",
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
        date: "March 29",
        event: "Palm Sunday Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
    ],
  },
  {
    month: "April 2026",
    events: [
      {
        date: "April 2",
        event: "Chrism Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "10:00 AM",
      },
      {
        date: "April 5",
        event: "Easter Sunday Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "April 12",
        event: "Divine Mercy Sunday",
        location: "Holy Spirit Cathedral, Keta",
        time: "3:00 PM",
      },
      {
        date: "April 19",
        event: "Confirmation Mass - Denu Deanery",
        location: "St. Francis Parish, Aflao",
        time: "10:00 AM",
      },
      {
        date: "April 26",
        event: "World Day of Prayer for Vocations",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
    ],
  },
  {
    month: "May 2026",
    events: [
      {
        date: "May 1",
        event: "Feast of St. Joseph the Worker",
        location: "St. Joseph the Worker Parish, Aflao",
        time: "9:00 AM",
      },
      {
        date: "May 10",
        event: "Mother's Day Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "10:00 AM",
      },
      {
        date: "May 14",
        event: "Ascension Thursday Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "May 24",
        event: "Pentecost Sunday Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "May 31",
        event: "Visitation of the Blessed Virgin Mary",
        location: "St. Mary Parish, Anlo-Afiadenyigba",
        time: "10:00 AM",
      },
    ],
  },
  {
    month: "June 2026",
    events: [
      {
        date: "June 7",
        event: "Corpus Christi Procession",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "June 14",
        event: "Pastoral Visit - Akatsi Deanery",
        location: "Various Parishes",
        time: "All Day",
      },
      {
        date: "June 19",
        event: "Solemnity of the Sacred Heart",
        location: "Sacred Heart Parish, Afife",
        time: "10:00 AM",
      },
      {
        date: "June 21",
        event: "Father's Day Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "10:00 AM",
      },
      {
        date: "June 29",
        event: "Solemnity of Ss. Peter & Paul",
        location: "Ss. Peter & Paul Parish, Aflao",
        time: "9:00 AM",
      },
    ],
  },
  {
    month: "July 2026",
    events: [
      {
        date: "July 5",
        event: "Confirmation Mass - Sogakope Deanery",
        location: "Holy Cross Parish, Sogakope",
        time: "10:00 AM",
      },
      {
        date: "July 12",
        event: "Pastoral Visit - Denu Deanery",
        location: "Various Parishes",
        time: "All Day",
      },
      {
        date: "July 19",
        event: "Youth Sunday Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "July 26",
        event: "Feast of Ss. Joachim & Anne",
        location: "Holy Spirit Cathedral, Keta",
        time: "10:00 AM",
      },
    ],
  },
  {
    month: "August 2026",
    events: [
      {
        date: "August 6",
        event: "Feast of the Transfiguration",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "August 15",
        event: "Assumption of the Blessed Virgin Mary",
        location: "Holy Spirit Cathedral, Keta",
        time: "10:00 AM",
      },
      {
        date: "August 22",
        event: "Queenship of Mary",
        location: "St. Mary Parish, Hatorgodo",
        time: "10:00 AM",
      },
      {
        date: "August 30",
        event: "Recollection for Catechists",
        location: "Diocesan Pastoral Centre",
        time: "9:00 AM",
      },
    ],
  },
  {
    month: "September 2026",
    events: [
      {
        date: "September 6",
        event: "Diocesan Day of Prayer for the Environment",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "September 14",
        event: "Feast of the Exaltation of the Holy Cross",
        location: "Holy Cross Parish, Sogakope",
        time: "10:00 AM",
      },
      {
        date: "September 21",
        event: "Catechetical Sunday",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "September 29",
        event: "Feast of the Archangels",
        location: "St. Michael Parish, Keta",
        time: "10:00 AM",
      },
    ],
  },
  {
    month: "October 2026",
    events: [
      {
        date: "October 4",
        event: "Feast of St. Francis of Assisi",
        location: "St. Francis Parish, Aflao",
        time: "10:00 AM",
      },
      {
        date: "October 7",
        event: "Feast of Our Lady of the Rosary",
        location: "Holy Rosary Parish, Dabala Junction",
        time: "10:00 AM",
      },
      {
        date: "October 18",
        event: "World Mission Sunday",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "October 25",
        event: "Confirmation Mass - Keta Deanery",
        location: "St. Michael Parish, Keta",
        time: "10:00 AM",
      },
    ],
  },
  {
    month: "November 2026",
    events: [
      {
        date: "November 1",
        event: "Solemnity of All Saints",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "November 2",
        event: "All Souls Day Mass",
        location: "Diocesan Cemetery, Keta",
        time: "9:00 AM",
      },
      {
        date: "November 15",
        event: "World Day of the Poor",
        location: "Holy Spirit Cathedral, Keta",
        time: "10:00 AM",
      },
      {
        date: "November 22",
        event: "Solemnity of Christ the King",
        location: "Christ the King Parish, Akatsi",
        time: "10:00 AM",
      },
      {
        date: "November 29",
        event: "First Sunday of Advent",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
    ],
  },
  {
    month: "December 2026",
    events: [
      {
        date: "December 8",
        event: "Solemnity of the Immaculate Conception",
        location: "Immaculate Conception Parish, Agbozume",
        time: "10:00 AM",
      },
      {
        date: "December 13",
        event: "Gaudete Sunday - Advent Recollection",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "December 20",
        event: "Fourth Sunday of Advent",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "December 24",
        event: "Christmas Vigil Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "10:00 PM",
      },
      {
        date: "December 25",
        event: "Christmas Day Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 AM",
      },
      {
        date: "December 31",
        event: "New Year's Eve Thanksgiving Mass",
        location: "Holy Spirit Cathedral, Keta",
        time: "9:00 PM",
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
