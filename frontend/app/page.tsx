import React from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/marketing/hero'
import { FeaturedProjects } from '@/components/marketing/featured-projects'
import { Stats } from '@/components/marketing/stats'
import { About } from '@/components/marketing/about'
import { Services } from '@/components/marketing/services'
import { EnterpriseCTA } from '@/components/marketing/cta'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tozdaght | Ultra-Premium Real Estate & Architecture',
  description: 'Enterprise-tier luxury real estate development and high-performance architectural solutions in Morocco.',
  openGraph: {
    title: 'Tozdaght | Ultra-Premium Real Estate',
    description: 'Bespoke architectural excellence.',
    images: ['/images/og-main.jpg'],
  },
}

export default async function LandingPage() {
  return (
    <div className="relative min-h-screen bg-secondary overflow-x-hidden selection:bg-gold selection:text-secondary">
      {/* 4K Global Noise Texture Background */}
      <div className="fixed inset-0 bg-luxury-noise pointer-events-none z-[60] opacity-[0.03] mix-blend-overlay" />
      
      <Header />

      <main className="relative">
        <Hero />
        
        {/* Transitional Depth Layer */}
        <div className="relative z-20 -mt-12">
           <Stats />
        </div>

        <FeaturedProjects />

        <div className="bg-cream/5 backdrop-blur-sm">
          <About />
        </div>

        <Services />

        <EnterpriseCTA />
      </main>

      <Footer />
    </div>
  )
}
