import React, { useEffect, useRef } from 'react';

interface TimelineEntry {
  date: string;
  title: string;
  description: string;
}

interface LabomecaTimelineProps {
  entries: TimelineEntry[];
}

const LabomecaTimeline: React.FC<LabomecaTimelineProps> = ({ entries }) => {
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-5');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    entryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative max-w-2xl">
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#000] -ml-0.5" />
      <div className="space-y-6">
        {entries.map((entry, index) => (
          <div
            key={index}
            ref={(el) => (entryRefs.current[index] = el)}
            className="relative bg-[#000] rounded-lg p-6 shadow-lg ml-12 opacity-0 translate-y-5 transition-all duration-600 ease-out"
          >
            <div className="absolute w-3.5 h-3.5 rounded-full bg-[#000] -left-7 top-6" />
            <h3 className="text-[#F67122] text-lg font-semibold mb-2">
              {entry.date} — {entry.title}
            </h3>
            <p className="text-[#ddd]">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabomecaTimeline; 