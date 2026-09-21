import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { BrandLogo } from './brand-logo'
import { DISCORD_URL } from './site-data'

export function HeroSection() {
  return (
    <section id="topo" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Grid decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto w-[min(1200px,92%)] text-center">
        <div className="mx-auto flex max-w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-brand-gold-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
          Hub de Alta Performance · Sociedade Anônima Simulada
        </div>

        <div className="mx-auto mt-8 flex justify-center">
          <BrandLogo className="h-16 w-16 drop-shadow-[0_0_24px_rgba(95,159,212,0.35)]" />
        </div>

        <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          DVZ <span className="text-gold-gradient">Enterprise</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-slate-300 sm:text-xl">
          <span className="font-semibold tracking-[0.2em] text-brand-gold-soft">
            ORGANIZAR · EXECUTAR · EVOLUIR
          </span>
          <br />
          Uma vanguarda de Líderes, Gestores e Staff dedicada a Negócios, Networking Executivo e
          Pensamento Crítico Racionalista.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_40px_-8px_rgba(95,159,212,0.5)] transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Entrar no Discord
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#fundacao"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl glass px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Conhecer a instituição
            <ArrowDown className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { v: 'DVZE', l: 'Ticker Oficial' },
            { v: '100.000', l: 'Ações Emitidas' },
            { v: '3', l: 'Pilares de Atuação' },
            { v: 'Kaizen', l: 'Melhoria Contínua' },
          ].map((stat) => (
            <div key={stat.l} className="rounded-2xl glass px-4 py-5">
              <dt className="sr-only">{stat.l}</dt>
              <dd className="text-2xl font-bold text-gold-gradient sm:text-3xl">{stat.v}</dd>
              <p className="mt-1 text-xs font-medium tracking-wide text-slate-400">{stat.l}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
