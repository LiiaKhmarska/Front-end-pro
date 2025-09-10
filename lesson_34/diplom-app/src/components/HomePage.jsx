import { Box, Container, Grid, Typography, Card } from '@mui/material';
import { CardCategory } from '@components'
import {categories} from './categories'

export function HomePage() {    
    
    return (
        <Box  >
            <Container maxWidth='100%' sx={{backgroundImage:'linear-gradient(to bottom, rgba(7, 126, 246, 0.93), rgba(253, 253, 255, 0.88))'}}>
                <Typography variant='h2' align='center' gutterBottom sx={{ py: 5, color: 'white', textShadow: '2px 2px navy' }}>Пухнасті чотирилапки</Typography>
            </Container>
            <Container maxWidth='md'>
                  <Typography variant='h6' align='center' color='textSecondary'  sx={{textAlign:'justify', }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est asperiores in sequi, quibusdam tempora aliquam mollitia dicta atque voluptatem nobis, harum ipsam, corrupti beatae assumenda incidunt omnis! Porro, facere sit!
                </Typography>
            </Container>
            <Grid container spacing={3} sx={{ my: 2, justifyContent: 'center' }}> 
                {Object.keys(categories).map((item) => (
                    <Grid key={item} size={{ xs: 12, sm: 5, md: 3 }}>
                        <CardCategory cardContent={categories[item]} categoryTitle={ item} />
                    </Grid>
                ))}                 
            </Grid>
        </Box>
    )
}