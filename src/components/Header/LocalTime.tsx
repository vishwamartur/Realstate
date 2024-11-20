import { useState, useEffect } from 'react';

function formatTime(date: Date, timezone: string): string {
  return date.toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

const locations = [
  { city: 'BANGALORE', timezone: 'Asia/Kolkata' },
  { city: 'MELBOURNE', timezone: 'Australia/Melbourne' },
  { city: 'ADELAIDE', timezone: 'Australia/Adelaide' }
];

export default function LocalTime() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const newTimes = locations.reduce((acc, { city, timezone }) => ({
        ...acc,
        [city]: formatTime(now, timezone)
      }), {});
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white/80 text-sm">
      {locations.map(({ city }) => (
        <div key={city}>
          {city}: {times[city] || '--:--'}
        </div>
      ))}
    </div>
  );
}