import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Facebook, Twitter, Youtube } from "lucide-react";
import dioceseLogo from "@/assets/diocese-logo.jpeg";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const aboutLinks = [
  { title: "History", href: "/about/history" },
  { title: "Institutions", href: "/about/institutions" },
  { title: "Clergy & Religious", href: "/about/clergy" },
  { title: "Diocesan Departments", href: "/about/departments" },
  { title: "Diocesan Secretariat", href: "/about/secretariat" },
  { title: "Priest on Assignment", href: "/about/priests-assignment" },
  { title: "Religious Communities", href: "/about/religious-communities" },
];

const bishopLinks = [
  { title: "Bishop's Profile", href: "/bishop/profile" },
  { title: "Bishop's Itinerary", href: "/bishop/itinerary" },
  { title: "Bishop Emeritus", href: "/bishop/emeritus" },
];

const deaneryLinks = [
  { title: "Akatsi Deanery", href: "/deaneries/akatsi" },
  { title: "Denu Deanery", href: "/deaneries/denu" },
  { title: "Keta Deanery", href: "/deaneries/keta" },
  { title: "Sogakope Deanery", href: "/deaneries/sogakope" },
];

const mediaLinks = [
  { title: "News & Events", href: "/media/news" },
  { title: "Announcements", href: "/media/announcements" },
  { title: "Photo Gallery", href: "/media/gallery" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar with social links */}
      <div className="bg-purple-dark text-primary-foreground py-2">
        <div className="container flex items-center justify-between">
          <p className="text-sm hidden sm:block">Welcome to the Catholic Diocese of Keta-Akatsi</p>
          <div className="flex items-center gap-4 ml-auto">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={dioceseLogo} 
              alt="Catholic Diocese of Keta-Akatsi Logo" 
              className="w-14 h-14 object-contain"
            />
            <div className="hidden md:block">
              <h1 className="font-heading text-lg font-semibold text-primary leading-tight">
                Catholic Diocese
              </h1>
              <p className="text-sm text-muted-foreground">of Keta-Akatsi</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                        location.pathname === "/" && "text-accent"
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isActive("/about") && "text-accent")}>
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-1 p-3">
                      {aboutLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10"
                            >
                              <div className="text-sm font-medium">{link.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isActive("/bishop") && "text-accent")}>
                    The Bishop
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-1 p-3">
                      {bishopLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10"
                            >
                              <div className="text-sm font-medium">{link.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isActive("/deaneries") && "text-accent")}>
                    Deaneries & Parishes
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-1 p-3">
                      {deaneryLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10"
                            >
                              <div className="text-sm font-medium">{link.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isActive("/media") && "text-accent")}>
                    Media
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-3">
                      {mediaLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10"
                            >
                              <div className="text-sm font-medium">{link.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                        location.pathname === "/contact" && "text-accent"
                      )}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="container py-4 space-y-2">
              <Link
                to="/"
                className="block py-2 px-4 rounded-md hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => toggleDropdown("about")}
                >
                  <span>About Us</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === "about" && "rotate-180")} />
                </button>
                {openDropdown === "about" && (
                  <div className="pl-4 space-y-1 mt-1">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* The Bishop Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => toggleDropdown("bishop")}
                >
                  <span>The Bishop</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === "bishop" && "rotate-180")} />
                </button>
                {openDropdown === "bishop" && (
                  <div className="pl-4 space-y-1 mt-1">
                    {bishopLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Deaneries Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => toggleDropdown("deaneries")}
                >
                  <span>Deaneries & Parishes</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === "deaneries" && "rotate-180")} />
                </button>
                {openDropdown === "deaneries" && (
                  <div className="pl-4 space-y-1 mt-1">
                    {deaneryLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Media Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => toggleDropdown("media")}
                >
                  <span>Media</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === "media" && "rotate-180")} />
                </button>
                {openDropdown === "media" && (
                  <div className="pl-4 space-y-1 mt-1">
                    {mediaLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="block py-2 px-4 rounded-md hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
