// import { ThemeButton } from './themeButton/ThemeButton';
import { Navigation } from './Navigation';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

import Diversity2Icon from '@mui/icons-material/Diversity2';

export function Header() {
    return (
        <AppBar position='static'  >          
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo' >
                    <Diversity2Icon/>
                </IconButton>
                <Typography variant='h6' component='div' >
                   Lesson 32
                </Typography>
                <Navigation />
                </Toolbar>
            
        </AppBar>
    )
}