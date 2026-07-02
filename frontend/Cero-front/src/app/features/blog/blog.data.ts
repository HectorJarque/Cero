export interface CategoriaBlog {
  id: string;
  titleKey: string;
}

export const CATEGORIAS_BLOG: CategoriaBlog[] = [
  { id: 'recetas', titleKey: 'blog.categorias.recetas' },
  { id: 'tradiciones', titleKey: 'blog.categorias.tradiciones' },
  { id: 'huerta', titleKey: 'blog.categorias.huerta' },
  { id: 'vidaLocal', titleKey: 'blog.categorias.vidaLocal' }
];

export interface ArticuloBlog {
  slug: string;
  categoryId: string;
  img: string;
  titleKey: string;
  excerptKey: string;
  author: string;
  date: string;
  readMinutes: number;
  destacado?: boolean;
  keywords: string;
}

export const ARTICULOS_BLOG: ArticuloBlog[] = [
  {
    slug: 'arroz-al-horno-de-la-abuela',
    categoryId: 'recetas',
    img: '/img/blog/arroz-al-horno.jpg',
    titleKey: 'blog.articulos.arrozHorno.title',
    excerptKey: 'blog.articulos.arrozHorno.excerpt',
    author: 'Marisa Company',
    date: '2026-06-25',
    readMinutes: 6,
    destacado: true,
    keywords: 'arroz al horno abuela receta tradicional garbanzos morcilla'
  },
  {
    slug: 'por-que-se-hace-la-mascleta',
    categoryId: 'tradiciones',
    img: '/img/blog/mascleta.jpg',
    titleKey: 'blog.articulos.mascleta.title',
    excerptKey: 'blog.articulos.mascleta.excerpt',
    author: 'Marisa Company',
    date: '2026-06-20',
    readMinutes: 4,
    keywords: 'mascleta fallas tradicion pirotecnia ruido'
  },
  {
    slug: 'que-plantar-en-julio',
    categoryId: 'huerta',
    img: '/img/blog/huerto-julio.jpg',
    titleKey: 'blog.articulos.plantarJulio.title',
    excerptKey: 'blog.articulos.plantarJulio.excerpt',
    author: 'Toni Ferrando',
    date: '2026-06-18',
    readMinutes: 5,
    keywords: 'huerto julio plantar verano tomates pimientos calor'
  },
  {
    slug: 'mercado-de-colon-guia',
    categoryId: 'vidaLocal',
    img: '/img/blog/mercado-colon.jpg',
    titleKey: 'blog.articulos.mercadoColon.title',
    excerptKey: 'blog.articulos.mercadoColon.excerpt',
    author: 'Marisa Company',
    date: '2026-06-14',
    readMinutes: 3,
    keywords: 'mercado colon valencia guia visita puestos'
  },
  {
    slug: 'horchata-casera-paso-a-paso',
    categoryId: 'recetas',
    img: '/img/blog/horchata.webp',
    titleKey: 'blog.articulos.horchata.title',
    excerptKey: 'blog.articulos.horchata.excerpt',
    author: 'Marisa Company',
    date: '2026-06-10',
    readMinutes: 7,
    keywords: 'horchata chufa receta verano bebida fresca'
  },
  {
    slug: 'origen-de-la-paella',
    categoryId: 'tradiciones',
    img: '/img/blog/paella.jpg',
    titleKey: 'blog.articulos.origenPaella.title',
    excerptKey: 'blog.articulos.origenPaella.excerpt',
    author: 'Toni Ferrando',
    date: '2026-06-05',
    readMinutes: 8,
    keywords: 'paella historia origen valenciana arroz'
  },
  {
    slug: 'como-regar-en-plena-ola-de-calor',
    categoryId: 'huerta',
    img: '/img/blog/riego-calor.jpg',
    titleKey: 'blog.articulos.riegoCalor.title',
    excerptKey: 'blog.articulos.riegoCalor.excerpt',
    author: 'Toni Ferrando',
    date: '2026-05-30',
    readMinutes: 4,
    keywords: 'riego calor huerto agua ola verano consejos'
  }
];
