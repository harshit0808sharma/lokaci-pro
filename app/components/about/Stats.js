'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Stats() {
  const stats = [
    { value: 5, suffix: "+", label: "Years of Service" },
    { value: 5000, suffix: "+", label: "Happy Clients" },
    { value: 15, suffix: "+", label: "Professional Stylists" },
    { value: 100, suffix: "%", label: "Satisfaction" },
  ];

  return (
    <section className="bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let end = value;
    let duration = 1500; // milliseconds
    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      const currentCount = Math.floor(progressRatio * end);

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(animate);
  }, [value]);

  // For large numbers like 5000, format as '5k+'
  function formatNumber(num) {
    if (num >= 1000) return (num / 1000).toFixed(0) + "k";
    return num;
  }

  return (
    <h3 className="text-3xl md:text-4xl font-bold text-pink-500">
      {formatNumber(count)}
      {suffix}
    </h3>
  );
}
