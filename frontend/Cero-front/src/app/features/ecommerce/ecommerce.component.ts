import { Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  CATEGORIAS_TIENDA,
  PRODUCTOS_TIENDA,
  VENTAJAS_TIENDA,
  RESENAS_TIENDA
} from './ecommerce.data';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {
  categorias = CATEGORIAS_TIENDA;
  ventajas = VENTAJAS_TIENDA;
  resenas = RESENAS_TIENDA;

  private productosSection = viewChild<ElementRef<HTMLElement>>('productosSection');

  searchTerm = signal('');
  selectedCategory = signal<string | null>(null);

  filteredProductos = computed(() => {
    const termino = normalizar(this.searchTerm().trim());
    const categoria = this.selectedCategory();

    return PRODUCTOS_TIENDA.filter(producto => {
      const coincideCategoria = !categoria || producto.categoryId === categoria;
      const coincideTexto = !termino || normalizar(producto.keywords).includes(termino);
      return coincideCategoria && coincideTexto;
    });
  });

  hayFiltrosActivos = computed(() =>
    this.searchTerm().trim().length > 0 || this.selectedCategory() !== null
  );

  onSearchChange(valor: string): void {
    this.searchTerm.set(valor);
  }

  toggleCategoria(id: string): void {
    this.selectedCategory.set(this.selectedCategory() === id ? null : id);
  }

  limpiarFiltros(): void {
    this.searchTerm.set('');
    this.selectedCategory.set(null);
  }

  irAProductos(): void {
    this.productosSection()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
