import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { InputAdornment } from "@mui/material";
import {
  CalcularInvestimentoRequest,
  ObterCdiAtualResponse,
} from "../../types/rendimento";

interface CalculadoraProps {
  onConfirm: (values: CalcularInvestimentoRequest) => void;
  valoresCdi: ObterCdiAtualResponse;
}

const Calculadora: React.FC<CalculadoraProps> = ({ onConfirm, valoresCdi }) => {
  const [valor, setValor] = useState<string>("");
  const [meses, setMeses] = useState<string>("12");
  const [porcentagemCdi, setPorcentagemCdi] = useState<string>("100");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onConfirm({
      quantidadeMeses: Number(meses) || 12,
      porcentagemCdi: Number(porcentagemCdi) || 100,
      valor: Number(valor) || 0,
    });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, width: "100%" }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Rendimento CDI
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Valor Investido"
              variant="outlined"
              fullWidth
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Tempo de investimento (meses)"
              variant="outlined"
              type="number"
              fullWidth
              value={meses}
              onChange={(e) => setMeses(e.target.value)}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Porcentagem CDI"
              variant="outlined"
              type="number"
              fullWidth
              value={porcentagemCdi}
              onChange={(e) => setPorcentagemCdi(e.target.value)}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Box>
          <Typography variant="overline" gutterBottom sx={{ display: "block" }}>
            CDI Último Mês: {valoresCdi.cdiUltimoMes}
          </Typography>
          <Typography variant="overline" gutterBottom sx={{ display: "block" }}>
            CDI Médio: {valoresCdi.cdiMedioMensal}
          </Typography>
          <Typography variant="overline" gutterBottom sx={{ display: "block" }}>
            CDI Último Ano: {valoresCdi.cdiUltimosAno}
          </Typography>
          <Button type="submit" disabled={!valor || !porcentagemCdi || !meses} variant="contained" color="primary" fullWidth>
            Calcular
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Calculadora;
