export const removeNavbarScript = `
    // Function to remove the navbar
    function removeNavbar() {
      const navbar = document.getElementById('nav-bar');
      if (navbar) {
        navbar.style.display = 'none';
        // Or to completely remove it: navbar.parentNode.removeChild(navbar);
      }
    }
    
    // Execute immediately if document is already loaded
    if (document.readyState === 'complete') {
      removeNavbar();
    } else {
      // Otherwise wait for the DOM to be fully loaded
      document.addEventListener('DOMContentLoaded', removeNavbar);
    }
    
    // Also handle potential dynamic loading of the navbar after page load
    const observer = new MutationObserver(mutations => {
      const navbar = document.getElementById('nav-bar');
      if (navbar) {
        navbar.style.display = 'none';
      }
    });
    
    // Start observing once the document body is available
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      window.addEventListener('load', () => {
        observer.observe(document.body, { childList: true, subtree: true });
      });
    }
  `;