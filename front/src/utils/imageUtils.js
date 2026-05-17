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
export function getWatermarkedVideoUrl(url, logoPublicId = 'My Brand:vidlogo_otz1ll', crop = '') {
  if (!url || !url.includes('cloudinary.com')) return url;

  // We want to insert the transformation after '/video/upload/'
  // Transformation: l_logoPublicId,w_150,g_south_east,o_70,x_20,y_20
  // Note: For Public IDs with folders, '/' must be replaced by ':'
  // For spaces, we use %20
  const encodedLogoId = logoPublicId.replace(/\//g, ':').replace(/ /g, '%20');
  
  // Apply the crop transformation first if provided (e.g., 'c_fill,w_700,h_400/'), then the watermark
  const cropTransform = crop ? `${crop}/` : '';
  const watermarkTransform = `${cropTransform}l_${encodedLogoId},w_150,g_north_west,o_70,x_20,y_20/`;
  
  if (url.includes('/video/upload/')) {
    return url.replace('/video/upload/', `/video/upload/${watermarkTransform}`);
  }
  
  return url;
}

export function getVideoThumbnailUrl(url) {
  if (!url || typeof url !== 'string') return '';
  
  if (url.includes('cloudinary.com')) {
    // Replace extension at the end of URL with .jpg
    let thumbnailUrl = url.replace(/\.[^/.]+$/, '.jpg');
    
    // Add start-offset of 1 second (so_1) to ensure we don't get a black/blank frame from the very start of the video
    if (thumbnailUrl.includes('/video/upload/')) {
      // If there are existing transformations, prepend so_1 to them
      thumbnailUrl = thumbnailUrl.replace('/video/upload/', '/video/upload/so_1/');
    }
    
    return thumbnailUrl;
  }
  
  // Fallback for local or other video URLs (replace extension with jpg as a best effort)
  if (url.startsWith('/') || url.startsWith('http')) {
    return url.replace(/\.[^/.]+$/, '.jpg');
  }
  
  return '';
}
