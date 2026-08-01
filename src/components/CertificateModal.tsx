import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Loader2, ExternalLink, Download } from "lucide-react";

interface CertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  previewUrl?: string;
  link?: string;
  type: "pdf" | "image" | "none";
}

const CertificateModal = ({ isOpen, onClose, title, previewUrl, link, type }: CertModalProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      // Fallback timer to turn off spinner if iframe/image load event doesn't fire
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, previewUrl]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText size={16} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base truncate max-w-[300px] sm:max-w-[500px]">{title}</h3>
              </div>
              <div className="flex items-center gap-2">
                {previewUrl && (
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1 text-xs"
                    title="Download File"
                  >
                    <Download size={16} />
                  </a>
                )}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1 text-xs"
                    title="Original Link"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 min-h-[450px] relative bg-muted/10 flex items-center justify-center">
              {/* Loading state */}
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card/90 z-10">
                  <Loader2 size={32} className="text-primary animate-spin" />
                  <p className="text-sm text-muted-foreground font-medium">Loading document preview...</p>
                </div>
              )}

              {/* PDF Preview */}
              {previewUrl && type === "pdf" && (
                <iframe
                  src={`${previewUrl}#toolbar=0`}
                  title={title}
                  className="w-full h-[65vh] border-0"
                  onLoad={() => setLoading(false)}
                />
              )}

              {/* Image Preview */}
              {previewUrl && type === "image" && (
                <div className="p-4 flex items-center justify-center w-full h-[65vh] overflow-auto">
                  <img
                    src={previewUrl}
                    alt={title}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-md"
                    onLoad={() => setLoading(false)}
                  />
                </div>
              )}

              {/* Fallback if no preview URL */}
              {!previewUrl && (
                <div className="p-8 text-center">
                  <FileText size={48} className="text-muted-foreground mx-auto mb-3 opacity-50" />
                  <p className="text-muted-foreground">No preview available for this certificate.</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
