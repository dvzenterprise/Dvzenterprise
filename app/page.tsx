import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { FounderSection } from '@/components/founder-section'
import { FoundationSection } from '@/components/foundation-section'
import { PillarsSection } from '@/components/pillars-section'
import { SocietySection } from '@/components/society-section'
import { CultureSection } from '@/components/culture-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-dvh bg-brand-radial text-slate-100">
      <SiteHeader />
      <main>
        <HeroSection />
        <FounderSection />
        <FoundationSection />
        <PillarsSection />
        <SocietySection />
        <CultureSection />
      </main>
      <SiteFooter />
    </div>
  )
}
