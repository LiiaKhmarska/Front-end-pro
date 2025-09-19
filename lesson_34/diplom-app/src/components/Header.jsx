import { AppBar,Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {LoginPage} from './LoginPage'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../store/userSlice';
import { Modal } from './Modal';
import { useNavigate } from "react-router-dom";

export function Header() {

    const [open, setOpen] = useState(false);  
    const login = useSelector(selectUser);   
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    function handleLogIn(event) {
        event.stopPropagation();
        setOpen(true);
        dispatch(loginUser())
    }

    function handleLogOut() {
        dispatch(logoutUser());
        localStorage.clear();
        navigate('/')
    }
    
    return (
        <Box >
            <Modal open={open} setOpen={setOpen}>
                <LoginPage setOpen={setOpen} />
            </Modal>
            <AppBar position='static' sx={{py:1}}>
                <Toolbar>
                        <IconButton edge='start' size='large' color='inherit' aria-label='Menu' sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    <Typography variant='h6' sx={{ flexGrow: 1, }}>Склад "Пухнасті чотирилапки"</Typography>
                    {login && <Typography variant='h6' sx={{ mx: 5 }}>Привіт, { login }</Typography>}
                    {login
                        ?(<Box >
                                <Button color='error' variant="contained" sx={{border:'1px solid white'}} onClick={handleLogOut}>Вийти</Button>
                        </Box>)
                        :(<Box >
                                <Button color='success' variant="contained" sx={{border:'1px solid white'}} onClick={handleLogIn}>Увійти</Button>
                        </Box>
                    )}
                              
                            
                </Toolbar>
            </AppBar>                           
        </Box>
    )
}

