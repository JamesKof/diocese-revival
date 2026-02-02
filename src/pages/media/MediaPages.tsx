import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

// Import all gallery images
import bishopHermanMemorial from "@/assets/bishop-herman-memorial.jpg";
import bishopKumordji from "@/assets/bishop-kumordji.jpg";
import communityGroup from "@/assets/community-group.jpg";
import faithfulWoman from "@/assets/faithful-woman.jpg";
import flagBearer from "@/assets/flag-bearer.jpg";
import heroBand from "@/assets/hero-band.jpg";
import heroBishops from "@/assets/hero-bishops.jpg";
import heroChrismMass from "@/assets/hero-chrism-mass.jpg";
import priests from "@/assets/priests.jpg";
import procession from "@/assets/procession.jpg";

const galleryImages = [
  { src: heroChrismMass, alt: "Chrism Mass Celebration", caption: "Annual Chrism Mass" },
  { src: heroBishops, alt: "Bishops Gathering", caption: "Episcopal Conference" },
  { src: heroBand, alt: "Diocesan Band", caption: "Liturgical Celebrations" },
  { src: priests, alt: "Diocesan Priests", caption: "Clergy of Keta-Akatsi" },
  { src: bishopKumordji, alt: "Bishop Gabriel Edoe Kumordji", caption: "Our Shepherd" },
  { src: bishopHermanMemorial, alt: "Bishop Herman Memorial", caption: "Bishop Emeritus Memorial" },
  { src: procession, alt: "Liturgical Procession", caption: "Solemn Procession" },
  { src: flagBearer, alt: "Flag Bearer", caption: "Diocesan Celebrations" },
  { src: communityGroup, alt: "Community Gathering", caption: "Faithful Community" },
  { src: faithfulWoman, alt: "Faithful Woman", caption: "Women of Faith" },
];

const newsItems = [
  { slug: "mass-of-chrism-2023", title: "Mass of Chrism 2023", date: "April 6, 2023", excerpt: "The annual Mass of Chrism was celebrated with great solemnity.", category: "Liturgy" },
  { slug: "catholic-hour-fafaa", title: "Catholic Hour on Fafaa @5", date: "March 15, 2023", excerpt: "Radio ministry reaching thousands in the Volta Region.", category: "Media" },
  { slug: "priestly-ordination-2023", title: "Priestly Ordination 2023", date: "July 22, 2023", excerpt: "The diocese welcomed new priests into sacred ministry.", category: "Ordination" },
  { slug: "diaconate-ordination-2023", title: "Diaconate Ordination 2023", date: "June 10, 2023", excerpt: "Seminarians ordained to the diaconate.", category: "Ordination" },
];

export const NewsPage = () => (
  <Layout>
    <PageHeader title="News & Events" subtitle="Latest happenings in the diocese" />
    <section className="py-16 container">
      <div className="max-w-4xl mx-auto grid gap-6">
        {newsItems.map((news) => (
          <Link key={news.slug} to={`/media/news/${news.slug}`}>
            <Card className="hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">{news.category}</span>
                <h3 className="font-heading text-xl font-semibold mt-3 mb-2">{news.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{news.excerpt}</p>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />{news.date}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export const AnnouncementsPage = () => (
  <Layout>
    <PageHeader title="Announcements" subtitle="Important notices from the diocese" />
    <section className="py-16 container">
      <div className="max-w-4xl mx-auto text-center text-muted-foreground">
        <p>No announcements at this time. Check back soon for updates.</p>
      </div>
    </section>
  </Layout>
);

export const GalleryPage = () => (
  <Layout>
    <PageHeader title="Photo Gallery" subtitle="Images from diocesan events" />
    <section className="py-16 container">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative aspect-square bg-muted rounded-lg overflow-hidden">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-white text-sm font-medium">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export const NewsArticle = () => (
  <Layout>
    <PageHeader title="News Article" subtitle="Diocese of Keta-Akatsi" />
    <section className="py-16 container">
      <div className="max-w-3xl mx-auto prose">
        <p className="text-muted-foreground font-serif">Full article content will be displayed here with images and details about the event.</p>
      </div>
    </section>
  </Layout>
);
