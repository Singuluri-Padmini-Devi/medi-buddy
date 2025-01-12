import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { QuickActions } from './components/QuickActions';
import { PromoBanner } from './components/PromoBanner';
import { FeaturedPackages } from './components/FeaturedPackages';
import { ActiveBookings } from './components/ActiveBookings';
import { PopularTests } from './components/PopularTests';
import { LifestylePackages } from './components/LifestylePackages';
import { HowItWorks } from './components/HowItWorks';
import { SafetyMeasures } from './components/SafetyMeasures';
import { FAQ } from './components/FAQ';
import { fetchPageConfig } from './services/api';
import type { PageConfig } from './types';

export default function App() {
  const [pageConfig, setPageConfig] = useState<PageConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPageConfig = async () => {
      try {
        const data = await fetchPageConfig();
        setPageConfig(data);
      } catch (err) {
        setError('Failed to load page data');
      } finally {
        setLoading(false);
      }
    };

    loadPageConfig();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-8">
        <QuickActions config={pageConfig.find(c => c.id === 1)?.props} />
        <PromoBanner config={pageConfig.find(c => c.id === 2)?.props} />
        <FeaturedPackages config={pageConfig.find(c => c.id === 3)?.props} />
        <ActiveBookings config={pageConfig.find(c => c.id === 4)?.props} />
        <PopularTests config={pageConfig.find(c => c.id === 5)?.props} />
        <LifestylePackages config={pageConfig.find(c => c.id === 6)?.props} />
        <HowItWorks config={pageConfig.find(c => c.id === 7)?.props} />
        <SafetyMeasures config={pageConfig.find(c => c.id === 8)?.props} />
        <FAQ config={pageConfig.find(c => c.id === 9)?.props} />
      </main>
    </div>
  );
}