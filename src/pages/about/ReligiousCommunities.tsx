import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const religiousCommunities = [
  {
    name: "Comboni Missionaries (Mccj)",
    fullName: "Missionaries of the Comboni",
    type: "Male Religious",
    charism: "Missionary congregation dedicated to evangelization in the most challenging regions.",
    members: [
      { name: "Rev. Fr. Joseph Rabbiosi", ordained: "May 25, 1974" },
      { name: "Rev. Fr. Achille Dansou", ordained: "Dec. 12, 2020" },
      { name: "Rev. Fr. Ephrem Badou", ordained: "Dec. 12, 2020" },
    ],
    apostolates: ["Parish ministry", "Evangelization", "Formation"],
  },
  {
    name: "Sacerdotes Cordis (SC)",
    fullName: "Priests of the Sacred Heart",
    type: "Male Religious",
    charism: "Religious congregation devoted to the Sacred Heart of Jesus and service to the poor.",
    members: [
      { name: "Rev. Fr. Paul Chinonso Ogene", ordained: "Aug. 8, 2015" },
      { name: "Rev. Fr. Jean Claude Mabiza", ordained: "Aug. 1, 2015" },
      { name: "Rev. Fr. Emmanuel A. Nwafor", ordained: "Aug. 26, 2023" },
    ],
    apostolates: ["Parish ministry", "Education", "Social services"],
  },
  {
    name: "Society of the Divine Word (SVD)",
    fullName: "Society of the Divine Word",
    type: "Male Religious",
    charism: "Missionary congregation dedicated to proclaiming the Gospel to all nations.",
    members: [],
    apostolates: ["Parish ministry", "Education", "Formation"],
    note: "Our Bishop, Most Rev. Gabriel Edoe Kumordji, is a member of this congregation.",
  },
  {
    name: "Missionary Sisters Servants of the Holy Spirit (SSpS)",
    fullName: "Holy Spirit Sisters",
    type: "Female Religious",
    charism: "Missionary sisters dedicated to evangelization and works of mercy.",
    members: [],
    apostolates: ["Education", "Healthcare", "Social services"],
  },
  {
    name: "Society of African Missions (SMA)",
    fullName: "Society of African Missions",
    type: "Male Religious",
    charism: "Missionary society dedicated to the evangelization of Africa since the 1860s.",
    members: [],
    apostolates: ["Parish ministry", "Youth formation"],
    note: "The SMA played a foundational role in establishing the Catholic Church in this region.",
  },
  {
    name: "Medical Missionaries of Mary (MMM)",
    fullName: "Medical Missionaries of Mary",
    type: "Female Religious",
    charism: "Dedicated to healing ministry and healthcare for the poor.",
    members: [],
    apostolates: ["Healthcare", "Maternal care", "HIV/AIDS ministry"],
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
                        <p className="text-sm text-muted-foreground">{community.fullName}</p>
                        <span className="text-sm text-accent">{community.type}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      "{community.charism}"
                    </p>
                    
                    {community.note && (
                      <p className="text-sm text-accent bg-accent/10 p-3 rounded-lg mb-4">
                        {community.note}
                      </p>
                    )}

                    {community.members.length > 0 && (
                      <div className="mb-4">
                        <span className="font-medium text-foreground text-sm">Members in Diocese:</span>
                        <ul className="mt-2 space-y-1">
                          {community.members.map((member, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              {member.name} <span className="text-xs">(Ord. {member.ordained})</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="space-y-3 text-sm">
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
                Contact: +233 59 244 9804
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReligiousCommunities;
