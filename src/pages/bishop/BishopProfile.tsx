import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import bishopKumordji from "@/assets/bishop-kumordji.jpg";

const BishopProfile = () => {
  return (
    <Layout>
      <PageHeader
        title="Bishop's Profile"
        subtitle="Most Rev. Gabriel Edoe Kumordji, SVD - Bishop of Keta-Akatsi"
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
                      src={bishopKumordji}
                      alt="Most Rev. Gabriel Edoe Kumordji, SVD"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h2 className="font-heading text-xl font-semibold text-foreground">
                      Most Rev. Gabriel Edoe Kumordji, SVD
                    </h2>
                    <p className="text-accent font-medium">Bishop of Keta-Akatsi</p>
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
                    Most Reverend Gabriel Edoe Kumordji, SVD, is the current Bishop of the 
                    Catholic Diocese of Keta-Akatsi in the Volta Region of Ghana. He was 
                    appointed by His Holiness Pope Francis and has been shepherding the 
                    faithful of this diocese with dedication and pastoral care.
                  </p>
                  <p>
                    Bishop Kumordji is a member of the Society of the Divine Word (SVD), a 
                    missionary religious congregation founded by St. Arnold Janssen. Before 
                    his appointment as Bishop, he served in various capacities within the 
                    SVD congregation and in pastoral ministry.
                  </p>
                  <p>
                    His episcopal ministry is characterized by a deep commitment to 
                    evangelization, care for the poor, promotion of education, and the 
                    formation of clergy and religious. He has worked tirelessly to strengthen 
                    the faith of the people and to expand the church's mission in the diocese.
                  </p>
                </div>

                {/* Episcopal Motto */}
                <div className="mt-8 bg-primary text-primary-foreground rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-accent shrink-0" />
                    <div>
                      <h4 className="font-heading text-lg font-semibold mb-2 text-accent">
                        Episcopal Motto
                      </h4>
                      <p className="text-xl font-serif italic">
                        "Duc in Altum" — Put out into the deep
                      </p>
                      <p className="text-sm text-primary-foreground/70 mt-2">
                        (Luke 5:4)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="mt-8">
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Education & Formation
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <p className="font-medium text-foreground">Primary & Secondary Education</p>
                        <p className="text-sm text-muted-foreground">Ghana</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <p className="font-medium text-foreground">Philosophy Studies</p>
                        <p className="text-sm text-muted-foreground">SVD Formation House</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <p className="font-medium text-foreground">Theology Studies</p>
                        <p className="text-sm text-muted-foreground">Major Seminary</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <p className="font-medium text-foreground">Advanced Studies</p>
                        <p className="text-sm text-muted-foreground">Specialization in Pastoral Ministry</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ministry Timeline */}
                <div className="mt-8">
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Ministry Timeline
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-20 shrink-0 text-accent font-semibold">Ordination</div>
                      <div>
                        <p className="text-foreground">Ordained to the Priesthood</p>
                        <p className="text-sm text-muted-foreground">Society of the Divine Word</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-20 shrink-0 text-accent font-semibold">Ministry</div>
                      <div>
                        <p className="text-foreground">Various Pastoral & Administrative Roles</p>
                        <p className="text-sm text-muted-foreground">SVD Congregation</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-20 shrink-0 text-accent font-semibold">Bishop</div>
                      <div>
                        <p className="text-foreground">Appointed Bishop of Keta-Akatsi</p>
                        <p className="text-sm text-muted-foreground">By Pope Francis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pastoral Priorities */}
            <div className="mt-12">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
                Pastoral Priorities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-border hover:border-accent/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl text-primary-foreground">🙏</span>
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      Evangelization
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Bringing the Gospel to all corners of the diocese
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border hover:border-accent/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl text-secondary-foreground">📚</span>
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      Education
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Promoting Catholic education at all levels
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border hover:border-accent/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl text-accent-foreground">❤️</span>
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      Service to the Poor
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Caring for the marginalized and vulnerable
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BishopProfile;
