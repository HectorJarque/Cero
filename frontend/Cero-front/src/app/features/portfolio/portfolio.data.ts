export interface ProyectoDemo {
  id: string;
  titleKey: string;
  descKey: string;
  sectorKey: string;
  img: string;
  link: string;
}

export const PROYECTOS_DEMO: ProyectoDemo[] = [
  {
    id: 'restaurante',
    titleKey: 'portfolio.projects.restaurante.title',
    descKey: 'portfolio.projects.restaurante.description',
    sectorKey: 'portfolio.projects.restaurante.sector',
    img: '/img/portfolio/restaurante.jpg',
    link: '/demo/restaurante'
  },
  {
    id: 'clinica',
    titleKey: 'portfolio.projects.clinica.title',
    descKey: 'portfolio.projects.clinica.description',
    sectorKey: 'portfolio.projects.clinica.sector',
    img: '/img/portfolio/clinica.jpg',
    link: '/demo/clinica'
  },
  {
    id: 'gimnasio',
    titleKey: 'portfolio.projects.gimnasio.title',
    descKey: 'portfolio.projects.gimnasio.description',
    sectorKey: 'portfolio.projects.gimnasio.sector',
    img: '/img/portfolio/gimnasio.jpg',
    link: '/demo/gimnasio'
  },
  {
    id: 'peluqueria',
    titleKey: 'portfolio.projects.peluqueria.title',
    descKey: 'portfolio.projects.peluqueria.description',
    sectorKey: 'portfolio.projects.peluqueria.sector',
    img: '/img/portfolio/peluqueria.jpg',
    link: '/demo/peluqueria'
  },
  {
    id: 'inmobiliaria',
    titleKey: 'portfolio.projects.inmobiliaria.title',
    descKey: 'portfolio.projects.inmobiliaria.description',
    sectorKey: 'portfolio.projects.inmobiliaria.sector',
    img: '/img/portfolio/inmobiliaria.jpg',
    link: '/demo/inmobiliaria'
  },
  {
    id: 'tienda',
    titleKey: 'portfolio.projects.tienda.title',
    descKey: 'portfolio.projects.tienda.description',
    sectorKey: 'portfolio.projects.tienda.sector',
    img: '/img/portfolio/tienda.jpg',
    link: '/demo/tienda'
  }
];
