import { Link } from "react-router-dom";
import { Church, Users, BookOpen, Heart } from "lucide-react";

const quickLinks = [
  {
    icon: Church,
    title: "Deaneries & Parishes",
    description: "Find Mass times and locations across our four deaneries",
    href: "/deaneries/akatsi",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Clergy & Religious",
    description: "Learn about our priests, religious, and seminarians",
    href: "/about/clergy",
    color: "bg-secondary",
  },
  {
    icon: BookOpen,
    title: "News & Events",
    description: "Stay updated with the latest happenings in the diocese",
    href: "/media/news",
    color: "bg-accent",
  },
  {
    icon: Heart,
    title: "Get Involved",
    description: "Discover ways to serve and participate in our mission",
    href: "/contact",
    color: "bg-green",
  },
];

export function QuickLinksSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">
            Explore
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Quick Links
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="group p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all"
            >
              <div
                className={`w-14 h-14 rounded-lg ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <link.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
