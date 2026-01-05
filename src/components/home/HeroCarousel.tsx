import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Welcome to the Catholic Diocese of Keta-Akatsi",
    subtitle: "Spreading the Gospel in the Volta Region of Ghana",
    image: "/placeholder.svg",
    cta: { text: "Learn About Us", href: "/about/history" },
  },
  {
    id: 2,
    title: "Mass of Chrism 2023",
    subtitle: "Join us in celebrating the sacred traditions of our faith",
    image: "/placeholder.svg",
    cta: { text: "Read More", href: "/media/news/mass-of-chrism-2023" },
  },
  {
    id: 3,
    title: "Priestly Ordination",
    subtitle: "Witnessing the growth of our clergy and religious community",
    image: "/placeholder.svg",
    cta: { text: "View Gallery", href: "/media/gallery" },
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-primary">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />

          {/* Content */}
          <div className="relative h-full container flex items-center">
            <div className="max-w-2xl">
              <h2
                className={cn(
                  "font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 md:mb-6",
                  index === currentSlide && "animate-fade-in-up"
                )}
              >
                {slide.title}
              </h2>
              <p
                className={cn(
                  "text-lg md:text-xl text-primary-foreground/90 mb-6 md:mb-8 font-serif",
                  index === currentSlide && "animate-fade-in-up"
                )}
                style={{ animationDelay: "0.2s" }}
              >
                {slide.subtitle}
              </p>
              <Link to={slide.cta.href}>
                <Button
                  size="lg"
                  className={cn(
                    "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold",
                    index === currentSlide && "animate-fade-in-up"
                  )}
                  style={{ animationDelay: "0.4s" }}
                >
                  {slide.cta.text}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            )}
          />
        ))}
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </div>
  );
}
