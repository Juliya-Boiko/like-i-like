import { useState, useEffect } from 'react';
import { ScrollBlock, ScrollIcon } from './Scroll.styled';

export const Scroll = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

  return (
    <ScrollBlock>
      {showTopBtn && <ScrollIcon size="30px" onClick={goToTop} /> }
    </ScrollBlock>
  );
};