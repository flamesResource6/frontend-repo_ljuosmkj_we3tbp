import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { DarkCard } from './ui/Card'
import { Accordion } from './ui/Accordion'
import { CheckCircle2, Sparkles, Zap, Shield, LineChart, Layers, Users, Star } from 'lucide-react'

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function Grafismo({ color = '#C1FF02', className = '' }) {
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 220 120" className="w-full h-full opacity-60">
        <g fill="none" stroke={color} strokeWidth="2">
          <path d="M10 100 L80 20 L140 20 L210 100" />
          <path d="M40 100 L110 40 L170 40 L210 100" opacity=".6" />
          <path d="M70 100 L130 60 L190 60 L210 100" opacity=".35" />
        </g>
      </svg>
    </div>
  )
}

function Texture({ className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(193,255,2,0.12),transparent_60%),radial-gradient(900px_500px_at_80%_20%,rgba(252,24,233,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.06),transparent_40%)] mix-blend-overlay" />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black border-b border-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-[18px] bg-[#0D0D0D] border border-[#141414] flex items-center justify-center">
            <span className="text-[#C1FF02] font-black">27</span>
          </div>
          <span className="text-white font-semibold">Two7</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#consulting" className="hover:text-white">Consultoria</a>
          <a href="#process" className="hover:text-white">Processo</a>
          <a href="#cases" className="hover:text-white">Cases</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <Button className="ml-4 hidden sm:inline-flex">Começar agora</Button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <Texture />
      <Grafismo className="absolute -top-6 left-1/2 -translate-x-1/2 w-[680px]" />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#141414] bg-[#0D0D0D] px-3 py-1 text-white/70 mb-6">
            <Sparkles className="h-4 w-4 text-[#C1FF02]" />
            <span className="text-sm">Crescimento além do óbvio</span>
          </div>
          <h1 className="text-white font-extrabold tracking-tight leading-tight text-5xl sm:text-6xl md:text-7xl">
            Vá além do e-commerce tradicional
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl">
            Estruturamos marcas digitais com estratégia, performance e produtos. Da visão ao resultado, com precisão e velocidade.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Button>Começar agora</Button>
            <Button variant="secondary">Ver cases</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TrustedBy() {
  const logos = ['Shopify', 'Klaviyo', 'Google', 'Meta', 'TikTok', 'Stripe']
  return (
    <section className="bg-black border-y border-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-80">
          {logos.map((l) => (
            <div key={l} className="h-10 grayscale opacity-70 flex items-center justify-center text-white/60 border border-[#141414] rounded-[16px] bg-[#0D0D0D]">
              <span className="text-sm">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Consulting() {
  const cards = [
    { title: 'Arquitetura de Crescimento', desc: 'Roadmaps claros para destravar receita.' },
    { title: 'Operação de Performance', desc: 'Mídia, CRO e CRM integrados.' },
    { title: 'Produtos & Lançamentos', desc: 'Do conceito ao sellout com precisão.' },
  ]
  return (
    <section id="consulting" className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-white text-4xl sm:text-5xl font-extrabold">Consultoria full-stack para marcas digitais</h2>
          <p className="mt-4 text-white/80 text-base">Alinhamos estratégia, operação e produto para atingir metas reais. Sem achismo, com método.</p>
          <div className="mt-6 flex gap-3">
            <Button>Começar agora</Button>
            <Button variant="secondary">Fale com o time</Button>
          </div>
        </div>
        <div className="grid gap-4">
          {cards.map((c) => (
            <DarkCard key={c.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-[12px] bg-[#C1FF02] text-black flex items-center justify-center font-black shadow-[0_0_14px_rgba(193,255,2,0.45)]">27</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{c.title}</h3>
                  <p className="text-white/70 mt-1 text-sm">{c.desc}</p>
                </div>
              </div>
            </DarkCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueProps() {
  const items = [
    { icon: Zap, t: 'Velocidade', d: 'Implantações rápidas, sprints objetivos.' },
    { icon: Shield, t: 'Confiabilidade', d: 'Processos auditáveis e previsíveis.' },
    { icon: LineChart, t: 'Performance', d: 'Foco em métricas que movem o ponteiro.' },
    { icon: Layers, t: 'Integração', d: 'Stack conectado de ponta a ponta.' },
    { icon: Users, t: 'Time', d: 'Especialistas multidisciplinares.' },
    { icon: Star, t: 'Qualidade', d: 'Padrões altos de entrega e design.' },
  ]
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, t, d }) => (
            <DarkCard key={t} className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-[12px] bg-[#0D0D0D] border border-[#141414] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#C1FF02]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {t}
                    <span className="inline-block h-1 w-1 rounded-full bg-[#FC18E9]" />
                  </h3>
                  <p className="text-white/70 mt-1 text-sm">{d}</p>
                </div>
              </div>
            </DarkCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { n: '01', t: 'Imersão', d: 'Diagnóstico profundo do negócio.' },
    { n: '02', t: 'Estratégia', d: 'Posicionamento, metas e plano.' },
    { n: '03', t: 'Execução', d: 'Operação contínua com rituais.' },
    { n: '04', t: 'Otimização', d: 'Ciclos de testes e aprendizados.' },
  ]
  return (
    <section id="process" className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-3 gap-8 items-stretch">
        <div className="relative rounded-[16px] bg-[#0D0D0D] border border-[#141414] p-6 overflow-hidden">
          <Grafismo className="absolute bottom-0 left-0 w-full" />
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-white">Nosso Processo</h3>
            <p className="text-white/70 mt-2 text-sm max-w-sm">Metodologia clara para sair do 0 ao 1 e do 1 ao 100. Sem atalhos, com disciplina.</p>
          </div>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {steps.map((s) => (
            <DarkCard key={s.n} className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-[#C1FF02] font-black text-xl min-w-[3ch]">{s.n}</div>
                <div>
                  <h4 className="text-white font-bold">{s.t}</h4>
                  <p className="text-white/70 text-sm mt-1">{s.d}</p>
                </div>
              </div>
            </DarkCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function Identity() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative rounded-[16px] overflow-hidden border border-[#141414] bg-[#0D0D0D]">
          <Grafismo color="#FC18E9" className="absolute -top-6 left-1/2 -translate-x-1/2 w-[420px]" />
          <img src="https://images.unsplash.com/photo-1617704716344-8d987ac681a4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJZGVudGl0eXxlbnwwfDB8fHwxNzYzNjM5NDY0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Identity" className="w-full h-80 object-cover opacity-90" />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { n: '120+', l: 'projetos liderados' },
            { n: '8.5x', l: 'crescimento médio' },
            { n: '50M+', l: 'em GMV gerado' },
          ].map((s) => (
            <DarkCard key={s.n} className="p-6 text-center">
              <div className="text-3xl font-extrabold text-[#C1FF02]">{s.n}</div>
              <div className="text-white mt-1 text-sm">{s.l}</div>
            </DarkCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    { q: 'A Two7 transformou nossa operação em 90 dias.', a: 'Paula, CMO' },
    { q: 'Processo claro, execução cirúrgica.', a: 'Rafael, Founder' },
    { q: 'Escalamos com margem e previsibilidade.', a: 'Diana, COO' },
  ]
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-4">
        {items.map((t) => (
          <DarkCard key={t.q} className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-[#141414] border border-[#141414]" />
              <div>
                <div className="text-white font-semibold">{t.a}</div>
                <div className="text-white/50 text-xs">Cliente</div>
              </div>
            </div>
            <p className="text-white/80">“{t.q}”</p>
          </DarkCard>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    { question: 'Qual é o fit ideal?', answer: 'Marcas com intenção real de crescimento e abertura para método.' },
    { question: 'Como começam os projetos?', answer: 'Iniciamos com imersão e diagnóstico para calibrar metas.' },
    { question: 'Vocês operam mídia?', answer: 'Sim, com foco em performance integrada a CRM e CRO.' },
  ]
  return (
    <section id="faq" className="bg-black">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Accordion items={items} />
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black">
      <Texture />
      <Grafismo className="absolute bottom-0 left-0 w-full" />
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-white text-4xl sm:text-5xl font-extrabold">Pronto para ir além?</h2>
        <p className="text-white/80 mt-4">Vamos construir a próxima fase do seu crescimento.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button>Começar agora</Button>
          <Button variant="secondary">Fale com o time</Button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-[18px] bg-[#0D0D0D] border border-[#141414] flex items-center justify-center">
            <span className="text-[#C1FF02] font-black">27</span>
          </div>
          <span className="text-white/70">© Two7</span>
        </div>
        <div className="flex items-center gap-6 text-white/70">
          <a href="#" className="hover:text-white">Contato</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <span className="inline-block h-1 w-1 rounded-full bg-[#FC18E9]" />
          <a href="#" className="hover:text-white">Privacidade</a>
        </div>
      </div>
    </footer>
  )
}

export default function Two7LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <TrustedBy />
      <Consulting />
      <ValueProps />
      <Process />
      <Identity />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
