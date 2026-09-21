'use client'

import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { BrandLogo } from './brand-logo'
import { DISCORD_URL, NAV_LINKS } from './site-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 w-[min(1200px,94%)] rounded-2xl glass-strong px-4 py-3 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between gap-4">
          <a href="#topo" className="flex items-center gap-3" aria-label="DVZ Enterprise — início">
            <BrandLogo className="h-9 w-9 shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-[0.18em] text-white">DVZ ENTERPRISE</span>
              <span className="mt-1 text-[10px] font-medium tracking-[0.22em] text-brand-gold-soft">
                ORGANIZAR · EXECUTAR · EVOLUIR
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-sm font-semibold text-white shadow-[0_6px_24px_-6px_rgba(95,159,212,0.5)] transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Entrar no Discord
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="mt-3 grid gap-1 border-t border-white/10 pt-3 lg:hidden" aria-label="Navegação móvel">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-sm font-semibold text-white sm:hidden"
            >
              Entrar no Discord
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
