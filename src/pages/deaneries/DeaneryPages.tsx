import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

interface DeaneryPageProps {
  name: string;
  parishes: { name: string; location: string; massSchedule: string }[];
}

const deaneryData: Record<string, DeaneryPageProps> = {
  akatsi: {
    name: "Akatsi Deanery",
    parishes: [
      { name: "St. Anthony Parish", location: "Akatsi", massSchedule: "Sunday: 8:00 AM, 10:00 AM" },
      { name: "St. Joseph Parish", location: "Ave Dakpa", massSchedule: "Sunday: 9:00 AM" },
      { name: "Holy Cross Parish", location: "Tadzewu", massSchedule: "Sunday: 8:30 AM" },
      { name: "St. Peter Parish", location: "Wute", massSchedule: "Sunday: 9:00 AM" },
    ],
  },
  denu: {
    name: "Denu Deanery",
    parishes: [
      { name: "St. Paul Parish", location: "Denu", massSchedule: "Sunday: 8:00 AM, 10:00 AM" },
      { name: "St. Francis Xavier Parish", location: "Aflao", massSchedule: "Sunday: 7:30 AM, 9:30 AM" },
      { name: "Our Lady of Mercy Parish", location: "Agbozume", massSchedule: "Sunday: 8:00 AM" },
    ],
  },
  keta: {
    name: "Keta Deanery",
    parishes: [
      { name: "Holy Spirit Cathedral", location: "Keta", massSchedule: "Sunday: 7:00 AM, 9:00 AM, 11:00 AM" },
      { name: "St. Monica Parish", location: "Keta", massSchedule: "Sunday: 8:00 AM" },
      { name: "Christ the Redeemer Parish", location: "Anloga", massSchedule: "Sunday: 8:30 AM" },
    ],
  },
  sogakope: {
    name: "Sogakope Deanery",
    parishes: [
      { name: "Christ the King Parish", location: "Sogakope", massSchedule: "Sunday: 8:00 AM, 10:00 AM" },
      { name: "St. Mary Parish", location: "Ada Foah", massSchedule: "Sunday: 9:00 AM" },
      { name: "Holy Family Parish", location: "Battor", massSchedule: "Sunday: 8:00 AM" },
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
      <PageHeader title={deanery.name} subtitle="Parishes and Mass schedules" />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {deanery.parishes.map((parish, index) => (
                <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{parish.name}</h3>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" />{parish.location}</span>
                      <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" />{parish.massSchedule}</span>
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
