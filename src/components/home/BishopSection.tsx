import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bishopKumordji from "@/assets/bishop-kumordji.jpg";

export function BishopSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
              Our Shepherd
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Most Rev. Gabriel Edoe Kumordji, SVD
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-2 font-serif italic">
              Bishop of Keta-Akatsi
            </p>
            <div className="space-y-4 text-primary-foreground/80 mb-8">
              <p>
                Most Reverend Gabriel Edoe Kumordji, SVD, is the current Bishop 
                of the Catholic Diocese of Keta-Akatsi. He was appointed by His 
                Holiness Pope Francis and has been shepherding the faithful of 
                this diocese with dedication and pastoral care.
              </p>
              <p>
                Under his leadership, the diocese continues to grow in faith, 
                expanding its evangelization efforts, strengthening its educational 
                and healthcare institutions, and serving the poor and marginalized 
                in our communities.
              </p>
            </div>
            <Link to="/bishop/profile">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 group">
                Read Full Biography
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-accent/20">
                <img
                  src={bishopKumordji}
                  alt="Most Rev. Gabriel Edoe Kumordji, SVD - Bishop of Keta-Akatsi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
