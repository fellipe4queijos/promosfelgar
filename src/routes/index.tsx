import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const WHATSAPP_LINK = 'https://chat.whatsapp.com/SEU-LINK-AQUI'

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function CTAButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-pulse inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#17a852] text-white font-bold text-lg rounded-2xl px-8 py-4 transition-colors duration-200 no-underline ${className}`}
    >
      <WhatsAppIcon size={24} />
      QUERO ENTRAR NO GRUPO VIP
    </a>
  )
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10">
      <div className="w-14 h-14 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] text-2xl">
        {icon}
      </div>
      <h3 className="text-white font-bold text-base">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-10 h-10 rounded-full bg-[#25D366] text-white font-black text-lg flex items-center justify-center">
        {step}
      </div>
      <div>
        <h3 className="text-white font-bold text-base mb-1">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] pb-24 md:pb-0">

      {/* === HERO SECTION === */}
      <section className="relative overflow-hidden px-5 pt-12 pb-14 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Glow background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#25D366]/10 blur-3xl"
        />

        {/* Badge */}
        <div className="float-badge inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          100% Gratuito — Sem Taxa, Sem Pegadinha
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
          Pare de Pagar Mais Caro:{' '}
          <span className="text-[#25D366]">
            Receba as Melhores Ofertas da Internet
          </span>{' '}
          Direto no seu Celular.
        </h1>

        {/* Sub-headline */}
        <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
          Nossa inteligência monitora as maiores lojas{' '}
          <strong className="text-white/90">24h por dia</strong> e envia apenas
          promoções reais e bugs de preço.{' '}
          <strong className="text-white/90">100% Gratuito.</strong>
        </p>

        {/* CTA */}
        <CTAButton className="w-full max-w-sm text-xl py-5" />

        <p className="mt-4 text-white/35 text-xs">
          Mais de <strong className="text-white/55">12.000 membros</strong> já economizando todos os dias
        </p>
      </section>

      {/* === BENEFITS SECTION === */}
      <section className="px-5 py-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-black text-white text-center mb-8">
          Por que entrar no grupo?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <BenefitCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            }
            title="Economia Real"
            description="Filtramos as fraudes e enviamos apenas o menor preço real — sem 'de' inflado."
          />
          <BenefitCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            }
            title="Alertas de Bug"
            description="Saiba antes de todo mundo quando os preços despencam — bugs de até 80% off."
          />
          <BenefitCard
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
            }
            title="Zero Spam"
            description="Apenas administradores enviam mensagens. Sem correntes, sem propaganda, sem chateação."
          />
        </div>
      </section>

      {/* === HOW IT WORKS SECTION === */}
      <section className="px-5 py-12 max-w-2xl mx-auto">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
          <h2 className="text-2xl font-black text-white text-center mb-8">
            Como funciona?
          </h2>
          <div className="flex flex-col gap-6">
            <StepCard
              step="1"
              title="Clique no botão verde"
              description="Toque em 'QUERO ENTRAR NO GRUPO VIP' aqui na página."
            />
            <div className="border-l-2 border-dashed border-white/10 ml-5 h-4" aria-hidden="true" />
            <StepCard
              step="2"
              title="Entre no grupo do WhatsApp"
              description="Você será redirecionado diretamente para o link de convite. Um toque e pronto."
            />
            <div className="border-l-2 border-dashed border-white/10 ml-5 h-4" aria-hidden="true" />
            <StepCard
              step="3"
              title="Silencie e aproveite"
              description="Silencie as notificações (opcional) e confira os links de ofertas no seu tempo, todo dia."
            />
          </div>
          <div className="mt-8 flex justify-center">
            <CTAButton className="w-full max-w-sm" />
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="px-5 py-8 text-center border-t border-white/10 max-w-2xl mx-auto">
        <p className="text-white/30 text-xs leading-relaxed">
          © {new Date().getFullYear()} Grupo VIP de Promoções. Todos os direitos reservados.
        </p>
        <p className="text-white/25 text-xs mt-2 leading-relaxed max-w-md mx-auto">
          <strong className="text-white/35">Aviso:</strong> Não somos a loja. Apenas divulgamos ofertas encontradas publicamente na internet. Preços e disponibilidade podem mudar sem aviso. Verifique sempre o valor final antes de comprar.
        </p>
      </footer>

      {/* === STICKY MOBILE CTA === */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-[#0f0f0f]/95 backdrop-blur-sm border-t border-white/10 md:hidden">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-pulse flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#17a852] text-white font-bold text-base rounded-xl px-6 py-3.5 w-full transition-colors duration-200 no-underline"
        >
          <WhatsAppIcon size={20} />
          Entrar no Grupo Grátis
        </a>
      </div>
    </div>
  )
}
