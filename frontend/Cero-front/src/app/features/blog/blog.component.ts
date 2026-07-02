import { Component, computed, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ARTICULOS_BLOG, CATEGORIAS_BLOG } from './blog.data';

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  categorias = CATEGORIAS_BLOG;

  searchTerm = signal('');
  selectedCategory = signal<string | null>(null);

  articuloDestacado = computed(() =>
    ARTICULOS_BLOG.find(articulo => articulo.destacado)
  );

  resto = computed(() =>
    ARTICULOS_BLOG.filter(articulo => !articulo.destacado)
  );

  articulosFiltrados = computed(() => {
    const termino = normalizar(this.searchTerm().trim());
    const categoria = this.selectedCategory();

    return this.resto().filter(articulo => {
      const coincideCategoria = !categoria || articulo.categoryId === categoria;
      const coincideTexto = !termino || normalizar(articulo.keywords).includes(termino);
      return coincideCategoria && coincideTexto;
    });
  });

  masLeidos = computed(() =>
    [...ARTICULOS_BLOG].sort((a, b) => b.readMinutes - a.readMinutes).slice(0, 4)
  );

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
}
