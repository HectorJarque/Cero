export interface AreaInformativa {
  icon: string;
  titleKey: string;
  descKey: string;
}

export const AREAS_INFORMATIVAS: AreaInformativa[] = [
  {
    icon: '🌿',
    titleKey: 'informativa.areas.biodiversidad.title',
    descKey: 'informativa.areas.biodiversidad.description'
  },
  {
    icon: '🌍',
    titleKey: 'informativa.areas.climatico.title',
    descKey: 'informativa.areas.climatico.description'
  },
  {
    icon: '📚',
    titleKey: 'informativa.areas.educacion.title',
    descKey: 'informativa.areas.educacion.description'
  },
  {
    icon: '🤝',
    titleKey: 'informativa.areas.voluntariado.title',
    descKey: 'informativa.areas.voluntariado.description'
  }
];

export interface EstadisticaInformativa {
  value: string;
  labelKey: string;
}

export const ESTADISTICAS_INFORMATIVAS: EstadisticaInformativa[] = [
  { value: '12', labelKey: 'informativa.stats.anios' },
  { value: '47', labelKey: 'informativa.stats.informes' },
  { value: '30', labelKey: 'informativa.stats.centros' }
];

export interface RecursoInformativo {
  titleKey: string;
  descKey: string;
}

export const RECURSOS_INFORMATIVOS: RecursoInformativo[] = [
  {
    titleKey: 'informativa.recursos.guias.title',
    descKey: 'informativa.recursos.guias.description'
  },
  {
    titleKey: 'informativa.recursos.informes.title',
    descKey: 'informativa.recursos.informes.description'
  },
  {
    titleKey: 'informativa.recursos.charlas.title',
    descKey: 'informativa.recursos.charlas.description'
  }
];

export interface PreguntaFrecuente {
  questionKey: string;
  answerKey: string;
}

export const FAQ_INFORMATIVA: PreguntaFrecuente[] = [
  {
    questionKey: 'informativa.faq.q1.question',
    answerKey: 'informativa.faq.q1.answer'
  },
  {
    questionKey: 'informativa.faq.q2.question',
    answerKey: 'informativa.faq.q2.answer'
  },
  {
    questionKey: 'informativa.faq.q3.question',
    answerKey: 'informativa.faq.q3.answer'
  }
];
