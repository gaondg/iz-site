import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola para o topo do documento (posição 0, 0) sempre que o 'pathname' mudar.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente não renderiza nada, apenas gerencia o efeito colateral
};

export default ScrollToTop;