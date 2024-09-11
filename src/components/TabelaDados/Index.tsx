import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { CalcularInvestimentoResponse } from "../../types/rendimento";

const TabelaDados: React.FC<{dadosTaxas: CalcularInvestimentoResponse}> = ({dadosTaxas}) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Indicador</TableCell>
            <TableCell align="center">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={dadosTaxas.valorSelic}>
            <TableCell align="center">SELIC</TableCell>
            <TableCell align="center">{dadosTaxas.valorSelic}%</TableCell>
          </TableRow>
          <TableRow key={dadosTaxas.valorCdi}>
            <TableCell align="center">CDI</TableCell>
            <TableCell align="center">{dadosTaxas.valorCdi}%</TableCell>
          </TableRow>
          <TableRow key={dadosTaxas.valorIpca}>
            <TableCell align="center">IPCA</TableCell>
            <TableCell align="center">{dadosTaxas.valorIpca}%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabelaDados;
