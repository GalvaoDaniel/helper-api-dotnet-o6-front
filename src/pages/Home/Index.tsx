import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";

import * as apiInvestimento from "../../services/investimento";

import Calculadora from "../../components/Calculadora/Index";
import Grafico from "../../components/Grafico/Index";
import {
  CalcularInvestimentoRequest,
  CalcularInvestimentoResponse,
  ObterCdiAtualResponse,
} from "../../types/rendimento";
import TabelaDados from "../../components/TabelaDados/Index";

const Home: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dadosGrafico, setDadosGrafico] =
    useState<CalcularInvestimentoResponse>();
  const [valosCdi, setValoresCdi] = useState<ObterCdiAtualResponse>();

  const onConfirm = (data: CalcularInvestimentoRequest) => {
    setLoading(true);
    fetchRendimento(data);
  };

  const fetchRendimento = useCallback(
    async (data: CalcularInvestimentoRequest) => {
      try {
        const calculo = await apiInvestimento.calcularInvestimento(data);
        if (calculo) setDadosGrafico(calculo);
        setErrorMessage("");
      } catch (error) {
        setErrorMessage("Ocorreu um erro, tente novamente.");
        console.error(error);
      } finally {
        console.log("f");
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const valoresCdi = await apiInvestimento.obterValorCdi();
        console.log({ valoresCdi });
        if (valoresCdi) setValoresCdi(valoresCdi);
      } catch (error) {
        setErrorMessage("Ocorreu um erro, tente novamente.");
      }
    };

    fetchData();
  }, []);

  return (
    <Box my={4}>
      {errorMessage && (
        <Alert
          severity="error"
          onClose={() => {
            setErrorMessage("");
          }}
        >
          {errorMessage}
        </Alert>
      )}
      {valosCdi ? (
        <Calculadora valoresCdi={valosCdi} onConfirm={onConfirm}></Calculadora>
      ) : (
        <Typography component="div" key={"h1"} variant={"h1"}>
          <Skeleton />
        </Typography>
      )}
      <Box my={8}>
        {loading && (
          <Typography component="div" key={"h1"} variant={"h1"}>
            <Skeleton />
          </Typography>
        )}
        {dadosGrafico && dadosGrafico.dadosGrafico.length > 0 && (
          <>
            <Grafico dadosGrafico={dadosGrafico.dadosGrafico} />
            <Divider />
            <TabelaDados dadosTaxas={dadosGrafico}></TabelaDados>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
