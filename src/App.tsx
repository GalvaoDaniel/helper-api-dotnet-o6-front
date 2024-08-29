import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { Chart } from 'react-google-charts';

// Defina a taxa CDI (use uma média ou valor atual para cálculos)
const CDI_RATE = 0.13; // Exemplo: 13% ao ano

const App: React.FC = () => {
  const [initialValue, setInitialValue] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);

  const calculateReturn = () => {
    const data = [['Ano', 'CDI', 'Aleatório 1', 'Aleatório 2']];

    for (let year = 0; year <= years; year++) {
      const cdiValue = initialValue * Math.pow(1 + CDI_RATE, year);

      // Gerando valores aleatórios para as outras duas linhas
      const randomValue1 = initialValue * (1 + Math.random() * 0.2) * year;
      const randomValue2 = initialValue * (1 + Math.random() * 0.3) * year;

      data.push([`${year}`, cdiValue, randomValue1, randomValue2]);
    }
    setChartData(data);

    console.log({data});

    // Calcula o valor final após o período especificado
    const finalAmount = initialValue * Math.pow(1 + CDI_RATE, years);
    setResult(finalAmount);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Paper style={{ padding: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Calculadora de Rendimento - CDI
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Valor Inicial (R$)"
              type="number"
              fullWidth
              variant="outlined"
              value={initialValue}
              onChange={(e) => setInitialValue(Number(e.target.value))}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Tempo (Anos)"
              type="number"
              fullWidth
              variant="outlined"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={calculateReturn}
            >
              Calcular
            </Button>
          </Grid>

          {result !== null && (
            <Grid item xs={12}>
              <Typography variant="h6">
                Valor Final: R$ {result.toFixed(2)}
              </Typography>
            </Grid>
          )}

          {chartData.length > 1 && (
            <Grid item xs={12}>
              <Chart
                width={'100%'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Carregando gráfico...</div>}
                data={chartData}
                options={{
                  hAxis: {
                    title: 'Ano',
                  },
                  vAxis: {
                    title: 'Valor (R$)',
                  },
                  legend: { position: 'bottom' },
                  chartArea: { width: '80%', height: '70%' },
                  colors: ['#1976d2', '#ff9800', '#4caf50'],
                }}
              />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default App;
