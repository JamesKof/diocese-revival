import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";

const History = () => {
  return (
    <Layout>
      <PageHeader
        title="Our History"
        subtitle="The story of the Catholic Diocese of Keta-Akatsi"
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground font-serif leading-relaxed mb-8">
                The Catholic Diocese of Keta-Akatsi is a Roman Catholic Diocese in the Volta Region 
                of Ghana. It is a suffragan diocese in the ecclesiastical province of the 
                Metropolitan Archdiocese of Accra.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 space-y-12">
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">Early Beginnings</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  The Arrival of Christianity
                </h3>
                <p className="text-muted-foreground font-serif">
                  The Catholic faith was first brought to the Volta Region through the tireless 
                  efforts of European missionaries. The Society of the Divine Word (SVD) missionaries 
                  played a significant role in establishing the Catholic presence in this area, 
                  building churches, schools, and healthcare facilities to serve the local communities.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">Establishment</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  Formation of the Diocese
                </h3>
                <p className="text-muted-foreground font-serif">
                  The Diocese of Keta-Akatsi was carved out of the Diocese of Ho to better serve 
                  the growing Catholic population in the southern part of the Volta Region. This 
                  allowed for more focused pastoral care and evangelization efforts in the area.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">Growth & Development</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  Expansion of the Church
                </h3>
                <p className="text-muted-foreground font-serif">
                  Over the years, the diocese has grown significantly in terms of the number of 
                  parishes, priests, religious, and faithful. New churches have been built, 
                  educational institutions established, and healthcare facilities expanded to 
                  meet the needs of the growing population.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">Present Day</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  A Vibrant Faith Community
                </h3>
                <p className="text-muted-foreground font-serif">
                  Today, the Diocese of Keta-Akatsi comprises four deaneries: Akatsi, Denu, Keta, 
                  and Sogakope. Under the leadership of Most Rev. Gabriel Edoe Kumordji, SVD, the 
                  diocese continues to flourish, with a strong focus on evangelization, education, 
                  healthcare, and social development.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-4xl font-heading font-bold text-accent mb-2">4</div>
                <div className="text-sm text-muted-foreground">Deaneries</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-4xl font-heading font-bold text-accent mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Parishes</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-4xl font-heading font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Priests</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-4xl font-heading font-bold text-accent mb-2">100K+</div>
                <div className="text-sm text-muted-foreground">Catholics</div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-16 bg-primary text-primary-foreground p-8 md:p-12 rounded-xl">
              <h3 className="font-heading text-2xl font-semibold mb-4 text-accent">Our Mission</h3>
              <p className="font-serif text-lg leading-relaxed">
                "To proclaim the Gospel of Jesus Christ and to build up the Body of Christ through 
                worship, witness, and service, fostering the spiritual, educational, and social 
                development of the people of God in the Diocese of Keta-Akatsi."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;
