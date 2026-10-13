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
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 print:hidden font-sans">
      {/* Floating Trigger Tab */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open accessibility settings (text size and contrast)"
          className="flex flex-col items-center justify-center w-11 h-12 bg-[#1a0f1f] text-[#faf6ee] rounded-l-2xl shadow-xl hover:bg-[#281730] border-l border-y border-[#c9a24b]/40 hover:w-12 transition-all focus:outline-none focus:ring-2 focus:ring-[#c9a24b]"
        >
          <Eye className="w-5 h-5 text-[#c9a24b]" />
          <span className="text-[9px] font-bold tracking-tighter uppercase mt-0.5 text-[#c9a24b]">A11y</span>
        </button>
      ) : (
        /* Expanded Accessible Control Panel */
        <div
          role="dialog"
          aria-label="Accessibility options"
          className="w-72 bg-[#faf6ee] border-2 border-[#c9a24b]/30 rounded-3xl p-5 shadow-2xl text-[#1a0f1f] animate-in fade-in slide-in-from-right duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#e8decb]">
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-[#c9a24b]" />
              <h3 className="font-serif text-sm font-bold text-[#1a0f1f]">
                Accessibility Tools
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility options"
              className="p-1 rounded-full text-[#5e5261] hover:bg-[#e8decb] hover:text-[#1a0f1f]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-4 space-y-4">
            {/* Text Resizer */}
            <div>
              <label className="text-xs font-semibold text-[#5e5261] flex items-center mb-2">
                <Type className="w-3.5 h-3.5 mr-1.5 text-[#c9a24b]" />
                Font Sizing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['normal', 'lg', 'xl'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setTextSize(size)}
                    className={`py-1.5 rounded-xl text-xs font-bold transition-all border ${
                      textSize === size
                        ? 'bg-[#1a0f1f] text-[#faf6ee] border-[#1a0f1f]'
                        : 'bg-white text-[#5e5261] border-[#e8decb] hover:bg-slate-50'
                    }`}
                  >
                    {size === 'normal' ? '100%' : size === 'lg' ? '115%' : '130%'}
                  </button>
                ))}
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div>
              <label className="text-xs font-semibold text-[#5e5261] flex items-center mb-2">
                <Sun className="w-3.5 h-3.5 mr-1.5 text-[#c9a24b]" />
                Display Contrast
              </label>
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all border ${
                  highContrast
                    ? 'bg-[#1a0f1f] text-[#faf6ee] border-[#1a0f1f]'
                    : 'bg-white text-[#1a0f1f] border-[#e8decb] hover:bg-slate-50'
                }`}
              >
                <span>Monochrome High Contrast</span>
                <span
                  className={`w-3.5 h-3.5 rounded-full ${
                    highContrast ? 'bg-[#c9a24b]' : 'bg-slate-300'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Reset All */}
          <div className="pt-2 border-t border-[#e8decb]">
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center space-x-1.5 py-2 text-xs font-semibold text-[#5e5261] hover:text-[#1a0f1f] hover:bg-white rounded-xl transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
