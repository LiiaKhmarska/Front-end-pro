import { Avatar, Paper, Container,  Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import { LogInForm } from '@components';

export function LoginPage({setShowLoginPage}) {
  
    function handleClose() {
        setShowLoginPage(false)        
    }

    return (
        <Container maxWidth='xs' sx={{position:'absolute', left: '35%', zIndex: 1 }}>
            <Paper elevation={10} sx={{ marginTop: 8, padding: 2, position:'relataive',  }} >
                <CloseIcon  sx={{ position: 'absolute', right: 40, }} onClick={ handleClose} />
                <Avatar sx={{mx:'auto', bgcolor:'green', textAlign:'center', mb:1, mt:4 }}>
                    <LoginIcon/>
                </Avatar>
                <Typography component='h2' variant='h5' sx={{ textAlign:'center', mt:2}}>
                    Вхід на сайт
                </Typography>
                <LogInForm setShowLoginPage={setShowLoginPage} />
            </Paper>
            
        </Container>
    )
}