import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import { Search, Church, MapPin, Filter } from "lucide-react";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in react-leaflet
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Parish {
  name: string;
  patronSaint?: string;
  deanery: string;
  deaneryColor: string;
  coordinates: LatLngExpression;
}

// All parishes with approximate coordinates in the Volta Region
const allParishes: Parish[] = [
  // Akatsi Deanery
  { name: "Akatsi", patronSaint: "Christ the King", deanery: "Akatsi", deaneryColor: "bg-red-500", coordinates: [6.1167, 0.8] },
  { name: "Abor", patronSaint: "St. Teresa", deanery: "Akatsi", deaneryColor: "bg-red-500", coordinates: [6.1333, 0.8667] },
  { name: "Tadzewu", patronSaint: "Holy Trinity", deanery: "Akatsi", deaneryColor: "bg-red-500", coordinates: [6.15, 0.82] },
  { name: "Atidzive", patronSaint: "St. Rose of Lima", deanery: "Akatsi", deaneryColor: "bg-red-500", coordinates: [6.12, 0.78] },
  { name: "Abor Hospital", patronSaint: "Sacred Heart", deanery: "Akatsi", deaneryColor: "bg-red-500", coordinates: [6.135, 0.87] },
  { name: "Afife", patronSaint: "Sacred Heart", deanery: "Akatsi", deaneryColor: "bg-red-500", coordinates: [6.1167, 0.9167] },
  { name: "Atiteti", patronSaint: "St. Francis Xavier", deanery: "Akatsi", deaneryColor: "bg-red-500", coordinates: [6.1, 0.85] },
  { name: "Tsiame", patronSaint: "Immaculate Conception", deanery: "Akatsi", deaneryColor: "bg-red-500", coordinates: [6.13, 0.83] },
  { name: "Atiavi", patronSaint: "St. Anthony", deanery: "Akatsi", deaneryColor: "bg-red-500", coordinates: [6.14, 0.79] },
  { name: "Hatorgodo", patronSaint: "St. Mary", deanery: "Akatsi", deaneryColor: "bg-red-500", coordinates: [6.11, 0.81] },
  { name: "Agbedrafor", patronSaint: "St. Joseph the Worker", deanery: "Akatsi", deaneryColor: "bg-red-500", coordinates: [6.125, 0.84] },
  
  // Keta Deanery
  { name: "Keta", patronSaint: "St. Michael", deanery: "Keta", deaneryColor: "bg-blue-500", coordinates: [5.9167, 0.9833] },
  { name: "Vodza Rectory", patronSaint: "St. Joseph", deanery: "Keta", deaneryColor: "bg-blue-500", coordinates: [5.9, 0.96] },
  { name: "Tegbi", patronSaint: "St. Anthony of Padua", deanery: "Keta", deaneryColor: "bg-blue-500", coordinates: [5.93, 0.99] },
  { name: "Anloga", patronSaint: "St. Francis of Assisi", deanery: "Keta", deaneryColor: "bg-blue-500", coordinates: [5.7917, 0.8958] },
  { name: "Alakple", patronSaint: "St. Joseph", deanery: "Keta", deaneryColor: "bg-blue-500", coordinates: [5.85, 0.92] },
  { name: "Dzelukope", patronSaint: "St. Peter Claver", deanery: "Keta", deaneryColor: "bg-blue-500", coordinates: [5.88, 0.95] },
  
  // Denu Deanery
  { name: "Denu", patronSaint: "St. Anthony", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.0833, 1.15] },
  { name: "Dzodze", patronSaint: "Ss. Peter & Paul", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.1, 1.0333] },
  { name: "Dzodze Hospital", patronSaint: "St. Anthony", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.105, 1.035] },
  { name: "Dzodze Tornu", patronSaint: "Sacred Heart Shrine", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.095, 1.04] },
  { name: "Ave-Dakpa", patronSaint: "St. Francis of Assisi", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.12, 1.05] },
  { name: "Agbozume", patronSaint: "Immaculate Conception", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.1, 1.0667] },
  { name: "Anlo-Afiadenyigba", patronSaint: "St. Mary", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.08, 1.1] },
  { name: "Aflao", patronSaint: "Ss. Peter & Paul", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.1167, 1.1833] },
  { name: "Aflao Border", patronSaint: "St. Joseph the Worker", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.12, 1.19] },
  { name: "Viepe", patronSaint: "St. Benedictus", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.09, 1.12] },
  { name: "Blekusu", patronSaint: "St. Anthony of Padua", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.07, 1.08] },
  { name: "Hatsukope", patronSaint: "Sacred Heart", deanery: "Denu", deaneryColor: "bg-green-500", coordinates: [6.11, 1.14] },
  
  // Sogakope Deanery
  { name: "Sogakope", patronSaint: "Holy Cross", deanery: "Sogakope", deaneryColor: "bg-amber-500", coordinates: [6.0, 0.6167] },
  { name: "Adutor", patronSaint: "St. Teresa of Avila", deanery: "Sogakope", deaneryColor: "bg-amber-500", coordinates: [6.02, 0.63] },
  { name: "Agbakope", patronSaint: "St. Joseph the Worker", deanery: "Sogakope", deaneryColor: "bg-amber-500", coordinates: [5.98, 0.6] },
  { name: "Dabala", patronSaint: "St. John The Baptist", deanery: "Sogakope", deaneryColor: "bg-amber-500", coordinates: [5.95, 0.58] },
  { name: "Dabala Junction", patronSaint: "Holy Rosary", deanery: "Sogakope", deaneryColor: "bg-amber-500", coordinates: [5.96, 0.59] },
  { name: "Juapong", patronSaint: "St. Francis of Assisi", deanery: "Sogakope", deaneryColor: "bg-amber-500", coordinates: [6.05, 0.4333] },
  { name: "Adidome", patronSaint: "The Risen Christ", deanery: "Sogakope", deaneryColor: "bg-amber-500", coordinates: [6.1, 0.4833] },
  { name: "Mafi Kumase", patronSaint: "Good Shepherd", deanery: "Sogakope", deaneryColor: "bg-amber-500", coordinates: [6.08, 0.52] },
  { name: "Bakpa Avedo", patronSaint: "Sacred Heart", deanery: "Sogakope", deaneryColor: "bg-amber-500", coordinates: [6.03, 0.55] },
];

const deaneries = ["All", "Akatsi", "Keta", "Denu", "Sogakope"];

const deaneryColors: Record<string, string> = {
  Akatsi: "bg-red-500",
  Keta: "bg-blue-500",
  Denu: "bg-green-500",
  Sogakope: "bg-amber-500",
};

const ParishFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDeanery, setSelectedDeanery] = useState("All");

  const filteredParishes = useMemo(() => {
    return allParishes.filter((parish) => {
      const matchesSearch =
        parish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (parish.patronSaint?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      const matchesDeanery = selectedDeanery === "All" || parish.deanery === selectedDeanery;
      return matchesSearch && matchesDeanery;
    });
  }, [searchQuery, selectedDeanery]);

  // Center of the diocese area
  const mapCenter: LatLngExpression = [6.0, 0.85];

  return (
    <Layout>
      <PageHeader
        title="Parish Finder"
        subtitle="Locate Catholic parishes across the Diocese of Keta-Akatsi"
      />

      <section className="py-8 md:py-12">
        <div className="container">
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by parish name or patron saint..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {deaneries.map((deanery) => (
                    <Button
                      key={deanery}
                      variant={selectedDeanery === deanery ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedDeanery(deanery)}
                      className={selectedDeanery === deanery ? "bg-accent text-accent-foreground" : ""}
                    >
                      {deanery}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-muted-foreground font-medium">Deaneries:</span>
              {Object.entries(deaneryColors).map(([deanery, color]) => (
                <div key={deanery} className="flex items-center gap-1.5">
                  <span className={`w-3 h-3 rounded-full ${color}`} />
                  <span>{deanery}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map */}
            <div className="lg:col-span-2 h-[500px] rounded-xl overflow-hidden border shadow-sm">
              <MapContainer
                center={mapCenter}
                zoom={10}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredParishes.map((parish, index) => (
                  <Marker key={index} position={parish.coordinates} icon={customIcon}>
                    <Popup>
                      <div className="text-center">
                        <h3 className="font-semibold text-foreground">{parish.name}</h3>
                        {parish.patronSaint && (
                          <p className="text-sm text-muted-foreground">{parish.patronSaint} Parish</p>
                        )}
                        <Badge className={`mt-2 ${parish.deaneryColor} text-white`}>
                          {parish.deanery} Deanery
                        </Badge>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Parish List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-heading font-semibold text-lg flex items-center gap-2">
                  <Church className="h-5 w-5 text-accent" />
                  Parishes ({filteredParishes.length})
                </h2>
              </div>

              <div className="h-[450px] overflow-y-auto space-y-3 pr-2">
                {filteredParishes.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>No parishes found matching your criteria.</p>
                  </div>
                ) : (
                  filteredParishes.map((parish, index) => (
                    <Card
                      key={index}
                      className="border-border hover:border-accent/50 hover:shadow-md transition-all cursor-pointer"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-full ${parish.deaneryColor} flex items-center justify-center shrink-0`}
                          >
                            <Church className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading font-semibold text-foreground truncate">
                              {parish.name}
                            </h3>
                            {parish.patronSaint && (
                              <p className="text-sm text-muted-foreground truncate">
                                {parish.patronSaint} Parish
                              </p>
                            )}
                            <Badge variant="outline" className="mt-1 text-xs">
                              {parish.deanery} Deanery
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(deaneryColors).map(([deanery, color]) => {
              const count = allParishes.filter((p) => p.deanery === deanery).length;
              return (
                <Card key={deanery} className="text-center">
                  <CardContent className="p-4">
                    <div className={`w-12 h-12 rounded-full ${color} mx-auto mb-2 flex items-center justify-center`}>
                      <Church className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-heading font-bold text-accent">{count}</div>
                    <div className="text-sm text-muted-foreground">{deanery} Deanery</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ParishFinder;
