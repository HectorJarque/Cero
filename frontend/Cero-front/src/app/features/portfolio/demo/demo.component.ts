import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PROYECTOS_DEMO } from '../portfolio.data';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [RouterLink, TranslatePipe, TranslatePipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  private route = inject(ActivatedRoute);

  private idParam = toSignal(
    this.route.paramMap.pipe(map(params => params.get('id') ?? '')),
    { initialValue: '' }
  );

  proyecto = computed(() =>
    PROYECTOS_DEMO.find(p => p.id === this.idParam())
  );
}
