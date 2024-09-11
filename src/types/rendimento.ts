export interface CalcularInvestimentoResponse {
  dadosGrafico: DadosGrafico[];
  valorCdi: number;
  valorIpca: number;
  valorSelic: number;
}
export interface DadosGrafico {
  mes: string;
  valorCdi: number;
  valorIpca: number;
  valorSelic: number;
}
export interface CalcularInvestimentoRequest {
  quantidadeMeses: number;
  valor: number;
  porcentagemCdi: number;
}

export interface ObterCdiAtualResponse {
  cdiUltimoMes: string;
  cdiMedioMensal: string;
  cdiUltimosAno: string;
}
