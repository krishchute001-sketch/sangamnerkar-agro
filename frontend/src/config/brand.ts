/**
 * Centralized Brand & Business Configuration for Sangamnerkar Agro
 * 
 * Edit business details, prices, phone numbers, and license placeholders here.
 */

export const BRAND_CONFIG = {
  companyName: 'Sangamnerkar Agro',
  tagline: 'Heritage Black Rice & Balaghat Chinnor Rice',
  locationCity: 'Nagpur',
  region: 'Vidarbha, Maharashtra, India',
  
  // Contact details
  phoneDisplay: '+91 99239 00943',
  phoneRaw: '919923900943',
  email: 'exportsangamnerkaragro@gmail.com',
  address: 'Plot No. 6, Pragati Nagar, Ranala, Kamptee, Nagpur, Maharashtra, India',
  addressShort: 'Nagpur, Maharashtra, India',
  
  // WhatsApp Link Helper
  whatsappDefaultMsg: 'Hello Sangamnerkar Agro, I would like to order premium rice.',
  getWhatsappUrl: (customMessage?: string) => {
    const text = encodeURIComponent(customMessage || 'Hello Sangamnerkar Agro, I would like to order premium rice.');
    return `https://wa.me/919923900943?text=${text}`;
  },

  // Social Links
  linkedinUrl: 'https://www.linkedin.com/company/rural-roots-india/',
  
  // Experience & Trust
  experienceYears: '6+ Years',
  trustHeadline: 'Trusted Rice Purveyors in Nagpur',

  // Regulatory & License Placeholders (Replace with your actual registered details)
  fssaiNumber: '21523000000000', // PLACEHOLDER: Replace with your actual 14-digit FSSAI number
  giDesignation: 'GI-696 Balaghat Chinnor',

  // Products with selectable weights & prices
  products: {
    blackRice: {
      id: 'black-rice',
      name: 'Sangamnerkar Royal Black Rice',
      varietyName: 'Manipur Chak-Hao Heirloom',
      shortBenefit: 'Naturally nutrient-rich heirloom grain with a delicate nutty aroma and deep purple bran.',
      description: 'Cultivated from traditional heirloom seed lineages. Renowned for natural anthocyanin antioxidants, dietary fiber, and a nutty culinary profile prized by chefs.',
      weightOptions: [
        { label: '1 kg Vacuum Pack', weightKg: 1, priceInr: 320, isPopular: false },
        { label: '5 kg Family Pack', weightKg: 5, priceInr: 1500, isPopular: true },
        { label: '25 kg Wholesale Sack', weightKg: 25, priceInr: 7200, isPopular: false },
      ],
    },
    chinnorRice: {
      id: 'chinnor-rice',
      name: 'Royal Balaghat Chinnor Rice',
      varietyName: 'GI-Tagged Indigenous Fragrant Grain',
      shortBenefit: 'Traditional GI-designated aromatic grain celebrated for exceptional tenderness and natural fragrance.',
      description: 'Grown in the Wainganga river basin of Balaghat. Naturally slender with a delicate floral aroma and soft, tender texture when steamed.',
      weightOptions: [
        { label: '1 kg Bag', weightKg: 1, priceInr: 160, isPopular: false },
        { label: '5 kg Bag', weightKg: 5, priceInr: 750, isPopular: true },
        { label: '25 kg Catering Sack', weightKg: 25, priceInr: 3500, isPopular: false },
      ],
    },
  },
} as const;

export default BRAND_CONFIG;
