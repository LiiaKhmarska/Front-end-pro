import { Avatar, Box, Paper, Container, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { deleteGoods } from '../store/goodsSlice';



export function DeleteWarning({ setWarning, goodId, category,setUpdate }) {
    function handleClose() {
        setWarning(false)
    }

    const dispatch = useDispatch();    
    function handleDeleteItem() {
        dispatch(deleteGoods({category, goodId}))
        setWarning(false);
        setUpdate(true)
    }
    
    return (
       <Box  sx={{position:'fixed', top:0, left:0, zIndex:1, width:'100vw', height:'100vh', background:'rgba(0,0,0, 0.5)'}}>
            <Paper elevation={10} sx={{ marginTop: 1, padding: 2, position:'absolute', width:'50%', top:'25%', left:'30%' }} >
                <CloseIcon sx={{ position: 'absolute', right: 20, }} onClick={handleClose} />
                <Avatar sx={{mx:'auto', bgcolor:'red', textAlign:'center', mb:1, mt:4 }}>
                    <DeleteIcon/>
                </Avatar>
                <Typography component='h2' variant='h4' sx={{ textAlign:'center', my:7}}>
                    Видалити запис на завжди?
                </Typography>
                <Box sx={{display:'flex', justifyContent: 'space-around', my:5}}>
                    <Button variant="contained" color="error" sx={{width:'120px'}} onClick={handleDeleteItem}> Видали</Button>
                    <Button variant="contained" color="success" sx={{width:'120px'}} onClick={handleClose}> Відмінити</Button>
                </Box>           
            </Paper>       
        </Box>

    )
}