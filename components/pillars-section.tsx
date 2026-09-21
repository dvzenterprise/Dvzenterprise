import { SectionHeading } from './section-heading'

const PILLARS = [
  {
    role: 'Líderes',
    element: 'Base Curvada em Gancho',
    height: 'h-28',
    hook: true,
    desc: 'Visão de futuro, autoridade e capacidade de alterar rotas. Dão o impulso inicial, definem diretrizes de longo prazo e asseguram tomadas de decisão cirúrgicas.',
  },
  {
    role: 'Gestores',
    element: 'Coluna Central Equilibrada',
    height: 'h-40',
    hook: false,
    desc: 'Eixo de estabilidade e conexão entre o topo e o operacional. Atuam no alinhamento de processos, monitoramento de métricas e eficiência interna.',
  },
  {
    role: 'Staffs',
    element: 'Coluna Retangular Elevada',
    height: 'h-52',
    hook: false,
    desc: 'Base de sustentação técnica e operacional. Garantem o rigor tático, a moderação ativa, o suporte direto aos membros e a execução diária das diretrizes.',
  },
]

export function PillarsSection() {
  return (
    <section id="bastoes" className="py-20 sm:py-28">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeading
          eyebrow="Identidade Visual"
          title="Os Três Bastões"
          description="O isotipo geométrico representa a sustentação e o equilíbrio dinâmico da instituição. Suas três colunas espelham a cadeia hierárquica."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <article
              key={p.role}
              className="flex flex-col rounded-3xl glass-strong p-8 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-end justify-center gap-2 rounded-2xl bg-brand-navy-deep/60 p-6" aria-hidden="true">
                {/* Representação visual da coluna */}
                {p.hook ? (
                  <svg
                    viewBox="0 0 48 160"
                    className={`w-12 ${p.height}`}
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="bastao-j" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="var(--color-brand-gold)" />
                        <stop offset="1" stopColor="var(--color-brand-blue)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M34 6 L34 108 C34 138 24 150 6 154"
                      stroke="url(#bastao-j)"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <span className={`w-6 rounded-md bg-gradient-to-t from-brand-blue to-brand-gold ${p.height}`} />
                )}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold text-sm font-bold text-brand-navy-deep">
                  {i + 1}
                </span>
                <h3 className="text-xl font-bold text-white">{p.role}</h3>
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-gold-soft">
                {p.element}
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
