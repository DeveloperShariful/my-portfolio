// src/components/FadeInSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // সেকশনের ১০% দেখা গেলেই অ্যানিমেশন শুরু হবে
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInSection;