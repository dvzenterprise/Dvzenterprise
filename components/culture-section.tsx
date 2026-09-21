import { Bell, FileWarning, Ban, Gavel, ShieldCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'

const SANCTIONS = [
  {
    icon: Bell,
    title: 'Notificação / Advertência Verbal',
    desc: 'Faltas de menor gravidade, com caráter educativo.',
  },
  {
    icon: FileWarning,
    title: 'Advertência Formal',
    desc: 'Registrada no histórico e prontuário do membro.',
  },
  {
    icon: Gavel,
    title: 'Suspensão Temporária',
    desc: 'Mute, timeout ou remoção de cargos e acessos corporativos.',
  },
  {
    icon: Ban,
    title: 'Desligamento & Banimento',
    desc: 'Reincidência grave ou violação direta ao Código de Ética.',
  },
]

export function CultureSection() {
  return (
    <section id="cultura" className="py-20 sm:py-28">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeading
          eyebrow="Cultura & Código de Ética"
          title="Filosofia Kaizen e respeito radical"
          description="Melhoria contínua de 1% ao dia, integridade executiva e um devido processo justo pautam toda a convivência."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl glass-strong p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold text-brand-navy-deep">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-white">Diretrizes Inegociáveis</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
              {[
                'Filosofia Kaizen: compromisso perpétuo com a melhoria contínua.',
                'Integridade Executiva: honestidade, transparência e lealdade às normas.',
                'Estrutura de S.A.: hierarquia, delegação e responsabilidade administrativa.',
                'Respeito Estrito e Radical: dignidade e diplomacia em todas as instâncias.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl glass p-8">
            <h3 className="text-xl font-bold text-white">Regime Disciplinar</h3>
            <p className="mt-2 text-sm text-slate-400">
              Sanções aplicadas com proporcionalidade e razoabilidade, garantido o contraditório e a
              ampla defesa em canal oficial de petição.
            </p>

            <ol className="mt-8 space-y-4">
              {SANCTIONS.map((s, i) => (
                <li key={s.title} className="relative flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/50 text-brand-gold ring-1 ring-white/10">
                    <s.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1 rounded-2xl bg-white/[0.03] p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-brand-gold-soft">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h4 className="font-semibold text-white">{s.title}</h4>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
