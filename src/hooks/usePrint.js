import { useEffect, useState } from 'react';

const usePrint = () => {
  const [isPrinting, setIsPrinting] = useState(false);

  const onPrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      document.documentElement.classList.add('is-printing');
      window.print();
    }, 0);
  };

  useEffect(() => {
    const closedPrint = () => {
      setIsPrinting(false);
      setTimeout(() => {
        document.documentElement.classList.remove('is-printing');
      }, 0);
    };

    window.addEventListener('afterprint', closedPrint);
    return () => window.removeEventListener('afterprint', closedPrint);
  }, []);

  return {
    onPrint,
    targetClassName: isPrinting ? 'is-printing-target' : '',
  };
};

export default usePrint;
