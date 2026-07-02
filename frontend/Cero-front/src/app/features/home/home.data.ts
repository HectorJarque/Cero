export type IconoProyecto =
  | 'portfolio' | 'informativa' | 'ecommerce'
  | 'dashboard' | 'blog' | 'landing' | 'reservas' | 'saas';

export interface ProyectoHome {
  route: string;
  icon: IconoProyecto;
  color: string;
  colorFondo: string;
  categoryKey: string;
  titleKey: string;
  descKey: string;
}

export const PROYECTOS_HOME: ProyectoHome[] = [
  {
    route: '/portfolio',
    icon: 'portfolio',
    color: '#c4642b',
    colorFondo: '#fdf3ec',
    categoryKey: 'home.portfolio.category',
    titleKey: 'home.portfolio.title',
    descKey: 'home.portfolio.description'
  },
  {
    route: '/informativa',
    icon: 'informativa',
    color: '#2f6b3f',
    colorFondo: '#eef6f0',
    categoryKey: 'home.informative.category',
    titleKey: 'home.informative.title',
    descKey: 'home.informative.description'
  },
  {
    route: '/ecommerce',
    icon: 'ecommerce',
    color: '#9a5b1f',
    colorFondo: '#fbf1e4',
    categoryKey: 'home.ecommerce.category',
    titleKey: 'home.ecommerce.title',
    descKey: 'home.ecommerce.description'
  },
  {
    route: '/dashboard',
    icon: 'dashboard',
    color: '#3a5a9a',
    colorFondo: '#eef2fa',
    categoryKey: 'home.dashboard.category',
    titleKey: 'home.dashboard.title',
    descKey: 'home.dashboard.description'
  },
  {
    route: '/blog',
    icon: 'blog',
    color: '#b8791f',
    colorFondo: '#fbf6ee',
    categoryKey: 'home.blog.category',
    titleKey: 'home.blog.title',
    descKey: 'home.blog.description'
  },
  {
    route: '/landing',
    icon: 'landing',
    color: '#a13d5c',
    colorFondo: '#faeef2',
    categoryKey: 'home.landing.category',
    titleKey: 'home.landing.title',
    descKey: 'home.landing.description'
  },
  {
    route: '/reservas',
    icon: 'reservas',
    color: '#1f7a70',
    colorFondo: '#e9f5f3',
    categoryKey: 'home.reservations.category',
    titleKey: 'home.reservations.title',
    descKey: 'home.reservations.description'
  },
  {
    route: '/saas',
    icon: 'saas',
    color: '#5b4b9a',
    colorFondo: '#f1eef9',
    categoryKey: 'home.saas.category',
    titleKey: 'home.saas.title',
    descKey: 'home.saas.description'
  }
];
