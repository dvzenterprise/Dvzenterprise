import { Quote, Compass, Target, Network } from 'lucide-react'
import { SectionHeading } from './section-heading'

const STED = [
  { icon: Compass, label: 'Estratégia', desc: 'Direção de longo prazo e leitura de cenário.' },
  { icon: Target, label: 'Tática', desc: 'Execução cirúrgica e disciplina operacional.' },
  { icon: Network, label: 'Networking', desc: 'Pontes de cooperação e parcerias de valor.' },
]

export function FounderSection() {
  return (
    <section id="fundador" className="py-20 sm:py-28">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeading
          eyebrow="O Fundador"
          title={<>DVZ, o arquiteto do método</>}
          description="Idealizador do DVZ Enterprise e especialista na estruturação de comunidades digitais de alta performance."
        />

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl glass-strong p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-slate-200">
              <span className="font-semibold text-white">DVZ</span> é especialista em Gestão
              Estratégica e criador do <span className="font-semibold text-brand-gold-soft">Método
              DVZ-STED</span>, uma metodologia que integra ciência da Administração, pensamento
              crítico racionalista e a Filosofia Kaizen para formar líderes e estruturar
              comunidades corporativas.
            </p>
            <p className="mt-5 leading-relaxed text-slate-300">
              Sob sua idealização, o DVZ Enterprise nasce como um hub dedicado a reunir, selecionar
              e aperfeiçoar Líderes, Gestores e Profissionais de Operações, oferecendo uma
              infraestrutura de alto nível para prospecção de negócios, parcerias táticas,
              captação de patrocínios e negociações complexas.
            </p>

            <figure className="mt-8 rounded-2xl border-l-2 border-brand-gold bg-white/[0.03] p-6">
              <Quote className="h-7 w-7 text-brand-gold" aria-hidden="true" />
              <blockquote className="mt-3 text-pretty text-lg font-medium italic leading-relaxed text-white">
                &ldquo;Toda grande estrutura precisa de um impulso que curva o destino e de pilares
                que sustentam o topo. No DVZ Enterprise, a visão que impulsiona se une à gestão que
                equilibra e à execução que sustenta.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold tracking-wide text-brand-gold-soft">
                — DVZ, Fundador &amp; Direção Executiva
              </figcaption>
            </figure>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl glass p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold-soft">
                Método DVZ-STED
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Um framework que orienta a formação de uma vanguarda pautada em Nobreza, Liberdade,
                Networking e Visionarismo.
              </p>
              <div className="mt-6 grid gap-3">
                {STED.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/40 text-brand-gold">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
