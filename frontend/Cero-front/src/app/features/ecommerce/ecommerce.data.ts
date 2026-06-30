export type IconoTienda =
  'jarron'
  | 'taza'
  | 'vajilla'
  | 'decoracion'
  | 'envio'
  | 'devolucion'
  | 'artesanal';

export interface CategoriaTienda {
  id: string;
  icon: IconoTienda;
  titleKey: string;
  countKey: string;
}

export const CATEGORIAS_TIENDA: CategoriaTienda[] = [
  {
    id: 'jarrones',
    icon: 'jarron',
    titleKey: 'ecommerce.categorias.jarrones.title',
    countKey: 'ecommerce.categorias.jarrones.count'
  },
  {
    id: 'tazas',
    icon: 'taza',
    titleKey: 'ecommerce.categorias.tazas.title',
    countKey: 'ecommerce.categorias.tazas.count'
  },
  {
    id: 'vajilla',
    icon: 'vajilla',
    titleKey: 'ecommerce.categorias.vajilla.title',
    countKey: 'ecommerce.categorias.vajilla.count'
  },
  {
    id: 'decoracion',
    icon: 'decoracion',
    titleKey: 'ecommerce.categorias.decoracion.title',
    countKey: 'ecommerce.categorias.decoracion.count'
  }
];

export interface ProductoTienda {
  categoryId: string;
  img: string;
  titleKey: string;
  descKey: string;
  price: string;
  badgeKey?: string;
  keywords: string;
}

export const PRODUCTOS_TIENDA: ProductoTienda[] = [
  {
    categoryId: 'jarrones',
    img: '/img/ecommerce/jarron-arena.jpg',
    titleKey: 'ecommerce.productos.jarronArena.title',
    descKey: 'ecommerce.productos.jarronArena.description',
    price: '38,00 €',
    badgeKey: 'ecommerce.badges.nuevo',
    keywords: 'jarron arena vase tierra flores ramas secas'
  },
  {
    categoryId: 'tazas',
    img: '/img/ecommerce/taza-ocre.jpg',
    titleKey: 'ecommerce.productos.tazaOcre.title',
    descKey: 'ecommerce.productos.tazaOcre.description',
    price: '16,50 €',
    keywords: 'taza ocre mug desayuno cafe'
  },
  {
    categoryId: 'vajilla',
    img: '/img/ecommerce/set-platos.jpg',
    titleKey: 'ecommerce.productos.setPlatos.title',
    descKey: 'ecommerce.productos.setPlatos.description',
    price: '64,00 €',
    badgeKey: 'ecommerce.badges.masVendido',
    keywords: 'set platos plates vajilla mesa'
  },
  {
    categoryId: 'decoracion',
    img: '/img/ecommerce/portavelas.jpg',
    titleKey: 'ecommerce.productos.portavelas.title',
    descKey: 'ecommerce.productos.portavelas.description',
    price: '22,00 €',
    keywords: 'portavelas duna velas decoracion candle'
  },
  {
    categoryId: 'vajilla',
    img: '/img/ecommerce/cuenco-terracota.jpg',
    titleKey: 'ecommerce.productos.cuencoTerracota.title',
    descKey: 'ecommerce.productos.cuencoTerracota.description',
    price: '29,50 €',
    keywords: 'cuenco terracota bowl ensalada'
  },
  {
    categoryId: 'jarrones',
    img: '/img/ecommerce/jarra-agua.jpg',
    titleKey: 'ecommerce.productos.jarraAgua.title',
    descKey: 'ecommerce.productos.jarraAgua.description',
    price: '34,00 €',
    keywords: 'jarra agua brisa jug water'
  }
];

export interface VentajaTienda {
  icon: IconoTienda;
  titleKey: string;
  descKey: string;
}

export const VENTAJAS_TIENDA: VentajaTienda[] = [
  {
    icon: 'envio',
    titleKey: 'ecommerce.ventajas.envio.title',
    descKey: 'ecommerce.ventajas.envio.description'
  },
  {
    icon: 'devolucion',
    titleKey: 'ecommerce.ventajas.devolucion.title',
    descKey: 'ecommerce.ventajas.devolucion.description'
  },
  {
    icon: 'artesanal',
    titleKey: 'ecommerce.ventajas.artesanal.title',
    descKey: 'ecommerce.ventajas.artesanal.description'
  }
];

export interface ResenaTienda {
  textKey: string;
  authorKey: string;
}

export const RESENAS_TIENDA: ResenaTienda[] = [
  {
    textKey: 'ecommerce.resenas.r1.text',
    authorKey: 'ecommerce.resenas.r1.author'
  },
  {
    textKey: 'ecommerce.resenas.r2.text',
    authorKey: 'ecommerce.resenas.r2.author'
  },
  {
    textKey: 'ecommerce.resenas.r3.text',
    authorKey: 'ecommerce.resenas.r3.author'
  }
];
