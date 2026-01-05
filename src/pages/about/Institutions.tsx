import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Church, Building } from "lucide-react";

const institutions = [
  {
    category: "Educational Institutions",
    icon: GraduationCap,
    items: [
      {
        name: "St. Paul's Senior High School",
        location: "Denu",
        description: "A co-educational Catholic senior high school providing quality secondary education.",
      },
      {
        name: "Bishop Herman College",
        location: "Keta",
        description: "One of the premier Catholic secondary schools in the Volta Region.",
      },
      {
        name: "St. Catherine's Girls' School",
        location: "Akatsi",
        description: "A girls' secondary school focused on academic excellence and moral formation.",
      },
      {
        name: "Holy Spirit Basic School",
        location: "Keta",
        description: "A primary and junior high school attached to the Cathedral parish.",
      },
      {
        name: "St. Francis Xavier Basic School",
        location: "Sogakope",
        description: "Providing quality basic education to children in the Sogakope area.",
      },
    ],
  },
  {
    category: "Healthcare Institutions",
    icon: Heart,
    items: [
      {
        name: "Catholic Hospital, Battor",
        location: "Battor",
        description: "A major healthcare facility providing medical services to the communities.",
      },
      {
        name: "St. Anthony's Clinic",
        location: "Akatsi",
        description: "Primary healthcare services for the Akatsi and surrounding areas.",
      },
      {
        name: "Holy Family Clinic",
        location: "Denu",
        description: "Providing maternal and child healthcare services.",
      },
    ],
  },
  {
    category: "Pastoral Centers",
    icon: Church,
    items: [
      {
        name: "Diocesan Pastoral Centre",
        location: "Keta",
        description: "The main pastoral and retreat center for the diocese.",
      },
      {
        name: "Youth Formation Centre",
        location: "Sogakope",
        description: "A center dedicated to youth ministry and formation programs.",
      },
    ],
  },
  {
    category: "Social Services",
    icon: Building,
    items: [
      {
        name: "Caritas Keta-Akatsi",
        location: "Diocese-wide",
        description: "The social arm of the diocese providing humanitarian assistance and development programs.",
      },
      {
        name: "Catholic Relief Services",
        location: "Various Locations",
        description: "Supporting vulnerable communities through various relief and development initiatives.",
      },
    ],
  },
];

const Institutions = () => {
  return (
    <Layout>
      <PageHeader
        title="Institutions"
        subtitle="Educational, healthcare, and social institutions of the diocese"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-muted-foreground font-serif text-center mb-16 max-w-3xl mx-auto">
              The Catholic Diocese of Keta-Akatsi operates numerous institutions dedicated to 
              education, healthcare, and social services, serving the faithful and the wider 
              community in the Volta Region.
            </p>

            <div className="space-y-16">
              {institutions.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
                      {category.category}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="border-border hover:border-accent/50 transition-colors">
                        <CardContent className="p-6">
                          <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-accent font-medium mb-3">{item.location}</p>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Institutions;
