import { Briefcase, Users, Brain } from 'lucide-react'
import { SectionHeading } from './section-heading'

const AXES = [
  {
    icon: Briefcase,
    title: 'Negócios',
    desc: 'Prospecção de oportunidades, captação de patrocínios e negociações complexas apoiadas nas melhores metodologias da ciência da Administração.',
  },
  {
    icon: Users,
    title: 'Networking Executivo',
    desc: 'Parcerias táticas e conexões estratégicas em um ambiente neutro e diplomático que promove pontes de cooperação entre comunidades.',
  },
  {
    icon: Brain,
    title: 'Pensamento Crítico',
    desc: 'Racionalismo, debate intelectual elevado e inovação contínua como base para decisões cirúrgicas e visão de futuro.',
  },
]

export function FoundationSection() {
  return (
    <section id="fundacao" className="py-20 sm:py-28">
      <div className="mx-auto w-[min(1200px,92%)]">
        <SectionHeading
          eyebrow="Fundação & Propósito"
          title="Um hub construído sobre três eixos"
          description="O DVZ Enterprise estabelece-se como um hub de alta performance dedicado a reunir, selecionar e aperfeiçoar profissionais de excelência."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {AXES.map((axis) => (
            <article
              key={axis.title}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition-transform hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-gold/10 blur-2xl transition-opacity group-hover:opacity-80"
              />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/50 text-brand-gold ring-1 ring-white/10">
                <axis.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="relative mt-6 text-xl font-bold text-white">{axis.title}</h3>
              <p className="relative mt-3 leading-relaxed text-slate-300">{axis.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
