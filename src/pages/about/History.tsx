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
                The Keta-Akatsi Diocese started as part of the Pro-Vicariate of Dahomey. 
                This Pro-Vicariate was assigned to the Society of African Missions (SMA) 
                for evangelization since the 1860s, extended on the east from the River Niger 
                to the River Volta on the west.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 space-y-12">
              {/* 1890 - Foundation */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">May 25, 1890</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  The First Catholic Church at Keta
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  This territory included Keta that was in the Southern Sector of the present 
                  Volta Region. Some Missionaries from Dahomey made periodic visits to Keta. 
                  The first two resident priests namely <strong>Father Michael Wade</strong> (Irish) 
                  and <strong>Father Jean-Baptiste Thuet</strong> (Alsatian French) were posted to Keta.
                </p>
                <p className="text-muted-foreground font-serif">
                  On <strong>25th May, 1890</strong>, they established the first Catholic Church at Keta 
                  with <strong>Saint Michael the Archangel</strong> as its Patron.
                </p>
              </div>

              {/* 1890 - Transfer */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">1890</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  Transfer to Gold Coast Prefecture
                </h3>
                <p className="text-muted-foreground font-serif">
                  The Catholic Church at Keta was transferred from Pro-Vicariate of Dahomey 
                  to the Prefecture of the Gold Coast. This ecclesiastical territory extended 
                  northward, eventually merging with the northern sector of the region, then 
                  administered by the Missionaries of the Society of Divine Word (SVD).
                </p>
              </div>

              {/* 1923 - Lower Volta Vicariate */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">March 15, 1923</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  Lower Volta Vicariate Created
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  The territory was created as the Lower Volta Vicariate and placed under 
                  the Dutch Province of the S.M.A. When the Lower Volta Vicariate was created, 
                  <strong> Bishop Herman</strong> was appointed the first Vicar Apostolic.
                </p>
                <p className="text-muted-foreground font-serif">
                  He arrived as the first bishop at Keta on <strong>23rd October 1923</strong>. 
                  His motto being <em>"Sicut Miles Christi"</em>. He worked diligently until his 
                  death in Lome on April 18, 1945 while on his way to his home country for medical care.
                </p>
              </div>

              {/* 1946 - Bishop Holland */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">October 1946</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  Bishop J. G. Holland
                </h3>
                <p className="text-muted-foreground font-serif">
                  Bishop J. G. Holland succeeded Bishop Herman in October, 1946; but had to 
                  leave to Liverpool in 1950 because of ill health.
                </p>
              </div>

              {/* 1950 - Diocese of Keta */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">1950</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  Diocese of Keta Established
                </h3>
                <p className="text-muted-foreground font-serif">
                  The Lower Volta Vicariate became the Diocese of Keta. <strong>Rt. Rev. Anthony Konings</strong> was 
                  appointed the first bishop. He arrived at Keta in 1954 and worked for twenty-two 
                  years before retiring in 1976.
                </p>
              </div>

              {/* 1973 - Bishop Lodonu */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">June 29, 1973</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  First Indigenous Bishop
                </h3>
                <p className="text-muted-foreground font-serif">
                  The <strong>Rt. Rev. Francis Kofi Anani Lodonu</strong> was ordained in Rome by 
                  His Holiness Pope Paul VI, as the Auxiliary Bishop of Keta. After three years, 
                  he took over the administration of the Diocese which was renamed the 
                  <strong> Keta-Ho Diocese</strong> on 15th August 1976 as the first indigenous Bishop. 
                  His motto was <em>"Facere Voluntatem Tuam"</em>.
                </p>
              </div>

              {/* 1994 - Diocese Division */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">December 19, 1994</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  Creation of Keta-Akatsi Diocese
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  The Keta-Ho Diocese was divided into three, namely; the <strong>Keta-Akatsi Diocese</strong>, 
                  <strong> Ho Diocese</strong> and <strong>Jasikan Diocese</strong>. This development, 
                  besides being an encouragement for further growth of the church in this part of the 
                  Volta Region, is an eloquent testimony of the great strides the church has made in this area.
                </p>
                <p className="text-muted-foreground font-serif">
                  <strong>Rev. Monsignor Anthony Kwame Adanuty</strong> was appointed the first Bishop of 
                  this new Keta-Akatsi Diocese on 17th March 1995. He took possession of the Diocese at 
                  Akatsi on 10th June, 1995 with his Motto: <em>"In Verbo Tuo"</em>.
                </p>
              </div>

              {/* Original Parishes */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">1995</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  The Ten Original Parishes
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  In the year of the creation of the Keta-Akatsi Diocese, the Diocese had ten parishes:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
                  {[
                    "Keta (St. Michael)",
                    "Denu (St. Anthony)",
                    "Abor (St. Teresa)",
                    "Dzodze (Ss. Peter & Paul)",
                    "Dzelukope (St. Peter Claver)",
                    "Anloga (St. Francis of Assisi)",
                    "Aflao (Ss. Peter & Paul)",
                    "Sogakope (Holy Cross)",
                    "Akatsi (Christ the King)",
                    "Juapong (St. Francis of Assisi)",
                  ].map((parish, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-2 bg-muted rounded-lg text-sm text-center"
                    >
                      {parish}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2017 - Bishop Kumordji */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">March 16, 2017</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  Bishop Gabriel Edoe Kumordji, SVD
                </h3>
                <p className="text-muted-foreground font-serif">
                  His Holiness Pope Francis appointed <strong>Bishop Gabriel Edoe Kumordji (SVD)</strong> who 
                  until his appointment, was the Apostolic Vicar of the Apostolic Vicariate of Donkorkrom, 
                  as the second Bishop of Keta-Akatsi Diocese following the canonical resignation of 
                  Most Rev. Anthony Kwami Adanuty. His motto for the new task is <em>"Adveniat Regnum Tuum"</em>.
                </p>
              </div>

              {/* Present Day */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent" />
                <div className="mb-2">
                  <span className="text-accent font-semibold">2022 - Present</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  A Growing Diocese
                </h3>
                <p className="text-muted-foreground font-serif mb-4">
                  The number of Parishes, Quasi parishes, and Resident stations in the Diocese has, 
                  by the year 2022, risen to <strong>thirty-eight</strong>. New parishes created include:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    "Adidome (The Risen Christ)",
                    "Viepe (St. Benedictus)",
                    "Atiavi (St. Anthony)",
                    "Tegbi (St. Anthony of Padua)",
                    "Tadzewu (Holy Trinity)",
                    "Agbozume (Immaculate Conception)",
                    "Adutor (St. Teresa of Avila)",
                    "Mafi-Kumase (Good Shepherd)",
                    "Tsiame (Immaculate Conception)",
                    "Agbedrafor (St. Joseph the Worker)",
                    "Afife (Sacred Heart)",
                    "Hatorgodo (St. Mary)",
                    "Atiteti (St. Francis Xavier)",
                    "Atidzive (St. Rose of Lima)",
                    "Abor Hospital (Sacred Heart)",
                    "Alakple (St. Joseph)",
                    "Vodza (St. Joseph)",
                    "Dabala (St. John The Baptist)",
                    "Dabala-Junction (Holy Rosary)",
                    "Agbakope (St. Joseph the Worker)",
                    "Bakpa-Avedo (Sacred Heart)",
                    "Aflao-Border (St. Joseph the Worker)",
                    "Hatsukope (Sacred Heart)",
                    "Dzodze-Tornu (Sacred Heart Shrine)",
                    "Blekusu (St. Anthony of Padua)",
                    "Anlo-Afiadenyigba (St. Mary)",
                    "Ave-Dakpa (St. Francis of Assisi)",
                    "Dzodze Hospital (St. Anthony)",
                  ].map((parish, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-2 bg-accent/10 text-accent rounded-lg text-xs text-center"
                    >
                      {parish}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-4xl font-heading font-bold text-accent mb-2">4</div>
                <div className="text-sm text-muted-foreground">Deaneries</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-4xl font-heading font-bold text-accent mb-2">38</div>
                <div className="text-sm text-muted-foreground">Parishes</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-4xl font-heading font-bold text-accent mb-2">82</div>
                <div className="text-sm text-muted-foreground">Priests</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-4xl font-heading font-bold text-accent mb-2">130+</div>
                <div className="text-sm text-muted-foreground">Years of Faith</div>
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
