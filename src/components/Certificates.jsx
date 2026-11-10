import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { certificates } from "../data/certificates";
import { useModalAccessibility } from "../hooks/useModalAccessibility";
import { Code, Container, SectionHeader } from "./ui";
import { useLanguage } from "../i18n/context";

function Certificates() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="certificates" className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeader
          index="05"
          path={t.certificates.path}
          title={t.certificates.title}
          intro={t.certificates.intro}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleCertificates.map((certificate) => (
            <button
              key={certificate.title}
              type="button"
              onClick={() => setSelected(certificate)}
              className="group flex flex-col border border-line bg-panel text-start transition hover:border-accent/60"
            >
              <div className="aspect-[4/3] w-full overflow-hidden border-b border-line bg-white">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between gap-3 text-xs text-muted">
                  <span className="truncate text-accent">{certificate.issuer}</span>
                  <span className="shrink-0">{certificate.date}</span>
                </div>
                <h3 dir="ltr" className="mt-2.5 line-clamp-2 text-start font-medium leading-6 rtl:text-right">{certificate.title}</h3>
                <p dir="ltr" className="mt-3 text-xs text-muted rtl:text-right">
                  {certificate.skills.slice(0, 2).map((skill) => "#" + skill.toLowerCase().replace(/\s+/g, "-")).join("  ")}
                </p>
              </div>
            </button>
          ))}
        </div>

        {certificates.length > 3 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="border border-line px-5 py-3 text-sm transition hover:border-ink"
            >
              {showAll ? t.certificates.showLess : t.certificates.showAll(certificates.length)}
            </button>
          </div>
        )}
      </Container>
      <CertificateModal certificate={selected} onClose={closeModal} />
    </section>
  );
}

function CertificateModal({ certificate, onClose }) {
  const { t } = useLanguage();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  useModalAccessibility({
    isOpen: Boolean(certificate),
    onClose,
    dialogRef,
    initialFocusRef: closeRef,
  });

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-3 sm:p-6"
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-title"
            className="w-full max-w-5xl border border-line bg-panel"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 text-xs text-muted">
              <Code className="truncate">{certificate.image.split("/").pop()}</Code>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label={t.certificates.closeLabel}
                className="shrink-0 py-1 text-ink transition hover:text-accent"
              >
                {t.certificates.close}
              </button>
            </div>
            <div className="max-h-[70vh] overflow-auto bg-white p-2 sm:p-4">
              <img src={certificate.image} alt={certificate.title} className="mx-auto max-h-[66vh] w-auto object-contain" />
            </div>
            <div className="border-t border-line p-4">
              <h3 id="certificate-title" dir="ltr" className="font-medium rtl:text-right">{certificate.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {certificate.issuer} · {certificate.date}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Certificates;
