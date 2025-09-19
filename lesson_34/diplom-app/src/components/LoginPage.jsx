import { Avatar, Paper, Container,  Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import { LogInForm } from '@components';

export function LoginPage({setOpen}) {
  
    function handleClose() {
        setOpen(false)        
    }

    return (
        <Container maxWidth='xs' sx={{position:'relative',top:'10%', zIndex: 1 }}>
            <Paper elevation={10} sx={{ marginTop: 1, padding: 2, position:'relataive',  }} >
                <CloseIcon  sx={{ position:'absolute', right: 38, }} onClick={ handleClose } />
                <Avatar sx={{mx:'auto', bgcolor:'green', textAlign:'center', mb:1, mt:4 }}>
                    <LoginIcon/>
                </Avatar>
                <Typography component='h2' variant='h5' sx={{ textAlign:'center', mt:2}}>
                    Вхід на сайт
                </Typography>
                <LogInForm handleClose={handleClose} />
            </Paper>
            
        </Container>
    )
}