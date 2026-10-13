import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle2, Eye, X, Award, ExternalLink } from 'lucide-react';
import { IMAGES } from '../config/images';
import { BRAND_CONFIG } from '../config/brand';

interface CertificateDoc {
  number: string;
  title: string;
  authority: string;
  summary: string;
  details: string[];
  thumbnail: string;
  fullImage: string;
  badge: string;
}

export const QualityCertifications: React.FC = () => {
  const [activeModalDoc, setActiveModalDoc] = useState<CertificateDoc | null>(null);

  const certificates: CertificateDoc[] = [
    {
      number: '01',
      title: 'FSSAI Food Safety Compliance',
      authority: 'Food Safety and Standards Authority of India',
      summary: 'Verified registration and compliance with national food hygiene, handling, and storage standards.',
      badge: 'Food Safety Standards',
      details: [
        `License / Registration No: ${BRAND_CONFIG.fssaiNumber} (Placeholder)`,
        'Strict compliance with hygienic food storage and retail packing guidelines',
        'Temperature and moisture-controlled grain warehouse in Kamptee, Nagpur',
        'Zero artificial polish, chemical glazes, or synthetic preservatives',
      ],
      thumbnail: IMAGES.certFssaiThumbnail.src,
      fullImage: IMAGES.certFssaiThumbnail.src,
    },
    {
      number: '02',
      title: 'Balaghat Chinnor GI Proof & Provenance',
      authority: 'Geographical Indications Registry, Government of India',
      summary: 'Authentic origin provenance verifying Wainganga river basin cultivation of GI-designated Chinnor.',
      badge: 'GI Registered Heritage',
      details: [
        'Registered Geographical Indication Designation (GI-696 Wainganga Basin)',
        'Traditional aromatic seed lineages harvested in the Balaghat agricultural corridor',
        'Documented traceability from farm gate to Nagpur distribution facility',
        'Protects authentic culinary heritage against commercial adulteration',
      ],
      thumbnail: IMAGES.certGiProofThumbnail.src,
      fullImage: IMAGES.certGiProofThumbnail.src,
    },
    {
      number: '03',
      title: 'Independent Lab Quality & Purity Report',
      authority: 'NABL Accredited Food Testing Laboratory',
      summary: 'Batch-wise laboratory analysis verifying grain moisture, kernel elongation, and zero chemical residues.',
      badge: 'Lab Tested Purity',
      details: [
        'Standardized moisture level below 12.5% for extended natural shelf life',
        'Certified zero lead, pesticide, or heavy metal contamination residues',
        'Intact natural aleurone/bran layer retaining essential dietary fibers',
        'High natural anthocyanin antioxidant pigment content in Black Rice',
      ],
      thumbnail: IMAGES.certLabReportThumbnail.src,
      fullImage: IMAGES.certLabReportThumbnail.src,
    },
  ];

  return (
    <section
      id="quality"
      className="py-20 sm:py-24 lg:py-28 bg-[#f4ede1] border-y border-[#e8decb] scroll-mt-20"
      aria-label="Quality and Certifications"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#c9a24b]/40 text-[#c9a24b] text-xs font-semibold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Documented Purity & Traceability</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a0f1f] tracking-tight">
            Quality & Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5e5261] font-normal leading-relaxed">
            Every batch delivered to hotels and households reflects verifiable food safety standards, authentic regional provenance, and rigorous hygiene.
          </p>
        </div>

        {/* 3 Numbered Cards with Document Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {certificates.map((cert) => (
            <div
              key={cert.number}
              className="bg-white rounded-3xl p-8 border border-[#e8decb] shadow-sm hover:shadow-xl hover:border-[#c9a24b]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-3xl font-extrabold text-[#c9a24b] tracking-tight">
                    {cert.number}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#f4ede1] text-[#1a0f1f] text-[11px] font-bold uppercase tracking-wider border border-[#e8decb]">
                    {cert.badge}
                  </span>
                </div>

                {/* Title & Authority */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a0f1f] mb-2 group-hover:text-[#c9a24b] transition-colors">
                  {cert.title}
                </h3>
                <span className="text-xs font-semibold text-[#c9a24b] block mb-3">
                  {cert.authority}
                </span>

                <p className="text-xs text-[#5e5261] leading-relaxed mb-6">
                  {cert.summary}
                </p>

                {/* Key Points */}
                <ul className="space-y-2 mb-6">
                  {cert.details.slice(0, 2).map((pt, i) => (
                    <li key={i} className="flex items-start text-xs text-[#1a0f1f] gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a24b] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Document Thumbnail Preview Button */}
              <div className="pt-4 border-t border-[#f4ede1]">
                <button
                  type="button"
                  onClick={() => setActiveModalDoc(cert)}
                  className="w-full relative rounded-2xl overflow-hidden aspect-[16/9] border border-[#e8decb] group/thumb focus:outline-none focus:ring-2 focus:ring-[#c9a24b]"
                >
                  <img
                    src={cert.thumbnail}
                    alt={`${cert.title} Certificate Document Preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter grayscale group-hover/thumb:grayscale-0 transition-all duration-500 scale-100 group-hover/thumb:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1a0f1f]/60 backdrop-blur-[1px] flex items-center justify-center gap-2 text-white text-xs font-bold uppercase tracking-wider group-hover/thumb:bg-[#1a0f1f]/40 transition-colors">
                    <Eye className="w-4 h-4 text-[#c9a24b]" />
                    <span>Inspect Document</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Certificate Document Inspection */}
      {activeModalDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={activeModalDoc.title}
        >
          <div className="bg-[#faf6ee] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#c9a24b] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#e8decb]">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#c9a24b]">
                  Document Provenance • {activeModalDoc.number}
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#1a0f1f] mt-1">
                  {activeModalDoc.title}
                </h3>
                <span className="text-xs text-[#5e5261]">{activeModalDoc.authority}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalDoc(null)}
                className="p-2 rounded-xl bg-white border border-[#e8decb] text-[#1a0f1f] hover:bg-[#f4ede1] transition-colors"
                aria-label="Close document lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Preview Image */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-[#e8decb] bg-white aspect-[16/10] relative shadow-inner">
              <img
                src={activeModalDoc.fullImage}
                alt={activeModalDoc.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#1a0f1f]/90 text-[#c9a24b] text-[11px] font-bold border border-[#c9a24b]/40">
                Official Verification Document
              </div>
            </div>

            {/* Document Specifications Checklist */}
            <div className="mt-6 space-y-2.5">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#1a0f1f]">
                Verified Regulatory Compliance Specifications:
              </h4>
              <ul className="space-y-2">
                {activeModalDoc.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#5e5261]">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a24b] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer & Action */}
            <div className="mt-8 pt-4 border-t border-[#e8decb] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] text-[#5e5261] italic">
                * Official stamped copies provided with commercial wholesale & institutional shipments.
              </p>
              <button
                type="button"
                onClick={() => setActiveModalDoc(null)}
                className="px-6 py-2.5 rounded-xl bg-[#1a0f1f] text-[#c9a24b] font-bold text-xs uppercase tracking-wider hover:bg-[#2d1e34] transition-colors shrink-0"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default QualityCertifications;
