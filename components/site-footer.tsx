import { ArrowUpRight } from 'lucide-react'
import { BrandLogo } from './brand-logo'
import { DISCORD_URL, NAV_LINKS } from './site-data'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-10 border-t border-white/10 py-14">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="rounded-3xl glass-strong p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <BrandLogo className="h-10 w-10" />
                <div>
                  <p className="text-sm font-bold tracking-[0.18em] text-white">DVZ ENTERPRISE</p>
                  <p className="mt-1 text-[10px] font-medium tracking-[0.22em] text-brand-gold-soft">
                    ORGANIZAR · EXECUTAR · EVOLUIR
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                A maior referência em gestão de comunidades corporativas no ambiente digital, guiada
                pela ordem, pela ética e pela busca contínua da excelência.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <nav aria-label="Rodapé">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-soft">
                  Navegação
                </p>
                <ul className="mt-4 space-y-2.5">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-300 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-soft">
                  Comunidade
                </p>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-navy-deep transition-transform hover:scale-[1.03]"
                >
                  Entrar no Discord
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-500">
              © {year} DVZ Enterprise. Todos os direitos reservados.
            </p>
            <p className="text-xs text-slate-500">
              Estrutura societária e mercado financeiro simulados para fins de engajamento.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
