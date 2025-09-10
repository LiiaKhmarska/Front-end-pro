import { AppBar,Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {LoginPage} from './LoginPage'
import { useState, useEffect } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/userSlice';





export function Header() {

    const [showLoginPage, setShowLoginPage] = useState(false);  
    const [user, setUser] = useState('');
    // const user = useSelector(selectUser);
    
    const dispatch = useDispatch();
    useEffect(() => {
        const lsUser = localStorage.getItem('user');
        if (lsUser) {
            setUser(lsUser);
        }
        
    },[])

    function handleLogIn(event) {
        event.stopPropagation()
        setShowLoginPage(true)    
    }

    function handleLogOut() {
        dispatch(logoutUser());
        window.location.assign('/');
        localStorage.clear();
    }

    function handleCloseModal() {
        if (!showLoginPage) return;
        setShowLoginPage(false);      
    }
    
    return (
        <Box >
            <AppBar position='static' >
                <Toolbar>
                        <IconButton edge='start' size='large' color='inherit' aria-label='Menu' sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    <Typography variant='h6' sx={{ flexGrow: 1, }}>Склад "Пухнасті чотирилапки"</Typography>
                    {user&&<Typography variant='h6' sx={{mx:5}}>Привіт, { user}</Typography>}
                    {user
                        ?(<Box >
                                <Button color='error' variant="contained" sx={{border:'1px solid white'}} onClick={handleLogOut}>Вийти</Button>
                        </Box>)
                        :(<Box >
                                <Button color='success' variant="contained" sx={{border:'1px solid white'}} onClick={handleLogIn}>Увійти</Button>
                                <Button color='inherit' variant='outlined' sx={{mx:1}}>Sign-in</Button>
                        </Box>
                    )}
                              
                            
                </Toolbar>
            </AppBar>
            <ClickAwayListener onClickAway={handleCloseModal}>
                <Box style={{ width:'fit-content', margin: '1px auto'}}>
                    {showLoginPage ?
                        (<LoginPage
                            setShowLoginPage={setShowLoginPage}
                        />)
                        : null}
                </Box>
            </ClickAwayListener>

                            
             
        </Box>
    )
}

