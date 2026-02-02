import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";

const secretariatStaff = [
  {
    name: "Very Rev. Fr. John Doe",
    role: "Vicar General",
    phone: "+233 59 244 9804",
  },
  {
    name: "Rev. Fr. Peter Smith",
    role: "Chancellor",
    phone: "+233 59 244 9804",
  },
  {
    name: "Mr. Emmanuel Kpodo",
    role: "Financial Administrator",
    phone: "+233 59 244 9804",
  },
  {
    name: "Mrs. Grace Mensah",
    role: "Administrative Secretary",
    phone: "+233 59 244 9804",
  },
  {
    name: "Mr. Patrick Tetteh",
    role: "Communications Officer",
    phone: "+233 59 244 9804",
  },
];

const Secretariat = () => {
  return (
    <Layout>
      <PageHeader
        title="Diocesan Secretariat"
        subtitle="The administrative hub of the Diocese of Keta-Akatsi"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  About the Secretariat
                </h2>
                <div className="space-y-4 text-muted-foreground font-serif">
                  <p>
                    The Diocesan Secretariat serves as the central administrative office of the 
                    Catholic Diocese of Keta-Akatsi. It is the hub through which the Bishop 
                    coordinates the pastoral and administrative activities of the diocese.
                  </p>
                  <p>
                    The Secretariat handles official correspondence, maintains diocesan records 
                    and archives, coordinates the activities of various departments and commissions, 
                    and provides administrative support to parishes and institutions.
                  </p>
                </div>
              </div>
              <div className="bg-muted/50 rounded-xl p-8">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        P.O. Box KA 47<br />
                        Keta, Volta Region<br />
                        Ghana
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+233 59 244 9804</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-primary text-primary-foreground rounded-xl p-8 mb-16">
              <h3 className="font-heading text-xl font-semibold mb-4 text-accent">Office Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-primary-foreground/80">8:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Saturday - Sunday</p>
                  <p className="text-primary-foreground/80">Closed (except by appointment)</p>
                </div>
              </div>
            </div>

            {/* Staff */}
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">
              Secretariat Staff
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secretariatStaff.map((staff, index) => (
                <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-foreground text-lg">
                      {staff.name}
                    </h3>
                    <p className="text-accent font-medium mb-4">{staff.role}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{staff.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Secretariat;
