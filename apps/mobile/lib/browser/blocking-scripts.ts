// Enhanced ad and autoplay blocking script
export const enhancedBlockingScript = `
(function() {
  // Block common ad selectors
  const adSelectors = [
    'div[id*="google_ads"]',
    'div[id*="ad-"]',
    'div[class*="ad-"]',
    'div[class*="Ad"]',
    'div[class*="advertisement"]',
    'div[id*="banner"]',
    'div[class*="banner"]',
    'div[class*="popup"]',
    'div[id*="popup"]',
    'div[class*="sponsor"]',
    'div[class*="modal"]',
    'iframe[src*="doubleclick"]',
    'iframe[src*="googlesyndication"]',
    'iframe[src*="youtube.com/embed"]',
    'iframe[src*="player.vimeo.com/video"]',
    '.video-ads',
    '.adsbygoogle',
    'ins.adsbygoogle',
    'div[aria-label="Advertisement"]',
    'div[data-ad]',
    'div[class*="cookie"]',
    'div[id*="cookie"]',
    'div.overlay',
    'div.modal',
    'div.push-overlay',
    'div.app-container-overlay',
    'div.app-download-container',
    'div[class*="newsletter"]',
    'div.sticky-footer',
    'div.sticky-banner'
  ];
  
  // Enhanced video blocking - target all major video elements
  function disableVideoAutoplay() {
    // Handle HTML5 video elements
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      // Force pause and disable autoplay
      video.pause();
      video.autoplay = false;
      video.muted = true;
      video.setAttribute('preload', 'none');
      
      // Remove autoplay attribute
      video.removeAttribute('autoplay');
      
      // Prevent video from playing using event listeners
      const preventPlayback = (e) => {
        e.preventDefault();
        video.pause();
        return false;
      };
      
      // Add event listeners to prevent automatic play
      video.addEventListener('play', preventPlayback, true);
      video.addEventListener('playing', preventPlayback, true);
      
      // If the video is in an iframe, try to access it if possible
      if (video.parentElement && video.parentElement.tagName === 'IFRAME') {
        try {
          const iframeDoc = video.parentElement.contentDocument || video.parentElement.contentWindow.document;
          const iframeVideos = iframeDoc.querySelectorAll('video');
          iframeVideos.forEach(v => {
            v.pause();
            v.autoplay = false;
          });
        } catch (e) {
          // Cannot access iframe content due to same-origin policy
        }
      }
    });
    
    // Handle iframe embedded videos
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      // YouTube specific handling
      if (iframe.src.includes('youtube.com/embed/')) {
        // Force no autoplay by rewriting the src attribute
        if (iframe.src.includes('autoplay=1')) {
          iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
        }
        // Add autoplay=0 parameter if not present
        else if (!iframe.src.includes('autoplay=0')) {
          iframe.src = iframe.src + (iframe.src.includes('?') ? '&' : '?') + 'autoplay=0';
        }
      }
      
      // Vimeo specific handling
      if (iframe.src.includes('player.vimeo.com/video')) {
        if (iframe.src.includes('autoplay=1')) {
          iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
        } else if (!iframe.src.includes('autoplay=0')) {
          iframe.src = iframe.src + (iframe.src.includes('?') ? '&' : '?') + 'autoplay=0';
        }
      }
      
      // Generic handling for other iframe-based video players
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const iframeVideos = iframeDoc.querySelectorAll('video');
        iframeVideos.forEach(video => {
          video.pause();
          video.autoplay = false;
        });
      } catch (e) {
        // Cannot access iframe content due to same-origin policy
      }
    });
    
    // Disable HTML5 autoplay API
    Object.defineProperty(HTMLMediaElement.prototype, 'autoplay', {
      set: function() { return false; },
      get: function() { return false; }
    });
    
    // Override play method
    const originalPlay = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function() {
      // Allow play only with user interaction (within 1 second of last user interaction)
      const now = new Date().getTime();
      if (window.lastUserInteraction && now - window.lastUserInteraction < 1000) {
        return originalPlay.apply(this);
      }
      return Promise.reject(new DOMException('Blocked autoplay', 'NotAllowedError'));
    };
    
    // Track user interactions
    ['click', 'touchstart', 'keydown'].forEach(eventType => {
      document.addEventListener(eventType, () => {
        window.lastUserInteraction = new Date().getTime();
      }, true);
    });
  }
  
  // Helper to remove ad elements
  function removeAds() {
    adSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.style.display = 'none';
      });
    });
    
    // Remove fixed/sticky positioned elements that might be ads
    const allElems = document.querySelectorAll('div, aside, section');
    allElems.forEach(el => {
      const style = window.getComputedStyle(el);
      if (
        (style.position === 'fixed' || style.position === 'sticky') && 
        !el.classList.contains('navigation') && 
        !el.classList.contains('header') &&
        !el.id.includes('nav') &&
        !el.id.includes('header')
      ) {
        // Check if it's small enough to be an ad but not a navigation bar
        if (
          el.offsetHeight < window.innerHeight * 0.5 && 
          el.offsetWidth < window.innerWidth * 0.9 &&
          el.offsetHeight > 10 // Avoid removing very small elements like dots
        ) {
          el.style.display = 'none';
        }
      }
    });
    
    // Block pop-ups
    window.open = function() { return null; };
  }
  
  // Run initially
  removeAds();
  disableVideoAutoplay();
  
  // Run periodically
  setInterval(removeAds, 1000);
  setInterval(disableVideoAutoplay, 1000);
  
  // Run after content changes
  const observer = new MutationObserver(function(mutations) {
    removeAds();
    disableVideoAutoplay();
  });
  
  // Start observing the document with configured parameters
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Block common tracking scripts
  const noop = function() {};
  // Google Analytics
  window.ga = noop;
  window.gtag = noop;
  window.__gaTracker = noop;
  // Facebook Pixel
  window.fbq = noop;
  
  // Try to prevent scroll blocking
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
  
  // Disable autoplay for HTML5 audio elements too
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach(audio => {
    audio.pause();
    audio.autoplay = false;
    audio.muted = true;
  });
  
  true; // Needed for webview injection
})();
`;

// The list of blocked domains for ad and tracker blocking
export const blockedDomains = [
  "doubleclick.net",
  "googleadservices.com",
  "googlesyndication.com",
  "adservice.google",
  "analytics.google",
  "facebook.com/tr",
  "advertising.com",
  "adnxs.com",
  "taboola.com",
  "outbrain.com",
  "zedo.com",
  "criteo.com",
  "juicyads.com",
  "quantserve.com",
  "scorecardresearch.com",
  // Video ad platforms
  "syndication.twitter.com",
  "platform.twitter.com/widgets",
  "connect.facebook.net",
  "platform.instagram.com",
  "embedly.com",
  "cdn.vidible.tv",
  "imasdk.googleapis.com", // Google IMA SDK (video ads)
  "s0.2mdn.net", // Google video ads
  "innovid.com", // Video ad tech
  "serving-sys.com", // Video ad serving
  "springserve.com", // Video ad platform
  "spotxchange.com" // Video ad platform
];

// Utils for working with URLs
export const urlUtils = {
  getHostname: (urlString: string): string => {
    try {
      return new URL(urlString).hostname;
    } catch (e) {
      return urlString;
    }
  },

  isInternalUrl: (urlString: string, internalDomains: string[]): boolean => {
    try {
      const hostname = new URL(urlString).hostname;
      return internalDomains.some(domain => hostname.includes(domain));
    } catch (e) {
      return false;
    }
  },

  hasAutoplayParam: (urlString: string): boolean => {
    const url = urlString.toLowerCase();
    return url.includes("autoplay=1") ||
      url.includes("auto_play=true") ||
      url.includes("autoplay=true");
  }
};