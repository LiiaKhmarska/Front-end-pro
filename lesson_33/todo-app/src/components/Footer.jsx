import {Box, Container, Grid, Typography} from '@mui/material'

export function Footer() {
    return (
        <Box
            style={{
            width:"100%",
                height: "auto",
                backgroundColor: '#2196f3',
                paddingTop: '1rem',
                paddingBottom: "1rem",
            marginTop:"1rem"
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="row" alignItems="space-aroun" justifyContent="space-between">
                    <Grid size={4}>
                        <Typography variant='subtitle1' color='white' data-testid='footer-email'>
                        email: liia.khmarska@gmail.com
                        </Typography>                      
                        
                    </Grid>
                    <Grid size={4}>                        
                            <Typography variant='subtitle2' color='white' data-testid='footer-date'>
                            {`${new Date().getFullYear()} | React | Material UI`}
                        </Typography>                        
                    </Grid>
                </Grid>
        </Container>
        </Box>
    )
}