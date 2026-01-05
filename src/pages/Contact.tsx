import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <Layout>
    <PageHeader title="Contact Us" subtitle="Get in touch with the Diocese of Keta-Akatsi" />
    <section className="py-16 container">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-heading text-2xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" rows={5} />
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
        <div className="space-y-6">
          <h2 className="font-heading text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="flex items-start gap-4"><MapPin className="h-5 w-5 text-accent mt-1" /><div><p className="font-medium">Address</p><p className="text-muted-foreground">P.O. Box KA 47, Keta, Volta Region, Ghana</p></div></div>
          <div className="flex items-start gap-4"><Phone className="h-5 w-5 text-accent mt-1" /><div><p className="font-medium">Phone</p><p className="text-muted-foreground">+233 XX XXX XXXX</p></div></div>
          <div className="flex items-start gap-4"><Mail className="h-5 w-5 text-accent mt-1" /><div><p className="font-medium">Email</p><p className="text-muted-foreground">info@keta-akatsidiocese.org</p></div></div>
          <div className="mt-8 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Map Placeholder</div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
