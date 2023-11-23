import { useEffect, useState } from 'react';

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return completion;
};

export default useScrollProgress;
