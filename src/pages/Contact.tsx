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
          <div className="flex items-start gap-4"><Phone className="h-5 w-5 text-accent mt-1" /><div><p className="font-medium">Phone</p><p className="text-muted-foreground">+233 59 244 9804</p></div></div>
          <div className="mt-8 aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127096.71847177!2d0.8500000000000001!3d5.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1020e6f76fb10b21%3A0x4f9b0b5b0b5b0b5b!2sKeta%2C%20Ghana!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Catholic Diocese of Keta-Akatsi Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
