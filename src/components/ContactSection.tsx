import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    label: "Address",
    value: "Palakollu, West Godavari, Andhra Pradesh, India, 534260",
    href: "https://maps.google.com/?cid=18313922350827072918",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8074200988",
    href: "tel:+918074200988",
  },
  {
    icon: Mail,
    label: "Email",
    value: "katakambhargav073@gmail.com",
    href: "mailto:katakambhargav073@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/bhargav-katakam",
    href: "https://www.linkedin.com/in/bhargav-katakam-62118227a/",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Get In Touch</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          Contact <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {contacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label !== "Phone" && item.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-glass rounded-xl p-5 flex items-start gap-4 hover:card-glass-hover transition-all group block"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{item.label}</div>
                  <div className="text-foreground font-medium mt-0.5 text-sm">{item.value}</div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl overflow-hidden card-glass h-[340px]"
        >
          <iframe
            title="Palakollu Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30601.67652937741!2d81.72927995!3d16.51551445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37dafa23f8abc1%3A0xfe281f58c5226d96!2sPalakollu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1774178576448!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
