import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { JobPosting } from '../types';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X } from 'lucide-react';

export const Careers: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    linkedin_url: '',
    cover_letter: '',
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await api.getJobs();
        setJobs(data);
      } catch (err) {
        console.error('Failed to load careers', err);
      }
    };
    fetchJobs();
  }, []);

  const handleApplyClick = (job: JobPosting) => {
    setSelectedJob(job);
    setShowModal(true);
    setSubmitted(false);
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;
    try {
      await api.applyForJob({
        job_id: selectedJob.id,
        ...formData,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#fafaf7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mb-2">
            Talent & Careers
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Build the Future of Agritech & Global Trade
          </h1>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            Join a multi-generational global agricultural enterprise where passion, scientific rigor,
            and international commerce combine to nourish millions.
          </p>
        </div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <h4 className="font-heading text-base font-bold text-slate-900 mb-2">Global Exposure</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Collaborate across 90+ countries, managing international commodities, trade finance, and worldwide logistics hubs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <h4 className="font-heading text-base font-bold text-slate-900 mb-2">Agronomic Innovation</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pioneer non-GMO seed development, satellite field GIS tracking, and climate-resilient organic cultivars.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <h4 className="font-heading text-base font-bold text-slate-900 mb-2">Community Impact</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Directly improve the livelihoods, crop yields, and income of over 140,000 farming families across India.
            </p>
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6">Current Openings</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-amber-500/40 shadow-sm transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-900">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                    <span className="flex items-center text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded font-semibold border border-amber-200/60">
                      <Briefcase className="w-3.5 h-3.5 mr-1" />
                      {job.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {job.experience_level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed max-w-3xl">
                    {job.description}
                  </p>
                </div>

                <button
                  onClick={() => handleApplyClick(job)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-600 text-amber-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center shadow-sm"
                >
                  Apply Now
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Application */}
        {showModal && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Application Received!</h3>
                  <p className="text-xs text-slate-600 mb-6">
                    Thank you for your interest in joining Krish Agro. Our human resources team will review your credentials and contact you shortly.
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">
                    Apply: {selectedJob.title}
                  </h3>
                  <span className="text-xs text-slate-500 block mb-6">{selectedJob.department} • {selectedJob.location}</span>

                  <form onSubmit={handleSubmitApplication} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Phone *
                        </label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        LinkedIn Profile or Resume Link
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        value={formData.linkedin_url}
                        onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Cover Note / Key Experience
                      </label>
                      <textarea
                        rows={3}
                        value={formData.cover_letter}
                        onChange={(e) => setFormData({ ...formData, cover_letter: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Summarize your relevant FMCG or commodity background..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-slate-950 hover:bg-amber-600 text-amber-300 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md"
                    >
                      Submit Candidate Profile
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
