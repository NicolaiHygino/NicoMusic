import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) setMatches(media.matches);

    const onQueryBreakpoint = () => setMatches(media.matches);

    media.addEventListener('change', onQueryBreakpoint);

    return () => media.removeEventListener('change', onQueryBreakpoint);
  }, [matches, query]);

  return matches;
};
