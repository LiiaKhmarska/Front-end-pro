
import { Box, Typography, Button } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material'; 
import {Header} from '@components'

export function ErrorPage() {
  return (
    <>
      <Header />
      <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh" 
      p={2}
      textAlign="center"
    >
      <ErrorOutline sx={{ fontSize: 100, color: 'error.main', mb: 4 }} /> 
      <Typography variant="h4" gutterBottom>
       Виникла помилка
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Щось трaпилося не за планом. Поверніться на головну сторінку і спробуйте ще раз...
      </Typography>
      <Button variant="contained" href="/" sx={{px:4, py:2}}>
        На головну
      </Button>
    </Box>
      </>

  );
}
