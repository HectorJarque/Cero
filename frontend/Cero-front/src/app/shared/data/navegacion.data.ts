export interface EnlaceEjemplo {
  route: string;
  labelKey: string;
}

export const ENLACES_EJEMPLOS: EnlaceEjemplo[] = [
  { route: '/portfolio', labelKey: 'nav.portfolio' },
  { route: '/informativa', labelKey: 'nav.informativa' },
  { route: '/ecommerce', labelKey: 'nav.ecommerce' },
  { route: '/dashboard', labelKey: 'nav.dashboard' },
  { route: '/blog', labelKey: 'nav.blog' },
  { route: '/landing', labelKey: 'nav.landing' },
  { route: '/reservas', labelKey: 'nav.reservas' },
  { route: '/saas', labelKey: 'nav.saas' }
];
