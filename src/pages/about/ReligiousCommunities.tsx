import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const religiousCommunities = [
  {
    name: "Society of the Divine Word (SVD)",
    type: "Male Religious",
    charism: "Missionary congregation dedicated to proclaiming the Gospel to all nations.",
    presence: ["Keta", "Denu", "Akatsi"],
    apostolates: ["Parish ministry", "Education", "Formation"],
    website: "www.svdworld.org",
  },
  {
    name: "Missionary Sisters Servants of the Holy Spirit (SSpS)",
    type: "Female Religious",
    charism: "Missionary sisters dedicated to evangelization and works of mercy.",
    presence: ["Keta", "Sogakope"],
    apostolates: ["Education", "Healthcare", "Social services"],
    website: "www.ssps.org",
  },
  {
    name: "Society of African Missions (SMA)",
    type: "Male Religious",
    charism: "Missionary society dedicated to the evangelization of Africa.",
    presence: ["Denu"],
    apostolates: ["Parish ministry", "Youth formation"],
    website: "www.sma.ie",
  },
  {
    name: "Medical Missionaries of Mary (MMM)",
    type: "Female Religious",
    charism: "Dedicated to healing ministry and healthcare for the poor.",
    presence: ["Battor"],
    apostolates: ["Healthcare", "Maternal care", "HIV/AIDS ministry"],
    website: "www.mmmworldwide.org",
  },
  {
    name: "Franciscan Sisters of Charity",
    type: "Female Religious",
    charism: "Following the spirit of St. Francis in service to the poor.",
    presence: ["Akatsi"],
    apostolates: ["Education", "Orphan care", "Social work"],
    website: "",
  },
  {
    name: "Carmelite Sisters",
    type: "Female Religious",
    charism: "Contemplative life and prayer for the Church.",
    presence: ["Denu"],
    apostolates: ["Prayer ministry", "Retreat facilitation"],
    website: "",
  },
];

const ReligiousCommunities = () => {
  return (
    <Layout>
      <PageHeader
        title="Religious Communities"
        subtitle="Religious congregations serving in the diocese"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-muted-foreground font-serif text-center mb-12 max-w-3xl mx-auto">
              The Diocese of Keta-Akatsi is blessed to have several religious communities 
              working alongside the diocesan clergy in various apostolates.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {religiousCommunities.map((community, index) => (
                <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {community.name}
                        </h3>
                        <span className="text-sm text-accent">{community.type}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      "{community.charism}"
                    </p>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Presence in Diocese:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {community.presence.map((location, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                            >
                              {location}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium text-foreground">Apostolates:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {community.apostolates.map((apostolate, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs"
                            >
                              {apostolate}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {community.website && (
                        <div>
                          <span className="font-medium text-foreground">Website: </span>
                          <a
                            href={`https://${community.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
                          >
                            {community.website}
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Vocations Note */}
            <div className="mt-12 bg-primary text-primary-foreground rounded-xl p-8">
              <h3 className="font-heading text-xl font-semibold mb-4 text-accent">
                Interested in Religious Life?
              </h3>
              <p className="text-primary-foreground/80 font-serif mb-4">
                If you feel called to religious life, we encourage you to pray, discern, and 
                reach out to any of these communities or contact the diocesan vocation director 
                for guidance.
              </p>
              <p className="text-sm text-primary-foreground/60">
                Contact: vocations@keta-akatsidiocese.org
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReligiousCommunities;
