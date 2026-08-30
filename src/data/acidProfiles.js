const profiles = {
  'acido-formico': {
    slug: 'acido-formico', name: 'Ácido fórmico', iupac: 'ácido metanoico', formula: 'HCOOH', structuralFormula: 'H–C(=O)–OH',
    molarMass: '46,03 g/mol', pKa: '3,75', cid: 284, moleculePath: 'molecules/formic-acid.sdf', atomCounts: { C: 1, O: 2, H: 2 },
    lead: 'O ácido carboxílico mais simples: pequeno na estrutura, relevante na defesa de organismos e em processos industriais.',
    chips: ['Defesa química', 'C₁', 'Conservação', 'Indústria'],
    identity: ['Possui apenas um carbono e não apresenta uma cadeia carbônica adicional.', 'É mais ácido que o ácido acético porque não há um grupo metila doador de elétrons.', 'Em água, estabelece o equilíbrio entre ácido fórmico e íon formiato.'],
    journey: [{ title: 'Na natureza', text: 'É associado à defesa química de formigas e também ocorre em secreções de outros organismos.' }, { title: 'Na produção', text: 'Pode ser obtido industrialmente por rotas que envolvem monóxido de carbono e metanol.' }, { title: 'No uso', text: 'Participa de conservação de ração, processamento de couro, limpeza e síntese química.' }],
    applications: ['Conservação e controle microbiológico de rações', 'Tanagem e processamento têxtil', 'Desincrustantes e produtos de limpeza', 'Intermediário em síntese orgânica'],
    safety: 'É corrosivo em concentrações elevadas. “Natural” não significa inofensivo: contato, concentração e tempo de exposição determinam o risco.'
  },
  'acido-acetico': {
    slug: 'acido-acetico', name: 'Ácido acético', iupac: 'ácido etanoico', formula: 'C₂H₄O₂', structuralFormula: 'CH₃–C(=O)–OH',
    molarMass: '60,05 g/mol', pKa: '4,76', cid: 176, moleculePath: 'molecules/acetic-acid.sdf', atomCounts: { C: 2, O: 2, H: 4 },
    lead: 'A molécula que dá ao vinagre sua acidez característica e serve de plataforma para alimentos, solventes, polímeros e síntese química.',
    chips: ['Vinagre', 'Fermentação acética', 'Acetatos', 'C₂'],
    identity: ['A carboxila está ligada a um grupo metila, formando o segundo membro da série monocarboxílica.', 'Pode formar acetatos, sais e ésteres presentes em solventes, aromas e materiais.', 'No vinagre aparece diluído em água, não como ácido acético puro.'],
    journey: [{ title: 'Na fermentação', text: 'Bactérias acéticas oxidam etanol e originam ácido acético em processos de produção de vinagre.' }, { title: 'No equilíbrio', text: 'Em água, apenas uma fração ioniza; por isso é classificado como ácido fraco.' }, { title: 'Na indústria', text: 'É matéria-prima para acetato de vinila, anidrido acético e diversos ésteres.' }],
    applications: ['Acidulante e conservante em alimentos', 'Produção de acetato de vinila para adesivos e tintas', 'Síntese de ésteres usados como solventes', 'Reagente em laboratórios e processos industriais'],
    safety: 'O vinagre é uma solução diluída; ácido acético concentrado é corrosivo e exige controle de vapores e proteção adequada.'
  },
  'acido-citrico': {
    slug: 'acido-citrico', name: 'Ácido cítrico', iupac: 'ácido 2-hidroxipropano-1,2,3-tricarboxílico', formula: 'C₆H₈O₇', structuralFormula: 'HOOC–CH₂–C(OH)(COOH)–CH₂–COOH',
    molarMass: '192,12 g/mol', pKa: '3,13 · 4,76 · 6,40', cid: 311, moleculePath: 'molecules/citric-acid.sdf', atomCounts: { C: 6, O: 7, H: 8 },
    lead: 'Um ácido triprótico presente no metabolismo e amplamente usado para controlar acidez, complexar metais e formular alimentos.',
    chips: ['Tricarboxílico', 'Ciclo de Krebs', 'Quelante', 'INS 330'],
    identity: ['Possui três carboxilas, capazes de perder prótons em etapas sucessivas.', 'A hidroxila e as carboxilas permitem várias ligações de hidrogênio e interação com íons metálicos.', 'Citrato é uma forma predominante em muitos meios biológicos e participa do ciclo do ácido cítrico.'],
    journey: [{ title: 'Nos frutos', text: 'Contribui para a acidez de frutas cítricas, mas sua presença não se limita a elas.' }, { title: 'Na célula', text: 'O citrato é um intermediário central do ciclo do ácido cítrico, ligado à obtenção de energia.' }, { title: 'Na formulação', text: 'Ajusta pH, acrescenta sabor ácido e ajuda a complexar íons metálicos.' }],
    applications: ['Acidulante INS 330 em bebidas e alimentos', 'Agente quelante em limpeza e formulações', 'Sistemas tampão de citrato', 'Comprimidos e misturas efervescentes'],
    safety: 'O uso alimentar regulamentado não equivale ao manuseio irrestrito do material concentrado; poeira e soluções fortes podem irritar olhos e pele.'
  },
  'acido-benzoico': {
    slug: 'acido-benzoico', name: 'Ácido benzoico', iupac: 'ácido benzenocarboxílico', formula: 'C₇H₆O₂', structuralFormula: 'C₆H₅–C(=O)–OH',
    molarMass: '122,12 g/mol', pKa: '4,20', cid: 243, moleculePath: 'molecules/benzoic-acid.sdf', atomCounts: { C: 7, O: 2, H: 6 },
    lead: 'Um anel aromático ligado à carboxila: estrutura que conecta conservação de alimentos, síntese orgânica, fármacos e fragrâncias.',
    chips: ['Aromático', 'Benzoatos', 'Conservação', 'Síntese'],
    identity: ['A carboxila está ligada diretamente a um anel benzênico.', 'O anel aromático reduz sua afinidade com água quando comparado a ácidos de cadeia curta.', 'Benzoato e ácido benzoico coexistem conforme o pH; a forma não ionizada é importante na ação conservante.'],
    journey: [{ title: 'Na estrutura', text: 'Combina uma região aromática apolar com uma carboxila polar e ionizável.' }, { title: 'No alimento', text: 'Benzoatos são empregados em produtos ácidos, sob limites e condições regulatórias.' }, { title: 'Na síntese', text: 'Serve de precursor para ésteres, intermediários farmacêuticos, resinas e fragrâncias.' }],
    applications: ['Conservantes à base de benzoato', 'Síntese de fármacos e intermediários', 'Produção de ésteres aromáticos', 'Resinas, plastificantes e especialidades químicas'],
    safety: 'Aplicações alimentares obedecem limites regulatórios. O composto isolado pode irritar e deve ser manuseado conforme sua ficha de segurança.'
  },
  'acido-palmitico': {
    slug: 'acido-palmitico', name: 'Ácido palmítico', iupac: 'ácido hexadecanoico', formula: 'C₁₆H₃₂O₂', structuralFormula: 'CH₃–(CH₂)₁₄–COOH',
    molarMass: '256,42 g/mol', pKa: '≈ 4,8', cid: 985, moleculePath: 'molecules/palmitic-acid.sdf', atomCounts: { C: 16, O: 2, H: 32 },
    lead: 'Um ácido graxo saturado de cadeia longa que torna visível a dupla natureza dos lipídios: cabeça polar e extensa cauda apolar.',
    chips: ['Ácido graxo', 'Saturado', 'C₁₆', 'Lipídios'],
    identity: ['A cadeia de 16 carbonos não possui ligações duplas carbono–carbono.', 'A carboxila forma a cabeça polar, enquanto a cadeia hidrocarbonada constitui a cauda apolar.', 'É encontrado esterificado em triglicerídeos e fosfolipídios, não apenas como ácido livre.'],
    journey: [{ title: 'Nos lipídios', text: 'Integra gorduras e óleos como parte de moléculas maiores, especialmente triglicerídeos.' }, { title: 'No metabolismo', text: 'Pode ser armazenado, oxidado para obtenção de energia ou incorporado a outros lipídios.' }, { title: 'Nos materiais', text: 'Seus derivados aparecem em sabões, surfactantes, cosméticos e processos de biodiesel.' }],
    applications: ['Sabões e surfactantes por formação de palmitatos', 'Formulações cosméticas e emulsões', 'Estudo de membranas e metabolismo lipídico', 'Matéria-prima e referência para biocombustíveis'],
    safety: 'A discussão nutricional depende do alimento e do padrão alimentar completo; a presença de uma molécula isolada não determina sozinha o efeito de uma dieta.'
  }
}

export const acidProfileList = Object.values(profiles)
export default profiles
