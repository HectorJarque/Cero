export interface FranjaHoraria {
  hora: string;
  turno: 'comida' | 'cena';
}

export const FRANJAS_HORARIAS: FranjaHoraria[] = [
  { hora: '13:00', turno: 'comida' },
  { hora: '13:30', turno: 'comida' },
  { hora: '14:00', turno: 'comida' },
  { hora: '14:30', turno: 'comida' },
  { hora: '15:00', turno: 'comida' },
  { hora: '20:00', turno: 'cena' },
  { hora: '20:30', turno: 'cena' },
  { hora: '21:00', turno: 'cena' },
  { hora: '21:30', turno: 'cena' },
  { hora: '22:00', turno: 'cena' }
];

/**
 * Ocupación simulada: para cada fecha (YYYY-MM-DD) y hora, cuántas mesas
 * ya están reservadas. Si una combinación no aparece aquí, se asume libre.
 * Aforo máximo simulado por franja: 6 mesas.
 */
export const OCUPACION_SIMULADA: Record<string, Record<string, number>> = {
  '2026-07-10': { '13:30': 6, '14:00': 5, '20:30': 6, '21:00': 4 },
  '2026-07-11': { '20:00': 3, '20:30': 6, '21:00': 6, '21:30': 6 },
  '2026-07-12': { '13:00': 2, '14:30': 6, '20:30': 5 },
  '2026-07-17': { '20:30': 6, '21:00': 6 },
  '2026-07-18': { '13:30': 6, '14:00': 6, '14:30': 6 }
};

export const AFORO_MAXIMO_POR_FRANJA = 6;

export interface PlatoDestacado {
  titleKey: string;
  descKey: string;
  price: string;
}

export const PLATOS_DESTACADOS: PlatoDestacado[] = [
  { titleKey: 'reservas.menu.arrozSenyoret.title', descKey: 'reservas.menu.arrozSenyoret.description', price: '18,50 €' },
  { titleKey: 'reservas.menu.allipebre.title', descKey: 'reservas.menu.allipebre.description', price: '21,00 €' },
  { titleKey: 'reservas.menu.esgarraet.title', descKey: 'reservas.menu.esgarraet.description', price: '9,50 €' },
  { titleKey: 'reservas.menu.tarta.title', descKey: 'reservas.menu.tarta.description', price: '6,00 €' }
];

export interface TestimonioReservas {
  textKey: string;
  authorKey: string;
}

export const TESTIMONIOS_RESERVAS: TestimonioReservas[] = [
  { textKey: 'reservas.testimonios.t1.text', authorKey: 'reservas.testimonios.t1.author' },
  { textKey: 'reservas.testimonios.t2.text', authorKey: 'reservas.testimonios.t2.author' },
  { textKey: 'reservas.testimonios.t3.text', authorKey: 'reservas.testimonios.t3.author' }
];
