import { Box, Grid, Container, List, ListItem, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Footer() {
    return (
 <Box
            style={{
            width:"100%",
                height: "auto",
                backgroundColor: '#1976d2',
                paddingTop: '1rem',
                paddingBottom: "1rem",
            marginTop:"1rem"
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="row" alignItems="space-aroun" justifyContent="space-between">
                    <Grid size={5}>
                        <Typography variant='subtitle1' color='white'>
                            <List sx={{ p: 0 }}>
                                <ListItem sx={{my:0, p:0, fontWeight:'600'}}>Наші контакти:</ListItem>
                                <ListItem sx={{my:0, p:0}}> email: liia.khmarska@gmail.com</ListItem>
                                <ListItem sx={{my:0, p:0}}>+380670000000</ListItem>
                            </List>
                        </Typography>                      
                    </Grid>
                    <Grid size={4}>
                        <Typography variant='subtitle1' sx={{color:'white'}}> Ми  у соц.мережах: </Typography>
                        <Link href="www.linkedin.com/in/liia-khmarska-2980a5219" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon size='large' sx={{ color: 'white', mx:1, fontSize:'32px' }} aria-label='linkedIn' />
                                </Link>                            
                                <Link href="https://www.facebook.com/liia.khmarska/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon  sx={{ color: 'white', mx:1, fontSize:'32px' }} aria-label='facebook' />
                                </Link>
                                 <Link href="https://www.instagram.com/liia_khmarska/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon  sx={{ color: 'white', mx:1, fontSize:'32px' }} aria-label='instagram' />
                                </Link>
                        
                    </Grid>
                    <Grid size={2}>                        
                            <Typography variant='subtitle2' color='white'>
                            {`${new Date().getFullYear()} | React | Material UI`}
                        </Typography>                        
                    </Grid>
                </Grid>
        </Container>
        </Box>
             
    )
}