import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Cathedral of the Diocese"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/30 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
              Welcome Message
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to the Catholic Diocese of Keta-Akatsi
            </h2>
            <div className="space-y-4 text-muted-foreground font-serif">
              <p>
                The Catholic Diocese of Keta-Akatsi is a Roman Catholic Diocese in the 
                Volta Region of Ghana. We are a vibrant faith community dedicated to 
                spreading the Gospel of Jesus Christ and serving the people of God.
              </p>
              <p>
                Our diocese comprises four deaneries: Akatsi, Denu, Keta, and Sogakope, 
                each with numerous parishes serving the faithful across the region. 
                We are committed to evangelization, education, healthcare, and social 
                development in our communities.
              </p>
              <p>
                Under the leadership of our Bishop, Most Rev. Gabriel Edoe Kumordji, SVD, 
                we continue to grow in faith and service, building up the Body of Christ 
                in this part of the Lord's vineyard.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/about/history">
                <Button className="bg-primary hover:bg-primary/90">
                  Our History
                </Button>
              </Link>
              <Link to="/bishop/profile">
                <Button variant="outline">
                  Meet Our Bishop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
