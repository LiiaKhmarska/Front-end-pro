import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchGoods } from '../../store/goodsSlice';
import { useEffect } from "react";
import { ShowList } from './ShowList';
import { Box, Button, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddTaskIcon from '@mui/icons-material/AddTask';


export function GoodsList() {
    const dispatch = useDispatch();
    const category = useLocation().pathname;

    const categoryTitleUA = {
        '/dogs': 'собаки',
        '/cars': 'кішки',
        '/other':'інші тварини'
    }

    useEffect(() => {
        const controller = new AbortController();
      const { signal } = controller;
        dispatch(fetchGoods(category, { signal }));
        
         return () => {
        controller.abort();
      };
    }, [category, dispatch])

    
    

    return (
        <>
            <Box sx={{
                width: '100%', textAlign: 'center', m: '10px auto', p: 3, display:'flex', justifyContent: "space-around"
            }}>
                <Box sx={{my:2 }}>
                <Link to="/"><Button variant="contained"><ArrowBackIosIcon/> На головну</Button></Link>
                </Box>
                <Box sx={{my:2}}>
                <Button variant="outlined" color="success">Додати товар<AddTaskIcon sx={{ml:2}}/></Button>
                </Box>               
           </Box>
            <Typography variant="h3" sx={{textAlign:'center', mb:4}}>
                Перелік товарів категорії "{categoryTitleUA[category]}"
            </Typography>
            <ShowList />
        
        </>
    )
}