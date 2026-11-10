export interface RoleInfo {
  id: string;
  title: string;
  salaryRange: string;
  description: string;
  dailyTasks: string[];
}

export const SEVEN_ROLES: RoleInfo[] = [
  {
    id: 'porteiro',
    title: 'Porteiro',
    salaryRange: 'R$ 1.800,00 à R$ 2.400,00',
    description: 'Atuação fundamental em condomínios residenciais e comerciais, recepção de moradores e encomendas.',
    dailyTasks: ['Atendimento a moradores e visitantes', 'Recebimento e registro de encomendas', 'Abertura e controle de portões'],
  },
  {
    id: 'recepcionista',
    title: 'Recepcionista',
    salaryRange: 'R$ 1.600,00 à R$ 2.300,00',
    description: 'Primeiro ponto de contato em prédios executivos, empresas e consultórios com foco em postura e cordialidade.',
    dailyTasks: ['Atendimento telefônico e presencial', 'Agendamento e cadastro de visitantes', 'Encaminhamento aos setores corretos'],
  },
  {
    id: 'controlador-acesso',
    title: 'Controlador de Acesso',
    salaryRange: 'R$ 1.700,00 à R$ 2.200,00',
    description: 'Gerenciamento técnico de fluxo de pessoas e veículos utilizando catracas eletrônicas e sistemas digitais.',
    dailyTasks: ['Operação de catracas e cancelas', 'Identificação biométrica ou crachá', 'Inspeção e liberação de veículos'],
  },
  {
    id: 'vigia',
    title: 'Vigia',
    salaryRange: 'R$ 1.750,00 à R$ 2.350,00',
    description: 'Rondas preventivas e proteção patrimonial de instalações, depósitos, escolas e áreas comerciais.',
    dailyTasks: ['Rondas periódicas diurnas e noturnas', 'Inspeção de portas, janelas e iluminação', 'Comunicação imediata de anormalidades'],
  },
  {
    id: 'fiscal-piso',
    title: 'Fiscal de Piso',
    salaryRange: 'R$ 1.650,00 à R$ 2.150,00',
    description: 'Orientação e supervisão da ordem geral em shoppings, hipermercados e grandes galerias.',
    dailyTasks: ['Fiscalização de corredores e fluxos', 'Apoio aos clientes e lojistas', 'Intervenção preventiva em desordens'],
  },
  {
    id: 'fiscal-loja',
    title: 'Fiscal de Loja',
    salaryRange: 'R$ 1.600,00 à R$ 2.100,00',
    description: 'Especialista em prevenção de perdas no varejo, monitoramento discreto e salvaguarda do estoque.',
    dailyTasks: ['Prevenção de furtos e perdas', 'Monitoramento do salão de vendas', 'Conferência de entradas e saídas'],
  },
  {
    id: 'staff-eventos',
    title: 'Staff de Eventos',
    salaryRange: 'R$ 150,00 à R$ 350,00 / diária',
    description: 'Atuação em shows, feiras corporativas, estádios e congressos com credenciamento e orientação.',
    dailyTasks: ['Credenciamento e validação de ingressos', 'Organização de filas e fluxos', 'Orientação ao público e camarotes'],
  },
];

export const SALARY_HIGHLIGHTS = [
  {
    role: 'Porteiro',
    range: 'R$ 1.800,00 à R$ 2.400,00',
    demand: 'Altíssima',
    notes: 'Condomínios residenciais e edifícios corporativos',
  },
  {
    role: 'Controlador de Acesso',
    range: 'R$ 1.700,00 à R$ 2.200,00',
    demand: 'Muito Alta',
    notes: 'Empresas, indústrias e centros logísticos',
  },
  {
    role: 'Fiscal de Loja',
    range: 'R$ 1.600,00 à R$ 2.100,00',
    demand: 'Alta',
    notes: 'Redes de varejo, supermercados e shoppings',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Marcos Vinícius Silva',
    role: 'Porteiro em Condomínio Residencial',
    city: 'Campinas - SP',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    comment: 'Eu trabalhava como repositor e queria uma oportunidade melhor. Concluí o curso Portaria Nível 7 em 10 dias pelo celular. Duas semanas depois fui chamado para uma entrevista em um condomínio fechado e fui contratado!',
    rating: 5,
    date: 'Formado há 2 meses',
  },
  {
    id: '2',
    name: 'Fernanda Albuquerque',
    role: 'Recepcionista Corporativa',
    city: 'São Paulo - SP',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    comment: 'O conteúdo de postura profissional e atendimento ao público é excelente. Apresentei o certificado no processo seletivo e o gestor elogiou o respaldo da lei LDB. Hoje trabalho em um prédio na região da Faria Lima.',
    rating: 5,
    date: 'Formada há 1 mês',
  },
  {
    id: '3',
    name: 'Roberto Carlos Mendes',
    role: 'Controlador de Acesso',
    city: 'Curitiba - PR',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    comment: 'Estava desempregado há 8 meses. O investimento de 297 reais se pagou nos primeiros dias de trabalho. O suporte tirou todas as minhas dúvidas e o certificado foi emitido logo após a prova.',
    rating: 5,
    date: 'Formado há 3 meses',
  },
  {
    id: '4',
    name: 'Tatiane Santana',
    role: 'Fiscal de Loja',
    city: 'Belo Horizonte - MG',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    comment: 'Aprendi as técnicas preventivas sem constrangimento para clientes. O certificado de 7 funções abre muitas portas porque a gente pode concorrer a várias vagas ao mesmo tempo.',
    rating: 5,
    date: 'Formada há 2 meses',
  },
];

export const FAQS = [
  {
    question: 'O certificado é reconhecido em todo o Brasil?',
    answer: 'Sim! Nosso curso é classificado como curso livre de qualificação profissional, com amparo legal pela Lei Federal nº 9.394/96 (LDB), Decreto Presidencial nº 5.154/2004 e Resolução CNE/CEB nº 04/99. O certificado possui validade em todo o território nacional e é amplamente aceito por condomínios, empresas de terceirização e órgãos públicos.',
  },
  {
    question: 'O certificado especifica as 7 funções?',
    answer: 'Sim, o certificado discrimina detalhadamente as 7 áreas de habilitação: Porteiro, Recepcionista, Controlador de Acesso, Vigia, Fiscal de Piso, Fiscal de Loja e Staff de Eventos, além da carga horária e conteúdo programático completo.',
  },
  {
    question: 'Como e quando tenho acesso às aulas?',
    answer: 'O acesso é imediato! Assim que seu pagamento for confirmado (no PIX ou Cartão em até 1 minuto), você recebe seus dados de acesso por e-mail e WhatsApp para começar os estudos imediatamente pelo celular, computador ou tablet.',
  },
  {
    question: 'Quanto tempo tenho para concluir o curso?',
    answer: 'Você estuda 100% no seu próprio ritmo! Não há prazo mínimo obrigatório: quem tem pressa pode concluir em poucos dias, ou levar semanas caso prefira estudar aos fins de semana.',
  },
  {
    question: 'Preciso ter experiência prévia para fazer o curso?',
    answer: 'Não! O curso foi desenvolvido com metodologia do básico ao avançado, passo a passo, exatamente para quem quer entrar na área do zero ou para quem já atua e deseja formalizar a qualificação.',
  },
  {
    question: 'Como funciona a garantia incondicional de 7 dias?',
    answer: 'Se por qualquer motivo você achar que o curso não é para você, basta nos enviar uma única mensagem dentro de 7 dias e devolvemos 100% do seu valor pago, sem burocracia.',
  },
];
