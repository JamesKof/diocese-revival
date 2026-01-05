import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const priestsOnAssignment = [
  {
    name: "Rev. Fr. Anthony Mensah",
    assignment: "Rome, Italy",
    role: "Doctoral Studies in Canon Law",
    duration: "2022 - Present",
  },
  {
    name: "Rev. Fr. Francis Xavier Agbeli",
    assignment: "United States",
    role: "Pastoral Ministry - Diocese of Brooklyn",
    duration: "2021 - Present",
  },
  {
    name: "Rev. Fr. Emmanuel Tettey",
    assignment: "Germany",
    role: "Mission Assignment - Archdiocese of Cologne",
    duration: "2020 - Present",
  },
  {
    name: "Rev. Fr. Joseph Klu",
    assignment: "United Kingdom",
    role: "Graduate Studies in Theology",
    duration: "2023 - Present",
  },
  {
    name: "Rev. Fr. Peter Agbemafle",
    assignment: "Nigeria",
    role: "Exchange Program - Archdiocese of Lagos",
    duration: "2022 - Present",
  },
];

const PriestsAssignment = () => {
  return (
    <Layout>
      <PageHeader
        title="Priests on Assignment"
        subtitle="Our priests serving in missions and studies abroad"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground font-serif text-center mb-12">
              Several priests of the Diocese of Keta-Akatsi are currently on assignment outside 
              the diocese, either for further studies or pastoral ministry in other dioceses 
              and countries.
            </p>

            <div className="space-y-6">
              {priestsOnAssignment.map((priest, index) => (
                <Card key={index} className="border-border hover:border-accent/50 transition-colors overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-48 h-48 bg-muted flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-3xl font-heading font-semibold text-primary">
                            {priest.name.split(' ').slice(-1)[0][0]}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                          {priest.name}
                        </h3>
                        <div className="space-y-2 text-sm">
                          <p>
                            <span className="text-muted-foreground">Assignment Location:</span>{" "}
                            <span className="text-accent font-medium">{priest.assignment}</span>
                          </p>
                          <p>
                            <span className="text-muted-foreground">Role:</span>{" "}
                            <span className="text-foreground">{priest.role}</span>
                          </p>
                          <p>
                            <span className="text-muted-foreground">Duration:</span>{" "}
                            <span className="text-foreground">{priest.duration}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Prayer Request */}
            <div className="mt-12 bg-muted/50 rounded-xl p-8 text-center">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Please Pray for Our Priests
              </h3>
              <p className="text-muted-foreground font-serif max-w-2xl mx-auto">
                We ask all the faithful to remember our priests on assignment in their prayers, 
                that the Lord may bless their studies and ministry, and bring them safely back 
                to serve in our diocese.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PriestsAssignment;
