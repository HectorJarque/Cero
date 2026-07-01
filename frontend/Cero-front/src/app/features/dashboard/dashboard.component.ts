import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import {
  PEDIDOS,
  VENTAS_SEMANALES,
  MENU_LATERAL,
  PRODUCTOS_STOCK,
  CLIENTES,
  EstadoPedido
} from './dashboard.data';

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  menu = MENU_LATERAL;
  ventasSemanales = VENTAS_SEMANALES;
  productos = PRODUCTOS_STOCK;
  clientes = CLIENTES;

  seccionActiva = signal('resumen');
  searchTerm = signal('');
  filtroEstado = signal<EstadoPedido | 'todos'>('todos');

  estados: (EstadoPedido | 'todos')[] = ['todos', 'pendiente', 'enviado', 'entregado', 'cancelado'];

  totalIngresos = computed(() =>
    PEDIDOS
      .filter(p => p.estado !== 'cancelado')
      .reduce((suma, p) => suma + p.total, 0)
  );

  totalPedidos = computed(() => PEDIDOS.length);

  clientesUnicos = computed(() =>
    new Set(PEDIDOS.map(p => p.cliente)).size
  );

  ticketMedio = computed(() => {
    const validos = PEDIDOS.filter(p => p.estado !== 'cancelado');
    return validos.length ? this.totalIngresos() / validos.length : 0;
  });

  maxVenta = computed(() =>
    Math.max(...this.ventasSemanales.map(v => v.total))
  );

  barrasChart = computed(() =>
    this.ventasSemanales.map(v => ({
      ...v,
      alturaPorcentaje: Math.round((v.total / this.maxVenta()) * 100)
    }))
  );

  pedidosFiltrados = computed(() => {
    const termino = normalizar(this.searchTerm().trim());
    const estado = this.filtroEstado();

    return PEDIDOS.filter(pedido => {
      const coincideEstado = estado === 'todos' || pedido.estado === estado;
      const coincideTexto =
        !termino ||
        normalizar(pedido.cliente).includes(termino) ||
        normalizar(pedido.id).includes(termino);
      return coincideEstado && coincideTexto;
    });
  });

  cambiarSeccion(id: string): void {
    this.seccionActiva.set(id);
    this.searchTerm.set('');
    this.filtroEstado.set('todos');
  }

  onSearchChange(valor: string): void {
    this.searchTerm.set(valor);
  }

  cambiarFiltroEstado(estado: EstadoPedido | 'todos'): void {
    this.filtroEstado.set(estado);
  }
}
