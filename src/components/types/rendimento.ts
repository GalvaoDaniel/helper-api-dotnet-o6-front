export interface CalcularInvestimentoResponse {
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
