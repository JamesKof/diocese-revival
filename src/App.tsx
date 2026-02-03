import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

// About Pages
import History from "./pages/about/History";
import Institutions from "./pages/about/Institutions";
import Clergy from "./pages/about/Clergy";
import Departments from "./pages/about/Departments";
import Secretariat from "./pages/about/Secretariat";
import PriestsAssignment from "./pages/about/PriestsAssignment";
import ReligiousCommunities from "./pages/about/ReligiousCommunities";

// Bishop Pages
import BishopProfile from "./pages/bishop/BishopProfile";
import BishopItinerary from "./pages/bishop/BishopItinerary";
import BishopEmeritus from "./pages/bishop/BishopEmeritus";

// Deanery Pages
import { AkatsiDeanery, DenuDeanery, KetaDeanery, SogakopeDeanery } from "./pages/deaneries/DeaneryPages";
import ParishFinder from "./pages/ParishFinder";

// Media Pages
import { NewsPage, AnnouncementsPage, GalleryPage, NewsArticle } from "./pages/media/MediaPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Routes */}
          <Route path="/about/history" element={<History />} />
          <Route path="/about/institutions" element={<Institutions />} />
          <Route path="/about/clergy" element={<Clergy />} />
          <Route path="/about/departments" element={<Departments />} />
          <Route path="/about/secretariat" element={<Secretariat />} />
          <Route path="/about/priests-assignment" element={<PriestsAssignment />} />
          <Route path="/about/religious-communities" element={<ReligiousCommunities />} />
          
          {/* Bishop Routes */}
          <Route path="/bishop/profile" element={<BishopProfile />} />
          <Route path="/bishop/itinerary" element={<BishopItinerary />} />
          <Route path="/bishop/emeritus" element={<BishopEmeritus />} />
          
          {/* Deanery Routes */}
          <Route path="/deaneries/akatsi" element={<AkatsiDeanery />} />
          <Route path="/deaneries/denu" element={<DenuDeanery />} />
          <Route path="/deaneries/keta" element={<KetaDeanery />} />
          <Route path="/deaneries/sogakope" element={<SogakopeDeanery />} />
          <Route path="/parish-finder" element={<ParishFinder />} />
          
          {/* Media Routes */}
          <Route path="/media/news" element={<NewsPage />} />
          <Route path="/media/news/:slug" element={<NewsArticle />} />
          <Route path="/media/announcements" element={<AnnouncementsPage />} />
          <Route path="/media/gallery" element={<GalleryPage />} />
          
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
