import React, { useEffect } from 'react';
import ActivityLogSection from '../sections/ActivityLogSection';

export default function ActivityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative z-10 pb-32 pt-24 min-h-screen">
      <ActivityLogSection />
    </main>
  );
}
