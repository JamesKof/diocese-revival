import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const departments = [
  {
    category: "Diocesan Offices",
    items: [
      {
        name: "Office of the Vicar General",
        description: "Assists the Bishop in the administration of the diocese and exercises executive power in certain matters.",
        head: "Very Rev. Fr. John Doe",
      },
      {
        name: "Chancery Office",
        description: "Handles the official correspondence, documents, and archives of the diocese.",
        head: "Rev. Fr. Peter Smith",
      },
      {
        name: "Tribunal Office",
        description: "Handles marriage cases and other canonical matters requiring judicial processes.",
        head: "Rev. Fr. Michael Adu, JCL",
      },
      {
        name: "Finance Office",
        description: "Manages the temporal goods of the diocese, including budgeting, accounting, and financial reporting.",
        head: "Mr. Emmanuel Kpodo",
      },
    ],
  },
  {
    category: "Diocesan Departments",
    items: [
      {
        name: "Department of Evangelization",
        description: "Coordinates evangelization efforts across the diocese, including missions and outreach programs.",
        head: "Rev. Fr. Francis Agbeko",
      },
      {
        name: "Department of Catechetics",
        description: "Oversees religious education programs, catechist training, and RCIA programs.",
        head: "Rev. Fr. Augustine Gbedemah",
      },
      {
        name: "Department of Education",
        description: "Supervises Catholic schools and educational institutions in the diocese.",
        head: "Sr. Mary Immaculate, SSpS",
      },
      {
        name: "Department of Health",
        description: "Coordinates healthcare services through Catholic hospitals and clinics.",
        head: "Dr. Grace Mensah",
      },
      {
        name: "Department of Social Communications",
        description: "Handles media relations, publications, and the diocese's online presence.",
        head: "Mr. Patrick Tetteh",
      },
      {
        name: "Department of Youth Ministry",
        description: "Coordinates youth programs, including CYO, youth retreats, and formation activities.",
        head: "Rev. Fr. Joseph Kpodo",
      },
    ],
  },
  {
    category: "Diocesan Commissions",
    items: [
      {
        name: "Liturgical Commission",
        description: "Ensures proper celebration of the liturgy and trains liturgical ministers across parishes.",
        head: "Rev. Fr. Emmanuel Mensah",
      },
      {
        name: "Justice and Peace Commission",
        description: "Promotes Catholic social teaching and advocates for justice and human rights.",
        head: "Rev. Fr. Patrick Tetteh",
      },
      {
        name: "Laity Commission",
        description: "Coordinates the apostolate of the laity and lay associations in the diocese.",
        head: "Mr. Francis Agbeli",
      },
      {
        name: "Ecumenism and Interreligious Dialogue Commission",
        description: "Promotes dialogue with other Christian denominations and other religions.",
        head: "Rev. Fr. Michael Adu",
      },
      {
        name: "Vocations Commission",
        description: "Promotes and discerns vocations to the priesthood and religious life.",
        head: "Rev. Fr. Augustine Gbedemah",
      },
      {
        name: "Family Life Commission",
        description: "Supports marriage preparation, family counseling, and natural family planning.",
        head: "Mr. & Mrs. Joseph Klu",
      },
    ],
  },
];

const Departments = () => {
  return (
    <Layout>
      <PageHeader
        title="Diocesan Departments, Offices & Commissions"
        subtitle="The administrative structure of the diocese"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground font-serif text-center mb-12">
              The Diocese of Keta-Akatsi is organized into various offices, departments, and 
              commissions to effectively carry out its mission of evangelization and service.
            </p>

            <div className="space-y-12">
              {departments.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 pb-2 border-b border-accent">
                    {category.category}
                  </h2>
                  
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem
                        key={itemIndex}
                        value={`${categoryIndex}-${itemIndex}`}
                        className="border border-border rounded-lg px-4 data-[state=open]:border-accent/50"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <span className="font-heading font-medium text-left">{item.name}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pb-4 pt-2">
                            <p className="text-muted-foreground mb-3">{item.description}</p>
                            <p className="text-sm">
                              <span className="text-accent font-medium">Head:</span>{" "}
                              <span className="text-foreground">{item.head}</span>
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Departments;
