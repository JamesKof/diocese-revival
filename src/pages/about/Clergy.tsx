import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar } from "lucide-react";

interface Priest {
  name: string;
  ordained: string;
  title?: string;
}

const diocesanClergy: Priest[] = [
  { name: "Rev. Msgr. Peter Huletey", ordained: "Dec. 7, 1985" },
  { name: "Rev. Fr. Mathias Ganyo", ordained: "July 20, 1974", title: "Retired" },
  { name: "Rev. Msgr. Moses Attah Debre", ordained: "Dec. 22, 1984" },
  { name: "Rev. Msgr. Felix Senyo", ordained: "Dec. 22, 1984" },
  { name: "Rev. Fr. Michael Elorm Gbordzor", ordained: "Sept. 20, 1986" },
  { name: "Rev. Fr. Francis Setriakor Geraldo", ordained: "July 18, 1987" },
  { name: "Rev. Fr. Theophilus Habadah", ordained: "July 29, 1989" },
  { name: "Rev. Fr. Victor Ashiagbor", ordained: "January 1, 1990" },
  { name: "Rev. Fr. Paul Dzumador", ordained: "July 18, 1992" },
  { name: "Rev. Fr. Anthony Ocloo", ordained: "July 18, 1992" },
  { name: "Rev. Fr. Emmanuel Amedzi", ordained: "July 23, 1994" },
  { name: "Rev. Fr. Peter Nanga", ordained: "July 23, 1994" },
  { name: "Rev. Fr. Winfred Srahah", ordained: "July 23, 1994" },
  { name: "Rev. Fr. Christopher Vordzorgbe", ordained: "July 23, 1994" },
  { name: "Rev. Fr. Alexander Salakpi", ordained: "July 20, 1996" },
  { name: "Rev. Fr. Paul Torsu", ordained: "August 2, 1997" },
  { name: "Rev. Fr. David Ahiaxornu", ordained: "July 17, 1999" },
  { name: "Rev. Fr. Mark Akpene Etsey", ordained: "July 17, 1999" },
  { name: "Rev. Fr. Valentine Gregory Hlovor", ordained: "July 17, 1999" },
  { name: "Rev. Fr. Johannes Dedo", ordained: "July 8, 2000" },
  { name: "Rev. Fr. James Mikado", ordained: "July 8, 2000" },
  { name: "Rev. Fr. Gideon Fianyah", ordained: "July 21, 2001" },
  { name: "Rev. Fr. James Amuzu", ordained: "August 10, 2002" },
  { name: "Rev. Fr. Anthony Asinyo", ordained: "July 12, 2003" },
  { name: "Rev. Fr. Harry Justin Barawusu", ordained: "July 10, 2004" },
  { name: "Rev. Fr. Emmanuel Kpodo", ordained: "July 10, 2004" },
  { name: "Rev. Fr. Benjamin Doe", ordained: "July 15, 2006" },
  { name: "Rev. Fr. Julius Edwin Adjaku", ordained: "July 28, 2007" },
  { name: "Rev. Fr. Vincent Aloysius Agboli", ordained: "July 28, 2007" },
  { name: "Rev. Fr. David Allan Ankrah", ordained: "July 28, 2007" },
  { name: "Rev. Fr. Johnson E. Hoeglah", ordained: "July 28, 2007" },
  { name: "Rev. Fr. Peter Ashiagbor", ordained: "July 12, 2008" },
  { name: "Rev. Fr. Sebastian Dela E. Gidiglo", ordained: "July 12, 2008" },
  { name: "Rev. Fr. Alain Guenou", ordained: "July 12, 2008" },
  { name: "Rev. Fr. Franklin Worlanyo Adzaho", ordained: "July 11, 2009" },
  { name: "Rev. Fr. Gustav Sefadzi Adzaho", ordained: "July 11, 2009" },
  { name: "Rev. Fr. Ignatius Edem Attipoe", ordained: "July 11, 2009" },
  { name: "Rev. Fr. Robert Elikplim Vedenku", ordained: "August 21, 2010" },
  { name: "Rev. Fr. Courage Gabriel Ahashie", ordained: "August 13, 2011" },
  { name: "Rev. Fr. Selasi G. Amegashitsi", ordained: "August 18, 2012" },
  { name: "Rev. Fr. Stephen Avinu", ordained: "August 18, 2012" },
  { name: "Rev. Fr. Peter Johnson Senoo", ordained: "August 18, 2012" },
  { name: "Rev. Fr. Peter Worlanyo Amegashie", ordained: "August 17, 2013" },
  { name: "Rev. Fr. James Jed Dzinyakpor", ordained: "August 17, 2013" },
  { name: "Rev. Fr. Frank Stephen Kuwornu", ordained: "August 17, 2013" },
  { name: "Rev. Fr. Oscar Kuebutornye", ordained: "Oct. 10, 2015" },
  { name: "Rev. Fr. Samuel P. Agbeyesro", ordained: "Oct. 10, 2015" },
  { name: "Rev. Fr. Prosper Agbogah", ordained: "Oct. 10, 2015" },
  { name: "Rev. Fr. Jacob Gbleh", ordained: "Oct. 10, 2015" },
  { name: "Rev. Fr. Benjamin Combey-Nyamadi", ordained: "Oct. 10, 2015" },
  { name: "Rev. Fr. John Kofi Blewusi", ordained: "Aug. 20, 2016" },
  { name: "Rev. Fr. Reuben K. Adzakey", ordained: "Oct. 28, 2017" },
  { name: "Rev. Fr. Wisdom-Bakhita Anane", ordained: "Oct. 28, 2017" },
  { name: "Rev. Fr. Stanley Azamety", ordained: "Oct. 28, 2017" },
  { name: "Rev. Fr. Emmanuel Sebastian Dorgbetor", ordained: "Oct. 28, 2017" },
  { name: "Rev. Fr. Michael Gardemor", ordained: "Oct. 28, 2017" },
  { name: "Rev. Fr. Edwin Edem Fiawornu", ordained: "Oct. 28, 2017" },
  { name: "Rev. Fr. Prosper Mensah", ordained: "Oct. 28, 2017" },
  { name: "Rev. Fr. Gershon Wonder Senyo", ordained: "Oct. 28, 2017" },
  { name: "Rev. Fr. Casimir K. Agbenuawor", ordained: "Oct. 28, 2017" },
  { name: "Rev. Fr. Simon Tornyeviadzi K. Amenuku", ordained: "Aug. 18, 2018" },
  { name: "Rev. Fr. Eric Donaldson Doe Kwashie", ordained: "Aug. 18, 2018" },
  { name: "Rev. Fr. Theophilus Mensah Ayivor", ordained: "Aug. 18, 2018" },
  { name: "Rev. Fr. Simon Peter Akpene Doh", ordained: "Aug. 18, 2018" },
  { name: "Rev. Fr. Anthony Senanu Kutumpah", ordained: "Aug. 18, 2018" },
  { name: "Rev. Fr. Damian K. Horminu", ordained: "Oct. 17, 2020" },
  { name: "Rev. Fr. Emmanuel Atsu Agbozo", ordained: "Oct. 17, 2020" },
  { name: "Rev. Fr. Frederick P. Seddoh-Henyo", ordained: "Oct. 17, 2020" },
  { name: "Rev. Fr. Godsway Alato", ordained: "Oct. 09, 2021" },
  { name: "Rev. Fr. Raphael Etornam Vedenku", ordained: "Oct. 09, 2021" },
  { name: "Rev. Fr. Michael Selasi Combey", ordained: "Oct. 09, 2021" },
  { name: "Rev. Fr. Lambert Kwasi Adzah", ordained: "Oct. 09, 2021" },
  { name: "Rev. Fr. Pascal Innocent Selormey", ordained: "Oct. 09, 2021" },
  { name: "Rev. Fr. Seth Tuagbor", ordained: "Aug. 06, 2022" },
  { name: "Rev. Fr. Maxwell Etsey Adzogble", ordained: "Aug. 06, 2022" },
  { name: "Rev. Fr. Wisdom Amegble", ordained: "Aug. 06, 2022" },
  { name: "Rev. Fr. Clifford Selinam Agbittor", ordained: "Aug. 17, 2024" },
  { name: "Rev. Fr. David Tay", ordained: "Aug. 17, 2024" },
  { name: "Rev. Fr. Elikem Kwabla Akakpo", ordained: "Aug. 16, 2025" },
];

const religiousPriests: Priest[] = [
  { name: "Rev. Fr. Joseph Rabbiosi", ordained: "May 25, 1974", title: "Mccj" },
  { name: "Rev. Fr. Achille Dansou", ordained: "Dec. 12, 2020", title: "Mccj" },
  { name: "Rev. Fr. Ephrem Badou", ordained: "Dec. 12, 2020", title: "Mccj" },
  { name: "Rev. Fr. Paul Chinonso Ogene", ordained: "Aug. 8, 2015", title: "SC" },
  { name: "Rev. Fr. Jean Claude Mabiza", ordained: "Aug. 1, 2015", title: "SC" },
  { name: "Rev. Fr. Emmanuel A. Nwafor", ordained: "Aug. 26, 2023", title: "SC" },
  { name: "Rev. Fr. Roger Yaw Govina", ordained: "Aug. 17, 2024" },
];

const Clergy = () => {
  return (
    <Layout>
      <PageHeader
        title="Diocesan Clergy"
        subtitle="The priests serving the faithful of Keta-Akatsi Diocese"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-primary text-primary-foreground rounded-lg">
                <Users className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-heading font-bold text-accent mb-1">82</div>
                <div className="text-sm text-primary-foreground/80">Total Priests</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-3xl font-heading font-bold text-accent mb-1">
                  {diocesanClergy.length}
                </div>
                <div className="text-sm text-muted-foreground">Diocesan Clergy</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-3xl font-heading font-bold text-accent mb-1">
                  {religiousPriests.length}
                </div>
                <div className="text-sm text-muted-foreground">Religious Priests</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-3xl font-heading font-bold text-accent mb-1">38</div>
                <div className="text-sm text-muted-foreground">Parishes Served</div>
              </div>
            </div>

            <Tabs defaultValue="diocesan" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="diocesan">Diocesan Clergy ({diocesanClergy.length})</TabsTrigger>
                <TabsTrigger value="religious">Religious Priests ({religiousPriests.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="diocesan">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {diocesanClergy.map((priest, index) => (
                    <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                            <span className="text-lg font-heading font-semibold text-accent">
                              {priest.name.split(' ').slice(-1)[0][0]}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading font-semibold text-foreground text-sm leading-tight">
                              {priest.name}
                            </h3>
                            {priest.title && (
                              <Badge variant="secondary" className="mt-1 text-xs">
                                {priest.title}
                              </Badge>
                            )}
                            <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>Ordained: {priest.ordained}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="religious">
                <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    Religious Working in the Diocese (Men Religious)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    These priests from various religious congregations serve alongside the diocesan clergy 
                    in various apostolates throughout the diocese.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {religiousPriests.map((priest, index) => (
                    <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                            <span className="text-lg font-heading font-semibold text-secondary-foreground">
                              {priest.name.split(' ').slice(-1)[0][0]}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading font-semibold text-foreground text-sm leading-tight">
                              {priest.name}
                            </h3>
                            {priest.title && (
                              <Badge variant="outline" className="mt-1 text-xs">
                                {priest.title}
                              </Badge>
                            )}
                            <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>Ordained: {priest.ordained}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Vocations Note */}
            <div className="mt-12 bg-primary text-primary-foreground rounded-xl p-8">
              <h3 className="font-heading text-xl font-semibold mb-4 text-accent">
                Called to Serve?
              </h3>
              <p className="text-primary-foreground/80 font-serif mb-4">
                If you feel called to the priesthood, we encourage you to pray, discern, and 
                contact the diocesan vocation director for guidance on your journey.
              </p>
              <p className="text-sm text-primary-foreground/60">
                Contact: +233 59 244 9804
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clergy;
