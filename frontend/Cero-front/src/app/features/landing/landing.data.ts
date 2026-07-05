export interface BeneficioTaller {
  icon: 'ojo' | 'camara' | 'grupo' | 'certificado';
  titleKey: string;
  descKey: string;
}

export const BENEFICIOS_TALLER: BeneficioTaller[] = [
  { icon: 'ojo', titleKey: 'landing.beneficios.mirada.title', descKey: 'landing.beneficios.mirada.description' },
  { icon: 'camara', titleKey: 'landing.beneficios.tecnica.title', descKey: 'landing.beneficios.tecnica.description' },
  { icon: 'grupo', titleKey: 'landing.beneficios.grupo.title', descKey: 'landing.beneficios.grupo.description' },
  { icon: 'certificado', titleKey: 'landing.beneficios.practica.title', descKey: 'landing.beneficios.practica.description' }
];

export interface SesionPrograma {
  numero: string;
  titleKey: string;
  descKey: string;
}

export const PROGRAMA_TALLER: SesionPrograma[] = [
  { numero: '01', titleKey: 'landing.programa.s1.title', descKey: 'landing.programa.s1.description' },
  { numero: '02', titleKey: 'landing.programa.s2.title', descKey: 'landing.programa.s2.description' },
  { numero: '03', titleKey: 'landing.programa.s3.title', descKey: 'landing.programa.s3.description' },
  { numero: '04', titleKey: 'landing.programa.s4.title', descKey: 'landing.programa.s4.description' }
];

export interface TestimonioTaller {
  textKey: string;
  authorKey: string;
}

export const TESTIMONIOS_TALLER: TestimonioTaller[] = [
  { textKey: 'landing.testimonios.t1.text', authorKey: 'landing.testimonios.t1.author' },
  { textKey: 'landing.testimonios.t2.text', authorKey: 'landing.testimonios.t2.author' },
  { textKey: 'landing.testimonios.t3.text', authorKey: 'landing.testimonios.t3.author' }
];

export interface PreguntaTaller {
  questionKey: string;
  answerKey: string;
}

export const FAQ_TALLER: PreguntaTaller[] = [
  { questionKey: 'landing.faq.q1.question', answerKey: 'landing.faq.q1.answer' },
  { questionKey: 'landing.faq.q2.question', answerKey: 'landing.faq.q2.answer' },
  { questionKey: 'landing.faq.q3.question', answerKey: 'landing.faq.q3.answer' },
  { questionKey: 'landing.faq.q4.question', answerKey: 'landing.faq.q4.answer' }
];
