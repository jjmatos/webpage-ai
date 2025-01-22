import React, { createContext, useContext, useState } from 'react';

type LanguageContextType = {
  language: 'en' | 'es';
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'Transforming Business Through AI',
    'home.hero.subtitle': 'Leverage the power of artificial intelligence to drive innovation and growth in your business',
    'home.hero.cta': 'Get Started',
    'home.why.title': 'Why Choose AI Solutions?',
    'home.why.subtitle': 'We combine cutting-edge AI technology with industry expertise to deliver exceptional results.',
    'home.featured.title': 'Latest from Our Blog',
    'home.featured.subtitle': 'Stay updated with the latest trends and insights in AI',
    'home.cta.ready': 'Ready to get started?',
    'home.cta.discuss': "Let's discuss your AI needs today.",
    
    // About Page
    'about.hero.title': 'About AI Solutions',
    'about.hero.subtitle': "We're a team of AI experts, data scientists, and engineers passionate about transforming businesses through innovative AI solutions.",
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To democratize AI technology and make it accessible to businesses of all sizes, enabling them to harness the power of artificial intelligence for sustainable growth and innovation.',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To be the global leader in AI solutions, recognized for our innovative approach, technical excellence, and commitment to creating positive impact through technology.',
    'about.team.title': 'Our Leadership Team',
    'about.team.subtitle': 'Meet the experts behind our innovative AI solutions',
    'about.journey.title': 'Our Journey',
    'about.journey.subtitle': 'A decade of innovation and growth in AI technology',

    // Services Page
    'services.hero.title': 'Our Services',
    'services.hero.subtitle': 'Comprehensive AI solutions designed to transform your business and drive innovation',
    'services.ai.consulting': 'AI Consulting',
    'services.machine.learning': 'Machine Learning Solutions',
    'services.data.analytics': 'Data Analytics',
    'services.ai.development': 'AI Development',
    'services.cloud.integration': 'Cloud AI Integration',
    'services.security': 'AI Security & Compliance',
    'services.automation': 'Process Automation',
    'services.chatbot': 'Chatbot & Virtual Assistants',
    'services.cta.ready': 'Ready to get started?',
    'services.cta.contact': 'Contact us today to discuss how we can help transform your business.',

    // Blog Page
    'blog.hero.title': 'AI Solutions Blog',
    'blog.hero.subtitle': 'Stay updated with the latest insights, trends, and breakthroughs in AI technology',
    'blog.search.placeholder': 'Search articles...',
    'blog.newsletter.title': 'Subscribe to Our Newsletter',
    'blog.newsletter.subtitle': 'Get the latest insights and updates delivered straight to your inbox',
    'blog.newsletter.button': 'Subscribe',
    'blog.newsletter.placeholder': 'Enter your email',

    // Contact Page
    'contact.hero.title': 'Contact Us',
    'contact.hero.subtitle': 'Get in touch with our team of AI experts to discuss your project',
    'contact.form.title': 'Send us a Message',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.hours.title': 'Business Hours',
    
    // Common
    'language': 'Español',
    'readMore': 'Read More',
    'getStarted': 'Get Started',
    'contactUs': 'Contact Us',
    'email': 'Email',
    'phone': 'Phone',
    'address': 'Office Location',
    'allRights': 'All rights reserved.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    // Home Page
    'home.hero.title': 'Transformando Negocios a través de la IA',
    'home.hero.subtitle': 'Aprovecha el poder de la inteligencia artificial para impulsar la innovación y el crecimiento en tu negocio',
    'home.hero.cta': 'Comenzar',
    'home.why.title': '¿Por qué elegir AI Solutions?',
    'home.why.subtitle': 'Combinamos tecnología de IA de vanguardia con experiencia en la industria para ofrecer resultados excepcionales.',
    'home.featured.title': 'Últimas Publicaciones del Blog',
    'home.featured.subtitle': 'Mantente actualizado con las últimas tendencias y conocimientos en IA',
    'home.cta.ready': '¿Listo para empezar?',
    'home.cta.discuss': 'Hablemos hoy sobre tus necesidades de IA.',
    
    // About Page
    'about.hero.title': 'Sobre AI Solutions',
    'about.hero.subtitle': 'Somos un equipo de expertos en IA, científicos de datos e ingenieros apasionados por transformar empresas a través de soluciones innovadoras de IA.',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.text': 'Democratizar la tecnología de IA y hacerla accesible para empresas de todos los tamaños, permitiéndoles aprovechar el poder de la inteligencia artificial para un crecimiento e innovación sostenibles.',
    'about.vision.title': 'Nuestra Visión',
    'about.vision.text': 'Ser el líder global en soluciones de IA, reconocidos por nuestro enfoque innovador, excelencia técnica y compromiso con la creación de impacto positivo a través de la tecnología.',
    'about.team.title': 'Nuestro Equipo Directivo',
    'about.team.subtitle': 'Conoce a los expertos detrás de nuestras soluciones innovadoras de IA',
    'about.journey.title': 'Nuestra Trayectoria',
    'about.journey.subtitle': 'Una década de innovación y crecimiento en tecnología de IA',

    // Services Page
    'services.hero.title': 'Nuestros Servicios',
    'services.hero.subtitle': 'Soluciones integrales de IA diseñadas para transformar tu negocio e impulsar la innovación',
    'services.ai.consulting': 'Consultoría de IA',
    'services.machine.learning': 'Soluciones de Aprendizaje Automático',
    'services.data.analytics': 'Análisis de Datos',
    'services.ai.development': 'Desarrollo de IA',
    'services.cloud.integration': 'Integración de IA en la Nube',
    'services.security': 'Seguridad y Cumplimiento de IA',
    'services.automation': 'Automatización de Procesos',
    'services.chatbot': 'Chatbots y Asistentes Virtuales',
    'services.cta.ready': '¿Listo para empezar?',
    'services.cta.contact': 'Contáctanos hoy para discutir cómo podemos ayudar a transformar tu negocio.',

    // Blog Page
    'blog.hero.title': 'Blog de AI Solutions',
    'blog.hero.subtitle': 'Mantente actualizado con los últimos conocimientos, tendencias y avances en tecnología de IA',
    'blog.search.placeholder': 'Buscar artículos...',
    'blog.newsletter.title': 'Suscríbete a Nuestro Boletín',
    'blog.newsletter.subtitle': 'Recibe los últimos conocimientos y actualizaciones directamente en tu bandeja de entrada',
    'blog.newsletter.button': 'Suscribirse',
    'blog.newsletter.placeholder': 'Ingresa tu email',

    // Contact Page
    'contact.hero.title': 'Contáctanos',
    'contact.hero.subtitle': 'Ponte en contacto con nuestro equipo de expertos en IA para discutir tu proyecto',
    'contact.form.title': 'Envíanos un Mensaje',
    'contact.form.firstName': 'Nombre',
    'contact.form.lastName': 'Apellido',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.info.title': 'Información de Contacto',
    'contact.hours.title': 'Horario de Atención',
    
    // Common
    'language': 'English',
    'readMore': 'Leer Más',
    'getStarted': 'Comenzar',
    'contactUs': 'Contáctanos',
    'email': 'Correo',
    'phone': 'Teléfono',
    'address': 'Ubicación de la Oficina',
    'allRights': 'Todos los derechos reservados.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};