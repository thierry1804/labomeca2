import React, { useEffect, useRef } from 'react';

interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  image?: string;
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
            entry.target.classList.add('opacity-100', 'translate-x-0');
            entry.target.classList.remove('opacity-0', 'translate-x-5');
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
    <div className="relative w-full">
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-[#000]" />
      <div className="flex justify-between items-start space-x-4 h-full">
        {entries.map((entry, index) => (
          <div
            key={index}
            ref={(el) => (entryRefs.current[index] = el)}
            className="relative bg-[#000] rounded-lg p-6 shadow-lg w-1/4 opacity-0 translate-x-5 transition-all duration-600 ease-out flex flex-col h-full"
          >
            <div className="absolute w-3.5 h-3.5 rounded-full bg-[#000] -top-2 left-1/2 transform -translate-x-1/2" />
            <div className="flex-1 flex flex-col">
              <h3 className="text-[#F67122] text-lg font-semibold mb-2">
                {entry.date} — {entry.title}
              </h3>
              <p className="text-[#ddd] mb-4 flex-1">{entry.description}</p>
            </div>
            {entry.image && (
              <div className="mt-auto">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full max-h-32 object-cover rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabomecaTimeline; 