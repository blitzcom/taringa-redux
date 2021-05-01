import { useRouter } from 'next/router';
import { useEffect } from 'react';

function ObserverLink() {
  const router = useRouter();

  useEffect(() => {
    function observer(e) {
      const link = e.target.closest("[data-target='router'");

      if (link) {
        e.preventDefault();
        router.push(link.getAttribute('href'));
      }
    }

    document.addEventListener('click', observer);

    return () => document.removeEventListener('click', observer);
  }, [router]);

  return null;
}

export default ObserverLink;
