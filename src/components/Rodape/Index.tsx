import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Rodape: React.FC = () => {
  return (
    <Box component="footer" sx={{ p: 2, backgroundColor: '#3f51b5', color: 'white', textAlign: 'center' }}>
      <Typography variant="body1">© 2024 Minha Aplicação. Todos os direitos reservados.</Typography>
    </Box>
  );
};

export default Rodape;
