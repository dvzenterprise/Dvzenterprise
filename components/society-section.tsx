import { TrendingUp, Landmark, Users2, Briefcase } from 'lucide-react'
import { SectionHeading } from './section-heading'

const METRICS = [
  { label: 'Código do Ticker', value: 'DVZE' },
  { label: 'Total de Ações Emitidas', value: '100.000' },
  { label: 'Preço Base de Emissão', value: '10 Créditos' },
  { label: 'Valor de Mercado Inicial', value: '1.000.000' },
]

const BODIES = [
  {
    icon: Landmark,
    title: 'Assembleia Geral de Acionistas',
    desc: 'Fórum deliberativo soberano para decisões estratégicas de grande impacto e alterações no regimento. Proporção de 1 ação = 1 voto.',
  },
  {
    icon: Users2,
    title: 'Conselho Consultivo e de Administração',
    desc: 'Responsável pela fiscalização orçamentária, auditoria de transparência e definição de diretrizes de expansão.',
  },
  {
    icon: Briefcase,
    title: 'Diretoria Executiva',
    desc: 'Corpo operacional de liderança responsável pela gestão cotidiana dos departamentos do servidor.',
  },
]

export function SocietySection() {
  return (
    <section id="societario" className="py-20 sm:py-28">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeading
          eyebrow="Modelo Societário"
          title="Uma Sociedade Anônima simulada"
          description="Uma economia interna baseada em engajamento, liderança e mérito, com governança simétrica às grandes corporações."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl glass-strong p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold text-brand-navy-deep">
                <TrendingUp className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-soft">
                  Bolsa DVZE
                </p>
                <p className="text-lg font-bold text-white">Parâmetros de Emissão</p>
              </div>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
              {METRICS.map((m) => (
                <div key={m.label} className="bg-brand-navy-deep/70 p-5">
                  <dt className="text-xs font-medium text-slate-400">{m.label}</dt>
                  <dd className="mt-1.5 text-2xl font-bold text-gold-gradient">{m.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-center text-xs text-slate-500">
              Valores expressos em Créditos. Estrutura simulada para fins de engajamento e mérito.
            </p>
          </div>

          <div className="grid gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold-soft">
              Órgãos de Governança Corporativa
            </p>
            {BODIES.map((body) => (
              <div
                key={body.title}
                className="flex items-start gap-4 rounded-2xl glass p-6 transition-colors hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/50 text-brand-gold ring-1 ring-white/10">
                  <body.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-white">{body.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{body.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
