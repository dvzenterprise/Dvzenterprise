import { cn } from '@/lib/utils'

/**
 * Isotipo dos "Três Bastões" do DVZ Enterprise.
 * Renderiza a logo oficial sobre uma placa clara para manter a legibilidade
 * do traço azul-aço em qualquer fundo (claro ou escuro).
 */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-xl bg-white ring-1 ring-black/5',
        className,
      )}
    >
      <img
        src="/images/dvz-logo.jpg"
        alt="Logo DVZ Enterprise: os três bastões"
        className="h-3/4 w-3/4 object-contain"
      />
    </span>
  )
}
