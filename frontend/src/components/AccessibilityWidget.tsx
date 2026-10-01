import React, { useState, useEffect } from 'react';
import { Eye, Type, Sun, RotateCcw, X } from 'lucide-react';

export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState<'normal' | 'lg' | 'xl'>('normal');
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.classList.remove('text-size-lg', 'text-size-xl');
    if (textSize === 'lg') body.classList.add('text-size-lg');
    if (textSize === 'xl') body.classList.add('text-size-xl');
  }, [textSize]);

  useEffect(() => {
    const body = document.body;
    if (highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const handleReset = () => {
    setTextSize('normal');
    setHighContrast(false);
  };

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 print:hidden">
      {/* Floating Trigger Tab */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open accessibility settings (text size and contrast)"
          className="flex flex-col items-center justify-center w-11 h-12 bg-[#5A2A27] text-[#FBF6EE] rounded-l-2xl shadow-lg hover:bg-[#441F1D] hover:w-12 transition-all focus:outline-none focus:ring-2 focus:ring-[#C9962B]"
        >
          <Eye className="w-5 h-5 text-[#C9962B]" />
          <span className="text-[9px] font-bold tracking-tighter uppercase mt-0.5">A11y</span>
        </button>
      ) : (
        /* Expanded Accessible Control Panel */
        <div
          role="dialog"
          aria-label="Accessibility options"
          className="w-72 bg-[#FBF6EE] border-2 border-[#E8DEC8] rounded-3xl p-5 shadow-2xl text-[#2C221E] animate-in fade-in slide-in-from-right duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DEC8]">
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-[#2F6B3A]" />
              <h3 className="font-heading text-sm font-bold text-[#5A2A27]">
                Accessibility Tools
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility options"
              className="p-1 rounded-full text-[#665952] hover:bg-[#F5ECE0] hover:text-[#5A2A27]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4 pt-3">
            {/* Text Size Control */}
            <div>
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#5A2A27] mb-2">
                <Type className="w-3.5 h-3.5" />
                <span>Text Sizing</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'normal', label: 'Default' },
                  { id: 'lg', label: 'Large (A+)' },
                  { id: 'xl', label: 'X-Large (A++)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTextSize(item.id as 'normal' | 'lg' | 'xl')}
                    className={`py-1.5 px-2 text-xs font-medium rounded-xl border transition-all ${
                      textSize === item.id
                        ? 'bg-[#2F6B3A] text-white border-[#2F6B3A] shadow-xs'
                        : 'bg-white text-[#2C221E] border-[#E8DEC8] hover:bg-[#F5ECE0]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div>
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#5A2A27] mb-2">
                <Sun className="w-3.5 h-3.5" />
                <span>Display Contrast</span>
              </div>
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-full py-2 px-3 text-xs font-medium rounded-xl border flex items-center justify-between transition-all ${
                  highContrast
                    ? 'bg-[#5A2A27] text-white border-[#5A2A27]'
                    : 'bg-white text-[#2C221E] border-[#E8DEC8] hover:bg-[#F5ECE0]'
                }`}
              >
                <span>{highContrast ? 'High Contrast Active' : 'Standard Contrast'}</span>
                <span
                  className={`w-3.5 h-3.5 rounded-full border ${
                    highContrast ? 'bg-[#C9962B] border-white' : 'bg-transparent border-[#9A8E87]'
                  }`}
                />
              </button>
            </div>

            {/* Reset to defaults */}
            <div className="pt-2 border-t border-[#E8DEC8] flex justify-end">
              <button
                onClick={handleReset}
                className="text-xs text-[#665952] hover:text-[#5A2A27] flex items-center space-x-1 font-medium"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                Reset Defaults
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
