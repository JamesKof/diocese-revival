import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Quote } from "lucide-react";

const BishopEmeritus = () => {
  return (
    <Layout>
      <PageHeader
        title="Bishop Emeritus"
        subtitle="Most Rev. Anthony Kwami Adanuty - Bishop Emeritus of Keta-Akatsi"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Profile Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Photo */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-xl border-4 border-accent/20">
                    <img
                      src="/placeholder.svg"
                      alt="Most Rev. Anthony Kwami Adanuty"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h2 className="font-heading text-xl font-semibold text-foreground">
                      Most Rev. Anthony Kwami Adanuty
                    </h2>
                    <p className="text-accent font-medium">Bishop Emeritus of Keta-Akatsi</p>
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div className="lg:col-span-2">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Biography
                </h3>
                <div className="space-y-4 text-muted-foreground font-serif">
                  <p>
                    Most Reverend Anthony Kwami Adanuty served as the Bishop of the Catholic 
                    Diocese of Keta-Akatsi before his retirement. During his episcopate, he 
                    laid strong foundations for the growth of the Church in the diocese.
                  </p>
                  <p>
                    Bishop Adanuty was known for his dedication to evangelization, promotion 
                    of education, and care for the poor and marginalized. Under his leadership, 
                    the diocese saw significant growth in terms of parishes, vocations, and 
                    Catholic institutions.
                  </p>
                  <p>
                    He established several schools, clinics, and pastoral centers that continue 
                    to serve the faithful today. His pastoral letters and teachings remain a 
                    source of inspiration for the clergy and laity of the diocese.
                  </p>
                  <p>
                    After years of faithful service, Bishop Adanuty retired in accordance with 
                    Canon Law, which requires bishops to submit their resignation to the Pope 
                    upon reaching the age of 75. The Pope accepted his resignation and appointed 
                    his successor.
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-8 bg-primary text-primary-foreground rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-accent shrink-0" />
                    <div>
                      <p className="text-lg font-serif italic">
                        "The Church in Keta-Akatsi is called to be a beacon of hope, bringing 
                        the light of Christ to every village and town in our diocese."
                      </p>
                      <p className="text-sm text-primary-foreground/70 mt-4">
                        — Bishop Anthony Kwami Adanuty
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mt-8">
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Established multiple new parishes to bring the Church closer to the faithful
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Founded Catholic schools providing quality education to thousands of students
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Expanded healthcare services through Catholic hospitals and clinics
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Promoted vocations to the priesthood and religious life
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Strengthened lay apostolate movements and catechetical programs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Initiated social programs for the poor and vulnerable
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Current Status */}
                <div className="mt-8 bg-muted/50 rounded-xl p-6">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                    In Retirement
                  </h4>
                  <p className="text-muted-foreground">
                    Bishop Emeritus Adanuty continues to reside in the diocese, where he 
                    remains a source of wisdom and encouragement for the clergy and faithful. 
                    He assists with pastoral duties when called upon and continues to pray for 
                    the growth of the Church in Keta-Akatsi.
                  </p>
                </div>
              </div>
            </div>

            {/* Prayer Request */}
            <div className="bg-secondary text-secondary-foreground rounded-xl p-8 text-center">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Pray for Our Bishop Emeritus
              </h3>
              <p className="font-serif max-w-2xl mx-auto">
                We ask all the faithful to remember Bishop Emeritus Anthony Kwami Adanuty in 
                their prayers, thanking God for his years of faithful service and asking for 
                continued blessings upon him in his retirement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BishopEmeritus;
