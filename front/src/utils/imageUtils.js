export const FALLBACK_IMAGE = '/placeholder-travel.svg';

export function normalizeImageUrl(url) {
  if (!url || typeof url !== 'string') {
    return FALLBACK_IMAGE;
  }

  if (!url.includes('images.unsplash.com')) {
    return url;
  }

  try {
    const parsed = new URL(url);
    if (!parsed.searchParams.has('auto')) {
      parsed.searchParams.set('auto', 'format');
    }
    if (!parsed.searchParams.has('q')) {
      parsed.searchParams.set('q', '80');
    }
    return parsed.toString();
  } catch (error) {
    return url;
  }
}
