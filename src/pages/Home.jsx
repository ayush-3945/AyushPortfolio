import React from 'react';
import HeroBento from '../components/HeroBento';
import ActivityLogPreview from '../components/ActivityLogPreview';
import ProjectsSection from '../sections/ProjectsSection';
import CoalDarpanVisualizer from '../sections/CoalDarpanVisualizer';
import StackSection from '../sections/StackSection';
import ExperienceSection from '../sections/ExperienceSection';
import ArticleSection from '../sections/ArticleSection';
import ContactSection from '../sections/ContactSection';

export default function Home({ handleToggleWindow, scrollToSection }) {
  return (
    <main className="relative z-10 space-y-12 pb-32">
      {/* Hero Section */}
      <HeroBento
        onOpenWindow={handleToggleWindow}
        onScrollTo={scrollToSection}
      />

      {/* Activity Log Preview (Syslog) */}
      <ActivityLogPreview />

      {/* Featured Projects */}
      <ProjectsSection />

      {/* CoalDarpan AI Architecture Visualizer */}
      <CoalDarpanVisualizer />

      {/* Tech Stack Matrix */}
      <StackSection />

      {/* Experience & Journey */}
      <ExperienceSection />

      {/* Technical Writing & Case Studies */}
      <ArticleSection />

      {/* Direct Contact Form & Info */}
      <ContactSection />
    </main>
  );
}
