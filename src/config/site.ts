export const SITE = {
  name: 'edesigr.cloud',
  title: 'edesigr.cloud • Premium Domain for Sale | Electronic Designers & AI Creatives',
  description:
    'edesigr.cloud — The ultra-premium, ultra-concise cloud-native domain for electronic designers, generative artists, and AI-powered creative platforms. Modern. Scalable. Future-proof. Strategic acquisition available.',
  url: 'https://edesigr.cloud',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Arizona',
  googleSiteVerification: 'Vn6IiqZd8hm7mEkc9uZNtYxatGIN8hXRe4FFIM3NOfo',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'fb7221d2-dd3f-4e87-8831-df2f1bc06b00',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('edesigr.cloud Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring edesigr.cloud.\n\nIntended use:\nBudget range:\n\nThank you.')}`;
