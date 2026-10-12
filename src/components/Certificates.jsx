import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Award, ChevronDown, X } from "lucide-react";
import { certificates } from "../data/certificates";
import { useModalAccessibility } from "../hooks/useModalAccessibility";

function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="certificates" className="relative overflow-hidden px-6 py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3"><span className="text-sm font-bold tracking-[0.25em] text-violet-400">05 / CERTIFICATES</span><div className="h-px w-16 bg-gradient-to-r from-violet-500 to-transparent" /></div>
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Always learning.{" "}<span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Always building.</span>
            </h2>
          </div>
          <p className="max-w-md leading-7 text-white/45">Selected certificates across backend engineering, AI, automation, and modern development workflows.</p>
        </div>
        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {visibleCertificates.map((certificate, index) => (
              <motion.button key={certificate.title} type="button" layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }} transition={{ delay: index * 0.06 }} onClick={() => setSelected(certificate)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] text-left transition hover:-translate-y-1 hover:border-violet-400/35">
                <div className="aspect-[4/3] overflow-hidden bg-white"><img src={certificate.image} alt={certificate.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3 text-xs"><span className="font-semibold text-violet-300">{certificate.issuer}</span><span className="text-white/30">{certificate.date}</span></div>
                  <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-7 text-white">{certificate.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">{certificate.skills.slice(0, 2).map((skill) => <span key={skill} className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/45">{skill}</span>)}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
        {certificates.length > 3 && (
          <div className="mt-8 flex justify-center"><button type="button" onClick={() => setShowAll((value) => !value)}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/70 transition hover:border-violet-400/40 hover:text-white">
            {showAll ? "Show less" : "View all " + certificates.length + " certificates"}<ChevronDown size={17} className={"transition " + (showAll ? "rotate-180" : "")} />
          </button></div>
        )}
      </div>
      <CertificateModal certificate={selected} onClose={closeModal} />
    </section>
  );
}

function CertificateModal({ certificate, onClose }) {
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
      {certificate && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[110] flex items-center justify-center bg-[#02040c]/90 p-4 backdrop-blur-md"
        onMouseDown={(event) => event.target === event.currentTarget && onClose()} role="presentation">
        <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }}
          ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="certificate-title" className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#080b18]">
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close certificate"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#080b18]/90 text-white"><X size={20} /></button>
          <div className="max-h-[72vh] overflow-auto bg-white p-2 sm:p-4"><img src={certificate.image} alt={certificate.title} className="mx-auto max-h-[68vh] w-auto object-contain" /></div>
          <div className="flex items-center gap-4 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300"><Award size={20} /></span><div><h3 id="certificate-title" className="font-bold text-white">{certificate.title}</h3><p className="mt-1 text-sm text-white/40">{certificate.issuer} · {certificate.date}</p></div></div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  );
}

export default Certificates;
