import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const featuredNews: NewsItem[] = [
  {
    id: "1",
    slug: "mass-of-chrism-2023",
    title: "Mass of Chrism 2023",
    excerpt: "The annual Mass of Chrism was celebrated with great solemnity at the Cathedral, bringing together priests from across the diocese.",
    date: "April 6, 2023",
    image: "/placeholder.svg",
    category: "Liturgy",
  },
  {
    id: "2",
    slug: "catholic-hour-fafaa",
    title: "Catholic Hour on Fafaa @5",
    excerpt: "The diocese continues its evangelization efforts through radio ministry, reaching thousands of faithful in the Volta Region.",
    date: "March 15, 2023",
    image: "/placeholder.svg",
    category: "Media",
  },
  {
    id: "3",
    slug: "priestly-ordination-2023",
    title: "Priestly Ordination 2023",
    excerpt: "The diocese welcomed new priests into the sacred ministry during a beautiful ordination ceremony at the Cathedral.",
    date: "July 22, 2023",
    image: "/placeholder.svg",
    category: "Ordination",
  },
];

export function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">
              Latest Updates
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              News & Events
            </h2>
          </div>
          <Link to="/media/news">
            <Button variant="outline" className="group">
              View All News
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNews.map((news, index) => (
            <Link key={news.id} to={`/media/news/${news.slug}`}>
              <Card className="group h-full overflow-hidden border-border hover:border-accent/50 transition-all hover:shadow-lg">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {news.category}
                    </span>
                    <span className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {news.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
