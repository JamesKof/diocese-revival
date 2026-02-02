import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import dioceseLogo from "@/assets/diocese-logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={dioceseLogo} 
                alt="Catholic Diocese of Keta-Akatsi Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-heading font-semibold text-lg">Catholic Diocese</h3>
                <p className="text-sm text-primary-foreground/80">of Keta-Akatsi</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              The Catholic Diocese of Keta-Akatsi is a Roman Catholic Diocese in the Volta Region of Ghana,
              dedicated to spreading the Gospel and serving the faithful.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about/history" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Our History
                </Link>
              </li>
              <li>
                <Link to="/bishop/profile" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  The Bishop
                </Link>
              </li>
              <li>
                <Link to="/media/news" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/media/gallery" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Deaneries */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Our Deaneries</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/deaneries/akatsi" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Akatsi Deanery
                </Link>
              </li>
              <li>
                <Link to="/deaneries/denu" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Denu Deanery
                </Link>
              </li>
              <li>
                <Link to="/deaneries/keta" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Keta Deanery
                </Link>
              </li>
              <li>
                <Link to="/deaneries/sogakope" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Sogakope Deanery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  P.O. Box KA 47, Keta,<br />Volta Region, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/80">+233 59 244 9804</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Facebook className="h-5 w-5 group-hover:text-accent-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Twitter className="h-5 w-5 group-hover:text-accent-foreground" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Youtube className="h-5 w-5 group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Catholic Diocese of Keta-Akatsi. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            "Go therefore and make disciples of all nations" - Matthew 28:19
          </p>
        </div>
      </div>
    </footer>
  );
}
