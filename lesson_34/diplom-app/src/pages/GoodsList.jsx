import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchGoods } from '../store/goodsSlice';
import { useEffect,useState} from "react";
import { CategoryPage } from './CategoryPage';
import { Box, Button, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { requestStatus } from '../store/goodsSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';
import { Header } from "../components/Header";


export function GoodsList() {
    const [update, setUpdate] = useState(false);
    const dispatch = useDispatch();
    const category = useLocation().pathname;
    const login = useSelector(selectUser);      

    const categoryTitleUA = {
        '/dogs': 'собаки',
        '/cats': 'кішки',
        '/others':'інші тварини'
    }

    useEffect(() => {
        const controller = new AbortController();
      const { signal } = controller;
        dispatch(fetchGoods(category, { signal }));
        
         return () => {
        controller.abort();
      };
    }, [category, dispatch, update])

    const status = useSelector(requestStatus); 
    
    return (
        <>
            <Header />
            <Box sx={{width: '100%', textAlign: 'center', m: '10px auto', p: 3, display:'flex', justifyContent: "space-around"}}>
                <Box sx={{my:2 }}>
                    <Link to='/'>
                        <Button variant="contained"><ArrowBackIosIcon /> На головну</Button>
                    </Link>
                </Box>
                <Box sx={{ my: 2 }}>
                    <Link to={category+'/add'}>
                        <Button variant="outlined" disabled={!login} color="success">Додати товар<AddTaskIcon sx={{ ml: 2 }} /></Button>
                    </Link>
                </Box>               
           </Box>
            <Typography variant="h3" sx={{textAlign:'center', mb:4}}>
                Перелік товарів категорії "{categoryTitleUA[category]}"
            </Typography>
            {status === 'loading' && <h2 style={{ textAlign:'center'}}>Очікуємо дані трихи затримуються...</h2>}
            {status==='rejected'&&<h2 style={{color:'plum', textAlign:'center'}}>Вибачте,що пішло не так, дані деcь заблукали...</h2>}
            <CategoryPage setUpdate={ setUpdate} />
        
        </>
    )
}

