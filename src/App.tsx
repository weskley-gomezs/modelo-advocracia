import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { 
  Scale, 
  ShieldCheck, 
  Briefcase, 
  MapPin, 
  Star, 
  MessageCircle, 
  Clock, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ChevronRight,
  Award,
  Users,
  CheckCircle2,
  Stethoscope,
  Building2
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5583987089929";

const MENU_ITEMS = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Atuação', id: 'atuacao' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Depoimentos', id: 'depoimentos' }
];

// --- Components ---

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 md:mb-16">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-gold font-serif italic text-lg mb-2 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-serif ${light ? 'text-night' : 'text-off-white'}`}
    >
      {title}
    </motion.h2>
    <div className="w-20 h-1 bg-gold mt-4"></div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-gold/30 selection:text-gold">
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 grain-bg"></div>

      {/* Navbar */}
      <nav className="fixed top-6 left-0 w-full z-40 px-6 pointer-events-none">
        <div className={`container mx-auto max-w-6xl pointer-events-auto transition-all duration-700 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
          <div className={`flex justify-between items-center px-6 py-3 rounded-full border transition-all duration-500 ${scrolled ? 'bg-night/80 backdrop-blur-xl border-gold/20 shadow-2xl' : 'bg-night/20 backdrop-blur-sm border-gold/10'}`}>
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-night font-serif font-bold text-xl transition-transform group-hover:rotate-12">JN</div>
              <span className="text-lg font-serif tracking-widest uppercase hidden sm:block">Advocacia</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {MENU_ITEMS.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex bg-gold text-night px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gold/90 transition-all shadow-lg shadow-gold/20 items-center gap-2"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              {/* Mobile Toggle */}
              <button className="md:hidden text-gold p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-20 left-6 right-6 bg-night/95 backdrop-blur-2xl border border-gold/20 p-8 rounded-3xl flex flex-col gap-6 md:hidden pointer-events-auto shadow-2xl"
          >
            {MENU_ITEMS.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="text-2xl font-serif text-center hover:text-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-gold text-night px-6 py-4 rounded-full font-bold text-center uppercase tracking-widest"
            >
              Fale com um Advogado
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/h0zW3GC.jpeg" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-110 blur-[1px] opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent"></div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full mb-8">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-xs uppercase tracking-widest font-medium text-gold">
                  4,9 — 148 Avaliações no Google
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-[0.9] tracking-tight">
                Seus Direitos. <br />
                <span className="text-gold italic">Nossa Missão.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-off-white/70 mb-10 max-w-2xl leading-relaxed">
                Especialistas em <span className="text-off-white font-medium">Direito do Consumidor</span> e <span className="text-off-white font-medium">Direito Bancário</span>. 
                Justiça e autoridade jurídica em João Pessoa, Paraíba.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gold text-night px-10 py-5 rounded-sm text-lg font-medium hover:bg-gold/90 transition-all asymmetric-border flex items-center justify-center gap-3 group"
                >
                  Fale com um Advogado
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#atuacao"
                  className="border border-gold/30 text-off-white px-10 py-5 rounded-sm text-lg font-medium hover:bg-gold/10 transition-all flex items-center justify-center"
                >
                  Nossas Áreas
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
        >
          <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 md:py-32 bg-gold/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gold/5 asymmetric-border overflow-hidden relative">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweoeA4kNcDGueTsVJg6djn4dR_7kOot8DUesSVytf1PA-7N2ko3dDxxM0P04xCWUA5hYKdAH2cWzRN0kXwnsT3FyZVaL4p_F8lyIFN1Tj61M8px6BDLxkZtmVHHCN4u71AJmdTMQVg=s680-w680-h510-rw" 
                  alt="João Nogueira - JN Advocacia" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gold p-8 asymmetric-border hidden md:block z-10 shadow-2xl">
                <MapPin size={32} className="text-night mb-4" />
                <p className="text-night font-serif text-xl leading-tight">
                  João Pessoa <br /> Paraíba
                </p>
              </div>
            </motion.div>

            <div>
              <SectionHeading 
                title="Excelência Jurídica com Identidade Nordestina" 
                subtitle="Sobre o Escritório" 
              />
              <p className="text-lg text-off-white/70 mb-12 leading-relaxed">
                O JN Advocacia nasceu com o propósito de humanizar o atendimento jurídico, aliando a seriedade necessária à proximidade com o cliente. Localizado no coração de João Pessoa, somos referência em soluções estratégicas para conflitos complexos.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: Award, title: "Experiência", desc: "Anos de atuação dedicada." },
                  { icon: Users, title: "Comprometimento", desc: "Foco total no seu caso." },
                  { icon: ShieldCheck, title: "Resultados", desc: "Excelência comprovada." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 border border-gold/10 bg-gold/5 rounded-sm"
                  >
                    <item.icon className="text-gold mb-4" size={28} />
                    <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                    <p className="text-sm text-off-white/50">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="atuacao" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Especialidades que Protegem seus Interesses" 
            subtitle="Áreas de Atuação" 
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Plano de Saúde */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative p-8 md:p-12 border border-gold/20 bg-gold/5 asymmetric-border transition-all duration-500 hover:border-gold"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Stethoscope size={120} />
              </div>
              <Stethoscope className="text-gold mb-8" size={48} />
              <h3 className="text-3xl font-serif mb-6">Direito à Saúde</h3>
              <p className="text-off-white/70 text-lg mb-8 leading-relaxed">
                Atuamos contra negativas indevidas de planos de saúde, garantindo coberturas de cirurgias, medicamentos de alto custo e reembolsos integrais.
              </p>
              <ul className="space-y-3 mb-10">
                {['Negativas de Cirurgia', 'Medicamentos de Alto Custo', 'Home Care', 'Reajustes Abusivos'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-off-white/60">
                    <CheckCircle2 size={16} className="text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gold font-medium uppercase tracking-widest text-sm group-hover:gap-4 transition-all"
              >
                Saiba Mais <ChevronRight size={16} />
              </a>
            </motion.div>

            {/* Direito Bancário */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative p-8 md:p-12 border border-gold/20 bg-gold/5 asymmetric-border transition-all duration-500 hover:border-gold"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Building2 size={120} />
              </div>
              <Building2 className="text-gold mb-8" size={48} />
              <h3 className="text-3xl font-serif mb-6">Direito Bancário</h3>
              <p className="text-off-white/70 text-lg mb-8 leading-relaxed">
                Defesa contra juros abusivos, empréstimos consignados não solicitados e fraudes bancárias. Recupere seu equilíbrio financeiro.
              </p>
              <ul className="space-y-3 mb-10">
                {['Empréstimo Consignado', 'Juros Abusivos', 'Fraudes em Cartão', 'Busca e Apreensão'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-off-white/60">
                    <CheckCircle2 size={16} className="text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gold font-medium uppercase tracking-widest text-sm group-hover:gap-4 transition-all"
              >
                Saiba Mais <ChevronRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section id="diferenciais" className="py-24 md:py-32 bg-gold/5 border-y border-gold/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {[
              { label: "Avaliação Google", value: 4.9, suffix: "", icon: Star },
              { label: "Comentários Reais", value: 148, suffix: "+", icon: MessageCircle },
              { label: "Casos Resolvidos", value: 500, suffix: "+", icon: Scale },
              { label: "Anos de Atuação", value: 10, suffix: "+", icon: Clock }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="mx-auto text-gold mb-6" size={40} />
                <div className="text-5xl font-serif text-gold mb-2">
                  <Counter value={stat.value} />{stat.suffix}
                </div>
                <p className="text-sm uppercase tracking-widest text-off-white/50">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            {[
              { title: "Atendimento Personalizado", desc: "Cada caso é tratado com exclusividade e atenção aos detalhes." },
              { title: "Sem Custo Inicial", desc: "Realizamos sua avaliação gratuita sem compromisso financeiro imediato." },
              { title: "Transparência Total", desc: "Você acompanha cada passo do processo com clareza e honestidade." },
              { title: "Experiência Comprovada", desc: "Histórico sólido de resultados positivos em casos complexos." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-gold/10 bg-night rounded-sm"
              >
                <h4 className="font-serif text-xl mb-4 text-gold">{item.title}</h4>
                <p className="text-off-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="O que dizem nossos clientes" 
            subtitle="Depoimentos" 
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Resultados eficientes com excelência na prestação do serviço. Recomendo fortemente o JN Advocacia.", author: "Maria Silva" },
              { text: "Melhor experiência, obrigada por toda assistência com o meu caso. Profissionais humanos e competentes.", author: "João Oliveira" },
              { text: "Atendimento impecável do início ao fim. Resolveram meu problema com o banco de forma muito rápida.", author: "Ricardo Santos" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-gold/5 border border-gold/10 asymmetric-border relative"
              >
                <div className="text-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" className="inline" />)}
                </div>
                <p className="text-lg italic text-off-white/80 mb-8 leading-relaxed">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-serif">
                    {item.author[0]}
                  </div>
                  <span className="font-medium text-off-white">{item.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://www.google.com/search?q=JN+Advocacia+Joao+Pessoa" 
              target="_blank" 
              rel="noreferrer"
              className="text-gold border-b border-gold/30 pb-1 hover:border-gold transition-all"
            >
              Ver todas as 148 avaliações no Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gold p-12 md:p-20 asymmetric-border text-night text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full grain-bg opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-3xl mx-auto leading-tight">
                Agende sua consulta gratuita e proteja seus direitos hoje.
              </h2>
              <p className="text-xl mb-12 text-night/80 max-w-xl mx-auto">
                Não deixe para depois. Nossa equipe está pronta para avaliar seu caso e buscar a melhor solução jurídica.
              </p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-night text-off-white px-12 py-6 rounded-sm text-xl font-medium hover:bg-night/90 transition-all asymmetric-border inline-flex items-center gap-3"
              >
                <MessageCircle size={24} />
                Falar no WhatsApp
              </a>
              <p className="mt-6 font-medium">(83) 98708-9929</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gold/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-8">
                <span className="text-3xl font-serif font-bold text-gold">JN</span>
                <span className="text-xl font-serif tracking-widest uppercase">Advocacia</span>
              </a>
              <p className="text-off-white/50 leading-relaxed mb-8">
                Justiça, ética e resultados em João Pessoa. Especialistas em defesa do consumidor e bancário.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/jnadvocacia__/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-night transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/joaonogueiraadvocacia" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-night transition-all"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-8 text-gold">Localização</h4>
              <div className="flex gap-4 text-off-white/60 leading-relaxed">
                <MapPin className="shrink-0 text-gold" size={20} />
                <p>Av. Amazonas, 290 - Estados <br /> João Pessoa - PB, 58030-140</p>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-8 text-gold">Horário</h4>
              <div className="flex gap-4 text-off-white/60 leading-relaxed">
                <Clock className="shrink-0 text-gold" size={20} />
                <div>
                  <p>Seg – Sex: 09h às 21h</p>
                  <p>Sábado: 09h às 18h</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-8 text-gold">Contato</h4>
              <div className="flex gap-4 text-off-white/60 leading-relaxed mb-4">
                <MessageCircle className="shrink-0 text-gold" size={20} />
                <p>(83) 98708-9929</p>
              </div>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-gold/10 text-gold border border-gold/20 px-6 py-3 rounded-sm text-sm font-medium hover:bg-gold/20 transition-all block text-center"
              >
                Iniciar Conversa
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-off-white/30">
            <p>© 2026 JN Advocacia — Todos os direitos reservados</p>
            <div className="flex gap-8">
              <p>Feito por <a href="https://wa.me/5561981535040" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Weskley Gomes</a></p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <div className="absolute -top-12 right-0 bg-white text-night px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Fale conosco agora!
        </div>
        <MessageCircle size={32} />
      </a>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
