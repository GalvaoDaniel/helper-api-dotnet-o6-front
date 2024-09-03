import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from './components/Menu/Index';
import Rodape from './components/Rodape/Index';
import Calculadora from './components/Calculadora/Index';
import Grafico from './components/Grafico/Index';
import Home from './pages/Home/Index';

interface Taxas {
  cdiUltimoMes: string;
  cdiMedioMensal: string;
  cdiUltimosAno: string;
}

interface CalculoInvestimentoRequest {
  cdiAnual: number;
  cdiMensal: number;
  valor: number;
  porcentagemCdi: number;
  dataFim: string;
}

interface CalculoInvestimentoResponse {
  valorCdi: number;
  valorIpca: number;
  valorSelic: number;
}

const App: React.FC = () => {
  return (
    <div>
      <Menu />
      <Container>
        <Home></Home>
      </Container>
      <Rodape />
    </div>
  );
};

export default App;
