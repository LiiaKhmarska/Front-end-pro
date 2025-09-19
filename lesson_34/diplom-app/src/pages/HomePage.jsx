import { Box, Container, Grid, Typography, Card } from '@mui/material';
import { CardCategory, Header } from '@components'
import {categories} from '../helpers/categories'

export function HomePage() {    
   
    return (
        <Box  >
            <Header/>
            <Container maxWidth='100%' sx={{backgroundImage:'linear-gradient(to bottom, rgba(7, 126, 246, 0.93), rgba(253, 253, 255, 0.88))'}}>
                <Typography variant='h2' align='center' gutterBottom sx={{ py: 5, color: 'navy' }}>Пухнасті чотирилапки</Typography>
            </Container>
            <Container maxWidth='lg'>
                  <Typography variant='h6' align='center' color='textSecondary'  sx={{textAlign:'justify', }}>
                  Quel che aveva capito, con certezza assoluta, era che vivere senza di lui sarebbe stato, per sempre, la sua occupazione fondamentale, e che da quel momento le cose avrebbero avuto ogni volta un’ombra, per lei, un’ombra in più, perfino nel buio, e forse soprattutto nel buio.             </Typography>
            </Container>
            <Grid container spacing={3} sx={{ my: 2, justifyContent: 'center' }}> 
                {Object.keys(categories).map((item) => (
                    <Grid key={item} size={{ xs: 12, sm: 5, md: 3 }}>
                        <CardCategory cardContent={categories[item]} categoryTitle={item}  />
                    </Grid>
                ))}                 
            </Grid>
        </Box>
    )
}