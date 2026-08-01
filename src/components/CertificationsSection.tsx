import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Eye } from "lucide-react";
import CertificateModal from "./CertificateModal";

const certs = [
  {
    title: "Web Dev Intern at R.K.InfoSystems",
    issuer: "LinkedIn",
    year: "2024",
    link: "https://www.linkedin.com/in/bhargav-katakam-62118227a/overlay/Position/2504867943/treasury/?profileId=ACoAAEQDRPkBK7FUHgQizLN45qd7LAKRNNtQkhI",
    previewUrl: "/assets/cirtifications/Bhargav_RK_Info_Systems_OL.png",
    previewType: "image" as const,
  },
  {
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class",
    year: "2024",
    link: "https://courses.cognitiveclass.ai/certificates/0c30761584c0401b970a9e4befe5e183",
    previewUrl: "/assets/cirtifications/Python_101_for_Data_Science.pdf",
    previewType: "pdf" as const,
  },
  {
    title: "Data Visualization Using Python",
    issuer: "Credly",
    year: "2024",
    link: "https://www.credly.com/badges/859167ee-cb2e-4c4f-8c35-e96d195deac5",
    previewUrl: "/assets/cirtifications/Data_Visualization_Using_Python.pdf",
    previewType: "pdf" as const,
  },
  {
    title: "Data Analysis with Python",
    issuer: "Cognitive Class",
    year: "2024",
    link: "https://courses.cognitiveclass.ai/certificates/e0f3566951e949b480a096768cc7917f",
    previewUrl: "/assets/cirtifications/Data_Analysis_with_Python.pdf",
    previewType: "pdf" as const,
  },
  {
    title: "AWS Academy Graduate - Data Engineering",
    issuer: "Credly",
    year: "2024",
    link: "https://www.credly.com/badges/67e09602-6143-489d-a71d-70278a23b9e9",
    previewUrl: "/assets/cirtifications/AWS_Academy_Graduate-Data_Engineering-Training_Badge.pdf",
    previewType: "pdf" as const,
  },
];

const CertificationsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null);

  const openPreview = (cert: typeof certs[0]) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  return (
    <>
      <section id="certifications" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">My Achievements</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              My <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-glass rounded-xl p-5 hover:card-glass-hover transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Award size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => openPreview(cert)}
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                  >
                    <Eye size={14} /> Preview
                  </button>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} /> Original Link
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedCert?.title || ""}
        previewUrl={selectedCert?.previewUrl}
        link={selectedCert?.link}
        type={selectedCert?.previewType || "none"}
      />
    </>
  );
};

export default CertificationsSection;
