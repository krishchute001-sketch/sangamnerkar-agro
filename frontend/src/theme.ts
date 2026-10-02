/**
 * Sangamnerkar Agro - Central Theme Configuration
 *
 * Edit any values below to customize the brand palette, typography,
 * border radii, and soft shadows throughout the application.
 */

export const theme = {
  // Brand Color Palette
  colors: {
    // Primary Backgrounds & Surfaces
    cream: '#FBF6EE',           // Main warm cream website background
    creamSurface: '#F5ECE0',    // Subtle contrasting warm card / hero container
    cardWhite: '#FFFFFF',       // Clean card surface
    cardWarm: '#FDFBF7',        // Soft ivory card surface
    
    // Core Brand Accents
    maroon: '#5A2A27',          // Deep maroon-brown for primary headings & title text
    maroonHover: '#441F1D',     // Darker maroon for hover/active states
    maroonMuted: '#784340',     // Medium warm maroon for subtle badges & subheadings
    
    // Natural Greens
    green: '#2F6B3A',           // Forest green for primary buttons, sublines, active links
    greenHover: '#24542D',      // Deep forest green on hover
    greenLight: '#EAF3EC',      // Soft mint green background tint
    
    // Warm Gold Accents
    gold: '#C9962B',            // Warm heritage gold for icons, badges, accents
    goldLight: '#FDF7EB',       // Soft gold tinted container
    goldBorder: '#DFBA6A',      // Subtle golden border
    
    // Text & Reading Neutrals
    textPrimary: '#2C221E',     // Deep espresso for readable body copy
    textMuted: '#665952',       // Warm muted grey for descriptions
    textSubtle: '#9A8E87',      // Subtle captions and metadata
    
    // Dividers & Borders
    borderWarm: '#E8DEC8',      // Soft warm border for cards and dividers
    borderLight: '#F0E8DC',     // Very soft divider line
  },

  // Typography Families (configured in index.html & index.css)
  fonts: {
    heading: "'Fraunces', serif",
    body: "'Plus Jakarta Sans', sans-serif",
  },

  // Component Border Radii
  radii: {
    card: '28px',
    heroCard: '36px',
    button: '16px',
    pill: '9999px',
  },

  // Elevation & Soft Shadows
  shadows: {
    soft: '0 8px 30px rgba(90, 42, 39, 0.05)',
    card: '0 12px 36px rgba(90, 42, 39, 0.07)',
    hero: '0 20px 50px rgba(90, 42, 39, 0.08)',
  },

  // Brand Contact Links
  contact: {
    phoneDisplay: '+91 99239 00943',
    phoneTel: '+919923900943',
    whatsappNumber: '919923900943',
    whatsappUrl: 'https://wa.me/919923900943?text=Hello%20Sangamnerkar%20Agro%2C%20I%20would%20like%20to%20order%20premium%20rice.',
    location: 'Nagpur, Maharashtra, India',
    address: 'Plot No. 6, Pragati Nagar, Ranala, Kamptee, Nagpur, Maharashtra, India',
    addressShort: 'Plot No. 6, Pragati Nagar, Ranala, Kamptee, Nagpur, Maharashtra',
    linkedinUrl: 'https://www.linkedin.com/company/rural-roots-india/',
    experienceYears: '6+ Years',
  },
} as const;

export type Theme = typeof theme;
