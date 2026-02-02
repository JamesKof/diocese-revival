import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Church, Users } from "lucide-react";

interface Parish {
  name: string;
  patronSaint?: string;
}

interface DeaneryData {
  name: string;
  parishes: Parish[];
}

const deaneryData: Record<string, DeaneryData> = {
  akatsi: {
    name: "Akatsi Deanery",
    parishes: [
      { name: "Akatsi", patronSaint: "Christ the King" },
      { name: "Abor", patronSaint: "St. Teresa" },
      { name: "Tadzewu", patronSaint: "Holy Trinity" },
      { name: "Atidzive", patronSaint: "St. Rose of Lima" },
      { name: "Abor Hospital", patronSaint: "Sacred Heart" },
      { name: "Afife", patronSaint: "Sacred Heart" },
      { name: "Atiteti", patronSaint: "St. Francis Xavier" },
      { name: "Tsiame", patronSaint: "Immaculate Conception" },
      { name: "Atiavi", patronSaint: "St. Anthony" },
      { name: "Hatorgodo", patronSaint: "St. Mary" },
      { name: "Agbedrafor", patronSaint: "St. Joseph the Worker" },
      { name: "Anyako Residence" },
    ],
  },
  keta: {
    name: "Keta Deanery",
    parishes: [
      { name: "Keta", patronSaint: "St. Michael" },
      { name: "Vodza Rectory", patronSaint: "St. Joseph" },
      { name: "Tegbi", patronSaint: "St. Anthony of Padua" },
      { name: "Anloga", patronSaint: "St. Francis of Assisi" },
      { name: "Alakple", patronSaint: "St. Joseph" },
      { name: "Dzelukope", patronSaint: "St. Peter Claver" },
    ],
  },
  denu: {
    name: "Denu Deanery",
    parishes: [
      { name: "Denu", patronSaint: "St. Anthony" },
      { name: "Dzodze", patronSaint: "Ss. Peter & Paul" },
      { name: "Dzodze Hospital", patronSaint: "St. Anthony" },
      { name: "Dzodze Tornu", patronSaint: "Sacred Heart Shrine" },
      { name: "Ave-Dakpa", patronSaint: "St. Francis of Assisi" },
      { name: "Agbozume", patronSaint: "Immaculate Conception" },
      { name: "Anlo-Afiadenyigba", patronSaint: "St. Mary" },
      { name: "Aflao", patronSaint: "Ss. Peter & Paul" },
      { name: "Aflao Border", patronSaint: "St. Joseph the Worker" },
      { name: "Viepe", patronSaint: "St. Benedictus" },
      { name: "Blekusu", patronSaint: "St. Anthony of Padua" },
      { name: "Hatsukope", patronSaint: "Sacred Heart" },
    ],
  },
  sogakope: {
    name: "Sogakope Deanery",
    parishes: [
      { name: "Sogakope", patronSaint: "Holy Cross" },
      { name: "Adutor", patronSaint: "St. Teresa of Avila" },
      { name: "Agbakope", patronSaint: "St. Joseph the Worker" },
      { name: "Dabala", patronSaint: "St. John The Baptist" },
      { name: "Dabala Junction", patronSaint: "Holy Rosary" },
      { name: "Juapong", patronSaint: "St. Francis of Assisi" },
      { name: "Adidome", patronSaint: "The Risen Christ" },
      { name: "Mafi Kumase", patronSaint: "Good Shepherd" },
      { name: "Bakpa Avedo", patronSaint: "Sacred Heart" },
    ],
  },
};

export function DeaneryPage({ deaneryId }: { deaneryId: string }) {
  const deanery = deaneryData[deaneryId];

  if (!deanery) {
    return <div>Deanery not found</div>;
  }

  return (
    <Layout>
      <PageHeader 
        title={deanery.name} 
        subtitle={`${deanery.parishes.length} Parishes & Quasi-Parishes`} 
      />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-primary text-primary-foreground rounded-lg">
                <Church className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-heading font-bold text-accent mb-1">
                  {deanery.parishes.length}
                </div>
                <div className="text-sm text-primary-foreground/80">Parishes</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <Users className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-heading font-bold text-accent mb-1">
                  Many
                </div>
                <div className="text-sm text-muted-foreground">Faithful Served</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-heading font-bold text-accent mb-1">
                  {deaneryId.charAt(0).toUpperCase() + deaneryId.slice(1)}
                </div>
                <div className="text-sm text-muted-foreground">Region</div>
              </div>
            </div>

            {/* Parishes Grid */}
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Parishes & Quasi-Parishes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {deanery.parishes.map((parish, index) => (
                <Card 
                  key={index} 
                  className="border-border hover:border-accent/50 hover:shadow-md transition-all"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Church className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">
                          {parish.name}
                        </h3>
                        {parish.patronSaint && (
                          <p className="text-sm text-muted-foreground">
                            {parish.patronSaint} Parish
                          </p>
                        )}
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
}

export const AkatsiDeanery = () => <DeaneryPage deaneryId="akatsi" />;
export const DenuDeanery = () => <DeaneryPage deaneryId="denu" />;
export const KetaDeanery = () => <DeaneryPage deaneryId="keta" />;
export const SogakopeDeanery = () => <DeaneryPage deaneryId="sogakope" />;
