import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const clergyData = {
  priests: [
    { name: "Rev. Fr. John Doe", role: "Vicar General", parish: "Holy Spirit Cathedral, Keta" },
    { name: "Rev. Fr. Peter Smith", role: "Chancellor", parish: "Diocesan Secretariat" },
    { name: "Rev. Fr. Michael Adu", role: "Parish Priest", parish: "St. Anthony Parish, Akatsi" },
    { name: "Rev. Fr. Francis Agbeko", role: "Parish Priest", parish: "St. Paul Parish, Denu" },
    { name: "Rev. Fr. Emmanuel Mensah", role: "Parish Priest", parish: "Christ the King, Sogakope" },
    { name: "Rev. Fr. Joseph Kpodo", role: "Parish Priest", parish: "St. Francis Xavier, Aflao" },
    { name: "Rev. Fr. Augustine Gbedemah", role: "Parish Priest", parish: "St. Monica Parish, Keta" },
    { name: "Rev. Fr. Patrick Tetteh", role: "Assistant Priest", parish: "Holy Spirit Cathedral, Keta" },
  ],
  religiousMen: [
    { name: "Bro. Anthony SVD", community: "Society of the Divine Word", location: "Keta" },
    { name: "Bro. Francis SMA", community: "Society of African Missions", location: "Denu" },
    { name: "Bro. Joseph OSA", community: "Order of Saint Augustine", location: "Akatsi" },
  ],
  religiousWomen: [
    { name: "Sr. Mary Immaculate SSpS", community: "Holy Spirit Sisters", location: "Keta" },
    { name: "Sr. Theresa of Jesus OCD", community: "Carmelite Sisters", location: "Denu" },
    { name: "Sr. Agnes Clare FSC", community: "Franciscan Sisters of Charity", location: "Akatsi" },
    { name: "Sr. Monica Gabriel SSpS", community: "Holy Spirit Sisters", location: "Sogakope" },
    { name: "Sr. Elizabeth Ann MMM", community: "Medical Missionaries of Mary", location: "Battor" },
  ],
  seminarians: [
    { name: "Sem. David Amewu", stage: "Philosophy", seminary: "St. Victor's Major Seminary, Tamale" },
    { name: "Sem. Isaac Adzogble", stage: "Theology III", seminary: "St. Peter's Regional Seminary, Pedu" },
    { name: "Sem. Benjamin Klu", stage: "Theology II", seminary: "St. Peter's Regional Seminary, Pedu" },
    { name: "Sem. Richard Agbeli", stage: "Philosophy II", seminary: "St. Victor's Major Seminary, Tamale" },
  ],
};

const Clergy = () => {
  return (
    <Layout>
      <PageHeader
        title="Clergy & Religious"
        subtitle="Meet the priests, religious, and seminarians of our diocese"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-muted-foreground font-serif text-center mb-12 max-w-3xl mx-auto">
              The Diocese of Keta-Akatsi is blessed with dedicated priests, religious brothers 
              and sisters, and seminarians who serve the faithful with love and devotion.
            </p>

            <Tabs defaultValue="priests" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="priests">Priests</TabsTrigger>
                <TabsTrigger value="religious-men">Religious Brothers</TabsTrigger>
                <TabsTrigger value="religious-women">Religious Sisters</TabsTrigger>
                <TabsTrigger value="seminarians">Seminarians</TabsTrigger>
              </TabsList>

              <TabsContent value="priests">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clergyData.priests.map((priest, index) => (
                    <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center shrink-0">
                          <span className="text-xl font-heading font-semibold text-muted-foreground">
                            {priest.name.split(' ').slice(-1)[0][0]}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground">{priest.name}</h3>
                          <p className="text-sm text-accent">{priest.role}</p>
                          <p className="text-sm text-muted-foreground">{priest.parish}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="religious-men">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clergyData.religiousMen.map((religious, index) => (
                    <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center shrink-0">
                          <span className="text-xl font-heading font-semibold text-muted-foreground">
                            {religious.name.split(' ')[1][0]}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground">{religious.name}</h3>
                          <p className="text-sm text-accent">{religious.community}</p>
                          <p className="text-sm text-muted-foreground">{religious.location}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="religious-women">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clergyData.religiousWomen.map((religious, index) => (
                    <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center shrink-0">
                          <span className="text-xl font-heading font-semibold text-muted-foreground">
                            {religious.name.split(' ')[1][0]}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground">{religious.name}</h3>
                          <p className="text-sm text-accent">{religious.community}</p>
                          <p className="text-sm text-muted-foreground">{religious.location}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="seminarians">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {clergyData.seminarians.map((seminarian, index) => (
                    <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center shrink-0">
                          <span className="text-xl font-heading font-semibold text-muted-foreground">
                            {seminarian.name.split(' ').slice(-1)[0][0]}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground">{seminarian.name}</h3>
                          <p className="text-sm text-accent">{seminarian.stage}</p>
                          <p className="text-sm text-muted-foreground">{seminarian.seminary}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clergy;
