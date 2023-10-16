import { useEffect, useState } from 'react';

export default function Home() {
  const text = "Start Learning";
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 70); 

      return () => {
        clearTimeout(timeout);
      };
    } else {
      setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
      }, 1000); 
    }
  }, [currentIndex, text]);

  return (
    <div>
      <h1>{displayText}</h1>
    </div>
  );
}
