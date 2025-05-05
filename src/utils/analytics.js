/**
 * Push an event to the dataLayer
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Additional parameters for the event
 */
export const pushEvent = (eventName, eventParams = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });
    console.log(`Event pushed to dataLayer: ${eventName}`, eventParams);
  } else {
    console.error('dataLayer not found. Event not pushed:', eventName, eventParams);
  }
};

/**
 * Track page view
 * @param {string} pagePath - Path of the page
 * @param {string} pageTitle - Title of the page
 */
export const trackPageView = (pagePath, pageTitle) => {
  pushEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle
  });
};

/**
 * Check if Google Tag Manager is loaded
 * @returns {boolean}
 */
export const isGTMLoaded = () => {
  return (
    window.google_tag_manager && 
    window.google_tag_manager['GTM-P83SGBB6']
  );
};

/**
 * Debug GTM loading status
 */
export const debugGTM = () => {
  console.log('GTM Loaded:', isGTMLoaded());
  console.log('dataLayer exists:', !!window.dataLayer);
  if (window.dataLayer) {
    console.log('dataLayer content:', [...window.dataLayer]);
  }
};

// Call this in your main component
// import { debugGTM } from './utils/analytics';
// useEffect(() => { debugGTM(); }, []);
