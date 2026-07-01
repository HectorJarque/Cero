export type EstadoPedido = 'pendiente' | 'enviado' | 'entregado' | 'cancelado';

export interface Pedido {
  id: string;
  cliente: string;
  fecha: string;
  total: number;
  estado: EstadoPedido;
}

export const PEDIDOS: Pedido[] = [
  { id: '#1042', cliente: 'Marina Solís', fecha: '2026-06-28', total: 64.00, estado: 'entregado' },
  { id: '#1041', cliente: 'Adrián Ferrer', fecha: '2026-06-28', total: 38.00, estado: 'enviado' },
  { id: '#1040', cliente: 'Laura Gómez', fecha: '2026-06-27', total: 92.50, estado: 'entregado' },
  { id: '#1039', cliente: 'Pau Ibáñez', fecha: '2026-06-27', total: 16.50, estado: 'pendiente' },
  { id: '#1038', cliente: 'Noa Castells', fecha: '2026-06-26', total: 51.50, estado: 'entregado' },
  { id: '#1037', cliente: 'Rubén Ortiz', fecha: '2026-06-26', total: 22.00, estado: 'cancelado' },
  { id: '#1036', cliente: 'Carla Peris', fecha: '2026-06-25', total: 34.00, estado: 'enviado' },
  { id: '#1035', cliente: 'Iván Bosch', fecha: '2026-06-25', total: 78.00, estado: 'entregado' },
  { id: '#1034', cliente: 'Elena Ripoll', fecha: '2026-06-24', total: 29.50, estado: 'pendiente' },
  { id: '#1033', cliente: 'Marc Vidal', fecha: '2026-06-23', total: 45.00, estado: 'entregado' },
  { id: '#1032', cliente: 'Sofía Alcaraz', fecha: '2026-06-23', total: 16.50, estado: 'enviado' },
  { id: '#1031', cliente: 'David Roselló', fecha: '2026-06-22', total: 60.00, estado: 'entregado' }
];

export interface VentaSemanal {
  diaKey: string;
  total: number;
}

export const VENTAS_SEMANALES: VentaSemanal[] = [
  { diaKey: 'dashboard.dias.lun', total: 180 },
  { diaKey: 'dashboard.dias.mar', total: 240 },
  { diaKey: 'dashboard.dias.mie', total: 150 },
  { diaKey: 'dashboard.dias.jue', total: 310 },
  { diaKey: 'dashboard.dias.vie', total: 420 },
  { diaKey: 'dashboard.dias.sab', total: 380 },
  { diaKey: 'dashboard.dias.dom', total: 190 }
];

export interface EnlaceMenu {
  id: string;
  titleKey: string;
}

export const MENU_LATERAL: EnlaceMenu[] = [
  { id: 'resumen', titleKey: 'dashboard.menu.resumen' },
  { id: 'pedidos', titleKey: 'dashboard.menu.pedidos' },
  { id: 'productos', titleKey: 'dashboard.menu.productos' },
  { id: 'clientes', titleKey: 'dashboard.menu.clientes' },
  { id: 'ajustes', titleKey: 'dashboard.menu.ajustes' }
];

export interface ProductoStock {
  nombre: string;
  categoriaKey: string;
  stock: number;
  precio: number;
}

export const PRODUCTOS_STOCK: ProductoStock[] = [
  { nombre: 'Jarrón Arena', categoriaKey: 'dashboard.productos.categorias.jarrones', stock: 6, precio: 38.00 },
  { nombre: 'Taza Ocre', categoriaKey: 'dashboard.productos.categorias.tazas', stock: 23, precio: 16.50 },
  { nombre: 'Set de 4 platos llanos', categoriaKey: 'dashboard.productos.categorias.vajilla', stock: 4, precio: 64.00 },
  { nombre: 'Portavelas Duna', categoriaKey: 'dashboard.productos.categorias.decoracion', stock: 15, precio: 22.00 },
  { nombre: 'Cuenco Terracota', categoriaKey: 'dashboard.productos.categorias.vajilla', stock: 2, precio: 29.50 },
  { nombre: 'Jarra de agua Brisa', categoriaKey: 'dashboard.productos.categorias.jarrones', stock: 9, precio: 34.00 }
];

export interface ClienteResumen {
  nombre: string;
  email: string;
  pedidosRealizados: number;
  totalGastado: number;
}

export const CLIENTES: ClienteResumen[] = [
  { nombre: 'Marina Solís', email: 'marina.solis@correo.com', pedidosRealizados: 4, totalGastado: 186.50 },
  { nombre: 'Laura Gómez', email: 'laura.gomez@correo.com', pedidosRealizados: 3, totalGastado: 210.00 },
  { nombre: 'Iván Bosch', email: 'ivan.bosch@correo.com', pedidosRealizados: 2, totalGastado: 142.00 },
  { nombre: 'Adrián Ferrer', email: 'adrian.ferrer@correo.com', pedidosRealizados: 5, totalGastado: 224.50 },
  { nombre: 'Noa Castells', email: 'noa.castells@correo.com', pedidosRealizados: 1, totalGastado: 51.50 }
];
