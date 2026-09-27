import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { FooterSection } from './components/sections/FooterSection';
import { authorData } from './data/portfolioData';

export const App: React.FC = () => {
  const [cvNotification, setCvNotification] = useState<string | null>(null);

  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = authorData.cvUrl;
    link.download = 'Vuong-Thanh-Trung-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCvNotification('Đang tải xuống CV: ' + authorData.cvUrl);
    setTimeout(() => setCvNotification(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] selection:bg-[#E5D7C5] selection:text-[#1C1917] font-sans antialiased overflow-x-hidden">
      {/* 00. Minimal Navigation */}
      <Navbar onDownloadCv={handleDownloadCv} />

      <main>
        {/* 01. Hero — 3D Workspace / Creative Desk */}
        <Hero onDownloadCv={handleDownloadCv} />

        {/* 02. About — Very short statement with moodboard visual */}
        <AboutSection />

        {/* 03. Selected Work — 4 distinct large editorial showcases */}
        <FeaturedProjects />

        {/* 04. What I Do — Extremely concise, typography & spacing, no UI cards */}
        <SkillsSection />

        {/* 05. Contact — Minimal final section */}
        <ContactSection onDownloadCv={handleDownloadCv} />
      </main>

      {/* 06. Ultra-minimal Footer */}
      <FooterSection />

      {/* CV Notification Toast */}
      {cvNotification && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-[#1C1917] text-white text-xs font-mono shadow-2xl flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{cvNotification}</span>
        </div>
      )}
    </div>
  );
};

export default App;
