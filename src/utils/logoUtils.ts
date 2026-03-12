// Utility to handle logo imports with fallback between .png and .jpg/.jpeg
export const getLogoSrc = () => {
  try {
    // Try to import .png first
    return new URL('../assets/logo.png', import.meta.url).href;
  } catch {
    try {
      // Fallback to .jpg
      return new URL('../assets/logo.jpg', import.meta.url).href;
    } catch {
      try {
        // Fallback to .jpeg
        return new URL('../assets/logo.jpeg', import.meta.url).href;
      } catch {
        // Final fallback to public folder
        return '/logo.png';
      }
    }
  }
};