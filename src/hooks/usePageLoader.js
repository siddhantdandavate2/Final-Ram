import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageLoader = (showDelay = 500, minLoadTime = 800) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let showTimer;
    let hideTimer;
    let isComponentMounted = true;
    
    const startTime = Date.now();
    
    // Start with loading false
    setLoading(false);
    
    // Set timer to show loader only if page takes longer than showDelay
    showTimer = setTimeout(() => {
      if (isComponentMounted) {
        setLoading(true);
        
        // Set timer to hide loader after minimum display time
        hideTimer = setTimeout(() => {
          if (isComponentMounted) {
            setLoading(false);
          }
        }, minLoadTime);
      }
    }, showDelay);
    
    // Simulate page load completion - this represents when the page is actually ready
    const pageLoadTimer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      
      if (elapsedTime < showDelay) {
        // Page loaded quickly, cancel showing the loader
        clearTimeout(showTimer);
        if (isComponentMounted) {
          setLoading(false);
        }
      }
      // If page took longer than showDelay, the loader is already showing
      // and will be hidden by the hideTimer
    }, 100); // Small delay to simulate actual page load
    
    return () => {
      isComponentMounted = false;
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(pageLoadTimer);
    };
  }, [location.pathname, showDelay, minLoadTime]);

  return loading;
};

export default usePageLoader;