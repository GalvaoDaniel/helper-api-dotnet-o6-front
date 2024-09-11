import axios, { AxiosResponse } from "axios";
import {
  CalcularInvestimentoRequest,
  CalcularInvestimentoResponse,
  ObterCdiAtualResponse,
} from "../types/rendimento";

const API_URL = "https://localhost:7273/investimento/v1";

export const calcularInvestimento = async (
  calcularRendimento: CalcularInvestimentoRequest
): Promise<CalcularInvestimentoResponse> => {
  try {
    const action = "calcular-investimentos";
    const response: AxiosResponse<CalcularInvestimentoResponse> =
      await axios.post(`${API_URL}/${action}`, calcularRendimento);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
};

export const obterValorCdi = async (): Promise<ObterCdiAtualResponse> => {
  const action = "obter-taxas";
  try {
    const response: AxiosResponse<ObterCdiAtualResponse> = await axios.get(
      `${API_URL}/${action}`
    );
    console.log({ response });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
};
