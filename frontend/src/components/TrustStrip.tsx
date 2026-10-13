import React, { useEffect, useState, useRef } from 'react';
import { Award, Clock, Hotel, ShieldCheck } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  targetNumber?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  subtext: string;
}

export const TrustStrip: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const targets = [6, 500, 2, 100];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const steps = 40;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            // easeOutQuad
            const ease = 1 - (1 - progress) * (1 - progress);

            setCounts(targets.map((t) => Math.floor(t * ease)));

            if (currentStep >= steps) {
              setCounts(targets);
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats: StatItem[] = [
    {
      icon: <Clock className="w-6 h-6 text-[#c9a24b]" />,
      value: `${counts[0]}+ Years`,
      label: '6+ Years',
      subtext: 'Serving Nagpur & Central India with uncompromised grain purity',
    },
    {
      icon: <Hotel className="w-6 h-6 text-[#c9a24b]" />,
      value: `${counts[1]}+`,
      label: 'Hotels & Households',
      subtext: 'Served in Nagpur across fine dining and health-conscious homes',
    },
    {
      icon: <Award className="w-6 h-6 text-[#c9a24b]" />,
      value: `${counts[2]} Varieties`,
      label: '2 Heritage Rice Varieties',
      subtext: 'Authentic Manipur Chak-Hao Black Rice & GI Balaghat Chinnor',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#c9a24b]" />,
      value: `FSSAI Licensed`,
      label: 'FSSAI Licensed',
      subtext: '100% compliant with rigorous food safety & hygienic handling',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-[#faf6ee] border-b border-[#e8decb]"
      aria-label="Trust & Credentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#e8decb] shadow-sm hover:shadow-md hover:border-[#c9a24b]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#faf6ee] border border-[#e8decb] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {stat.icon}
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#1a0f1f] tracking-tight mb-2">
                  {stat.value}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#c9a24b] mb-2">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-[#5e5261] leading-relaxed mt-2 pt-3 border-t border-[#f4ede1]">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
