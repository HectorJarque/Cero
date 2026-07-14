export interface CaracteristicaSaas {
  numero: string;
  titleKey: string;
  descKey: string;
}

export const CARACTERISTICAS_SAAS: CaracteristicaSaas[] = [
  {
    numero: '01',
    titleKey: 'saas.features.tracking.title',
    descKey: 'saas.features.tracking.description'
  },
  {
    numero: '02',
    titleKey: 'saas.features.tasks.title',
    descKey: 'saas.features.tasks.description'
  },
  {
    numero: '03',
    titleKey: 'saas.features.reports.title',
    descKey: 'saas.features.reports.description'
  },
  {
    numero: '04',
    titleKey: 'saas.features.team.title',
    descKey: 'saas.features.team.description'
  }
];

export interface FilaComparativa {
  labelKey: string;
  free: string | boolean;
  pro: string | boolean;
}

export const COMPARATIVA_PLANES: FilaComparativa[] = [
  {
    labelKey: 'saas.comparison.projects',
    free: '2',
    pro: 'saas.comparison.unlimited'
  },
  { labelKey: 'saas.comparison.members', free: '1', pro: '20' },
  { labelKey: 'saas.comparison.tracking', free: true, pro: true },
  { labelKey: 'saas.comparison.reports', free: false, pro: true },
  { labelKey: 'saas.comparison.integrations', free: false, pro: true },
  {
    labelKey: 'saas.comparison.support',
    free: 'saas.comparison.supportEmail',
    pro: 'saas.comparison.supportPriority'
  }
];

export interface IntegracionSaas {
  nombre: string;
}

export const INTEGRACIONES_SAAS: IntegracionSaas[] = [
  { nombre: 'Slack' },
  { nombre: 'Google Calendar' },
  { nombre: 'Notion' },
  { nombre: 'Trello' },
  { nombre: 'GitHub' },
  { nombre: 'Zapier' }
];

export interface TestimonioSaas {
  textKey: string;
  authorKey: string;
  roleKey: string;
}

export const TESTIMONIOS_SAAS: TestimonioSaas[] = [
  {
    textKey: 'saas.testimonios.t1.text',
    authorKey: 'saas.testimonios.t1.author',
    roleKey: 'saas.testimonios.t1.role'
  },
  {
    textKey: 'saas.testimonios.t2.text',
    authorKey: 'saas.testimonios.t2.author',
    roleKey: 'saas.testimonios.t2.role'
  },
  {
    textKey: 'saas.testimonios.t3.text',
    authorKey: 'saas.testimonios.t3.author',
    roleKey: 'saas.testimonios.t3.role'
  }
];

export interface PreguntaSaas {
  questionKey: string;
  answerKey: string;
}

export const FAQ_SAAS: PreguntaSaas[] = [
  { questionKey: 'saas.faq.q1.question', answerKey: 'saas.faq.q1.answer' },
  { questionKey: 'saas.faq.q2.question', answerKey: 'saas.faq.q2.answer' },
  { questionKey: 'saas.faq.q3.question', answerKey: 'saas.faq.q3.answer' }
];
